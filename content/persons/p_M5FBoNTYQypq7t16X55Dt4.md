---
schema: wang-person/v1
id: p_M5FBoNTYQypq7t16X55Dt4
status: active
merged_into: null
display_name: 王修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N3sG3XE5utXgPiq5U66gag
        subject_person_id: p_M5FBoNTYQypq7t16X55Dt4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yz7u8qxhPtrbLX1TUtHfYZ
          claim_id: c_N3sG3XE5utXgPiq5U66gag
          source_id: s_5vU9ek9ihNFCqQMNr1WY7n
          stance: supports
          locator: CBDB:71135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71135）
          source: &a1
            id: s_5vU9ek9ihNFCqQMNr1WY7n
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 71135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71135&o=json
            external_identifier: CBDB:71135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_367fD3w49Ni746CYfku8pi
        subject_person_id: p_M5FBoNTYQypq7t16X55Dt4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1898年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CMNz44xEEH651R373rpNLC
          claim_id: c_367fD3w49Ni746CYfku8pi
          source_id: s_5vU9ek9ihNFCqQMNr1WY7n
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
        id: c_Bq3iG3py26RiVokrnjnrWQ
        subject_person_id: p_M5FBoNTYQypq7t16X55Dt4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1937年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3ktbyFgfjqkUdNBDfLe2N
          claim_id: c_Bq3iG3py26RiVokrnjnrWQ
          source_id: s_5vU9ek9ihNFCqQMNr1WY7n
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
        id: c_guGv3F7KMCDETf2imyPMVk
        subject_person_id: p_M5FBoNTYQypq7t16X55Dt4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修（1898年—1937年），中華民國人物。籍贯長興。（中国历代人物传记资料库 CBDB 71135）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jSobIj3fhqFjW12Uir1xqq
          claim_id: c_guGv3F7KMCDETf2imyPMVk
          source_id: s_5vU9ek9ihNFCqQMNr1WY7n
          stance: supports
          locator: CBDB:71135
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

# 王修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修 | accepted |
| birth.date | 1898年 | accepted |
| death.date | 1937年 | accepted |
| bio.summary | 王修（1898年—1937年），中華民國人物。籍贯長興。（中国历代人物传记资料库 CBDB 71135） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修（CBDB 71135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71135&o=json)
