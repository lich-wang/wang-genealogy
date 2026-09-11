---
schema: wang-person/v1
id: p_GQ1GXZbABMzPSWjdERZQAa
status: active
merged_into: null
display_name: 王心
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GB69ihLHqCo2m2yP6gGCdc
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6rFLXo2AFJFg29JDLSm1xQ
          claim_id: c_GB69ihLHqCo2m2yP6gGCdc
          source_id: s_EFmUX2HrkrXg2pdJYeVM9N
          stance: supports
          locator: CBDB:203250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203250）
          source: &a1
            id: s_EFmUX2HrkrXg2pdJYeVM9N
            source_type: api_record
            title: 中国历代人物传记资料库：王心（CBDB 203250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203250&o=json
            external_identifier: CBDB:203250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zbYjuKPFBQXC3yofQea3xx
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3jD3rn9bsDpzG1G3nQcAt
          claim_id: c_zbYjuKPFBQXC3yofQea3xx
          source_id: s_EFmUX2HrkrXg2pdJYeVM9N
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
        id: c_1FMaGnnxKG4Zv1g6tjRoFN
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
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
        - id: cs_dsyYJYFUJtHGqrjDEgeypD
          claim_id: c_1FMaGnnxKG4Zv1g6tjRoFN
          source_id: s_EFmUX2HrkrXg2pdJYeVM9N
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
        id: c_TGAcB-5bh1M9qnIaZgAiG5
        subject_person_id: p_7HAN6MZgrNF637x89HuFkG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQMsP1DoYBASd-4eS3DIXG
          claim_id: c_TGAcB-5bh1M9qnIaZgAiG5
          source_id: s_wmC3MDEPgsKi3WAVSqTheD
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wmC3MDEPgsKi3WAVSqTheD
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 301984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301984&o=json
            external_identifier: CBDB:301984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7HAN6MZgrNF637x89HuFkG
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zVZEuT5XE8cNKOqhhydQI0
        subject_person_id: p_fnym66xMbCVkiQBKbKW5mD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWvUNuFv_pL1glW2AF3noA
          claim_id: c_zVZEuT5XE8cNKOqhhydQI0
          source_id: s_Zt6WN2fuVwoP6a9BW1vTVw
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zt6WN2fuVwoP6a9BW1vTVw
            source_type: api_record
            title: 中国历代人物传记资料库：王敬祥（CBDB 301982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301982&o=json
            external_identifier: CBDB:301982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fnym66xMbCVkiQBKbKW5mD
        status: active
        display_name: 王敬祥
        merged_into_person_id: null
    - claim:
        id: c_ZvLJvM8zF3R-V8piyOfqLn
        subject_person_id: p_ycnqfdny49ravnSyMWF16A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptnBPYAhPqg41-OEXZt5BV
          claim_id: c_ZvLJvM8zF3R-V8piyOfqLn
          source_id: s_n9NkcAwF9TLeP7HSXePRKD
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n9NkcAwF9TLeP7HSXePRKD
            source_type: api_record
            title: 中国历代人物传记资料库：王雷（CBDB 301983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301983&o=json
            external_identifier: CBDB:301983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ycnqfdny49ravnSyMWF16A
        status: active
        display_name: 王雷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7HAN6MZgrNF637x89HuFkG | 王浩 | accepted |
| ancestors | p_fnym66xMbCVkiQBKbKW5mD | 王敬祥 | accepted |
| ancestors | p_ycnqfdny49ravnSyMWF16A | 王雷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 301984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301984&o=json)
- [中国历代人物传记资料库：王敬祥（CBDB 301982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301982&o=json)
- [中国历代人物传记资料库：王雷（CBDB 301983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301983&o=json)
- [中国历代人物传记资料库：王心（CBDB 203250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203250&o=json)
