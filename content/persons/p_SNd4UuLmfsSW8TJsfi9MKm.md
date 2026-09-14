---
schema: wang-person/v1
id: p_SNd4UuLmfsSW8TJsfi9MKm
status: active
merged_into: null
display_name: 王三錫
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WmD8D8dpEs5oNDZYGN1itp
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mHqvcCxEycRdRE33sjqNBH
          claim_id: c_WmD8D8dpEs5oNDZYGN1itp
          source_id: s_usjxYjSZdxiZpk6hCgAEMK
          stance: supports
          locator: CBDB:205255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205255）
          source: &a1
            id: s_usjxYjSZdxiZpk6hCgAEMK
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 205255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205255&o=json
            external_identifier: CBDB:205255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1K1ynS13JLLWm1aM3UMMCu
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_La22sXbHJ7jJWkGNUAdAdM
          claim_id: c_1K1ynS13JLLWm1aM3UMMCu
          source_id: s_usjxYjSZdxiZpk6hCgAEMK
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
        id: c_2BdLh29278SAcMgSLDbn4x
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫（生于1537年），明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 205255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NqYIPfiXUd6UC2GuwMyWww
          claim_id: c_2BdLh29278SAcMgSLDbn4x
          source_id: s_usjxYjSZdxiZpk6hCgAEMK
          stance: supports
          locator: CBDB:205255
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xzYxbceRBu9EfnyWeKsUrU
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8itfIgg4tM4GT1bnExx4g0
          claim_id: c_xzYxbceRBu9EfnyWeKsUrU
          source_id: s_LKRshe6MuohdxBxu7BSr7A
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LKRshe6MuohdxBxu7BSr7A
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 330479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330479&o=json
            external_identifier: CBDB:330479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3oiJYesqaTeTXPDC4vRfWz
        subject_person_id: p_D19FBC5CbaMQ2qiQY4jwrT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mdl3BtVTAoDLp7_Nfafsn
          claim_id: c_3oiJYesqaTeTXPDC4vRfWz
          source_id: s_KAjSggn4ovByd24UNXyr6P
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KAjSggn4ovByd24UNXyr6P
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 330478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330478&o=json
            external_identifier: CBDB:330478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D19FBC5CbaMQ2qiQY4jwrT
        status: active
        display_name: 王重
        merged_into_person_id: null
    - claim:
        id: c__nV224K4LJy7pcG7rXOQ5v
        subject_person_id: p_EB8FNC6sL5PEvA6g1Au4VJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lYi7UQhD78B4g6BYne-Cw6
          claim_id: c__nV224K4LJy7pcG7rXOQ5v
          source_id: s_GYQ27bHRjBsYZYmYdLJoUR
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GYQ27bHRjBsYZYmYdLJoUR
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 330477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330477&o=json
            external_identifier: CBDB:330477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EB8FNC6sL5PEvA6g1Au4VJ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Gas7K9FXUbUwF6rkRdykwM
        subject_person_id: p_3wz8fBFxVb7CTtNJiGp6zF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9m_tn8mRHaDoTjQ1hZKcb
          claim_id: c_Gas7K9FXUbUwF6rkRdykwM
          source_id: s__V8WqG3ZslTH-ZLJrK8s3s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__V8WqG3ZslTH-ZLJrK8s3s
            source_type: api_record
            title: 中国历代人物传记资料库：王七教（CBDB 330491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330491&o=json
            external_identifier: CBDB:330491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3wz8fBFxVb7CTtNJiGp6zF
        status: active
        display_name: 王七教
        merged_into_person_id: null
    - claim:
        id: c_QNqCVS9-ijQvjpXgzLbZ8q
        subject_person_id: p_AWLY5JhcGsYgq55393cBKE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7ET7oB8Txb9rsEgJM6snH
          claim_id: c_QNqCVS9-ijQvjpXgzLbZ8q
          source_id: s_gC40h6cfc6QWasyj-Lex5X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gC40h6cfc6QWasyj-Lex5X
            source_type: api_record
            title: 中国历代人物传记资料库：王十翼（CBDB 330495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json
            external_identifier: CBDB:330495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AWLY5JhcGsYgq55393cBKE
        status: active
        display_name: 王十翼
        merged_into_person_id: null
    - claim:
        id: c_KBjh6QXvgARJ5TGuZo1xhX
        subject_person_id: p_EUHvHseeDaeEK44dH4jAWf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRe2x5tb5c3SYKiGE35KQ_
          claim_id: c_KBjh6QXvgARJ5TGuZo1xhX
          source_id: s_tR7qUyajWJAUjYj0mM_GFS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tR7qUyajWJAUjYj0mM_GFS
            source_type: api_record
            title: 中国历代人物传记资料库：王六與（CBDB 330490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json
            external_identifier: CBDB:330490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EUHvHseeDaeEK44dH4jAWf
        status: active
        display_name: 王六與
        merged_into_person_id: null
    - claim:
        id: c_HfmxQHsjkxQF-UJCyy5htu
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TJZmVh2DvEPf1KamLAVYE7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axUDDcAFPnHJOhICFCUnpV
          claim_id: c_HfmxQHsjkxQF-UJCyy5htu
          source_id: s_UIZfgcyIXlx8fMTM1Cj704
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UIZfgcyIXlx8fMTM1Cj704
            source_type: api_record
            title: 中国历代人物传记资料库：王二雅（CBDB 330488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330488&o=json
            external_identifier: CBDB:330488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TJZmVh2DvEPf1KamLAVYE7
        status: active
        display_name: 王二雅
        merged_into_person_id: null
    - claim:
        id: c_DlavWbgdtRacyDM9U-FJY_
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VBfUvqUHVfG5ffpmCP5SEC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aL9TxMcVsCs6734nGCFY2q
          claim_id: c_DlavWbgdtRacyDM9U-FJY_
          source_id: s_3PSEItPlGxyRrF7seIvrUa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3PSEItPlGxyRrF7seIvrUa
            source_type: api_record
            title: 中国历代人物传记资料库：王五美（CBDB 330489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330489&o=json
            external_identifier: CBDB:330489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VBfUvqUHVfG5ffpmCP5SEC
        status: active
        display_name: 王五美
        merged_into_person_id: null
    - claim:
        id: c_QeBTHB9qkcG75hmp87ZoZy
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQUhurjj7aW6BmKDwcHajP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8VD1fmToYw5fOPGFSpzeWf
          claim_id: c_QeBTHB9qkcG75hmp87ZoZy
          source_id: s_eHk61xaWLIJ0Z2cX56etiL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eHk61xaWLIJ0Z2cX56etiL
            source_type: api_record
            title: 中国历代人物传记资料库：王汝安（CBDB 330486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330486&o=json
            external_identifier: CBDB:330486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQUhurjj7aW6BmKDwcHajP
        status: active
        display_name: 王汝安
        merged_into_person_id: null
    - claim:
        id: c_xE_cd5nxLFg5RjaTObspF9
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YTBz4fGCBrcfT1SwWNc91W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tPtT6O2jeXBXViZHXnUHAn
          claim_id: c_xE_cd5nxLFg5RjaTObspF9
          source_id: s__2IPLHH3xDvKuw5ccmwUQz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__2IPLHH3xDvKuw5ccmwUQz
            source_type: api_record
            title: 中国历代人物传记资料库：王八元（CBDB 330492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json
            external_identifier: CBDB:330492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YTBz4fGCBrcfT1SwWNc91W
        status: active
        display_name: 王八元
        merged_into_person_id: null
    - claim:
        id: c_bpb-BxWlSChY-waES9ocR4
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hQYdDeW7E5c5LCtwiuRSDv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iNQaSeaW5Q9nyUr3FD511l
          claim_id: c_bpb-BxWlSChY-waES9ocR4
          source_id: s_xin3LspeKa_SscRL_khTA7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xin3LspeKa_SscRL_khTA7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝高（CBDB 330485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330485&o=json
            external_identifier: CBDB:330485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hQYdDeW7E5c5LCtwiuRSDv
        status: active
        display_name: 王汝高
        merged_into_person_id: null
    - claim:
        id: c_OlBGF8ZVvzMD_PoGpALbyo
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kue5mnTjRCamT6djWtTumF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DtN2_xykitoy18qnNrw9l8
          claim_id: c_OlBGF8ZVvzMD_PoGpALbyo
          source_id: s_mMDzbVn3hLRWgVsfjr4Goj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mMDzbVn3hLRWgVsfjr4Goj
            source_type: api_record
            title: 中国历代人物传记资料库：王子實（CBDB 330493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330493&o=json
            external_identifier: CBDB:330493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kue5mnTjRCamT6djWtTumF
        status: active
        display_name: 王子實
        merged_into_person_id: null
    - claim:
        id: c_g-6rOljYfWYBWxjf0ROsBF
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nGWAHeEASKiJdfcar4Chmc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kmfv5Lq3hGsVPvy8RI8gqE
          claim_id: c_g-6rOljYfWYBWxjf0ROsBF
          source_id: s_sVLVjVzoSn94_TU1wLsUvD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sVLVjVzoSn94_TU1wLsUvD
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 330484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json
            external_identifier: CBDB:330484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nGWAHeEASKiJdfcar4Chmc
        status: active
        display_name: 王一陽
        merged_into_person_id: null
    - claim:
        id: c_opNWiUaQNSk7rcdpSUbHd2
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uhm7QMvYDUq8M3FEsbzMvB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVslQJoFPpckaos1sUHn0-
          claim_id: c_opNWiUaQNSk7rcdpSUbHd2
          source_id: s_vSDJaiSQnv-6N0vt6O_IHh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vSDJaiSQnv-6N0vt6O_IHh
            source_type: api_record
            title: 中国历代人物传记资料库：王子美（CBDB 330483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json
            external_identifier: CBDB:330483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uhm7QMvYDUq8M3FEsbzMvB
        status: active
        display_name: 王子美
        merged_into_person_id: null
    - claim:
        id: c_2chqIYCVKkaTIhz0usFshR
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w1LWpKPfQMvGduA5Eohqa3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCdqVxVu8QsTXjgg82RjtM
          claim_id: c_2chqIYCVKkaTIhz0usFshR
          source_id: s_qCFOw2iMt-CYKnF0YcBZZF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qCFOw2iMt-CYKnF0YcBZZF
            source_type: api_record
            title: 中国历代人物传记资料库：王九儀（CBDB 330494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330494&o=json
            external_identifier: CBDB:330494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w1LWpKPfQMvGduA5Eohqa3
        status: active
        display_name: 王九儀
        merged_into_person_id: null
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | 王三錫（生于1537年），明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 205255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| ancestors | p_D19FBC5CbaMQ2qiQY4jwrT | 王重 | accepted |
| ancestors | p_EB8FNC6sL5PEvA6g1Au4VJ | 王瓊 | accepted |
| other | p_3wz8fBFxVb7CTtNJiGp6zF | 王七教 | accepted |
| other | p_AWLY5JhcGsYgq55393cBKE | 王十翼 | accepted |
| other | p_EUHvHseeDaeEK44dH4jAWf | 王六與 | accepted |
| other | p_TJZmVh2DvEPf1KamLAVYE7 | 王二雅 | accepted |
| other | p_VBfUvqUHVfG5ffpmCP5SEC | 王五美 | accepted |
| other | p_WQUhurjj7aW6BmKDwcHajP | 王汝安 | accepted |
| other | p_YTBz4fGCBrcfT1SwWNc91W | 王八元 | accepted |
| other | p_hQYdDeW7E5c5LCtwiuRSDv | 王汝高 | accepted |
| other | p_kue5mnTjRCamT6djWtTumF | 王子實 | accepted |
| other | p_nGWAHeEASKiJdfcar4Chmc | 王一陽 | accepted |
| other | p_uhm7QMvYDUq8M3FEsbzMvB | 王子美 | accepted |
| other | p_w1LWpKPfQMvGduA5Eohqa3 | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王八元（CBDB 330492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json)
- [中国历代人物传记资料库：王二雅（CBDB 330488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330488&o=json)
- [中国历代人物传记资料库：王訪（CBDB 330479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330479&o=json)
- [中国历代人物传记资料库：王九儀（CBDB 330494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330494&o=json)
- [中国历代人物传记资料库：王六與（CBDB 330490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json)
- [中国历代人物传记资料库：王七教（CBDB 330491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330491&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 330477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330477&o=json)
- [中国历代人物传记资料库：王汝安（CBDB 330486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330486&o=json)
- [中国历代人物传记资料库：王汝高（CBDB 330485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330485&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 205255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205255&o=json)
- [中国历代人物传记资料库：王十翼（CBDB 330495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json)
- [中国历代人物传记资料库：王五美（CBDB 330489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330489&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 330484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json)
- [中国历代人物传记资料库：王重（CBDB 330478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330478&o=json)
- [中国历代人物传记资料库：王子美（CBDB 330483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json)
- [中国历代人物传记资料库：王子實（CBDB 330493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330493&o=json)
