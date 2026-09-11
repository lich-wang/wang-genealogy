---
schema: wang-person/v1
id: p_LVQYZ3GtoMeNLNRiLNfrkK
status: active
merged_into: null
display_name: 王栖曜
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_78pJwbECPAfZt5LhecbTAc
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栖曜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bP39ZSesxY6neK1yB2PTKk
          claim_id: c_78pJwbECPAfZt5LhecbTAc
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
          stance: supports
          locator: CBDB:189585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189585）
          source: &a1
            id: s_D1W8yD5PetNe6Lxk4RYza7
            source_type: api_record
            title: 中国历代人物传记资料库：王栖曜（CBDB 189585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189585&o=json
            external_identifier: CBDB:189585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rrQpcZTzEjy3xBiwme1FQw
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1hV25q4bVBBt73VpJ3H7jA
          claim_id: c_rrQpcZTzEjy3xBiwme1FQw
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
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
        id: c_ebbGX9LhFb7gZNSvwGGjQm
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
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
        - id: cs_TeQCpjAa8p8zXD72YX5Tdf
          claim_id: c_ebbGX9LhFb7gZNSvwGGjQm
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
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
        id: c_SwS5fkkTXunuF0kPOw7lNq
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRzLk4PXOBnA9j_LAiRjaj
          claim_id: c_SwS5fkkTXunuF0kPOw7lNq
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_en59K3fagj8VJPQw7ris7d
        status: active
        display_name: 王崇術
        merged_into_person_id: null
  children:
    - claim:
        id: c_knNS_XRHxUeYOuXkLefYez
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_65RNaUCAqBwTremhQm6TC6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSACCvryS1bjwWWMfDDLi-
          claim_id: c_knNS_XRHxUeYOuXkLefYez
          source_id: s_X5sxFwokompcjobznWmEEA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X5sxFwokompcjobznWmEEA
            source_type: api_record
            title: 中国历代人物传记资料库：王茂元（CBDB 189586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189586&o=json
            external_identifier: CBDB:189586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_65RNaUCAqBwTremhQm6TC6
        status: active
        display_name: 王茂元
        merged_into_person_id: null
    - claim:
        id: c_08HPAPBmBzeROg-dDU3wFO
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b44GyPLdQLYMEEkYRKhqEw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s-qXHvZIGvnnZ4K7Dwxmn3
          claim_id: c_08HPAPBmBzeROg-dDU3wFO
          source_id: s_GYKFUQhs2Nw58J7H6Z9gtR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GYKFUQhs2Nw58J7H6Z9gtR
            source_type: api_record
            title: 中国历代人物传记资料库：王長善（CBDB 195425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195425&o=json
            external_identifier: CBDB:195425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b44GyPLdQLYMEEkYRKhqEw
        status: active
        display_name: 王長善
        merged_into_person_id: null
    - claim:
        id: c_sIkaFUYNtkMAMKJLEFUesh
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dS59cmg2f2cMGWXSKD371d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qB4dfSIvoUUtmLPv-GYaQ8
          claim_id: c_sIkaFUYNtkMAMKJLEFUesh
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dS59cmg2f2cMGWXSKD371d
        status: active
        display_name: 王翊元
        merged_into_person_id: null
    - claim:
        id: c_AYgpfi02p2CDzG-w4apQ5t
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NM9HzrDdXMrTygWTqURyQ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q40B9KEr_G7GY3fdd0atR3
          claim_id: c_AYgpfi02p2CDzG-w4apQ5t
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NM9HzrDdXMrTygWTqURyQ5
        status: active
        display_name: 王參元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王栖曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栖曜 | accepted |
| death.date | 803年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_en59K3fagj8VJPQw7ris7d | 王崇術 | accepted |
| children | p_65RNaUCAqBwTremhQm6TC6 | 王茂元 | accepted |
| children | p_b44GyPLdQLYMEEkYRKhqEw | 王長善 | accepted |
| children | p_dS59cmg2f2cMGWXSKD371d | 王翊元 | accepted |
| children | p_NM9HzrDdXMrTygWTqURyQ5 | 王參元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂元（CBDB 189586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189586&o=json)
- [中国历代人物传记资料库：王栖曜（CBDB 189585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189585&o=json)
- [中国历代人物传记资料库：王長善（CBDB 195425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195425&o=json)
