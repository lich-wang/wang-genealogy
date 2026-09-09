---
schema: wang-person/v1
id: p_5Y6EoSXqcv9iK31YNJEBu2
status: active
merged_into: null
display_name: 王略
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQ8M9nf152SHCHg378wgsx
        subject_person_id: p_5Y6EoSXqcv9iK31YNJEBu2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王略
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HKJjevo3tCLGHUaMLN31W1
          claim_id: c_FQ8M9nf152SHCHg378wgsx
          source_id: s_dNQiLZdCxqLtkTUoNMAJ1E
          stance: supports
          locator: CBDB:71189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71189）
          source: &a1
            id: s_dNQiLZdCxqLtkTUoNMAJ1E
            source_type: api_record
            title: 中国历代人物传记资料库：王略（CBDB 71189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71189&o=json
            external_identifier: CBDB:71189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Uks3mW85TCu7VfX3DtXPaz
        subject_person_id: p_5Y6EoSXqcv9iK31YNJEBu2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJsBpxaQFjyA3bnmQa3WTt
          claim_id: c_Uks3mW85TCu7VfX3DtXPaz
          source_id: s_dNQiLZdCxqLtkTUoNMAJ1E
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
        id: c_nAFKw9iPkLAnk7xzH3VSKD
        subject_person_id: p_5Y6EoSXqcv9iK31YNJEBu2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8vxuDWz472CY1eVC89ruwg
          claim_id: c_nAFKw9iPkLAnk7xzH3VSKD
          source_id: s_dNQiLZdCxqLtkTUoNMAJ1E
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
        id: c_g8Sk2tRoyXXqK53x9UQLMv
        subject_person_id: p_5Y6EoSXqcv9iK31YNJEBu2
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
        - id: cs_LZNxLQKhNsAmy29vQXdDjQ
          claim_id: c_g8Sk2tRoyXXqK53x9UQLMv
          source_id: s_dNQiLZdCxqLtkTUoNMAJ1E
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

# 王略

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王略 | accepted |
| birth.date | 1613年 | accepted |
| death.date | 1669年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王略（CBDB 71189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71189&o=json)
