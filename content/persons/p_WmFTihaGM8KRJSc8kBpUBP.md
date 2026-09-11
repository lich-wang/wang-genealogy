---
schema: wang-person/v1
id: p_WmFTihaGM8KRJSc8kBpUBP
status: active
merged_into: null
display_name: 王友札
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_npCCh5MQqpaTK8apgAzqCN
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友札
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4AWngoYrjoEeJ9NpNiXSw6
          claim_id: c_npCCh5MQqpaTK8apgAzqCN
          source_id: s_dFWAHx9nBjDD4LMZR2DTg2
          stance: supports
          locator: CBDB:175778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175778）
          source: &a1
            id: s_dFWAHx9nBjDD4LMZR2DTg2
            source_type: api_record
            title: 中国历代人物传记资料库：王友札（CBDB 175778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175778&o=json
            external_identifier: CBDB:175778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SPuAyHvEDKrQTcKLaa8FLT
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 641年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRC8KRvkK22ghKmDbo2Lyb
          claim_id: c_SPuAyHvEDKrQTcKLaa8FLT
          source_id: s_dFWAHx9nBjDD4LMZR2DTg2
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
        id: c_pH3fhiJ63J7AXvmBHXzhJP
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
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
        - id: cs_GBjaV9eCxmcviV2N8PpBnG
          claim_id: c_pH3fhiJ63J7AXvmBHXzhJP
          source_id: s_dFWAHx9nBjDD4LMZR2DTg2
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
        id: c_2DrohR7bRz0WJHV1_IXTCj
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O10X6ovRfxKUpMm2TeImLe
          claim_id: c_2DrohR7bRz0WJHV1_IXTCj
          source_id: s_dFWAHx9nBjDD4LMZR2DTg2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wg9SbiU6iuiiEMCXTr6z5i
        status: active
        display_name: 王野父
        merged_into_person_id: null
  children:
    - claim:
        id: c_G1WtJhIgqBkbQ09XYDlMFD
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P7By8grSdbwvtxrQLPcnpS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iUW_C6ZsKaZoE2ZYNovIq
          claim_id: c_G1WtJhIgqBkbQ09XYDlMFD
          source_id: s_gK4SKFK3jn12CaANh2eKJz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gK4SKFK3jn12CaANh2eKJz
            source_type: api_record
            title: 中国历代人物传记资料库：王玄道（CBDB 175779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175779&o=json
            external_identifier: CBDB:175779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P7By8grSdbwvtxrQLPcnpS
        status: active
        display_name: 王玄道
        merged_into_person_id: null
    - claim:
        id: c_1qRf0zyvn2_zna0EX3Er_H
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qoaDe7jk8H62BEe1dH2W5h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IG7-Wk4GkOWCwYUCJ8VInl
          claim_id: c_1qRf0zyvn2_zna0EX3Er_H
          source_id: s_NL45qFpi3XMKLA2TCk3cPM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NL45qFpi3XMKLA2TCk3cPM
            source_type: api_record
            title: 中国历代人物传记资料库：王大鼎（CBDB 175793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175793&o=json
            external_identifier: CBDB:175793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qoaDe7jk8H62BEe1dH2W5h
        status: active
        display_name: 王大鼎
        merged_into_person_id: null
    - claim:
        id: c_OjAWRVE-wyIDOw6r3g2U4P
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qVCWqTf627v4gtL73YQFoU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O-2uvaefF3LGp_ynNXuDbr
          claim_id: c_OjAWRVE-wyIDOw6r3g2U4P
          source_id: s_HBFeA7cS3mYNGAmUczLUXZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HBFeA7cS3mYNGAmUczLUXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王元鼎（CBDB 175780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175780&o=json
            external_identifier: CBDB:175780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qVCWqTf627v4gtL73YQFoU
        status: active
        display_name: 王元鼎
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_uQaNbqHDcDVAcDy4Fuqf6C
        status: active
        display_name: 王世鼎
        merged_into_person_id: null
    - claim:
        id: c_Zf2rw4Nb4HzNqF9BZpkP_N
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X21fKsdwKJz25YXf2E5MS1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vblnG6V7nT0kjIQeTNJeln
          claim_id: c_Zf2rw4Nb4HzNqF9BZpkP_N
          source_id: s_dFWAHx9nBjDD4LMZR2DTg2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X21fKsdwKJz25YXf2E5MS1
        status: active
        display_name: 王神鼎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王友札

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友札 | accepted |
| death.date | 641年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wg9SbiU6iuiiEMCXTr6z5i | 王野父 | accepted |
| children | p_P7By8grSdbwvtxrQLPcnpS | 王玄道 | accepted |
| children | p_qoaDe7jk8H62BEe1dH2W5h | 王大鼎 | accepted |
| children | p_qVCWqTf627v4gtL73YQFoU | 王元鼎 | accepted |
| children | p_uQaNbqHDcDVAcDy4Fuqf6C | 王世鼎 | accepted |
| children | p_X21fKsdwKJz25YXf2E5MS1 | 王神鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大鼎（CBDB 175793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175793&o=json)
- [中国历代人物传记资料库：王世鼎（CBDB 175781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175781&o=json)
- [中国历代人物传记资料库：王玄道（CBDB 175779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175779&o=json)
- [中国历代人物传记资料库：王友札（CBDB 175778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175778&o=json)
- [中国历代人物传记资料库：王元鼎（CBDB 175780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175780&o=json)
