---
schema: wang-person/v1
id: p_gBwRWdErARQJVzB6EHJVfE
status: active
merged_into: null
display_name: 王朝棟
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GAFSFJ2SAJ82kwFNvpuvi
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pAtiuWLvjBiJYtX2t1WCJ7
          claim_id: c_3GAFSFJ2SAJ82kwFNvpuvi
          source_id: s_jJDnwRUEvNWCDgr8y4RrVL
          stance: supports
          locator: CBDB:212086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212086）
          source: &a1
            id: s_jJDnwRUEvNWCDgr8y4RrVL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝棟（CBDB 212086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212086&o=json
            external_identifier: CBDB:212086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8xK3MWa8A466yD9F4QgMxU
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝棟，明人物。隆慶五年進士，籍贯深澤，曾任守備。（中国历代人物传记资料库 CBDB 212086）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tlrPfyxwe94q8LE_3WCWEw
          claim_id: c_8xK3MWa8A466yD9F4QgMxU
          source_id: s_jJDnwRUEvNWCDgr8y4RrVL
          stance: supports
          locator: CBDB:212086
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_esYuCObzkoLGQbY4pVD2UY
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUWdG6365fFceLqaCGEIL1
          claim_id: c_esYuCObzkoLGQbY4pVD2UY
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4BCKDC9vCQZBt84PMj5mSb
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 206012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206012&o=json
            external_identifier: CBDB:206012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_feVTPN7HCaS1BxqehN6dAD
        status: active
        display_name: 王度
        merged_into_person_id: null
    - claim:
        id: c_s60cYB8wNsotLB9jTdWRx-
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DCmdGAKqHdH9yKYnhjgZf5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BmuT6S2zL2A2H1E91QAVoe
          claim_id: c_s60cYB8wNsotLB9jTdWRx-
          source_id: s_ckg7uJEWE_5mM0Zcq7h1QV
          stance: supports
          locator: CBDB：兄弟 王度（206012）之父／母 王朝棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廉 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王廉 之父／母。
          source:
            id: s_ckg7uJEWE_5mM0Zcq7h1QV
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 212090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212090&o=json
            external_identifier: CBDB:212090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCmdGAKqHdH9yKYnhjgZf5
        status: active
        display_name: 王廉
        merged_into_person_id: null
    - claim:
        id: c_RjZth7btuv5rbnTYAZmi9k
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FwopUYPpXiD1ii9Zfys6n8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z90OipmwiI8u_bwu1JxPUl
          claim_id: c_RjZth7btuv5rbnTYAZmi9k
          source_id: s_9VXyz77IGEZMA4BYth4UXR
          stance: supports
          locator: CBDB：兄弟 王度（206012）之父／母 王朝棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王庶 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王庶 之父／母。
          source:
            id: s_9VXyz77IGEZMA4BYth4UXR
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 212091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212091&o=json
            external_identifier: CBDB:212091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwopUYPpXiD1ii9Zfys6n8
        status: active
        display_name: 王庶
        merged_into_person_id: null
    - claim:
        id: c_xz5Qh2DhpcD_k5KSGbAmsM
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i5BneAts78P9AvsH5HQobr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tax9O7fTCYlTLtL7ZhrME4
          claim_id: c_xz5Qh2DhpcD_k5KSGbAmsM
          source_id: s_JG5nN4DhEM0h0Uik4Swxrm
          stance: supports
          locator: CBDB：兄弟 王度（206012）之父／母 王朝棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王府 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王府 之父／母。
          source:
            id: s_JG5nN4DhEM0h0Uik4Swxrm
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 212089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json
            external_identifier: CBDB:212089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i5BneAts78P9AvsH5HQobr
        status: active
        display_name: 王府
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝棟 | accepted |
| bio.summary | 王朝棟，明人物。隆慶五年進士，籍贯深澤，曾任守備。（中国历代人物传记资料库 CBDB 212086） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_feVTPN7HCaS1BxqehN6dAD | 王度 | accepted |
| children | p_DCmdGAKqHdH9yKYnhjgZf5 | 王廉 | accepted |
| children | p_FwopUYPpXiD1ii9Zfys6n8 | 王庶 | accepted |
| children | p_i5BneAts78P9AvsH5HQobr | 王府 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝棟（CBDB 212086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212086&o=json)
- [中国历代人物传记资料库：王度（CBDB 206012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206012&o=json)
- [中国历代人物传记资料库：王府（CBDB 212089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json)
- [中国历代人物传记资料库：王廉（CBDB 212090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212090&o=json)
- [中国历代人物传记资料库：王庶（CBDB 212091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212091&o=json)
