---
schema: wang-person/v1
id: p_tUQvoiDnRYJUhBp95aKc7G
status: active
merged_into: null
display_name: 王韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HDW4zoNTs3LARSMHZkqSx
        subject_person_id: p_tUQvoiDnRYJUhBp95aKc7G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ny6t6m8pZjBAtKPyrT9kEw
          claim_id: c_4HDW4zoNTs3LARSMHZkqSx
          source_id: s_QS74e522pkNMp1KUmr1UJa
          stance: supports
          locator: CBDB:463020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463020）
          source: &a1
            id: s_QS74e522pkNMp1KUmr1UJa
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 463020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463020&o=json
            external_identifier: CBDB:463020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qsaoQHeNSnPDuBJ5eTdHa5
        subject_person_id: p_tUQvoiDnRYJUhBp95aKc7G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为北周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qypjATMEBdzqW2KXrMJCGL
          claim_id: c_qsaoQHeNSnPDuBJ5eTdHa5
          source_id: s_QS74e522pkNMp1KUmr1UJa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶 | accepted |
| bio.summary | CBDB 记载为北周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 463020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463020&o=json)
