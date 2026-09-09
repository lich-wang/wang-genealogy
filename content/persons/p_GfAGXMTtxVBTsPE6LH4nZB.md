---
schema: wang-person/v1
id: p_GfAGXMTtxVBTsPE6LH4nZB
status: active
merged_into: null
display_name: 王敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UKynAVZ1iB7BBnXoKyEYA8
        subject_person_id: p_GfAGXMTtxVBTsPE6LH4nZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yHaSy3LZXrGxLQntqCTyL6
          claim_id: c_UKynAVZ1iB7BBnXoKyEYA8
          source_id: s_qQ2pYicurD3s8CFRxA5mtF
          stance: supports
          locator: CBDB:126698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126698）
          source: &a1
            id: s_qQ2pYicurD3s8CFRxA5mtF
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 126698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126698&o=json
            external_identifier: CBDB:126698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LiR4EHxfGJNu4evKdMLcDy
        subject_person_id: p_GfAGXMTtxVBTsPE6LH4nZB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1352年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kzzh2R2Ey7NRAk5iUVqrjk
          claim_id: c_LiR4EHxfGJNu4evKdMLcDy
          source_id: s_qQ2pYicurD3s8CFRxA5mtF
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
        id: c_8VgyjRGdBvZvZNvXaHT227
        subject_person_id: p_GfAGXMTtxVBTsPE6LH4nZB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1382年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L7fufUAd76pUxs14gwMf7c
          claim_id: c_8VgyjRGdBvZvZNvXaHT227
          source_id: s_qQ2pYicurD3s8CFRxA5mtF
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
        id: c_ALoKAKnBrHHc2F5B4PhcHY
        subject_person_id: p_GfAGXMTtxVBTsPE6LH4nZB
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
        - id: cs_a9jcKtv8MQAt4G7iyEm2ug
          claim_id: c_ALoKAKnBrHHc2F5B4PhcHY
          source_id: s_qQ2pYicurD3s8CFRxA5mtF
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

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| birth.date | 1352年 | accepted |
| death.date | 1382年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 126698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126698&o=json)
