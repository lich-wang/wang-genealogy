---
schema: wang-person/v1
id: p_H9c4uhZm81aBYx1zvk8rrU
status: active
merged_into: null
display_name: 王寀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e1JDxJSCU54wus1tbkBYDj
        subject_person_id: p_H9c4uhZm81aBYx1zvk8rrU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3rBqvU1mEwy8YFjRx3CZdm
          claim_id: c_e1JDxJSCU54wus1tbkBYDj
          source_id: s_V3JGCkLLfQ3S7VkbajixJh
          stance: supports
          locator: CBDB:225726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225726）
          source: &a1
            id: s_V3JGCkLLfQ3S7VkbajixJh
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 225726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225726&o=json
            external_identifier: CBDB:225726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1XpWR6VEhB9Qyt8Fec31Kh
        subject_person_id: p_H9c4uhZm81aBYx1zvk8rrU
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
        - id: cs_q4WjVhghdf573aCFR6EV2L
          claim_id: c_1XpWR6VEhB9Qyt8Fec31Kh
          source_id: s_V3JGCkLLfQ3S7VkbajixJh
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
  descendants:
    - claim:
        id: c_q3OwJ2qNB2kJvmTHY2ge-l
        subject_person_id: p_H9c4uhZm81aBYx1zvk8rrU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXtSKP_3VVmmJSFuIoVMC6
          claim_id: c_q3OwJ2qNB2kJvmTHY2ge-l
          source_id: s_V3JGCkLLfQ3S7VkbajixJh
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
  other: []
---

# 王寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寀（CBDB 225726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225726&o=json)
