---
schema: wang-person/v1
id: p_Nv1yC8LDjfzF1RkX1mHTyQ
status: active
merged_into: null
display_name: 王緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bN1oqq2823wQWuwyxeUJVs
        subject_person_id: p_Nv1yC8LDjfzF1RkX1mHTyQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7qgFKpkA2ifsa8Mn7HGaz1
          claim_id: c_bN1oqq2823wQWuwyxeUJVs
          source_id: s_xq9nuDsizmSTq5JGS189kB
          stance: supports
          locator: CBDB:381793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381793）
          source: &a1
            id: s_xq9nuDsizmSTq5JGS189kB
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 381793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381793&o=json
            external_identifier: CBDB:381793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GuHLkTWkwx2RGwEnRmjqTx
        subject_person_id: p_Nv1yC8LDjfzF1RkX1mHTyQ
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
        - id: cs_Eq8onLFYf3sLXmsrjCN45h
          claim_id: c_GuHLkTWkwx2RGwEnRmjqTx
          source_id: s_xq9nuDsizmSTq5JGS189kB
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

# 王緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緒 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緒（CBDB 381793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381793&o=json)
