---
schema: wang-person/v1
id: p_2N77V679N67chKYe7DivHB
status: active
merged_into: null
display_name: 王槩
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rSQ816vKT6fKMPHF7uzoTt
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LZhJTX7P9kFjWAqwCoUTnH
          claim_id: c_rSQ816vKT6fKMPHF7uzoTt
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: CBDB:126810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126810）
          source: &a1
            id: s_B3XTLgN9zUiELnRumuLQTn
            source_type: api_record
            title: 中国历代人物传记资料库：王槩（CBDB 126810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json
            external_identifier: CBDB:126810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q8tJ4kqVjkQp2gomV3DS75
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1418年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mb7hcqu5eCwdQ3f1T6y9v
          claim_id: c_Q8tJ4kqVjkQp2gomV3DS75
          source_id: s_B3XTLgN9zUiELnRumuLQTn
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
        id: c_GvTvP6CFRGNn2pwsmPAsCQ
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1474年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1gsnArFBNHpH6bj1DWQjR
          claim_id: c_GvTvP6CFRGNn2pwsmPAsCQ
          source_id: s_B3XTLgN9zUiELnRumuLQTn
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
        id: c_7P4o9StGs2R3UXWyq7sDtm
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槩（1418年—1474年），明人物。籍贯廬陵，身份为法律專家，入仕進士，曾任按察使、大理寺卿、刑部郎中。（中国历代人物传记资料库 CBDB 126810）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G7taNpX6WZnpQxQAu7z_Up
          claim_id: c_7P4o9StGs2R3UXWyq7sDtm
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: CBDB:126810
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SXB8hJw8qrzX_48LD9Cid_
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2N77V679N67chKYe7DivHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4p1o7tZimDiNq8giCAoThU
          claim_id: c_SXB8hJw8qrzX_48LD9Cid_
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第二十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H7kYUAXL18KkgnTsd1b4rh
        status: active
        display_name: 王仲起
        merged_into_person_id: null
  children:
    - claim:
        id: c_NQnMJj5ZaJzs9qR-FkXWX9
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGwQmGOY3QRm1tvDcsTfI4
          claim_id: c_NQnMJj5ZaJzs9qR-FkXWX9
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: 江西通志，lgid=1197568：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eeT9SQ93RGpf2B6Bihu6TP
        status: active
        display_name: 王臣
        merged_into_person_id: null
    - claim:
        id: c_m8ZDXmKo_KG3OTETnuwkQk
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TY7MjXr4s5SC39efDYBfgC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7aFM-K7V6fv_81twyOaZMp
          claim_id: c_m8ZDXmKo_KG3OTETnuwkQk
          source_id: s_gT0CTtEd2aAVgcWlSX3YP-
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世選 与 王臣 为同胞（CBDB 记「兄」），王臣 之父／母即 王世選 之父／母。
          source:
            id: s_gT0CTtEd2aAVgcWlSX3YP-
            source_type: api_record
            title: 中国历代人物传记资料库：王世選（CBDB 243245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243245&o=json
            external_identifier: CBDB:243245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TY7MjXr4s5SC39efDYBfgC
        status: active
        display_name: 王世選
        merged_into_person_id: null
    - claim:
        id: c_eLBIvNafGS6f_jQzep2JGA
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cVXAZf35EZ1jSuNPUED9jR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZoiPUtC4qGt8JIjS5cEWmQ
          claim_id: c_eLBIvNafGS6f_jQzep2JGA
          source_id: s_K48UECCDA-0lItLwDGxw2k
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世用 与 王臣 为同胞（CBDB 记「兄」），王臣 之父／母即 王世用 之父／母。
          source:
            id: s_K48UECCDA-0lItLwDGxw2k
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 243246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json
            external_identifier: CBDB:243246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cVXAZf35EZ1jSuNPUED9jR
        status: active
        display_name: 王世用
        merged_into_person_id: null
    - claim:
        id: c_QMtTm1vGlNynYcBdtZh7b5
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hqqkT8oG6jaNFG2415Y6zw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7mG4gLhM_bakQMwmRy3T6
          claim_id: c_QMtTm1vGlNynYcBdtZh7b5
          source_id: s_dW_iBmkfUxeLrkB5NYR2qK
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世卿 与 王臣 为同胞（CBDB 记「兄」），王臣 之父／母即 王世卿 之父／母。
          source:
            id: s_dW_iBmkfUxeLrkB5NYR2qK
            source_type: api_record
            title: 中国历代人物传记资料库：王世卿（CBDB 243247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243247&o=json
            external_identifier: CBDB:243247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hqqkT8oG6jaNFG2415Y6zw
        status: active
        display_name: 王世卿
        merged_into_person_id: null
    - claim:
        id: c_kKMjwJPfwtc_cyqumSgYId
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pwNKXWHUKXAwmdBehWSMKM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvuG07sHAje36unGK2qyaa
          claim_id: c_kKMjwJPfwtc_cyqumSgYId
          source_id: s_-1daMuSJRsrvVBU8XB22a3
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世弼 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王世弼 之父／母。
          source:
            id: s_-1daMuSJRsrvVBU8XB22a3
            source_type: api_record
            title: 中国历代人物传记资料库：王世弼（CBDB 243243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243243&o=json
            external_identifier: CBDB:243243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pwNKXWHUKXAwmdBehWSMKM
        status: active
        display_name: 王世弼
        merged_into_person_id: null
    - claim:
        id: c_7FSNEsiZ5MsGPLxal5-2W_
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4ijWCDx3yMAGT9efG6AvN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_clUHAVuIIgU2ThdG_7rW9n
          claim_id: c_7FSNEsiZ5MsGPLxal5-2W_
          source_id: s_7OZSjczXGmGlvF_qVo2vl-
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世延 与 王臣 为同胞（CBDB 记「兄」），王臣 之父／母即 王世延 之父／母。
          source:
            id: s_7OZSjczXGmGlvF_qVo2vl-
            source_type: api_record
            title: 中国历代人物传记资料库：王世延（CBDB 243244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json
            external_identifier: CBDB:243244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r4ijWCDx3yMAGT9efG6AvN
        status: active
        display_name: 王世延
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OK1Up3RG9qVcrQYD1uBqfL
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PhwiSAd4kT2HNXYpZA54EL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jc2mcRoWhbCpJmq4wb4QZF
          claim_id: c_OK1Up3RG9qVcrQYD1uBqfL
          source_id: s_pWY4igE05CzBs-MFInzZrM
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第二十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pWY4igE05CzBs-MFInzZrM
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王概妻)（CBDB 237752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237752&o=json
            external_identifier: CBDB:237752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PhwiSAd4kT2HNXYpZA54EL
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_K51MPS3M3Hmnhv3ryoMtav
        subject_person_id: p_BMePZv32ALLP9B8K1qH7np
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2N77V679N67chKYe7DivHB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPRJ5FR5fsnt318Xe9oHOn
          claim_id: c_K51MPS3M3Hmnhv3ryoMtav
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第二十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BMePZv32ALLP9B8K1qH7np
        status: active
        display_name: 王維嶽
        merged_into_person_id: null
    - claim:
        id: c_hLccaMkmt-2dbbmsdEbFOd
        subject_person_id: p_CeEMAf35RSqrtMuTHChVh4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2N77V679N67chKYe7DivHB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKeq7Tz_pKgURaRMwg5eQ_
          claim_id: c_hLccaMkmt-2dbbmsdEbFOd
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第二十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CeEMAf35RSqrtMuTHChVh4
        status: active
        display_name: 王子善
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_GOXq0uwEH4n5GOm92uUcxT
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yShDGLbKnrGb_IhDH36qvx
          claim_id: c_GOXq0uwEH4n5GOm92uUcxT
          source_id: s_s2UFYgkRrlksRks0APk4Lq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s2UFYgkRrlksRks0APk4Lq
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 237757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json
            external_identifier: CBDB:237757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7mN7AeFFAa3arb9bQ1QBHw
        status: active
        display_name: 王同仁
        merged_into_person_id: null
    - claim:
        id: c_TD6dvZju5kTmGOFFAF21K5
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XxMa1C4KJrkyVMPMjdkQ4J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TH1ULv63Ny6uWbaIP0EBFM
          claim_id: c_TD6dvZju5kTmGOFFAF21K5
          source_id: s_AXhI2q1M_r-hICtsf7MrkM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AXhI2q1M_r-hICtsf7MrkM
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 237755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json
            external_identifier: CBDB:237755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XxMa1C4KJrkyVMPMjdkQ4J
        status: active
        display_name: 王同心
        merged_into_person_id: null
    - claim:
        id: c_VlVPREdkQW6TbrlgUBhwo5
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQMHr31FYDmDxffryye-Dn
          claim_id: c_VlVPREdkQW6TbrlgUBhwo5
          source_id: s_gUTYmzO2jgWqThLhEtffgD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gUTYmzO2jgWqThLhEtffgD
            source_type: api_record
            title: 中国历代人物传记资料库：王同求（CBDB 237754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json
            external_identifier: CBDB:237754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        status: active
        display_name: 王同求
        merged_into_person_id: null
    - claim:
        id: c_ze1pcrT50o2KqaDCCYacW0
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3Qm6GtW3M8NzyLSpEdc3p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHWcyBF9_FWyAMxYiLy6K8
          claim_id: c_ze1pcrT50o2KqaDCCYacW0
          source_id: s_sHR0m_2Kdo4H3P4cIvIfg7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sHR0m_2Kdo4H3P4cIvIfg7
            source_type: api_record
            title: 中国历代人物传记资料库：王同和（CBDB 237756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json
            external_identifier: CBDB:237756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3Qm6GtW3M8NzyLSpEdc3p
        status: active
        display_name: 王同和
        merged_into_person_id: null
---

# 王槩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槩 | accepted |
| birth.date | 1418年 | accepted |
| death.date | 1474年 | accepted |
| bio.summary | 王槩（1418年—1474年），明人物。籍贯廬陵，身份为法律專家，入仕進士，曾任按察使、大理寺卿、刑部郎中。（中国历代人物传记资料库 CBDB 126810） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7kYUAXL18KkgnTsd1b4rh | 王仲起 | accepted |
| children | p_eeT9SQ93RGpf2B6Bihu6TP | 王臣 | accepted |
| children | p_TY7MjXr4s5SC39efDYBfgC | 王世選 | accepted |
| children | p_cVXAZf35EZ1jSuNPUED9jR | 王世用 | accepted |
| children | p_hqqkT8oG6jaNFG2415Y6zw | 王世卿 | accepted |
| children | p_pwNKXWHUKXAwmdBehWSMKM | 王世弼 | accepted |
| children | p_r4ijWCDx3yMAGT9efG6AvN | 王世延 | accepted |
| spouses | p_PhwiSAd4kT2HNXYpZA54EL | 劉氏 | accepted |
| ancestors | p_BMePZv32ALLP9B8K1qH7np | 王維嶽 | accepted |
| ancestors | p_CeEMAf35RSqrtMuTHChVh4 | 王子善 | accepted |
| other | p_7mN7AeFFAa3arb9bQ1QBHw | 王同仁 | accepted |
| other | p_XxMa1C4KJrkyVMPMjdkQ4J | 王同心 | accepted |
| other | p_h7Y8CLJ9JCGiaQ5qFd8WSD | 王同求 | accepted |
| other | p_s3Qm6GtW3M8NzyLSpEdc3p | 王同和 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王概妻)（CBDB 237752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237752&o=json)
- [中国历代人物传记资料库：王槩（CBDB 126810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json)
- [中国历代人物传记资料库：王世弼（CBDB 243243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243243&o=json)
- [中国历代人物传记资料库：王世卿（CBDB 243247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243247&o=json)
- [中国历代人物传记资料库：王世選（CBDB 243245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243245&o=json)
- [中国历代人物传记资料库：王世延（CBDB 243244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json)
- [中国历代人物传记资料库：王世用（CBDB 243246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json)
- [中国历代人物传记资料库：王同和（CBDB 237756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json)
- [中国历代人物传记资料库：王同求（CBDB 237754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json)
- [中国历代人物传记资料库：王同仁（CBDB 237757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json)
- [中国历代人物传记资料库：王同心（CBDB 237755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json)
