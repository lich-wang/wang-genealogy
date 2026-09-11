---
schema: wang-person/v1
id: p_KHaXhPbPqyEQrQLvtC1jiQ
status: active
merged_into: null
display_name: 王鎮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LK2V8Gg5zoyETWHDmX73oQ
        subject_person_id: p_KHaXhPbPqyEQrQLvtC1jiQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6y8RBRRTk7Ds3DPcNDQCs5
          claim_id: c_LK2V8Gg5zoyETWHDmX73oQ
          source_id: s_mfx6fGg6us6j3RAn2zcfoE
          stance: supports
          locator: CBDB:21953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21953）
          source: &a1
            id: s_mfx6fGg6us6j3RAn2zcfoE
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 21953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21953&o=json
            external_identifier: CBDB:21953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u1LvqGiHasMLy8ADq5AeMC
        subject_person_id: p_KHaXhPbPqyEQrQLvtC1jiQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1116年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kdp1LVn5kuDyDpZSKgBvEi
          claim_id: c_u1LvqGiHasMLy8ADq5AeMC
          source_id: s_mfx6fGg6us6j3RAn2zcfoE
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
        id: c_uL8HNdbPgeGbEVU8uDSN7N
        subject_person_id: p_KHaXhPbPqyEQrQLvtC1jiQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1193年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TY2t7Mk2UcPFYuDfF6i7yD
          claim_id: c_uL8HNdbPgeGbEVU8uDSN7N
          source_id: s_mfx6fGg6us6j3RAn2zcfoE
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
        id: c_uLYBA9xSLfSjbG8SZua9Je
        subject_person_id: p_KHaXhPbPqyEQrQLvtC1jiQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D334gJ3BUxCc41VDZSRgrr
          claim_id: c_uLYBA9xSLfSjbG8SZua9Je
          source_id: s_mfx6fGg6us6j3RAn2zcfoE
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
        id: c_Filtxa7KxxIkpks98Yl57B
        subject_person_id: p_bq7C4AE9wX2HtYoiZvKkhT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KHaXhPbPqyEQrQLvtC1jiQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rYAIBM7nMzCMEPfxE5QpDr
          claim_id: c_Filtxa7KxxIkpks98Yl57B
          source_id: s_Bw7zDBFLfvTRAwxWiXuZ7M
          stance: supports
          locator: CBDB 双向互证（子 王鎮 ⇄ 父 王蕃）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Bw7zDBFLfvTRAwxWiXuZ7M
            source_type: api_record
            title: 中国历代人物传记资料库：王蕃（CBDB 21952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21952&o=json
            external_identifier: CBDB:21952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bq7C4AE9wX2HtYoiZvKkhT
        status: active
        display_name: 王蕃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| birth.date | 1116年 | accepted |
| death.date | 1193年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bq7C4AE9wX2HtYoiZvKkhT | 王蕃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕃（CBDB 21952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21952&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 21953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21953&o=json)
