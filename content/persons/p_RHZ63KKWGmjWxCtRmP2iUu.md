---
schema: wang-person/v1
id: p_RHZ63KKWGmjWxCtRmP2iUu
status: active
merged_into: null
display_name: 王珏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LYF2jqGcYXUcCYZS2WBCuv
        subject_person_id: p_RHZ63KKWGmjWxCtRmP2iUu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9xUg2iUgntC6AXSd6hZJmo
          claim_id: c_LYF2jqGcYXUcCYZS2WBCuv
          source_id: s_M6kHz2A7aJukjjHBPK6Y5q
          stance: supports
          locator: CBDB:341861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341861）
          source: &a1
            id: s_M6kHz2A7aJukjjHBPK6Y5q
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 341861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341861&o=json
            external_identifier: CBDB:341861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxUwWWmJJvvH3UQUf1UNwf
        subject_person_id: p_RHZ63KKWGmjWxCtRmP2iUu
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
        - id: cs_GDdEtfJU6wmf1L6ya7B1dB
          claim_id: c_TxUwWWmJJvvH3UQUf1UNwf
          source_id: s_M6kHz2A7aJukjjHBPK6Y5q
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

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 341861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341861&o=json)
