---
schema: wang-person/v1
id: p_CF5LJP7gMSDjjxZDLTJKd5
status: active
merged_into: null
display_name: 王濟
revision: 21
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ppKHjtFvFcqDv3xfbNz3sU
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bA1HaV5KvsNFHz5N4K1xEk
          claim_id: c_ppKHjtFvFcqDv3xfbNz3sU
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB:34667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34667）
          source: &a1
            id: s_8MUgv6sNQt8ThP4q5TJstL
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 34667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json
            external_identifier: CBDB:34667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyJEnUN48sj5V1KHF14E48
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 34667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qiAxjI20ugUMQAVdZmhE4T
          claim_id: c_RyJEnUN48sj5V1KHF14E48
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB:34667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YDobhEkkZgVj3ruKmyChBN
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TapicYKnDacnd619uoEVqd
          claim_id: c_YDobhEkkZgVj3ruKmyChBN
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PGZtNCp6fX43UKKVunQyUd
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children:
    - claim:
        id: c_q77rACv3cwzYgfv64buhwJ
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Op6PToK09XMWs0pL-vjxCb
          claim_id: c_q77rACv3cwzYgfv64buhwJ
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB 双向互证（子 王廷陳 ⇄ 父 王濟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qLcC4SmUNJ1rkkQyeeqtKk
        status: active
        display_name: 王廷陳
        merged_into_person_id: null
    - claim:
        id: c__hi5qZMsYW9xquWMRLaCBS
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6MvFQM8BvtkC6qZZj9523
          claim_id: c__hi5qZMsYW9xquWMRLaCBS
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB 双向互证（子 王廷瞻 ⇄ 父 王濟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_yJdXEyhNkYGEWdnouNB9Xu
        status: active
        display_name: 王廷瞻
        merged_into_person_id: null
    - claim:
        id: c_vqeQtUYASo1r3-x3cDWGmv
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6WFPCBfjkFkdENUuMtErnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_voa_mjL_ZhTJaAwszdCS8F
          claim_id: c_vqeQtUYASo1r3-x3cDWGmv
          source_id: s_xyjavYsmvasDuOmTuqXjqW
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷器 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷器 之父／母。
          source:
            id: s_xyjavYsmvasDuOmTuqXjqW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 279544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json
            external_identifier: CBDB:279544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6WFPCBfjkFkdENUuMtErnW
        status: active
        display_name: 王廷器
        merged_into_person_id: null
    - claim:
        id: c_BzCP1Nl45TedU7G2by9S0E
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8G6efs8Dr7A2AKQB9Mr74k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OlFmmdvaP7xtsbEDPkLyFl
          claim_id: c_BzCP1Nl45TedU7G2by9S0E
          source_id: s_EYeQ-DNG4RkNLk-NJmptwh
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷儒 与 王廷瞻 为同胞（CBDB 记「弟」），王廷瞻 之父／母即 王廷儒 之父／母。
          source:
            id: s_EYeQ-DNG4RkNLk-NJmptwh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 325992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325992&o=json
            external_identifier: CBDB:325992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8G6efs8Dr7A2AKQB9Mr74k
        status: active
        display_name: 王廷儒
        merged_into_person_id: null
    - claim:
        id: c_LqDNZ4EXMkHX658ToeTPHO
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JjZGqgWMgVAiSEuj3G7mwV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-s8rx-G0ultSXWEkfvPHD2
          claim_id: c_LqDNZ4EXMkHX658ToeTPHO
          source_id: s_cCrMhOBIhVX0-gkPN9PHUF
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷讚 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷讚 之父／母。
          source:
            id: s_cCrMhOBIhVX0-gkPN9PHUF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷讚（CBDB 279541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279541&o=json
            external_identifier: CBDB:279541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JjZGqgWMgVAiSEuj3G7mwV
        status: active
        display_name: 王廷讚
        merged_into_person_id: null
    - claim:
        id: c_VIHNn92v-iv9VtSfhYcmdM
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MPvLHtziNCGPCPEemK1JuV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8z-VP2dMJkD7ITygHOcyIN
          claim_id: c_VIHNn92v-iv9VtSfhYcmdM
          source_id: s_w3Ok7Z9KCfZM0C4X9loIkC
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷楊 与 王廷瞻 为同胞（CBDB 记「兄」），王廷瞻 之父／母即 王廷楊 之父／母。
          source:
            id: s_w3Ok7Z9KCfZM0C4X9loIkC
            source_type: api_record
            title: 中国历代人物传记资料库：王廷楊（CBDB 325994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325994&o=json
            external_identifier: CBDB:325994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MPvLHtziNCGPCPEemK1JuV
        status: active
        display_name: 王廷楊
        merged_into_person_id: null
    - claim:
        id: c_KanYU1g4s2gA1bT5H0rW7J
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ncjpn7BNHUs4fdtcYyXYCR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9CccgGpT7m5bJzCQJ9HOJn
          claim_id: c_KanYU1g4s2gA1bT5H0rW7J
          source_id: s_3_CsaiXvCtdCFXOP_cRxmn
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷槐 与 王廷陳 为同胞（CBDB 记「兄」），王廷陳 之父／母即 王廷槐 之父／母。
          source:
            id: s_3_CsaiXvCtdCFXOP_cRxmn
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 279545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279545&o=json
            external_identifier: CBDB:279545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ncjpn7BNHUs4fdtcYyXYCR
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
    - claim:
        id: c_i51Cx4meFRz1XlzQb60hiT
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SbU6HDNRZJcM1Xz6pm1G8C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ulw-4ic4nmsdzSh_qrTw9
          claim_id: c_i51Cx4meFRz1XlzQb60hiT
          source_id: s_RY2XDvuB8JF9-L6mARYfn8
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷詔 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷詔 之父／母。
          source:
            id: s_RY2XDvuB8JF9-L6mARYfn8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 279540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json
            external_identifier: CBDB:279540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SbU6HDNRZJcM1Xz6pm1G8C
        status: active
        display_name: 王廷詔
        merged_into_person_id: null
    - claim:
        id: c_r62MBIKdTyzxZprEzbv4nQ
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TVYqoQ3gGR7yWV7C5141TK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8WhYi4DH4NrHxLqd7jxOl
          claim_id: c_r62MBIKdTyzxZprEzbv4nQ
          source_id: s_xHbpWeNVaORA8C0lslXVDh
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷遷 与 王廷瞻 为同胞（CBDB 记「兄」），王廷瞻 之父／母即 王廷遷 之父／母。
          source:
            id: s_xHbpWeNVaORA8C0lslXVDh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷遷（CBDB 325995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325995&o=json
            external_identifier: CBDB:325995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TVYqoQ3gGR7yWV7C5141TK
        status: active
        display_name: 王廷遷
        merged_into_person_id: null
    - claim:
        id: c_A2q0SSTwBcN3iFMHWvwBz7
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDTZa7DXJ6Rm9PFujJJ47a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MADbREJefS-beB1urPGsvh
          claim_id: c_A2q0SSTwBcN3iFMHWvwBz7
          source_id: s_RIavL2aBs4bjeHYafLPR3h
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷第 与 王廷瞻 为同胞（CBDB 记「兄」），王廷瞻 之父／母即 王廷第 之父／母。
          source:
            id: s_RIavL2aBs4bjeHYafLPR3h
            source_type: api_record
            title: 中国历代人物传记资料库：王廷第（CBDB 325998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325998&o=json
            external_identifier: CBDB:325998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bDTZa7DXJ6Rm9PFujJJ47a
        status: active
        display_name: 王廷第
        merged_into_person_id: null
    - claim:
        id: c_zWfmwsDZBsujUHTXTxRm1f
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ccujF3iGEJ6vZ6y43wc5Tw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63W79UeifhUSGUmbV1V-2W
          claim_id: c_zWfmwsDZBsujUHTXTxRm1f
          source_id: s_Fr0WY4-yMK6hHTnv4cMNar
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷楫 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷楫 之父／母。
          source:
            id: s_Fr0WY4-yMK6hHTnv4cMNar
            source_type: api_record
            title: 中国历代人物传记资料库：王廷楫（CBDB 279538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279538&o=json
            external_identifier: CBDB:279538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ccujF3iGEJ6vZ6y43wc5Tw
        status: active
        display_name: 王廷楫
        merged_into_person_id: null
    - claim:
        id: c_hwi50qsl-h3nliTUDN5VIy
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o4Yjy-VJWkpbEJ6S9i45bK
          claim_id: c_hwi50qsl-h3nliTUDN5VIy
          source_id: s_LpdnGnGnDYCqsjUknTbWFU
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷儒 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷儒 之父／母。
          source:
            id: s_LpdnGnGnDYCqsjUknTbWFU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 279543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json
            external_identifier: CBDB:279543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_grJ3t8tA8YcD9PpHUc4YGd
        status: active
        display_name: 王廷儒
        merged_into_person_id: null
    - claim:
        id: c_EDPxdg6geQFvFd1XdxJT6i
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hiFzB7vgXbRgcuocTEHnbi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCUa9P-DMXR2VSJqKkpeWg
          claim_id: c_EDPxdg6geQFvFd1XdxJT6i
          source_id: s_kw1Z6WvHjJ7FFi_ozPFwxv
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷梅 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷梅 之父／母。
          source:
            id: s_kw1Z6WvHjJ7FFi_ozPFwxv
            source_type: api_record
            title: 中国历代人物传记资料库：王廷梅（CBDB 279539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279539&o=json
            external_identifier: CBDB:279539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hiFzB7vgXbRgcuocTEHnbi
        status: active
        display_name: 王廷梅
        merged_into_person_id: null
    - claim:
        id: c_e3dUff6avdJyiRqirLm6Rl
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uDirupxgX4n5Uue7GWds8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1XzwG7_P6435gf-x_AeN-
          claim_id: c_e3dUff6avdJyiRqirLm6Rl
          source_id: s_aioNf64PJTnB7lVZXO4tZA
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷錄 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷錄 之父／母。
          source:
            id: s_aioNf64PJTnB7lVZXO4tZA
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錄（CBDB 279537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json
            external_identifier: CBDB:279537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uDirupxgX4n5Uue7GWds8u
        status: active
        display_name: 王廷錄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yh8-Tj5LfYJj-74pVyA9qR
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CGgacbGZFCBxdmoDnHfJ5t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3XbiXewH6Q9cgGIrCaYuXI
          claim_id: c_yh8-Tj5LfYJj-74pVyA9qR
          source_id: s_BVpjvZZIje8W7EH_PL7O3M
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BVpjvZZIje8W7EH_PL7O3M
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王濟妻)（CBDB 270231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270231&o=json
            external_identifier: CBDB:270231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CGgacbGZFCBxdmoDnHfJ5t
        status: active
        display_name: 汪氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_cCMwg2vNfsFXh6vHW7mZhX
        subject_person_id: p_uadUiUdJs2HHpEDqfmU928
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ab7KMqeHTCdZmDXEymNkiu
          claim_id: c_cCMwg2vNfsFXh6vHW7mZhX
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uadUiUdJs2HHpEDqfmU928
        status: active
        display_name: 王仲斌
        merged_into_person_id: null
    - claim:
        id: c_fiRs4LUfSdrKGF3SmLNOYP
        subject_person_id: p_MtM5ZgKmZYVFMBTAMHqT8e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ca1b5GNv21kmzkeWzCbOUW
          claim_id: c_fiRs4LUfSdrKGF3SmLNOYP
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MtM5ZgKmZYVFMBTAMHqT8e
        status: active
        display_name: 王思旻
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_gmq4V7lErwCzvI8QdlREct
        subject_person_id: p_4RKyBrxN2M8zWuVNpAHZBn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kjR9d6-NpliEFBOj-YYbPm
          claim_id: c_gmq4V7lErwCzvI8QdlREct
          source_id: s_LdDVn5qXiEBiNPKxNmGRKW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34667 王濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LdDVn5qXiEBiNPKxNmGRKW
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 270234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json
            external_identifier: CBDB:270234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RKyBrxN2M8zWuVNpAHZBn
        status: active
        display_name: 王璉
        merged_into_person_id: null
    - claim:
        id: c_9fV9MPEsiiXqbCooneeaao
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aEF2o7vcG8pL19kp3xYCN2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVqsADus3Exbr_mObRStki
          claim_id: c_9fV9MPEsiiXqbCooneeaao
          source_id: s_KLt9YiZ9wzRjbZR_ImT6ac
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34667 王濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KLt9YiZ9wzRjbZR_ImT6ac
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 270233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270233&o=json
            external_identifier: CBDB:270233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aEF2o7vcG8pL19kp3xYCN2
        status: active
        display_name: 王鳳
        merged_into_person_id: null
    - claim:
        id: c_KCyAYLz2pC_2WvcRPw1rfT
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j2uDVAJvNRLEZL4VuQR9KA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rXG64B6Tp1gJXfRLqZkyow
          claim_id: c_KCyAYLz2pC_2WvcRPw1rfT
          source_id: s_oM0L6GM7g6RZIWeB7iHoen
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34667 王濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oM0L6GM7g6RZIWeB7iHoen
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 270232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270232&o=json
            external_identifier: CBDB:270232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2uDVAJvNRLEZL4VuQR9KA
        status: active
        display_name: 王麟
        merged_into_person_id: null
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 34667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PGZtNCp6fX43UKKVunQyUd | 王文奎 | accepted |
| children | p_qLcC4SmUNJ1rkkQyeeqtKk | 王廷陳 | accepted |
| children | p_yJdXEyhNkYGEWdnouNB9Xu | 王廷瞻 | accepted |
| children | p_6WFPCBfjkFkdENUuMtErnW | 王廷器 | accepted |
| children | p_8G6efs8Dr7A2AKQB9Mr74k | 王廷儒 | accepted |
| children | p_JjZGqgWMgVAiSEuj3G7mwV | 王廷讚 | accepted |
| children | p_MPvLHtziNCGPCPEemK1JuV | 王廷楊 | accepted |
| children | p_Ncjpn7BNHUs4fdtcYyXYCR | 王廷槐 | accepted |
| children | p_SbU6HDNRZJcM1Xz6pm1G8C | 王廷詔 | accepted |
| children | p_TVYqoQ3gGR7yWV7C5141TK | 王廷遷 | accepted |
| children | p_bDTZa7DXJ6Rm9PFujJJ47a | 王廷第 | accepted |
| children | p_ccujF3iGEJ6vZ6y43wc5Tw | 王廷楫 | accepted |
| children | p_grJ3t8tA8YcD9PpHUc4YGd | 王廷儒 | accepted |
| children | p_hiFzB7vgXbRgcuocTEHnbi | 王廷梅 | accepted |
| children | p_uDirupxgX4n5Uue7GWds8u | 王廷錄 | accepted |
| spouses | p_CGgacbGZFCBxdmoDnHfJ5t | 汪氏 | accepted |
| ancestors | p_uadUiUdJs2HHpEDqfmU928 | 王仲斌 | accepted |
| ancestors | p_MtM5ZgKmZYVFMBTAMHqT8e | 王思旻 | accepted |
| other | p_4RKyBrxN2M8zWuVNpAHZBn | 王璉 | accepted |
| other | p_aEF2o7vcG8pL19kp3xYCN2 | 王鳳 | accepted |
| other | p_j2uDVAJvNRLEZL4VuQR9KA | 王麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王濟妻)（CBDB 270231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270231&o=json)
- [中国历代人物传记资料库：王鳳（CBDB 270233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270233&o=json)
- [中国历代人物传记资料库：王濟（CBDB 34667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json)
- [中国历代人物传记资料库：王璉（CBDB 270234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json)
- [中国历代人物传记资料库：王麟（CBDB 270232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270232&o=json)
- [中国历代人物传记资料库：王廷第（CBDB 325998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325998&o=json)
- [中国历代人物传记资料库：王廷槐（CBDB 279545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279545&o=json)
- [中国历代人物传记资料库：王廷楫（CBDB 279538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279538&o=json)
- [中国历代人物传记资料库：王廷錄（CBDB 279537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json)
- [中国历代人物传记资料库：王廷梅（CBDB 279539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279539&o=json)
- [中国历代人物传记资料库：王廷器（CBDB 279544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json)
- [中国历代人物传记资料库：王廷遷（CBDB 325995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325995&o=json)
- [中国历代人物传记资料库：王廷儒（CBDB 279543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json)
- [中国历代人物传记资料库：王廷儒（CBDB 325992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325992&o=json)
- [中国历代人物传记资料库：王廷楊（CBDB 325994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325994&o=json)
- [中国历代人物传记资料库：王廷讚（CBDB 279541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279541&o=json)
- [中国历代人物传记资料库：王廷詔（CBDB 279540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json)
