---
schema: wang-person/v1
id: p_W2D9MwuPsN8G7PZXkTNBD2
status: active
merged_into: null
display_name: 王得春
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iAtMo5qbFdzqEUAAkqBG3g
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GuWrSZWT1XvZkuhgeVA78F
          claim_id: c_iAtMo5qbFdzqEUAAkqBG3g
          source_id: s_Wa4wiZepYJeDSm62bbFhJH
          stance: supports
          locator: CBDB:204563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204563）
          source: &a1
            id: s_Wa4wiZepYJeDSm62bbFhJH
            source_type: api_record
            title: 中国历代人物传记资料库：王得春（CBDB 204563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204563&o=json
            external_identifier: CBDB:204563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VhGX5C2spd8EGNf9ypAnRy
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvBQ1kcoUC8Bc75gGKY6ef
          claim_id: c_VhGX5C2spd8EGNf9ypAnRy
          source_id: s_Wa4wiZepYJeDSm62bbFhJH
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
        id: c_M2hSd5tKrnPx92HroiHoC4
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
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
        - id: cs_mNYCECmuGwpUvPCc7k75YN
          claim_id: c_M2hSd5tKrnPx92HroiHoC4
          source_id: s_Wa4wiZepYJeDSm62bbFhJH
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
        id: c_3ikarDicGMOe9K6p2yDg47
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8vxuQuTWTt4zWURnmDoIW
          claim_id: c_3ikarDicGMOe9K6p2yDg47
          source_id: s_Y6cg1vrmHBW6v87xYUUoHL
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y6cg1vrmHBW6v87xYUUoHL
            source_type: api_record
            title: 中国历代人物传记资料库：王惟（CBDB 320864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json
            external_identifier: CBDB:320864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MU2tTmhiuXd4gZeWVvtKyQ
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QBdMgHkP8TKOaTbDX2XSnQ
        subject_person_id: p_HKtsrERLbPSs3yFn5m2saF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uB_AXbg5OtRG7WMUGhtUSW
          claim_id: c_QBdMgHkP8TKOaTbDX2XSnQ
          source_id: s_h31K8bywqY2NBMrRhSTJ3h
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h31K8bywqY2NBMrRhSTJ3h
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瓉（CBDB 320863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320863&o=json
            external_identifier: CBDB:320863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HKtsrERLbPSs3yFn5m2saF
        status: active
        display_name: 王錫瓉
        merged_into_person_id: null
    - claim:
        id: c_9gWnZaT7d0_EawGFnYtcVt
        subject_person_id: p_x4A1qjJkD6YhYAHa8NE8Cc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2xV5mDCEa1xMzHoGd6e6E
          claim_id: c_9gWnZaT7d0_EawGFnYtcVt
          source_id: s_86oa4q79FsBN5iCHH6SUY8
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_86oa4q79FsBN5iCHH6SUY8
            source_type: api_record
            title: 中国历代人物传记资料库：王子華（CBDB 320861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320861&o=json
            external_identifier: CBDB:320861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_x4A1qjJkD6YhYAHa8NE8Cc
        status: active
        display_name: 王子華
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王得春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得春 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MU2tTmhiuXd4gZeWVvtKyQ | 王惟 | accepted |
| ancestors | p_HKtsrERLbPSs3yFn5m2saF | 王錫瓉 | accepted |
| ancestors | p_x4A1qjJkD6YhYAHa8NE8Cc | 王子華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得春（CBDB 204563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204563&o=json)
- [中国历代人物传记资料库：王惟（CBDB 320864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320864&o=json)
- [中国历代人物传记资料库：王錫瓉（CBDB 320863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320863&o=json)
- [中国历代人物传记资料库：王子華（CBDB 320861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320861&o=json)
