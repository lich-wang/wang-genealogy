---
schema: wang-person/v1
id: p_HjMSGWaaseFRH9Rnqfpx53
status: active
merged_into: null
display_name: 王守礼
cbdb_id: 288233
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LoVMLB6imJ865Dh3zhkutn
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守礼，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_jrN6PHXjENjt7v7pKoo2fY
          claim_id: c_LoVMLB6imJ865Dh3zhkutn
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs__e83bok4emrFC--SN92kfF
          claim_id: c_LoVMLB6imJ865Dh3zhkutn
          source_id: s_4EV6s8PDZDPriF5mknCM8A
          stance: supports
          locator: CBDB:288233
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4EV6s8PDZDPriF5mknCM8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王守禮（288233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288233&o=json
            external_identifier: CBDB:288233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.550Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7EiGUQaVx12448CJNePNj9
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守礼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5BitDkigQygeVnoSG5kPhN
          claim_id: c_7EiGUQaVx12448CJNePNj9
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: Q45444931
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_BXT9HsBcTFUN4978PuNLG8
          claim_id: c_7EiGUQaVx12448CJNePNj9
          source_id: s_4EV6s8PDZDPriF5mknCM8A
          stance: supports
          locator: Q45444931
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8XeXmvbJobuj7Nvk16wqLb
        subject_person_id: p_ykr41UEw3NbJSps62ktjHo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VTqdLDtoiY1mB5Yury5rr7
          claim_id: c_8XeXmvbJobuj7Nvk16wqLb
          source_id: s_TDLFnsGss2TjAWXKEcVNuf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDLFnsGss2TjAWXKEcVNuf
            source_type: api_record
            title: 维基数据：王衮（Q45444868）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444868
            external_identifier: Q45444868
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_qgWUASbbo3T945PhMnjSYq
          claim_id: c_8XeXmvbJobuj7Nvk16wqLb
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
      object_person:
        id: p_ykr41UEw3NbJSps62ktjHo
        status: active
        display_name: 王衮
        merged_into_person_id: null
  children:
    - claim:
        id: c_4Sn2c8oKUaecp9d5occySn
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jn1RBTcFBqD2CgQK7JL3BF
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_x1sGPkHNaiGmfxqGVNBMKH
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_4EV6s8PDZDPriF5mknCM8A
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_4EV6s8PDZDPriF5mknCM8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王守禮（288233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288233&o=json
            external_identifier: CBDB:288233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.550Z
            metadata_json: null
        - id: cs_JoCuH918tEJ5QyzhvzcHNc
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_KJHBKoaT55PZNcFJGfSbn2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KJHBKoaT55PZNcFJGfSbn2
            source_type: api_record
            title: 维基数据：王正思（Q16077354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077354
            external_identifier: Q16077354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:10.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
        - id: cs_4dR4kAPdtNwxtBjBHPJ7R5
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_ciu1UrQeyrub6PGojXTZRW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_ciu1UrQeyrub6PGojXTZRW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正思（202442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202442&o=json
            external_identifier: CBDB:202442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:11.006Z
            metadata_json: null
        - id: cs_Dek7UZLsJMmMKNkiwJHMVJ
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_TSfso3FrCBgfNR2hHscAz3
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 曾祖王天敘，以孫王守仁贈禮部右侍郎追封特進光祿大夫柱國新建伯兼南京兵部尚書；祖父王袞；父王守禮，母華氏
          interpretation_note: null
          source:
            id: s_TSfso3FrCBgfNR2hHscAz3
            source_type: website
            title: 中文维基百科：王正思
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:22.455Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
    - claim:
        id: c_ElV-wyZtf8rUN6Asc9iHFT
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1DemQ3cETzf9rm573UCMCc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCQ89fewWWzCnO6EvDpZHP
          claim_id: c_ElV-wyZtf8rUN6Asc9iHFT
          source_id: s_ZeYYv1YBVNRY0xw3OX2KJ3
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正憲 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正憲 之父／母。
          source:
            id: s_ZeYYv1YBVNRY0xw3OX2KJ3
            source_type: api_record
            title: 中国历代人物传记资料库：王正憲（CBDB 288244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288244&o=json
            external_identifier: CBDB:288244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1DemQ3cETzf9rm573UCMCc
        status: active
        display_name: 王正憲
        merged_into_person_id: null
    - claim:
        id: c_zSb1Ym7e9xvJ2FHqDvqFCK
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_38VuGNMDLRxpmK7VMHQV8o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uU3St0HkyAHKoK0SYTeRyF
          claim_id: c_zSb1Ym7e9xvJ2FHqDvqFCK
          source_id: s_xy_6UN9nBYZj5s49h4gpZT
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正恩 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正恩 之父／母。
          source:
            id: s_xy_6UN9nBYZj5s49h4gpZT
            source_type: api_record
            title: 中国历代人物传记资料库：王正恩（CBDB 288238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288238&o=json
            external_identifier: CBDB:288238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38VuGNMDLRxpmK7VMHQV8o
        status: active
        display_name: 王正恩
        merged_into_person_id: null
    - claim:
        id: c_dvj5a2ufdsfCvbyGy5HirH
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3H2pvSwY7BTk2d4U92vGWc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3k2UpSbUyPXPCDasHL1D_6
          claim_id: c_dvj5a2ufdsfCvbyGy5HirH
          source_id: s_m-97zw21Re_VCsLFYMErFd
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正惠 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正惠 之父／母。
          source:
            id: s_m-97zw21Re_VCsLFYMErFd
            source_type: api_record
            title: 中国历代人物传记资料库：王正惠（CBDB 288245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288245&o=json
            external_identifier: CBDB:288245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3H2pvSwY7BTk2d4U92vGWc
        status: active
        display_name: 王正惠
        merged_into_person_id: null
    - claim:
        id: c_uNQTY1CSx950GH8CWvz4mH
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DrREsodMXFDmdLaQeKfWTA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z679m0Y6a8tABffTadq3PQ
          claim_id: c_uNQTY1CSx950GH8CWvz4mH
          source_id: s_a6AhphJf1tpc8oj6-7piob
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正懋 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正懋 之父／母。
          source:
            id: s_a6AhphJf1tpc8oj6-7piob
            source_type: api_record
            title: 中国历代人物传记资料库：王正懋（CBDB 288240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288240&o=json
            external_identifier: CBDB:288240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DrREsodMXFDmdLaQeKfWTA
        status: active
        display_name: 王正懋
        merged_into_person_id: null
    - claim:
        id: c_R2KpRc3tvIlDdVUqmtjgeH
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EExA6L61UQPhZmUjRyFxA4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sWWTTYbY5h8-hT0-yrlqiQ
          claim_id: c_R2KpRc3tvIlDdVUqmtjgeH
          source_id: s_2vba9S-vJmqF1AUKIfXFSc
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正志 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正志 之父／母。
          source:
            id: s_2vba9S-vJmqF1AUKIfXFSc
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 288237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288237&o=json
            external_identifier: CBDB:288237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EExA6L61UQPhZmUjRyFxA4
        status: active
        display_name: 王正志
        merged_into_person_id: null
    - claim:
        id: c_TDsAYTIO9Ryau00Ov9_2Bm
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QoPib81xPBfCvkNBtFaDo1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5AmAEpZxN9bJ7MEem8VjIY
          claim_id: c_TDsAYTIO9Ryau00Ov9_2Bm
          source_id: s_0OPTPMCoM0qGz2Jiu4NHld
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正感 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正感 之父／母。
          source:
            id: s_0OPTPMCoM0qGz2Jiu4NHld
            source_type: api_record
            title: 中国历代人物传记资料库：王正感（CBDB 288249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288249&o=json
            external_identifier: CBDB:288249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QoPib81xPBfCvkNBtFaDo1
        status: active
        display_name: 王正感
        merged_into_person_id: null
    - claim:
        id: c_N461UIuvgGG581Qq1RS07I
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UD9d69cLNkG1VULRmzDMuT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pw-04ja-nPMntKNLfaaWj_
          claim_id: c_N461UIuvgGG581Qq1RS07I
          source_id: s_TSMiPLl2ZmZZEXUmAAu1HQ
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正忠 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正忠 之父／母。
          source:
            id: s_TSMiPLl2ZmZZEXUmAAu1HQ
            source_type: api_record
            title: 中国历代人物传记资料库：王正忠（CBDB 288239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288239&o=json
            external_identifier: CBDB:288239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UD9d69cLNkG1VULRmzDMuT
        status: active
        display_name: 王正忠
        merged_into_person_id: null
    - claim:
        id: c_-6zkyDrlrRG15_tkDTew5V
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VMfJ7shNckRbZ44L1dBiPG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQ0LbWiIpcdq0bWR9IRNgA
          claim_id: c_-6zkyDrlrRG15_tkDTew5V
          source_id: s_BJHDNWcZiXiOtia2b8AhFP
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正心 与 王正思 为同胞（CBDB 记「弟」），王正思 之父／母即 王正心 之父／母。
          source:
            id: s_BJHDNWcZiXiOtia2b8AhFP
            source_type: api_record
            title: 中国历代人物传记资料库：王正心（CBDB 288236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288236&o=json
            external_identifier: CBDB:288236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VMfJ7shNckRbZ44L1dBiPG
        status: active
        display_name: 王正心
        merged_into_person_id: null
    - claim:
        id: c_MYe6vSgsEhi6d-7BnWnXrB
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bgApJpgEHo6suKrC5oUDFS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_alNfEbDiVqXZk_BubJqKwg
          claim_id: c_MYe6vSgsEhi6d-7BnWnXrB
          source_id: s_0dqdOeHpYx5R-Uv3Xm1_K_
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正忞 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正忞 之父／母。
          source:
            id: s_0dqdOeHpYx5R-Uv3Xm1_K_
            source_type: api_record
            title: 中国历代人物传记资料库：王正忞（CBDB 288246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288246&o=json
            external_identifier: CBDB:288246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bgApJpgEHo6suKrC5oUDFS
        status: active
        display_name: 王正忞
        merged_into_person_id: null
    - claim:
        id: c_ZjNkVHNAD9WGZXrKM6v9_d
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dueMo6SGbbHSQaQsnutfLk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOLdnqdLARIm2wDKVLBos9
          claim_id: c_ZjNkVHNAD9WGZXrKM6v9_d
          source_id: s_c3repBhv59qbAl42b8K9_I
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正愈 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正愈 之父／母。
          source:
            id: s_c3repBhv59qbAl42b8K9_I
            source_type: api_record
            title: 中国历代人物传记资料库：王正愈（CBDB 288243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288243&o=json
            external_identifier: CBDB:288243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dueMo6SGbbHSQaQsnutfLk
        status: active
        display_name: 王正愈
        merged_into_person_id: null
    - claim:
        id: c_FQsF16pDRULsYGGQFJY-Es
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qE4krPbiYsM5UCqBF74cpS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9xOhuixt0XTzZy-cVuV4h
          claim_id: c_FQsF16pDRULsYGGQFJY-Es
          source_id: s_UbpL5YSqc3UASJjmZ7Ti2u
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正恕 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正恕 之父／母。
          source:
            id: s_UbpL5YSqc3UASJjmZ7Ti2u
            source_type: api_record
            title: 中国历代人物传记资料库：王正恕（CBDB 288242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288242&o=json
            external_identifier: CBDB:288242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qE4krPbiYsM5UCqBF74cpS
        status: active
        display_name: 王正恕
        merged_into_person_id: null
    - claim:
        id: c_KEdae-m4h02XA-OiLSrMWJ
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w5aKZ9LJHKfHBfzJKoqr6E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QaDTZ08e4b_GO6UR9SbmNt
          claim_id: c_KEdae-m4h02XA-OiLSrMWJ
          source_id: s_VGr4zoEaRDqLNbtlMLs9yO
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正愚 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正愚 之父／母。
          source:
            id: s_VGr4zoEaRDqLNbtlMLs9yO
            source_type: api_record
            title: 中国历代人物传记资料库：王正愚（CBDB 288247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288247&o=json
            external_identifier: CBDB:288247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5aKZ9LJHKfHBfzJKoqr6E
        status: active
        display_name: 王正愚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守礼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守礼，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288233） | accepted |
| name.primary | 王守礼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ykr41UEw3NbJSps62ktjHo | 王衮 | accepted |
| children | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |
| children | p_1DemQ3cETzf9rm573UCMCc | 王正憲 | accepted |
| children | p_38VuGNMDLRxpmK7VMHQV8o | 王正恩 | accepted |
| children | p_3H2pvSwY7BTk2d4U92vGWc | 王正惠 | accepted |
| children | p_DrREsodMXFDmdLaQeKfWTA | 王正懋 | accepted |
| children | p_EExA6L61UQPhZmUjRyFxA4 | 王正志 | accepted |
| children | p_QoPib81xPBfCvkNBtFaDo1 | 王正感 | accepted |
| children | p_UD9d69cLNkG1VULRmzDMuT | 王正忠 | accepted |
| children | p_VMfJ7shNckRbZ44L1dBiPG | 王正心 | accepted |
| children | p_bgApJpgEHo6suKrC5oUDFS | 王正忞 | accepted |
| children | p_dueMo6SGbbHSQaQsnutfLk | 王正愈 | accepted |
| children | p_qE4krPbiYsM5UCqBF74cpS | 王正恕 | accepted |
| children | p_w5aKZ9LJHKfHBfzJKoqr6E | 王正愚 | accepted |

## 外部来源

- [维基数据：王衮（Q45444868）](https://www.wikidata.org/wiki/Q45444868)
- [维基数据：王守礼（Q45444931）](https://www.wikidata.org/wiki/Q45444931)
- [维基数据：王正思（Q16077354）](https://www.wikidata.org/wiki/Q16077354)
- [中国历代人物传记资料库：王正恩（CBDB 288238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288238&o=json)
- [中国历代人物传记资料库：王正感（CBDB 288249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288249&o=json)
- [中国历代人物传记资料库：王正惠（CBDB 288245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288245&o=json)
- [中国历代人物传记资料库：王正懋（CBDB 288240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288240&o=json)
- [中国历代人物传记资料库：王正忞（CBDB 288246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288246&o=json)
- [中国历代人物传记资料库：王正恕（CBDB 288242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288242&o=json)
- [中国历代人物传记资料库：王正憲（CBDB 288244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288244&o=json)
- [中国历代人物传记资料库：王正心（CBDB 288236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288236&o=json)
- [中国历代人物传记资料库：王正愚（CBDB 288247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288247&o=json)
- [中国历代人物传记资料库：王正愈（CBDB 288243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288243&o=json)
- [中国历代人物传记资料库：王正志（CBDB 288237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288237&o=json)
- [中国历代人物传记资料库：王正忠（CBDB 288239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288239&o=json)
- [中文维基百科：王正思](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D)
- [CBDB 中国历代人物传记资料库：王守禮（288233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288233&o=json)
- [CBDB 中国历代人物传记资料库：王正思（202442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202442&o=json)
