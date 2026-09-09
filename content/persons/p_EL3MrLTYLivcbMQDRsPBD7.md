---
schema: wang-person/v1
id: p_EL3MrLTYLivcbMQDRsPBD7
status: active
merged_into: null
display_name: 王徽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EVkkAVBpig8U7xfQ2NEdhy
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rwoHDCwmqK36mnLv2jYbM
          claim_id: c_EVkkAVBpig8U7xfQ2NEdhy
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
          stance: supports
          locator: CBDB:67717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67717）
          source: &a1
            id: s_5oZPBGWeRCsBq9Mjc7uBoc
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 67717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67717&o=json
            external_identifier: CBDB:67717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MVeNfWpty3h6Rv5THZKXR8
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_smrJnC759YskvTmZzr8kjK
          claim_id: c_MVeNfWpty3h6Rv5THZKXR8
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
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
        id: c_2hmaTAm9g5TcDygdKamovw
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GqCaL5fp1bC4rXswcc2daJ
          claim_id: c_2hmaTAm9g5TcDygdKamovw
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
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
        id: c_c7DzwDdYVN38zUdmuoUv3J
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
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
        - id: cs_a5K9tB4AqF7J22NeKJL5yc
          claim_id: c_c7DzwDdYVN38zUdmuoUv3J
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
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

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| birth.date | 1428年 | accepted |
| death.date | 1510年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 67717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67717&o=json)
