---
schema: wang-person/v1
id: p_3BqLdv5ornEQLqdPoknpXE
status: active
merged_into: null
display_name: 王屏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yxn4rF4dqiX2Fvs6LnUGMo
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D2wCzrax8U4PUG6YW5L1iX
          claim_id: c_Yxn4rF4dqiX2Fvs6LnUGMo
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: CBDB:199995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199995）
          source: &a1
            id: s_7w1N5HRLcjZW1QnPCRLxtB
            source_type: api_record
            title: 中国历代人物传记资料库：王屏（CBDB 199995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json
            external_identifier: CBDB:199995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MD6JoWd21aFETK7cegs3QS
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JkBQK8fNPX6kHLpXb39A5n
          claim_id: c_MD6JoWd21aFETK7cegs3QS
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
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
        id: c_hC59Zt9wP85AaUPp4Hhf8R
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
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
        - id: cs_ds4i28CFGESa7LDKEtrJQe
          claim_id: c_hC59Zt9wP85AaUPp4Hhf8R
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
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

# 王屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王屏 | accepted |
| birth.date | 1447年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王屏（CBDB 199995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json)
