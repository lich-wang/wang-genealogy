---
schema: wang-person/v1
id: p_uQaNbqHDcDVAcDy4Fuqf6C
status: active
merged_into: null
display_name: 王世鼎
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gmnBiBxzwLccmtw4bx96K9
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3XWQ7L1mQFjuJz4YBMXip4
          claim_id: c_gmnBiBxzwLccmtw4bx96K9
          source_id: s_5Gkc42WduWozUpEw8ovZr4
          stance: supports
          locator: CBDB:175781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175781）
          source: &a1
            id: s_5Gkc42WduWozUpEw8ovZr4
            source_type: api_record
            title: 中国历代人物传记资料库：王世鼎（CBDB 175781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175781&o=json
            external_identifier: CBDB:175781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DFZ2EkWuXz69BUTeHuyBfv
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x56YZKu6uedvRK5eCEyjHW
          claim_id: c_DFZ2EkWuXz69BUTeHuyBfv
          source_id: s_5Gkc42WduWozUpEw8ovZr4
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
        id: c_KjSVT8DUPM15zc8dJDNZWj
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
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
        - id: cs_3h3kV2gBGEVRLL5qSBbQdG
          claim_id: c_KjSVT8DUPM15zc8dJDNZWj
          source_id: s_5Gkc42WduWozUpEw8ovZr4
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
        id: c_ukgvQV4kxQEaiCCOCZC4zp
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dAMPj6qW5DdDJGiJfXTUvF
          claim_id: c_ukgvQV4kxQEaiCCOCZC4zp
          source_id: s_5Gkc42WduWozUpEw8ovZr4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WmFTihaGM8KRJSc8kBpUBP
        status: active
        display_name: 王友札
        merged_into_person_id: null
  children:
    - claim:
        id: c_kufRydlN78PUulVNDcWahD
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNHV40BKhFy5S8JobuxNIX
          claim_id: c_kufRydlN78PUulVNDcWahD
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8187：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mau2Mn1HLEUqgAPqcgnyVL
            source_type: api_record
            title: 中国历代人物传记资料库：王邈（CBDB 175782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175782&o=json
            external_identifier: CBDB:175782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1J8t9MKe5FE8aJP2Fkpe8U
        status: active
        display_name: 王邈
        merged_into_person_id: null
    - claim:
        id: c_7WUNqIVn85JDCWYPqth53j
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fDrLw8VCGEdLrGRH6rJ4L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GbdUxuX6LXw2LD4LhxQUJn
          claim_id: c_7WUNqIVn85JDCWYPqth53j
          source_id: s_qzquueJZC5F1zTvrukHtfi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qzquueJZC5F1zTvrukHtfi
            source_type: api_record
            title: 中国历代人物传记资料库：王懷讓（CBDB 175791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175791&o=json
            external_identifier: CBDB:175791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8fDrLw8VCGEdLrGRH6rJ4L
        status: active
        display_name: 王懷讓
        merged_into_person_id: null
    - claim:
        id: c_bpV0k4Ga0mUjk1jWYh6nyT
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4ZBzdYERmSTqCk8AC6KDU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zucruPwC8268lNWLvB0_V
          claim_id: c_bpV0k4Ga0mUjk1jWYh6nyT
          source_id: s_aLbzHif9u2eo6PqkARF3J8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aLbzHif9u2eo6PqkARF3J8
            source_type: api_record
            title: 中国历代人物传记资料库：王懷禮（CBDB 175792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175792&o=json
            external_identifier: CBDB:175792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m4ZBzdYERmSTqCk8AC6KDU
        status: active
        display_name: 王懷禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世鼎 | accepted |
| death.date | 678年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WmFTihaGM8KRJSc8kBpUBP | 王友札 | accepted |
| children | p_1J8t9MKe5FE8aJP2Fkpe8U | 王邈 | accepted |
| children | p_8fDrLw8VCGEdLrGRH6rJ4L | 王懷讓 | accepted |
| children | p_m4ZBzdYERmSTqCk8AC6KDU | 王懷禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷禮（CBDB 175792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175792&o=json)
- [中国历代人物传记资料库：王懷讓（CBDB 175791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175791&o=json)
- [中国历代人物传记资料库：王邈（CBDB 175782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175782&o=json)
- [中国历代人物传记资料库：王世鼎（CBDB 175781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175781&o=json)
