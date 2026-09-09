---
schema: wang-person/v1
id: p_7N67MBQbGLgF7UYd1TeTvp
status: active
merged_into: null
display_name: 王惠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVH3Fk9bnhSmoCsuiDh4jH
        subject_person_id: p_7N67MBQbGLgF7UYd1TeTvp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ytE8eGDRzZBrN4tJLb7WV
          claim_id: c_jVH3Fk9bnhSmoCsuiDh4jH
          source_id: s_EkGkjp9ne5ZUnAWhwzG96c
          stance: supports
          locator: CBDB:139462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139462）
          source: &a1
            id: s_EkGkjp9ne5ZUnAWhwzG96c
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 139462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139462&o=json
            external_identifier: CBDB:139462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aWHRjnZYic3Y8hi85AU8w3
        subject_person_id: p_7N67MBQbGLgF7UYd1TeTvp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 646年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9Gtb4QwegjQqmtKFd34Np
          claim_id: c_aWHRjnZYic3Y8hi85AU8w3
          source_id: s_EkGkjp9ne5ZUnAWhwzG96c
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
        id: c_JWc67mZZdGTzDrKAs7FQg7
        subject_person_id: p_7N67MBQbGLgF7UYd1TeTvp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 665年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ygRks4hB13BLy46STBNMn6
          claim_id: c_JWc67mZZdGTzDrKAs7FQg7
          source_id: s_EkGkjp9ne5ZUnAWhwzG96c
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
        id: c_nPhXgedA1XnScWJgHYJvp6
        subject_person_id: p_7N67MBQbGLgF7UYd1TeTvp
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
        - id: cs_u32xb9UQQveC6FE7KiNgHB
          claim_id: c_nPhXgedA1XnScWJgHYJvp6
          source_id: s_EkGkjp9ne5ZUnAWhwzG96c
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

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| birth.date | 646年 | accepted |
| death.date | 665年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 139462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139462&o=json)
