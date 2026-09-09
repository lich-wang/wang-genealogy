---
schema: wang-person/v1
id: p_noGUpAicpFcQHyXUKYjMF5
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxiKkhJCQrRqEKxdmn3qpE
        subject_person_id: p_noGUpAicpFcQHyXUKYjMF5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N3Je5FcpKjdbRe4X1tXLLf
          claim_id: c_jxiKkhJCQrRqEKxdmn3qpE
          source_id: s_AE4ijq8Gft13GfkfUQSkiM
          stance: supports
          locator: CBDB:126742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126742）
          source: &a1
            id: s_AE4ijq8Gft13GfkfUQSkiM
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 126742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126742&o=json
            external_identifier: CBDB:126742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yQgZ4ugQZDPyvLGnv1KFKH
        subject_person_id: p_noGUpAicpFcQHyXUKYjMF5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1476年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2gR3AEptouqoyb4r28zCm9
          claim_id: c_yQgZ4ugQZDPyvLGnv1KFKH
          source_id: s_AE4ijq8Gft13GfkfUQSkiM
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
        id: c_47Kej6vkneFTXUkhqo1dFY
        subject_person_id: p_noGUpAicpFcQHyXUKYjMF5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P15QjQqp6daucz73S8VW8L
          claim_id: c_47Kej6vkneFTXUkhqo1dFY
          source_id: s_AE4ijq8Gft13GfkfUQSkiM
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
        id: c_HC2cQ18QjFEvP8SG65bep4
        subject_person_id: p_noGUpAicpFcQHyXUKYjMF5
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
        - id: cs_R86iTGihWtkYuH68J42zw5
          claim_id: c_HC2cQ18QjFEvP8SG65bep4
          source_id: s_AE4ijq8Gft13GfkfUQSkiM
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1476年 | accepted |
| death.date | 1529年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 126742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126742&o=json)
