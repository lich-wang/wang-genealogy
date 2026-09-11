---
schema: wang-person/v1
id: p_7iCWt7tT7MyU7eEvrvxks3
status: active
merged_into: null
display_name: 王可就
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XmGgDELMe6VfKPLE8XGHYB
        subject_person_id: p_7iCWt7tT7MyU7eEvrvxks3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可就
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SfPJHAhCn7BY8LvWPfxrFr
          claim_id: c_XmGgDELMe6VfKPLE8XGHYB
          source_id: s_xDQcrcVi4hS7QLaSUaSj2v
          stance: supports
          locator: CBDB:69114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69114）
          source: &a1
            id: s_xDQcrcVi4hS7QLaSUaSj2v
            source_type: api_record
            title: 中国历代人物传记资料库：王可就（CBDB 69114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69114&o=json
            external_identifier: CBDB:69114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bfdjmYp84mLJMHCbqtGejq
        subject_person_id: p_7iCWt7tT7MyU7eEvrvxks3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可就，清人物。籍贯灤州，曾任參將、城守副將、協副將。（中国历代人物传记资料库 CBDB 69114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q27JjOIYVfghTjRJfuAwXw
          claim_id: c_bfdjmYp84mLJMHCbqtGejq
          source_id: s_xDQcrcVi4hS7QLaSUaSj2v
          stance: supports
          locator: CBDB:69114
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

# 王可就

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可就 | accepted |
| bio.summary | 王可就，清人物。籍贯灤州，曾任參將、城守副將、協副將。（中国历代人物传记资料库 CBDB 69114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可就（CBDB 69114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69114&o=json)
