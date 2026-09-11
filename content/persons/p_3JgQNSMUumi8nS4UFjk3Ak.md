---
schema: wang-person/v1
id: p_3JgQNSMUumi8nS4UFjk3Ak
status: active
merged_into: null
display_name: 王通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qEfcY7V1FeFKxbkAVWm5na
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qD9gMYduqSsRs31zA6NdM1
          claim_id: c_qEfcY7V1FeFKxbkAVWm5na
          source_id: s_Y1jKFycxFKXmLJvd3427y6
          stance: supports
          locator: CBDB:261851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261851）
          source: &a1
            id: s_Y1jKFycxFKXmLJvd3427y6
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 261851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261851&o=json
            external_identifier: CBDB:261851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3tBozmxk8BizWJa8wP9a8E
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dBe1hWdkhrGOQDTTiUA--e
          claim_id: c_3tBozmxk8BizWJa8wP9a8E
          source_id: s_Y1jKFycxFKXmLJvd3427y6
          stance: supports
          locator: CBDB:261851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_25JmxVronWt1CCrwOVGsnH
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCWNpYtH5_0HFHbNp6LYt-
          claim_id: c_25JmxVronWt1CCrwOVGsnH
          source_id: s_Y1jKFycxFKXmLJvd3427y6
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7nQdqDRU7gCLFFCzrrRkDE
        status: active
        display_name: 王錦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7nQdqDRU7gCLFFCzrrRkDE | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 261851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261851&o=json)
