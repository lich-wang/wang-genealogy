---
schema: wang-person/v1
id: p_viaM6m196hS8EVYS6L8gg8
status: active
merged_into: null
display_name: 王宣化
cbdb_id: 205636
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Jp5gPmMCvNASjWBWp3hDs
        subject_person_id: p_viaM6m196hS8EVYS6L8gg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣化（生于1535年），明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 205636）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4DI8tHq--ahJHUSoKbWY1p
          claim_id: c_7Jp5gPmMCvNASjWBWp3hDs
          source_id: s_3Py7G31HfcSzJAysw32J6Y
          stance: supports
          locator: CBDB:205636
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3Py7G31HfcSzJAysw32J6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣化（CBDB 205636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205636&o=json
            external_identifier: CBDB:205636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yDWc5bfev2y45xLcFeY86C
        subject_person_id: p_viaM6m196hS8EVYS6L8gg8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1535-01-01
            latest: 1535-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HPGHiKG5255BbcTF1EDXuL
          claim_id: c_yDWc5bfev2y45xLcFeY86C
          source_id: s_3Py7G31HfcSzJAysw32J6Y
          stance: supports
          locator: CBDB:205636
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1535
          source:
            id: s_3Py7G31HfcSzJAysw32J6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王宣化（CBDB 205636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205636&o=json
            external_identifier: CBDB:205636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LNDqXLm6LirjFBnjX3JwF7
        subject_person_id: p_viaM6m196hS8EVYS6L8gg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fvHY8rrgE6WZaCU1McKw4h
          claim_id: c_LNDqXLm6LirjFBnjX3JwF7
          source_id: s_3Py7G31HfcSzJAysw32J6Y
          stance: supports
          locator: CBDB:205636
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1535
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_99crtNrT2UbTVX9pUi1G07
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huZLz-wVMycE4IhqPGd_SN
          claim_id: c_99crtNrT2UbTVX9pUi1G07
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZEzLzBt8XxPVyNeRGY1FvK
            source_type: api_record
            title: 中国历代人物传记资料库：王士逵（CBDB 336303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json
            external_identifier: CBDB:336303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3NLrzrSSHKzjmRv78pJAPK
        status: active
        display_name: 王士逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fJeR5aGh2d3LeGjvMbNMni
        subject_person_id: p_EtyR6xHEv72189qSFKHFEe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTxQ9ldH04ylPkjBkUSZJ6
          claim_id: c_fJeR5aGh2d3LeGjvMbNMni
          source_id: s_GM1H3Ci6GEbStUBaCd68o1
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GM1H3Ci6GEbStUBaCd68o1
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 336301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336301&o=json
            external_identifier: CBDB:336301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EtyR6xHEv72189qSFKHFEe
        status: active
        display_name: 王悅
        merged_into_person_id: null
    - claim:
        id: c_WaJEfwslBLuHNC9LL1h0S9
        subject_person_id: p_yLx6R2Cr3giQeKiH6Z4SsW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S_LZOmSaTO0bst2XDaSc3m
          claim_id: c_WaJEfwslBLuHNC9LL1h0S9
          source_id: s_awp23GQCvHVAdn4boEMZNZ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_awp23GQCvHVAdn4boEMZNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 336302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336302&o=json
            external_identifier: CBDB:336302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yLx6R2Cr3giQeKiH6Z4SsW
        status: active
        display_name: 王賓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_waNBs1hg4QNZW6C9kOl6rc
        subject_person_id: p_6J8oSnKSNtHfh1yzZiK5kg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2g-uQkMGyS47OIB-2-eKWJ
          claim_id: c_waNBs1hg4QNZW6C9kOl6rc
          source_id: s_s3Qb7CddeBisg38ZHI2lp3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s3Qb7CddeBisg38ZHI2lp3
            source_type: api_record
            title: 中国历代人物传记资料库：王德化（CBDB 336315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336315&o=json
            external_identifier: CBDB:336315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6J8oSnKSNtHfh1yzZiK5kg
        status: active
        display_name: 王德化
        merged_into_person_id: null
    - claim:
        id: c_yr0Mb44P64hgPGY_DJb3Bl
        subject_person_id: p_73pZsW4xoAzx28W5LWhaP9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W38eSX3hopfUfrHpoz3yY-
          claim_id: c_yr0Mb44P64hgPGY_DJb3Bl
          source_id: s_KvEmS9bBxRW1OZo97BiHC_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KvEmS9bBxRW1OZo97BiHC_
            source_type: api_record
            title: 中国历代人物传记资料库：王雨化（CBDB 336313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336313&o=json
            external_identifier: CBDB:336313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_73pZsW4xoAzx28W5LWhaP9
        status: active
        display_name: 王雨化
        merged_into_person_id: null
    - claim:
        id: c_Yb64q1IVG19QjEkjoDbgA1
        subject_person_id: p_CJhV3iHxp58rQ5FFcEEMAN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KVq3xSWPhMJeWEyNbSmM-c
          claim_id: c_Yb64q1IVG19QjEkjoDbgA1
          source_id: s_Ztm-UwutIwop01Ax1EhnN4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ztm-UwutIwop01Ax1EhnN4
            source_type: api_record
            title: 中国历代人物传记资料库：王替化（CBDB 336311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336311&o=json
            external_identifier: CBDB:336311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CJhV3iHxp58rQ5FFcEEMAN
        status: active
        display_name: 王替化
        merged_into_person_id: null
    - claim:
        id: c_txDkmpqLyNt6UMYWcCURk7
        subject_person_id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxWLAmO87SaEUVjWteBr7s
          claim_id: c_txDkmpqLyNt6UMYWcCURk7
          source_id: s_sr1UW7T3k4G9_tjT6yWuTz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sr1UW7T3k4G9_tjT6yWuTz
            source_type: api_record
            title: 中国历代人物传记资料库：王如化（CBDB 336308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json
            external_identifier: CBDB:336308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        status: active
        display_name: 王如化
        merged_into_person_id: null
    - claim:
        id: c_3quC6gnJ3EBFClFcGEyodR
        subject_person_id: p_K8N3JYXyV4KQhFBG5Yeqz6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DpE2VEkKmRTnIG8v0hosOR
          claim_id: c_3quC6gnJ3EBFClFcGEyodR
          source_id: s_lYSmb8PdXpTOf95CgFTBEH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lYSmb8PdXpTOf95CgFTBEH
            source_type: api_record
            title: 中国历代人物传记资料库：王推化（CBDB 336306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json
            external_identifier: CBDB:336306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K8N3JYXyV4KQhFBG5Yeqz6
        status: active
        display_name: 王推化
        merged_into_person_id: null
    - claim:
        id: c_Opu0y3zFrcd0FwfGDl6IFP
        subject_person_id: p_WAAAqa4AXCz8dRLVRMAbmW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huYw1UWH24o3qNL_V8hrFs
          claim_id: c_Opu0y3zFrcd0FwfGDl6IFP
          source_id: s_p6dwuFTvN4DIoJ8mkf4ayW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p6dwuFTvN4DIoJ8mkf4ayW
            source_type: api_record
            title: 中国历代人物传记资料库：王運化（CBDB 336312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json
            external_identifier: CBDB:336312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WAAAqa4AXCz8dRLVRMAbmW
        status: active
        display_name: 王運化
        merged_into_person_id: null
    - claim:
        id: c_Q4aYq_g4kr4L1n05vRsQdu
        subject_person_id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcApLL6uaXzfpe8IUehYzS
          claim_id: c_Q4aYq_g4kr4L1n05vRsQdu
          source_id: s_IdJzQ0heBhdhS4tjFWPMtd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IdJzQ0heBhdhS4tjFWPMtd
            source_type: api_record
            title: 中国历代人物传记资料库：王永化（CBDB 336314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json
            external_identifier: CBDB:336314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        status: active
        display_name: 王永化
        merged_into_person_id: null
    - claim:
        id: c_l8CYjpJirs5xWt2Oe01Gn7
        subject_person_id: p_nCrxFgDnWbo6QZrG4H7Ki3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mUUeWNaCy5jN5wBlkchH2x
          claim_id: c_l8CYjpJirs5xWt2Oe01Gn7
          source_id: s_kbB53MPq8_Wqy8ThPgGagI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kbB53MPq8_Wqy8ThPgGagI
            source_type: api_record
            title: 中国历代人物传记资料库：王孚化（CBDB 336307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336307&o=json
            external_identifier: CBDB:336307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nCrxFgDnWbo6QZrG4H7Ki3
        status: active
        display_name: 王孚化
        merged_into_person_id: null
    - claim:
        id: c_nrba2dfSxjkWMMNaAfugI1
        subject_person_id: p_ps6PQC3K74XifXLFgCnEzU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hNIFyTQve7Co9V-nwy1cpV
          claim_id: c_nrba2dfSxjkWMMNaAfugI1
          source_id: s_MCvSzGpCcSLGyrnhuQuDMN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MCvSzGpCcSLGyrnhuQuDMN
            source_type: api_record
            title: 中国历代人物传记资料库：王觀化（CBDB 336309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336309&o=json
            external_identifier: CBDB:336309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ps6PQC3K74XifXLFgCnEzU
        status: active
        display_name: 王觀化
        merged_into_person_id: null
---

# 王宣化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宣化（生于1535年），明人物。明清進士進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 205636） | accepted |
| birth.date | 1535年 | accepted |
| name.primary | 王宣化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NLrzrSSHKzjmRv78pJAPK | 王士逵 | accepted |
| ancestors | p_EtyR6xHEv72189qSFKHFEe | 王悅 | accepted |
| ancestors | p_yLx6R2Cr3giQeKiH6Z4SsW | 王賓 | accepted |
| other | p_6J8oSnKSNtHfh1yzZiK5kg | 王德化 | accepted |
| other | p_73pZsW4xoAzx28W5LWhaP9 | 王雨化 | accepted |
| other | p_CJhV3iHxp58rQ5FFcEEMAN | 王替化 | accepted |
| other | p_DNwgA2Ggo7xNy7LzH6H4Ug | 王如化 | accepted |
| other | p_K8N3JYXyV4KQhFBG5Yeqz6 | 王推化 | accepted |
| other | p_WAAAqa4AXCz8dRLVRMAbmW | 王運化 | accepted |
| other | p_Z7ZY6f1BLeHfACq1Q6k7Y7 | 王永化 | accepted |
| other | p_nCrxFgDnWbo6QZrG4H7Ki3 | 王孚化 | accepted |
| other | p_ps6PQC3K74XifXLFgCnEzU | 王觀化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 336302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336302&o=json)
- [中国历代人物传记资料库：王德化（CBDB 336315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336315&o=json)
- [中国历代人物传记资料库：王孚化（CBDB 336307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336307&o=json)
- [中国历代人物传记资料库：王觀化（CBDB 336309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336309&o=json)
- [中国历代人物传记资料库：王如化（CBDB 336308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json)
- [中国历代人物传记资料库：王士逵（CBDB 336303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json)
- [中国历代人物传记资料库：王替化（CBDB 336311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336311&o=json)
- [中国历代人物传记资料库：王推化（CBDB 336306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json)
- [中国历代人物传记资料库：王宣化（CBDB 205636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205636&o=json)
- [中国历代人物传记资料库：王永化（CBDB 336314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json)
- [中国历代人物传记资料库：王雨化（CBDB 336313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336313&o=json)
- [中国历代人物传记资料库：王悅（CBDB 336301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336301&o=json)
- [中国历代人物传记资料库：王運化（CBDB 336312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json)
