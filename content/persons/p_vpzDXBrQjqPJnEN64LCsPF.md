---
schema: wang-person/v1
id: p_vpzDXBrQjqPJnEN64LCsPF
status: active
merged_into: null
display_name: 王臬
revision: 24
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNP2rkatHAQFwog3Nku98L
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tUCAgJ82z2iGdC3ERuA6GD
          claim_id: c_kNP2rkatHAQFwog3Nku98L
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
          stance: supports
          locator: CBDB:34721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34721）
          source: &a1
            id: s_UHN7c8NuMtWnHbj7TRXFcr
            source_type: api_record
            title: 中国历代人物传记资料库：王臬（CBDB 34721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34721&o=json
            external_identifier: CBDB:34721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zdELpwhN7LYgzWHogdqaXm
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1477年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehVM5MKRq9iAcgJujJfbDL
          claim_id: c_zdELpwhN7LYgzWHogdqaXm
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_bRDA2vRrrSiQENvZ31inVY
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsPZ9Fm7NoNKDDD1jD8pkt
          claim_id: c_bRDA2vRrrSiQENvZ31inVY
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_ynBBB38gxovgLMJbSL2Fzw
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臬（1477年—1553年），明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 34721）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_frmmI4vvDE-agtaP5LEfkM
          claim_id: c_ynBBB38gxovgLMJbSL2Fzw
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
          stance: supports
          locator: CBDB:34721
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mbUNz3v4PNphNu-c2PzKU-
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IlcNLngQk831OiBa81m3IM
          claim_id: c_mbUNz3v4PNphNu-c2PzKU-
          source_id: s_cZjZjRkhyrucvBPMXtGQHT
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cZjZjRkhyrucvBPMXtGQHT
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 279548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279548&o=json
            external_identifier: CBDB:279548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QN7EhCDtejfmZYbCTCBWyv
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  children:
    - claim:
        id: c_ALbWCDhwM2hL1Vu8wdKDO8
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1A4fzo1sn4CjE2_GlMN0F0
          claim_id: c_ALbWCDhwM2hL1Vu8wdKDO8
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: CBDB 双向互证（父 王臬 ⇄ 子 王樵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_eb5Xn1ejYbkj9jFGqum44L
            source_type: api_record
            title: 中国历代人物传记资料库：王樵（CBDB 34720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json
            external_identifier: CBDB:34720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
    - claim:
        id: c_yKwJxxhEdh87D9AZsPZcnD
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2JRR43piFcBKpoGfKJhFCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qUnIT5B-VlzPxfdpvaIa1a
          claim_id: c_yKwJxxhEdh87D9AZsPZcnD
          source_id: s_FJjy6OIHh1-j98Fh76JcOK
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王烝 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王烝 之父／母。
          source:
            id: s_FJjy6OIHh1-j98Fh76JcOK
            source_type: api_record
            title: 中国历代人物传记资料库：王烝（CBDB 309657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309657&o=json
            external_identifier: CBDB:309657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2JRR43piFcBKpoGfKJhFCE
        status: active
        display_name: 王烝
        merged_into_person_id: null
    - claim:
        id: c_LbDdc_5atvmjOz9ECCXTJg
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9K9PGQwsoS3ZaM5p5w7UtG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dDbLvzj--Wsrl_HHTOn6h6
          claim_id: c_LbDdc_5atvmjOz9ECCXTJg
          source_id: s_C0q4gQWjxzXZ7aRsW8DJPo
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢羔 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王夢羔 之父／母。
          source:
            id: s_C0q4gQWjxzXZ7aRsW8DJPo
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羔（CBDB 309661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json
            external_identifier: CBDB:309661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9K9PGQwsoS3ZaM5p5w7UtG
        status: active
        display_name: 王夢羔
        merged_into_person_id: null
    - claim:
        id: c_wWVOqgdeOI5IOeR7KCVhbR
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AmDc6KHSroSoHEQCWdoMVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4YpLPImGzA1uaVVFRTyrP7
          claim_id: c_wWVOqgdeOI5IOeR7KCVhbR
          source_id: s_4pW_IWgieJLZ02iLK0LRKy
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王傑 之父／母。
          source:
            id: s_4pW_IWgieJLZ02iLK0LRKy
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 309658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309658&o=json
            external_identifier: CBDB:309658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AmDc6KHSroSoHEQCWdoMVQ
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_zWYP6zHlIq_jczLKPvmRvi
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CVYQ6ZcLXbA91DnWS8v6Bb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjJppwmiCwyt-19z0Ljjnj
          claim_id: c_zWYP6zHlIq_jczLKPvmRvi
          source_id: s_DUFTLFIRj4YLzhSz-gevP6
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王維羆 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王維羆 之父／母。
          source:
            id: s_DUFTLFIRj4YLzhSz-gevP6
            source_type: api_record
            title: 中国历代人物传记资料库：王維羆（CBDB 309660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309660&o=json
            external_identifier: CBDB:309660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CVYQ6ZcLXbA91DnWS8v6Bb
        status: active
        display_name: 王維羆
        merged_into_person_id: null
    - claim:
        id: c_jJnXfW31dapCL3bAMTG1tV
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JBWSAH2Y6gAk3F76hQjFDs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Umfvkz05ShOS6qXjB1znSk
          claim_id: c_jJnXfW31dapCL3bAMTG1tV
          source_id: s_iJ9MgVwCGnqZIGobbgCCcC
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王燾 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王燾 之父／母。
          source:
            id: s_iJ9MgVwCGnqZIGobbgCCcC
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 309653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json
            external_identifier: CBDB:309653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JBWSAH2Y6gAk3F76hQjFDs
        status: active
        display_name: 王燾
        merged_into_person_id: null
    - claim:
        id: c_6YXl-OOOEdbwf1PB5dr1yG
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gch76CK_zCrFmAwbpOqXA_
          claim_id: c_6YXl-OOOEdbwf1PB5dr1yG
          source_id: s_mHFx-NtyCtBbaTeyevix_1
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢魚 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王夢魚 之父／母。
          source:
            id: s_mHFx-NtyCtBbaTeyevix_1
            source_type: api_record
            title: 中国历代人物传记资料库：王夢魚（CBDB 309664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json
            external_identifier: CBDB:309664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PWaCFJXXBRP2vf5HKKSrKh
        status: active
        display_name: 王夢魚
        merged_into_person_id: null
    - claim:
        id: c_eo4LdEzOBZUZbEY9bMfHWb
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGSt23a3Q4sV2a7h2gkPyy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_My2C-qfjUOC7EWyHMNMD3d
          claim_id: c_eo4LdEzOBZUZbEY9bMfHWb
          source_id: s_1N2e65JkSDej9J3FtFEs8f
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王熙 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王熙 之父／母。
          source:
            id: s_1N2e65JkSDej9J3FtFEs8f
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 309656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json
            external_identifier: CBDB:309656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SGSt23a3Q4sV2a7h2gkPyy
        status: active
        display_name: 王熙
        merged_into_person_id: null
    - claim:
        id: c_TueSM049g1RvRb0idSv0p0
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZVmEEASLERVwPGCnF6Y8x
          claim_id: c_TueSM049g1RvRb0idSv0p0
          source_id: s_Ztds3bwolP9ty4HdqVhdU9
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王維熊 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王維熊 之父／母。
          source:
            id: s_Ztds3bwolP9ty4HdqVhdU9
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 309659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json
            external_identifier: CBDB:309659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJjjhnmN3svVtuzcK9Xvtw
        status: active
        display_name: 王維熊
        merged_into_person_id: null
    - claim:
        id: c_9tjs-J_euYJuy5u4vBAXTy
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3dbqSkrq4n4mT2Q9rX14u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjrcAg1giVP2nEN8v8mcBP
          claim_id: c_9tjs-J_euYJuy5u4vBAXTy
          source_id: s_4L3uRVf-NJuKtfWIFiWBDf
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王然 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王然 之父／母。
          source:
            id: s_4L3uRVf-NJuKtfWIFiWBDf
            source_type: api_record
            title: 中国历代人物传记资料库：王然（CBDB 309652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309652&o=json
            external_identifier: CBDB:309652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c3dbqSkrq4n4mT2Q9rX14u
        status: active
        display_name: 王然
        merged_into_person_id: null
    - claim:
        id: c_-VX0iBClQI0_1_SUhra5NV
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gj8BDarWAWGpynQXXtTNLe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGQItTcOSRdNvLS8043xRf
          claim_id: c_-VX0iBClQI0_1_SUhra5NV
          source_id: s_7DpTalnYbMe3G9HU0qeAnp
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王烋 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王烋 之父／母。
          source:
            id: s_7DpTalnYbMe3G9HU0qeAnp
            source_type: api_record
            title: 中国历代人物传记资料库：王烋（CBDB 309655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json
            external_identifier: CBDB:309655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gj8BDarWAWGpynQXXtTNLe
        status: active
        display_name: 王烋
        merged_into_person_id: null
    - claim:
        id: c_gw6dinkGrwZydiklPFCbU4
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j6DxJzANvppv6GwgZTC3qS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tTvGmytRRmo4Z3zmMBJFE5
          claim_id: c_gw6dinkGrwZydiklPFCbU4
          source_id: s_BOcGsUKvlnoKBObIFxs4fk
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王點 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王點 之父／母。
          source:
            id: s_BOcGsUKvlnoKBObIFxs4fk
            source_type: api_record
            title: 中国历代人物传记资料库：王點（CBDB 309654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309654&o=json
            external_identifier: CBDB:309654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j6DxJzANvppv6GwgZTC3qS
        status: active
        display_name: 王點
        merged_into_person_id: null
    - claim:
        id: c_FGCxHT1fQHRStdcRJ2oyBq
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qtxusn4jJqk5ydEQUHbQaS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RqFd2YPMD1x8gerQydxUDS
          claim_id: c_FGCxHT1fQHRStdcRJ2oyBq
          source_id: s_LDi84IdhcouBB4lNXb2IWY
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王黯 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王黯 之父／母。
          source:
            id: s_LDi84IdhcouBB4lNXb2IWY
            source_type: api_record
            title: 中国历代人物传记资料库：王黯（CBDB 309650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309650&o=json
            external_identifier: CBDB:309650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qtxusn4jJqk5ydEQUHbQaS
        status: active
        display_name: 王黯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5HJBqXucsLfejpoY2rSa2h
        subject_person_id: p_9HwAdJGnojFgrqfjKCEfL9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbgtgIDRjNCcTM_kT6Yobq
          claim_id: c_5HJBqXucsLfejpoY2rSa2h
          source_id: s_1UDUD3D6FdAJiq4hTESMsb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1UDUD3D6FdAJiq4hTESMsb
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 279546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279546&o=json
            external_identifier: CBDB:279546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9HwAdJGnojFgrqfjKCEfL9
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_CuWDoXc19ZvudGlQztTCE6
        subject_person_id: p_Mu6RFBp4T1u3QTCS8N1auf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqEhNw_8Qk6VFbMtyLIWe_
          claim_id: c_CuWDoXc19ZvudGlQztTCE6
          source_id: s_qK1aPpaNE25WGMEArMaSTK
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qK1aPpaNE25WGMEArMaSTK
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 279547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279547&o=json
            external_identifier: CBDB:279547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mu6RFBp4T1u3QTCS8N1auf
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_RXnnaCP1jotYsevS1ot94F
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FE6i55GXzPWLVER3EtdHfo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH9k8Z3iQ-Bnlp_I3REJK_
          claim_id: c_RXnnaCP1jotYsevS1ot94F
          source_id: s_FjES678jDu1PEn5f7GLKsm
          stance: supports
          locator: 明詩紀事:一百八十七卷，辛籤卷三二：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FjES678jDu1PEn5f7GLKsm
            source_type: api_record
            title: 中国历代人物传记资料库：王彥泓（CBDB 120462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json
            external_identifier: CBDB:120462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FE6i55GXzPWLVER3EtdHfo
        status: active
        display_name: 王彥泓
        merged_into_person_id: null
  other:
    - claim:
        id: c_8XATb5WXpY4wbXV4_x79LU
        subject_person_id: p_5daxgh234B2e9ovRioBYDV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EIXEaWQxIBKcGAo17pmrWz
          claim_id: c_8XATb5WXpY4wbXV4_x79LU
          source_id: s_Nj6oZg9sd6C4R2SjFDGJW3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nj6oZg9sd6C4R2SjFDGJW3
            source_type: api_record
            title: 中国历代人物传记资料库：王柬（CBDB 279554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279554&o=json
            external_identifier: CBDB:279554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5daxgh234B2e9ovRioBYDV
        status: active
        display_name: 王柬
        merged_into_person_id: null
    - claim:
        id: c_uRItbXSk88SJTOYX3_YGmc
        subject_person_id: p_LKfUJcNYpyTknq4Us3SEyP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHUZb98V81PpJVuKJugGHw
          claim_id: c_uRItbXSk88SJTOYX3_YGmc
          source_id: s_X8k6t2eIzsOTdCcNEoBtdF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X8k6t2eIzsOTdCcNEoBtdF
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 279556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json
            external_identifier: CBDB:279556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LKfUJcNYpyTknq4Us3SEyP
        status: active
        display_name: 王樂
        merged_into_person_id: null
    - claim:
        id: c_n9Ie3TLQFflcR2SBw4e_MH
        subject_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8gMXSF3VVYwjteHIafXWxD
          claim_id: c_n9Ie3TLQFflcR2SBw4e_MH
          source_id: s_L8qtQY8FImhaOvmtfsmD0S
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L8qtQY8FImhaOvmtfsmD0S
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 279551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json
            external_identifier: CBDB:279551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LmMUWEAM66yCeZPQ8ZfbBK
        status: active
        display_name: 王杲
        merged_into_person_id: null
    - claim:
        id: c_RdeDToSvxer9axiNWy_4k9
        subject_person_id: p_V7wnHykQVEtC1QyrbN7yT9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zk8wdgqob2t4thapMEEX0Q
          claim_id: c_RdeDToSvxer9axiNWy_4k9
          source_id: s_qNH7zDUiNmLMYFsVmSRx1a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qNH7zDUiNmLMYFsVmSRx1a
            source_type: api_record
            title: 中国历代人物传记资料库：王雧（CBDB 279557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json
            external_identifier: CBDB:279557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V7wnHykQVEtC1QyrbN7yT9
        status: active
        display_name: 王雧
        merged_into_person_id: null
    - claim:
        id: c_adVrOe8NOWpMmtqIywDMsg
        subject_person_id: p_W2oCgnB2LnqS9b8DXCcwJg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-2_QGIQgS6LUYUAKeoq8DB
          claim_id: c_adVrOe8NOWpMmtqIywDMsg
          source_id: s_8R9Oal2X8Xh2KpsV4n2565
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8R9Oal2X8Xh2KpsV4n2565
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 279552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json
            external_identifier: CBDB:279552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2oCgnB2LnqS9b8DXCcwJg
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_32sTWwp_ptdQmQtnuFiZlk
        subject_person_id: p_mC4jGnPD5qv77BnJmEMxEd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y7T9JKJjpIS2xWc7uXrHNA
          claim_id: c_32sTWwp_ptdQmQtnuFiZlk
          source_id: s_3sQj1yitOZxgwktiwryTRn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3sQj1yitOZxgwktiwryTRn
            source_type: api_record
            title: 中国历代人物传记资料库：王概（CBDB 279555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279555&o=json
            external_identifier: CBDB:279555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mC4jGnPD5qv77BnJmEMxEd
        status: active
        display_name: 王概
        merged_into_person_id: null
---

# 王臬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臬 | accepted |
| birth.date | 1477年 | accepted |
| death.date | 1553年 | accepted |
| bio.summary | 王臬（1477年—1553年），明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 34721） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QN7EhCDtejfmZYbCTCBWyv | 王瀚 | accepted |
| children | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |
| children | p_2JRR43piFcBKpoGfKJhFCE | 王烝 | accepted |
| children | p_9K9PGQwsoS3ZaM5p5w7UtG | 王夢羔 | accepted |
| children | p_AmDc6KHSroSoHEQCWdoMVQ | 王傑 | accepted |
| children | p_CVYQ6ZcLXbA91DnWS8v6Bb | 王維羆 | accepted |
| children | p_JBWSAH2Y6gAk3F76hQjFDs | 王燾 | accepted |
| children | p_PWaCFJXXBRP2vf5HKKSrKh | 王夢魚 | accepted |
| children | p_SGSt23a3Q4sV2a7h2gkPyy | 王熙 | accepted |
| children | p_SJjjhnmN3svVtuzcK9Xvtw | 王維熊 | accepted |
| children | p_c3dbqSkrq4n4mT2Q9rX14u | 王然 | accepted |
| children | p_gj8BDarWAWGpynQXXtTNLe | 王烋 | accepted |
| children | p_j6DxJzANvppv6GwgZTC3qS | 王點 | accepted |
| children | p_qtxusn4jJqk5ydEQUHbQaS | 王黯 | accepted |
| ancestors | p_9HwAdJGnojFgrqfjKCEfL9 | 王政 | accepted |
| ancestors | p_Mu6RFBp4T1u3QTCS8N1auf | 王鎮 | accepted |
| descendants | p_FE6i55GXzPWLVER3EtdHfo | 王彥泓 | accepted |
| other | p_5daxgh234B2e9ovRioBYDV | 王柬 | accepted |
| other | p_LKfUJcNYpyTknq4Us3SEyP | 王樂 | accepted |
| other | p_LmMUWEAM66yCeZPQ8ZfbBK | 王杲 | accepted |
| other | p_V7wnHykQVEtC1QyrbN7yT9 | 王雧 | accepted |
| other | p_W2oCgnB2LnqS9b8DXCcwJg | 王楷 | accepted |
| other | p_mC4jGnPD5qv77BnJmEMxEd | 王概 | accepted |

## 外部来源

- [中国历代人物传记资料库：王黯（CBDB 309650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309650&o=json)
- [中国历代人物传记资料库：王燾（CBDB 309653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json)
- [中国历代人物传记资料库：王點（CBDB 309654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309654&o=json)
- [中国历代人物传记资料库：王概（CBDB 279555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279555&o=json)
- [中国历代人物传记资料库：王杲（CBDB 279551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json)
- [中国历代人物传记资料库：王瀚（CBDB 279548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279548&o=json)
- [中国历代人物传记资料库：王雧（CBDB 279557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json)
- [中国历代人物传记资料库：王柬（CBDB 279554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279554&o=json)
- [中国历代人物传记资料库：王傑（CBDB 309658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309658&o=json)
- [中国历代人物传记资料库：王楷（CBDB 279552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json)
- [中国历代人物传记资料库：王樂（CBDB 279556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json)
- [中国历代人物传记资料库：王夢羔（CBDB 309661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json)
- [中国历代人物传记资料库：王夢魚（CBDB 309664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json)
- [中国历代人物传记资料库：王臬（CBDB 34721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34721&o=json)
- [中国历代人物传记资料库：王樵（CBDB 34720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json)
- [中国历代人物传记资料库：王然（CBDB 309652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309652&o=json)
- [中国历代人物传记资料库：王維羆（CBDB 309660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309660&o=json)
- [中国历代人物传记资料库：王維熊（CBDB 309659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json)
- [中国历代人物传记资料库：王熙（CBDB 309656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json)
- [中国历代人物传记资料库：王烋（CBDB 309655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json)
- [中国历代人物传记资料库：王彥泓（CBDB 120462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 279547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279547&o=json)
- [中国历代人物传记资料库：王烝（CBDB 309657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309657&o=json)
- [中国历代人物传记资料库：王政（CBDB 279546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279546&o=json)
