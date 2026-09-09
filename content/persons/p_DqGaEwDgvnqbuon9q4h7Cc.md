---
schema: wang-person/v1
id: p_DqGaEwDgvnqbuon9q4h7Cc
status: active
merged_into: null
display_name: 王儼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QzueR2kKRF693cE2xcKn41
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xGoUEQJHf9eQLuqJZWBrSk
          claim_id: c_QzueR2kKRF693cE2xcKn41
          source_id: s_bMYH97KxZVpwFKb5EXvGnz
          stance: supports
          locator: CBDB:201519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201519）
          source: &a1
            id: s_bMYH97KxZVpwFKb5EXvGnz
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 201519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201519&o=json
            external_identifier: CBDB:201519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V1JemfHY7RjXyh53dtbCHY
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KbedYAkMYze5MG8dikpqnn
          claim_id: c_V1JemfHY7RjXyh53dtbCHY
          source_id: s_bMYH97KxZVpwFKb5EXvGnz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qqYfHSz692ib7fMWrgFH13
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RsTwJuteKZLHbfXpdPYghi
          claim_id: c_qqYfHSz692ib7fMWrgFH13
          source_id: s_bMYH97KxZVpwFKb5EXvGnz
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

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| birth.date | 1467年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 201519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201519&o=json)
