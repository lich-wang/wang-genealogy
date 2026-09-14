---
schema: wang-person/v1
id: p_PBPvLNJEK4jPNCWDSKfDp5
status: active
merged_into: null
display_name: 王春復
cbdb_id: 203136
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5ooeULdr4Vqgj37razk3b
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春復（生于1507年），明人物。明清進士進士，籍贯晉江，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 203136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yWr7bHfcTgu1xFl75JdBpy
          claim_id: c_Q5ooeULdr4Vqgj37razk3b
          source_id: s_NfGK3AwkKbEP1unU1PKMcc
          stance: supports
          locator: CBDB:203136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NfGK3AwkKbEP1unU1PKMcc
            source_type: api_record
            title: 中国历代人物传记资料库：王春復（CBDB 203136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json
            external_identifier: CBDB:203136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3dYJAyF6MCAwor634Q5UXu
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1507-01-01
            latest: 1507-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FdfFXhgVwTLanuqzmdh1H3
          claim_id: c_3dYJAyF6MCAwor634Q5UXu
          source_id: s_NfGK3AwkKbEP1unU1PKMcc
          stance: supports
          locator: CBDB:203136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1507
          source:
            id: s_NfGK3AwkKbEP1unU1PKMcc
            source_type: api_record
            title: 中国历代人物传记资料库：王春復（CBDB 203136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json
            external_identifier: CBDB:203136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_54n78LUjB1rjsoNtXYvfps
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7AK1cjQ26pgieJzcFBJA2u
          claim_id: c_54n78LUjB1rjsoNtXYvfps
          source_id: s_NfGK3AwkKbEP1unU1PKMcc
          stance: supports
          locator: CBDB:203136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1507
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__rQgbjFd8gbRnF4kpoeRE4
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U_BaWOxyl630bmI3nZJADM
          claim_id: c__rQgbjFd8gbRnF4kpoeRE4
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VF36nge6KQN5v437W8CR1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 300354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json
            external_identifier: CBDB:300354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_djPzJATqP8N3fAgZuiGdme
        status: active
        display_name: 王琥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-5kbZZK-JLGxIC0g470FXc
        subject_person_id: p_AbVcjzx5u1oivmsbfrqHB3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyEZV5aewC3P4xUZwdPZ5Y
          claim_id: c_-5kbZZK-JLGxIC0g470FXc
          source_id: s_EW8kQ4gtTTL5QRFGJSxTjX
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EW8kQ4gtTTL5QRFGJSxTjX
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 300353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300353&o=json
            external_identifier: CBDB:300353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AbVcjzx5u1oivmsbfrqHB3
        status: active
        display_name: 王和
        merged_into_person_id: null
    - claim:
        id: c_8_UI0cvB7TQfFsV0KDE-oM
        subject_person_id: p_qiVejsvjW7PKHf9fnAywPN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6ZO9Ws07b3QewAyCDWCKm
          claim_id: c_8_UI0cvB7TQfFsV0KDE-oM
          source_id: s_JnVfeY1b8kX24WpPPJFuMH
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JnVfeY1b8kX24WpPPJFuMH
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 300352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300352&o=json
            external_identifier: CBDB:300352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qiVejsvjW7PKHf9fnAywPN
        status: active
        display_name: 王玘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_5SlqfasqKyn4p4Xw8tkh4D
        subject_person_id: p_2mASBqm4okacG3erqHNN5H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyxoZhEl1l_KaoB9QifvnQ
          claim_id: c_5SlqfasqKyn4p4Xw8tkh4D
          source_id: s_QncvpqGjUFRwzVhImHBoCH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QncvpqGjUFRwzVhImHBoCH
            source_type: api_record
            title: 中国历代人物传记资料库：王初復（CBDB 300365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300365&o=json
            external_identifier: CBDB:300365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2mASBqm4okacG3erqHNN5H
        status: active
        display_name: 王初復
        merged_into_person_id: null
    - claim:
        id: c_eZPYPhSJ15eCF6eOofUAUe
        subject_person_id: p_CQfx9Ba3WNyA32G4VxP7dC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-MtzlkHMTLC0S1qCaZVska
          claim_id: c_eZPYPhSJ15eCF6eOofUAUe
          source_id: s_Siz5-VUTpExUTc3rZkN-Cf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Siz5-VUTpExUTc3rZkN-Cf
            source_type: api_record
            title: 中国历代人物传记资料库：王速復（CBDB 300364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300364&o=json
            external_identifier: CBDB:300364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CQfx9Ba3WNyA32G4VxP7dC
        status: active
        display_name: 王速復
        merged_into_person_id: null
    - claim:
        id: c_kwZw9XOeSHHGX3NA7fcCLh
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQRCLMoA3oW26KGLDs6H6M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zN5Ao8jwb6aFJ9xZXex_Ri
          claim_id: c_kwZw9XOeSHHGX3NA7fcCLh
          source_id: s_ZW49eB8yQL_P1_MziNJWsy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZW49eB8yQL_P1_MziNJWsy
            source_type: api_record
            title: 中国历代人物传记资料库：王陽復（CBDB 300359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300359&o=json
            external_identifier: CBDB:300359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQRCLMoA3oW26KGLDs6H6M
        status: active
        display_name: 王陽復
        merged_into_person_id: null
    - claim:
        id: c_sFLjxI7ufb4f_jtWucm3ry
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fmoAMRAFhJB4TCz6oG2LKn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KQgI0W2i2Peq3JioyQRS9F
          claim_id: c_sFLjxI7ufb4f_jtWucm3ry
          source_id: s_fuUWAKUI2rxazA99vrJgAZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fuUWAKUI2rxazA99vrJgAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王休復（CBDB 300358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json
            external_identifier: CBDB:300358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fmoAMRAFhJB4TCz6oG2LKn
        status: active
        display_name: 王休復
        merged_into_person_id: null
    - claim:
        id: c_rdmO3ff6_uGFxiEUZ5rFpe
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hij62KiNEfX1vVHo6K2VDF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hqg0LI8XS9zRf_mzuDxGCH
          claim_id: c_rdmO3ff6_uGFxiEUZ5rFpe
          source_id: s_CDGUu0UF1J3LAWn42sAKJt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CDGUu0UF1J3LAWn42sAKJt
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 300361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json
            external_identifier: CBDB:300361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hij62KiNEfX1vVHo6K2VDF
        status: active
        display_name: 王克復
        merged_into_person_id: null
    - claim:
        id: c_TILFfbp_o665feHysvLBmT
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iSpvyGUT53CspFRmELkfKQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NbNQn4IOSHEpyE5N2rGEvi
          claim_id: c_TILFfbp_o665feHysvLBmT
          source_id: s_JoUqi0phScLCNC_ewSPXwG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JoUqi0phScLCNC_ewSPXwG
            source_type: api_record
            title: 中国历代人物传记资料库：王三復（CBDB 300363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300363&o=json
            external_identifier: CBDB:300363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iSpvyGUT53CspFRmELkfKQ
        status: active
        display_name: 王三復
        merged_into_person_id: null
    - claim:
        id: c_-QkJFfI2Xu6OHGrmUwqhTr
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rP1SdxkNvEkxQt1vGkS8G4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mktagZK6oKPpFQiB4pV9cS
          claim_id: c_-QkJFfI2Xu6OHGrmUwqhTr
          source_id: s_YkscnFtX-eClZXZ_lxkDOF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YkscnFtX-eClZXZ_lxkDOF
            source_type: api_record
            title: 中国历代人物传记资料库：王禮復（CBDB 300366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300366&o=json
            external_identifier: CBDB:300366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rP1SdxkNvEkxQt1vGkS8G4
        status: active
        display_name: 王禮復
        merged_into_person_id: null
    - claim:
        id: c_1oG8OQcqAT3Z9j00aR-7Sj
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vikXrBMKnbMBLaHcYcsA5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hj7mm4WXx5SxGNTFWMWUn9
          claim_id: c_1oG8OQcqAT3Z9j00aR-7Sj
          source_id: s_dGt3DpgDWM9-2jdJMTDHWR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dGt3DpgDWM9-2jdJMTDHWR
            source_type: api_record
            title: 中国历代人物传记资料库：王德復（CBDB 300362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json
            external_identifier: CBDB:300362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vikXrBMKnbMBLaHcYcsA5k
        status: active
        display_name: 王德復
        merged_into_person_id: null
---

# 王春復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王春復（生于1507年），明人物。明清進士進士，籍贯晉江，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 203136） | accepted |
| birth.date | 1507年 | accepted |
| name.primary | 王春復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_djPzJATqP8N3fAgZuiGdme | 王琥 | accepted |
| ancestors | p_AbVcjzx5u1oivmsbfrqHB3 | 王和 | accepted |
| ancestors | p_qiVejsvjW7PKHf9fnAywPN | 王玘 | accepted |
| other | p_2mASBqm4okacG3erqHNN5H | 王初復 | accepted |
| other | p_CQfx9Ba3WNyA32G4VxP7dC | 王速復 | accepted |
| other | p_RQRCLMoA3oW26KGLDs6H6M | 王陽復 | accepted |
| other | p_fmoAMRAFhJB4TCz6oG2LKn | 王休復 | accepted |
| other | p_hij62KiNEfX1vVHo6K2VDF | 王克復 | accepted |
| other | p_iSpvyGUT53CspFRmELkfKQ | 王三復 | accepted |
| other | p_rP1SdxkNvEkxQt1vGkS8G4 | 王禮復 | accepted |
| other | p_vikXrBMKnbMBLaHcYcsA5k | 王德復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王初復（CBDB 300365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300365&o=json)
- [中国历代人物传记资料库：王春復（CBDB 203136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json)
- [中国历代人物传记资料库：王德復（CBDB 300362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json)
- [中国历代人物传记资料库：王和（CBDB 300353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300353&o=json)
- [中国历代人物传记资料库：王琥（CBDB 300354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json)
- [中国历代人物传记资料库：王克復（CBDB 300361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json)
- [中国历代人物传记资料库：王禮復（CBDB 300366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300366&o=json)
- [中国历代人物传记资料库：王玘（CBDB 300352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300352&o=json)
- [中国历代人物传记资料库：王三復（CBDB 300363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300363&o=json)
- [中国历代人物传记资料库：王速復（CBDB 300364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300364&o=json)
- [中国历代人物传记资料库：王休復（CBDB 300358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json)
- [中国历代人物传记资料库：王陽復（CBDB 300359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300359&o=json)
