---
schema: wang-person/v1
id: p_fVwHvivQzDYcoN8uZB1uwy
status: active
merged_into: null
display_name: 王良臣
revision: 27
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XyKT7XrQf99vNSnJ7jqv5B
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aH9JAf9w7N8FrnFCt6GuP6
          claim_id: c_XyKT7XrQf99vNSnJ7jqv5B
          source_id: s_i5FYxNcHwKfsukv1mchys6
          stance: supports
          locator: CBDB:207791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207791）
          source: &a1
            id: s_i5FYxNcHwKfsukv1mchys6
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 207791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207791&o=json
            external_identifier: CBDB:207791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ks3ip2PSj1PWt11E7Dz4L1
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1584年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLXhwrne7foG1nPbAie8nm
          claim_id: c_Ks3ip2PSj1PWt11E7Dz4L1
          source_id: s_i5FYxNcHwKfsukv1mchys6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ybzN7bLS7EqftTnN2tXJGn
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣（生于1584年），明人物。明清進士進士，籍贯江陰，入仕進士，曾任府教授。（中国历代人物传记资料库 CBDB 207791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z3Zo3dhoIQfke9YXI6L69g
          claim_id: c_ybzN7bLS7EqftTnN2tXJGn
          source_id: s_i5FYxNcHwKfsukv1mchys6
          stance: supports
          locator: CBDB:207791
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_fvtdZEELHENMPdwBvRdppk
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children:
    - claim:
        id: c_x-niWZk_UspXGeJn-cuBx0
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3oct87FbnEp6SgQ2qLz7K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u70dnoo9U7YWfeUwHepX6x
          claim_id: c_x-niWZk_UspXGeJn-cuBx0
          source_id: s_C2T1JNSfJ9pELrtfop4BiL
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C2T1JNSfJ9pELrtfop4BiL
            source_type: api_record
            title: 中国历代人物传记资料库：王應昌（CBDB 235996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235996&o=json
            external_identifier: CBDB:235996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3oct87FbnEp6SgQ2qLz7K
        status: active
        display_name: 王應昌
        merged_into_person_id: null
    - claim:
        id: c_KUdg0Xw_V0R-33fUlw9Kt4
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gyrfVFz2KyGRDjmr6YwtSE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8C-DOR71o8QZbBAu39IeS
          claim_id: c_KUdg0Xw_V0R-33fUlw9Kt4
          source_id: s_1uQ6RWAMZA7eMysDwjz5aC
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1uQ6RWAMZA7eMysDwjz5aC
            source_type: api_record
            title: 中国历代人物传记资料库：王運昌（CBDB 235995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235995&o=json
            external_identifier: CBDB:235995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gyrfVFz2KyGRDjmr6YwtSE
        status: active
        display_name: 王運昌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_inLu7lkYASlr799dEqp8ez
        subject_person_id: p_77iaWpWMwfPvQUKF6BCdCD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5V5q53MBXYmlbqn8sTAqK
          claim_id: c_inLu7lkYASlr799dEqp8ez
          source_id: s_qWX5r24qndG9FnWgqMNgTP
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qWX5r24qndG9FnWgqMNgTP
            source_type: api_record
            title: 中国历代人物传记资料库：王魯（CBDB 235967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235967&o=json
            external_identifier: CBDB:235967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_77iaWpWMwfPvQUKF6BCdCD
        status: active
        display_name: 王魯
        merged_into_person_id: null
    - claim:
        id: c_jv4Av7orUItFpZiAObR3gW
        subject_person_id: p_E8R8PCXPkP9eN4uAPUmfkY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e9ZscdiwNVZ4PL6Xg7RFi6
          claim_id: c_jv4Av7orUItFpZiAObR3gW
          source_id: s_C9cLmmQjXiVzCxgPjKe73o
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C9cLmmQjXiVzCxgPjKe73o
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 235968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235968&o=json
            external_identifier: CBDB:235968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E8R8PCXPkP9eN4uAPUmfkY
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_M6j_4-1AZdHYk1rvBH8daO
        subject_person_id: p_75A8chXPCcEzRmRmdzEV8k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdwwKpXwXpQmGfj2flHQEy
          claim_id: c_M6j_4-1AZdHYk1rvBH8daO
          source_id: s_wz2bth62doP9AE77iHwfbD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_t8drGTSeF1G_1CH7lpuh7X
        subject_person_id: p_8ML7eWKKE1dKR3KNGDrXGi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ykfkblhXZbzY_-tqkyqFN
          claim_id: c_t8drGTSeF1G_1CH7lpuh7X
          source_id: s_V0lCfmPkdAOWKidJFbuLFs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_p878U_S7viYOO90uNXgbQx
        subject_person_id: p_F8AaKsMPDv95sczjmVffH9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKhHfY_YQJgRL5byQpCij8
          claim_id: c_p878U_S7viYOO90uNXgbQx
          source_id: s_lAHBRvvhFVLY4v4Flf_D9z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_nEH2AjXRex8sKELTl-Ui2D
        subject_person_id: p_KfsdHyjZzPUqcLs7YiZMqC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHZF7LhWu9CN6nYWGST3Vn
          claim_id: c_nEH2AjXRex8sKELTl-Ui2D
          source_id: s_4k9f6e9Gq5p0NdMu7BfKZL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_T8QYOfH-Z7cmHRRGPJvb7F
        subject_person_id: p_MFpCwo9vLvAh4zn47ekXmF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVHArZ5J6eVx7iUV7ybDNl
          claim_id: c_T8QYOfH-Z7cmHRRGPJvb7F
          source_id: s_cRHK15aaj_JFH21aOrYMkD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_55lerl9CTYTeESPOAA81wv
        subject_person_id: p_NU3XbPz5DybwCcJq6wh8m6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_upUDL8QQkohppahC_Ox0W5
          claim_id: c_55lerl9CTYTeESPOAA81wv
          source_id: s_q96fcyHOAanqVoH67AEZLq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_qFYj5DyiLhnyqyoSs_EXk1
        subject_person_id: p_Qor8K88oXzG2Mu1FoZbo5Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjX-N3BkdlMMUqJjMMCAvi
          claim_id: c_qFYj5DyiLhnyqyoSs_EXk1
          source_id: s_pSLX77MS5U7PsTNffUKG4P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_wpaWYzryRHDXgte9bvvm94
        subject_person_id: p_RAJn192m2ZFeY7uaA2zS34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S8qdJKPMJPyO9-797TKR4n
          claim_id: c_wpaWYzryRHDXgte9bvvm94
          source_id: s_A3CGG16qxZHTL23AwbIAc8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_fHHbAgQbomkEVRvK1dEwwG
        subject_person_id: p_RmnBwidGasQcN5gwDKjwDg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lLFdNMHqpGOWeGGYg0pMOJ
          claim_id: c_fHHbAgQbomkEVRvK1dEwwG
          source_id: s_zSyWJXnmQjrk9BPY6jy9-W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_BlhEV2F8U1WzKcvh_B67P1
        subject_person_id: p_U9NBdDHU6BL46cJDUM9V37
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_joGH9fCSG_N8QXp7kF5JKN
          claim_id: c_BlhEV2F8U1WzKcvh_B67P1
          source_id: s_01L_zQYx3VQ3eTXTQBWIqx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_rmTDhhH0fj8m6f4Zfhp5y8
        subject_person_id: p_UAmpr69dPGf7GW8GVYTezF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qpigy3xBx9G_0bOUGvJ9gz
          claim_id: c_rmTDhhH0fj8m6f4Zfhp5y8
          source_id: s_CdRnM4xBSlblFIG0tTI0BB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_u9F5b-1ReRfpN2-jJoGI5N
        subject_person_id: p_VzPQdqg74cL2wJQ6u3iSUn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F_4CAUnY3NBi7USB943rt2
          claim_id: c_u9F5b-1ReRfpN2-jJoGI5N
          source_id: s_X0UIUNIdmhhvq45hk5OxB-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_L3Oe0RCJv0Ac86NND9toql
        subject_person_id: p_Y4944Wa9Bi6a2vE3jxbzV9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ElqbhvQt_yeQoY9zKoBYhL
          claim_id: c_L3Oe0RCJv0Ac86NND9toql
          source_id: s_qsij7J78QSGYF_6Tyak5hv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ufk-fF2R3A0yhgU5_BwCTm
        subject_person_id: p_dqmEghqiiEQ92yHeRUQXnZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7H3F6vX0Cdt-MmTvZoOvg
          claim_id: c_ufk-fF2R3A0yhgU5_BwCTm
          source_id: s_KwDCPjOqjilmI_4ODmds5G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_FaTt3x3KzAYHp5R5B6HTXs
        subject_person_id: p_fEZa7v54y69YHBjNkCQxKB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xl3MziyTabim9K61vMxXAl
          claim_id: c_FaTt3x3KzAYHp5R5B6HTXs
          source_id: s_JbCqNK5cWQsQg367STqS1o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jzj7gv1V3yC13HphOLtuwl
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gbkhwWxPr92cXik91AZdGx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4T-A5qtqJkJfI_tVPP2Ki
          claim_id: c_jzj7gv1V3yC13HphOLtuwl
          source_id: s_q68NgQs0sYah65CijKOxBV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_1et-OUipdqe1LD7uUAvxkd
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oxmCnE57DPN7gbJasE6ug2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cv74n5VgMY_SrLzm_4SacF
          claim_id: c_1et-OUipdqe1LD7uUAvxkd
          source_id: s_FrbS7m233bYBRuXcTqiRQG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4U9MxCn6t3IyrMVvT3bw6D
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pQd4AMt5sB2K9aFQabekCb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mJ3ijDfDGTUdnPOr6jGJgG
          claim_id: c_4U9MxCn6t3IyrMVvT3bw6D
          source_id: s_lBqUodq8ii6AaxlGH7qXsP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_CSfJz3QB_KOXsHh4OM0tKj
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qX78p9t4tHurvVtsLaoUhu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0rASxaZ0xggzL13Du_wl7
          claim_id: c_CSfJz3QB_KOXsHh4OM0tKj
          source_id: s_fOVGon_GAq7ORB58k-o7VR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_tS-nfM1Fs02p3yAXZxjSS0
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_voHpA8GisKqT6bhA1i6mvV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Y6BUAu4YVqT_LMSvqDshK
          claim_id: c_tS-nfM1Fs02p3yAXZxjSS0
          source_id: s_GCmIdEvlndxOG2IyOioEPB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_o0XHc0XWk155Tauh6eXxnH
        subject_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y5DJER5NxHFVKLNzY3Vvwv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFW2kRvlFSYjgFVXHpm1lR
          claim_id: c_o0XHc0XWk155Tauh6eXxnH
          source_id: s_HuL9f_X1W-JaS0vzCcTM5b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| birth.date | 1584年 | accepted |
| bio.summary | 王良臣（生于1584年），明人物。明清進士進士，籍贯江陰，入仕進士，曾任府教授。（中国历代人物传记资料库 CBDB 207791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| children | p_A3oct87FbnEp6SgQ2qLz7K | 王應昌 | accepted |
| children | p_gyrfVFz2KyGRDjmr6YwtSE | 王運昌 | accepted |
| ancestors | p_77iaWpWMwfPvQUKF6BCdCD | 王魯 | accepted |
| ancestors | p_E8R8PCXPkP9eN4uAPUmfkY | 王嘉言 | accepted |
| other | p_75A8chXPCcEzRmRmdzEV8k | 王憲文 | accepted |
| other | p_8ML7eWKKE1dKR3KNGDrXGi | 王朋臣 | accepted |
| other | p_F8AaKsMPDv95sczjmVffH9 | 王憲儉 | accepted |
| other | p_KfsdHyjZzPUqcLs7YiZMqC | 王憲申 | accepted |
| other | p_MFpCwo9vLvAh4zn47ekXmF | 王輔臣 | accepted |
| other | p_NU3XbPz5DybwCcJq6wh8m6 | 王憲曾 | accepted |
| other | p_Qor8K88oXzG2Mu1FoZbo5Q | 王憲祚 | accepted |
| other | p_RAJn192m2ZFeY7uaA2zS34 | 王憲彥 | accepted |
| other | p_RmnBwidGasQcN5gwDKjwDg | 王傳臣 | accepted |
| other | p_U9NBdDHU6BL46cJDUM9V37 | 王重臣 | accepted |
| other | p_UAmpr69dPGf7GW8GVYTezF | 王師臣 | accepted |
| other | p_VzPQdqg74cL2wJQ6u3iSUn | 王啟臣 | accepted |
| other | p_Y4944Wa9Bi6a2vE3jxbzV9 | 王憲羲 | accepted |
| other | p_dqmEghqiiEQ92yHeRUQXnZ | 王憲恭 | accepted |
| other | p_fEZa7v54y69YHBjNkCQxKB | 王慶臣 | accepted |
| other | p_gbkhwWxPr92cXik91AZdGx | 王憲明 | accepted |
| other | p_oxmCnE57DPN7gbJasE6ug2 | 王哲臣 | accepted |
| other | p_pQd4AMt5sB2K9aFQabekCb | 王憲臣 | accepted |
| other | p_qX78p9t4tHurvVtsLaoUhu | 王憲且 | accepted |
| other | p_voHpA8GisKqT6bhA1i6mvV | 王憲宸 | accepted |
| other | p_y5DJER5NxHFVKLNzY3Vvwv | 王憲覽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳臣（CBDB 235985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235985&o=json)
- [中国历代人物传记资料库：王輔臣（CBDB 235976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235976&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 235968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235968&o=json)
- [中国历代人物传记资料库：王良臣（CBDB 207791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207791&o=json)
- [中国历代人物传记资料库：王魯（CBDB 235967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235967&o=json)
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
- [中国历代人物传记资料库：王應昌（CBDB 235996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235996&o=json)
- [中国历代人物传记资料库：王運昌（CBDB 235995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235995&o=json)
- [中国历代人物传记资料库：王哲臣（CBDB 235982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235982&o=json)
- [中国历代人物传记资料库：王重臣（CBDB 235978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235978&o=json)
