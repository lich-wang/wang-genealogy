---
schema: wang-person/v1
id: p_Ab5uo6PLTj3GdkV4mUDH78
status: active
merged_into: null
display_name: 王肇震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WuX8b17LZy4LgfTg19aJnC
        subject_person_id: p_Ab5uo6PLTj3GdkV4mUDH78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uL1ynLYPQCFtuWc6MQJJSw
          claim_id: c_WuX8b17LZy4LgfTg19aJnC
          source_id: s_jLxGEaxsCFLEBADw5eAgPK
          stance: supports
          locator: CBDB:72176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72176）
          source: &a1
            id: s_jLxGEaxsCFLEBADw5eAgPK
            source_type: api_record
            title: 中国历代人物传记资料库：王肇震（CBDB 72176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72176&o=json
            external_identifier: CBDB:72176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1AMEQTpVGEsW6suXV1F3T9
        subject_person_id: p_Ab5uo6PLTj3GdkV4mUDH78
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GmVitcvdNhowhJ4rr93GxV
          claim_id: c_1AMEQTpVGEsW6suXV1F3T9
          source_id: s_jLxGEaxsCFLEBADw5eAgPK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7DM47GhRG9wKHgAkNVQge8
        subject_person_id: p_Ab5uo6PLTj3GdkV4mUDH78
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1913年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfrekN7DnQKbe9ibNVsPsr
          claim_id: c_7DM47GhRG9wKHgAkNVQge8
          source_id: s_jLxGEaxsCFLEBADw5eAgPK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjfA8sunRYpPoazBPqrmgk
        subject_person_id: p_Ab5uo6PLTj3GdkV4mUDH78
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5K1fRGDQK4L91Z6DQPK8FA
          claim_id: c_xjfA8sunRYpPoazBPqrmgk
          source_id: s_jLxGEaxsCFLEBADw5eAgPK
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

# 王肇震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇震 | accepted |
| birth.date | 1841年 | accepted |
| death.date | 1913年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇震（CBDB 72176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72176&o=json)
