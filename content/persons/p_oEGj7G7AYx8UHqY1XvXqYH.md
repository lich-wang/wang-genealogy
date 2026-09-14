---
schema: wang-person/v1
id: p_oEGj7G7AYx8UHqY1XvXqYH
status: active
merged_into: null
display_name: 王承鑑
cbdb_id: 238218
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJ6hDjUJTCkVPHXqrqTHPA
        subject_person_id: p_oEGj7G7AYx8UHqY1XvXqYH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承鑑，明人物。正统七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 238218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LozG0gC0iQDFEsgZYxkOeJ
          claim_id: c_NJ6hDjUJTCkVPHXqrqTHPA
          source_id: s_EGr9JTCRQXXTsnFNhUP9f8
          stance: supports
          locator: CBDB:238218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EGr9JTCRQXXTsnFNhUP9f8
            source_type: api_record
            title: 中国历代人物传记资料库：王承鑑（CBDB 238218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238218&o=json
            external_identifier: CBDB:238218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_81NVE5TXE9bvDYuWQLyph9
        subject_person_id: p_oEGj7G7AYx8UHqY1XvXqYH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MjUoPCvD9fYn4AU8mAcibK
          claim_id: c_81NVE5TXE9bvDYuWQLyph9
          source_id: s_EGr9JTCRQXXTsnFNhUP9f8
          stance: supports
          locator: CBDB:238218
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u6m4tghDtYAcRaFAV2V8j8
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oEGj7G7AYx8UHqY1XvXqYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PVw_VGuXKXwr-z_2mD91h
          claim_id: c_u6m4tghDtYAcRaFAV2V8j8
          source_id: s_YDYMvYoq6wWsNcRxEd7-Bl
          stance: supports
          locator: CBDB：兄弟 王理（126681）之父／母 王充榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王承鑑 与 王理 为同胞（CBDB 记「弟」），王理 之父／母即 王承鑑 之父／母。
          source:
            id: s_YDYMvYoq6wWsNcRxEd7-Bl
            source_type: api_record
            title: 中国历代人物传记资料库：王承鑑（CBDB 238218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238218&o=json
            external_identifier: CBDB:238218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZvn7tH7hwLzHZ4aSkjukU
        status: active
        display_name: 王充榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bk6d0-w17q8bWFuJKcJXUb
        subject_person_id: p_UigxC39qu348GRPzwB2VV6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oEGj7G7AYx8UHqY1XvXqYH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2zCnwy2EeQdkxt2VcOf2Oy
          claim_id: c_bk6d0-w17q8bWFuJKcJXUb
          source_id: s_YDYMvYoq6wWsNcRxEd7-Bl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YDYMvYoq6wWsNcRxEd7-Bl
            source_type: api_record
            title: 中国历代人物传记资料库：王承鑑（CBDB 238218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238218&o=json
            external_identifier: CBDB:238218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
---

# 王承鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承鑑，明人物。正统七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 238218） | accepted |
| name.primary | 王承鑑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nZvn7tH7hwLzHZ4aSkjukU | 王充榮 | accepted |
| other | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承鑑（CBDB 238218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238218&o=json)
