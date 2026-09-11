---
schema: wang-person/v1
id: p_Fn3VWmbwHWaLfGAks8JyJ5
status: active
merged_into: null
display_name: 王守正
revision: 2
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

## 外部来源

- [中国历代人物传记资料库：王守正（CBDB 312974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312974&o=json)
