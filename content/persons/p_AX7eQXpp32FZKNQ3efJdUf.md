---
schema: wang-person/v1
id: p_AX7eQXpp32FZKNQ3efJdUf
status: active
merged_into: null
display_name: 王翮
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGUeqvEJxax1yNL2eNCQpv
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6kjGHM9tHZ6FtdZi8Wekht
          claim_id: c_vGUeqvEJxax1yNL2eNCQpv
          source_id: s_hGJHSMqT5cbNUHiXBBknC5
          stance: supports
          locator: CBDB:295490
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295490）
          source: &a1
            id: s_hGJHSMqT5cbNUHiXBBknC5
            source_type: api_record
            title: 中国历代人物传记资料库：王翮（CBDB 295490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295490&o=json
            external_identifier: CBDB:295490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJt39JncQ4ErcCc8g2caBH
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翮，明人物。嘉靖十四年進士，籍贯永年，曾任州吏目。（中国历代人物传记资料库 CBDB 295490）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vicoOhT8c8Ad6UpiEHRtB_
          claim_id: c_PJt39JncQ4ErcCc8g2caBH
          source_id: s_hGJHSMqT5cbNUHiXBBknC5
          stance: supports
          locator: CBDB:295490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l0CM4JQdEGBy7VcQ7AQCN6
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AQPzHURj5Q55p8A3sruTTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7BOCVZHfMRTbtuIEIDKlGP
          claim_id: c_l0CM4JQdEGBy7VcQ7AQCN6
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xCtA74fHb4nmCqYULtCsu1
            source_type: api_record
            title: 中国历代人物传记资料库：王朝相（CBDB 202839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202839&o=json
            external_identifier: CBDB:202839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AQPzHURj5Q55p8A3sruTTG
        status: active
        display_name: 王朝相
        merged_into_person_id: null
    - claim:
        id: c__j4WN1RvEMOBKmMxtrM-Zc
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RXRKIstX2oKankQsAfhCPc
          claim_id: c__j4WN1RvEMOBKmMxtrM-Zc
          source_id: s_dgUNQjBB_NEeQmlV9QR1vg
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝聘 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝聘 之父／母。
          source:
            id: s_dgUNQjBB_NEeQmlV9QR1vg
            source_type: api_record
            title: 中国历代人物传记资料库：王朝聘（CBDB 295494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json
            external_identifier: CBDB:295494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BmRjLDb7r4C5D13YYkJXJP
        status: active
        display_name: 王朝聘
        merged_into_person_id: null
    - claim:
        id: c_047CPzGnN_GGNHW2GYvLU6
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TzCLmWMvn17u2bahM5DSjP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-h1NwrZeb9vwLFAWDhZafm
          claim_id: c_047CPzGnN_GGNHW2GYvLU6
          source_id: s_A3axARiMwwRG0HkwobXDCm
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝舉 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝舉 之父／母。
          source:
            id: s_A3axARiMwwRG0HkwobXDCm
            source_type: api_record
            title: 中国历代人物传记资料库：王朝舉（CBDB 295495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295495&o=json
            external_identifier: CBDB:295495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TzCLmWMvn17u2bahM5DSjP
        status: active
        display_name: 王朝舉
        merged_into_person_id: null
    - claim:
        id: c_6mfdLTXDOOB9Hzidd3woWG
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XuEFfGNM9ujocC4A1s1gv5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YWldGoI35_Frum9zlaD1DZ
          claim_id: c_6mfdLTXDOOB9Hzidd3woWG
          source_id: s_8yYNJUKTk5xxO8G7RycqwW
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝卿 与 王朝相 为同胞（CBDB 记「弟」），王朝相 之父／母即 王朝卿 之父／母。
          source:
            id: s_8yYNJUKTk5xxO8G7RycqwW
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 295493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295493&o=json
            external_identifier: CBDB:295493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XuEFfGNM9ujocC4A1s1gv5
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
    - claim:
        id: c_SiO82XkZ3PACdTUAP7VYYh
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eUuk7fep1XCUgcR9U9oYNg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3LM3aKUIM2rDsKJ4MIbpwq
          claim_id: c_SiO82XkZ3PACdTUAP7VYYh
          source_id: s_qEkNMuGFlCD-kpOByGCmpV
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝弼 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝弼 之父／母。
          source:
            id: s_qEkNMuGFlCD-kpOByGCmpV
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 295498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295498&o=json
            external_identifier: CBDB:295498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eUuk7fep1XCUgcR9U9oYNg
        status: active
        display_name: 王朝弼
        merged_into_person_id: null
    - claim:
        id: c_Z0XdgMFABmyyFx9YVKP5Jt
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJ6BwD4QqhvgPod68Fnvvo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TgEH3ikLGq2ao24lY9_rhB
          claim_id: c_Z0XdgMFABmyyFx9YVKP5Jt
          source_id: s_mmIjEtW8gIsKLiOWArWVT3
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝貢 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝貢 之父／母。
          source:
            id: s_mmIjEtW8gIsKLiOWArWVT3
            source_type: api_record
            title: 中国历代人物传记资料库：王朝貢（CBDB 295497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json
            external_identifier: CBDB:295497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fJ6BwD4QqhvgPod68Fnvvo
        status: active
        display_name: 王朝貢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翮 | accepted |
| bio.summary | 王翮，明人物。嘉靖十四年進士，籍贯永年，曾任州吏目。（中国历代人物传记资料库 CBDB 295490） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AQPzHURj5Q55p8A3sruTTG | 王朝相 | accepted |
| children | p_BmRjLDb7r4C5D13YYkJXJP | 王朝聘 | accepted |
| children | p_TzCLmWMvn17u2bahM5DSjP | 王朝舉 | accepted |
| children | p_XuEFfGNM9ujocC4A1s1gv5 | 王朝卿 | accepted |
| children | p_eUuk7fep1XCUgcR9U9oYNg | 王朝弼 | accepted |
| children | p_fJ6BwD4QqhvgPod68Fnvvo | 王朝貢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝弼（CBDB 295498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295498&o=json)
- [中国历代人物传记资料库：王朝貢（CBDB 295497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295497&o=json)
- [中国历代人物传记资料库：王朝舉（CBDB 295495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295495&o=json)
- [中国历代人物传记资料库：王朝聘（CBDB 295494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json)
- [中国历代人物传记资料库：王朝卿（CBDB 295493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295493&o=json)
- [中国历代人物传记资料库：王朝相（CBDB 202839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202839&o=json)
- [中国历代人物传记资料库：王翮（CBDB 295490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295490&o=json)
