---
schema: wang-person/v1
id: p_fvtdZEELHENMPdwBvRdppk
status: active
merged_into: null
display_name: 王維城
revision: 23
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gxksjq7y2QrzjoAesF5G6U
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XbQMhLNp83qyDHTsx3ESDL
          claim_id: c_Gxksjq7y2QrzjoAesF5G6U
          source_id: s_tt5HKJ24AGnwXomJ86mD6Y
          stance: supports
          locator: CBDB:235969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235969）
          source: &a1
            id: s_tt5HKJ24AGnwXomJ86mD6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王維城（CBDB 235969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235969&o=json
            external_identifier: CBDB:235969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UuX6BPXkqYkxB8Qq57G56e
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城，明人物。籍贯江陰，曾任通判。（中国历代人物传记资料库 CBDB 235969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UuxDf72Zlxyw9_seOk3m5a
          claim_id: c_UuX6BPXkqYkxB8Qq57G56e
          source_id: s_tt5HKJ24AGnwXomJ86mD6Y
          stance: supports
          locator: CBDB:235969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1Mi6mgocFTPrXaobP1aSJ8
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ui6iUObE0K3SqPeykkXXgB
          claim_id: c_1Mi6mgocFTPrXaobP1aSJ8
          source_id: s_tt5HKJ24AGnwXomJ86mD6Y
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
    - claim:
        id: c_Z0-Ioinquvznob3HXm2Abm
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_75A8chXPCcEzRmRmdzEV8k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Z9JJFBerMjKJwnOZxt-WS
          claim_id: c_Z0-Ioinquvznob3HXm2Abm
          source_id: s_wz2bth62doP9AE77iHwfbD
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲文 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲文 之父／母。
          source:
            id: s_wz2bth62doP9AE77iHwfbD
            source_type: api_record
            title: 中国历代人物传记资料库：王憲文（CBDB 235990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235990&o=json
            external_identifier: CBDB:235990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_75A8chXPCcEzRmRmdzEV8k
        status: active
        display_name: 王憲文
        merged_into_person_id: null
    - claim:
        id: c_5iYd1ZbuFBPLOoroANWRKF
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ML7eWKKE1dKR3KNGDrXGi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXqQQ5CLq9Ki5ZwK31fHGh
          claim_id: c_5iYd1ZbuFBPLOoroANWRKF
          source_id: s_V0lCfmPkdAOWKidJFbuLFs
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王朋臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王朋臣 之父／母。
          source:
            id: s_V0lCfmPkdAOWKidJFbuLFs
            source_type: api_record
            title: 中国历代人物传记资料库：王朋臣（CBDB 235994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235994&o=json
            external_identifier: CBDB:235994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8ML7eWKKE1dKR3KNGDrXGi
        status: active
        display_name: 王朋臣
        merged_into_person_id: null
    - claim:
        id: c_xPObkFl0KhxYh_Qu9mFYng
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F8AaKsMPDv95sczjmVffH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S3NS5sZK52n9127JD5W6kO
          claim_id: c_xPObkFl0KhxYh_Qu9mFYng
          source_id: s_lAHBRvvhFVLY4v4Flf_D9z
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲儉 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲儉 之父／母。
          source:
            id: s_lAHBRvvhFVLY4v4Flf_D9z
            source_type: api_record
            title: 中国历代人物传记资料库：王憲儉（CBDB 235991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235991&o=json
            external_identifier: CBDB:235991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F8AaKsMPDv95sczjmVffH9
        status: active
        display_name: 王憲儉
        merged_into_person_id: null
    - claim:
        id: c_mUAqpFT9eLSzCUQCkppEzI
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KfsdHyjZzPUqcLs7YiZMqC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ogESG4qsYUeT9FP6kwTPxi
          claim_id: c_mUAqpFT9eLSzCUQCkppEzI
          source_id: s_4k9f6e9Gq5p0NdMu7BfKZL
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲申 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲申 之父／母。
          source:
            id: s_4k9f6e9Gq5p0NdMu7BfKZL
            source_type: api_record
            title: 中国历代人物传记资料库：王憲申（CBDB 235984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235984&o=json
            external_identifier: CBDB:235984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KfsdHyjZzPUqcLs7YiZMqC
        status: active
        display_name: 王憲申
        merged_into_person_id: null
    - claim:
        id: c_vCGYpgMYlZF4xsh0XP6WvF
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MFpCwo9vLvAh4zn47ekXmF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9AC5yq8wTZH5swEJvKC6wB
          claim_id: c_vCGYpgMYlZF4xsh0XP6WvF
          source_id: s_cRHK15aaj_JFH21aOrYMkD
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王輔臣 之父／母。
          source:
            id: s_cRHK15aaj_JFH21aOrYMkD
            source_type: api_record
            title: 中国历代人物传记资料库：王輔臣（CBDB 235976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json
            external_identifier: CBDB:235976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MFpCwo9vLvAh4zn47ekXmF
        status: active
        display_name: 王輔臣
        merged_into_person_id: null
    - claim:
        id: c_pw74RG2pRDKo0DuCYvHUU-
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NU3XbPz5DybwCcJq6wh8m6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1F801H-BztatjNNlCN2vLZ
          claim_id: c_pw74RG2pRDKo0DuCYvHUU-
          source_id: s_q96fcyHOAanqVoH67AEZLq
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲曾 与 王良臣 为同胞（CBDB 记「弟」），王良臣 之父／母即 王憲曾 之父／母。
          source:
            id: s_q96fcyHOAanqVoH67AEZLq
            source_type: api_record
            title: 中国历代人物传记资料库：王憲曾（CBDB 235973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235973&o=json
            external_identifier: CBDB:235973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NU3XbPz5DybwCcJq6wh8m6
        status: active
        display_name: 王憲曾
        merged_into_person_id: null
    - claim:
        id: c_HIeuwjCRSnutcRmAMfky9Y
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qor8K88oXzG2Mu1FoZbo5Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZRPwUV-3ErALoFTL3UJQE
          claim_id: c_HIeuwjCRSnutcRmAMfky9Y
          source_id: s_pSLX77MS5U7PsTNffUKG4P
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲祚 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲祚 之父／母。
          source:
            id: s_pSLX77MS5U7PsTNffUKG4P
            source_type: api_record
            title: 中国历代人物传记资料库：王憲祚（CBDB 235979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235979&o=json
            external_identifier: CBDB:235979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qor8K88oXzG2Mu1FoZbo5Q
        status: active
        display_name: 王憲祚
        merged_into_person_id: null
    - claim:
        id: c_dUiplHy9f_BQEb7lp9r2vH
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RAJn192m2ZFeY7uaA2zS34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_56wQYfKrtG0mhPsX1Zug6K
          claim_id: c_dUiplHy9f_BQEb7lp9r2vH
          source_id: s_A3CGG16qxZHTL23AwbIAc8
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲彥 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲彥 之父／母。
          source:
            id: s_A3CGG16qxZHTL23AwbIAc8
            source_type: api_record
            title: 中国历代人物传记资料库：王憲彥（CBDB 235989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235989&o=json
            external_identifier: CBDB:235989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RAJn192m2ZFeY7uaA2zS34
        status: active
        display_name: 王憲彥
        merged_into_person_id: null
    - claim:
        id: c_y-GP82_BmrW1w0pYZrdmeb
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RmnBwidGasQcN5gwDKjwDg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sW6IST52gZfjmANE9339-I
          claim_id: c_y-GP82_BmrW1w0pYZrdmeb
          source_id: s_zSyWJXnmQjrk9BPY6jy9-W
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王傳臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王傳臣 之父／母。
          source:
            id: s_zSyWJXnmQjrk9BPY6jy9-W
            source_type: api_record
            title: 中国历代人物传记资料库：王傳臣（CBDB 235985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235985&o=json
            external_identifier: CBDB:235985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RmnBwidGasQcN5gwDKjwDg
        status: active
        display_name: 王傳臣
        merged_into_person_id: null
    - claim:
        id: c_ey3fNFHbdG-MymWXTugad8
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9NBdDHU6BL46cJDUM9V37
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTBpnWtsYGXRZfWYwuMaPn
          claim_id: c_ey3fNFHbdG-MymWXTugad8
          source_id: s_01L_zQYx3VQ3eTXTQBWIqx
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王重臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王重臣 之父／母。
          source:
            id: s_01L_zQYx3VQ3eTXTQBWIqx
            source_type: api_record
            title: 中国历代人物传记资料库：王重臣（CBDB 235978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235978&o=json
            external_identifier: CBDB:235978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U9NBdDHU6BL46cJDUM9V37
        status: active
        display_name: 王重臣
        merged_into_person_id: null
    - claim:
        id: c_cbKllJOffaUYRM8Q5exbXv
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UAmpr69dPGf7GW8GVYTezF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kqMDZMMOEZn_Q9Cg-4wT7Z
          claim_id: c_cbKllJOffaUYRM8Q5exbXv
          source_id: s_CdRnM4xBSlblFIG0tTI0BB
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王師臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王師臣 之父／母。
          source:
            id: s_CdRnM4xBSlblFIG0tTI0BB
            source_type: api_record
            title: 中国历代人物传记资料库：王師臣（CBDB 235993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235993&o=json
            external_identifier: CBDB:235993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UAmpr69dPGf7GW8GVYTezF
        status: active
        display_name: 王師臣
        merged_into_person_id: null
    - claim:
        id: c_61B4ehaOLqEvOJlFk_1-8H
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VzPQdqg74cL2wJQ6u3iSUn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dzOKA_6z1DwGGeXQDvgp7W
          claim_id: c_61B4ehaOLqEvOJlFk_1-8H
          source_id: s_X0UIUNIdmhhvq45hk5OxB-
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王啟臣 之父／母。
          source:
            id: s_X0UIUNIdmhhvq45hk5OxB-
            source_type: api_record
            title: 中国历代人物传记资料库：王啟臣（CBDB 235987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235987&o=json
            external_identifier: CBDB:235987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VzPQdqg74cL2wJQ6u3iSUn
        status: active
        display_name: 王啟臣
        merged_into_person_id: null
    - claim:
        id: c_upzcq0jnrw8YKHFl905VJX
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y4944Wa9Bi6a2vE3jxbzV9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBAGNFljsCFe5f2vTM85V2
          claim_id: c_upzcq0jnrw8YKHFl905VJX
          source_id: s_qsij7J78QSGYF_6Tyak5hv
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲羲 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲羲 之父／母。
          source:
            id: s_qsij7J78QSGYF_6Tyak5hv
            source_type: api_record
            title: 中国历代人物传记资料库：王憲羲（CBDB 235977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235977&o=json
            external_identifier: CBDB:235977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4944Wa9Bi6a2vE3jxbzV9
        status: active
        display_name: 王憲羲
        merged_into_person_id: null
    - claim:
        id: c_8f9yCCSCgH8zAFnZB7NHw6
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dqmEghqiiEQ92yHeRUQXnZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zfscJnOZ7KXMeRX9LKBu2-
          claim_id: c_8f9yCCSCgH8zAFnZB7NHw6
          source_id: s_KwDCPjOqjilmI_4ODmds5G
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲恭 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲恭 之父／母。
          source:
            id: s_KwDCPjOqjilmI_4ODmds5G
            source_type: api_record
            title: 中国历代人物传记资料库：王憲恭（CBDB 235988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235988&o=json
            external_identifier: CBDB:235988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dqmEghqiiEQ92yHeRUQXnZ
        status: active
        display_name: 王憲恭
        merged_into_person_id: null
    - claim:
        id: c_4aAck-obUO7POp3Wd7AfhS
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fEZa7v54y69YHBjNkCQxKB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmPNyx7Gg8ahYD5Lm-T8XM
          claim_id: c_4aAck-obUO7POp3Wd7AfhS
          source_id: s_JbCqNK5cWQsQg367STqS1o
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王慶臣 之父／母。
          source:
            id: s_JbCqNK5cWQsQg367STqS1o
            source_type: api_record
            title: 中国历代人物传记资料库：王慶臣（CBDB 235980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235980&o=json
            external_identifier: CBDB:235980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fEZa7v54y69YHBjNkCQxKB
        status: active
        display_name: 王慶臣
        merged_into_person_id: null
    - claim:
        id: c_0-YFC6jUA5nvQOd2Ti3fmd
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gbkhwWxPr92cXik91AZdGx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UZyP9YRpn41PcSjw8ecJMe
          claim_id: c_0-YFC6jUA5nvQOd2Ti3fmd
          source_id: s_q68NgQs0sYah65CijKOxBV
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲明 与 王良臣 为同胞（CBDB 记「弟」），王良臣 之父／母即 王憲明 之父／母。
          source:
            id: s_q68NgQs0sYah65CijKOxBV
            source_type: api_record
            title: 中国历代人物传记资料库：王憲明（CBDB 235972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235972&o=json
            external_identifier: CBDB:235972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gbkhwWxPr92cXik91AZdGx
        status: active
        display_name: 王憲明
        merged_into_person_id: null
    - claim:
        id: c_3PUFZ5B9WrEgrMaO1IcgmE
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oxmCnE57DPN7gbJasE6ug2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXc4-EJsEHKV3W0-Mh4NIc
          claim_id: c_3PUFZ5B9WrEgrMaO1IcgmE
          source_id: s_FrbS7m233bYBRuXcTqiRQG
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王哲臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王哲臣 之父／母。
          source:
            id: s_FrbS7m233bYBRuXcTqiRQG
            source_type: api_record
            title: 中国历代人物传记资料库：王哲臣（CBDB 235982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235982&o=json
            external_identifier: CBDB:235982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oxmCnE57DPN7gbJasE6ug2
        status: active
        display_name: 王哲臣
        merged_into_person_id: null
    - claim:
        id: c_f3Izj1kit5gRl8XG6Jenkj
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pQd4AMt5sB2K9aFQabekCb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QrRUGiWZf9GH8fmKpemg8b
          claim_id: c_f3Izj1kit5gRl8XG6Jenkj
          source_id: s_lBqUodq8ii6AaxlGH7qXsP
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲臣 与 王良臣 为同胞（CBDB 记「弟」），王良臣 之父／母即 王憲臣 之父／母。
          source:
            id: s_lBqUodq8ii6AaxlGH7qXsP
            source_type: api_record
            title: 中国历代人物传记资料库：王憲臣（CBDB 235974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235974&o=json
            external_identifier: CBDB:235974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pQd4AMt5sB2K9aFQabekCb
        status: active
        display_name: 王憲臣
        merged_into_person_id: null
    - claim:
        id: c_ebQxdKTry-f2rlPuFp5DFj
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qX78p9t4tHurvVtsLaoUhu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sZBdTEb184MSV-JRyQZdwS
          claim_id: c_ebQxdKTry-f2rlPuFp5DFj
          source_id: s_fOVGon_GAq7ORB58k-o7VR
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲且 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲且 之父／母。
          source:
            id: s_fOVGon_GAq7ORB58k-o7VR
            source_type: api_record
            title: 中国历代人物传记资料库：王憲且（CBDB 235981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235981&o=json
            external_identifier: CBDB:235981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qX78p9t4tHurvVtsLaoUhu
        status: active
        display_name: 王憲且
        merged_into_person_id: null
    - claim:
        id: c_BoctQiiEjFoe0ye_dAJXxj
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_voHpA8GisKqT6bhA1i6mvV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_de7rAa78vhHjb89V0H3rFY
          claim_id: c_BoctQiiEjFoe0ye_dAJXxj
          source_id: s_GCmIdEvlndxOG2IyOioEPB
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲宸 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲宸 之父／母。
          source:
            id: s_GCmIdEvlndxOG2IyOioEPB
            source_type: api_record
            title: 中国历代人物传记资料库：王憲宸（CBDB 235992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235992&o=json
            external_identifier: CBDB:235992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_voHpA8GisKqT6bhA1i6mvV
        status: active
        display_name: 王憲宸
        merged_into_person_id: null
    - claim:
        id: c_uTRFR1rpuWfMnQuchpNdmH
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y5DJER5NxHFVKLNzY3Vvwv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPkt6299mjMFsz9NyE1X8N
          claim_id: c_uTRFR1rpuWfMnQuchpNdmH
          source_id: s_HuL9f_X1W-JaS0vzCcTM5b
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲覽 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲覽 之父／母。
          source:
            id: s_HuL9f_X1W-JaS0vzCcTM5b
            source_type: api_record
            title: 中国历代人物传记资料库：王憲覽（CBDB 235983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235983&o=json
            external_identifier: CBDB:235983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y5DJER5NxHFVKLNzY3Vvwv
        status: active
        display_name: 王憲覽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維城 | accepted |
| bio.summary | 王維城，明人物。籍贯江陰，曾任通判。（中国历代人物传记资料库 CBDB 235969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |
| children | p_75A8chXPCcEzRmRmdzEV8k | 王憲文 | accepted |
| children | p_8ML7eWKKE1dKR3KNGDrXGi | 王朋臣 | accepted |
| children | p_F8AaKsMPDv95sczjmVffH9 | 王憲儉 | accepted |
| children | p_KfsdHyjZzPUqcLs7YiZMqC | 王憲申 | accepted |
| children | p_MFpCwo9vLvAh4zn47ekXmF | 王輔臣 | accepted |
| children | p_NU3XbPz5DybwCcJq6wh8m6 | 王憲曾 | accepted |
| children | p_Qor8K88oXzG2Mu1FoZbo5Q | 王憲祚 | accepted |
| children | p_RAJn192m2ZFeY7uaA2zS34 | 王憲彥 | accepted |
| children | p_RmnBwidGasQcN5gwDKjwDg | 王傳臣 | accepted |
| children | p_U9NBdDHU6BL46cJDUM9V37 | 王重臣 | accepted |
| children | p_UAmpr69dPGf7GW8GVYTezF | 王師臣 | accepted |
| children | p_VzPQdqg74cL2wJQ6u3iSUn | 王啟臣 | accepted |
| children | p_Y4944Wa9Bi6a2vE3jxbzV9 | 王憲羲 | accepted |
| children | p_dqmEghqiiEQ92yHeRUQXnZ | 王憲恭 | accepted |
| children | p_fEZa7v54y69YHBjNkCQxKB | 王慶臣 | accepted |
| children | p_gbkhwWxPr92cXik91AZdGx | 王憲明 | accepted |
| children | p_oxmCnE57DPN7gbJasE6ug2 | 王哲臣 | accepted |
| children | p_pQd4AMt5sB2K9aFQabekCb | 王憲臣 | accepted |
| children | p_qX78p9t4tHurvVtsLaoUhu | 王憲且 | accepted |
| children | p_voHpA8GisKqT6bhA1i6mvV | 王憲宸 | accepted |
| children | p_y5DJER5NxHFVKLNzY3Vvwv | 王憲覽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳臣（CBDB 235985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235985&o=json)
- [中国历代人物传记资料库：王輔臣（CBDB 235976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json)
- [中国历代人物传记资料库：王朋臣（CBDB 235994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235994&o=json)
- [中国历代人物传记资料库：王啟臣（CBDB 235987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235987&o=json)
- [中国历代人物传记资料库：王慶臣（CBDB 235980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235980&o=json)
- [中国历代人物传记资料库：王師臣（CBDB 235993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235993&o=json)
- [中国历代人物传记资料库：王維城（CBDB 235969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235969&o=json)
- [中国历代人物传记资料库：王憲曾（CBDB 235973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235973&o=json)
- [中国历代人物传记资料库：王憲臣（CBDB 235974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235974&o=json)
- [中国历代人物传记资料库：王憲宸（CBDB 235992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235992&o=json)
- [中国历代人物传记资料库：王憲恭（CBDB 235988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235988&o=json)
- [中国历代人物传记资料库：王憲儉（CBDB 235991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235991&o=json)
- [中国历代人物传记资料库：王憲覽（CBDB 235983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235983&o=json)
- [中国历代人物传记资料库：王憲明（CBDB 235972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235972&o=json)
- [中国历代人物传记资料库：王憲且（CBDB 235981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235981&o=json)
- [中国历代人物传记资料库：王憲申（CBDB 235984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235984&o=json)
- [中国历代人物传记资料库：王憲文（CBDB 235990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235990&o=json)
- [中国历代人物传记资料库：王憲羲（CBDB 235977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235977&o=json)
- [中国历代人物传记资料库：王憲彥（CBDB 235989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235989&o=json)
- [中国历代人物传记资料库：王憲祚（CBDB 235979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235979&o=json)
- [中国历代人物传记资料库：王哲臣（CBDB 235982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235982&o=json)
- [中国历代人物传记资料库：王重臣（CBDB 235978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235978&o=json)
