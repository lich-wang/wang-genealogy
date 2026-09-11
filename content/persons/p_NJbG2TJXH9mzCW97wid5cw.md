---
schema: wang-person/v1
id: p_NJbG2TJXH9mzCW97wid5cw
status: active
merged_into: null
display_name: 王辟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sc145B6AmDhYiLv8e4Jd1T
        subject_person_id: p_NJbG2TJXH9mzCW97wid5cw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1D3BiyZu23PXvEZWyPbUEL
          claim_id: c_sc145B6AmDhYiLv8e4Jd1T
          source_id: s_7jUCBPJE6oGJ3i7hnALRh8
          stance: supports
          locator: CBDB:98032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98032）
          source: &a1
            id: s_7jUCBPJE6oGJ3i7hnALRh8
            source_type: api_record
            title: 中国历代人物传记资料库：王辟（CBDB 98032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98032&o=json
            external_identifier: CBDB:98032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4oNYAQ53dHYVJXFBJgpZdU
        subject_person_id: p_NJbG2TJXH9mzCW97wid5cw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辟，宋人物。曾任太常寺博士。（中国历代人物传记资料库 CBDB 98032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Ty1tm3ClF0Ch7lJ42T3gM
          claim_id: c_4oNYAQ53dHYVJXFBJgpZdU
          source_id: s_7jUCBPJE6oGJ3i7hnALRh8
          stance: supports
          locator: CBDB:98032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王辟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辟 | accepted |
| bio.summary | 王辟，宋人物。曾任太常寺博士。（中国历代人物传记资料库 CBDB 98032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辟（CBDB 98032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98032&o=json)
