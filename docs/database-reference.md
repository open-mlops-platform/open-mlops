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
    "parent_folder": "record",    
    "metadata": {
        "created_at": "datetime",
        "updated_at": "datetime",
    },
    "states": {
        "kill_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        }
    },
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `name` | string | クエリ時決定 |  登録の際は、必ず正規化を行う |
| `parent_folder` | record | `:id_root_folder` | - |
| `metadata.created_at` | datetime | フォルダ作成時点 | `time::now()` を用いること。 |
| `metadata.updated_at` | datetime | フォルダ作成時点 | フォルダ内の内容に変更があった場合は時刻を更新する（ただし更新が保証されるわけではない）。`time::now()` を用いること。 |
| `states.kill_state.state` | string | `none` | ファイル削除リクエストのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.kill_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.kill_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |

### ルートフォルダ

```json
{
    "id": "raw_data_folder_description_db:__open_mlops_internal_root_folder__",
    "name": "__open_mlops_internal_root_folder__",
    "parent_folder": "null",    
    "metadata": {
        "created_at": "null",
        "updated_at": "null",
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
        "record_created_at": "datetime",
        "upload_complete_at": "datetime",
        "file_type": "string",
        "file_size_byte": "int"
    },
    "states": {
        "kill_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        },
        "upload_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        }
    },
    "additional_information": "record"
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `name` | string | アップロード時に決定 | 登録の際は、必ず正規化(`^[\p{L}\p{N} _\-+\u3000]{1,64}$`)を行う |
| `uri` | string | アップロード時に決定 | `bucket-name:/full/path` |
| `folder` | record | アップロード時に決定 | 所属するフォルダのレコード |
| `metadata.record_created_at` | datetime | アップロード開始時の時刻 | `time::now()` を用いること。 |
| `metadata.upload_complete_at` | datetime | アップロード完了時の時刻 | 完了時に時刻を更新する。`time::now()` を用いること。 |
| `metadata.file_type` | string | `unknown` | `video`, `image` のいずれか。 |
| `metadata.file_size_byte` | int | アップロード時に決定 | ファイルサイズ。接頭辞なしのバイト単位。 |
| `states.kill_state.state` | string | `none` | ファイル削除リクエストのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.kill_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.kill_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.upload_state.state` | string | `none` | ファイルアップロードのステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.upload_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.upload_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `additional_information` | record | none | ファイル種別に応じた状態や追加メタ情報を保持するレコードへのリンクを格納する。 |

## adi_video_db
`additional-information-database` の Video 版

```json
{
    "id": "record",
    "thumbnail_uri": "string",
    "hls": "record",
    "encoded_video_uri": "string",
    "states": {
        "hls_encode_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        },
        "metadata_create_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        },
    },
    "metadata": {
        "length_sec": "float",
        "avg_fps": "float",
        "frame_count": "int",
        "height_px": "int",
        "width_px": "int"
    }
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `thumbnail_uri` | string | エンコード完了時に決定 | サムネイルの保存先。 |
| `hls` | record | エンコード完了時に決定 | HLS の出力情報レコード。 |
| `states.hls_encode_state.state` | string | `none` | HLS 生成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.hls_encode_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.hls_encode_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata_create_state.state` | string | `none` | メタデータ作成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.metadata_create_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata_create_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `encoded_video_uri` | string | エンコード完了時に決定 | エンコード済み動画の保存先。 |
| `metadata.length_sec` | float | 解析完了時に決定 | 動画長（秒）。 |
| `metadata.avg_fps` | float | 解析完了時に決定 | 平均 FPS。 |
| `metadata.frame_count` | int | 解析完了時に決定 | フレーム数。 |
| `metadata.height_px` | int | 解析完了時に決定 | 高さ（px）。 |
| `metadata.width_px` | int | 解析完了時に決定 | 幅（px）。 |

## adi_image_db
`additional-information-database` の Image 版

```json
{
    "id": "record",
    "webp_uri": "string",
    "states": {
        "webp_encode_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        },
        "metadata_create_state": {
            "state": "string",
            "wip_start_at": "datetime",
            "state_updated_at": "datetime",
        },
    },
    "metadata": {
        "height_px": "int",
        "width_px": "int"
    }
}
```

| parameter | type | default | rule |
| - | - | - | - |
| `id` | record | レコード作成時に自動決定 | - |
| `webp_uri` | string | エンコード完了時に決定 | WebP の保存先。 |
| `states.webp_encode_state.state` | string | `none` | WebP 生成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.webp_encode_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.webp_encode_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata_create_state.state` | string | `none` | メタデータ作成のステート変化を記録する。`none` -> `requested` -> `wip` -> `complete`の一方向でステートが変化する。すべての状態から`failed`に変化することができる。 |
| `states.metadata_create_state.wip_start_at` | datetime | empty | `requested` -> `wip`にステートが変化した時刻を記録。`time::now()` を用いること。 |
| `states.metadata_create_state.state_updated_at` | datetime | empty | ステートが変化した時刻を記録。`time::now()` を用いること。 |
| `metadata.height_px` | int | 解析完了時に決定 | 高さ（px）。 |
| `metadata.width_px` | int | 解析完了時に決定 | 幅（px）。 |

## dataset_description_db
