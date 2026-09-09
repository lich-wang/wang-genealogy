---
schema: wang-person/v1
id: p_jZZBYRQ6YNvr6X8jPkWjAE
status: active
merged_into: null
display_name: 王掄琪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oNmuKepNuxuD5DQiNemH9C
        subject_person_id: p_jZZBYRQ6YNvr6X8jPkWjAE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NF4SiFhS9hnbpX5eXBkDYP
          claim_id: c_oNmuKepNuxuD5DQiNemH9C
          source_id: s_kWzC9M9XUMQxumny6rxTi6
          stance: supports
          locator: CBDB:638145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638145）
          source: &a1
            id: s_kWzC9M9XUMQxumny6rxTi6
            source_type: api_record
            title: 中国历代人物传记资料库：王掄琪（CBDB 638145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638145&o=json
            external_identifier: CBDB:638145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z62FYr97kAC9gyBb5g4FWa
        subject_person_id: p_jZZBYRQ6YNvr6X8jPkWjAE
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
        - id: cs_d29adiTnCN6HDQUDcYLRAB
          claim_id: c_z62FYr97kAC9gyBb5g4FWa
          source_id: s_kWzC9M9XUMQxumny6rxTi6
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

# 王掄琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王掄琪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王掄琪（CBDB 638145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638145&o=json)
