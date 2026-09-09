---
schema: wang-person/v1
id: p_yiKYKxHDy5Sntojbjn4EoX
status: active
merged_into: null
display_name: 王濟眾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_78f4KnY8DLSmfz8hGhvM5E
        subject_person_id: p_yiKYKxHDy5Sntojbjn4EoX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟眾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_52odxZwQSD4jVLfNb9fewM
          claim_id: c_78f4KnY8DLSmfz8hGhvM5E
          source_id: s_B4bxAQkCj74DTESiB2k4fb
          stance: supports
          locator: CBDB:639249
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639249）
          source: &a1
            id: s_B4bxAQkCj74DTESiB2k4fb
            source_type: api_record
            title: 中国历代人物传记资料库：王濟眾（CBDB 639249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639249&o=json
            external_identifier: CBDB:639249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u8t74r2KRrv2nvYEp8WY5d
        subject_person_id: p_yiKYKxHDy5Sntojbjn4EoX
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
        - id: cs_jv3uyTbPSH3Kr173bQuwKH
          claim_id: c_u8t74r2KRrv2nvYEp8WY5d
          source_id: s_B4bxAQkCj74DTESiB2k4fb
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

# 王濟眾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟眾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟眾（CBDB 639249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639249&o=json)
