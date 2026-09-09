---
schema: wang-person/v1
id: p_xG6Uatb4hvJpHFBwk8TY1u
status: active
merged_into: null
display_name: 王祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_71iJStwEAgpwGArsYDSxW8
        subject_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxVRvFWF1H4Ds8qjuYSmfE
          claim_id: c_71iJStwEAgpwGArsYDSxW8
          source_id: s_XYnyDr4ADN3cVKH4o6URte
          stance: supports
          locator: CBDB:198138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198138）
          source: &a1
            id: s_XYnyDr4ADN3cVKH4o6URte
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 198138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198138&o=json
            external_identifier: CBDB:198138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ryjzcQa4QBp61XZQ5dB1qV
        subject_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1422年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfZ5jycdzuFghyhUtEc1ns
          claim_id: c_ryjzcQa4QBp61XZQ5dB1qV
          source_id: s_XYnyDr4ADN3cVKH4o6URte
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
        id: c_PJuPPiRB4KDyqEm2Tbz4ho
        subject_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
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
        - id: cs_9KAEnPubwkcj8iGXiKDfBQ
          claim_id: c_PJuPPiRB4KDyqEm2Tbz4ho
          source_id: s_XYnyDr4ADN3cVKH4o6URte
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

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| birth.date | 1422年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祐（CBDB 198138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198138&o=json)
