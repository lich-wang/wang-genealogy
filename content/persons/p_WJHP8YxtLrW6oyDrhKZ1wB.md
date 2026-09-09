---
schema: wang-person/v1
id: p_WJHP8YxtLrW6oyDrhKZ1wB
status: active
merged_into: null
display_name: 王化基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ah6zRFBB6pD3VBqMMYEZGQ
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KAG3bZ2ad7JRD5aTvAvfq
          claim_id: c_Ah6zRFBB6pD3VBqMMYEZGQ
          source_id: s_JEG8oEESCzgvhkBVR7JMoa
          stance: supports
          locator: CBDB:8150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8150）
          source: &a1
            id: s_JEG8oEESCzgvhkBVR7JMoa
            source_type: api_record
            title: 中国历代人物传记资料库：王化基（CBDB 8150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8150&o=json
            external_identifier: CBDB:8150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7GbXUxeaL7CNgoh3NQ6ECH
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 944年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyptfqDtggUq8YkhGh46GX
          claim_id: c_7GbXUxeaL7CNgoh3NQ6ECH
          source_id: s_JEG8oEESCzgvhkBVR7JMoa
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
        id: c_NuiCCip9SYY1HQN522fk4Q
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1010年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MuTYdkQW1FgFGuQHKSFgX
          claim_id: c_NuiCCip9SYY1HQN522fk4Q
          source_id: s_JEG8oEESCzgvhkBVR7JMoa
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
        id: c_Gf6LWTBUeQ5zH68nn8J2NC
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
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
        - id: cs_kP4bBx2Mx6JY1BAbK4XNdE
          claim_id: c_Gf6LWTBUeQ5zH68nn8J2NC
          source_id: s_JEG8oEESCzgvhkBVR7JMoa
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

# 王化基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化基 | accepted |
| birth.date | 944年 | accepted |
| death.date | 1010年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化基（CBDB 8150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8150&o=json)
