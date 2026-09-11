---
schema: wang-person/v1
id: p_eT2q7FzkPQ3U7QqmPg5Qkg
status: active
merged_into: null
display_name: 王敘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8gGE7vdfKsGf5j3ktpqc4
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dK8twE9gnBWkBEWT4sx4TN
          claim_id: c_M8gGE7vdfKsGf5j3ktpqc4
          source_id: s_HwM1uuNbU1XRDYfergAfD6
          stance: supports
          locator: CBDB:191075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191075）
          source: &a1
            id: s_HwM1uuNbU1XRDYfergAfD6
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 191075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191075&o=json
            external_identifier: CBDB:191075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7YcUqJnXSVwMeGB1vM6xBX
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 818年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7C6w6UooabrKPXgqUmm9uJ
          claim_id: c_7YcUqJnXSVwMeGB1vM6xBX
          source_id: s_HwM1uuNbU1XRDYfergAfD6
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
        id: c_2KpCF9RCdN3JJdeyx6yubJ
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘（卒于818年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 191075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CM90WJ8fJRrreWHkJA-DLU
          claim_id: c_2KpCF9RCdN3JJdeyx6yubJ
          source_id: s_HwM1uuNbU1XRDYfergAfD6
          stance: supports
          locator: CBDB:191075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B961IW471d9JoU1Qe9OprJ
        subject_person_id: p_bbtkRepz65zt6fY1dTLEkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HinH8LnT1qy9B3H4kqEI6x
          claim_id: c_B961IW471d9JoU1Qe9OprJ
          source_id: s_HwM1uuNbU1XRDYfergAfD6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bbtkRepz65zt6fY1dTLEkm
        status: active
        display_name: 王沁
        merged_into_person_id: null
  children:
    - claim:
        id: c_x4ROnN6DA77V3XxBkhDqa3
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ak6f1y1jiB6tMkqCSFMAPZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHqtuaHRTC7KdndkTqAPmp
          claim_id: c_x4ROnN6DA77V3XxBkhDqa3
          source_id: s_Qkz5xHs6mQcnJ9eLaS9HDb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qkz5xHs6mQcnJ9eLaS9HDb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘禮（CBDB 145700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145700&o=json
            external_identifier: CBDB:145700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ak6f1y1jiB6tMkqCSFMAPZ
        status: active
        display_name: 王弘禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敘 | accepted |
| death.date | 818年 | accepted |
| bio.summary | 王敘（卒于818年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 191075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bbtkRepz65zt6fY1dTLEkm | 王沁 | accepted |
| children | p_Ak6f1y1jiB6tMkqCSFMAPZ | 王弘禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘禮（CBDB 145700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145700&o=json)
- [中国历代人物传记资料库：王敘（CBDB 191075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191075&o=json)
