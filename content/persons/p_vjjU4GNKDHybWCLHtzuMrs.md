---
schema: wang-person/v1
id: p_vjjU4GNKDHybWCLHtzuMrs
status: active
merged_into: null
display_name: 王兆麒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohDJnQjq71BHL9KdgBCGgN
        subject_person_id: p_vjjU4GNKDHybWCLHtzuMrs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R2oHtL3u7rRGii8YTJ3VE6
          claim_id: c_ohDJnQjq71BHL9KdgBCGgN
          source_id: s_bWBx8iQ7xP2mseAV4FmgE1
          stance: supports
          locator: CBDB:636226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636226）
          source: &a1
            id: s_bWBx8iQ7xP2mseAV4FmgE1
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麒（CBDB 636226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636226&o=json
            external_identifier: CBDB:636226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uQyGNjHn4mH8458D9z67vw
        subject_person_id: p_vjjU4GNKDHybWCLHtzuMrs
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
        - id: cs_fVpra9rLevSGR38HGcwvq8
          claim_id: c_uQyGNjHn4mH8458D9z67vw
          source_id: s_bWBx8iQ7xP2mseAV4FmgE1
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

# 王兆麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆麒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆麒（CBDB 636226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636226&o=json)
