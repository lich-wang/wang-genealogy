---
schema: wang-person/v1
id: p_5g7L2cx4uEGXE6LnD5Pz5F
status: active
merged_into: null
display_name: 王獻
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2grg4w7TWBiKiDSbDTNbg
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHvRswscJjvczz37UswZfz
          claim_id: c_F2grg4w7TWBiKiDSbDTNbg
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: CBDB:313336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313336）
          source: &a1
            id: s_VpqdCQeZzzvdm8X8ssSNqu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 313336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json
            external_identifier: CBDB:313336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vv42xbowVawhGHzs2d4nRA
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻，明人物。嘉靖二十九年進士，籍贯咸陽，曾任布政使司左參政。（中国历代人物传记资料库 CBDB 313336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k2QQz97xLEmrKmx1fpnTKy
          claim_id: c_vv42xbowVawhGHzs2d4nRA
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: CBDB:313336
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CoPF9n7WeliGRoh4fqm7D2
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huOjUs1s-CVAWXguO5mMrR
          claim_id: c_CoPF9n7WeliGRoh4fqm7D2
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_emRFonnZuCJKKPb7oDivvy
        status: active
        display_name: 王道直
        merged_into_person_id: null
    - claim:
        id: c_lAU04DWdyOg9bCDOWScYRf
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LrWvySaKBSHFaZdPPoGS9Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SslCPoNCBL1uAOFvKCIDs0
          claim_id: c_lAU04DWdyOg9bCDOWScYRf
          source_id: s_BR2DJ3W-IUzPMBnm2SNmgq
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道寬 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道寬 之父／母。
          source:
            id: s_BR2DJ3W-IUzPMBnm2SNmgq
            source_type: api_record
            title: 中国历代人物传记资料库：王道寬（CBDB 313343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json
            external_identifier: CBDB:313343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LrWvySaKBSHFaZdPPoGS9Q
        status: active
        display_name: 王道寬
        merged_into_person_id: null
    - claim:
        id: c_3YlSM_u_hbM8xWckUZbySY
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q9mDx1wUHCXGPCF1MmjhMu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7QY_5MiCqH5vCMen-tQUWk
          claim_id: c_3YlSM_u_hbM8xWckUZbySY
          source_id: s_NCcRpdikbC6FjcQQeFqDsE
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道平 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道平 之父／母。
          source:
            id: s_NCcRpdikbC6FjcQQeFqDsE
            source_type: api_record
            title: 中国历代人物传记资料库：王道平（CBDB 313342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313342&o=json
            external_identifier: CBDB:313342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q9mDx1wUHCXGPCF1MmjhMu
        status: active
        display_name: 王道平
        merged_into_person_id: null
    - claim:
        id: c_bjiHzRl4qISyI3QMZDR1Et
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XYErMzjxPsiZD8kroR3G4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_SirCp59y9XYWNxDzAVyJ
          claim_id: c_bjiHzRl4qISyI3QMZDR1Et
          source_id: s_iwAi0YHdJwaHGZfod6YiWQ
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道正 与 王道直 为同胞（CBDB 记「弟」），王道直 之父／母即 王道正 之父／母。
          source:
            id: s_iwAi0YHdJwaHGZfod6YiWQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道正（CBDB 313341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313341&o=json
            external_identifier: CBDB:313341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XYErMzjxPsiZD8kroR3G4E
        status: active
        display_name: 王道正
        merged_into_person_id: null
    - claim:
        id: c_PwL3r7ffQLmCutyAGDYe05
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p2ds3eQx6gn32ZVKniwjr9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9aDW1HZdv5rf2rEOm-AMIl
          claim_id: c_PwL3r7ffQLmCutyAGDYe05
          source_id: s_V_4pWNSbZh6rNKAzPIqcPc
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道成 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道成 之父／母。
          source:
            id: s_V_4pWNSbZh6rNKAzPIqcPc
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 313345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json
            external_identifier: CBDB:313345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p2ds3eQx6gn32ZVKniwjr9
        status: active
        display_name: 王道成
        merged_into_person_id: null
    - claim:
        id: c_dUg2mYLt-uprHafDmbG665
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wuS1SJFpyPHDuRTM9NL3yy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqIajkZhnWS05WyFndwuMv
          claim_id: c_dUg2mYLt-uprHafDmbG665
          source_id: s_mleZo0mRNHHaMjB-Tte-6t
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道純 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道純 之父／母。
          source:
            id: s_mleZo0mRNHHaMjB-Tte-6t
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 313344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313344&o=json
            external_identifier: CBDB:313344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wuS1SJFpyPHDuRTM9NL3yy
        status: active
        display_name: 王道純
        merged_into_person_id: null
    - claim:
        id: c_B4EEBE3DsqcEfl9Gd0HTVQ
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xdMmyTQBkhL8iBNWY99mYL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLH2d9Yzmzg5UTOIuhNn2q
          claim_id: c_B4EEBE3DsqcEfl9Gd0HTVQ
          source_id: s_0rgHzgedvKSJyKf9NIBD59
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道公 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道公 之父／母。
          source:
            id: s_0rgHzgedvKSJyKf9NIBD59
            source_type: api_record
            title: 中国历代人物传记资料库：王道公（CBDB 313346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json
            external_identifier: CBDB:313346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xdMmyTQBkhL8iBNWY99mYL
        status: active
        display_name: 王道公
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| bio.summary | 王獻，明人物。嘉靖二十九年進士，籍贯咸陽，曾任布政使司左參政。（中国历代人物传记资料库 CBDB 313336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_emRFonnZuCJKKPb7oDivvy | 王道直 | accepted |
| children | p_LrWvySaKBSHFaZdPPoGS9Q | 王道寬 | accepted |
| children | p_Q9mDx1wUHCXGPCF1MmjhMu | 王道平 | accepted |
| children | p_XYErMzjxPsiZD8kroR3G4E | 王道正 | accepted |
| children | p_p2ds3eQx6gn32ZVKniwjr9 | 王道成 | accepted |
| children | p_wuS1SJFpyPHDuRTM9NL3yy | 王道純 | accepted |
| children | p_xdMmyTQBkhL8iBNWY99mYL | 王道公 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 313345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313345&o=json)
- [中国历代人物传记资料库：王道純（CBDB 313344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313344&o=json)
- [中国历代人物传记资料库：王道公（CBDB 313346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json)
- [中国历代人物传记资料库：王道寬（CBDB 313343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json)
- [中国历代人物传记资料库：王道平（CBDB 313342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313342&o=json)
- [中国历代人物传记资料库：王道正（CBDB 313341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313341&o=json)
- [中国历代人物传记资料库：王獻（CBDB 313336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json)
