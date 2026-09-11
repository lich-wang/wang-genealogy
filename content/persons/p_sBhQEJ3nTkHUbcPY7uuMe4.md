---
schema: wang-person/v1
id: p_sBhQEJ3nTkHUbcPY7uuMe4
status: active
merged_into: null
display_name: 王義端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGFhq1eDiXD6egQ9Kxy7r7
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_56EjM7H3PX6R2d8n2rS31X
          claim_id: c_LGFhq1eDiXD6egQ9Kxy7r7
          source_id: s_bHVrGq2Xkj7AJi3V51QVu6
          stance: supports
          locator: CBDB:35303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35303）
          source: &a1
            id: s_bHVrGq2Xkj7AJi3V51QVu6
            source_type: api_record
            title: 中国历代人物传记资料库：王義端（CBDB 35303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35303&o=json
            external_identifier: CBDB:35303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y1WGnUEVhETsXf1CF58g9D
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1220年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GVvhSQXxVJ7eEC5JnR3csz
          claim_id: c_Y1WGnUEVhETsXf1CF58g9D
          source_id: s_bHVrGq2Xkj7AJi3V51QVu6
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
        id: c_RC4HxXTskKWtQ6px5VX6fZ
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1306年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gc4LiRhH8Ask82DWTfjSHJ
          claim_id: c_RC4HxXTskKWtQ6px5VX6fZ
          source_id: s_bHVrGq2Xkj7AJi3V51QVu6
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
        id: c_KcFpX8LLh3AhDHWzjiPfV1
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
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
        - id: cs_QsH7JM96R8NSV9TESFKvhn
          claim_id: c_KcFpX8LLh3AhDHWzjiPfV1
          source_id: s_bHVrGq2Xkj7AJi3V51QVu6
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
        id: c_eVuoxpdwUPC0jT7FNJRMeu
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZzeDPJo9mUk4CtbmH7JwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87s7i0KacW-CSFxtI0aZc1
          claim_id: c_eVuoxpdwUPC0jT7FNJRMeu
          source_id: s_w2639fELDkQb8jDWGeagXs
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1957;1958：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w2639fELDkQb8jDWGeagXs
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 35314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35314&o=json
            external_identifier: CBDB:35314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8ZzeDPJo9mUk4CtbmH7JwH
        status: active
        display_name: 王希文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義端 | accepted |
| birth.date | 1220年 | accepted |
| death.date | 1306年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8ZzeDPJo9mUk4CtbmH7JwH | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希文（CBDB 35314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35314&o=json)
- [中国历代人物传记资料库：王義端（CBDB 35303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35303&o=json)
