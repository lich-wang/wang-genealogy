---
schema: wang-person/v1
id: p_1tzDqE95BNiKoRjcXPNoi5
status: active
merged_into: null
display_name: 王維城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M3tuUFdQwEBgj6sKTZh6WC
        subject_person_id: p_1tzDqE95BNiKoRjcXPNoi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eCu5fnoaD9JBa6of7FMPtg
          claim_id: c_M3tuUFdQwEBgj6sKTZh6WC
          source_id: s_rDh2zNH4Fib5uHaqX3LVd4
          stance: supports
          locator: CBDB:639812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639812）
          source: &a1
            id: s_rDh2zNH4Fib5uHaqX3LVd4
            source_type: api_record
            title: 中国历代人物传记资料库：王維城（CBDB 639812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639812&o=json
            external_identifier: CBDB:639812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_efnBerK68pDohgDKQcZqCC
        subject_person_id: p_1tzDqE95BNiKoRjcXPNoi5
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
        - id: cs_JPoDrpXmjV5PC99oLR7DkC
          claim_id: c_efnBerK68pDohgDKQcZqCC
          source_id: s_rDh2zNH4Fib5uHaqX3LVd4
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

# 王維城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維城 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維城（CBDB 639812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639812&o=json)
