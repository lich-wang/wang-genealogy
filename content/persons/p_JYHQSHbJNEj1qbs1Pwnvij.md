---
schema: wang-person/v1
id: p_JYHQSHbJNEj1qbs1Pwnvij
status: active
merged_into: null
display_name: 王紀
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gPTAGiDB3Lb8ZuMHgBmdm9
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rde2YABBg6maECQKZireDP
          claim_id: c_gPTAGiDB3Lb8ZuMHgBmdm9
          source_id: s_pFFjBtn9YCQ7Qtnq3MLJub
          stance: supports
          locator: CBDB:271354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271354）
          source: &a1
            id: s_pFFjBtn9YCQ7Qtnq3MLJub
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 271354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271354&o=json
            external_identifier: CBDB:271354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hbSr5ZqgkWXcyBrP2JzTQ7
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。弘治十五年進士，籍贯宛平，曾任百戶。（中国历代人物传记资料库 CBDB 271354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bQjPf91jHkPh5GwPrLL21F
          claim_id: c_hbSr5ZqgkWXcyBrP2JzTQ7
          source_id: s_pFFjBtn9YCQ7Qtnq3MLJub
          stance: supports
          locator: CBDB:271354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_owEkaWJYs6JMBzcEFlGzoE
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHZVKNl_TSTI4Vzc5sR8wO
          claim_id: c_owEkaWJYs6JMBzcEFlGzoE
          source_id: s_pFFjBtn9YCQ7Qtnq3MLJub
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zpBDmxnkNUmk6akFW8LRFz
        status: active
        display_name: 王鍇
        merged_into_person_id: null
    - claim:
        id: c_wTjJKrMHFsVrwCAdNsWmYo
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9SYifWsB9mmrn8kujBerve
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VSQQbxeYDtKqb4AA2ywELl
          claim_id: c_wTjJKrMHFsVrwCAdNsWmYo
          source_id: s_TmcfVESIrLUr1IEyqpZdPX
          stance: supports
          locator: CBDB：兄弟 王鍇（201376）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐄 与 王鍇 为同胞（CBDB 记「兄」），王鍇 之父／母即 王鐄 之父／母。
          source:
            id: s_TmcfVESIrLUr1IEyqpZdPX
            source_type: api_record
            title: 中国历代人物传记资料库：王鐄（CBDB 271364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271364&o=json
            external_identifier: CBDB:271364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9SYifWsB9mmrn8kujBerve
        status: active
        display_name: 王鐄
        merged_into_person_id: null
    - claim:
        id: c_0nRbjTVoDfBk9i1V7Hu_g-
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CHocD8gq7ZvXaTHaj1yVuv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NyJdXpkfHj9M2IO2fwHT82
          claim_id: c_0nRbjTVoDfBk9i1V7Hu_g-
          source_id: s_KxnNxvTTzeDFdAFRtrv2yq
          stance: supports
          locator: CBDB：兄弟 王鍇（201376）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑌 与 王鍇 为同胞（CBDB 记「兄」），王鍇 之父／母即 王鑌 之父／母。
          source:
            id: s_KxnNxvTTzeDFdAFRtrv2yq
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌（CBDB 271361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271361&o=json
            external_identifier: CBDB:271361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CHocD8gq7ZvXaTHaj1yVuv
        status: active
        display_name: 王鑌
        merged_into_person_id: null
    - claim:
        id: c_3nnbVVsfusvClcqdazpIMi
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EvVrQG78QKsrK6h4Ni53GB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HsN7pXzHtJzDlG5eh7y9nU
          claim_id: c_3nnbVVsfusvClcqdazpIMi
          source_id: s__eQVmrSM_0aDf8QkbmOEEl
          stance: supports
          locator: CBDB：兄弟 王鍇（201376）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王錀 与 王鍇 为同胞（CBDB 记「兄」），王鍇 之父／母即 王錀 之父／母。
          source:
            id: s__eQVmrSM_0aDf8QkbmOEEl
            source_type: api_record
            title: 中国历代人物传记资料库：王錀（CBDB 271359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271359&o=json
            external_identifier: CBDB:271359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EvVrQG78QKsrK6h4Ni53GB
        status: active
        display_name: 王錀
        merged_into_person_id: null
    - claim:
        id: c_iLrEDrfdmBrxiFTrB3YC01
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FmrDfSgc5uHkQm1NHH5nMX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hRXZUMdSCuY1wjB561J6U0
          claim_id: c_iLrEDrfdmBrxiFTrB3YC01
          source_id: s_Xhtd6daOnw4DDpNokxtR2Q
          stance: supports
          locator: CBDB：兄弟 王鍇（201376）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉙 与 王鍇 为同胞（CBDB 记「兄」），王鍇 之父／母即 王鉙 之父／母。
          source:
            id: s_Xhtd6daOnw4DDpNokxtR2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王鉙（CBDB 271362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271362&o=json
            external_identifier: CBDB:271362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FmrDfSgc5uHkQm1NHH5nMX
        status: active
        display_name: 王鉙
        merged_into_person_id: null
    - claim:
        id: c_QyDE7hTnOcplPQB4u9NJ2y
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y51VqZWMJRvmdEs73CigHu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_n6yR1QrD9JO_UleksdAN
          claim_id: c_QyDE7hTnOcplPQB4u9NJ2y
          source_id: s_71nP9kKSTQBMOwXEu1gHNE
          stance: supports
          locator: CBDB：兄弟 王鍇（201376）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑅 与 王鍇 为同胞（CBDB 记「兄」），王鍇 之父／母即 王鑅 之父／母。
          source:
            id: s_71nP9kKSTQBMOwXEu1gHNE
            source_type: api_record
            title: 中国历代人物传记资料库：王鑅（CBDB 271363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271363&o=json
            external_identifier: CBDB:271363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y51VqZWMJRvmdEs73CigHu
        status: active
        display_name: 王鑅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。弘治十五年進士，籍贯宛平，曾任百戶。（中国历代人物传记资料库 CBDB 271354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zpBDmxnkNUmk6akFW8LRFz | 王鍇 | accepted |
| children | p_9SYifWsB9mmrn8kujBerve | 王鐄 | accepted |
| children | p_CHocD8gq7ZvXaTHaj1yVuv | 王鑌 | accepted |
| children | p_EvVrQG78QKsrK6h4Ni53GB | 王錀 | accepted |
| children | p_FmrDfSgc5uHkQm1NHH5nMX | 王鉙 | accepted |
| children | p_y51VqZWMJRvmdEs73CigHu | 王鑅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑌（CBDB 271361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271361&o=json)
- [中国历代人物传记资料库：王鑅（CBDB 271363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271363&o=json)
- [中国历代人物传记资料库：王鐄（CBDB 271364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271364&o=json)
- [中国历代人物传记资料库：王紀（CBDB 271354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271354&o=json)
- [中国历代人物传记资料库：王錀（CBDB 271359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271359&o=json)
- [中国历代人物传记资料库：王鉙（CBDB 271362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271362&o=json)
