---
schema: wang-person/v1
id: p_Mr8WDJLVYwrUKqaJMU9Q1F
status: active
merged_into: null
display_name: 王軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NLc9FaV4i9BnpQf1z7G4Ws
        subject_person_id: p_Mr8WDJLVYwrUKqaJMU9Q1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_inpuSK3uMYwv7FDxxYJmLB
          claim_id: c_NLc9FaV4i9BnpQf1z7G4Ws
          source_id: s_ERBpvKXmaSwjswy6gD9LNT
          stance: supports
          locator: CBDB:71158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71158）
          source: &a1
            id: s_ERBpvKXmaSwjswy6gD9LNT
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 71158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71158&o=json
            external_identifier: CBDB:71158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bMPmAh8kJbeLJQHUYM42A9
        subject_person_id: p_Mr8WDJLVYwrUKqaJMU9Q1F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1754年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4xFoLMZRVLygvaZvJaB5So
          claim_id: c_bMPmAh8kJbeLJQHUYM42A9
          source_id: s_ERBpvKXmaSwjswy6gD9LNT
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
        id: c_WFnnbK2XDmNXvqWt4zo4xt
        subject_person_id: p_Mr8WDJLVYwrUKqaJMU9Q1F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WpfAxzLsT2beUNP1AcL1g2
          claim_id: c_WFnnbK2XDmNXvqWt4zo4xt
          source_id: s_ERBpvKXmaSwjswy6gD9LNT
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
        id: c_2aY3cUGUmuzTGKXGJZM6n7
        subject_person_id: p_Mr8WDJLVYwrUKqaJMU9Q1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾（1754年—1825年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ak_xVsKKhWfyzdv2HSDED2
          claim_id: c_2aY3cUGUmuzTGKXGJZM6n7
          source_id: s_ERBpvKXmaSwjswy6gD9LNT
          stance: supports
          locator: CBDB:71158
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

# 王軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軾 | accepted |
| birth.date | 1754年 | accepted |
| death.date | 1825年 | accepted |
| bio.summary | 王軾（1754年—1825年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軾（CBDB 71158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71158&o=json)
