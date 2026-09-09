---
schema: wang-person/v1
id: p_txmGNUSLN748iJB41SWQzU
status: active
merged_into: null
display_name: 王致祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ad6H4UF2iZEX3eZKsfkA7M
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92DYf97HZzG3fV76HX9Zi1
          claim_id: c_Ad6H4UF2iZEX3eZKsfkA7M
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
          stance: supports
          locator: CBDB:126646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126646）
          source: &a1
            id: s_dH3fiY3YrG4CgwJ7XDTXE4
            source_type: api_record
            title: 中国历代人物传记资料库：王致祥（CBDB 126646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126646&o=json
            external_identifier: CBDB:126646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2FtVLUTwK7VZJ9RWU4Mbs7
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1544年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bGiQjhkZZKbbmiKkiQGhv7
          claim_id: c_2FtVLUTwK7VZJ9RWU4Mbs7
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
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
        id: c_AphMNYKqL8afQht5zdMr1t
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QnJr9Nyt8MH4ynZzfgpE3s
          claim_id: c_AphMNYKqL8afQht5zdMr1t
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
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
        id: c_E8DtSUkohLkDMJB59a46Af
        subject_person_id: p_txmGNUSLN748iJB41SWQzU
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
        - id: cs_R5ENgWk3uX4P86ek2GBtQ8
          claim_id: c_E8DtSUkohLkDMJB59a46Af
          source_id: s_dH3fiY3YrG4CgwJ7XDTXE4
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

# 王致祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致祥 | accepted |
| birth.date | 1544年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致祥（CBDB 126646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126646&o=json)
