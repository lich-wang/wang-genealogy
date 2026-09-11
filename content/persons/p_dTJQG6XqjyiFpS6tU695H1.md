---
schema: wang-person/v1
id: p_dTJQG6XqjyiFpS6tU695H1
status: active
merged_into: null
display_name: 王明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ZKcj6iAuR6DCfZZ1bKwmX
        subject_person_id: p_dTJQG6XqjyiFpS6tU695H1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1BvxVHREnHsFJ496jWWmG1
          claim_id: c_5ZKcj6iAuR6DCfZZ1bKwmX
          source_id: s_97p8N5ZeyAuU6PjYaotYSf
          stance: supports
          locator: CBDB:69237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69237）
          source: &a1
            id: s_97p8N5ZeyAuU6PjYaotYSf
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 69237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69237&o=json
            external_identifier: CBDB:69237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9pA5BtcSEs98L3BEATprcn
        subject_person_id: p_dTJQG6XqjyiFpS6tU695H1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rMMdp8qHsfFCBcx847A1AG
          claim_id: c_9pA5BtcSEs98L3BEATprcn
          source_id: s_97p8N5ZeyAuU6PjYaotYSf
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
        id: c_XWJBpPTEHiCjMQtE5FN86c
        subject_person_id: p_dTJQG6XqjyiFpS6tU695H1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明（卒于1756年），清人物。籍贯固原州，曾任提標千總。（中国历代人物传记资料库 CBDB 69237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tor6kXsAttIABA5H7sxH9m
          claim_id: c_XWJBpPTEHiCjMQtE5FN86c
          source_id: s_97p8N5ZeyAuU6PjYaotYSf
          stance: supports
          locator: CBDB:69237
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| death.date | 1756年 | accepted |
| bio.summary | 王明（卒于1756年），清人物。籍贯固原州，曾任提標千總。（中国历代人物传记资料库 CBDB 69237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 69237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69237&o=json)
