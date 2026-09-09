---
schema: wang-person/v1
id: p_4r434FXidoHPAJv6kFC7qF
status: active
merged_into: null
display_name: 王惟賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XRE3WjFzUNHk7ciQbqRUu5
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AqVuCxWhpwLcWGXxiMEXjS
          claim_id: c_XRE3WjFzUNHk7ciQbqRUu5
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: CBDB:29408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29408）
          source: &a1
            id: s_9dpj8y6yZ7KzHr5sLYBc8V
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 29408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29408&o=json
            external_identifier: CBDB:29408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hKTm3MtKJLEgsGCN4DpLxb
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1270年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpcuWrPyCm1Q7UJQnwz1Ar
          claim_id: c_hKTm3MtKJLEgsGCN4DpLxb
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TUPWPZFZkwnvJGhZYiUPJ9
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1340年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LA7xaoZiaRnXyp5vKMcRFP
          claim_id: c_TUPWPZFZkwnvJGhZYiUPJ9
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mhmL2WsFXFxEk5Rxeziph8
        subject_person_id: p_4r434FXidoHPAJv6kFC7qF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ctc7ctCmChdMK6Pk7wCBT
          claim_id: c_mhmL2WsFXFxEk5Rxeziph8
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
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

# 王惟賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟賢 | accepted |
| birth.date | 1270年 | accepted |
| death.date | 1340年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟賢（CBDB 29408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29408&o=json)
