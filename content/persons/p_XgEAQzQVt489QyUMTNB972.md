---
schema: wang-person/v1
id: p_XgEAQzQVt489QyUMTNB972
status: active
merged_into: null
display_name: 王維城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFZzyzZyZVvuo7FT7zAKNp
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DrKBqG2oNEiU6T1AHg73VJ
          claim_id: c_fFZzyzZyZVvuo7FT7zAKNp
          source_id: s_LCWDXinw3oDn5i7TYsgj3r
          stance: supports
          locator: CBDB:700320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700320）
          source: &a1
            id: s_LCWDXinw3oDn5i7TYsgj3r
            source_type: api_record
            title: 中国历代人物传记资料库：王維城（CBDB 700320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700320&o=json
            external_identifier: CBDB:700320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hR9u6uJ3EjpaZhhMBJCpVN
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
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
        - id: cs_DXj2p2B4PYKc9qk5P86tqw
          claim_id: c_hR9u6uJ3EjpaZhhMBJCpVN
          source_id: s_LCWDXinw3oDn5i7TYsgj3r
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

# 王維城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維城 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維城（CBDB 700320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700320&o=json)
