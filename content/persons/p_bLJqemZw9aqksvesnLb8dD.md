---
schema: wang-person/v1
id: p_bLJqemZw9aqksvesnLb8dD
status: active
merged_into: null
display_name: 王懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VrL2rQZ2rA5eJiKpkAYMC2
        subject_person_id: p_bLJqemZw9aqksvesnLb8dD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QdRN7ZJ6uhUwGs1He2i8TX
          claim_id: c_VrL2rQZ2rA5eJiKpkAYMC2
          source_id: s_3L7GuAJEHYD37gKjoBPupB
          stance: supports
          locator: CBDB:472257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472257）
          source: &a1
            id: s_3L7GuAJEHYD37gKjoBPupB
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 472257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472257&o=json
            external_identifier: CBDB:472257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HWD5dXjqWmxEQEkKE73WKq
        subject_person_id: p_bLJqemZw9aqksvesnLb8dD
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
        - id: cs_EipMFu3Xvx2hEHMqi8SDre
          claim_id: c_HWD5dXjqWmxEQEkKE73WKq
          source_id: s_3L7GuAJEHYD37gKjoBPupB
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

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 472257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472257&o=json)
