---
schema: wang-person/v1
id: p_f6j6zh1mWQCQCdmtMDvT5k
status: active
merged_into: null
display_name: 王心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2QG47TpZCdHXnDF62Hpi6n
        subject_person_id: p_f6j6zh1mWQCQCdmtMDvT5k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Zfv9sUsxHjmNeu1RDa2GZ
          claim_id: c_2QG47TpZCdHXnDF62Hpi6n
          source_id: s_s8CkC43rB9mxpbDJrQYQ8k
          stance: supports
          locator: CBDB:314594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314594）
          source: &a1
            id: s_s8CkC43rB9mxpbDJrQYQ8k
            source_type: api_record
            title: 中国历代人物传记资料库：王心（CBDB 314594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314594&o=json
            external_identifier: CBDB:314594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4vET3UVjcPAi6T13TkH7Gi
        subject_person_id: p_f6j6zh1mWQCQCdmtMDvT5k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2W4LfjnHPvS86TNaw7ByQf
          claim_id: c_4vET3UVjcPAi6T13TkH7Gi
          source_id: s_s8CkC43rB9mxpbDJrQYQ8k
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

# 王心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心（CBDB 314594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314594&o=json)
