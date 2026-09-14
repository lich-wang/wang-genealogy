---
schema: wang-person/v1
id: p_2BUKVfjLttuBq79dFrNbRz
status: active
merged_into: null
display_name: 王崇
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATb9331iqvtY8A5mNdMxMT
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BoGqtPwtLoKnvrjfdaLLer
          claim_id: c_ATb9331iqvtY8A5mNdMxMT
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: CBDB:202833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202833）
          source: &a1
            id: s_rSpqfo8s5BJMrtNFtFPgJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 202833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json
            external_identifier: CBDB:202833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jsnHKDDZ9FDFpBajVnKKZB
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1504年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PeekuetNqzz6szhAzdv8o
          claim_id: c_jsnHKDDZ9FDFpBajVnKKZB
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
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
        id: c_7nN2p4A1vuPjnhLJAV96RB
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇（生于1504年），明人物。明清進士進士，籍贯任邱，入仕進士。（中国历代人物传记资料库 CBDB 202833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ipG0-nSJ1XB8Bp9VKqf3nT
          claim_id: c_7nN2p4A1vuPjnhLJAV96RB
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: CBDB:202833
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5PrwlHKYhV1mFA-aDI31WI
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_576BAbjIh_DBMcs88UNJdp
          claim_id: c_5PrwlHKYhV1mFA-aDI31WI
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FqMa4M2DAduvq9gtDKyST2
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QT0gnU3P_hVEwFdFLn1sT7
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dzQWcKffGVTMEta4AQwW5C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2MvL92xPasIcUeG8n-BLE
          claim_id: c_QT0gnU3P_hVEwFdFLn1sT7
          source_id: s_P4bjF6pEL0D9laOyXS0o5e
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4bjF6pEL0D9laOyXS0o5e
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王崇妻)（CBDB 295382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295382&o=json
            external_identifier: CBDB:295382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dzQWcKffGVTMEta4AQwW5C
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_mJ3kCV6SCgKgVcQR8RVGjn
        subject_person_id: p_5e6yS78g9Sg7aej9VVLMfV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ivscx0KkRqsoWrd0YcjHzA
          claim_id: c_mJ3kCV6SCgKgVcQR8RVGjn
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5e6yS78g9Sg7aej9VVLMfV
        status: active
        display_name: 王衍
        merged_into_person_id: null
    - claim:
        id: c_vneQp7CXqeYFAKQY7pvwKn
        subject_person_id: p_xA3rRB9F532Jc29D6Y6JTF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXigNkKO_IZVmBTk1CeVJM
          claim_id: c_vneQp7CXqeYFAKQY7pvwKn
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xA3rRB9F532Jc29D6Y6JTF
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_PxkFXaxYHOdp_EPUznba2B
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2Ein837W8JAAsgzKqEZfds
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPLeZV2ON-8FwxR-wLIB1l
          claim_id: c_PxkFXaxYHOdp_EPUznba2B
          source_id: s_eX8Aioimh1ge2ApHfFJt1j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eX8Aioimh1ge2ApHfFJt1j
            source_type: api_record
            title: 中国历代人物传记资料库：王宮（CBDB 295398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295398&o=json
            external_identifier: CBDB:295398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Ein837W8JAAsgzKqEZfds
        status: active
        display_name: 王宮
        merged_into_person_id: null
    - claim:
        id: c_Ldpjwg0MUl3me0neor9t6b
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6xtQbRuBzA1uP67YjPrUyD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4l6ESBlL37DWFv1zO4375S
          claim_id: c_Ldpjwg0MUl3me0neor9t6b
          source_id: s_vDT1dAIEmmB_T3nV9p1Kj_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vDT1dAIEmmB_T3nV9p1Kj_
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 295390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295390&o=json
            external_identifier: CBDB:295390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6xtQbRuBzA1uP67YjPrUyD
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_G-ValmgMy7b8aC9Ra-BMQF
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_89NdiNnYLVbveTmjL24u63
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eqr4KrLY82aR4KORwmhH9c
          claim_id: c_G-ValmgMy7b8aC9Ra-BMQF
          source_id: s_pCOGS-7iAtmWrAcIM5-WUQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pCOGS-7iAtmWrAcIM5-WUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 295395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json
            external_identifier: CBDB:295395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_89NdiNnYLVbveTmjL24u63
        status: active
        display_name: 王圍
        merged_into_person_id: null
    - claim:
        id: c_UGMhr_RwK_0pFlEFEpQu42
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9XvnKgD4BETFUuaznLpSPq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1kq6hwMqQuvmbSHzwgQxs
          claim_id: c_UGMhr_RwK_0pFlEFEpQu42
          source_id: s_CEU3P-0WUNB32in7oEwg5W
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CEU3P-0WUNB32in7oEwg5W
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 295388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295388&o=json
            external_identifier: CBDB:295388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9XvnKgD4BETFUuaznLpSPq
        status: active
        display_name: 王爵
        merged_into_person_id: null
    - claim:
        id: c_CC7gU-j-3u2kgK9AeHkFXs
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C8puYi9NgpgQpx43FYsihR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OSQHm-sfpj99cuU0QfbVkj
          claim_id: c_CC7gU-j-3u2kgK9AeHkFXs
          source_id: s_JlPS4Na6drcMYWI13Y8xEX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JlPS4Na6drcMYWI13Y8xEX
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 295394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json
            external_identifier: CBDB:295394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C8puYi9NgpgQpx43FYsihR
        status: active
        display_name: 王官
        merged_into_person_id: null
    - claim:
        id: c_HSzZVstevKUgYbwMAfSMyX
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FsR5Tt19tFVotojMRHp2N3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P_qtVKlELCqcAimmCLg98g
          claim_id: c_HSzZVstevKUgYbwMAfSMyX
          source_id: s_LvPbDvJ2Ue1jgxpbj9QlqT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LvPbDvJ2Ue1jgxpbj9QlqT
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 295393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295393&o=json
            external_identifier: CBDB:295393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FsR5Tt19tFVotojMRHp2N3
        status: active
        display_name: 王慶
        merged_into_person_id: null
    - claim:
        id: c__qRRCv1oLPELZjSfIGeUbO
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GgDbyUiRy94GrHq1xQFBkg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBhmLNXgiUvJ1dzM1ll2Q8
          claim_id: c__qRRCv1oLPELZjSfIGeUbO
          source_id: s_pw9EtsaQ1w2LbPaGaYOugg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pw9EtsaQ1w2LbPaGaYOugg
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 295386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295386&o=json
            external_identifier: CBDB:295386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GgDbyUiRy94GrHq1xQFBkg
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_BVs8fh9Uu_aWAV2GGYaxZj
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YQWY349n8N86T9edBNzktP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxOkazJwdCZmezo0mDDyoV
          claim_id: c_BVs8fh9Uu_aWAV2GGYaxZj
          source_id: s_PowXKFYEpg9U8fzHMqIBlL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PowXKFYEpg9U8fzHMqIBlL
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 295397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295397&o=json
            external_identifier: CBDB:295397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YQWY349n8N86T9edBNzktP
        status: active
        display_name: 王嶽
        merged_into_person_id: null
    - claim:
        id: c_v0CGKT27zaCBV7PLAN9l1G
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hHDCw1tMaaR2qJj4cJFS8R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O-DKDdjuhWPdEA5ISkGjyi
          claim_id: c_v0CGKT27zaCBV7PLAN9l1G
          source_id: s_VzlQsroYj1CqIJCDnbSPGt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VzlQsroYj1CqIJCDnbSPGt
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 295385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295385&o=json
            external_identifier: CBDB:295385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hHDCw1tMaaR2qJj4cJFS8R
        status: active
        display_name: 王燦
        merged_into_person_id: null
    - claim:
        id: c_Pp8JiDlvxdW3kgBgK2sVM9
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_niw5uJS3zvXwNh3yWH2M5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I-t3mcIo2jvPK1RldIgIUf
          claim_id: c_Pp8JiDlvxdW3kgBgK2sVM9
          source_id: s_bRsHMcKELtvcB8sbykpvR4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bRsHMcKELtvcB8sbykpvR4
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 295383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json
            external_identifier: CBDB:295383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_niw5uJS3zvXwNh3yWH2M5Z
        status: active
        display_name: 王彝
        merged_into_person_id: null
    - claim:
        id: c_7bAdZTsbslF5_7BZKm1Ka5
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stmtYMocNUYHWEKMLvVwt1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0J6owmlzdhUsS7mX6UJSS
          claim_id: c_7bAdZTsbslF5_7BZKm1Ka5
          source_id: s_i7uJ5pQaImXXNuqE7jB3L-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i7uJ5pQaImXXNuqE7jB3L-
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 295387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295387&o=json
            external_identifier: CBDB:295387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stmtYMocNUYHWEKMLvVwt1
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_GIPTZEd3QME85Ik2qqV9YD
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uFoq8xCZJis6iTmr9FLnBy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xpcIg6gmdmZ07NXF18XLmz
          claim_id: c_GIPTZEd3QME85Ik2qqV9YD
          source_id: s_-qTk8cvyp7yPCGqi-02RAO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-qTk8cvyp7yPCGqi-02RAO
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 295389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295389&o=json
            external_identifier: CBDB:295389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uFoq8xCZJis6iTmr9FLnBy
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_grwYnOfVsFva-hI_ze1X_9
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wpuFNZnLqtyUBZUSZtR4bf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cyw142ZO_Exdqumm7O21gh
          claim_id: c_grwYnOfVsFva-hI_ze1X_9
          source_id: s_2AFZNEahkx9KcToCbBYCQV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2AFZNEahkx9KcToCbBYCQV
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 295392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295392&o=json
            external_identifier: CBDB:295392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wpuFNZnLqtyUBZUSZtR4bf
        status: active
        display_name: 王琴
        merged_into_person_id: null
    - claim:
        id: c_MJ6miWAEpzw3DKvvk-fWCd
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xCyXXAVPZTfkMLcTEmPx6P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_C6uM4cwBc1U7T7weHdGf
          claim_id: c_MJ6miWAEpzw3DKvvk-fWCd
          source_id: s_lVUJcVrV-O5FiKeRnTQRTf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lVUJcVrV-O5FiKeRnTQRTf
            source_type: api_record
            title: 中国历代人物传记资料库：王鼏（CBDB 295391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295391&o=json
            external_identifier: CBDB:295391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xCyXXAVPZTfkMLcTEmPx6P
        status: active
        display_name: 王鼏
        merged_into_person_id: null
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| birth.date | 1504年 | accepted |
| bio.summary | 王崇（生于1504年），明人物。明清進士進士，籍贯任邱，入仕進士。（中国历代人物传记资料库 CBDB 202833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqMa4M2DAduvq9gtDKyST2 | 王釗 | accepted |
| spouses | p_dzQWcKffGVTMEta4AQwW5C | 劉氏 | accepted |
| ancestors | p_5e6yS78g9Sg7aej9VVLMfV | 王衍 | accepted |
| ancestors | p_xA3rRB9F532Jc29D6Y6JTF | 王英 | accepted |
| other | p_2Ein837W8JAAsgzKqEZfds | 王宮 | accepted |
| other | p_6xtQbRuBzA1uP67YjPrUyD | 王琦 | accepted |
| other | p_89NdiNnYLVbveTmjL24u63 | 王圍 | accepted |
| other | p_9XvnKgD4BETFUuaznLpSPq | 王爵 | accepted |
| other | p_C8puYi9NgpgQpx43FYsihR | 王官 | accepted |
| other | p_FsR5Tt19tFVotojMRHp2N3 | 王慶 | accepted |
| other | p_GgDbyUiRy94GrHq1xQFBkg | 王璽 | accepted |
| other | p_YQWY349n8N86T9edBNzktP | 王嶽 | accepted |
| other | p_hHDCw1tMaaR2qJj4cJFS8R | 王燦 | accepted |
| other | p_niw5uJS3zvXwNh3yWH2M5Z | 王彝 | accepted |
| other | p_stmtYMocNUYHWEKMLvVwt1 | 王鼎 | accepted |
| other | p_uFoq8xCZJis6iTmr9FLnBy | 王璋 | accepted |
| other | p_wpuFNZnLqtyUBZUSZtR4bf | 王琴 | accepted |
| other | p_xCyXXAVPZTfkMLcTEmPx6P | 王鼏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王崇妻)（CBDB 295382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295382&o=json)
- [中国历代人物传记资料库：王燦（CBDB 295385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295385&o=json)
- [中国历代人物传记资料库：王崇（CBDB 202833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 295387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295387&o=json)
- [中国历代人物传记资料库：王宮（CBDB 295398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295398&o=json)
- [中国历代人物传记资料库：王官（CBDB 295394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json)
- [中国历代人物传记资料库：王爵（CBDB 295388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295388&o=json)
- [中国历代人物传记资料库：王鼏（CBDB 295391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295391&o=json)
- [中国历代人物传记资料库：王琦（CBDB 295390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295390&o=json)
- [中国历代人物传记资料库：王琴（CBDB 295392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295392&o=json)
- [中国历代人物传记资料库：王慶（CBDB 295393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295393&o=json)
- [中国历代人物传记资料库：王圍（CBDB 295395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295395&o=json)
- [中国历代人物传记资料库：王璽（CBDB 295386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295386&o=json)
- [中国历代人物传记资料库：王彝（CBDB 295383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295383&o=json)
- [中国历代人物传记资料库：王嶽（CBDB 295397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295397&o=json)
- [中国历代人物传记资料库：王璋（CBDB 295389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295389&o=json)
