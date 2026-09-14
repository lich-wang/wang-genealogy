---
schema: wang-person/v1
id: p_kSZuSxLVRUx1AX2npsBxe9
status: active
merged_into: null
display_name: 王垽
cbdb_id: 321405
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_71gcMF13hM6giBtrF773fW
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垽，明人物。嘉靖三十五年進士，籍贯輝縣，曾任府同知。（中国历代人物传记资料库 CBDB 321405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GfnQ8_e0Dkr7gsM-CVayyy
          claim_id: c_71gcMF13hM6giBtrF773fW
          source_id: s_5i1N75EASUW2u3BKYQvk8t
          stance: supports
          locator: CBDB:321405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5i1N75EASUW2u3BKYQvk8t
            source_type: api_record
            title: 中国历代人物传记资料库：王垽（CBDB 321405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321405&o=json
            external_identifier: CBDB:321405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wn6LNebWnKgZK7gUKL49Tj
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CwF3J7yPLyBxCrcmSrBis5
          claim_id: c_wn6LNebWnKgZK7gUKL49Tj
          source_id: s_5i1N75EASUW2u3BKYQvk8t
          stance: supports
          locator: CBDB:321405
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_26II9FsoqingD6qrhGmSZm
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHIEJzV939JmaGIroE_54K
          claim_id: c_26II9FsoqingD6qrhGmSZm
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2wGjdALaD45tx6N97DN7RH
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 204603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json
            external_identifier: CBDB:204603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jxJb77T2SQUuZWU7nrgLP5
        status: active
        display_name: 王同倫
        merged_into_person_id: null
    - claim:
        id: c_811oZfmbyTHCzYZJeWZA3V
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PK4BoSQe73uvG2Jhjv1Fwu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CUr5O8kZtTkYBCix4QO88d
          claim_id: c_811oZfmbyTHCzYZJeWZA3V
          source_id: s_A7yiOYYYGJXTZ04awkWR1Z
          stance: supports
          locator: CBDB：兄弟 王同倫（204603）之父／母 王垽
          quotation: null
          interpretation_note: 由兄弟关系推断：王同文 与 王同倫 为同胞（CBDB 记「弟」），王同倫 之父／母即 王同文 之父／母。
          source:
            id: s_A7yiOYYYGJXTZ04awkWR1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王同文（CBDB 321412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321412&o=json
            external_identifier: CBDB:321412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PK4BoSQe73uvG2Jhjv1Fwu
        status: active
        display_name: 王同文
        merged_into_person_id: null
    - claim:
        id: c_KBG_8y9kVuEy-PQvT4_wd-
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TVEo3drMA9vQ4vKm58Ss7J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRrvgcfWHzNbYV_mRltaYl
          claim_id: c_KBG_8y9kVuEy-PQvT4_wd-
          source_id: s_bTzn9OshJt5ix93M49UcLp
          stance: supports
          locator: CBDB：兄弟 王同倫（204603）之父／母 王垽
          quotation: null
          interpretation_note: 由兄弟关系推断：王同方 与 王同倫 为同胞（CBDB 记「兄」），王同倫 之父／母即 王同方 之父／母。
          source:
            id: s_bTzn9OshJt5ix93M49UcLp
            source_type: api_record
            title: 中国历代人物传记资料库：王同方（CBDB 321415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321415&o=json
            external_identifier: CBDB:321415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TVEo3drMA9vQ4vKm58Ss7J
        status: active
        display_name: 王同方
        merged_into_person_id: null
    - claim:
        id: c_0mdYC6p5oPsv35CtM3kEZI
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VTD6HQfBtR8o5G3fAEbd8w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ISi1vNw0Pv-P6u1JDHPvTw
          claim_id: c_0mdYC6p5oPsv35CtM3kEZI
          source_id: s_PndKV7JqoVRVrTf7r6MRyn
          stance: supports
          locator: CBDB：兄弟 王同倫（204603）之父／母 王垽
          quotation: null
          interpretation_note: 由兄弟关系推断：王同遊 与 王同倫 为同胞（CBDB 记「兄」），王同倫 之父／母即 王同遊 之父／母。
          source:
            id: s_PndKV7JqoVRVrTf7r6MRyn
            source_type: api_record
            title: 中国历代人物传记资料库：王同遊（CBDB 321413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321413&o=json
            external_identifier: CBDB:321413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VTD6HQfBtR8o5G3fAEbd8w
        status: active
        display_name: 王同遊
        merged_into_person_id: null
    - claim:
        id: c_bvF-3R3bsbgTn6KrkDV4EW
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gdG9jxKiAYxb4vyDxAXDEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N6j1IlFfOxjXFpwkM4Mmc_
          claim_id: c_bvF-3R3bsbgTn6KrkDV4EW
          source_id: s_Bj7KMPoTwT7-dCZ-tEB_rn
          stance: supports
          locator: CBDB：兄弟 王同倫（204603）之父／母 王垽
          quotation: null
          interpretation_note: 由兄弟关系推断：王同志 与 王同倫 为同胞（CBDB 记「兄」），王同倫 之父／母即 王同志 之父／母。
          source:
            id: s_Bj7KMPoTwT7-dCZ-tEB_rn
            source_type: api_record
            title: 中国历代人物传记资料库：王同志（CBDB 321414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321414&o=json
            external_identifier: CBDB:321414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gdG9jxKiAYxb4vyDxAXDEG
        status: active
        display_name: 王同志
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王垽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王垽，明人物。嘉靖三十五年進士，籍贯輝縣，曾任府同知。（中国历代人物传记资料库 CBDB 321405） | accepted |
| name.primary | 王垽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jxJb77T2SQUuZWU7nrgLP5 | 王同倫 | accepted |
| children | p_PK4BoSQe73uvG2Jhjv1Fwu | 王同文 | accepted |
| children | p_TVEo3drMA9vQ4vKm58Ss7J | 王同方 | accepted |
| children | p_VTD6HQfBtR8o5G3fAEbd8w | 王同遊 | accepted |
| children | p_gdG9jxKiAYxb4vyDxAXDEG | 王同志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同方（CBDB 321415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321415&o=json)
- [中国历代人物传记资料库：王同倫（CBDB 204603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json)
- [中国历代人物传记资料库：王同文（CBDB 321412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321412&o=json)
- [中国历代人物传记资料库：王同遊（CBDB 321413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321413&o=json)
- [中国历代人物传记资料库：王同志（CBDB 321414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321414&o=json)
- [中国历代人物传记资料库：王垽（CBDB 321405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321405&o=json)
