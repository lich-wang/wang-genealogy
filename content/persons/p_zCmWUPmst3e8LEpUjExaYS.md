---
schema: wang-person/v1
id: p_zCmWUPmst3e8LEpUjExaYS
status: active
merged_into: null
display_name: 王泰際
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FnWkwTQLUyQEZDh5yRuDe
        subject_person_id: p_zCmWUPmst3e8LEpUjExaYS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰際
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1rfVYHtUnXz8pnqCkEp92p
          claim_id: c_4FnWkwTQLUyQEZDh5yRuDe
          source_id: s_JCErtP45PEJKrbNEhcn1XN
          stance: supports
          locator: CBDB:71931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71931）
          source: &a1
            id: s_JCErtP45PEJKrbNEhcn1XN
            source_type: api_record
            title: 中国历代人物传记资料库：王泰際（CBDB 71931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71931&o=json
            external_identifier: CBDB:71931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hat1sZfZJuKsDZvmPfiDSo
        subject_person_id: p_zCmWUPmst3e8LEpUjExaYS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQkqvMygXRrRHvUZ1MZEHf
          claim_id: c_hat1sZfZJuKsDZvmPfiDSo
          source_id: s_JCErtP45PEJKrbNEhcn1XN
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
        id: c_41Qve41h3GE1mWrVKbBZeH
        subject_person_id: p_zCmWUPmst3e8LEpUjExaYS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1675年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SvEmtJcQTVtWhM26A6xVZR
          claim_id: c_41Qve41h3GE1mWrVKbBZeH
          source_id: s_JCErtP45PEJKrbNEhcn1XN
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
        id: c_GJcjptgnBfBhJKvXAReM9y
        subject_person_id: p_zCmWUPmst3e8LEpUjExaYS
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
        - id: cs_BDNG9GbYG8L6U36FHSjhcP
          claim_id: c_GJcjptgnBfBhJKvXAReM9y
          source_id: s_JCErtP45PEJKrbNEhcn1XN
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

# 王泰際

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰際 | accepted |
| birth.date | 1599年 | accepted |
| death.date | 1675年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰際（CBDB 71931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71931&o=json)
