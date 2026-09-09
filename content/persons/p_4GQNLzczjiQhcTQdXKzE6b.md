---
schema: wang-person/v1
id: p_4GQNLzczjiQhcTQdXKzE6b
status: active
merged_into: null
display_name: 王㬚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPRwgLZB3Y9qfH7K6tcXBQ
        subject_person_id: p_4GQNLzczjiQhcTQdXKzE6b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㬚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_smz3vCiimoHDSywaBzjfFy
          claim_id: c_jPRwgLZB3Y9qfH7K6tcXBQ
          source_id: s_H6ysocvmAh7QirTaRHrafv
          stance: supports
          locator: CBDB:551547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551547）
          source: &a1
            id: s_H6ysocvmAh7QirTaRHrafv
            source_type: api_record
            title: 中国历代人物传记资料库：王㬚（CBDB 551547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551547&o=json
            external_identifier: CBDB:551547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HRFYSwENWDHnNEQgUypu4C
        subject_person_id: p_4GQNLzczjiQhcTQdXKzE6b
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1192年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yxH4zhz99uSDpjVBKewvTT
          claim_id: c_HRFYSwENWDHnNEQgUypu4C
          source_id: s_H6ysocvmAh7QirTaRHrafv
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
        id: c_icqA8NNbtaskx5AJF6ibLg
        subject_person_id: p_4GQNLzczjiQhcTQdXKzE6b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1259年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BYitF7seZHhUEJLPViJjiz
          claim_id: c_icqA8NNbtaskx5AJF6ibLg
          source_id: s_H6ysocvmAh7QirTaRHrafv
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
        id: c_L8GFxNUKYd5mDcA1XBnHKw
        subject_person_id: p_4GQNLzczjiQhcTQdXKzE6b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为高麗人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mibniJT1F1T2hqNVT9rGkN
          claim_id: c_L8GFxNUKYd5mDcA1XBnHKw
          source_id: s_H6ysocvmAh7QirTaRHrafv
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

# 王㬚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㬚 | accepted |
| birth.date | 1192年 | accepted |
| death.date | 1259年 | accepted |
| bio.summary | CBDB 记载为高麗人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王㬚（CBDB 551547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551547&o=json)
