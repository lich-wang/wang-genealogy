---
schema: wang-person/v1
id: p_FKyKqw6YjwEf5zNLcAE8rh
status: active
merged_into: null
display_name: 王彥清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MgvBBPPQMt8ESQN6kaRgPC
        subject_person_id: p_FKyKqw6YjwEf5zNLcAE8rh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dVrin78xP4wR75hLCxVEvj
          claim_id: c_MgvBBPPQMt8ESQN6kaRgPC
          source_id: s_cfLMzLvPsE8FCNizSx3JQH
          stance: supports
          locator: CBDB:254111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254111）
          source: &a1
            id: s_cfLMzLvPsE8FCNizSx3JQH
            source_type: api_record
            title: 中国历代人物传记资料库：王彥清（CBDB 254111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254111&o=json
            external_identifier: CBDB:254111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vf312Hyi81NwTCWHJjQ324
        subject_person_id: p_FKyKqw6YjwEf5zNLcAE8rh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥清，明人物。建文二年殿試進士，籍贯南昌。（中国历代人物传记资料库 CBDB 254111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b0h1PeGBKPrDUciS3VgtTI
          claim_id: c_Vf312Hyi81NwTCWHJjQ324
          source_id: s_cfLMzLvPsE8FCNizSx3JQH
          stance: supports
          locator: CBDB:254111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zXj2i7B_5aq8l7zkQT8XRR
        subject_person_id: p_HuYEH2YSebAHXaYh9GTn72
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FKyKqw6YjwEf5zNLcAE8rh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P_70gCGsgLomSryhDw98oa
          claim_id: c_zXj2i7B_5aq8l7zkQT8XRR
          source_id: s_zz9PUwX4STyJwROgebqQRK
          stance: supports
          locator: CBDB：兄弟 王高（126625）之父／母 王繼和
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥清 与 王高 为同胞（CBDB 记「兄」），王高 之父／母即 王彥清 之父／母。
          source:
            id: s_zz9PUwX4STyJwROgebqQRK
            source_type: api_record
            title: 中国历代人物传记资料库：王彥清（CBDB 254111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254111&o=json
            external_identifier: CBDB:254111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HuYEH2YSebAHXaYh9GTn72
        status: active
        display_name: 王繼和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9VbkV6K2UB-DSazMQHvTXF
        subject_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FKyKqw6YjwEf5zNLcAE8rh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRLDj7Pv0RnzJlr9sQqt14
          claim_id: c_9VbkV6K2UB-DSazMQHvTXF
          source_id: s_zz9PUwX4STyJwROgebqQRK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126625 王高）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zz9PUwX4STyJwROgebqQRK
            source_type: api_record
            title: 中国历代人物传记资料库：王彥清（CBDB 254111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254111&o=json
            external_identifier: CBDB:254111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUQVWk8JE4APmBfj8pSMKj
        status: active
        display_name: 王高
        merged_into_person_id: null
---

# 王彥清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥清 | accepted |
| bio.summary | 王彥清，明人物。建文二年殿試進士，籍贯南昌。（中国历代人物传记资料库 CBDB 254111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HuYEH2YSebAHXaYh9GTn72 | 王繼和 | accepted |
| other | p_AUQVWk8JE4APmBfj8pSMKj | 王高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥清（CBDB 254111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254111&o=json)
