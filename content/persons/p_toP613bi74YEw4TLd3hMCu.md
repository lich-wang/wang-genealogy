---
schema: wang-person/v1
id: p_toP613bi74YEw4TLd3hMCu
status: active
merged_into: null
display_name: 王遷
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vzB6qGu37JqTu3zpfx4cLZ
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jE65hAa6tkAwbHipCo9KQu
          claim_id: c_vzB6qGu37JqTu3zpfx4cLZ
          source_id: s_JZPgKAJYz37U9tJtuccbGu
          stance: supports
          locator: CBDB:306145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306145）
          source: &a1
            id: s_JZPgKAJYz37U9tJtuccbGu
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 306145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306145&o=json
            external_identifier: CBDB:306145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6K5rP8qffbafCLi82xjM7U
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遷，明人物。嘉靖二十三年進士，籍贯江都，入仕監生。（中国历代人物传记资料库 CBDB 306145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ASgACB0uT7tZNQwWT5p2n4
          claim_id: c_6K5rP8qffbafCLi82xjM7U
          source_id: s_JZPgKAJYz37U9tJtuccbGu
          stance: supports
          locator: CBDB:306145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jIJJi_4bDWy8vZiPOLhbXI
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0J9i011CMDkAnwTGupM20c
          claim_id: c_jIJJi_4bDWy8vZiPOLhbXI
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mQ2Mbm44EcchNqrBaH456s
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 203535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json
            external_identifier: CBDB:203535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
    - claim:
        id: c_eWn_tHWk0M0wAAeVq3OGKy
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_287KfFj8Ceh8MeB7L3oUPP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OK4ztsQK-j4VtsNdx2tm63
          claim_id: c_eWn_tHWk0M0wAAeVq3OGKy
          source_id: s_OAmle8spNivrOKYGTvJ3GC
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一言 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一言 之父／母。
          source:
            id: s_OAmle8spNivrOKYGTvJ3GC
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 306152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306152&o=json
            external_identifier: CBDB:306152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_287KfFj8Ceh8MeB7L3oUPP
        status: active
        display_name: 王一言
        merged_into_person_id: null
    - claim:
        id: c_96vBPdV-Vn3nH1op4o1TbD
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7hdyxt8972xgL4C51Kr76e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1QEgZ4XPHMZOR1hlI1Gfa
          claim_id: c_96vBPdV-Vn3nH1op4o1TbD
          source_id: s_f8ieQfxZKb2ZO87sE7pLle
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一心 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一心 之父／母。
          source:
            id: s_f8ieQfxZKb2ZO87sE7pLle
            source_type: api_record
            title: 中国历代人物传记资料库：王一心（CBDB 306155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306155&o=json
            external_identifier: CBDB:306155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7hdyxt8972xgL4C51Kr76e
        status: active
        display_name: 王一心
        merged_into_person_id: null
    - claim:
        id: c_BOKmn3hqwww9CEJ--YdFz5
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AdnBkjWwYgpjvtqTRJbHqK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ym1pNGTO8M2wXYZnnMENG
          claim_id: c_BOKmn3hqwww9CEJ--YdFz5
          source_id: s_HHofTMNGp3DP7DV6Z4UILW
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一恩 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一恩 之父／母。
          source:
            id: s_HHofTMNGp3DP7DV6Z4UILW
            source_type: api_record
            title: 中国历代人物传记资料库：王一恩（CBDB 306157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json
            external_identifier: CBDB:306157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AdnBkjWwYgpjvtqTRJbHqK
        status: active
        display_name: 王一恩
        merged_into_person_id: null
    - claim:
        id: c_2QVLigOQpK0xV1-IPATDlY
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G8qWhYWcav95VJFrwVwwvL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GH7PQaZnsYio-hZUmNobAI
          claim_id: c_2QVLigOQpK0xV1-IPATDlY
          source_id: s_fJRbWmi-bstaG5Ifo01blZ
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一儒 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一儒 之父／母。
          source:
            id: s_fJRbWmi-bstaG5Ifo01blZ
            source_type: api_record
            title: 中国历代人物传记资料库：王一儒（CBDB 306158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306158&o=json
            external_identifier: CBDB:306158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G8qWhYWcav95VJFrwVwwvL
        status: active
        display_name: 王一儒
        merged_into_person_id: null
    - claim:
        id: c_qwxMLsCAhZJRHioq4VupmP
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GGrgjmoCpG8khHk1WntQx4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6CEC3Ndf4gVfFRC3c1Wv2y
          claim_id: c_qwxMLsCAhZJRHioq4VupmP
          source_id: s_EbQzEwH1On6Utb0L6XjwUV
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一桂 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一桂 之父／母。
          source:
            id: s_EbQzEwH1On6Utb0L6XjwUV
            source_type: api_record
            title: 中国历代人物传记资料库：王一桂（CBDB 306156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306156&o=json
            external_identifier: CBDB:306156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGrgjmoCpG8khHk1WntQx4
        status: active
        display_name: 王一桂
        merged_into_person_id: null
    - claim:
        id: c_mn78ZYMH_6ZDEHFRujwp7J
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y6UKeFWCxXm9pNUWMNvEbf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4OYxe-d4V6qgxbBRuCpNiP
          claim_id: c_mn78ZYMH_6ZDEHFRujwp7J
          source_id: s_UA--5X4gT8VGGFKWuzarS5
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一治 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一治 之父／母。
          source:
            id: s_UA--5X4gT8VGGFKWuzarS5
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 306163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306163&o=json
            external_identifier: CBDB:306163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y6UKeFWCxXm9pNUWMNvEbf
        status: active
        display_name: 王一治
        merged_into_person_id: null
    - claim:
        id: c_4uyWjm2Qq8tvOuinSGoHDp
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCY43oapotvmJRx1286FUr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_9Pma5iI1PGsOw2uwRwgk
          claim_id: c_4uyWjm2Qq8tvOuinSGoHDp
          source_id: s_o6OE2ZF_ZULl-17IYFfmuZ
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一夔 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一夔 之父／母。
          source:
            id: s_o6OE2ZF_ZULl-17IYFfmuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王一夔（CBDB 306153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306153&o=json
            external_identifier: CBDB:306153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cCY43oapotvmJRx1286FUr
        status: active
        display_name: 王一夔
        merged_into_person_id: null
    - claim:
        id: c_Gkc_QlmBHM8aaqhf4FpS0Y
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-EMkUdjXhUnHdkB7FpKAP
          claim_id: c_Gkc_QlmBHM8aaqhf4FpS0Y
          source_id: s__QU12oxhUJ4y7zjD_akKjo
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一德 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一德 之父／母。
          source:
            id: s__QU12oxhUJ4y7zjD_akKjo
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 306150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json
            external_identifier: CBDB:306150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jMQq3YUY1rS9x8GMhcsfGD
        status: active
        display_name: 王一德
        merged_into_person_id: null
    - claim:
        id: c_7LiPZadEhqinlFJMIi25Jo
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kgkckdjSCfP3767FgQpEeb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EUQmQM9M7cFYplIvqWxuua
          claim_id: c_7LiPZadEhqinlFJMIi25Jo
          source_id: s_76FNDukl-ALF3xjq92bnhw
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一恭 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一恭 之父／母。
          source:
            id: s_76FNDukl-ALF3xjq92bnhw
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 306154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json
            external_identifier: CBDB:306154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kgkckdjSCfP3767FgQpEeb
        status: active
        display_name: 王一恭
        merged_into_person_id: null
    - claim:
        id: c_VrK7tX_Dwodw6BUXyOdEgN
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mbgEqEMZcw8hcr1HznBD6o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6cx18jcWx_DJGPq-E7GqhK
          claim_id: c_VrK7tX_Dwodw6BUXyOdEgN
          source_id: s_hGh8nCufhSU3d2OMhnG9aD
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一舉 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一舉 之父／母。
          source:
            id: s_hGh8nCufhSU3d2OMhnG9aD
            source_type: api_record
            title: 中国历代人物传记资料库：王一舉（CBDB 306159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306159&o=json
            external_identifier: CBDB:306159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mbgEqEMZcw8hcr1HznBD6o
        status: active
        display_name: 王一舉
        merged_into_person_id: null
    - claim:
        id: c_D7wGv8veto26rMqhla4zpj
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQicTWdNR9GLjPd5vmTkRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s3_hxJk3OZJKO8hD9LILiq
          claim_id: c_D7wGv8veto26rMqhla4zpj
          source_id: s_nwwsWLyzCfE7QSJ3U99Q_V
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一貞 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一貞 之父／母。
          source:
            id: s_nwwsWLyzCfE7QSJ3U99Q_V
            source_type: api_record
            title: 中国历代人物传记资料库：王一貞（CBDB 306160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json
            external_identifier: CBDB:306160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nQicTWdNR9GLjPd5vmTkRA
        status: active
        display_name: 王一貞
        merged_into_person_id: null
    - claim:
        id: c_hbcHzwxMmZ_I2YvPpzFbPT
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rAy6BSNeedf4P5cQWT4vg2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vY47widv20sLGgJg5cZOQk
          claim_id: c_hbcHzwxMmZ_I2YvPpzFbPT
          source_id: s_x1Cq4xjToFDzwFxa4HxjpR
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一方 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一方 之父／母。
          source:
            id: s_x1Cq4xjToFDzwFxa4HxjpR
            source_type: api_record
            title: 中国历代人物传记资料库：王一方（CBDB 306161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306161&o=json
            external_identifier: CBDB:306161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rAy6BSNeedf4P5cQWT4vg2
        status: active
        display_name: 王一方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遷 | accepted |
| bio.summary | 王遷，明人物。嘉靖二十三年進士，籍贯江都，入仕監生。（中国历代人物传记资料库 CBDB 306145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |
| children | p_287KfFj8Ceh8MeB7L3oUPP | 王一言 | accepted |
| children | p_7hdyxt8972xgL4C51Kr76e | 王一心 | accepted |
| children | p_AdnBkjWwYgpjvtqTRJbHqK | 王一恩 | accepted |
| children | p_G8qWhYWcav95VJFrwVwwvL | 王一儒 | accepted |
| children | p_GGrgjmoCpG8khHk1WntQx4 | 王一桂 | accepted |
| children | p_Y6UKeFWCxXm9pNUWMNvEbf | 王一治 | accepted |
| children | p_cCY43oapotvmJRx1286FUr | 王一夔 | accepted |
| children | p_jMQq3YUY1rS9x8GMhcsfGD | 王一德 | accepted |
| children | p_kgkckdjSCfP3767FgQpEeb | 王一恭 | accepted |
| children | p_mbgEqEMZcw8hcr1HznBD6o | 王一舉 | accepted |
| children | p_nQicTWdNR9GLjPd5vmTkRA | 王一貞 | accepted |
| children | p_rAy6BSNeedf4P5cQWT4vg2 | 王一方 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遷（CBDB 306145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306145&o=json)
- [中国历代人物传记资料库：王一德（CBDB 306150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json)
- [中国历代人物传记资料库：王一恩（CBDB 306157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json)
- [中国历代人物传记资料库：王一方（CBDB 306161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306161&o=json)
- [中国历代人物传记资料库：王一恭（CBDB 306154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json)
- [中国历代人物传记资料库：王一桂（CBDB 306156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306156&o=json)
- [中国历代人物传记资料库：王一舉（CBDB 306159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306159&o=json)
- [中国历代人物传记资料库：王一夔（CBDB 306153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306153&o=json)
- [中国历代人物传记资料库：王一儒（CBDB 306158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306158&o=json)
- [中国历代人物传记资料库：王一心（CBDB 306155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306155&o=json)
- [中国历代人物传记资料库：王一言（CBDB 306152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306152&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 203535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json)
- [中国历代人物传记资料库：王一貞（CBDB 306160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json)
- [中国历代人物传记资料库：王一治（CBDB 306163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306163&o=json)
