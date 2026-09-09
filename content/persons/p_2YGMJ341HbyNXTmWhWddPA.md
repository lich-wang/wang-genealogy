---
schema: wang-person/v1
id: p_2YGMJ341HbyNXTmWhWddPA
status: active
merged_into: null
display_name: 王盟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wScwXKDYxMmMrrMgdwJ2gn
        subject_person_id: p_2YGMJ341HbyNXTmWhWddPA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gVSBBxaHg6Vn2rLa7emNsN
          claim_id: c_wScwXKDYxMmMrrMgdwJ2gn
          source_id: s_a8NjyxK3UPQjG1r9va9oAc
          stance: supports
          locator: CBDB:462792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462792）
          source: &a1
            id: s_a8NjyxK3UPQjG1r9va9oAc
            source_type: api_record
            title: 中国历代人物传记资料库：王盟（CBDB 462792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462792&o=json
            external_identifier: CBDB:462792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EYfLZxu7J7mJ9GfEWGgpZt
        subject_person_id: p_2YGMJ341HbyNXTmWhWddPA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为北魏人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2bexR4uQ22PZrREJDko2L9
          claim_id: c_EYfLZxu7J7mJ9GfEWGgpZt
          source_id: s_a8NjyxK3UPQjG1r9va9oAc
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

# 王盟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盟 | accepted |
| bio.summary | CBDB 记载为北魏人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王盟（CBDB 462792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462792&o=json)
