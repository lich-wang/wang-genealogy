---
schema: wang-person/v1
id: p_wLYtGZkEdJ6h3vBy6Fffp8
status: active
merged_into: null
display_name: 王汝訥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqCphUpr2ASpyhahW62WAy
        subject_person_id: p_wLYtGZkEdJ6h3vBy6Fffp8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PSMr854G7FYRHwresSLMm9
          claim_id: c_qqCphUpr2ASpyhahW62WAy
          source_id: s_tPvyDeFLtFUdnfcnP57DM1
          stance: supports
          locator: CBDB:71612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71612）
          source: &a1
            id: s_tPvyDeFLtFUdnfcnP57DM1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝訥（CBDB 71612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71612&o=json
            external_identifier: CBDB:71612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DfbfugGcUyD7NaAs9Cc9Ha
        subject_person_id: p_wLYtGZkEdJ6h3vBy6Fffp8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFE8hDuVWcbosXJrefkjMR
          claim_id: c_DfbfugGcUyD7NaAs9Cc9Ha
          source_id: s_tPvyDeFLtFUdnfcnP57DM1
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
        id: c_U1aUGRZVkj7MqWZkKVxich
        subject_person_id: p_wLYtGZkEdJ6h3vBy6Fffp8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1869年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bQA8WDcRWajHNCmknGMKcs
          claim_id: c_U1aUGRZVkj7MqWZkKVxich
          source_id: s_tPvyDeFLtFUdnfcnP57DM1
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
        id: c_sV5DNMhrP7LHQ8Fdx69HyQ
        subject_person_id: p_wLYtGZkEdJ6h3vBy6Fffp8
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
        - id: cs_z4zm7mKEAq13n4B4DP9Qa9
          claim_id: c_sV5DNMhrP7LHQ8Fdx69HyQ
          source_id: s_tPvyDeFLtFUdnfcnP57DM1
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

# 王汝訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝訥 | accepted |
| birth.date | 1826年 | accepted |
| death.date | 1869年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝訥（CBDB 71612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71612&o=json)
