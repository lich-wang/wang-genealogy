---
schema: wang-person/v1
id: p_8yEkMMZhbwZ7U5KkErHEa1
status: active
merged_into: null
display_name: 王曛
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNZY7tZqENDW3R8Mp96nvs
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HtHHbGFuVKC4AFW21vJ77k
          claim_id: c_tNZY7tZqENDW3R8Mp96nvs
          source_id: s_ChM3EnsLAqB6vEggCX84uQ
          stance: supports
          locator: CBDB:322412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322412）
          source: &a1
            id: s_ChM3EnsLAqB6vEggCX84uQ
            source_type: api_record
            title: 中国历代人物传记资料库：王曛（CBDB 322412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322412&o=json
            external_identifier: CBDB:322412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e385KchnQ1qR3VEM9cJLPh
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曛，明人物。宣德五年進士，籍贯慈溪，曾任知縣。（中国历代人物传记资料库 CBDB 322412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WzlaiqDYyjaDK6j3JQ5wB-
          claim_id: c_e385KchnQ1qR3VEM9cJLPh
          source_id: s_ChM3EnsLAqB6vEggCX84uQ
          stance: supports
          locator: CBDB:322412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_E7XLA1QLMSB27qLoaVccHv
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKNB2W8t4x8oH5Bx-Cq3w8
          claim_id: c_E7XLA1QLMSB27qLoaVccHv
          source_id: s_ChM3EnsLAqB6vEggCX84uQ
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PgnoAWh3cGCvbB7v53hNcS
        status: active
        display_name: 王復
        merged_into_person_id: null
    - claim:
        id: c__YPXqBL4G0Zjq7SktEQRyY
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7UnD933xA6nLNUs4TGF4jP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3rVEfzTqLu664DCt9XRwW
          claim_id: c__YPXqBL4G0Zjq7SktEQRyY
          source_id: s_C2W96XLed9-2ZgGBxMxmDj
          stance: supports
          locator: CBDB：兄弟 王復（204673）之父／母 王曛
          quotation: null
          interpretation_note: 由兄弟关系推断：王來 与 王復 为同胞（CBDB 记「弟」），王復 之父／母即 王來 之父／母。
          source:
            id: s_C2W96XLed9-2ZgGBxMxmDj
            source_type: api_record
            title: 中国历代人物传记资料库：王來（CBDB 322415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322415&o=json
            external_identifier: CBDB:322415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7UnD933xA6nLNUs4TGF4jP
        status: active
        display_name: 王來
        merged_into_person_id: null
    - claim:
        id: c_X-WFK6bevsj9ZpzkRmdQB2
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QzAbcHGSDqV43mwRCeQXJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWXxyFs0zsZPPuivkZ4TDu
          claim_id: c_X-WFK6bevsj9ZpzkRmdQB2
          source_id: s_qn1EVVJEc9XgjrOLoRKMFe
          stance: supports
          locator: CBDB：兄弟 王復（204673）之父／母 王曛
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王復 为同胞（CBDB 记「兄」），王復 之父／母即 王謙 之父／母。
          source:
            id: s_qn1EVVJEc9XgjrOLoRKMFe
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 322417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322417&o=json
            external_identifier: CBDB:322417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzAbcHGSDqV43mwRCeQXJW
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_9YYlt_JmTjN-Ch-x4OY9vl
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WimAa966h9CQCAcmYPid3X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IQcacJIF30RmDcCzO-q2qH
          claim_id: c_9YYlt_JmTjN-Ch-x4OY9vl
          source_id: s_f9hZ9u0Bhf8thKfIvgnGQJ
          stance: supports
          locator: CBDB：兄弟 王復（204673）之父／母 王曛
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼎 与 王復 为同胞（CBDB 记「兄」），王復 之父／母即 王鼎 之父／母。
          source:
            id: s_f9hZ9u0Bhf8thKfIvgnGQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 322416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json
            external_identifier: CBDB:322416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WimAa966h9CQCAcmYPid3X
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曛 | accepted |
| bio.summary | 王曛，明人物。宣德五年進士，籍贯慈溪，曾任知縣。（中国历代人物传记资料库 CBDB 322412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PgnoAWh3cGCvbB7v53hNcS | 王復 | accepted |
| children | p_7UnD933xA6nLNUs4TGF4jP | 王來 | accepted |
| children | p_QzAbcHGSDqV43mwRCeQXJW | 王謙 | accepted |
| children | p_WimAa966h9CQCAcmYPid3X | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 322416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322416&o=json)
- [中国历代人物传记资料库：王來（CBDB 322415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322415&o=json)
- [中国历代人物传记资料库：王謙（CBDB 322417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322417&o=json)
- [中国历代人物传记资料库：王曛（CBDB 322412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322412&o=json)
