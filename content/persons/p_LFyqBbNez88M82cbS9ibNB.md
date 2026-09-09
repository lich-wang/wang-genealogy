---
schema: wang-person/v1
id: p_LFyqBbNez88M82cbS9ibNB
status: active
merged_into: null
display_name: 王紹勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xAdeKp172zELMYAx2P5CJH
        subject_person_id: p_LFyqBbNez88M82cbS9ibNB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bghfv717RC5Gs6K5mbnePJ
          claim_id: c_xAdeKp172zELMYAx2P5CJH
          source_id: s_a7xZ5g1TMuMtR7mK7ywCpH
          stance: supports
          locator: CBDB:342426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342426）
          source: &a1
            id: s_a7xZ5g1TMuMtR7mK7ywCpH
            source_type: api_record
            title: 中国历代人物传记资料库：王紹勳（CBDB 342426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342426&o=json
            external_identifier: CBDB:342426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uYB4i2TxjXmMH4zrdmnU15
        subject_person_id: p_LFyqBbNez88M82cbS9ibNB
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
        - id: cs_DD9GV5H8h4oNan2fxGkzEH
          claim_id: c_uYB4i2TxjXmMH4zrdmnU15
          source_id: s_a7xZ5g1TMuMtR7mK7ywCpH
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

# 王紹勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹勳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹勳（CBDB 342426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342426&o=json)
