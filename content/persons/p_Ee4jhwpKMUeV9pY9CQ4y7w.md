---
schema: wang-person/v1
id: p_Ee4jhwpKMUeV9pY9CQ4y7w
status: active
merged_into: null
display_name: 王德本
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2eFNoKibgcWE2CSLfQ2j7A
        subject_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZYs5BhkAg1BQtJpaZq7UXB
          claim_id: c_2eFNoKibgcWE2CSLfQ2j7A
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
          stance: supports
          locator: CBDB:175680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175680）
          source: &a1
            id: s_v3aDqyKbTDo5JRrHEV3vFn
            source_type: api_record
            title: 中国历代人物传记资料库：王德本（CBDB 175680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175680&o=json
            external_identifier: CBDB:175680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5jKQPNrewAUbYPfQDVcyE7
        subject_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 626年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTdKJEuJ55afFMrinJCYMA
          claim_id: c_5jKQPNrewAUbYPfQDVcyE7
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
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
        id: c_Ah6KmKB6zrT65y8PNPfZ89
        subject_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uc7B62LrbuCkrkoE6JU9F8
          claim_id: c_Ah6KmKB6zrT65y8PNPfZ89
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
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
        id: c_KO-1ErvFeEyv7Y8HQiHp_8
        subject_person_id: p_oVGxgeqgB52Zexa9NQq2Wt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivR1KEhXWWmlZIvTmSwB7i
          claim_id: c_KO-1ErvFeEyv7Y8HQiHp_8
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oVGxgeqgB52Zexa9NQq2Wt
        status: active
        display_name: 王續
        merged_into_person_id: null
  children:
    - claim:
        id: c_DHstsw-XqVQRplKG_UiB4i
        subject_person_id: p_Ee4jhwpKMUeV9pY9CQ4y7w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GqEUz8dkXgBhsFhfvQbbHD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b6UuT_L3zfYrPmDKPuTzhO
          claim_id: c_DHstsw-XqVQRplKG_UiB4i
          source_id: s_v3aDqyKbTDo5JRrHEV3vFn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GqEUz8dkXgBhsFhfvQbbHD
        status: active
        display_name: 王撝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德本 | accepted |
| death.date | 626年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oVGxgeqgB52Zexa9NQq2Wt | 王續 | accepted |
| children | p_GqEUz8dkXgBhsFhfvQbbHD | 王撝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德本（CBDB 175680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175680&o=json)
