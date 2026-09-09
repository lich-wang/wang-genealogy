---
schema: wang-person/v1
id: p_V6Vh65UhA29fnCXkG6WPsA
status: active
merged_into: null
display_name: 王某通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zj74p9kqV36Xh3hSCC3Gxx
        subject_person_id: p_V6Vh65UhA29fnCXkG6WPsA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y7BQ48jR4ffhvcq8RMyjCo
          claim_id: c_Zj74p9kqV36Xh3hSCC3Gxx
          source_id: s_257wrNVQ9p6PtKvNRDa5ND
          stance: supports
          locator: CBDB:140173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140173）
          source: &a1
            id: s_257wrNVQ9p6PtKvNRDa5ND
            source_type: api_record
            title: 中国历代人物传记资料库：王某通（CBDB 140173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140173&o=json
            external_identifier: CBDB:140173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2pQqKLuh3GDfCqPeFcQdQw
        subject_person_id: p_V6Vh65UhA29fnCXkG6WPsA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 631年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5YNRGoDh255Jw8TzWvvew
          claim_id: c_2pQqKLuh3GDfCqPeFcQdQw
          source_id: s_257wrNVQ9p6PtKvNRDa5ND
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
        id: c_oEnFWgc9tsn3SNAgwoN2JE
        subject_person_id: p_V6Vh65UhA29fnCXkG6WPsA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4jdz4oVbSE4XgYRqxKHBDW
          claim_id: c_oEnFWgc9tsn3SNAgwoN2JE
          source_id: s_257wrNVQ9p6PtKvNRDa5ND
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
        id: c_BYLDE47xgtHb9h59kZnQwW
        subject_person_id: p_V6Vh65UhA29fnCXkG6WPsA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8k5FejDfpg8JuZncoEYxCC
          claim_id: c_BYLDE47xgtHb9h59kZnQwW
          source_id: s_257wrNVQ9p6PtKvNRDa5ND
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

# 王某通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王某通 | accepted |
| birth.date | 631年 | accepted |
| death.date | 704年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王某通（CBDB 140173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140173&o=json)
