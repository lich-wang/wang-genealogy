---
schema: wang-person/v1
id: p_ePUgH55QWsG6Hauqd4raHD
status: active
merged_into: null
display_name: 王文彪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nBn1R3cecGpYViPMSewfBV
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VAtW9guXQJ4Lrs51T3FgaH
          claim_id: c_nBn1R3cecGpYViPMSewfBV
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB:101100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101100）
          source: &a1
            id: s_g4VKr2D6htM499vC6zENon
            source_type: api_record
            title: 中国历代人物传记资料库：王文彪（CBDB 101100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json
            external_identifier: CBDB:101100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zpNCEBnDzV63pLYwh7sArV
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lv1ZQeD8hhfVGB9bdcdQYk
          claim_id: c_zpNCEBnDzV63pLYwh7sArV
          source_id: s_g4VKr2D6htM499vC6zENon
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
        id: c_DgdyZNMioxP6aKExH1mJbH
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1353年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zxgt6CgvputSB7NFBAkY95
          claim_id: c_DgdyZNMioxP6aKExH1mJbH
          source_id: s_g4VKr2D6htM499vC6zENon
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
        id: c_81F1TQektLHpMkDJP7mbs3
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttdw8iZdS2MgZ5dTS7BBH6
          claim_id: c_81F1TQektLHpMkDJP7mbs3
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j_pvMlxo6aoBo3pyi0Gt49
        subject_person_id: p_tgsYcGLBHirWiZHRoYiDdX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ePUgH55QWsG6Hauqd4raHD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSetPUQo2Yu1nYgmlf5ITX
          claim_id: c_j_pvMlxo6aoBo3pyi0Gt49
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（父 王庠皇 ⇄ 子 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_tgsYcGLBHirWiZHRoYiDdX
        status: active
        display_name: 王庠皇
        merged_into_person_id: null
  children:
    - claim:
        id: c_hFUeGWkCcUK3-UXFxILw1h
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8apBXsKKpeN6sQcjZ4PeyW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xgSM7b1p6NA0DF6gk9MrXb
          claim_id: c_hFUeGWkCcUK3-UXFxILw1h
          source_id: s_2SH4NB9ae1RHmzBzAkne3D
          stance: supports
          locator: CBDB 双向互证（父 王文彪 ⇄ 子 王建中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_2SH4NB9ae1RHmzBzAkne3D
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 437542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437542&o=json
            external_identifier: CBDB:437542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8apBXsKKpeN6sQcjZ4PeyW
        status: active
        display_name: 王建中
        merged_into_person_id: null
    - claim:
        id: c_GMNs5bRU1AkCjIzwVkiZyK
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F2Czyoo9AQEXZPZruPNCUL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OohHuMvzrddWDCJPbeHhnH
          claim_id: c_GMNs5bRU1AkCjIzwVkiZyK
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（子 王淵用 ⇄ 父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_F2Czyoo9AQEXZPZruPNCUL
        status: active
        display_name: 王淵用
        merged_into_person_id: null
    - claim:
        id: c_Jz55tGaqqGgNypYmziorzx
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FzH7EDCutEmYdBJqLD6PCS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SvriXJs1ZuVjtzzv_-slKK
          claim_id: c_Jz55tGaqqGgNypYmziorzx
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（子 王止善 ⇄ 父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_FzH7EDCutEmYdBJqLD6PCS
        status: active
        display_name: 王止善
        merged_into_person_id: null
    - claim:
        id: c_BsypzhWTQrvVDJn6qlclxQ
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mjsTtKm7Gao8BjF3oH2t8q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPpbaySMxs6jlGXDUJVp9N
          claim_id: c_BsypzhWTQrvVDJn6qlclxQ
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（子 王壽康 ⇄ 父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mjsTtKm7Gao8BjF3oH2t8q
        status: active
        display_name: 王壽康
        merged_into_person_id: null
    - claim:
        id: c_cOXkfL3XzyIYeWMBrRz_Yn
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2YC23aFAoQzB4MNQsLmfsH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IfcjH2d-z7JOrK81KSlAfR
          claim_id: c_cOXkfL3XzyIYeWMBrRz_Yn
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（子 王尚雄 ⇄ 父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_2YC23aFAoQzB4MNQsLmfsH
        status: active
        display_name: 王尚雄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1OcEE4UfCvo3WTbCJDobAB
        subject_person_id: p_sxts7ZULvN5zK4kd5zfLWf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ePUgH55QWsG6Hauqd4raHD
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JQhm1U4Z79krxM820aLlU_
          claim_id: c_1OcEE4UfCvo3WTbCJDobAB
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王汾 ⇄ 玄孫;四世孫 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sxts7ZULvN5zK4kd5zfLWf
        status: active
        display_name: 王汾
        merged_into_person_id: null
    - claim:
        id: c_kEKmvCkwWx_zC_OB2M8-iE
        subject_person_id: p_3E6CLd1DCJsVnmutKF1BFn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ePUgH55QWsG6Hauqd4raHD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N3XLS_KwJ1CD_hSPLowFes
          claim_id: c_kEKmvCkwWx_zC_OB2M8-iE
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（曾祖 王杓 ⇄ 曾孫; 重孫 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_3E6CLd1DCJsVnmutKF1BFn
        status: active
        display_name: 王杓
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_oG-Xq0ah3ix4CcqaDz_geo
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1JRUmvaU3Up47BAzPVpNrj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aed0SU-bdycDvezSMUDouW
          claim_id: c_oG-Xq0ah3ix4CcqaDz_geo
          source_id: s_HMs7UiLcgX3uTkQZAW6YhE
          stance: supports
          locator: 全元文，588：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HMs7UiLcgX3uTkQZAW6YhE
            source_type: api_record
            title: 中国历代人物传记资料库：王廩（CBDB 437554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437554&o=json
            external_identifier: CBDB:437554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1JRUmvaU3Up47BAzPVpNrj
        status: active
        display_name: 王廩
        merged_into_person_id: null
    - claim:
        id: c_bt3IdK359RmDlS1i9Aopze
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7HBoToLM8roSc5SmSpWW1N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jGk6BO1BnpS10DwUJQOz-
          claim_id: c_bt3IdK359RmDlS1i9Aopze
          source_id: s_PXutwnS1Y33rAnEMkPXJKm
          stance: supports
          locator: CBDB 双向互证（祖父 王文彪 ⇄ 孫 王積）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_PXutwnS1Y33rAnEMkPXJKm
            source_type: api_record
            title: 中国历代人物传记资料库：王積（CBDB 437555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437555&o=json
            external_identifier: CBDB:437555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7HBoToLM8roSc5SmSpWW1N
        status: active
        display_name: 王積
        merged_into_person_id: null
    - claim:
        id: c_n4_esHLJ02hHnBIM_e6maI
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CMmCW6C1D3Ha45VVZdshB1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJmQlDOMye0e8l_zaADI6A
          claim_id: c_n4_esHLJ02hHnBIM_e6maI
          source_id: s_Nr29ZGi7ZbjLeYSg5EHoAJ
          stance: supports
          locator: CBDB 双向互证（祖父 王文彪 ⇄ 孫 王秩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Nr29ZGi7ZbjLeYSg5EHoAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 437560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437560&o=json
            external_identifier: CBDB:437560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CMmCW6C1D3Ha45VVZdshB1
        status: active
        display_name: 王秩
        merged_into_person_id: null
    - claim:
        id: c_elfibPuhyZ_kqYeo_ZGsCT
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E9rrunuDKTCYo8FYGgDDhx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5h06NNq9613Sefmp6T26Ok
          claim_id: c_elfibPuhyZ_kqYeo_ZGsCT
          source_id: s_LWVB1HdXfxi96uud4AtkR2
          stance: supports
          locator: CBDB 双向互证（祖父 王文彪 ⇄ 孫 王稠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_LWVB1HdXfxi96uud4AtkR2
            source_type: api_record
            title: 中国历代人物传记资料库：王稠（CBDB 437551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437551&o=json
            external_identifier: CBDB:437551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E9rrunuDKTCYo8FYGgDDhx
        status: active
        display_name: 王稠
        merged_into_person_id: null
    - claim:
        id: c_13UpzVrKXtUMqW0XjNsjoH
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mkdVEcRbY1cWSkG6iCtNFu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6sAzrIL5OTCQtA-J_3sR2N
          claim_id: c_13UpzVrKXtUMqW0XjNsjoH
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穡 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mkdVEcRbY1cWSkG6iCtNFu
        status: active
        display_name: 王穡
        merged_into_person_id: null
    - claim:
        id: c_q0rrG9yRdWjNFfPOy6sAuL
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_za5axqm4eyRLH3mLXhKNpg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6NG-ShjAXMs2FaCTy99-GU
          claim_id: c_q0rrG9yRdWjNFfPOy6sAuL
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穆 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_za5axqm4eyRLH3mLXhKNpg
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_L4qfGwtjek8dD0T7nPbu7K
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KLv4bSm3zG7oPpQiUvon4f
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MayKZNjxXSj3yv0sZvwImh
          claim_id: c_L4qfGwtjek8dD0T7nPbu7K
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王秉 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KLv4bSm3zG7oPpQiUvon4f
        status: active
        display_name: 王秉
        merged_into_person_id: null
    - claim:
        id: c_HsLpTbRS6PYq982OeneRmU
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kxp7oCGsuyB3MFSLoM3v1v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CO8xiYNi9TeYsFVkEcPpkK
          claim_id: c_HsLpTbRS6PYq982OeneRmU
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穀 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Kxp7oCGsuyB3MFSLoM3v1v
        status: active
        display_name: 王穀
        merged_into_person_id: null
    - claim:
        id: c_sXFvIKmacx4ssTF1kfeRJw
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JkuATNSEdsAx9QTDd6USVk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ShPnkqQtRbWOzVbeyvTt93
          claim_id: c_sXFvIKmacx4ssTF1kfeRJw
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穎 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_JkuATNSEdsAx9QTDd6USVk
        status: active
        display_name: 王穎
        merged_into_person_id: null
    - claim:
        id: c_mQI4I3UFgi1sSUR0GG0Shk
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cE1EfM18g72ZvQ83JNTByX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bs3He4B6nIjrF0ZbJ-I0BX
          claim_id: c_mQI4I3UFgi1sSUR0GG0Shk
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穥 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_cE1EfM18g72ZvQ83JNTByX
        status: active
        display_name: 王穥
        merged_into_person_id: null
    - claim:
        id: c_O9MjLTq2V4vI924gmHw87n
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ES9yto8o9thJHmpD6cev3a
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vW0Vd5jKbxLZAukGaoZYQ
          claim_id: c_O9MjLTq2V4vI924gmHw87n
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穉 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ES9yto8o9thJHmpD6cev3a
        status: active
        display_name: 王穉
        merged_into_person_id: null
    - claim:
        id: c_aNeY2Xajdn64Boe8TQLQ7a
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HMbdRN6VKAm7PhXaN3QDFj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E98iDYClZOwvavITkhpT9b
          claim_id: c_aNeY2Xajdn64Boe8TQLQ7a
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穟 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_HMbdRN6VKAm7PhXaN3QDFj
        status: active
        display_name: 王穟
        merged_into_person_id: null
    - claim:
        id: c_rVDQmga3dlyvRBh0cUcq_1
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kuDNsgwHDLw5cYG53Xs3Uo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5NuatzNYfgDpuDv-LlSXE
          claim_id: c_rVDQmga3dlyvRBh0cUcq_1
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穜 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kuDNsgwHDLw5cYG53Xs3Uo
        status: active
        display_name: 王穜
        merged_into_person_id: null
    - claim:
        id: c_6V8plVa3KDJuf_6dlR7Gem
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gEmCkzoWKQTHTvBpDQZ7o9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1hL9pcoqqEW37jyL3yZACF
          claim_id: c_6V8plVa3KDJuf_6dlR7Gem
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王程 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_gEmCkzoWKQTHTvBpDQZ7o9
        status: active
        display_name: 王程
        merged_into_person_id: null
  other: []
---

# 王文彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文彪 | accepted |
| birth.date | 1278年 | accepted |
| death.date | 1353年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tgsYcGLBHirWiZHRoYiDdX | 王庠皇 | accepted |
| children | p_8apBXsKKpeN6sQcjZ4PeyW | 王建中 | accepted |
| children | p_F2Czyoo9AQEXZPZruPNCUL | 王淵用 | accepted |
| children | p_FzH7EDCutEmYdBJqLD6PCS | 王止善 | accepted |
| children | p_mjsTtKm7Gao8BjF3oH2t8q | 王壽康 | accepted |
| children | p_2YC23aFAoQzB4MNQsLmfsH | 王尚雄 | accepted |
| ancestors | p_sxts7ZULvN5zK4kd5zfLWf | 王汾 | accepted |
| ancestors | p_3E6CLd1DCJsVnmutKF1BFn | 王杓 | accepted |
| descendants | p_1JRUmvaU3Up47BAzPVpNrj | 王廩 | accepted |
| descendants | p_7HBoToLM8roSc5SmSpWW1N | 王積 | accepted |
| descendants | p_CMmCW6C1D3Ha45VVZdshB1 | 王秩 | accepted |
| descendants | p_E9rrunuDKTCYo8FYGgDDhx | 王稠 | accepted |
| descendants | p_mkdVEcRbY1cWSkG6iCtNFu | 王穡 | accepted |
| descendants | p_za5axqm4eyRLH3mLXhKNpg | 王穆 | accepted |
| descendants | p_KLv4bSm3zG7oPpQiUvon4f | 王秉 | accepted |
| descendants | p_Kxp7oCGsuyB3MFSLoM3v1v | 王穀 | accepted |
| descendants | p_JkuATNSEdsAx9QTDd6USVk | 王穎 | accepted |
| descendants | p_cE1EfM18g72ZvQ83JNTByX | 王穥 | accepted |
| descendants | p_ES9yto8o9thJHmpD6cev3a | 王穉 | accepted |
| descendants | p_HMbdRN6VKAm7PhXaN3QDFj | 王穟 | accepted |
| descendants | p_kuDNsgwHDLw5cYG53Xs3Uo | 王穜 | accepted |
| descendants | p_gEmCkzoWKQTHTvBpDQZ7o9 | 王程 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稠（CBDB 437551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437551&o=json)
- [中国历代人物传记资料库：王積（CBDB 437555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437555&o=json)
- [中国历代人物传记资料库：王建中（CBDB 437542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437542&o=json)
- [中国历代人物传记资料库：王廩（CBDB 437554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437554&o=json)
- [中国历代人物传记资料库：王文彪（CBDB 101100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json)
- [中国历代人物传记资料库：王秩（CBDB 437560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437560&o=json)
