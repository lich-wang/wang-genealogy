---
schema: wang-person/v1
id: p_Lg426XjwtGThS6GKpMTASR
status: active
merged_into: null
display_name: 王尚智
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1mYZVMaxK6uximjHSS47TM
        subject_person_id: p_Lg426XjwtGThS6GKpMTASR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_93yaAqDWFdtfZw6NvWd8XV
          claim_id: c_1mYZVMaxK6uximjHSS47TM
          source_id: s_8yp7G1z4Uv72Nhb6MUbExP
          stance: supports
          locator: CBDB:312138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312138）
          source: &a1
            id: s_8yp7G1z4Uv72Nhb6MUbExP
            source_type: api_record
            title: 中国历代人物传记资料库：王尚智（CBDB 312138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312138&o=json
            external_identifier: CBDB:312138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5zdD571asvZEFwf9CzTBZ
        subject_person_id: p_Lg426XjwtGThS6GKpMTASR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚智，明人物。嘉靖二十九年進士，籍贯陽曲，曾任巡檢。（中国历代人物传记资料库 CBDB 312138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YjYnYuznarCAFvoIuk7Oz3
          claim_id: c_T5zdD571asvZEFwf9CzTBZ
          source_id: s_8yp7G1z4Uv72Nhb6MUbExP
          stance: supports
          locator: CBDB:312138
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BFvf2bt6f4Yy7D56yth8Dn
        subject_person_id: p_oaNDfLCNACocvS6e5dX6tR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lg426XjwtGThS6GKpMTASR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNbJOZ7DSVeVm5U4u092w1
          claim_id: c_BFvf2bt6f4Yy7D56yth8Dn
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_Nr2qY755GTwgwauW1Hdu83
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 126744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json
            external_identifier: CBDB:126744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oaNDfLCNACocvS6e5dX6tR
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children:
    - claim:
        id: c_-2vhI-zDijpF_uGyp3bQSB
        subject_person_id: p_Lg426XjwtGThS6GKpMTASR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KeQVBqeldGrNbycbiu07z
          claim_id: c_-2vhI-zDijpF_uGyp3bQSB
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_1FCXxHhqD3wzUFWARQDXSE
        status: active
        display_name: 王道行
        merged_into_person_id: null
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
        id: p_1WN2ZD1jKMP6QBZBCmgP7K
        status: active
        display_name: 王道明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚智 | accepted |
| bio.summary | 王尚智，明人物。嘉靖二十九年進士，籍贯陽曲，曾任巡檢。（中国历代人物传记资料库 CBDB 312138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oaNDfLCNACocvS6e5dX6tR | 王鼎 | accepted |
| children | p_1FCXxHhqD3wzUFWARQDXSE | 王道行 | accepted |
| children | p_1WN2ZD1jKMP6QBZBCmgP7K | 王道明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道明（CBDB 312142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312142&o=json)
- [中国历代人物传记资料库：王道行（CBDB 126744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json)
- [中国历代人物传记资料库：王尚智（CBDB 312138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312138&o=json)
