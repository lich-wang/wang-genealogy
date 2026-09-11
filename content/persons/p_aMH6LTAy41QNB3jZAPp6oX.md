---
schema: wang-person/v1
id: p_aMH6LTAy41QNB3jZAPp6oX
status: active
merged_into: null
display_name: 王仙客
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6PxhKf9GXEMQJuXwjevVu
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙客
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xSrWzDJ9xBDQWKCCenyM1J
          claim_id: c_S6PxhKf9GXEMQJuXwjevVu
          source_id: s_sAc6eD93K7B9kEVuxArfdn
          stance: supports
          locator: CBDB:154279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154279）
          source: &a1
            id: s_sAc6eD93K7B9kEVuxArfdn
            source_type: api_record
            title: 中国历代人物传记资料库：王仙客（CBDB 154279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154279&o=json
            external_identifier: CBDB:154279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xoGEfACHQKJAvztG1sXcUM
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
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
        - id: cs_L7AhE3AkHXg912HcwmqiqR
          claim_id: c_xoGEfACHQKJAvztG1sXcUM
          source_id: s_sAc6eD93K7B9kEVuxArfdn
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
        id: c_kiLYwYsAcH_P1Td0B5he92
        subject_person_id: p_S8HLtFDDBHcXVtx11UNHQB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZ2GhN4eMeHnjovZ-pM3KM
          claim_id: c_kiLYwYsAcH_P1Td0B5he92
          source_id: s_sAc6eD93K7B9kEVuxArfdn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S8HLtFDDBHcXVtx11UNHQB
        status: active
        display_name: 王道質
        merged_into_person_id: null
  children:
    - claim:
        id: c_5LCKB3uc8IxRyu8o3_GyRD
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1DrQjoCaBy8kCLHN3o7pc1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PgDg_Kzb60V6WJ7BVZpw4n
          claim_id: c_5LCKB3uc8IxRyu8o3_GyRD
          source_id: s_euKJkUcKyKvg5zCCtgzZRF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8209：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_euKJkUcKyKvg5zCCtgzZRF
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 175804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175804&o=json
            external_identifier: CBDB:175804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1DrQjoCaBy8kCLHN3o7pc1
        status: active
        display_name: 王頊
        merged_into_person_id: null
    - claim:
        id: c_wSvMRjT4oqMH-__A_AAlpG
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U6SDgfTnosXBueATqBJbhT
          claim_id: c_wSvMRjT4oqMH-__A_AAlpG
          source_id: s_sAc6eD93K7B9kEVuxArfdn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DSKsWKJmH5oHVZyhn4Ad7m
        status: active
        display_name: 王瑒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_QSnYrJIx3vNQxNwahA2BBE
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1R27M2czAahiFDCMUScN43
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3BshL6WNg5KrjHIRcpZZR
          claim_id: c_QSnYrJIx3vNQxNwahA2BBE
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 216：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gSvbm3ZseREEmUhYMheei9
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 141020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json
            external_identifier: CBDB:141020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1R27M2czAahiFDCMUScN43
        status: active
        display_name: 王京
        merged_into_person_id: null
  other: []
---

# 王仙客

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仙客 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S8HLtFDDBHcXVtx11UNHQB | 王道質 | accepted |
| children | p_1DrQjoCaBy8kCLHN3o7pc1 | 王頊 | accepted |
| children | p_DSKsWKJmH5oHVZyhn4Ad7m | 王瑒 | accepted |
| descendants | p_1R27M2czAahiFDCMUScN43 | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 141020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json)
- [中国历代人物传记资料库：王仙客（CBDB 154279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154279&o=json)
- [中国历代人物传记资料库：王頊（CBDB 175804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175804&o=json)
