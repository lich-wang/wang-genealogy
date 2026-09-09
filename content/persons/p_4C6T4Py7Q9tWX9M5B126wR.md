---
schema: wang-person/v1
id: p_4C6T4Py7Q9tWX9M5B126wR
status: active
merged_into: null
display_name: 王際昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lz1w6AGcsafW4LN21peB16
        subject_person_id: p_4C6T4Py7Q9tWX9M5B126wR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A7Xq644u2qs9HFkq6eW3TX
          claim_id: c_Lz1w6AGcsafW4LN21peB16
          source_id: s_Mguoqb3xxJ8UFrhXR1zM3S
          stance: supports
          locator: CBDB:640786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640786）
          source: &a1
            id: s_Mguoqb3xxJ8UFrhXR1zM3S
            source_type: api_record
            title: 中国历代人物传记资料库：王際昌（CBDB 640786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640786&o=json
            external_identifier: CBDB:640786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FXMLEw87S3k1F9fGc3JsJM
        subject_person_id: p_4C6T4Py7Q9tWX9M5B126wR
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
        - id: cs_JLyxHuFipUUKQAxQ2e6kQN
          claim_id: c_FXMLEw87S3k1F9fGc3JsJM
          source_id: s_Mguoqb3xxJ8UFrhXR1zM3S
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

# 王際昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際昌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際昌（CBDB 640786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640786&o=json)
