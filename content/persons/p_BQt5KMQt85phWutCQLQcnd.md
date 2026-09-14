---
schema: wang-person/v1
id: p_BQt5KMQt85phWutCQLQcnd
status: active
merged_into: null
display_name: 王叔中
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Gs8EUNXpMPQYM32BPHTA1
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F49fq5z5JwWK6xPAZfSnPF
          claim_id: c_6Gs8EUNXpMPQYM32BPHTA1
          source_id: s_pN52pFNwLz1ehR6jX8PCC8
          stance: supports
          locator: CBDB:326619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326619）
          source: &a1
            id: s_pN52pFNwLz1ehR6jX8PCC8
            source_type: api_record
            title: 中国历代人物传记资料库：王叔中（CBDB 326619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326619&o=json
            external_identifier: CBDB:326619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_anKQB7VJvN8zfbiJs18vmo
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔中，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WFHBHYBWJEoU55-LE1tjir
          claim_id: c_anKQB7VJvN8zfbiJs18vmo
          source_id: s_pN52pFNwLz1ehR6jX8PCC8
          stance: supports
          locator: CBDB:326619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zP701nQiwF-tvqPRBPLgIG
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_je-aZmrd42koe1C5etlFiH
          claim_id: c_zP701nQiwF-tvqPRBPLgIG
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
    - claim:
        id: c_6MAbEOBj1M8em0RHCrVwm_
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3dXrdfiSek18Q9DsAboTn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8r3UOasTVYcO-EZTSWlXO
          claim_id: c_6MAbEOBj1M8em0RHCrVwm_
          source_id: s_bpjhD4g3twQWD1Xz1O-DoU
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同仁 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同仁 之父／母。
          source:
            id: s_bpjhD4g3twQWD1Xz1O-DoU
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 326622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326622&o=json
            external_identifier: CBDB:326622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3dXrdfiSek18Q9DsAboTn9
        status: active
        display_name: 王同仁
        merged_into_person_id: null
    - claim:
        id: c_H2N3LH1_Kd0o8eTpN6lkKD
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6WpYyEV6mDnjMunafdRdX3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KW3BV1oFGJMpQJef2MecsS
          claim_id: c_H2N3LH1_Kd0o8eTpN6lkKD
          source_id: s_JYyIkrlPxefo1ZQ_wet5q-
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同論 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同論 之父／母。
          source:
            id: s_JYyIkrlPxefo1ZQ_wet5q-
            source_type: api_record
            title: 中国历代人物传记资料库：王同論（CBDB 326625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326625&o=json
            external_identifier: CBDB:326625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6WpYyEV6mDnjMunafdRdX3
        status: active
        display_name: 王同論
        merged_into_person_id: null
    - claim:
        id: c_ZKhP-uvNaqvtB57Fykjhhx
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPBNUpXKQdaNAyNXcfPMPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_os2qe374D_zJZc5D8oQSMj
          claim_id: c_ZKhP-uvNaqvtB57Fykjhhx
          source_id: s_oFfRfdwRUdzE3GGASVsDm4
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同任 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同任 之父／母。
          source:
            id: s_oFfRfdwRUdzE3GGASVsDm4
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 326626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json
            external_identifier: CBDB:326626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JPBNUpXKQdaNAyNXcfPMPv
        status: active
        display_name: 王同任
        merged_into_person_id: null
    - claim:
        id: c_FMQCd_gO8yITsH5zZx_OW9
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_adRFAQLWhyXmaT47pftg3g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eleS0zVW5ewyYnUdiMckCr
          claim_id: c_FMQCd_gO8yITsH5zZx_OW9
          source_id: s_7QxjeCnmwHUdUvkuHxv5MX
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同化 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同化 之父／母。
          source:
            id: s_7QxjeCnmwHUdUvkuHxv5MX
            source_type: api_record
            title: 中国历代人物传记资料库：王同化（CBDB 326624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326624&o=json
            external_identifier: CBDB:326624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_adRFAQLWhyXmaT47pftg3g
        status: active
        display_name: 王同化
        merged_into_person_id: null
    - claim:
        id: c_SrqydCAzj0cf8_KAXXEmsI
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g9Yir1APiQpFvmBiV6zzPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1vbgXpo77h926R8qaLN4t5
          claim_id: c_SrqydCAzj0cf8_KAXXEmsI
          source_id: s_HMIdz8SysTWZaj-quoRZy4
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同儼 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同儼 之父／母。
          source:
            id: s_HMIdz8SysTWZaj-quoRZy4
            source_type: api_record
            title: 中国历代人物传记资料库：王同儼（CBDB 326627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json
            external_identifier: CBDB:326627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9Yir1APiQpFvmBiV6zzPF
        status: active
        display_name: 王同儼
        merged_into_person_id: null
    - claim:
        id: c_zOM4y5spG1onAiRyslDSAQ
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s58PnUmfNbj4dJTDKq5fP2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfrqHRGDTXwXEH8WCXEaRA
          claim_id: c_zOM4y5spG1onAiRyslDSAQ
          source_id: s_OMMPD-dBoiFj1C5ypaPMdi
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同議 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同議 之父／母。
          source:
            id: s_OMMPD-dBoiFj1C5ypaPMdi
            source_type: api_record
            title: 中国历代人物传记资料库：王同議（CBDB 326623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json
            external_identifier: CBDB:326623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s58PnUmfNbj4dJTDKq5fP2
        status: active
        display_name: 王同議
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔中 | accepted |
| bio.summary | 王叔中，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |
| children | p_3dXrdfiSek18Q9DsAboTn9 | 王同仁 | accepted |
| children | p_6WpYyEV6mDnjMunafdRdX3 | 王同論 | accepted |
| children | p_JPBNUpXKQdaNAyNXcfPMPv | 王同任 | accepted |
| children | p_adRFAQLWhyXmaT47pftg3g | 王同化 | accepted |
| children | p_g9Yir1APiQpFvmBiV6zzPF | 王同儼 | accepted |
| children | p_s58PnUmfNbj4dJTDKq5fP2 | 王同議 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔中（CBDB 326619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326619&o=json)
- [中国历代人物传记资料库：王同化（CBDB 326624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326624&o=json)
- [中国历代人物传记资料库：王同論（CBDB 326625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326625&o=json)
- [中国历代人物传记资料库：王同仁（CBDB 326622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326622&o=json)
- [中国历代人物传记资料库：王同任（CBDB 326626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json)
- [中国历代人物传记资料库：王同儼（CBDB 326627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json)
- [中国历代人物传记资料库：王同議（CBDB 326623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)
