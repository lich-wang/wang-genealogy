---
schema: wang-person/v1
id: p_C7VyV4rSUfKqLt6YqmF3TK
status: active
merged_into: null
display_name: 王守洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LDUeBJkQ8naPjLKzN6iJb7
        subject_person_id: p_C7VyV4rSUfKqLt6YqmF3TK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q9dJHT5ACLEC9ZBLu1d6Lt
          claim_id: c_LDUeBJkQ8naPjLKzN6iJb7
          source_id: s_V1XK1KsHt4JRxtNytxNe9y
          stance: supports
          locator: CBDB:166622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166622）
          source: &a1
            id: s_V1XK1KsHt4JRxtNytxNe9y
            source_type: api_record
            title: 中国历代人物传记资料库：王守洪（CBDB 166622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166622&o=json
            external_identifier: CBDB:166622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KKDDaxahK5DhLPje2Jy7rD
        subject_person_id: p_C7VyV4rSUfKqLt6YqmF3TK
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
        - id: cs_bNP5K7uofugN7m9h8GyGX3
          claim_id: c_KKDDaxahK5DhLPje2Jy7rD
          source_id: s_V1XK1KsHt4JRxtNytxNe9y
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

# 王守洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守洪 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守洪（CBDB 166622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166622&o=json)
