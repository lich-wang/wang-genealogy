---
schema: wang-person/v1
id: p_Fn3VWmbwHWaLfGAks8JyJ5
status: active
merged_into: null
display_name: 王守正
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GD8cA7GeiJUNshuch76YCb
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MfuywH92UkXNu11vAhX4qC
          claim_id: c_GD8cA7GeiJUNshuch76YCb
          source_id: s_i2UaexLr7DobyCqJATPx7L
          stance: supports
          locator: CBDB:312974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312974）
          source: &a1
            id: s_i2UaexLr7DobyCqJATPx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 312974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312974&o=json
            external_identifier: CBDB:312974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N8HLtiuLQ4GVAYXJrTJZG8
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正，明人物。嘉靖二十九年進士，籍贯安化。（中国历代人物传记资料库 CBDB 312974）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gbK8AWRwcsKk0qwYBAyvYe
          claim_id: c_N8HLtiuLQ4GVAYXJrTJZG8
          source_id: s_i2UaexLr7DobyCqJATPx7L
          stance: supports
          locator: CBDB:312974
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LaBQqg1Znrko3p0LCyD6OY
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spHtRW_4xuhPfx2ARlr_LP
          claim_id: c_LaBQqg1Znrko3p0LCyD6OY
          source_id: s_i2UaexLr7DobyCqJATPx7L
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQT1Hm7LSS63rTgZwvcsM7
        status: active
        display_name: 王希堯
        merged_into_person_id: null
    - claim:
        id: c_iCAtkPGZELhI55qDUdik2t
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1KMWKxmzHZFsefKQXxCmAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2BjiMDNAjgEoleRQRucrZz
          claim_id: c_iCAtkPGZELhI55qDUdik2t
          source_id: s_uHV7DYMsI1MAyTGc7RRe-2
          stance: supports
          locator: CBDB：兄弟 王希堯（203993）之父／母 王守正
          quotation: null
          interpretation_note: 由兄弟关系推断：王希禹 与 王希堯 为同胞（CBDB 记「兄」），王希堯 之父／母即 王希禹 之父／母。
          source:
            id: s_uHV7DYMsI1MAyTGc7RRe-2
            source_type: api_record
            title: 中国历代人物传记资料库：王希禹（CBDB 312978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312978&o=json
            external_identifier: CBDB:312978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1KMWKxmzHZFsefKQXxCmAg
        status: active
        display_name: 王希禹
        merged_into_person_id: null
    - claim:
        id: c_DgFcA1chnG74iVBCe4UYmJ
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sb5cjjXQ84NJKYWgy9z4Eg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzo7LNajaBNocsVvyC41LN
          claim_id: c_DgFcA1chnG74iVBCe4UYmJ
          source_id: s_XSZP260uc0q9w4cLTbc_9O
          stance: supports
          locator: CBDB：兄弟 王希堯（203993）之父／母 王守正
          quotation: null
          interpretation_note: 由兄弟关系推断：王希舜 与 王希堯 为同胞（CBDB 记「兄」），王希堯 之父／母即 王希舜 之父／母。
          source:
            id: s_XSZP260uc0q9w4cLTbc_9O
            source_type: api_record
            title: 中国历代人物传记资料库：王希舜（CBDB 312977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312977&o=json
            external_identifier: CBDB:312977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sb5cjjXQ84NJKYWgy9z4Eg
        status: active
        display_name: 王希舜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守正 | accepted |
| bio.summary | 王守正，明人物。嘉靖二十九年進士，籍贯安化。（中国历代人物传记资料库 CBDB 312974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WQT1Hm7LSS63rTgZwvcsM7 | 王希堯 | accepted |
| children | p_1KMWKxmzHZFsefKQXxCmAg | 王希禹 | accepted |
| children | p_sb5cjjXQ84NJKYWgy9z4Eg | 王希舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守正（CBDB 312974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312974&o=json)
- [中国历代人物传记资料库：王希舜（CBDB 312977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312977&o=json)
- [中国历代人物传记资料库：王希禹（CBDB 312978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312978&o=json)
