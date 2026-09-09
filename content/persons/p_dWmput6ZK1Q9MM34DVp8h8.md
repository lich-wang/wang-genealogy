---
schema: wang-person/v1
id: p_dWmput6ZK1Q9MM34DVp8h8
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXgzYJdikSy1ixMEsEuKbY
        subject_person_id: p_dWmput6ZK1Q9MM34DVp8h8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yzb8vr8S8V1EtHnTj5w8F4
          claim_id: c_mXgzYJdikSy1ixMEsEuKbY
          source_id: s_8fifGBsCGMYt9ma8h3iZRJ
          stance: supports
          locator: CBDB:635636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635636）
          source: &a1
            id: s_8fifGBsCGMYt9ma8h3iZRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 635636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635636&o=json
            external_identifier: CBDB:635636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Mp5AR9TYdvi42FAKuxhgZ
        subject_person_id: p_dWmput6ZK1Q9MM34DVp8h8
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
        - id: cs_6WQvAxCnqtAkHKcVnXqxh3
          claim_id: c_2Mp5AR9TYdvi42FAKuxhgZ
          source_id: s_8fifGBsCGMYt9ma8h3iZRJ
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

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 635636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635636&o=json)
