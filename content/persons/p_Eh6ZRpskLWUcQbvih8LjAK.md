---
schema: wang-person/v1
id: p_Eh6ZRpskLWUcQbvih8LjAK
status: active
merged_into: null
display_name: 王元貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L25KNQ34PzAzEkRqY3juGN
        subject_person_id: p_Eh6ZRpskLWUcQbvih8LjAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r4941Ub96k74812AC9egDX
          claim_id: c_L25KNQ34PzAzEkRqY3juGN
          source_id: s_FvsrF4T4sBANmAZAw6Evcv
          stance: supports
          locator: CBDB:155634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155634）
          source: &a1
            id: s_FvsrF4T4sBANmAZAw6Evcv
            source_type: api_record
            title: 中国历代人物传记资料库：王元貞（CBDB 155634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155634&o=json
            external_identifier: CBDB:155634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LtdTV9txKkCsFmi4bLwFs8
        subject_person_id: p_Eh6ZRpskLWUcQbvih8LjAK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4BJQ2id3UDvP3Mc8a5L2To
          claim_id: c_LtdTV9txKkCsFmi4bLwFs8
          source_id: s_FvsrF4T4sBANmAZAw6Evcv
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

# 王元貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元貞 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元貞（CBDB 155634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155634&o=json)
