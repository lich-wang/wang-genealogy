---
schema: wang-person/v1
id: p_Zvjvgshz6JbJhrGYJFm2uQ
status: active
merged_into: null
display_name: 王剛中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cg1LceU13cNRVsSe55pKVC
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1HbhbCbY1gf3XKeuANdqU
          claim_id: c_Cg1LceU13cNRVsSe55pKVC
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: CBDB:8151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8151）
          source: &a1
            id: s_eEepmYZas84z15WXEpE1gV
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 8151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json
            external_identifier: CBDB:8151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T5zuc6PxPKP5Zbhqp4R3uA
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1103年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3wGwZ1rkx3Vu5Zz6581rH3
          claim_id: c_T5zuc6PxPKP5Zbhqp4R3uA
          source_id: s_eEepmYZas84z15WXEpE1gV
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
        id: c_Pg8Q5RdZaggsaGqE3XvBG7
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1165年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cEwyZFwuX9HrhL8ENpMxL8
          claim_id: c_Pg8Q5RdZaggsaGqE3XvBG7
          source_id: s_eEepmYZas84z15WXEpE1gV
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
        id: c_ScX7BL1oQMxZQiLuURGbce
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
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
        - id: cs_rMzQeQAD3UQyAtuxNG8Fuz
          claim_id: c_ScX7BL1oQMxZQiLuURGbce
          source_id: s_eEepmYZas84z15WXEpE1gV
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

# 王剛中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛中 | accepted |
| birth.date | 1103年 | accepted |
| death.date | 1165年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 8151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json)
