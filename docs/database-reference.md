# Database

## raw_data_folder_description_db


::: info
- 常に root フォルダが存在する。同一の親フォルダ配下では `name` は一意である必要がある。
- ユーザーは `__open_mlops_internal_root_folder__` と同名のフォルダを作成できない。
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
| `name` | string | クエリ時決定 | Base64 エンコード必須。ASCII 以外の文字は許容しない。 |
| `parent-folder` | record | `:id_root_folder` | Base64 エンコード必須。ASCII 以外の文字は許容しない。 |
| `metadata.created-at` | datetime | フォルダ作成時点 | `time::now()` を用いること。 |
| `metadata.update-at` | datetime | フォルダ作成時点 | フォルダ内の内容に変更があった場合は時刻を更新する（ただし更新が保証されるわけではない）。`time::now()` を用いること。 |



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
        "created-at": "datetime",
        "update-at": "datetime",
        "file-type": "string",
        "file-size-byte": "int"
    },
    "flags": {
        "upload-wip": "bool",
        "upload-complete": "bool",
        "upload-fail": "bool",
        "kill-request": "bool",
        "kill-wip": "bool",
        "kill-complete": "bool"
    },
    "additional-information": "record"
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `name` | string | アップロード時に決定 | Base64 エンコード必須。ASCII 以外の文字は許容しない。 |
| `uri` | string | アップロード時に決定 | `bucket-name:/full/path` |
| `folder` | record | アップロード時に決定 | 所属するフォルダのレコード |
| `metadata.created-at` | datetime | アップロード開始時の時刻 | `time::now()` を用いること。 |
| `metadata.update-at` | datetime | 状態更新時刻 | レコードの状態を変更する場合は、必ず時刻を更新する。`time::now()` を用いること。 |
| `metadata.file-type` | string | `unknown` | `video`, `image` のいずれか。 |
| `metadata.size-byte` | int | アップロード時に決定 | ファイルサイズ。接頭辞なしのバイト単位。 |
| `flags.upload-wip` | bool | `false` | S3 にアップロード中は `true` にする。完了したら `false` に戻す。 |
| `flags.upload-complete` | bool | `false` | S3 へのアップロードが完了したら `true` にする。それ以外は `false` にする。`flags.upload-complete` が `true` の場合は、他の `upload-*` の状態に関わらず完了とみなす。 |
| `flags.upload-fail` | bool | `false` | S3 へのアップロードが失敗したら `true` にする。それ以外は `false` にする。`flags.upload-fail` が `true` の場合は、他の `upload-*` の状態に関わらず失敗とみなす。 |
| `kill-request` | bool | `false` | ファイル削除リクエスト。`true` の場合、順次 S3 から削除される。 |
| `kill-wip` | bool | `false` | 削除リクエストの処理中は `true` になる。`kill-request` の値に関わらず、このフラグが `true` の間は削除処理中とみなす。 |
| `kill-complete` | bool | `false` | S3 オブジェクトが完全に削除されたら `true` になる。`true` の場合、順次このレコードも削除される。`kill-*` フラグの状態に関わらず、このフラグが `true` なら削除完了とみなす。 |
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
