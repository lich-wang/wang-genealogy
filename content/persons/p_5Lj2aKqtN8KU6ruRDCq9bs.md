---
schema: wang-person/v1
id: p_5Lj2aKqtN8KU6ruRDCq9bs
status: active
merged_into: null
display_name: 王熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tKNNM3usHUzKzjLzRWA4Dk
        subject_person_id: p_5Lj2aKqtN8KU6ruRDCq9bs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_56s9V66oE9q7uUKZNhkFyJ
          claim_id: c_tKNNM3usHUzKzjLzRWA4Dk
          source_id: s_QFCF61w4sZPHoQ81ghFVKV
          stance: supports
          locator: CBDB:685065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685065）
          source: &a1
            id: s_QFCF61w4sZPHoQ81ghFVKV
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 685065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685065&o=json
            external_identifier: CBDB:685065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqteSY7Nem7DtKbAJxJZjt
        subject_person_id: p_5Lj2aKqtN8KU6ruRDCq9bs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDaWLs2vHzqC4bBoYiKidQ
          claim_id: c_GqteSY7Nem7DtKbAJxJZjt
          source_id: s_QFCF61w4sZPHoQ81ghFVKV
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

# 王熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙（CBDB 685065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685065&o=json)
