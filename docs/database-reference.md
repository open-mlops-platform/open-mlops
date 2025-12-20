# Database

## raw_data_folder_description_db


::: info
- 必ずrootフォルダが存在する。共通するペアレントではnameは一意である必要がある。
- `__open_mlops_internal_root_folder__`と同一名のフォルダはユーザーは作成できない。
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
| `name` | string | クエリ時決定 | base64エンコード必須。非asciiは許容しない。 |
| `parent-folder` | record | `:id_root_folder` | base64エンコード必須。非asciiは許容しない。 |
| `metadata.created-at` | datetime | フォルダ作成時点 | `time::now()`を用いること。 |
| `metadata.update-at` | datetime | フォルダ作成時点 | フォルダ内部のコンテンツに変化があった場合、時刻を更新する。ただし時刻の更新は保証されない。`time::now()`を用いること。 |



## raw_data_db

### 概要

S3互換のオブジェクトストレージに保存されたデータの実態を管理する。

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
| `name` | string | アップロード時に決定 | base64エンコード必須。非asciiは許容しない。 |
| `uri` | string | アップロード時に決定 | `bucket-name:/full/path` |
| `folder` | record | アップロード時に決定 | 所属するフォルダのレコード |
| `metadata.created-at` | datetime | アップロード開始時の時刻 | `time::now()`を用いること。 |
| `metadata.update-at` | datetime | ステート更新時刻 | レコードのステートを変更する場合は必ず時刻を更新する。`time::now()`を用いること。 |
| `metadata.file-type` | string | `unknown` | `video`, `image`のいずれか。 |
| `metadata.size-byte` | int | アップロード時に決定 | ファイルサイズ。接頭辞なしのバイト単位。 |
| `flags.upload-wip` | bool | `false` | S3にアップロード中の場合には`true`にする。アップロードが完了次第このフラグを`false`にする。 |
| `flags.upload-complete` | bool | `false` | S3にアップロードが完了した場合は`true`にする。それ以外の状態では`false`にする。他の`upload-wip`の状態に関わらず、`flags.upload-complete`が``true`である場合は完了とみなす。 |
| `flags.upload-fail` | bool | `false` | S3にアップロードが失敗した場合は`true`にする。それ以外の状態では`false`にする。他の`upload-*`の状態に関わらず、`flags.upload-fail`が``true`である場合は失敗とみなす。 |
| `kill-request` | bool | `false` | ファイル削除リクエスト。このフラグが`true`の時は順次S3から削除される。 |
| `kill-wip` | bool | `false` | ファイル削除リクエストが進行中の時は`true`になる。`kill-request`の状態に関わらずこのフラグが`true`の場合、削除が進行中であると見なす。 |
| `kill-complete` | bool | `false` | このフラグはS3オブジェクトが完全に削除された時に`true`になる。このフラグが`true`の時は順次このレコードも削除される。 他の`kill-*`フラグの状態に関わらずこのフラグが`true`の場合、S3オブジェクトが完全に削除されたと見なす。|
| `additional-information` | record | none | ファイルタイプに応じてステートや追加のメタ情報が保存されたレコードへのリンクが記述される。 |

## adi_video_db
`additional-information-database`のVideoバージョン

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
`additional-information-database`のImageバージョン

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
