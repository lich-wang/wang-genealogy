---
schema: wang-person/v1
id: p_xN7tAHKk6W68mdWgNxHCZz
status: active
merged_into: null
display_name: 王禁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CkPeDv6XwT2xzA5N96naG3
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禁（卒于前41年），史料所见人物。本项目依据《維基數據：王禁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_bmJ79uBXQVss4DbQ4NRQb_
          claim_id: c_CkPeDv6XwT2xzA5N96naG3
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: Q2979420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Rc2nWdtiD35SX7NoZDNUtV
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前41年
            calendar_note: 維基數據 P570 結構化日期，精度：年
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t4dnVABvSuLi1Lntjrj9Ud
          claim_id: c_Rc2nWdtiD35SX7NoZDNUtV
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: Q2979420
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5eKP6euj1GvjPiHWwbrGEa
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NyBwbh831vZFGKF9jB31vg
          claim_id: c_5eKP6euj1GvjPiHWwbrGEa
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: Q2979420
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rD64D4rfC4NSPRyH23cg67
        subject_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wcxN2hgkLLs7j9cmVKbpDa
          claim_id: c_rD64D4rfC4NSPRyH23cg67
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_SeaSdq29PLLo9d3i9HBcPd
          claim_id: c_rD64D4rfC4NSPRyH23cg67
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iV5PcUZhdFTU7c7u3DYruh
            source_type: api_record
            title: 维基数据：王贺（Q2360216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2360216
            external_identifier: Q2360216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.011Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B4%BA
      object_person:
        id: p_mJcAUgUTp3XWHKDKvLh6Kt
        status: active
        display_name: 王贺
        merged_into_person_id: null
  children:
    - claim:
        id: c_7rTFPgia1feLQZcny9nrR1
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ma56j3xFL2iP3FzuSAfpHk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cK1hDQVVhY6byj7usMB334
          claim_id: c_7rTFPgia1feLQZcny9nrR1
          source_id: s_FD9JyVHjRLEPiULBeuVyR5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FD9JyVHjRLEPiULBeuVyR5
            source_type: website
            title: 中文维基百科：王政君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王政君
            external_identifier: Q701379
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_yAJk8tcH4VH9fYeodAwRKX
          claim_id: c_7rTFPgia1feLQZcny9nrR1
          source_id: s_C7hWM7fhFjjaRFXePJV6V9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_C7hWM7fhFjjaRFXePJV6V9
            source_type: api_record
            title: 維基數據：王政君（Q701379）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q701379
            external_identifier: Q701379
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:52.776Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%94%BF%E5%90%9B
        - id: cs_gZvanfxX6Cg7YwbQ53L1Bs
          claim_id: c_7rTFPgia1feLQZcny9nrR1
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_eoLnss1QDeywWrFJZgKe8F
          claim_id: c_7rTFPgia1feLQZcny9nrR1
          source_id: s_eShAADUfLgra9oAH2NVuaE
          stance: supports
          locator: 条文：父
          quotation: 父王禁，母李親
          interpretation_note: null
          source:
            id: s_eShAADUfLgra9oAH2NVuaE
            source_type: website
            title: 中文维基百科：王政君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%94%BF%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:13.064Z
            metadata_json: null
        - id: cs_JCnnGGQ4Ma26JMkmfVf6Kr
          claim_id: c_7rTFPgia1feLQZcny9nrR1
          source_id: s_fdwDmmP75ocP2wH96WxNK5
          stance: supports
          locator: 条文：父
          quotation: 父王禁，母李親
          interpretation_note: null
          source:
            id: s_fdwDmmP75ocP2wH96WxNK5
            source_type: website
            title: 中文维基百科：王政君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%94%BF%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:28.935Z
            metadata_json: null
      object_person:
        id: p_ma56j3xFL2iP3FzuSAfpHk
        status: active
        display_name: 王政君
        merged_into_person_id: null
    - claim:
        id: c_VdZJD76E881tfkexKR13bq
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BS59WtwbAaqRXm83dBaHiL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CHhKq7MUVfE1WsJsddfB9e
          claim_id: c_VdZJD76E881tfkexKR13bq
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_eCg9hd88EQLcp7mBmJRQHQ
          claim_id: c_VdZJD76E881tfkexKR13bq
          source_id: s_tUBJ6CGFTo89Ahc3RGMuv1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tUBJ6CGFTo89Ahc3RGMuv1
            source_type: api_record
            title: 维基数据：王立（Q672221）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q672221
            external_identifier: Q672221
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:36.543Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_BS59WtwbAaqRXm83dBaHiL
        status: active
        display_name: 王立
        merged_into_person_id: null
    - claim:
        id: c_pPw9oeGpBKg165V3aUKg9L
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1G7CMpe8j9KM1MarWKQLw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fqvpjS4KE82UA86rNFQikm
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_beAhFALZ5S1RheamgPZ3W3
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_F3ku7nmjt4aZ7fozGVxGqz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F3ku7nmjt4aZ7fozGVxGqz
            source_type: api_record
            title: 维基数据：王凤（Q1930926）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1930926
            external_identifier: Q1930926
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:38.848Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
        - id: cs_G8Ldjn2PNJMD8RFNBfX9eF
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_FG2zNqr2EsU3iQKfnSbLgE
          stance: supports
          locator: 条文：之子/之女
          quotation: 濟北王田安之後裔，王禁之子，汉成帝時外戚、大臣
          interpretation_note: null
          source:
            id: s_FG2zNqr2EsU3iQKfnSbLgE
            source_type: website
            title: 中文维基百科：王凤
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:35.340Z
            metadata_json: null
        - id: cs_QCbzeU18fSKXiV1zJ3ahGF
          claim_id: c_pPw9oeGpBKg165V3aUKg9L
          source_id: s_mfg1hfK3E7o3bd2KGPMJAj
          stance: supports
          locator: 条文：之子/之女
          quotation: 濟北王田安之後裔，王禁之子，汉成帝時外戚、大臣
          interpretation_note: null
          source:
            id: s_mfg1hfK3E7o3bd2KGPMJAj
            source_type: website
            title: 中文维基百科：王凤
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:00.730Z
            metadata_json: null
      object_person:
        id: p_g1G7CMpe8j9KM1MarWKQLw
        status: active
        display_name: 王凤
        merged_into_person_id: null
    - claim:
        id: c_WujBC4LdAYFvJUrBRNjDCn
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_42ZATJ13F5snasWr65BPLq
          claim_id: c_WujBC4LdAYFvJUrBRNjDCn
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_cCtRqdgMNNKP2Sj3Kxe6L3
          claim_id: c_WujBC4LdAYFvJUrBRNjDCn
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3PdNBCgo98QJFJBc4fy4Z5
            source_type: api_record
            title: 维基数据：王谭（Q1969370）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1969370
            external_identifier: Q1969370
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:40.086Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%AD
      object_person:
        id: p_A3jqrz5MCP94kKUqSaDLU1
        status: active
        display_name: 王谭
        merged_into_person_id: null
    - claim:
        id: c_ascCyPndfjySxPNsEZMMNf
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h5ZkegC1EpGAjgEjwkvmjr
          claim_id: c_ascCyPndfjySxPNsEZMMNf
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_7aFsiY3t9L8AzDB3X5hDQj
          claim_id: c_ascCyPndfjySxPNsEZMMNf
          source_id: s_ktGwBwmjXkYNmXq9pdDrBK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ktGwBwmjXkYNmXq9pdDrBK
            source_type: api_record
            title: 维基数据：王根（Q2250693）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2250693
            external_identifier: Q2250693
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:41.017Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A0%B9
      object_person:
        id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        status: active
        display_name: 王根
        merged_into_person_id: null
    - claim:
        id: c_Ag2hPEw3RrLoHGyEo82VJS
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93nrCbEef6Wj9vBChoFRH8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MPNCyD9hvwuKv7VehuR9vu
          claim_id: c_Ag2hPEw3RrLoHGyEo82VJS
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_Q3RcNeLb4SH1S1Mgi1PpUp
          claim_id: c_Ag2hPEw3RrLoHGyEo82VJS
          source_id: s_MictB3JRMX32T52R1AmwXq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MictB3JRMX32T52R1AmwXq
            source_type: api_record
            title: 維基數據：王曼（Q2461598）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2461598
            external_identifier: Q2461598
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:36.049Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%BC
      object_person:
        id: p_93nrCbEef6Wj9vBChoFRH8
        status: active
        display_name: 王曼
        merged_into_person_id: null
    - claim:
        id: c_LX1cgkVnNetHW9Jwe11eHj
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TJMDtmQ3zVBFeEj86TGFjs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JJqDAUMJWg1Q4XeuqSesJ1
          claim_id: c_LX1cgkVnNetHW9Jwe11eHj
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_873o8TksNfK9F9vDy5BQpy
          claim_id: c_LX1cgkVnNetHW9Jwe11eHj
          source_id: s_8cMmMzVZ8ZoLquxvkFM1KF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8cMmMzVZ8ZoLquxvkFM1KF
            source_type: api_record
            title: 维基数据：王逢时（Q2586812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2586812
            external_identifier: Q2586812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.997Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6
        - id: cs_qtb4DaRJJc5Dq1bDLHQL3R
          claim_id: c_LX1cgkVnNetHW9Jwe11eHj
          source_id: s_kFy5uYKEd3Qt4CRSMb5DGK
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王禁第八子。
          interpretation_note: null
          source:
            id: s_kFy5uYKEd3Qt4CRSMb5DGK
            source_type: website
            title: 中文维基百科：王逢时
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:10.396Z
            metadata_json: null
      object_person:
        id: p_TJMDtmQ3zVBFeEj86TGFjs
        status: active
        display_name: 王逢时
        merged_into_person_id: null
    - claim:
        id: c_qfb9Wu2P89dLUiSuhvUohj
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FqRJZ4FbxNLE8WDCkdUSH2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RYv3NmuDpsx6TLQEPMMTu4
          claim_id: c_qfb9Wu2P89dLUiSuhvUohj
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_6bksEyLRCa55MjxPsobYhJ
          claim_id: c_qfb9Wu2P89dLUiSuhvUohj
          source_id: s_uRpXdSenKULArGYDHEPuKM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uRpXdSenKULArGYDHEPuKM
            source_type: api_record
            title: 维基数据：王商（Q2656722）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2656722
            external_identifier: Q2656722
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:44.220Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%95%86_(%E6%88%90%E9%83%BD%E4%BE%AF)
      object_person:
        id: p_FqRJZ4FbxNLE8WDCkdUSH2
        status: active
        display_name: 王商
        merged_into_person_id: null
    - claim:
        id: c_t9tWkqN4dYvG9PvBVEgGY5
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bnnhZdLTE5438ztJGTYQ7C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TBT3GiVgYJZbvHMw8RBDLs
          claim_id: c_t9tWkqN4dYvG9PvBVEgGY5
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_AWnbH4qjw5wQAVKDpti3en
          claim_id: c_t9tWkqN4dYvG9PvBVEgGY5
          source_id: s_u1pKy2o2wetHE5y5nJ9Zat
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_u1pKy2o2wetHE5y5nJ9Zat
            source_type: api_record
            title: 维基数据：王崇（Q16260058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260058
            external_identifier: Q16260058
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:52.810Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E5%AE%89%E6%88%90%E4%BE%AF)
      object_person:
        id: p_bnnhZdLTE5438ztJGTYQ7C
        status: active
        display_name: 王崇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_H1bxQqNG2bvBBPj24D5onh
        subject_person_id: p_SSx59dvLsUEEyv9CC9o5HN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_C6K2VCF77avPnc2XoVbJ8X
          claim_id: c_H1bxQqNG2bvBBPj24D5onh
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_cM1d5pwaSqPQPgN8KrQbFN
          claim_id: c_H1bxQqNG2bvBBPj24D5onh
          source_id: s_RatDq1uda51eaD8dvTv9s6
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_RatDq1uda51eaD8dvTv9s6
            source_type: api_record
            title: 維基數據：功显君（Q55286323）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55286323
            external_identifier: Q55286323
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:37.672Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
      object_person:
        id: p_SSx59dvLsUEEyv9CC9o5HN
        status: active
        display_name: 功显君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王禁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禁（卒于前41年），史料所见人物。本项目依据《維基數據：王禁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 前41年 | accepted |
| name.primary | 王禁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mJcAUgUTp3XWHKDKvLh6Kt | 王贺 | accepted |
| children | p_ma56j3xFL2iP3FzuSAfpHk | 王政君 | accepted |
| children | p_BS59WtwbAaqRXm83dBaHiL | 王立 | accepted |
| children | p_g1G7CMpe8j9KM1MarWKQLw | 王凤 | accepted |
| children | p_A3jqrz5MCP94kKUqSaDLU1 | 王谭 | accepted |
| children | p_M4cUFQ28ZfkPom4Qrxw6Qk | 王根 | accepted |
| children | p_93nrCbEef6Wj9vBChoFRH8 | 王曼 | accepted |
| children | p_TJMDtmQ3zVBFeEj86TGFjs | 王逢时 | accepted |
| children | p_FqRJZ4FbxNLE8WDCkdUSH2 | 王商 | accepted |
| children | p_bnnhZdLTE5438ztJGTYQ7C | 王崇 | accepted |
| spouses | p_SSx59dvLsUEEyv9CC9o5HN | 功显君 | accepted |

## 外部来源

- [维基数据：王崇（Q16260058）](https://www.wikidata.org/wiki/Q16260058)
- [维基数据：王逢时（Q2586812）](https://www.wikidata.org/wiki/Q2586812)
- [维基数据：王凤（Q1930926）](https://www.wikidata.org/wiki/Q1930926)
- [维基数据：王根（Q2250693）](https://www.wikidata.org/wiki/Q2250693)
- [维基数据：王贺（Q2360216）](https://www.wikidata.org/wiki/Q2360216)
- [维基数据：王立（Q672221）](https://www.wikidata.org/wiki/Q672221)
- [维基数据：王商（Q2656722）](https://www.wikidata.org/wiki/Q2656722)
- [维基数据：王谭（Q1969370）](https://www.wikidata.org/wiki/Q1969370)
- [維基數據：功显君（Q55286323）](https://www.wikidata.org/wiki/Q55286323)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [維基數據：王曼（Q2461598）](https://www.wikidata.org/wiki/Q2461598)
- [維基數據：王政君（Q701379）](https://www.wikidata.org/wiki/Q701379)
- [中文维基百科：王逢时](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%A2%E6%97%B6)
- [中文维基百科：王凤](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%87%A4)
- [中文维基百科：王政君](https://zh.wikipedia.org/wiki/王政君)
- [中文维基百科：王政君](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%94%BF%E5%90%9B)
