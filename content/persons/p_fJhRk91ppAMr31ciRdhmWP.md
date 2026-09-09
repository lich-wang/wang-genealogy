---
schema: wang-person/v1
id: p_fJhRk91ppAMr31ciRdhmWP
status: active
merged_into: null
display_name: 王三元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_skjorRKjfSB5hUBGbmiTQs
        subject_person_id: p_fJhRk91ppAMr31ciRdhmWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DP5k9YG9oXFWwrJp61bqu5
          claim_id: c_skjorRKjfSB5hUBGbmiTQs
          source_id: s_Q9Bt4GUjc6ScavwLL2v2a8
          stance: supports
          locator: CBDB:438964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438964）
          source: &a1
            id: s_Q9Bt4GUjc6ScavwLL2v2a8
            source_type: api_record
            title: 中国历代人物传记资料库：王三元（CBDB 438964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438964&o=json
            external_identifier: CBDB:438964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JktYKXqW4rQb1Y5nH35JdD
        subject_person_id: p_fJhRk91ppAMr31ciRdhmWP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yF6Bb9dbNW3cPjDkP4iEyM
          claim_id: c_JktYKXqW4rQb1Y5nH35JdD
          source_id: s_Q9Bt4GUjc6ScavwLL2v2a8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D2oDPUhGTUP51NTU8imBJg
        subject_person_id: p_fJhRk91ppAMr31ciRdhmWP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52E7M4FqJgjkP7QZicyYbt
          claim_id: c_D2oDPUhGTUP51NTU8imBJg
          source_id: s_Q9Bt4GUjc6ScavwLL2v2a8
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

# 王三元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三元 | accepted |
| birth.date | 1610年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三元（CBDB 438964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438964&o=json)
