---
schema: wang-person/v1
id: p_WP2TCGKdqkuWFjHVRTiLcW
status: active
merged_into: null
display_name: 王志堅
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4Cib5z789DdhduN3fPyia
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FnbnJQUsnhNv4HqQ3KazJG
          claim_id: c_X4Cib5z789DdhduN3fPyia
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: CBDB:126537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126537）
          source: &a1
            id: s_xsF6REjiRBUCa2YzLNGC5H
            source_type: api_record
            title: 中国历代人物传记资料库：王志堅（CBDB 126537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126537&o=json
            external_identifier: CBDB:126537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_d45hoanvMVPn7GM1UV8C56
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1576年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HBw268383m6z37UGaCx5WU
          claim_id: c_d45hoanvMVPn7GM1UV8C56
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_15zEHEh2YEnHZPMd4nenFi
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1633年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Q8B55McNZJNiEXt3CdVXB
          claim_id: c_15zEHEh2YEnHZPMd4nenFi
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7Ffs5d74Kou1BvLwCa3Q3
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志堅（1576年—1633年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任兵備道、兵部車駕司主事、郎中。（中国历代人物传记资料库 CBDB 126537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3tvjN05LxBKzC3r8PP_YWB
          claim_id: c_P7Ffs5d74Kou1BvLwCa3Q3
          source_id: s_xsF6REjiRBUCa2YzLNGC5H
          stance: supports
          locator: CBDB:126537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9qOlK6xAhFpkI5w8mgLxTM
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0IkMd5nIfZJPnx5KuJxlL
          claim_id: c_9qOlK6xAhFpkI5w8mgLxTM
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEUVXVMNSjJdG7sCHKLhxA
            source_type: api_record
            title: 中国历代人物传记资料库：王臨亨（CBDB 126852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json
            external_identifier: CBDB:126852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cUEh25oPwuAacU7D2hTAPV
        status: active
        display_name: 王臨亨
        merged_into_person_id: null
  children:
    - claim:
        id: c__2ri04Y6waX5KUitke3vdd
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3DFKdwT8J87L9D41FmCZHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xLMs2hMom3DrCabCTPoTf
          claim_id: c__2ri04Y6waX5KUitke3vdd
          source_id: s_x26kLLVasxKXVf5WC5eTYm
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x26kLLVasxKXVf5WC5eTYm
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 235164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235164&o=json
            external_identifier: CBDB:235164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3DFKdwT8J87L9D41FmCZHV
        status: active
        display_name: 王伸
        merged_into_person_id: null
    - claim:
        id: c_3xUXeQ6PLzb4_pmDUcIAms
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bJeeCisqsDvKkX7VGzVKyc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kzlfgfNtAF-FFVzMHwK808
          claim_id: c_3xUXeQ6PLzb4_pmDUcIAms
          source_id: s_R8NDb4wnBuKU7QsWoXYSSB
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R8NDb4wnBuKU7QsWoXYSSB
            source_type: api_record
            title: 中国历代人物传记资料库：王傚（CBDB 235167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235167&o=json
            external_identifier: CBDB:235167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bJeeCisqsDvKkX7VGzVKyc
        status: active
        display_name: 王傚
        merged_into_person_id: null
    - claim:
        id: c_2Bhp2g2yVLMP2fKP50UTDW
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d5tZbmB7Uvgn31uVyUP59b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKoCH7lw4SGaSJPZRxRhrW
          claim_id: c_2Bhp2g2yVLMP2fKP50UTDW
          source_id: s_AviVNRV3BBMB7eksH4gFjw
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AviVNRV3BBMB7eksH4gFjw
            source_type: api_record
            title: 中国历代人物传记资料库：王偕（CBDB 235166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235166&o=json
            external_identifier: CBDB:235166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d5tZbmB7Uvgn31uVyUP59b
        status: active
        display_name: 王偕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lypfC9fsyDhbdOV1wAfvht
        subject_person_id: p_4JGDXd2PVCbJXStDWXhdLE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqlz4RmN-88jMJD_wxY_q8
          claim_id: c_lypfC9fsyDhbdOV1wAfvht
          source_id: s_jYfXMyb77HqGo4eb96wLP7
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jYfXMyb77HqGo4eb96wLP7
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 235147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235147&o=json
            external_identifier: CBDB:235147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4JGDXd2PVCbJXStDWXhdLE
        status: active
        display_name: 王三錫
        merged_into_person_id: null
    - claim:
        id: c_V1Rdj_DNVVQwW1OyS-nUNx
        subject_person_id: p_kB96uzTXC9U8gv3VfE4GfX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cr_fFTmZoy6KCqeOQ3V433
          claim_id: c_V1Rdj_DNVVQwW1OyS-nUNx
          source_id: s_KWurt4YbwEb1xbZniiTdN9
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KWurt4YbwEb1xbZniiTdN9
            source_type: api_record
            title: 中国历代人物传记资料库：王重鼎（CBDB 235148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235148&o=json
            external_identifier: CBDB:235148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kB96uzTXC9U8gv3VfE4GfX
        status: active
        display_name: 王重鼎
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_E69taKClgzNXLwRHvWlK6h
        subject_person_id: p_4EEgBQWAFUW189KU5BXtAJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XzDLusSjUpqSZAETgcLNvi
          claim_id: c_E69taKClgzNXLwRHvWlK6h
          source_id: s_gfXjnGJ686CrjiHqG9Rf44
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gfXjnGJ686CrjiHqG9Rf44
            source_type: api_record
            title: 中国历代人物传记资料库：王志龍（CBDB 235161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json
            external_identifier: CBDB:235161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4EEgBQWAFUW189KU5BXtAJ
        status: active
        display_name: 王志龍
        merged_into_person_id: null
    - claim:
        id: c_zzKHoCA6XMhqXjcK-U_XfY
        subject_person_id: p_CVfm8QLBPRz6YKLsA5QyLD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NGaH6b5WaS0CgT7tNN7xkC
          claim_id: c_zzKHoCA6XMhqXjcK-U_XfY
          source_id: s_RxEfhC144FlQB0iiWqlo9x
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RxEfhC144FlQB0iiWqlo9x
            source_type: api_record
            title: 中国历代人物传记资料库：王志伊（CBDB 235157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235157&o=json
            external_identifier: CBDB:235157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CVfm8QLBPRz6YKLsA5QyLD
        status: active
        display_name: 王志伊
        merged_into_person_id: null
    - claim:
        id: c_QdyELDKdWB3eOUNQsFb1t3
        subject_person_id: p_KMpUw21MkzdHgcCwnYVS8A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_snujP9pASowqX1sKxvgggb
          claim_id: c_QdyELDKdWB3eOUNQsFb1t3
          source_id: s_1Nm3481J5t4uWA6JiC_Dyj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Nm3481J5t4uWA6JiC_Dyj
            source_type: api_record
            title: 中国历代人物传记资料库：王志審（CBDB 235160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235160&o=json
            external_identifier: CBDB:235160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KMpUw21MkzdHgcCwnYVS8A
        status: active
        display_name: 王志審
        merged_into_person_id: null
    - claim:
        id: c_sHoW_JO79NRXHrB9DIWjg1
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XyT13XqKTnrUi4sdfqMDd2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W8ho3Xo2GyXqCOg7abiJJC
          claim_id: c_sHoW_JO79NRXHrB9DIWjg1
          source_id: s_Y64nCS6N91wSf4DbwbT4vJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y64nCS6N91wSf4DbwbT4vJ
            source_type: api_record
            title: 中国历代人物传记资料库：王志宏（CBDB 235158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json
            external_identifier: CBDB:235158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XyT13XqKTnrUi4sdfqMDd2
        status: active
        display_name: 王志宏
        merged_into_person_id: null
    - claim:
        id: c_9uX4obCaKYmB83h2Rm_n9r
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKtWdwRHcKRYSUnR9nmC5g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8IHzGa5j1tNDiJsOO_2Me0
          claim_id: c_9uX4obCaKYmB83h2Rm_n9r
          source_id: s_jBU7D8GZQVEtN9VrIBX69K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jBU7D8GZQVEtN9VrIBX69K
            source_type: api_record
            title: 中国历代人物传记资料库：王志密（CBDB 235159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235159&o=json
            external_identifier: CBDB:235159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKtWdwRHcKRYSUnR9nmC5g
        status: active
        display_name: 王志密
        merged_into_person_id: null
    - claim:
        id: c_TOEkduTejcutBJiMiolvv1
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rAM7rFx6bZ55xeMwnEB8Vu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lD1vNkJEALpYxMx6JXgFga
          claim_id: c_TOEkduTejcutBJiMiolvv1
          source_id: s_UzPZmbgesSMTJJedw710E5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UzPZmbgesSMTJJedw710E5
            source_type: api_record
            title: 中国历代人物传记资料库：王志夔（CBDB 235155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json
            external_identifier: CBDB:235155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rAM7rFx6bZ55xeMwnEB8Vu
        status: active
        display_name: 王志夔
        merged_into_person_id: null
    - claim:
        id: c_lTLaZtc61zalgrqdwr0HOA
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rZKeoziqhpQbtQiPHqWJ79
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C0h57sUT0qUI5BnlXZjYuF
          claim_id: c_lTLaZtc61zalgrqdwr0HOA
          source_id: s_zngo4oS9ZTtFBfUx3_Yqke
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zngo4oS9ZTtFBfUx3_Yqke
            source_type: api_record
            title: 中国历代人物传记资料库：王志望（CBDB 235163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235163&o=json
            external_identifier: CBDB:235163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rZKeoziqhpQbtQiPHqWJ79
        status: active
        display_name: 王志望
        merged_into_person_id: null
---

# 王志堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志堅 | accepted |
| birth.date | 1576年 | accepted |
| death.date | 1633年 | accepted |
| bio.summary | 王志堅（1576年—1633年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任兵備道、兵部車駕司主事、郎中。（中国历代人物传记资料库 CBDB 126537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cUEh25oPwuAacU7D2hTAPV | 王臨亨 | accepted |
| children | p_3DFKdwT8J87L9D41FmCZHV | 王伸 | accepted |
| children | p_bJeeCisqsDvKkX7VGzVKyc | 王傚 | accepted |
| children | p_d5tZbmB7Uvgn31uVyUP59b | 王偕 | accepted |
| ancestors | p_4JGDXd2PVCbJXStDWXhdLE | 王三錫 | accepted |
| ancestors | p_kB96uzTXC9U8gv3VfE4GfX | 王重鼎 | accepted |
| other | p_4EEgBQWAFUW189KU5BXtAJ | 王志龍 | accepted |
| other | p_CVfm8QLBPRz6YKLsA5QyLD | 王志伊 | accepted |
| other | p_KMpUw21MkzdHgcCwnYVS8A | 王志審 | accepted |
| other | p_XyT13XqKTnrUi4sdfqMDd2 | 王志宏 | accepted |
| other | p_fKtWdwRHcKRYSUnR9nmC5g | 王志密 | accepted |
| other | p_rAM7rFx6bZ55xeMwnEB8Vu | 王志夔 | accepted |
| other | p_rZKeoziqhpQbtQiPHqWJ79 | 王志望 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臨亨（CBDB 126852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 235147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235147&o=json)
- [中国历代人物传记资料库：王伸（CBDB 235164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235164&o=json)
- [中国历代人物传记资料库：王傚（CBDB 235167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235167&o=json)
- [中国历代人物传记资料库：王偕（CBDB 235166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235166&o=json)
- [中国历代人物传记资料库：王志宏（CBDB 235158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json)
- [中国历代人物传记资料库：王志堅（CBDB 126537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126537&o=json)
- [中国历代人物传记资料库：王志夔（CBDB 235155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json)
- [中国历代人物传记资料库：王志龍（CBDB 235161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json)
- [中国历代人物传记资料库：王志密（CBDB 235159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235159&o=json)
- [中国历代人物传记资料库：王志審（CBDB 235160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235160&o=json)
- [中国历代人物传记资料库：王志望（CBDB 235163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235163&o=json)
- [中国历代人物传记资料库：王志伊（CBDB 235157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235157&o=json)
- [中国历代人物传记资料库：王重鼎（CBDB 235148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235148&o=json)
