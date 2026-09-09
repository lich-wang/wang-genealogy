---
schema: wang-person/v1
id: p_BZ3zsegxZSchXhyNc4EZ12
status: active
merged_into: null
display_name: 王底續
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wT8BkBKvZDr4BxuJ1imZ6T
        subject_person_id: p_BZ3zsegxZSchXhyNc4EZ12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王底續
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4iqziKh7Aewe4R1J6RpECL
          claim_id: c_wT8BkBKvZDr4BxuJ1imZ6T
          source_id: s_Bk4r3hPCz2EjNC1cUxUoL4
          stance: supports
          locator: CBDB:637419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637419）
          source: &a1
            id: s_Bk4r3hPCz2EjNC1cUxUoL4
            source_type: api_record
            title: 中国历代人物传记资料库：王底續（CBDB 637419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637419&o=json
            external_identifier: CBDB:637419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AojF6pghWgbqXDXfFCa7n6
        subject_person_id: p_BZ3zsegxZSchXhyNc4EZ12
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
        - id: cs_8BVVyWzRL1zhWuTVzT3Fw2
          claim_id: c_AojF6pghWgbqXDXfFCa7n6
          source_id: s_Bk4r3hPCz2EjNC1cUxUoL4
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

# 王底續

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王底續 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王底續（CBDB 637419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637419&o=json)
