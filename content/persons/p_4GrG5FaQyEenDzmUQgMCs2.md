---
schema: wang-person/v1
id: p_4GrG5FaQyEenDzmUQgMCs2
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLBo9zx3xuK7e4FyL32WKE
        subject_person_id: p_4GrG5FaQyEenDzmUQgMCs2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJDq8mtz5cRuWpf5Hb4JT7
          claim_id: c_aLBo9zx3xuK7e4FyL32WKE
          source_id: s_X1QrBY8aMSZ7m4M8vvdYR4
          stance: supports
          locator: CBDB:45794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45794）
          source: &a1
            id: s_X1QrBY8aMSZ7m4M8vvdYR4
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 45794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45794&o=json
            external_identifier: CBDB:45794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qguLHezhPcsDEzrczosKzn
        subject_person_id: p_4GrG5FaQyEenDzmUQgMCs2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kYnZEi3AJPEt88uLZUJVQM
          claim_id: c_qguLHezhPcsDEzrczosKzn
          source_id: s_X1QrBY8aMSZ7m4M8vvdYR4
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 45794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45794&o=json)
