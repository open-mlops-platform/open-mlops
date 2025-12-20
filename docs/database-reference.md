# Database

## raw_data_folder_description_db


::: info
- 常に root フォルダが存在する。同一の親フォルダ配下では `name` は一意である必要がある。
- ユーザーは `__open_mlops_internal_root_folder__` と同名のフォルダを作成できない。
- フォルダ構造は頂点をrootとする木を形成しなければならない。
- 木構造にrootが存在しないフォルダネットワークを形成しているグラフがあれば削除する。(= 親フォルダが消えれば子フォルダも消える)
:::

```json
{
    "id": "record",
    "name": "string",
    "parent-folder": "record",    
    "metadata": {
        "created-at": "datetime",
        "update-at": "datetime",
    }
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `name` | string | クエリ時決定 |  登録の際は、必ず正規化を行う |
| `parent-folder` | record | `:id_root_folder` | - |
| `metadata.created-at` | datetime | フォルダ作成時点 | `time::now()` を用いること。 |
| `metadata.update-at` | datetime | フォルダ作成時点 | フォルダ内の内容に変更があった場合は時刻を更新する（ただし更新が保証されるわけではない）。`time::now()` を用いること。 |

### ルートフォルダ

```json
{
    "id": "raw_data_folder_description_db:__open_mlops_internal_root_folder__",
    "name": "__open_mlops_internal_root_folder__",
    "parent-folder": "null",    
    "metadata": {
        "created-at": "null",
        "update-at": "null",
    }
}
```

## raw_data_db

### 概要

S3 互換オブジェクトストレージに保存されたデータの実体を管理する。

### スキーマ

```json
{
    "id": "record",
    "name": "string",
    "uri": "string",
    "folder": "record",
    "metadata": {
        "record-created-at": "datetime",
        "upload-complete-at": "datetime",
        "file-type": "string",
        "file-size-byte": "int"
    },
    "states": {
        "kill-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-update-at": "datetime",
        },
        "upload-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-update-at": "datetime",
        }
    },
    "additional-information": "record"
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `name` | string | アップロード時に決定 | 登録の際は、必ず正規化(`^[\p{L}\p{N} _\-+\u3000]{1,64}$`)を行う |
| `uri` | string | アップロード時に決定 | `bucket-name:/full/path` |
| `folder` | record | アップロード時に決定 | 所属するフォルダのレコード |
| `metadata.created-at` | datetime | アップロード開始時の時刻 | `time::now()` を用いること。 |
| `metadata.update-at` | datetime | 状態更新時刻 | レコードの状態を変更する場合は、必ず時刻を更新する。`time::now()` を用いること。 |
| `metadata.file-type` | string | `unknown` | `video`, `image` のいずれか。 |
| `metadata.file-size-byte` | int | アップロード時に決定 | ファイルサイズ。接頭辞なしのバイト単位。 |
| `states.kill-state.state` | string | `none` | ファイル削除リクエストのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.kill-state.wip-start-at` | string | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.kill-state.update-at` | string | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.upload-state.state` | string | `none` | ファイルアップロードのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.upload-state.wip-start-at` | string | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.upload-state.update-at` | string | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `additional-information` | record | none | ファイル種別に応じた状態や追加メタ情報を保持するレコードへのリンクを格納する。 |

## adi_video_db
`additional-information-database` の Video 版

```json
{
    "id": "record",
    "thumbnail-uri": "string",
    "hls": "record",
    "hls-encode-state": {
        "queued": "bool",
        "wip": "bool",
        "complete": "bool"
    },
    "encoded-video-uri": "string",
    "metadata": {
        "length-sec": "float",
        "avg-fps": "float",
        "frame-count": "int",
        "height-px": "int",
        "width-px": "int"
    }
}
```

## adi_image_db
`additional-information-database` の Image 版

```json
{
    "id": "record",
    "webp-uri": "string",
    "webp-encode-state": {
        "queued": "bool",
        "wip": "bool",
        "complete": "bool"
    },
    "metadata": {
        "height-px": "int",
        "width-px": "int"
    }
}
```

## dataset_description_db
