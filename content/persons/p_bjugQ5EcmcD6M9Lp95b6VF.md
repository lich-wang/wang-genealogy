---
schema: wang-person/v1
id: p_bjugQ5EcmcD6M9Lp95b6VF
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ut73nZCoyAp8b1zK9iB1eX
        subject_person_id: p_bjugQ5EcmcD6M9Lp95b6VF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1C29ymMCCXoRiZUss8nsay
          claim_id: c_ut73nZCoyAp8b1zK9iB1eX
          source_id: s_1JUa3WZtqQgVAbKRjwJG7J
          stance: supports
          locator: CBDB:251895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251895）
          source: &a1
            id: s_1JUa3WZtqQgVAbKRjwJG7J
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 251895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251895&o=json
            external_identifier: CBDB:251895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gbCPUWp13rfCGPgdZbKoGn
        subject_person_id: p_bjugQ5EcmcD6M9Lp95b6VF
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
        - id: cs_AFTEwL4uM8kS7u9BT8otoE
          claim_id: c_gbCPUWp13rfCGPgdZbKoGn
          source_id: s_1JUa3WZtqQgVAbKRjwJG7J
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 251895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251895&o=json)
