---
schema: wang-person/v1
id: p_FaBysRhu4YJQNPZBE1X6B1
status: active
merged_into: null
display_name: 王程
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tnb6UHmW4neings4bwfKXz
        subject_person_id: p_FaBysRhu4YJQNPZBE1X6B1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1jv9deQD1ZnXs6Hu2JADab
          claim_id: c_tnb6UHmW4neings4bwfKXz
          source_id: s_ETXvHF37Pt8uXCNmXW1pL7
          stance: supports
          locator: CBDB:696864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696864）
          source: &a1
            id: s_ETXvHF37Pt8uXCNmXW1pL7
            source_type: api_record
            title: 中国历代人物传记资料库：王程（CBDB 696864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696864&o=json
            external_identifier: CBDB:696864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vBux6wthMe8AtUKU9wAwFc
        subject_person_id: p_FaBysRhu4YJQNPZBE1X6B1
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
        - id: cs_Mjs4prYn53yvxjqnugpvfk
          claim_id: c_vBux6wthMe8AtUKU9wAwFc
          source_id: s_ETXvHF37Pt8uXCNmXW1pL7
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

# 王程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王程 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王程（CBDB 696864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696864&o=json)
