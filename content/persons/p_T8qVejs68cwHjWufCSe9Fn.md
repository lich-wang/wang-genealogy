---
schema: wang-person/v1
id: p_T8qVejs68cwHjWufCSe9Fn
status: active
merged_into: null
display_name: 王燕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A9na97dtXdUpWhEsi8LG7C
        subject_person_id: p_T8qVejs68cwHjWufCSe9Fn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fi1XNTJPAyo4Z9JSD6C3T
          claim_id: c_A9na97dtXdUpWhEsi8LG7C
          source_id: s_3SPTgGK2gnTm2H6pxgFJpJ
          stance: supports
          locator: CBDB:69465
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69465）
          source: &a1
            id: s_3SPTgGK2gnTm2H6pxgFJpJ
            source_type: api_record
            title: 中国历代人物传记资料库：王燕（CBDB 69465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69465&o=json
            external_identifier: CBDB:69465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vQvqMEGzE9P3JHDHd8jmCr
        subject_person_id: p_T8qVejs68cwHjWufCSe9Fn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1652年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sArkCC9nKXUrfbUx4qeSss
          claim_id: c_vQvqMEGzE9P3JHDHd8jmCr
          source_id: s_3SPTgGK2gnTm2H6pxgFJpJ
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
        id: c_bxBDQcQAyW2rvwVq3XP7JY
        subject_person_id: p_T8qVejs68cwHjWufCSe9Fn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1708年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CK9W8aA5GHcDfQ996KvsP4
          claim_id: c_bxBDQcQAyW2rvwVq3XP7JY
          source_id: s_3SPTgGK2gnTm2H6pxgFJpJ
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
        id: c_Kua827xHA18dip8jhDt5V3
        subject_person_id: p_T8qVejs68cwHjWufCSe9Fn
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
        - id: cs_4mGkco6Nhcbi7P8u6dpAot
          claim_id: c_Kua827xHA18dip8jhDt5V3
          source_id: s_3SPTgGK2gnTm2H6pxgFJpJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_242-rlbavIYL-Yc7qB9OX5
        subject_person_id: p_T8qVejs68cwHjWufCSe9Fn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2mtGKG4ErXixRJHPUBFMdq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3YGTpH1P6e4ydqZ9z-Q9y
          claim_id: c_242-rlbavIYL-Yc7qB9OX5
          source_id: s_BRFVJ8HpbD6Cgc5RxFmz6J
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13177：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BRFVJ8HpbD6Cgc5RxFmz6J
            source_type: api_record
            title: 中国历代人物传记资料库：王如久（CBDB 527010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527010&o=json
            external_identifier: CBDB:527010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2mtGKG4ErXixRJHPUBFMdq
        status: active
        display_name: 王如久
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王燕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燕 | accepted |
| birth.date | 1652年 | accepted |
| death.date | 1708年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2mtGKG4ErXixRJHPUBFMdq | 王如久 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如久（CBDB 527010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527010&o=json)
- [中国历代人物传记资料库：王燕（CBDB 69465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69465&o=json)
