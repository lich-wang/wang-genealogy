---
schema: wang-person/v1
id: p_11QT6G8zMZ2KEb6RXCMf9i
status: active
merged_into: null
display_name: 王悅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KW5rfHrBHT48SBe1TMBKyR
        subject_person_id: p_11QT6G8zMZ2KEb6RXCMf9i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SEjPMSR8GZPs7ZHMn85AQF
          claim_id: c_KW5rfHrBHT48SBe1TMBKyR
          source_id: s_9TQW4Q16DZe37taJP5JP9C
          stance: supports
          locator: CBDB:12126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12126）
          source: &a1
            id: s_9TQW4Q16DZe37taJP5JP9C
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 12126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12126&o=json
            external_identifier: CBDB:12126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MSUE1Yys29n9PdPV9FrV4h
        subject_person_id: p_11QT6G8zMZ2KEb6RXCMf9i
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
        - id: cs_koAFFH7Ar4q1vJfy9oLwW6
          claim_id: c_MSUE1Yys29n9PdPV9FrV4h
          source_id: s_9TQW4Q16DZe37taJP5JP9C
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

# 王悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悅 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王悅（CBDB 12126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12126&o=json)
