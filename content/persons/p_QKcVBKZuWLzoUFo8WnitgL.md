---
schema: wang-person/v1
id: p_QKcVBKZuWLzoUFo8WnitgL
status: active
merged_into: null
display_name: 王紘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hpETMzSeHYv7D1GMApT23P
        subject_person_id: p_QKcVBKZuWLzoUFo8WnitgL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pRCrdDS8mQyZX3upFQDaKf
          claim_id: c_hpETMzSeHYv7D1GMApT23P
          source_id: s_BPxF7HZa5cRd24ZDbS2Crb
          stance: supports
          locator: CBDB:258718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（258718）
          source: &a1
            id: s_BPxF7HZa5cRd24ZDbS2Crb
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 258718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258718&o=json
            external_identifier: CBDB:258718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6dB19J2o99MSpvEUiPKBZH
        subject_person_id: p_QKcVBKZuWLzoUFo8WnitgL
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
        - id: cs_Dohqh57bJ292jHyyqL4LbX
          claim_id: c_6dB19J2o99MSpvEUiPKBZH
          source_id: s_BPxF7HZa5cRd24ZDbS2Crb
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

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 258718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258718&o=json)
