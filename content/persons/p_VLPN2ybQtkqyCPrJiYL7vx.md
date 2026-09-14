---
schema: wang-person/v1
id: p_VLPN2ybQtkqyCPrJiYL7vx
status: active
merged_into: null
display_name: 王之辅
cbdb_id: 227717
revision: 15
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_viDYbaoXE9Wh79SAGrQX9q
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之辅，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227717）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KMMLM5gPtWcdbMGKmEtafX
          claim_id: c_viDYbaoXE9Wh79SAGrQX9q
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
        - id: cs__gwvpceqVFkWXZG7rUkWH2
          claim_id: c_viDYbaoXE9Wh79SAGrQX9q
          source_id: s_Hvv7DyDri2JtmhRxc6FSqg
          stance: supports
          locator: CBDB:227717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Hvv7DyDri2JtmhRxc6FSqg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之輔（227717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227717&o=json
            external_identifier: CBDB:227717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:58.672Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_saxZDyQvSKSzmVZZ9JjbEM
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之辅
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6KBVBKAUqgyfoAEK9nHw3b
          claim_id: c_saxZDyQvSKSzmVZZ9JjbEM
          source_id: s_Hvv7DyDri2JtmhRxc6FSqg
          stance: supports
          locator: Q16075319
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Q1Fk9wzzxENazjrYcDowL4
          claim_id: c_saxZDyQvSKSzmVZZ9JjbEM
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: Q16075319
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mworeDkwiy3aSPPFGW7ajF
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FiUt9SfqnZ6fbPSjK9T6QK
          claim_id: c_mworeDkwiy3aSPPFGW7ajF
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_tNdb7fPKxfV8EeBXQP1rDH
          claim_id: c_mworeDkwiy3aSPPFGW7ajF
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children:
    - claim:
        id: c_EPFzM2CVBxyADZ1wsqLgGS
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZxmoUk6pXaC7TDzaGpcdx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Hfr2Xu1GnWmig6UtYvH9K
          claim_id: c_EPFzM2CVBxyADZ1wsqLgGS
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
        - id: cs_R8G445cRFoLGNvZn4Eok1S
          claim_id: c_EPFzM2CVBxyADZ1wsqLgGS
          source_id: s_5u7j1eP4WzA9gyttQHGv1D
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5u7j1eP4WzA9gyttQHGv1D
            source_type: api_record
            title: 维基数据：王象斗（Q16075433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075433
            external_identifier: Q16075433
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.049Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%96%97
      object_person:
        id: p_8ZxmoUk6pXaC7TDzaGpcdx
        status: active
        display_name: 王象斗
        merged_into_person_id: null
    - claim:
        id: c_t77RN6xcQGP2N7ev4pEch7
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6VHJbLTrkCw69Y2Ho1sBH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZUbgZqbr94hvBoEvj4kVgX
          claim_id: c_t77RN6xcQGP2N7ev4pEch7
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_dL8q3E95rdcorBNANJ5ekG
          claim_id: c_t77RN6xcQGP2N7ev4pEch7
          source_id: s_U8yRY4uN6P8k7auZnEUPKq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_U8yRY4uN6P8k7auZnEUPKq
            source_type: api_record
            title: 维基数据：王象节（Q16075437）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075437
            external_identifier: Q16075437
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E7%AF%80
      object_person:
        id: p_6VHJbLTrkCw69Y2Ho1sBH7
        status: active
        display_name: 王象节
        merged_into_person_id: null
    - claim:
        id: c_HQd1y4JpN62jWCE8R1ANwL
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NtA1LGCBXXUxZTMQG7E5fk
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_ra5d415KHHNV67vifC8FL7
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
    - claim:
        id: c_W6gFXwp8k1btQTaWPtD7oA
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WftnxIkW4BbFv_w4kE8tvi
          claim_id: c_W6gFXwp8k1btQTaWPtD7oA
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象泰 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象泰 之父／母。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Rw5jj5s9QHTFioRpUjkzn
        status: active
        display_name: 王象泰
        merged_into_person_id: null
    - claim:
        id: c_-oln34xRC91DhcWGz0fy4T
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2zR3kCcvdMr3eo1Lp4b4JK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E9tW4pSlNRi7GXzmAFAyJo
          claim_id: c_-oln34xRC91DhcWGz0fy4T
          source_id: s_JJulMMA36XHWH2F5ZUf4SY
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象某 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象某 之父／母。
          source:
            id: s_JJulMMA36XHWH2F5ZUf4SY
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json
            external_identifier: CBDB:220283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2zR3kCcvdMr3eo1Lp4b4JK
        status: active
        display_name: 王象某
        merged_into_person_id: null
    - claim:
        id: c_2jZ8yJf6RMUck7RIDv4ma6
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HG83Xq1T22VH2Y4hMiiznb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7hY_pBH5y8wDRWzYOJ8ir
          claim_id: c_2jZ8yJf6RMUck7RIDv4ma6
          source_id: s_NAyRL56KdXmtXCBbWTPK2f
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象旭 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象旭 之父／母。
          source:
            id: s_NAyRL56KdXmtXCBbWTPK2f
            source_type: api_record
            title: 中国历代人物传记资料库：王象旭（CBDB 220273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220273&o=json
            external_identifier: CBDB:220273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HG83Xq1T22VH2Y4hMiiznb
        status: active
        display_name: 王象旭
        merged_into_person_id: null
    - claim:
        id: c_KbYCbJwd74CjocrAvOro2L
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hgd3GnFDoJXaS5y6oGWTa8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hkNNi6L2w_-evvE_Sb1SpT
          claim_id: c_KbYCbJwd74CjocrAvOro2L
          source_id: s_xOum9hFoDYiQwWC51SQIhR
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象樞 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象樞 之父／母。
          source:
            id: s_xOum9hFoDYiQwWC51SQIhR
            source_type: api_record
            title: 中国历代人物传记资料库：王象樞（CBDB 220270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json
            external_identifier: CBDB:220270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hgd3GnFDoJXaS5y6oGWTa8
        status: active
        display_name: 王象樞
        merged_into_person_id: null
    - claim:
        id: c_OW0cDmJqnI09s3ReAJyItY
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQky6wpdi52zF5zHqq31bi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6uX3Nv9fpYDGIi6fskS1cp
          claim_id: c_OW0cDmJqnI09s3ReAJyItY
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象恆 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象恆 之父／母。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NQky6wpdi52zF5zHqq31bi
        status: active
        display_name: 王象恆
        merged_into_person_id: null
    - claim:
        id: c_pWgXuElZ0o7ZRG2KfsbQ-d
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PgasUHaEjzoamewhrqMvcz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVQuu7igOY_R0hKv1YbPPV
          claim_id: c_pWgXuElZ0o7ZRG2KfsbQ-d
          source_id: s_1ruaTTtD99q4-xxqFZYbyF
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象萃 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象萃 之父／母。
          source:
            id: s_1ruaTTtD99q4-xxqFZYbyF
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PgasUHaEjzoamewhrqMvcz
        status: active
        display_name: 王象萃
        merged_into_person_id: null
    - claim:
        id: c_YTwpqSJrzyDffTf2Kl2Kty
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJQFsCAd_QZm_uyQOBpZck
          claim_id: c_YTwpqSJrzyDffTf2Kl2Kty
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TD1TvnKHWVi268fxKgzDuM
        status: active
        display_name: 王象晉
        merged_into_person_id: null
    - claim:
        id: c_AeJZgCOPGMdsUyzAv9RIYr
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TMNLd9dM66zM7H7cXHFoHD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_47kOsZy8S4HeYn2H7ppb_Y
          claim_id: c_AeJZgCOPGMdsUyzAv9RIYr
          source_id: s_2QzLcSQcUTI0g50eBdALc1
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象璧 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象璧 之父／母。
          source:
            id: s_2QzLcSQcUTI0g50eBdALc1
            source_type: api_record
            title: 中国历代人物传记资料库：王象璧（CBDB 220274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220274&o=json
            external_identifier: CBDB:220274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TMNLd9dM66zM7H7cXHFoHD
        status: active
        display_name: 王象璧
        merged_into_person_id: null
    - claim:
        id: c_WkB1k3JQxaKbJDUNu69jdT
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YSMNigLFhWLTp4n8pE7PzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lHS2FMcaGtRmw27KWR2n8p
          claim_id: c_WkB1k3JQxaKbJDUNu69jdT
          source_id: s_q-QJOqHPIv5Lw9K0QaQRwf
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象臯 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象臯 之父／母。
          source:
            id: s_q-QJOqHPIv5Lw9K0QaQRwf
            source_type: api_record
            title: 中国历代人物传记资料库：王象臯（CBDB 220280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json
            external_identifier: CBDB:220280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YSMNigLFhWLTp4n8pE7PzU
        status: active
        display_name: 王象臯
        merged_into_person_id: null
    - claim:
        id: c_ol9sg1-Xq2Yv_l2SJb61j1
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bFe5gYR4uP8WejQqzqnxqy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HVWtYMx4bSBQ6z9mUoOdei
          claim_id: c_ol9sg1-Xq2Yv_l2SJb61j1
          source_id: s_kQf1PI7D-rgiyxHNTJrhlu
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象某 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象某 之父／母。
          source:
            id: s_kQf1PI7D-rgiyxHNTJrhlu
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json
            external_identifier: CBDB:220281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bFe5gYR4uP8WejQqzqnxqy
        status: active
        display_name: 王象某
        merged_into_person_id: null
    - claim:
        id: c_pcJgHBzlgR3wRreTA7WD3q
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxDUfWWgEwx_OOthyF13wP
          claim_id: c_pcJgHBzlgR3wRreTA7WD3q
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象賁 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象賁 之父／母。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_btyLjEDjLPQrn182pZi5zm
        status: active
        display_name: 王象賁
        merged_into_person_id: null
    - claim:
        id: c_TzWs_tj-rbnAkbW-38iZio
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76WbBEITHLEWCQZdEj_mX6
          claim_id: c_TzWs_tj-rbnAkbW-38iZio
          source_id: s_H1NWuH3qju2c0-OsZYgHKy
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象震 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象震 之父／母。
          source:
            id: s_H1NWuH3qju2c0-OsZYgHKy
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hTPxiW1KqFV4Pc5dYpNx4S
        status: active
        display_name: 王象震
        merged_into_person_id: null
    - claim:
        id: c_tGYn1V3YLtK-6VZRdPsNlx
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kzcEa5LNsLbTbrKD29jnQ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2LwV1znhfHIrTU-p_SPQ0
          claim_id: c_tGYn1V3YLtK-6VZRdPsNlx
          source_id: s_qaf0tJk9ctbjl4udhRB1F3
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象節 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象節 之父／母。
          source:
            id: s_qaf0tJk9ctbjl4udhRB1F3
            source_type: api_record
            title: 中国历代人物传记资料库：王象節（CBDB 220272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220272&o=json
            external_identifier: CBDB:220272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kzcEa5LNsLbTbrKD29jnQ7
        status: active
        display_name: 王象節
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之辅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之辅，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227717） | accepted |
| name.primary | 王之辅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| children | p_8ZxmoUk6pXaC7TDzaGpcdx | 王象斗 | accepted |
| children | p_6VHJbLTrkCw69Y2Ho1sBH7 | 王象节 | accepted |
| children | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |
| children | p_2Rw5jj5s9QHTFioRpUjkzn | 王象泰 | accepted |
| children | p_2zR3kCcvdMr3eo1Lp4b4JK | 王象某 | accepted |
| children | p_HG83Xq1T22VH2Y4hMiiznb | 王象旭 | accepted |
| children | p_Hgd3GnFDoJXaS5y6oGWTa8 | 王象樞 | accepted |
| children | p_NQky6wpdi52zF5zHqq31bi | 王象恆 | accepted |
| children | p_PgasUHaEjzoamewhrqMvcz | 王象萃 | accepted |
| children | p_TD1TvnKHWVi268fxKgzDuM | 王象晉 | accepted |
| children | p_TMNLd9dM66zM7H7cXHFoHD | 王象璧 | accepted |
| children | p_YSMNigLFhWLTp4n8pE7PzU | 王象臯 | accepted |
| children | p_bFe5gYR4uP8WejQqzqnxqy | 王象某 | accepted |
| children | p_btyLjEDjLPQrn182pZi5zm | 王象賁 | accepted |
| children | p_hTPxiW1KqFV4Pc5dYpNx4S | 王象震 | accepted |
| children | p_kzcEa5LNsLbTbrKD29jnQ7 | 王象節 | accepted |

## 外部来源

- [维基数据：王象斗（Q16075433）](https://www.wikidata.org/wiki/Q16075433)
- [维基数据：王象节（Q16075437）](https://www.wikidata.org/wiki/Q16075437)
- [维基数据：王象蒙（Q45647401）](https://www.wikidata.org/wiki/Q45647401)
- [维基数据：王之辅（Q16075319）](https://www.wikidata.org/wiki/Q16075319)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [中国历代人物传记资料库：王象賁（CBDB 220269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json)
- [中国历代人物传记资料库：王象璧（CBDB 220274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220274&o=json)
- [中国历代人物传记资料库：王象萃（CBDB 220275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json)
- [中国历代人物传记资料库：王象臯（CBDB 220280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json)
- [中国历代人物传记资料库：王象恆（CBDB 220279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json)
- [中国历代人物传记资料库：王象節（CBDB 220272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220272&o=json)
- [中国历代人物传记资料库：王象晉（CBDB 65763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json)
- [中国历代人物传记资料库：王象某（CBDB 220281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json)
- [中国历代人物传记资料库：王象某（CBDB 220283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json)
- [中国历代人物传记资料库：王象樞（CBDB 220270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json)
- [中国历代人物传记资料库：王象泰（CBDB 220268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json)
- [中国历代人物传记资料库：王象旭（CBDB 220273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220273&o=json)
- [中国历代人物传记资料库：王象震（CBDB 220276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json)
- [CBDB 中国历代人物传记资料库：王之輔（227717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227717&o=json)
