---
schema: wang-person/v1
id: p_1WN2ZD1jKMP6QBZBCmgP7K
status: active
merged_into: null
display_name: 王道明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8u65wXCTWrDYnJ1h8ZsmJ2
        subject_person_id: p_1WN2ZD1jKMP6QBZBCmgP7K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a4ByoZLT9i3p7VJqeDCw3p
          claim_id: c_8u65wXCTWrDYnJ1h8ZsmJ2
          source_id: s_JVHZQnPB2cP4yBjKvKSE2T
          stance: supports
          locator: CBDB:312142
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312142）
          source: &a1
            id: s_JVHZQnPB2cP4yBjKvKSE2T
            source_type: api_record
            title: 中国历代人物传记资料库：王道明（CBDB 312142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312142&o=json
            external_identifier: CBDB:312142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_agpihKHFvqGkWRRZV714AQ
        subject_person_id: p_1WN2ZD1jKMP6QBZBCmgP7K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道明，明人物。嘉靖二十九年進士，籍贯陽曲。（中国历代人物传记资料库 CBDB 312142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8hREgydi2X_KrzrvSwixEQ
          claim_id: c_agpihKHFvqGkWRRZV714AQ
          source_id: s_JVHZQnPB2cP4yBjKvKSE2T
          stance: supports
          locator: CBDB:312142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NlZwF4KVo_qVx_RX4WKsZW
        subject_person_id: p_Lg426XjwtGThS6GKpMTASR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1WN2ZD1jKMP6QBZBCmgP7K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A8LlY5drUVfaJfdit8o_st
          claim_id: c_NlZwF4KVo_qVx_RX4WKsZW
          source_id: s_Vwafy-jfoigc5GJTURQ7qV
          stance: supports
          locator: CBDB：兄弟 王道行（126744）之父／母 王尚智
          quotation: null
          interpretation_note: 由兄弟关系推断：王道明 与 王道行 为同胞（CBDB 记「兄」），王道行 之父／母即 王道明 之父／母。
          source:
            id: s_Vwafy-jfoigc5GJTURQ7qV
            source_type: api_record
            title: 中国历代人物传记资料库：王道明（CBDB 312142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312142&o=json
            external_identifier: CBDB:312142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lg426XjwtGThS6GKpMTASR
        status: active
        display_name: 王尚智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xfNaRWqxKoEFUFegCrbbRW
        subject_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_1WN2ZD1jKMP6QBZBCmgP7K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s1rVVKnuutskEtYQ6PO0GN
          claim_id: c_xfNaRWqxKoEFUFegCrbbRW
          source_id: s_Vwafy-jfoigc5GJTURQ7qV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126744 王道行）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Vwafy-jfoigc5GJTURQ7qV
            source_type: api_record
            title: 中国历代人物传记资料库：王道明（CBDB 312142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312142&o=json
            external_identifier: CBDB:312142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1FCXxHhqD3wzUFWARQDXSE
        status: active
        display_name: 王道行
        merged_into_person_id: null
---

# 王道明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道明 | accepted |
| bio.summary | 王道明，明人物。嘉靖二十九年進士，籍贯陽曲。（中国历代人物传记资料库 CBDB 312142） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lg426XjwtGThS6GKpMTASR | 王尚智 | accepted |
| other | p_1FCXxHhqD3wzUFWARQDXSE | 王道行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道明（CBDB 312142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312142&o=json)
