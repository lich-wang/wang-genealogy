---
schema: wang-person/v1
id: p_McURSghs63gxnc5WxHG3bH
status: active
merged_into: null
display_name: 王周紹
cbdb_id: 205463
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S8FVMTP1ejPBYt3FzHBS4b
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周紹（生于1536年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任通判。（中国历代人物传记资料库 CBDB 205463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7Fc76g5q3-4Z54fOQVivHQ
          claim_id: c_S8FVMTP1ejPBYt3FzHBS4b
          source_id: s_ExzEPk8cevJF6nCM62XQ9o
          stance: supports
          locator: CBDB:205463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ExzEPk8cevJF6nCM62XQ9o
            source_type: api_record
            title: 中国历代人物传记资料库：王周紹（CBDB 205463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205463&o=json
            external_identifier: CBDB:205463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5M119f1TFoRipKpDFoDDJm
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1536-01-01
            latest: 1536-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d3TbaqpKiSm2PZ5XQnmKWf
          claim_id: c_5M119f1TFoRipKpDFoDDJm
          source_id: s_ExzEPk8cevJF6nCM62XQ9o
          stance: supports
          locator: CBDB:205463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1536
          source:
            id: s_ExzEPk8cevJF6nCM62XQ9o
            source_type: api_record
            title: 中国历代人物传记资料库：王周紹（CBDB 205463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205463&o=json
            external_identifier: CBDB:205463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8dGAetVvDrBUfcWf9iGNn5
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W7CbXm3HnmaGN86fp4gHJG
          claim_id: c_8dGAetVvDrBUfcWf9iGNn5
          source_id: s_ExzEPk8cevJF6nCM62XQ9o
          stance: supports
          locator: CBDB:205463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1536
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7PvY0msdix01v06pxb2oxd
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b3YnqCeGQADyKZFNL-gXPR
          claim_id: c_7PvY0msdix01v06pxb2oxd
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hJqj7Z5xZmWaxak2Py5xRH
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 333618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json
            external_identifier: CBDB:333618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U6zX3wnxTCMh3nEUMpMz4g
        status: active
        display_name: 王一貫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wklA1DHhBnvnDZiDdfsSYo
        subject_person_id: p_5SfzfiN7TmF5uEpCHo93w9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYNXIGvEPK9NxXoPfaXz9C
          claim_id: c_wklA1DHhBnvnDZiDdfsSYo
          source_id: s_8GbUjTZhHFLJiX3gkxwUN8
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8GbUjTZhHFLJiX3gkxwUN8
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 333617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333617&o=json
            external_identifier: CBDB:333617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5SfzfiN7TmF5uEpCHo93w9
        status: active
        display_name: 王世芳
        merged_into_person_id: null
    - claim:
        id: c_rqkxqDWUBQpN_VgAS72Pi-
        subject_person_id: p_weV7whz3ANfDFG4xKLwQe2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mNYfOA3crmtuA_LIYdOk6
          claim_id: c_rqkxqDWUBQpN_VgAS72Pi-
          source_id: s_FzYn5ZuX7NjMtdE9Z5N8pq
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FzYn5ZuX7NjMtdE9Z5N8pq
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 333616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333616&o=json
            external_identifier: CBDB:333616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_weV7whz3ANfDFG4xKLwQe2
        status: active
        display_name: 王悌
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_I0gK0y5wKsbMVGhctWWtre
        subject_person_id: p_C4Wb4Gbgs9Dw4h9zXjiS69
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2yzbcxb3BwH5AGNPm-1IfU
          claim_id: c_I0gK0y5wKsbMVGhctWWtre
          source_id: s_0QavQUGm7w20OQDXwK1g4p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0QavQUGm7w20OQDXwK1g4p
            source_type: api_record
            title: 中国历代人物传记资料库：王繢（CBDB 333629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333629&o=json
            external_identifier: CBDB:333629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C4Wb4Gbgs9Dw4h9zXjiS69
        status: active
        display_name: 王繢
        merged_into_person_id: null
    - claim:
        id: c_9TiiFXJ_Eom3-VzFf0jLAT
        subject_person_id: p_EpwRMB1qrN42kqWjR78hMV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmkWllhKE9mvfz5KOyLbLF
          claim_id: c_9TiiFXJ_Eom3-VzFf0jLAT
          source_id: s_CvEezrnFEP2AajoA3nL5Sc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CvEezrnFEP2AajoA3nL5Sc
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 333625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333625&o=json
            external_identifier: CBDB:333625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EpwRMB1qrN42kqWjR78hMV
        status: active
        display_name: 王約
        merged_into_person_id: null
    - claim:
        id: c_FVOuX9ZhSUVZ2871GMrngC
        subject_person_id: p_EwCuh8FCLcMfe1885hDnr6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oR2JbB4LqNh4yEEkb3eWy
          claim_id: c_FVOuX9ZhSUVZ2871GMrngC
          source_id: s_QkY2WmIg6AhjqO7GZFLCPs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QkY2WmIg6AhjqO7GZFLCPs
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 333626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json
            external_identifier: CBDB:333626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EwCuh8FCLcMfe1885hDnr6
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_7qlibv50cApmoKqi7ZNA9q
        subject_person_id: p_LJZvEdY7pT87YV6vtHGzP5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvBm7Zcx8t6UBLNmsT3dVT
          claim_id: c_7qlibv50cApmoKqi7ZNA9q
          source_id: s_ZBhjZA9pc8hvUk08IN9tLe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZBhjZA9pc8hvUk08IN9tLe
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 333624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333624&o=json
            external_identifier: CBDB:333624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LJZvEdY7pT87YV6vtHGzP5
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_6kZnL1K3eIg1F3HFGiZoll
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vx2kDRfEE97Vw8nM1qYXxC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OC_mSvr5ZG_TCAiYnDkn1S
          claim_id: c_6kZnL1K3eIg1F3HFGiZoll
          source_id: s_bwMP_8T_1nsWY_0-GaiGR2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bwMP_8T_1nsWY_0-GaiGR2
            source_type: api_record
            title: 中国历代人物传记资料库：王紈（CBDB 333627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json
            external_identifier: CBDB:333627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vx2kDRfEE97Vw8nM1qYXxC
        status: active
        display_name: 王紈
        merged_into_person_id: null
    - claim:
        id: c_SMHUHBiCEEtP-JnMfmJud0
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Xp9Q5oCad9JcZJepjgLUib
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_adenCmaIoOWGEYlopYVuyX
          claim_id: c_SMHUHBiCEEtP-JnMfmJud0
          source_id: s_7KHAS95yeIc8od4HTAmC8K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7KHAS95yeIc8od4HTAmC8K
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 333622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333622&o=json
            external_identifier: CBDB:333622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xp9Q5oCad9JcZJepjgLUib
        status: active
        display_name: 王緝
        merged_into_person_id: null
    - claim:
        id: c_Qsgfm_VglVrC-j1anXouBa
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dFCaAHJ3Wh6A5sABwRVHDY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rGFrGc46eUwueYZHlW8X_k
          claim_id: c_Qsgfm_VglVrC-j1anXouBa
          source_id: s_1kgDU93YjLPUMX2yej406p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1kgDU93YjLPUMX2yej406p
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 333630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333630&o=json
            external_identifier: CBDB:333630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dFCaAHJ3Wh6A5sABwRVHDY
        status: active
        display_name: 王綰
        merged_into_person_id: null
    - claim:
        id: c_PUYz65W1smIl7_PPSXWavD
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eM6qByj6T8ij6umXWEwH93
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BBFlavPtyLwfaVdEzQVt5H
          claim_id: c_PUYz65W1smIl7_PPSXWavD
          source_id: s_5EOUFk2w73vg9Wx-yBIf9i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5EOUFk2w73vg9Wx-yBIf9i
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 333628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333628&o=json
            external_identifier: CBDB:333628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eM6qByj6T8ij6umXWEwH93
        status: active
        display_name: 王維
        merged_into_person_id: null
    - claim:
        id: c_3-5Y_rmhbDktjWApkUGjVm
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hKETKBqQaqzSN84bAyEYVA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jogDkatx_-qxWafOUWotjn
          claim_id: c_3-5Y_rmhbDktjWApkUGjVm
          source_id: s_mFibrdp4f6QRVFqMk2lZdL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mFibrdp4f6QRVFqMk2lZdL
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 333623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333623&o=json
            external_identifier: CBDB:333623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hKETKBqQaqzSN84bAyEYVA
        status: active
        display_name: 王組
        merged_into_person_id: null
---

# 王周紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王周紹（生于1536年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任通判。（中国历代人物传记资料库 CBDB 205463） | accepted |
| birth.date | 1536年 | accepted |
| name.primary | 王周紹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U6zX3wnxTCMh3nEUMpMz4g | 王一貫 | accepted |
| ancestors | p_5SfzfiN7TmF5uEpCHo93w9 | 王世芳 | accepted |
| ancestors | p_weV7whz3ANfDFG4xKLwQe2 | 王悌 | accepted |
| other | p_C4Wb4Gbgs9Dw4h9zXjiS69 | 王繢 | accepted |
| other | p_EpwRMB1qrN42kqWjR78hMV | 王約 | accepted |
| other | p_EwCuh8FCLcMfe1885hDnr6 | 王綬 | accepted |
| other | p_LJZvEdY7pT87YV6vtHGzP5 | 王純 | accepted |
| other | p_Vx2kDRfEE97Vw8nM1qYXxC | 王紈 | accepted |
| other | p_Xp9Q5oCad9JcZJepjgLUib | 王緝 | accepted |
| other | p_dFCaAHJ3Wh6A5sABwRVHDY | 王綰 | accepted |
| other | p_eM6qByj6T8ij6umXWEwH93 | 王維 | accepted |
| other | p_hKETKBqQaqzSN84bAyEYVA | 王組 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 333624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333624&o=json)
- [中国历代人物传记资料库：王繢（CBDB 333629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333629&o=json)
- [中国历代人物传记资料库：王緝（CBDB 333622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333622&o=json)
- [中国历代人物传记资料库：王世芳（CBDB 333617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333617&o=json)
- [中国历代人物传记资料库：王綬（CBDB 333626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json)
- [中国历代人物传记资料库：王悌（CBDB 333616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333616&o=json)
- [中国历代人物传记资料库：王紈（CBDB 333627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json)
- [中国历代人物传记资料库：王綰（CBDB 333630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333630&o=json)
- [中国历代人物传记资料库：王維（CBDB 333628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333628&o=json)
- [中国历代人物传记资料库：王一貫（CBDB 333618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json)
- [中国历代人物传记资料库：王約（CBDB 333625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333625&o=json)
- [中国历代人物传记资料库：王周紹（CBDB 205463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205463&o=json)
- [中国历代人物传记资料库：王組（CBDB 333623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333623&o=json)
