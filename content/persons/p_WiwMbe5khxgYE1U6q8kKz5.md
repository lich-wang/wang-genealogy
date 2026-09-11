---
schema: wang-person/v1
id: p_WiwMbe5khxgYE1U6q8kKz5
status: active
merged_into: null
display_name: 王璟
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91iPwDvRz6X2HqaJ4zZXsn
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7AgXJvNfhBcfga6z3tksz4
          claim_id: c_91iPwDvRz6X2HqaJ4zZXsn
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
          stance: supports
          locator: CBDB:67987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67987）
          source: &a1
            id: s_oxkEut5FU2hAHFFTMPmi4W
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 67987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67987&o=json
            external_identifier: CBDB:67987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gFBj1A3hy1qkHDHxT12FRo
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sYg9d4RYZm9REaaKy6U1j
          claim_id: c_gFBj1A3hy1qkHDHxT12FRo
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
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
        id: c_kAMzpMV1CKM6i3GYE1FAhw
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q9m2G51EBMUfuyZSw3q1n6
          claim_id: c_kAMzpMV1CKM6i3GYE1FAhw
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
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
        id: c_icV7bjdT4o4MV6kzW6g46W
        subject_person_id: p_WiwMbe5khxgYE1U6q8kKz5
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
        - id: cs_LrkFHLb8PJ6X7RR3e6GNji
          claim_id: c_icV7bjdT4o4MV6kzW6g46W
          source_id: s_oxkEut5FU2hAHFFTMPmi4W
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
        id: c_P0uudqNTOIcKVu6-nWdmyq
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q8gl2p1kffLDisSWpSPGfZ
          claim_id: c_P0uudqNTOIcKVu6-nWdmyq
          source_id: s_r9QnLpEBAEg45SiFrhK6aC
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r9QnLpEBAEg45SiFrhK6aC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（246750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246750&o=json
            external_identifier: CBDB:246750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.244Z
            metadata_json: null
      object_person:
        id: p_sw3d858SSyyvRPzeeoi5f5
        status: active
        display_name: 王纲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6QC9p7ZzT3Ws_H-DQiqnky
        subject_person_id: p_5cGUwGYGBQBf3ZNRJ6zVzU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRay-epSTZzEXJwAPru4WG
          claim_id: c_6QC9p7ZzT3Ws_H-DQiqnky
          source_id: s_QvmYayo4YHyQ3r7jSjrV7L
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第八十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QvmYayo4YHyQ3r7jSjrV7L
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉氏（246752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246752&o=json
            external_identifier: CBDB:246752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:55.531Z
            metadata_json: null
      object_person:
        id: p_5cGUwGYGBQBf3ZNRJ6zVzU
        status: active
        display_name: 刘氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_jzBZM4q3y-u_wWeWtAC_mg
        subject_person_id: p_sWnQEKdTJEEDPqzmGjNy9f
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z7UeROAB2yyss5G7_8bTsm
          claim_id: c_jzBZM4q3y-u_wWeWtAC_mg
          source_id: s_wnRKRAKdo4c1dUyNyrNHnN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wnRKRAKdo4c1dUyNyrNHnN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王海（246748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246748&o=json
            external_identifier: CBDB:246748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_sWnQEKdTJEEDPqzmGjNy9f
        status: active
        display_name: 王海
        merged_into_person_id: null
    - claim:
        id: c_FcGFa2Y5ZAyX0QYE686r5c
        subject_person_id: p_L6DCbYaxvTKejPkJXVgChn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcPN_A6OjDWFldepdX_Buh
          claim_id: c_FcGFa2Y5ZAyX0QYE686r5c
          source_id: s_vYGKv5e2x1htavkJLyVnKL
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vYGKv5e2x1htavkJLyVnKL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（246749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246749&o=json
            external_identifier: CBDB:246749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.640Z
            metadata_json: null
      object_person:
        id: p_L6DCbYaxvTKejPkJXVgChn
        status: active
        display_name: 王升
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| birth.date | 1447年 | accepted |
| death.date | 1533年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sw3d858SSyyvRPzeeoi5f5 | 王纲 | accepted |
| spouses | p_5cGUwGYGBQBf3ZNRJ6zVzU | 刘氏 | accepted |
| ancestors | p_sWnQEKdTJEEDPqzmGjNy9f | 王海 | accepted |
| ancestors | p_L6DCbYaxvTKejPkJXVgChn | 王升 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 67987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67987&o=json)
- [CBDB 中国历代人物传记资料库：劉氏（246752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246752&o=json)
- [CBDB 中国历代人物传记资料库：王綱（246750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246750&o=json)
- [CBDB 中国历代人物传记资料库：王海（246748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246748&o=json)
- [CBDB 中国历代人物传记资料库：王昇（246749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246749&o=json)
