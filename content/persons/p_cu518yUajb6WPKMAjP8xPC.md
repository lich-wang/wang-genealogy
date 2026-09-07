---
schema: wang-person/v1
id: p_cu518yUajb6WPKMAjP8xPC
status: active
merged_into: null
display_name: 王乃始
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BcvjDMq1xiX0-JAaX8PcQU
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃始（生于前2世纪），史料所见人物。本项目依据《王乃始》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JN__LyqLCdYLF_YQgrQFIJ
          claim_id: c_BcvjDMq1xiX0-JAaX8PcQU
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: Q85882454
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iA7vkv16bGbT7KEhMhGjLR
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前2世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0200-01-01
            latest: -0101-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s7BUzWtJQ7ZER9MJgXaaiP
          claim_id: c_iA7vkv16bGbT7KEhMhGjLR
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMZ949qom7mPNQGrLCSVh6
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃始
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UuUMQZWZG3w4eZ6xEA2DzK
          claim_id: c_MMZ949qom7mPNQGrLCSVh6
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: Q85882454
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_A5xgtio9pikyB4eC3Z1kbZ
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Eq4EcrhTd9xwwtDn5FnPZR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_n5xHB7DcoZEiQJ5QNMabMG
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_DLXjFuojnEBRDGQAsAbsQC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DLXjFuojnEBRDGQAsAbsQC
            source_type: api_record
            title: 维基数据：王翁須（Q15925979）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15925979
            external_identifier: Q15925979
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.003Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%81%E9%A0%88
        - id: cs_TQx3p1aoWTBXBs1EddpC5M
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
        - id: cs_c4HCz85RbsX5LEyUVE9PPC
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_3V3n6FnS561BHF1iHszXCs
          stance: supports
          locator: 条文：女
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼），生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_3V3n6FnS561BHF1iHszXCs
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:17.848Z
            metadata_json: null
        - id: cs_co8sLoAveSDvfbKHbfg6yC
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：女
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼），生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_J1SnCD83cVmwFE38WR4P6m
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：女
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼），生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_2PJvBJ3RJBMeoLycMzk5VC
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_rtKyLDJ9LCRdrz1SsxmZe1
          stance: supports
          locator: 条文：女
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼），生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_rtKyLDJ9LCRdrz1SsxmZe1
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:03.993Z
            metadata_json: null
        - id: cs_Anth6s5MJojTsfAwd2uK3j
          claim_id: c_A5xgtio9pikyB4eC3Z1kbZ
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：女
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼），生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_Eq4EcrhTd9xwwtDn5FnPZR
        status: active
        display_name: 王翁須
        merged_into_person_id: null
    - claim:
        id: c_BJ4XVcAeKKp1eRVSn11YQf
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_76gr6oGxYKhGFKezCL69QV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2P6Fe19o3EM1QPQDJWDFUh
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
        - id: cs_ZVfRCN9LxgKBH9aUumuwAA
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_5ZddXNAn3yHbjgovTKaiBc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5ZddXNAn3yHbjgovTKaiBc
            source_type: api_record
            title: 维基数据：王武（Q94998291）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998291
            external_identifier: Q94998291
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:56.490Z
            metadata_json: null
        - id: cs_eiBfCPNJMQ3pAh66ocXA5x
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_3V3n6FnS561BHF1iHszXCs
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_3V3n6FnS561BHF1iHszXCs
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:17.848Z
            metadata_json: null
        - id: cs_j3sHt5LJNdUt2VkN7irfVT
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_xy24b5RttB5dcCmfoHvdfC
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_zSDtkHGoRqFfiBk5ZkC66e
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_rtKyLDJ9LCRdrz1SsxmZe1
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_rtKyLDJ9LCRdrz1SsxmZe1
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:03.993Z
            metadata_json: null
        - id: cs_QF8SMaKMjt2eFQRkyj47BS
          claim_id: c_BJ4XVcAeKKp1eRVSn11YQf
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_76gr6oGxYKhGFKezCL69QV
        status: active
        display_name: 王武
        merged_into_person_id: null
    - claim:
        id: c_s28mbu5kU2N5G4DKkcJu5N
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bxw6MBcJfozvspQ8vRXSSd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LutzyTMf7A6Uzv2T9Di166
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
        - id: cs_CLd7oTvsoSsUUqdMr66TLT
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_HoKKNf8wvXE3Eqrf2eWspH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HoKKNf8wvXE3Eqrf2eWspH
            source_type: api_record
            title: 维基数据：王无故（Q94998288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998288
            external_identifier: Q94998288
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:57.249Z
            metadata_json: null
        - id: cs_36X4KCSs8tLKbiJuRBT8JC
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_3V3n6FnS561BHF1iHszXCs
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_3V3n6FnS561BHF1iHszXCs
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:17.848Z
            metadata_json: null
        - id: cs_tK4u9iBCtYntHNA25JYjZ4
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_qeqSX9GKznWmWSJMQUv1hS
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_p9b1JoEti1Bh9hWdDnbGbG
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_rtKyLDJ9LCRdrz1SsxmZe1
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_rtKyLDJ9LCRdrz1SsxmZe1
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:03.993Z
            metadata_json: null
        - id: cs_JqqQZehsjgKXxH1Wumwj3x
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_Bxw6MBcJfozvspQ8vRXSSd
        status: active
        display_name: 王无故
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qEC91ghRCWVKwhgPBjV5Bg
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xYLfdjJyU3zf8D5ctLUyQo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_UFgcQkXRMpL8ukkF3MNF7U
          claim_id: c_qEC91ghRCWVKwhgPBjV5Bg
          source_id: s_m3BJ7LRyCAM16EoqpcwauY
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_m3BJ7LRyCAM16EoqpcwauY
            source_type: api_record
            title: 维基数据：博平君（Q85876908）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85876908
            external_identifier: Q85876908
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%B9%B3%E5%90%9B
        - id: cs_wUDLYkMmmac4zokeRfcvvq
          claim_id: c_qEC91ghRCWVKwhgPBjV5Bg
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
      object_person:
        id: p_xYLfdjJyU3zf8D5ctLUyQo
        status: active
        display_name: 博平君
        merged_into_person_id: null
    - claim:
        id: c_uftF4H18hZJD9ZypMFJhGt
        subject_person_id: p_F5cEyLEcuJa8W76QE1gEnp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cu518yUajb6WPKMAjP8xPC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FAFd5sRvDfL7E2rKtjTdez
          claim_id: c_uftF4H18hZJD9ZypMFJhGt
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：条文识读（娶）
          quotation: 娶蠡吾平鄉（今河北省博野县）人王妄人（王媼）
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_P3qc8iKQEEN47QnvnYFvnR
          claim_id: c_uftF4H18hZJD9ZypMFJhGt
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：条文识读（娶）
          quotation: 娶蠡吾平鄉（今河北省博野县）人王妄人（王媼）
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_RrH161cT5orvyUvdDWtU6A
          claim_id: c_uftF4H18hZJD9ZypMFJhGt
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（spouse）
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼）
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_F5cEyLEcuJa8W76QE1gEnp
        status: active
        display_name: 王媼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王乃始

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乃始（生于前2世纪），史料所见人物。本项目依据《王乃始》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前2世纪 | accepted |
| name.primary | 王乃始 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Eq4EcrhTd9xwwtDn5FnPZR | 王翁須 | accepted |
| children | p_76gr6oGxYKhGFKezCL69QV | 王武 | accepted |
| children | p_Bxw6MBcJfozvspQ8vRXSSd | 王无故 | accepted |
| spouses | p_xYLfdjJyU3zf8D5ctLUyQo | 博平君 | accepted |
| spouses | p_F5cEyLEcuJa8W76QE1gEnp | 王媼 | accepted |

## 外部来源

- [维基数据：博平君（Q85876908）](https://www.wikidata.org/wiki/Q85876908)
- [维基数据：王乃始（Q85882454）](https://www.wikidata.org/wiki/Q85882454)
- [维基数据：王翁須（Q15925979）](https://www.wikidata.org/wiki/Q15925979)
- [维基数据：王无故（Q94998288）](https://www.wikidata.org/wiki/Q94998288)
- [维基数据：王武（Q94998291）](https://www.wikidata.org/wiki/Q94998291)
- [中文维基百科：王迺始](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B)
