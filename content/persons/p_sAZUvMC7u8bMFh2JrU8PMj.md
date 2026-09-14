---
schema: wang-person/v1
id: p_sAZUvMC7u8bMFh2JrU8PMj
status: active
merged_into: null
display_name: 王良心
cbdb_id: 205923
revision: 15
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ro49ARWhhFhnaWp9XQZHKx
        subject_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良心（生于1542年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 205923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PIbMrPIgWukMcW7WczVK6l
          claim_id: c_Ro49ARWhhFhnaWp9XQZHKx
          source_id: s_PJGfr4y19Ad9rFabzSb4so
          stance: supports
          locator: CBDB:205923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PJGfr4y19Ad9rFabzSb4so
            source_type: api_record
            title: 中国历代人物传记资料库：王良心（CBDB 205923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205923&o=json
            external_identifier: CBDB:205923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WZfMYSs4xvBVFSBrSy9GSq
        subject_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QSGWieuWK5egGD9x76rbVH
          claim_id: c_WZfMYSs4xvBVFSBrSy9GSq
          source_id: s_PJGfr4y19Ad9rFabzSb4so
          stance: supports
          locator: CBDB:205923
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_PJGfr4y19Ad9rFabzSb4so
            source_type: api_record
            title: 中国历代人物传记资料库：王良心（CBDB 205923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205923&o=json
            external_identifier: CBDB:205923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4tgnFmU3YXG4FvSJTKYT16
        subject_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eAPWc9HKxSYNfM11u9yeW7
          claim_id: c_4tgnFmU3YXG4FvSJTKYT16
          source_id: s_PJGfr4y19Ad9rFabzSb4so
          stance: supports
          locator: CBDB:205923
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N_oWAkIotFtNPNFN-eEMQJ
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1CcOiZMUx8iBs7OZe6ObTS
          claim_id: c_N_oWAkIotFtNPNFN-eEMQJ
          source_id: s_ZkLWzBEnVE1LYHvpg5QRZ2
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZkLWzBEnVE1LYHvpg5QRZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 210723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210723&o=json
            external_identifier: CBDB:210723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cX0LzGc2vQ5RrVHgD04Myw
        subject_person_id: p_FBZHK8U948C8S9kFQmA1wR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWMM3CLh7eOTqB76Y4fLmY
          claim_id: c_cX0LzGc2vQ5RrVHgD04Myw
          source_id: s_h8UAB5v7EvgXTVo3GcM12a
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h8UAB5v7EvgXTVo3GcM12a
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 210722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210722&o=json
            external_identifier: CBDB:210722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FBZHK8U948C8S9kFQmA1wR
        status: active
        display_name: 王岳
        merged_into_person_id: null
    - claim:
        id: c_L6DOF4Oq--XQj596QIU8L0
        subject_person_id: p_K4dxAXnJm9smZxCxzJsN4q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Shw4WuBrROT78Hj1COLNCS
          claim_id: c_L6DOF4Oq--XQj596QIU8L0
          source_id: s_o9AZwP8QTSSANnPFXMAnD5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o9AZwP8QTSSANnPFXMAnD5
            source_type: api_record
            title: 中国历代人物传记资料库：王鐔（CBDB 210721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210721&o=json
            external_identifier: CBDB:210721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K4dxAXnJm9smZxCxzJsN4q
        status: active
        display_name: 王鐔
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_oYVOucXh4i-93ixBGImDg7
        subject_person_id: p_7UDSX61NMV9BE5LyEoC33N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pkcRQ3dCSCOCzSDJVu2nqx
          claim_id: c_oYVOucXh4i-93ixBGImDg7
          source_id: s_Yy8aEqoYZLi7LLJVBTa-c-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yy8aEqoYZLi7LLJVBTa-c-
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 210728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210728&o=json
            external_identifier: CBDB:210728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7UDSX61NMV9BE5LyEoC33N
        status: active
        display_name: 王叔果
        merged_into_person_id: null
    - claim:
        id: c_dD4E2AKBLoiDkp6Ti4C00P
        subject_person_id: p_9E8oYsqeKwVApirRF2TQVh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rSF6BQNiXIo_OIQCdAWppf
          claim_id: c_dD4E2AKBLoiDkp6Ti4C00P
          source_id: s_OLS2nbu9F1HdE3hssDLuki
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OLS2nbu9F1HdE3hssDLuki
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 210727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json
            external_identifier: CBDB:210727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9E8oYsqeKwVApirRF2TQVh
        status: active
        display_name: 王叔懋
        merged_into_person_id: null
    - claim:
        id: c_Zs_ToPjV8DceUqx-jY_so8
        subject_person_id: p_BtEFcxCQCBdbeMpPE9EqVj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAOSg3CpKxd9gzecU5ExaV
          claim_id: c_Zs_ToPjV8DceUqx-jY_so8
          source_id: s_0cw_MTbXvdMVZesweQ2Uex
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0cw_MTbXvdMVZesweQ2Uex
            source_type: api_record
            title: 中国历代人物传记资料库：王良驄（CBDB 210735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json
            external_identifier: CBDB:210735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtEFcxCQCBdbeMpPE9EqVj
        status: active
        display_name: 王良驄
        merged_into_person_id: null
    - claim:
        id: c_FqbSdJnp_d6DDWXTMjrUxw
        subject_person_id: p_FnfVhzgsVEUkVBTGpRvvhB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pucg6lKqW58gtgYO5AwPyY
          claim_id: c_FqbSdJnp_d6DDWXTMjrUxw
          source_id: s_Wcbn0Ci50p3Q9YIgCaV0v6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wcbn0Ci50p3Q9YIgCaV0v6
            source_type: api_record
            title: 中国历代人物传记资料库：王良駿（CBDB 210734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json
            external_identifier: CBDB:210734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FnfVhzgsVEUkVBTGpRvvhB
        status: active
        display_name: 王良駿
        merged_into_person_id: null
    - claim:
        id: c_PcO0PLTKehZIc8I2numdrT
        subject_person_id: p_MRxE4eWth2oa1n5HHCdezL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vm_cHDNA_pSzSB_dM3JqkW
          claim_id: c_PcO0PLTKehZIc8I2numdrT
          source_id: s_w59bExEfHBYD6zz2036Mh6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w59bExEfHBYD6zz2036Mh6
            source_type: api_record
            title: 中国历代人物传记资料库：王良騢（CBDB 210738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json
            external_identifier: CBDB:210738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MRxE4eWth2oa1n5HHCdezL
        status: active
        display_name: 王良騢
        merged_into_person_id: null
    - claim:
        id: c_gYMlDY3rfLZeGmJTjdVHnk
        subject_person_id: p_Zh3L6fe6rGXcEvqPu9TugV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ba0YYZq-8mhxtYgD2SipwG
          claim_id: c_gYMlDY3rfLZeGmJTjdVHnk
          source_id: s_Z145TY3O86DA1mpmngn_3U
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z145TY3O86DA1mpmngn_3U
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 210731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210731&o=json
            external_identifier: CBDB:210731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zh3L6fe6rGXcEvqPu9TugV
        status: active
        display_name: 王叔本
        merged_into_person_id: null
    - claim:
        id: c_tUnfHpLi4kxFDth20izkrY
        subject_person_id: p_bL76HK8tPBRuUJPkdViswC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcXoehWgPooq0lq4L9s8pm
          claim_id: c_tUnfHpLi4kxFDth20izkrY
          source_id: s_kVMKd2czdCwu0faPP209pi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kVMKd2czdCwu0faPP209pi
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 210729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json
            external_identifier: CBDB:210729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bL76HK8tPBRuUJPkdViswC
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
    - claim:
        id: c_wmpwyYeh8Vx4gKgLVdMxv2
        subject_person_id: p_ejUC7CGVt86beHAZF1QQxo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZijRvbfTKt_spgqLq2IxU
          claim_id: c_wmpwyYeh8Vx4gKgLVdMxv2
          source_id: s_3XMrBKrP8vOW_2pzQyw-3j
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3XMrBKrP8vOW_2pzQyw-3j
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 210730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210730&o=json
            external_identifier: CBDB:210730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ejUC7CGVt86beHAZF1QQxo
        status: active
        display_name: 王德
        merged_into_person_id: null
    - claim:
        id: c_Ui5SxJURRoAPDp7OOFx-co
        subject_person_id: p_gFD38TcLYY9Xf6WG4cce5D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcEbADO1X2RdwYE2UneqlW
          claim_id: c_Ui5SxJURRoAPDp7OOFx-co
          source_id: s_kLd3dQ9Q3J4vhoGXuuOKk-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kLd3dQ9Q3J4vhoGXuuOKk-
            source_type: api_record
            title: 中国历代人物传记资料库：王良驥（CBDB 210733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json
            external_identifier: CBDB:210733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gFD38TcLYY9Xf6WG4cce5D
        status: active
        display_name: 王良驥
        merged_into_person_id: null
    - claim:
        id: c_j7LqnxMweNfUACwVhfI8E_
        subject_person_id: p_maKWGqbbp6R9PCCNrE8KNy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JFody9X-CZ7tN3ftTc8zSe
          claim_id: c_j7LqnxMweNfUACwVhfI8E_
          source_id: s_Akkouqpgo4lcgp1N9e95MT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Akkouqpgo4lcgp1N9e95MT
            source_type: api_record
            title: 中国历代人物传记资料库：王良驂（CBDB 210732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json
            external_identifier: CBDB:210732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_maKWGqbbp6R9PCCNrE8KNy
        status: active
        display_name: 王良驂
        merged_into_person_id: null
    - claim:
        id: c_nzVAW6Cx0b3av3FsGgT5G8
        subject_person_id: p_o4DAn4WpdTaF7aQ26jY4dG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6uwcn1gPVpVm7eSAr-hi3C
          claim_id: c_nzVAW6Cx0b3av3FsGgT5G8
          source_id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
            source_type: api_record
            title: 中国历代人物传记资料库：王良駰（CBDB 210736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json
            external_identifier: CBDB:210736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o4DAn4WpdTaF7aQ26jY4dG
        status: active
        display_name: 王良駰
        merged_into_person_id: null
---

# 王良心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良心（生于1542年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 205923） | accepted |
| birth.date | 1542年 | accepted |
| name.primary | 王良心 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| ancestors | p_FBZHK8U948C8S9kFQmA1wR | 王岳 | accepted |
| ancestors | p_K4dxAXnJm9smZxCxzJsN4q | 王鐔 | accepted |
| other | p_7UDSX61NMV9BE5LyEoC33N | 王叔果 | accepted |
| other | p_9E8oYsqeKwVApirRF2TQVh | 王叔懋 | accepted |
| other | p_BtEFcxCQCBdbeMpPE9EqVj | 王良驄 | accepted |
| other | p_FnfVhzgsVEUkVBTGpRvvhB | 王良駿 | accepted |
| other | p_MRxE4eWth2oa1n5HHCdezL | 王良騢 | accepted |
| other | p_Zh3L6fe6rGXcEvqPu9TugV | 王叔本 | accepted |
| other | p_bL76HK8tPBRuUJPkdViswC | 王叔杲 | accepted |
| other | p_ejUC7CGVt86beHAZF1QQxo | 王德 | accepted |
| other | p_gFD38TcLYY9Xf6WG4cce5D | 王良驥 | accepted |
| other | p_maKWGqbbp6R9PCCNrE8KNy | 王良驂 | accepted |
| other | p_o4DAn4WpdTaF7aQ26jY4dG | 王良駰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 210723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210723&o=json)
- [中国历代人物传记资料库：王德（CBDB 210730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210730&o=json)
- [中国历代人物传记资料库：王良驂（CBDB 210732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210732&o=json)
- [中国历代人物传记资料库：王良驄（CBDB 210735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json)
- [中国历代人物传记资料库：王良驥（CBDB 210733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json)
- [中国历代人物传记资料库：王良駿（CBDB 210734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210734&o=json)
- [中国历代人物传记资料库：王良騢（CBDB 210738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json)
- [中国历代人物传记资料库：王良心（CBDB 205923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205923&o=json)
- [中国历代人物传记资料库：王良駰（CBDB 210736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json)
- [中国历代人物传记资料库：王叔本（CBDB 210731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210731&o=json)
- [中国历代人物传记资料库：王叔杲（CBDB 210729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json)
- [中国历代人物传记资料库：王叔果（CBDB 210728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210728&o=json)
- [中国历代人物传记资料库：王叔懋（CBDB 210727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210727&o=json)
- [中国历代人物传记资料库：王鐔（CBDB 210721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210721&o=json)
- [中国历代人物传记资料库：王岳（CBDB 210722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210722&o=json)
