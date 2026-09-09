---
schema: wang-person/v1
id: p_fvMhQ1gMuC7L5CYMrsmXDW
status: active
merged_into: null
display_name: 王生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HjAmAkQG7tY4NTm5u1dHCf
        subject_person_id: p_fvMhQ1gMuC7L5CYMrsmXDW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V1VneFb6V6PVvh3HF2GrQp
          claim_id: c_HjAmAkQG7tY4NTm5u1dHCf
          source_id: s_vf1gDSVfKxGoDqVjyeUCgM
          stance: supports
          locator: CBDB:150541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150541）
          source: &a1
            id: s_vf1gDSVfKxGoDqVjyeUCgM
            source_type: api_record
            title: 中国历代人物传记资料库：王生（CBDB 150541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150541&o=json
            external_identifier: CBDB:150541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrhtqEN2PTTqrdeegh8R8s
        subject_person_id: p_fvMhQ1gMuC7L5CYMrsmXDW
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
        - id: cs_4SwjJbX3zH6zsrBHTYpihB
          claim_id: c_yrhtqEN2PTTqrdeegh8R8s
          source_id: s_vf1gDSVfKxGoDqVjyeUCgM
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

# 王生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王生 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王生（CBDB 150541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150541&o=json)
