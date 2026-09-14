---
schema: wang-person/v1
id: p_nwL2xVd75q361KsBtDP6KW
status: active
merged_into: null
display_name: 王念祖
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6RzSYWy3KJK7RtNaEAuH2
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLPu3Bi2UnMHdHVsA1D9v7
          claim_id: c_T6RzSYWy3KJK7RtNaEAuH2
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: CBDB:207816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207816）
          source: &a1
            id: s_n2AW5aMJMFG9qYueQ6kZsh
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 207816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207816&o=json
            external_identifier: CBDB:207816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H268Vs54Y59Jt6KyEw68nB
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1586年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1NJmHpiQEbCPJ3yG513e7
          claim_id: c_H268Vs54Y59Jt6KyEw68nB
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
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
        id: c_kkoroKv855DEzBFHy5GHbr
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖（生于1586年），明人物。籍贯武進，入仕進士，曾任府教授。（中国历代人物传记资料库 CBDB 207816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MZV3ZPvelE5qCsKJHPQQKQ
          claim_id: c_kkoroKv855DEzBFHy5GHbr
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: CBDB:207816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nSRPG0MWFhnhELOkmoSA9T
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRqJXXALZ9Y-k7jrR6MYyf
          claim_id: c_nSRPG0MWFhnhELOkmoSA9T
          source_id: s_8VtG5FUfNt117BNgkuCBND
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8VtG5FUfNt117BNgkuCBND
            source_type: api_record
            title: 中国历代人物传记资料库：王舜卿（CBDB 236475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236475&o=json
            external_identifier: CBDB:236475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_Xm-RXyLYVShAlmKBURpi1X
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8YDjoJXWBi5PyNmkv6AW5r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S70SiS6LD4znMhJdeZZmMD
          claim_id: c_Xm-RXyLYVShAlmKBURpi1X
          source_id: s_tnp1hQE3Yu3Emv657jXhiT
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tnp1hQE3Yu3Emv657jXhiT
            source_type: api_record
            title: 中国历代人物传记资料库：王仁生（CBDB 236492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236492&o=json
            external_identifier: CBDB:236492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8YDjoJXWBi5PyNmkv6AW5r
        status: active
        display_name: 王仁生
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rZ39IXIaD5WHsvXzjaZG_f
        subject_person_id: p_D5aUgW41iFSELEpD5aeYBF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0OsEE7SS-x1BbksZrLgub
          claim_id: c_rZ39IXIaD5WHsvXzjaZG_f
          source_id: s_dzuSWy337YD48yHbbTiwsv
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dzuSWy337YD48yHbbTiwsv
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 236474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236474&o=json
            external_identifier: CBDB:236474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D5aUgW41iFSELEpD5aeYBF
        status: active
        display_name: 王松
        merged_into_person_id: null
    - claim:
        id: c_GOx_PvzjHsbUp4geuVsvgZ
        subject_person_id: p_o9Ai9ckQB4CqpHx8H7134V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slgGdp-Qs4sx-G7EYPrjMb
          claim_id: c_GOx_PvzjHsbUp4geuVsvgZ
          source_id: s_U7tVnwgeuwsLKnJ6bWDKTo
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U7tVnwgeuwsLKnJ6bWDKTo
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 236473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236473&o=json
            external_identifier: CBDB:236473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o9Ai9ckQB4CqpHx8H7134V
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_qGDC1zOvnzlfALqANo5Lgr
        subject_person_id: p_2Z9ovzoyssBJVDk5H5EyEb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m61oGgZQ72_p3gYR_ejuuj
          claim_id: c_qGDC1zOvnzlfALqANo5Lgr
          source_id: s_7rqXWHYOu9lCOGgtNBe-_Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7rqXWHYOu9lCOGgtNBe-_Z
            source_type: api_record
            title: 中国历代人物传记资料库：王昌祖（CBDB 236490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json
            external_identifier: CBDB:236490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Z9ovzoyssBJVDk5H5EyEb
        status: active
        display_name: 王昌祖
        merged_into_person_id: null
    - claim:
        id: c_qcPVN47-bgCAxTv5SuaIyQ
        subject_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GR7rQPY8-CZ0dVerY0fLbn
          claim_id: c_qcPVN47-bgCAxTv5SuaIyQ
          source_id: s_AuwPsmnNo9YG0LEYEuQF3k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AuwPsmnNo9YG0LEYEuQF3k
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 236483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json
            external_identifier: CBDB:236483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JGD7aS5CmvcYXYXaFkfKG
        status: active
        display_name: 王壎
        merged_into_person_id: null
    - claim:
        id: c_XiY68382_SgzkJwuHWIIB0
        subject_person_id: p_Aa31PHaJGTUyv8DURAeYhy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GKwkZsCFLz0FnMYsCxm5hP
          claim_id: c_XiY68382_SgzkJwuHWIIB0
          source_id: s_s8yZ7pHEr3w2PU_aaRDTDE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s8yZ7pHEr3w2PU_aaRDTDE
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 236484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json
            external_identifier: CBDB:236484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Aa31PHaJGTUyv8DURAeYhy
        status: active
        display_name: 王均
        merged_into_person_id: null
    - claim:
        id: c_XE41abEZy-h_3b6-4Iijsp
        subject_person_id: p_E31vnHv2SuVCD2MDQvZaji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g4G2pRi580TlZrqx5Ub49z
          claim_id: c_XE41abEZy-h_3b6-4Iijsp
          source_id: s_s0w4V3pGjHlrajtL6CCST7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s0w4V3pGjHlrajtL6CCST7
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 236486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json
            external_identifier: CBDB:236486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E31vnHv2SuVCD2MDQvZaji
        status: active
        display_name: 王圻
        merged_into_person_id: null
    - claim:
        id: c_H9IZ1_yJTV8gtp0mOgsXS2
        subject_person_id: p_EnK4LFPnKth3r1eR5JuCpq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tajf_52EU0jtKB6pYMNCQx
          claim_id: c_H9IZ1_yJTV8gtp0mOgsXS2
          source_id: s_-15ftZYb0WOTCAvKMCOvSh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-15ftZYb0WOTCAvKMCOvSh
            source_type: api_record
            title: 中国历代人物传记资料库：王念兹（CBDB 236485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json
            external_identifier: CBDB:236485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EnK4LFPnKth3r1eR5JuCpq
        status: active
        display_name: 王念兹
        merged_into_person_id: null
    - claim:
        id: c_fZU1C2SHuLG4qVN346sViJ
        subject_person_id: p_FbJWivDTmB4C48oVuqnyWX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qml8sLDFeEsP0O35H86Til
          claim_id: c_fZU1C2SHuLG4qVN346sViJ
          source_id: s_WuEgb8OA2UiEEBOslJQ9y4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WuEgb8OA2UiEEBOslJQ9y4
            source_type: api_record
            title: 中国历代人物传记资料库：王堦（CBDB 236480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json
            external_identifier: CBDB:236480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FbJWivDTmB4C48oVuqnyWX
        status: active
        display_name: 王堦
        merged_into_person_id: null
    - claim:
        id: c_lxAa4uVF1kzVXL0OL_Mp2R
        subject_person_id: p_TK5z7oK9MAhdoCe4L4Zqh4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ui0MutySsXcP-2AOtekiB9
          claim_id: c_lxAa4uVF1kzVXL0OL_Mp2R
          source_id: s_R2Za04XagfrLq4tsMrqvUG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R2Za04XagfrLq4tsMrqvUG
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 236482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json
            external_identifier: CBDB:236482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TK5z7oK9MAhdoCe4L4Zqh4
        status: active
        display_name: 王域
        merged_into_person_id: null
    - claim:
        id: c_V-Dybbj_uZZPQUjTWmgD2A
        subject_person_id: p_XSpXBQn2ZKmUkzA4VWqkjv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lWMtqMtu7apnC0544E7Q5a
          claim_id: c_V-Dybbj_uZZPQUjTWmgD2A
          source_id: s_XV1HuzO3aFc-JMVXZzKKBy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XV1HuzO3aFc-JMVXZzKKBy
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 236481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236481&o=json
            external_identifier: CBDB:236481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XSpXBQn2ZKmUkzA4VWqkjv
        status: active
        display_name: 王坤
        merged_into_person_id: null
    - claim:
        id: c_kfaKUZY-q79WljjLFFk_jA
        subject_person_id: p_i8QAXrFSTHaYhDd4TMMRoQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-q8Zft3VgtROG74WAysh0
          claim_id: c_kfaKUZY-q79WljjLFFk_jA
          source_id: s_tAx9WrUrChsSDW4sYnjGDr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tAx9WrUrChsSDW4sYnjGDr
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 236489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json
            external_identifier: CBDB:236489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i8QAXrFSTHaYhDd4TMMRoQ
        status: active
        display_name: 王光祖
        merged_into_person_id: null
    - claim:
        id: c_fkpQsTiALBj8pNhQMDMUUU
        subject_person_id: p_jLjXgM3f18nuVW83EfXw7K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RVoj395t_izplQpLT2sR56
          claim_id: c_fkpQsTiALBj8pNhQMDMUUU
          source_id: s_saSf1K2Erj9drzinWILT7Z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_saSf1K2Erj9drzinWILT7Z
            source_type: api_record
            title: 中国历代人物传记资料库：王墉（CBDB 236488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236488&o=json
            external_identifier: CBDB:236488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jLjXgM3f18nuVW83EfXw7K
        status: active
        display_name: 王墉
        merged_into_person_id: null
    - claim:
        id: c_WS371uCqmEdFW1Uj6pIeTo
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rfnLHuZPH5GnvbaWYy12L8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__d2gsVY4VmCand0NKWKxL-
          claim_id: c_WS371uCqmEdFW1Uj6pIeTo
          source_id: s_-QVMzd-c_bCEZd9qc-RlDk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-QVMzd-c_bCEZd9qc-RlDk
            source_type: api_record
            title: 中国历代人物传记资料库：王弘祖（CBDB 236491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236491&o=json
            external_identifier: CBDB:236491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rfnLHuZPH5GnvbaWYy12L8
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
---

# 王念祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念祖 | accepted |
| birth.date | 1586年 | accepted |
| bio.summary | 王念祖（生于1586年），明人物。籍贯武進，入仕進士，曾任府教授。（中国历代人物传记资料库 CBDB 207816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| children | p_8YDjoJXWBi5PyNmkv6AW5r | 王仁生 | accepted |
| ancestors | p_D5aUgW41iFSELEpD5aeYBF | 王松 | accepted |
| ancestors | p_o9Ai9ckQB4CqpHx8H7134V | 王蘭 | accepted |
| other | p_2Z9ovzoyssBJVDk5H5EyEb | 王昌祖 | accepted |
| other | p_3JGD7aS5CmvcYXYXaFkfKG | 王壎 | accepted |
| other | p_Aa31PHaJGTUyv8DURAeYhy | 王均 | accepted |
| other | p_E31vnHv2SuVCD2MDQvZaji | 王圻 | accepted |
| other | p_EnK4LFPnKth3r1eR5JuCpq | 王念兹 | accepted |
| other | p_FbJWivDTmB4C48oVuqnyWX | 王堦 | accepted |
| other | p_TK5z7oK9MAhdoCe4L4Zqh4 | 王域 | accepted |
| other | p_XSpXBQn2ZKmUkzA4VWqkjv | 王坤 | accepted |
| other | p_i8QAXrFSTHaYhDd4TMMRoQ | 王光祖 | accepted |
| other | p_jLjXgM3f18nuVW83EfXw7K | 王墉 | accepted |
| other | p_rfnLHuZPH5GnvbaWYy12L8 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌祖（CBDB 236490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json)
- [中国历代人物传记资料库：王光祖（CBDB 236489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json)
- [中国历代人物传记资料库：王弘祖（CBDB 236491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236491&o=json)
- [中国历代人物传记资料库：王堦（CBDB 236480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236480&o=json)
- [中国历代人物传记资料库：王均（CBDB 236484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json)
- [中国历代人物传记资料库：王坤（CBDB 236481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236481&o=json)
- [中国历代人物传记资料库：王蘭（CBDB 236473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236473&o=json)
- [中国历代人物传记资料库：王念兹（CBDB 236485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json)
- [中国历代人物传记资料库：王念祖（CBDB 207816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207816&o=json)
- [中国历代人物传记资料库：王圻（CBDB 236486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json)
- [中国历代人物传记资料库：王仁生（CBDB 236492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236492&o=json)
- [中国历代人物传记资料库：王舜卿（CBDB 236475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236475&o=json)
- [中国历代人物传记资料库：王松（CBDB 236474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236474&o=json)
- [中国历代人物传记资料库：王壎（CBDB 236483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json)
- [中国历代人物传记资料库：王墉（CBDB 236488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236488&o=json)
- [中国历代人物传记资料库：王域（CBDB 236482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json)
