---
schema: wang-person/v1
id: p_qqWcFmhw51hAZ9YgDnuCRf
status: active
merged_into: null
display_name: 王遵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ph8kDcK2izATDQWrLND1AD
        subject_person_id: p_qqWcFmhw51hAZ9YgDnuCRf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CKjNt6MenacPxXxJpfyMSo
          claim_id: c_Ph8kDcK2izATDQWrLND1AD
          source_id: s_FVoDXQAaW6n3NKz1tS84UH
          stance: supports
          locator: CBDB:117612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117612）
          source: &a1
            id: s_FVoDXQAaW6n3NKz1tS84UH
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 117612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117612&o=json
            external_identifier: CBDB:117612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KKhNAZMaAShvzsHomeH93X
        subject_person_id: p_qqWcFmhw51hAZ9YgDnuCRf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1306年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXVCMcbrRXHXsuG5LtkvEP
          claim_id: c_KKhNAZMaAShvzsHomeH93X
          source_id: s_FVoDXQAaW6n3NKz1tS84UH
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
        id: c_AF3nsuNQSpoECb8Kn8iyjG
        subject_person_id: p_qqWcFmhw51hAZ9YgDnuCRf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1330年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6WdMRS5SwLZQnLYS5WFAyc
          claim_id: c_AF3nsuNQSpoECb8Kn8iyjG
          source_id: s_FVoDXQAaW6n3NKz1tS84UH
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
        id: c_pMRqKKLajmKmSd33LWB6yJ
        subject_person_id: p_qqWcFmhw51hAZ9YgDnuCRf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3QRigZzz4ZE914VSGEswD
          claim_id: c_pMRqKKLajmKmSd33LWB6yJ
          source_id: s_FVoDXQAaW6n3NKz1tS84UH
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

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| birth.date | 1306年 | accepted |
| death.date | 1330年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 117612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117612&o=json)
