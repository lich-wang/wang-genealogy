---
schema: wang-person/v1
id: p_3iyxEBFwgRpJCsXBwB3FWC
status: active
merged_into: null
display_name: 王恩民
cbdb_id: 205656
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y3ct9prUwHQvXLTVvUJRnz
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩民（生于1540年），明人物。明清進士進士，籍贯合肥，入仕進士，曾任分守道。（中国历代人物传记资料库 CBDB 205656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lcl6EsZXH24R_5F9x0ABLw
          claim_id: c_Y3ct9prUwHQvXLTVvUJRnz
          source_id: s_ZTMEsogfA4uitBiUa9DFoe
          stance: supports
          locator: CBDB:205656
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZTMEsogfA4uitBiUa9DFoe
            source_type: api_record
            title: 中国历代人物传记资料库：王恩民（CBDB 205656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205656&o=json
            external_identifier: CBDB:205656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ExT4JCRFqKMync2MVccbep
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1540-01-01
            latest: 1540-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1q8my3YRDbR3kedYWtF4fa
          claim_id: c_ExT4JCRFqKMync2MVccbep
          source_id: s_ZTMEsogfA4uitBiUa9DFoe
          stance: supports
          locator: CBDB:205656
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1540
          source:
            id: s_ZTMEsogfA4uitBiUa9DFoe
            source_type: api_record
            title: 中国历代人物传记资料库：王恩民（CBDB 205656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205656&o=json
            external_identifier: CBDB:205656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Je3S75fxZpCfduDt3LPtW5
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kC4G6KJmS3kKDYcfhv3AKr
          claim_id: c_Je3S75fxZpCfduDt3LPtW5
          source_id: s_ZTMEsogfA4uitBiUa9DFoe
          stance: supports
          locator: CBDB:205656
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1540
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UeCwSbEpBaNHrLbDJZWuYQ
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ts0Xj_p9UiI2MxyU_tCOV
          claim_id: c_UeCwSbEpBaNHrLbDJZWuYQ
          source_id: s_C6HkK9dtgbU99Pt8SkcQnQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C6HkK9dtgbU99Pt8SkcQnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王世學（CBDB 336580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336580&o=json
            external_identifier: CBDB:336580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rzdGCJdbAnivH2NuEMbZHX
        status: active
        display_name: 王世學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xu3d7p_gpU_eBrSRVOaqkS
        subject_person_id: p_JXKdLRZMZ2YY2MD7Q6D8KL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U-zkqF9Cl9YIi0quIVYVfs
          claim_id: c_xu3d7p_gpU_eBrSRVOaqkS
          source_id: s_stjHdLYaSrYujtuA8EeKKd
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_stjHdLYaSrYujtuA8EeKKd
            source_type: api_record
            title: 中国历代人物传记资料库：王纓（CBDB 336579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336579&o=json
            external_identifier: CBDB:336579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JXKdLRZMZ2YY2MD7Q6D8KL
        status: active
        display_name: 王纓
        merged_into_person_id: null
    - claim:
        id: c_YjFmlcnxQFl8_yiDRqrAHG
        subject_person_id: p_tQBiADTVUbgCwCe4Xfthvg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uudrAgrE8WNgVP0Wv6nB65
          claim_id: c_YjFmlcnxQFl8_yiDRqrAHG
          source_id: s_ymx9oGy1YkFFt279XVv9dc
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ymx9oGy1YkFFt279XVv9dc
            source_type: api_record
            title: 中国历代人物传记资料库：王錀（CBDB 336578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336578&o=json
            external_identifier: CBDB:336578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tQBiADTVUbgCwCe4Xfthvg
        status: active
        display_name: 王錀
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_vV2AWLbXe9VljMi8CNbxCF
        subject_person_id: p_21crTBmbnQ3eub1vWBszZY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvKMI3-O-tEVZJFCSuh5BF
          claim_id: c_vV2AWLbXe9VljMi8CNbxCF
          source_id: s_bXvnpNdUZO7bV5v6HlrKeI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bXvnpNdUZO7bV5v6HlrKeI
            source_type: api_record
            title: 中国历代人物传记资料库：王愛民（CBDB 336587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json
            external_identifier: CBDB:336587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_21crTBmbnQ3eub1vWBszZY
        status: active
        display_name: 王愛民
        merged_into_person_id: null
    - claim:
        id: c_a_TqCxS3SfGhDPH2CZgo4W
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5So77ddT4L6CBhEAEPt9uq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eS1AMq590PpuDX0Qusghak
          claim_id: c_a_TqCxS3SfGhDPH2CZgo4W
          source_id: s_mjWipdAC8I9NaLiJ-HcW4c
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mjWipdAC8I9NaLiJ-HcW4c
            source_type: api_record
            title: 中国历代人物传记资料库：王佑民（CBDB 336584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json
            external_identifier: CBDB:336584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5So77ddT4L6CBhEAEPt9uq
        status: active
        display_name: 王佑民
        merged_into_person_id: null
    - claim:
        id: c_S0X-v1KlIPLcKnSTqpw0Dy
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EzD7IrkXVD7np1RfyGkC7j
          claim_id: c_S0X-v1KlIPLcKnSTqpw0Dy
          source_id: s_gQ7oTSryekJMcgEVZNrzM5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gQ7oTSryekJMcgEVZNrzM5
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 336586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json
            external_identifier: CBDB:336586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C1XmMPpPDBPssN8EgrCHd9
        status: active
        display_name: 王治民
        merged_into_person_id: null
    - claim:
        id: c_388RhocbfJBhA5xiuUSuxP
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Et2f23vzjwkjLTZafX5Vhb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MnhipR_kK_MXp7PUbq2Xfl
          claim_id: c_388RhocbfJBhA5xiuUSuxP
          source_id: s_1eedV7tV5O4qRGFkKsQvci
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1eedV7tV5O4qRGFkKsQvci
            source_type: api_record
            title: 中国历代人物传记资料库：王養民（CBDB 336585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json
            external_identifier: CBDB:336585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Et2f23vzjwkjLTZafX5Vhb
        status: active
        display_name: 王養民
        merged_into_person_id: null
    - claim:
        id: c_JxsneOmepd13LoHUB9xaYJ
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G7vRwojaJ61PX4ZNyFj6SG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVqikXoxVsAvB2fNtVbFmM
          claim_id: c_JxsneOmepd13LoHUB9xaYJ
          source_id: s_Q_-memrdUcrlEGUYiuvc6m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q_-memrdUcrlEGUYiuvc6m
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 336589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json
            external_identifier: CBDB:336589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G7vRwojaJ61PX4ZNyFj6SG
        status: active
        display_name: 王正民
        merged_into_person_id: null
    - claim:
        id: c_8bcgGGsm1iL_MR4KkInd8k
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TjXb1UwWVHKDutCc7gfqPV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rnCp2SfuutW09CEWVI7rk4
          claim_id: c_8bcgGGsm1iL_MR4KkInd8k
          source_id: s_4wQ12HzoszXz9sYey6g9GO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4wQ12HzoszXz9sYey6g9GO
            source_type: api_record
            title: 中国历代人物传记资料库：王安民（CBDB 336583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336583&o=json
            external_identifier: CBDB:336583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TjXb1UwWVHKDutCc7gfqPV
        status: active
        display_name: 王安民
        merged_into_person_id: null
    - claim:
        id: c_NOIXPfnhGmU81Y5Rd582sE
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eErBnoUA72i9MbXQ6Ltd9h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4NCEfBDlR7DXJeTCS4PZU
          claim_id: c_NOIXPfnhGmU81Y5Rd582sE
          source_id: s_1qgdCW8o8zODvP7xlvQXT-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1qgdCW8o8zODvP7xlvQXT-
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 336590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336590&o=json
            external_identifier: CBDB:336590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eErBnoUA72i9MbXQ6Ltd9h
        status: active
        display_name: 王濟民
        merged_into_person_id: null
---

# 王恩民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恩民（生于1540年），明人物。明清進士進士，籍贯合肥，入仕進士，曾任分守道。（中国历代人物传记资料库 CBDB 205656） | accepted |
| birth.date | 1540年 | accepted |
| name.primary | 王恩民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rzdGCJdbAnivH2NuEMbZHX | 王世學 | accepted |
| ancestors | p_JXKdLRZMZ2YY2MD7Q6D8KL | 王纓 | accepted |
| ancestors | p_tQBiADTVUbgCwCe4Xfthvg | 王錀 | accepted |
| other | p_21crTBmbnQ3eub1vWBszZY | 王愛民 | accepted |
| other | p_5So77ddT4L6CBhEAEPt9uq | 王佑民 | accepted |
| other | p_C1XmMPpPDBPssN8EgrCHd9 | 王治民 | accepted |
| other | p_Et2f23vzjwkjLTZafX5Vhb | 王養民 | accepted |
| other | p_G7vRwojaJ61PX4ZNyFj6SG | 王正民 | accepted |
| other | p_TjXb1UwWVHKDutCc7gfqPV | 王安民 | accepted |
| other | p_eErBnoUA72i9MbXQ6Ltd9h | 王濟民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛民（CBDB 336587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336587&o=json)
- [中国历代人物传记资料库：王安民（CBDB 336583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336583&o=json)
- [中国历代人物传记资料库：王恩民（CBDB 205656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205656&o=json)
- [中国历代人物传记资料库：王濟民（CBDB 336590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336590&o=json)
- [中国历代人物传记资料库：王錀（CBDB 336578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336578&o=json)
- [中国历代人物传记资料库：王世學（CBDB 336580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336580&o=json)
- [中国历代人物传记资料库：王養民（CBDB 336585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json)
- [中国历代人物传记资料库：王纓（CBDB 336579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336579&o=json)
- [中国历代人物传记资料库：王佑民（CBDB 336584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336584&o=json)
- [中国历代人物传记资料库：王正民（CBDB 336589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json)
- [中国历代人物传记资料库：王治民（CBDB 336586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json)
