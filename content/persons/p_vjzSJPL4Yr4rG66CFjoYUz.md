---
schema: wang-person/v1
id: p_vjzSJPL4Yr4rG66CFjoYUz
status: active
merged_into: null
display_name: 王文進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gvG74oFZLGbFiyZYZuTpdv
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M1VUYfxiustngeyQb5j1gU
          claim_id: c_gvG74oFZLGbFiyZYZuTpdv
          source_id: s_F2Z16RpR45vjsURtjhTvCi
          stance: supports
          locator: CBDB:142127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142127）
          source: &a1
            id: s_F2Z16RpR45vjsURtjhTvCi
            source_type: api_record
            title: 中国历代人物传记资料库：王文進（CBDB 142127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142127&o=json
            external_identifier: CBDB:142127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uRt2KaC97iqeoJH4r7NV5D
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2kpSaJ6DsW4py7329DV3C9
          claim_id: c_uRt2KaC97iqeoJH4r7NV5D
          source_id: s_F2Z16RpR45vjsURtjhTvCi
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
        id: c_P5sMfZ4iAHXtoM1JTYwF9y
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 886年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isAL2gUrv38hFe5iW3CSTw
          claim_id: c_P5sMfZ4iAHXtoM1JTYwF9y
          source_id: s_F2Z16RpR45vjsURtjhTvCi
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
        id: c_JuyWYNX1GTGKSJxd9HdNq2
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
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
        - id: cs_DfSWcLKkhWiiN22ZzRQzGJ
          claim_id: c_JuyWYNX1GTGKSJxd9HdNq2
          source_id: s_F2Z16RpR45vjsURtjhTvCi
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

# 王文進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文進 | accepted |
| birth.date | 826年 | accepted |
| death.date | 886年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文進（CBDB 142127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142127&o=json)
