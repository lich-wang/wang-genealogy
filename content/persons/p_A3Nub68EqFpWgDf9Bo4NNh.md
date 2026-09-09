---
schema: wang-person/v1
id: p_A3Nub68EqFpWgDf9Bo4NNh
status: active
merged_into: null
display_name: 王怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQkdrGud3zDuARCrCtuPoB
        subject_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Frt43Ls72z4pEye49PJptV
          claim_id: c_EQkdrGud3zDuARCrCtuPoB
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
          stance: supports
          locator: CBDB:140524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140524）
          source: &a1
            id: s_q3avEwiiC8ybCtwy5vRfFf
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 140524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json
            external_identifier: CBDB:140524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_paraEvK87yH7iWguUKQh18
        subject_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 697年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4KxwGbkZuZasw5QjULgpn
          claim_id: c_paraEvK87yH7iWguUKQh18
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
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
        id: c_CM6BravBwVhY13NLuWDSgr
        subject_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6MQt2jsLavnESsv8USRsm8
          claim_id: c_CM6BravBwVhY13NLuWDSgr
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
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
        id: c_6P9kQwAe8zAKHtRfJVrtxe
        subject_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8ScbQvnV4rh2m7JsrmxRh
          claim_id: c_6P9kQwAe8zAKHtRfJVrtxe
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
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

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| birth.date | 697年 | accepted |
| death.date | 732年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 140524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json)
