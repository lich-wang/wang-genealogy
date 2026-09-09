---
schema: wang-person/v1
id: p_CsAiBrVFYgx1xRRR6UBYTA
status: active
merged_into: null
display_name: 王增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3JVNJFQDtqpk6rVnmCTQYM
        subject_person_id: p_CsAiBrVFYgx1xRRR6UBYTA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cRyGTnDnLkzJoDCbzntWWw
          claim_id: c_3JVNJFQDtqpk6rVnmCTQYM
          source_id: s_Fe2xLT5Q5pq5g9JogFQtvu
          stance: supports
          locator: CBDB:500506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500506）
          source: &a1
            id: s_Fe2xLT5Q5pq5g9JogFQtvu
            source_type: api_record
            title: 中国历代人物传记资料库：王增（CBDB 500506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500506&o=json
            external_identifier: CBDB:500506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BP5F3fCN2Wu9U4vK2RB9A
        subject_person_id: p_CsAiBrVFYgx1xRRR6UBYTA
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
        - id: cs_zo6ZvUj59A5zDoAsxEYoBj
          claim_id: c_9BP5F3fCN2Wu9U4vK2RB9A
          source_id: s_Fe2xLT5Q5pq5g9JogFQtvu
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

# 王增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增（CBDB 500506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500506&o=json)
