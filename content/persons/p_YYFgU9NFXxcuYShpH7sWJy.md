---
schema: wang-person/v1
id: p_YYFgU9NFXxcuYShpH7sWJy
status: active
merged_into: null
display_name: 王嵋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yThJSTcHsRxgZsnBas7DUD
        subject_person_id: p_YYFgU9NFXxcuYShpH7sWJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rdqhPUb75HuNxkiWgrwvL8
          claim_id: c_yThJSTcHsRxgZsnBas7DUD
          source_id: s_RXc5KjRkbLFgJLBec2mtJa
          stance: supports
          locator: CBDB:637365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637365）
          source: &a1
            id: s_RXc5KjRkbLFgJLBec2mtJa
            source_type: api_record
            title: 中国历代人物传记资料库：王嵋（CBDB 637365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637365&o=json
            external_identifier: CBDB:637365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DJE8B7sCNN32cs1b49Ud29
        subject_person_id: p_YYFgU9NFXxcuYShpH7sWJy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T1tQhwQTznQh8SQqwK5rka
          claim_id: c_DJE8B7sCNN32cs1b49Ud29
          source_id: s_RXc5KjRkbLFgJLBec2mtJa
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

# 王嵋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵋（CBDB 637365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637365&o=json)
