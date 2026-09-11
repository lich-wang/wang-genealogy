---
schema: wang-person/v1
id: p_vc9c3mkQxRy6aUfxzv3hqq
status: active
merged_into: null
display_name: 王三接
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5NonSRyBhMAXU7iHssVPt6
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xTNTA5DBT57FUFxnfn63V6
          claim_id: c_5NonSRyBhMAXU7iHssVPt6
          source_id: s_P9Vmz2YG7KJjvEp1x5Kc7V
          stance: supports
          locator: CBDB:203882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203882）
          source: &a1
            id: s_P9Vmz2YG7KJjvEp1x5Kc7V
            source_type: api_record
            title: 中国历代人物传记资料库：王三接（CBDB 203882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203882&o=json
            external_identifier: CBDB:203882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2kJYD7G8BAVu6M2waa61LV
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBpPmAMCwAEBL5aaFruCnE
          claim_id: c_2kJYD7G8BAVu6M2waa61LV
          source_id: s_P9Vmz2YG7KJjvEp1x5Kc7V
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
        id: c_quCXLc1uuhM4kCiScfePcz
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
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
        - id: cs_Fc79nKBD6DkNwqBnkXJoNT
          claim_id: c_quCXLc1uuhM4kCiScfePcz
          source_id: s_P9Vmz2YG7KJjvEp1x5Kc7V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H5DHtcKk4sjfxvrDq0QfUq
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsGwaKQVPhoBZJfFDmuuvw
          claim_id: c_H5DHtcKk4sjfxvrDq0QfUq
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GYs3JvJ7e3R4XSB5TUuNUD
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 311389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json
            external_identifier: CBDB:311389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qsqNNxC6SQb2oA7yPxzojc
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三接

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三接 | accepted |
| birth.date | 1508年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qsqNNxC6SQb2oA7yPxzojc | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三接（CBDB 203882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203882&o=json)
- [中国历代人物传记资料库：王相（CBDB 311389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json)
