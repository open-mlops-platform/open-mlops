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
        "updated-at": "datetime",
    },
    "states": {
        "kill-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-updated-at": "datetime",
        }
    },
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `name` | string | クエリ時決定 |  登録の際は、必ず正規化を行う |
| `parent-folder` | record | `:id_root_folder` | - |
| `metadata.created-at` | datetime | フォルダ作成時点 | `time::now()` を用いること。 |
| `metadata.updated-at` | datetime | フォルダ作成時点 | フォルダ内の内容に変更があった場合は時刻を更新する（ただし更新が保証されるわけではない）。`time::now()` を用いること。 |
| `states.kill-state.state` | string | `none` | ファイル削除リクエストのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.kill-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.kill-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |

### ルートフォルダ

```json
{
    "id": "raw_data_folder_description_db:__open_mlops_internal_root_folder__",
    "name": "__open_mlops_internal_root_folder__",
    "parent-folder": "null",    
    "metadata": {
        "created-at": "null",
        "updated-at": "null",
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
            "state-updated-at": "datetime",
        },
        "upload-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-updated-at": "datetime",
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
| `metadata.record-created-at` | datetime | アップロード開始時の時刻 | `time::now()` を用いること。 |
| `metadata.upload-complete-at` | datetime | アップロード完了時の時刻 | 完了時に時刻を更新する。`time::now()` を用いること。 |
| `metadata.file-type` | string | `unknown` | `video`, `image` のいずれか。 |
| `metadata.file-size-byte` | int | アップロード時に決定 | ファイルサイズ。接頭辞なしのバイト単位。 |
| `states.kill-state.state` | string | `none` | ファイル削除リクエストのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.kill-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.kill-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.upload-state.state` | string | `none` | ファイルアップロードのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.upload-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.upload-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `additional-information` | record | none | ファイル種別に応じた状態や追加メタ情報を保持するレコードへのリンクを格納する。 |

## adi_video_db
`additional-information-database` の Video 版

```json
{
    "id": "record",
    "thumbnail-uri": "string",
    "hls": "record",
    "encoded-video-uri": "string",
    "states": {
        "hls-encode-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-updated-at": "datetime",
        },
        "metadata-create-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-updated-at": "datetime",
        },
    },
    "metadata": {
        "length-sec": "float",
        "avg-fps": "float",
        "frame-count": "int",
        "height-px": "int",
        "width-px": "int"
    }
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `thumbnail-uri` | string | エンコード完了時に決定 | サムネイルの保存先。 |
| `hls` | record | エンコード完了時に決定 | HLS の出力情報レコード。 |
| `states.hls-encode-state.state` | string | `none` | HLS 生成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.hls-encode-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.hls-encode-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata-create-state.state` | string | `none` | メタデータ作成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.metadata-create-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata-create-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `encoded-video-uri` | string | エンコード完了時に決定 | エンコード済み動画の保存先。 |
| `metadata.length-sec` | float | 解析完了時に決定 | 動画長（秒）。 |
| `metadata.avg-fps` | float | 解析完了時に決定 | 平均 FPS。 |
| `metadata.frame-count` | int | 解析完了時に決定 | フレーム数。 |
| `metadata.height-px` | int | 解析完了時に決定 | 高さ（px）。 |
| `metadata.width-px` | int | 解析完了時に決定 | 幅（px）。 |

## adi_image_db
`additional-information-database` の Image 版

```json
{
    "id": "record",
    "webp-uri": "string",
    "states": {
        "webp-encode-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-updated-at": "datetime",
        },
        "metadata-create-state": {
            "state": "string",
            "wip-start-at": "datetime",
            "state-updated-at": "datetime",
        },
    },
    "metadata": {
        "height-px": "int",
        "width-px": "int"
    }
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `webp-uri` | string | エンコード完了時に決定 | WebP の保存先。 |
| `states.webp-encode-state.state` | string | `none` | WebP 生成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.webp-encode-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.webp-encode-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata-create-state.state` | string | `none` | メタデータ作成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.metadata-create-state.wip-start-at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata-create-state.state-updated-at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `metadata.height-px` | int | 解析完了時に決定 | 高さ（px）。 |
| `metadata.width-px` | int | 解析完了時に決定 | 幅（px）。 |

## dataset_description_db
