---
schema: wang-person/v1
id: p_mP5A4RbrdhPosjKbjMy3Ct
status: active
merged_into: null
display_name: 王澄原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SCALywcjkz6633YeDmcK3q
        subject_person_id: p_mP5A4RbrdhPosjKbjMy3Ct
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WwRNMUdpVGR1AgvYpVyY2k
          claim_id: c_SCALywcjkz6633YeDmcK3q
          source_id: s_aKDbcT3Pb1sTFf4gNw8P8a
          stance: supports
          locator: CBDB:101434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101434）
          source: &a1
            id: s_aKDbcT3Pb1sTFf4gNw8P8a
            source_type: api_record
            title: 中国历代人物传记资料库：王澄原（CBDB 101434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101434&o=json
            external_identifier: CBDB:101434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3VScg5TVuAHZ1UkApPeJ28
        subject_person_id: p_mP5A4RbrdhPosjKbjMy3Ct
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1248年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zMrxm3CmswW63NHixQ7vLR
          claim_id: c_3VScg5TVuAHZ1UkApPeJ28
          source_id: s_aKDbcT3Pb1sTFf4gNw8P8a
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
        id: c_vyfL2RNtcJSPhkFNxFQjZE
        subject_person_id: p_mP5A4RbrdhPosjKbjMy3Ct
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1321年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_frwmsFkfvkMmyvxZkKwi55
          claim_id: c_vyfL2RNtcJSPhkFNxFQjZE
          source_id: s_aKDbcT3Pb1sTFf4gNw8P8a
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
        id: c_nkjCuk5iv44Q5WqMELYJty
        subject_person_id: p_mP5A4RbrdhPosjKbjMy3Ct
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄原（1248年—1321年），元人物。籍贯瑞安州。（中国历代人物传记资料库 CBDB 101434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oHnIkJh9fZiLL-BQYmsRoP
          claim_id: c_nkjCuk5iv44Q5WqMELYJty
          source_id: s_aKDbcT3Pb1sTFf4gNw8P8a
          stance: supports
          locator: CBDB:101434
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

# 王澄原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄原 | accepted |
| birth.date | 1248年 | accepted |
| death.date | 1321年 | accepted |
| bio.summary | 王澄原（1248年—1321年），元人物。籍贯瑞安州。（中国历代人物传记资料库 CBDB 101434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄原（CBDB 101434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101434&o=json)
