---
schema: wang-person/v1
id: p_ZBwZdB8tEY2KUEfDHqhpeB
status: active
merged_into: null
display_name: 王景
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BsH8f1jQdH3gghMzM6pqav
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CEP5bHGQf3EEgFDa8Wn9yD
          claim_id: c_BsH8f1jQdH3gghMzM6pqav
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: CBDB:242761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242761）
          source: &a1
            id: s_UJZTr2sGggKgZh27cf91L4
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 242761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242761&o=json
            external_identifier: CBDB:242761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KL4RpW8RFU78HqPwRHUHN2
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景，明人物。成化五年進士，籍贯望江，曾任給事中。（中国历代人物传记资料库 CBDB 242761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2J9KnX5l2uwcb3GeJ-027H
          claim_id: c_KL4RpW8RFU78HqPwRHUHN2
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: CBDB:242761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_U0Giy7KSApj3fylG9herOo
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7ZVQ89WfPAjwWj75-y5p8
          claim_id: c_U0Giy7KSApj3fylG9herOo
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gLTowmCEC7vGFGymkruUKP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 67734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json
            external_identifier: CBDB:67734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_rXpHYVqdzOpL1wvRkogs4B
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1kKIMl78vHOygc5Q1sX1u
          claim_id: c_rXpHYVqdzOpL1wvRkogs4B
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
    - claim:
        id: c_Q9uHXhg1zNelvgsuN-BF63
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BRSYkEU33N2No0YDj4NIoc
          claim_id: c_Q9uHXhg1zNelvgsuN-BF63
          source_id: s_cQBxf8FWp5bkIyiv0ue-vR
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑛 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王瑛 之父／母。
          source:
            id: s_cQBxf8FWp5bkIyiv0ue-vR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AXyBVkPGwHPT7CKdmQDD9u
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_dtHks4Kwk0G-a885c7hI_e
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8M4Hjm3bp4W2No41Pk42TA
          claim_id: c_dtHks4Kwk0G-a885c7hI_e
          source_id: s_FnIdFzNCRSLECjaYD2utNi
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王瑞 为同胞（CBDB 记「弟」），王瑞 之父／母即 王璽 之父／母。
          source:
            id: s_FnIdFzNCRSLECjaYD2utNi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D2wPSDAQKN7cA3Y8wQgqPM
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_DgQ-pqVJqmAClN4I9lsCd0
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jy6TkSti3P-noX3sLEFIaL
          claim_id: c_DgQ-pqVJqmAClN4I9lsCd0
          source_id: s_xnEfw-N7Om1zIM3q-uuW3Y
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王理 与 王瑞 为同胞（CBDB 记「弟」），王瑞 之父／母即 王理 之父／母。
          source:
            id: s_xnEfw-N7Om1zIM3q-uuW3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LAzmXqeLSTSSaP91CUcU6f
        status: active
        display_name: 王理
        merged_into_person_id: null
    - claim:
        id: c_poysIKORjVw2zGlxtuuFXH
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PtKrmNSM1VBXgJwtTbSXrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8AtTN28xIPhDnKtf-DM3p
          claim_id: c_poysIKORjVw2zGlxtuuFXH
          source_id: s_fXoMpQCp3H-oufFhxitQgZ
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王珪 之父／母。
          source:
            id: s_fXoMpQCp3H-oufFhxitQgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 242776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json
            external_identifier: CBDB:242776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PtKrmNSM1VBXgJwtTbSXrv
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_jG_HfwS8WpfSZrK4At4ao3
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dPvTec33SE8eiE5zqJyPAE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E_P1_W08a_1Q93Iob3K2Zl
          claim_id: c_jG_HfwS8WpfSZrK4At4ao3
          source_id: s_R1Uqzf_6OxhnGDnQjQhBtD
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王琳 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王琳 之父／母。
          source:
            id: s_R1Uqzf_6OxhnGDnQjQhBtD
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 242772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242772&o=json
            external_identifier: CBDB:242772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dPvTec33SE8eiE5zqJyPAE
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_CxgEbvj1awQTkQztl1d7tc
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iq8Eb3F4aUXFNdQJfFK2NM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qKIV-qrh2ZxA0ly3k3e3sJ
          claim_id: c_CxgEbvj1awQTkQztl1d7tc
          source_id: s_5B-7RdjrTCiffnIcQqDS-_
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王琦 之父／母。
          source:
            id: s_5B-7RdjrTCiffnIcQqDS-_
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 242773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242773&o=json
            external_identifier: CBDB:242773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iq8Eb3F4aUXFNdQJfFK2NM
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_55wNy1Bf106g_VqkjReylv
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mhvpK9DERFQ11tcoM98rV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RG5tyPP9K2Vgfe1Z_jY-kS
          claim_id: c_55wNy1Bf106g_VqkjReylv
          source_id: s_oACEjltYYMeO4y64X42TSb
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王琅 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王琅 之父／母。
          source:
            id: s_oACEjltYYMeO4y64X42TSb
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mhvpK9DERFQ11tcoM98rV6
        status: active
        display_name: 王琅
        merged_into_person_id: null
    - claim:
        id: c_aGrdq4WZKsPedD4_8UeEbI
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rhtpen9afcH7UJSJYWUQNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPbpPn6IGLhzndcoOinFw2
          claim_id: c_aGrdq4WZKsPedD4_8UeEbI
          source_id: s_10aSUErAVixRvf4heRLaj0
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王瑞 为同胞（CBDB 记「弟」），王瑞 之父／母即 王瓊 之父／母。
          source:
            id: s_10aSUErAVixRvf4heRLaj0
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 242769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json
            external_identifier: CBDB:242769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhtpen9afcH7UJSJYWUQNy
        status: active
        display_name: 王瓊
        merged_into_person_id: null
    - claim:
        id: c_aWQuiBwALxiixhdpVD8leu
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CdLlODUJPpYZJoX13IpPLO
          claim_id: c_aWQuiBwALxiixhdpVD8leu
          source_id: s_tmIxMokX3rAVMLLLwVbgMF
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王璉 之父／母。
          source:
            id: s_tmIxMokX3rAVMLLLwVbgMF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziy9ABVVuhK7qvMg7sm9J4
        status: active
        display_name: 王璉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | 王景，明人物。成化五年進士，籍贯望江，曾任給事中。（中国历代人物传记资料库 CBDB 242761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| children | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |
| children | p_AXyBVkPGwHPT7CKdmQDD9u | 王瑛 | accepted |
| children | p_D2wPSDAQKN7cA3Y8wQgqPM | 王璽 | accepted |
| children | p_LAzmXqeLSTSSaP91CUcU6f | 王理 | accepted |
| children | p_PtKrmNSM1VBXgJwtTbSXrv | 王珪 | accepted |
| children | p_dPvTec33SE8eiE5zqJyPAE | 王琳 | accepted |
| children | p_iq8Eb3F4aUXFNdQJfFK2NM | 王琦 | accepted |
| children | p_mhvpK9DERFQ11tcoM98rV6 | 王琅 | accepted |
| children | p_rhtpen9afcH7UJSJYWUQNy | 王瓊 | accepted |
| children | p_ziy9ABVVuhK7qvMg7sm9J4 | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 242776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json)
- [中国历代人物传记资料库：王景（CBDB 242761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242761&o=json)
- [中国历代人物传记资料库：王琅（CBDB 242778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json)
- [中国历代人物传记资料库：王理（CBDB 242768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json)
- [中国历代人物传记资料库：王璉（CBDB 242771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json)
- [中国历代人物传记资料库：王琳（CBDB 242772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242772&o=json)
- [中国历代人物传记资料库：王琦（CBDB 242773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242773&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 242769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242769&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 67734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json)
- [中国历代人物传记资料库：王璽（CBDB 242770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 242774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json)
