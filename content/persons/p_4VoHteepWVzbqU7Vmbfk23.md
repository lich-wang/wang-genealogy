---
schema: wang-person/v1
id: p_4VoHteepWVzbqU7Vmbfk23
status: active
merged_into: null
display_name: 莫氏
revision: 1
cbdb_id: 135565
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WDzU6svqnOVBuqn1chMY_q
        subject_person_id: p_4VoHteepWVzbqU7Vmbfk23
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 莫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_skrB1r5P6jc5OoWeEK-oBT
          claim_id: c_WDzU6svqnOVBuqn1chMY_q
          source_id: s_8GtPmcXQLdyHl_Q1WG7RWJ
          stance: supports
          locator: CBDB:135565
          quotation: null
          interpretation_note: CBDB 明确记录的王允功配偶
          source: &a1
            id: s_8GtPmcXQLdyHl_Q1WG7RWJ
            source_type: api_record
            title: 中国历代人物传记资料库：莫氏(王允功妻)（CBDB 135565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135565&o=json
            external_identifier: CBDB:135565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jBDLZz9E9S2Z9Oui9nNSMb
        subject_person_id: p_2RzrzUqsutK3yv9cd9dwXj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4VoHteepWVzbqU7Vmbfk23
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IRM-a-_dQeOvyFqn7drJgH
          claim_id: c_jBDLZz9E9S2Z9Oui9nNSMb
          source_id: s_8GtPmcXQLdyHl_Q1WG7RWJ
          stance: supports
          locator: 紹興十八年同年小錄，157：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2RzrzUqsutK3yv9cd9dwXj
        status: active
        display_name: 王允功
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 莫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 莫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2RzrzUqsutK3yv9cd9dwXj | 王允功 | accepted |

## 外部来源

- [中国历代人物传记资料库：莫氏(王允功妻)（CBDB 135565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135565&o=json)
