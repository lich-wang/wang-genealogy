---
schema: wang-person/v1
id: p_iExwTUSihbBvbcDkEjipqk
status: active
merged_into: null
display_name: 王珍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MhK2KHy2G6DRh8ne3nn1CS
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YxKn2wWLz8erWAYpuLL3A4
          claim_id: c_MhK2KHy2G6DRh8ne3nn1CS
          source_id: s_FyVQHAEjUHhRAeQdCcqEyU
          stance: supports
          locator: CBDB:169475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169475）
          source: &a1
            id: s_FyVQHAEjUHhRAeQdCcqEyU
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 169475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169475&o=json
            external_identifier: CBDB:169475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2zEUpDQJHVidpz1TiGKiHk
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4S8mKg9aBP5GtCdTdaKD8
          claim_id: c_2zEUpDQJHVidpz1TiGKiHk
          source_id: s_FyVQHAEjUHhRAeQdCcqEyU
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
        id: c_URev4kpjfmTj89omyURdjK
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
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
        - id: cs_xfC16PwFATMw46xmxbBGRh
          claim_id: c_URev4kpjfmTj89omyURdjK
          source_id: s_FyVQHAEjUHhRAeQdCcqEyU
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
        id: c_N2fRUmT8U5qp4pI3ZupT4c
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1CVjWfj6Z4oLLDvpZ3BxLu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7K1svdua5gnuyV2M2UAf2
          claim_id: c_N2fRUmT8U5qp4pI3ZupT4c
          source_id: s_JidsmKBhW2oNyBdGpKxpkj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 28647：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JidsmKBhW2oNyBdGpKxpkj
            source_type: api_record
            title: 中国历代人物传记资料库：王元會（CBDB 190307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190307&o=json
            external_identifier: CBDB:190307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1CVjWfj6Z4oLLDvpZ3BxLu
        status: active
        display_name: 王元會
        merged_into_person_id: null
    - claim:
        id: c_jAkSGUhwOj0ZNd24bb1X_u
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7KDsHR3PRRgyvAjBid66pt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoFU4FEwCt7CceSCdAc-bm
          claim_id: c_jAkSGUhwOj0ZNd24bb1X_u
          source_id: s_DPM6WWsZf66hQM3UWXxUrk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DPM6WWsZf66hQM3UWXxUrk
            source_type: api_record
            title: 中国历代人物传记资料库：王元皐（CBDB 190305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190305&o=json
            external_identifier: CBDB:190305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7KDsHR3PRRgyvAjBid66pt
        status: active
        display_name: 王元皐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| death.date | 832年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1CVjWfj6Z4oLLDvpZ3BxLu | 王元會 | accepted |
| children | p_7KDsHR3PRRgyvAjBid66pt | 王元皐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元皐（CBDB 190305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190305&o=json)
- [中国历代人物传记资料库：王元會（CBDB 190307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190307&o=json)
- [中国历代人物传记资料库：王珍（CBDB 169475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169475&o=json)
