---
schema: wang-person/v1
id: p_FLFcPPEXByru3j5c6vxzPG
status: active
merged_into: null
display_name: 王览
cbdb_id: 25786
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o9LzMAZPrDTBBHgwUckoM7
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王览（生于206年），西晉人物。籍贯沂水。（中国历代人物传记资料库 CBDB 25786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LbSBaQ7kz2k1zvFWtVkgVF
          claim_id: c_o9LzMAZPrDTBBHgwUckoM7
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_vv9dICkOXZpQJdpMHkAaUe
          claim_id: c_o9LzMAZPrDTBBHgwUckoM7
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: CBDB:25786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_swnKf3JBpuyif9tNQ2HSSs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覽（25786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json
            external_identifier: CBDB:25786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:48.196Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NaACBc9SsrVFucijT5ZjrK
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 206年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0206-01-01
            latest: 0206-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GUExCNXrV7yAqV8XteHkGX
          claim_id: c_NaACBc9SsrVFucijT5ZjrK
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BwEvQ6z7oDc9JKM5V4gCK9
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王览
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R4SyKCYgHa9CnCKxVUfDA5
          claim_id: c_BwEvQ6z7oDc9JKM5V4gCK9
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: Q15907839
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_x2o5oAaMXBA5KzoPRxgAHC
          claim_id: c_BwEvQ6z7oDc9JKM5V4gCK9
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: Q15907839
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3PDpLEAoUdfo6qLGQSgwxj
        subject_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FLFcPPEXByru3j5c6vxzPG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h3ujHHco7zi7S8tifcwKbq
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_usi9A3QdLgsHXzkSBTdf9P
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_usi9A3QdLgsHXzkSBTdf9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（25784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json
            external_identifier: CBDB:25784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:33.735Z
            metadata_json: null
        - id: cs_i2Ny23WgB3CCe9Qr8NxQWm
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
        - id: cs_fy9J1Pj8ZGL6LBs5XVikTd
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_2q3MzkrCxcqdZxRmAmuUYP
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_swnKf3JBpuyif9tNQ2HSSs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覽（25786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json
            external_identifier: CBDB:25786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:48.196Z
            metadata_json: null
        - id: cs_8H5X2Df29c5sNDKGp5KGq7
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：祥、覽。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_G6A9Mv1GnTEMMvApxP4pWa
        status: active
        display_name: 王融
        merged_into_person_id: null
  children:
    - claim:
        id: c_X1VNhJnVkmvJfYTBhzsJya
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_awcmjvARumCUVcUWMzCoPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JqsAUJohKBx51SuSgiNV4Y
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_Jk6BsnVQ6aHkc6JLa8XT3x
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Jk6BsnVQ6aHkc6JLa8XT3x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王裁（25787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25787&o=json
            external_identifier: CBDB:25787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:36.623Z
            metadata_json: null
        - id: cs_tNVsp57K2xQu8Gxn7d4gBi
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_y2uFWnubUzM7scMDF4KcjT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y2uFWnubUzM7scMDF4KcjT
            source_type: api_record
            title: 維基數據：王裁（Q16906209）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906209
            external_identifier: Q16906209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:01.886Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%81
        - id: cs_eoGo9eMc7LWNUDV28ynSLM
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_FDuAZXRbhGBDv7p6YBar1g
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_swnKf3JBpuyif9tNQ2HSSs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覽（25786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json
            external_identifier: CBDB:25786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:48.196Z
            metadata_json: null
        - id: cs_hV2se3Xh3yQRvafh4NeHJ7
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览长子
          quotation: 王裁，王览长子，抚军长史，镇军司马。
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_SC86RwotdHB8M3PyTXS3fP
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览长子
          quotation: 王裁，王览长子，抚军长史，镇军司马。
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_PMH2SzVp64dkfVHnuWmDRb
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览长子
          quotation: 王裁，王览长子，抚军长史，镇军司马。
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_by9L8EBhZezWp63yAHqui6
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览长子
          quotation: 王裁，王览长子，抚军长史，镇军司马。
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_FSSaX9L195MBs4fBZqcB2F
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王裁
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_p43EpCJBF3Eiz3zDqXWAAa
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王裁
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_xx6b9jagdWtM6RoABP2t3c
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览长子
          quotation: 王裁，王览长子，抚军长史，镇军司马。
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_3ZBAxutfdLWsJiQoAaeoBm
          claim_id: c_X1VNhJnVkmvJfYTBhzsJya
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览长子
          quotation: 王裁，王览长子，抚军长史，镇军司马。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_awcmjvARumCUVcUWMzCoPg
        status: active
        display_name: 王裁
        merged_into_person_id: null
    - claim:
        id: c_GShnEMGZEknG4wmPjPPHHo
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9a1AR3eMsH8Q2nke4Kr9PA
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_kqxAwLLP2Aj99oSg7Ntt3M
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_kqxAwLLP2Aj99oSg7Ntt3M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正（25791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25791&o=json
            external_identifier: CBDB:25791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:37.109Z
            metadata_json: null
        - id: cs_UXoB365h1LcV3Lqzi9hU8S
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
        - id: cs_V75THYUZfYFBgEwHVGSrj6
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_AvUacjExTBU2BpvAx532HX
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_swnKf3JBpuyif9tNQ2HSSs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覽（25786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json
            external_identifier: CBDB:25786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:48.196Z
            metadata_json: null
        - id: cs_rkRrkW8sd7JFiztSBZfvk9
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_JscizbF528nLg1X7CymgdA
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_fHDcN4fkroKAj9gkrcmTE2
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_t7Roe1DbYaec1E3uXFQx6W
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_45LLv4angUWScWDBSE9K86
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王正
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_BMQFAuSqfToN8oVY1qgH8r
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王正
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_3UL59B8LRZdgWfwzKRuf9L
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_AYzGX1qY1AYNGgK6toTccT
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_1FP5oDA1V8yoh1RUK94RDJ
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_zgLSxM6Df6WmD94BCp19kQ
        status: active
        display_name: 王正
        merged_into_person_id: null
    - claim:
        id: c_iMX1M5aTGBAf2eqm6GS3Yw
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N9fxEcP8n1PZnQ6mnfbKCK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Vb77iioCTPb85F2nPDE2iB
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_gsH9CP8M4PeHH8kNKDGt1W
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gsH9CP8M4PeHH8kNKDGt1W
            source_type: api_record
            title: 維基數據：王基（Q22814890）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814890
            external_identifier: Q22814890
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:35.402Z
            metadata_json: null
        - id: cs_ww36NP2bBnVPqhc6r41ktJ
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_PKAq6CRcKstd2MPGEXzPYj
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_FD2V1k35MT83Au91uSQJSQ
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_jCuQwUtpc2ELc6qz4bB8KH
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_FamVnMX6SR1P7Y3mud2q2E
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_yTSQN23SNH74dwWSdzFXSd
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王基
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_gudgUFWbSX1ZzWnPqLxsvU
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王基
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_YHZKvqiutPRnNRn7eWdHB7
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_LH1BAKKPFv3Cnb3RUyp3RZ
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_9fPK1L2JALVnbgnM7Poeyh
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_N9fxEcP8n1PZnQ6mnfbKCK
        status: active
        display_name: 王基
        merged_into_person_id: null
    - claim:
        id: c_12Lvbt4bPdQ6Q38a1M43jX
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tz35VynAtU3PBPbA9NGrgV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mXBD2H11ypa1VMjpSx8Z3w
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_dgBBdz6uxm3LBUnUbAhGEQ
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_Z2j9zDLjM5J19yfc96E5Ku
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z2j9zDLjM5J19yfc96E5Ku
            source_type: api_record
            title: 维基数据：王会（Q22814788）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814788
            external_identifier: Q22814788
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.887Z
            metadata_json: null
        - id: cs_saEsVr4QeP8Zp3kR1qgPD9
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_XygEmVEKkyQtyhZygSfuMg
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_U83To5MtnMy9ACuvxoK7J7
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_wvcrKUbKtci5qowT3y9rYV
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_NyeqWFifJx67ihUW6mnNH1
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王会 (晋)
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_H5XTJBAXGB4WHXYS965v6w
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王会 (晋)
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_jNSmvPRjktGzGMBs1RULr4
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_F7g36KJH2QHJ1fMD9sCvAJ
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_dFPBXEFQv1dR9HTaWM8hKw
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_Tz35VynAtU3PBPbA9NGrgV
        status: active
        display_name: 王会
        merged_into_person_id: null
    - claim:
        id: c_JGYQBfXWJ5LXsRaeMiZ1kw
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQ8VFA69Lnhr9J6fbmXBdE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2RrSGv6eWFyL6BcM5GkmTE
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_QQM3UCTrYVwxDGuuB316p4
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_FXSp5GeiBGgB5csWzotisY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FXSp5GeiBGgB5csWzotisY
            source_type: api_record
            title: 维基数据：王琛（Q22814888）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814888
            external_identifier: Q22814888
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
        - id: cs_DtmbrSA1X3vixNNgtNvxE6
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览六子
          quotation: 王琛，王览六子，晋国子祭酒。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_pU71MstEogwKuddKAs3g8h
          claim_id: c_JGYQBfXWJ5LXsRaeMiZ1kw
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_MQ8VFA69Lnhr9J6fbmXBdE
        status: active
        display_name: 王琛
        merged_into_person_id: null
    - claim:
        id: c_w8LNEk5meYYAJQNKWDakMZ
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_fYutG3gR2gH8ELiPpcvYFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C9CQr9rMTChBQYncJdnVrF
          claim_id: c_w8LNEk5meYYAJQNKWDakMZ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王彦
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_Q1KfDLZbb2UtMv9D1AjKyL
          claim_id: c_w8LNEk5meYYAJQNKWDakMZ
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览五子
          quotation: 王彦，王览五子，晋中护军。
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_XYefDHuB3SsEJqKGGweP37
          claim_id: c_w8LNEk5meYYAJQNKWDakMZ
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
        - id: cs_pr8dSWZXZ1x4v647ABbiHu
          claim_id: c_w8LNEk5meYYAJQNKWDakMZ
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览五子
          quotation: 王彦，王览五子，晋中护军。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_wBb79AJYAnhnzCtYL9RMvq
          claim_id: c_w8LNEk5meYYAJQNKWDakMZ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王彦
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_fYutG3gR2gH8ELiPpcvYFH
        status: active
        display_name: 王彦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_MzSaPH2THFJWJ6k9QaRkx7
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e4mfTDyp78VELjMHYoU3Hw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9J5HqHhLh7wdYu4FzNh9nD
          claim_id: c_MzSaPH2THFJWJ6k9QaRkx7
          source_id: s_tDGvR2bdiBueMRSchFN37W
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王览之孙
          interpretation_note: null
          source:
            id: s_tDGvR2bdiBueMRSchFN37W
            source_type: website
            title: 中文维基百科：王棱
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A3%B1
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.186Z
            metadata_json: null
        - id: cs_7p7bmsEghwCd3L7rSShK8u
          claim_id: c_MzSaPH2THFJWJ6k9QaRkx7
          source_id: s_YkMJdFZShLcu3n9QBaKHGR
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王览之孙，国子祭酒王琛之子，王导从弟，王彬从兄。
          interpretation_note: null
          source:
            id: s_YkMJdFZShLcu3n9QBaKHGR
            source_type: website
            title: 中文维基百科：王棱
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A3%B1
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:22:11.463Z
            metadata_json: null
      object_person:
        id: p_e4mfTDyp78VELjMHYoU3Hw
        status: active
        display_name: 王棱
        merged_into_person_id: null
  other: []
---

# 王览

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王览（生于206年），西晉人物。籍贯沂水。（中国历代人物传记资料库 CBDB 25786） | accepted |
| birth.date | 206年 | accepted |
| name.primary | 王览 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G6A9Mv1GnTEMMvApxP4pWa | 王融 | accepted |
| children | p_awcmjvARumCUVcUWMzCoPg | 王裁 | accepted |
| children | p_zgLSxM6Df6WmD94BCp19kQ | 王正 | accepted |
| children | p_N9fxEcP8n1PZnQ6mnfbKCK | 王基 | accepted |
| children | p_Tz35VynAtU3PBPbA9NGrgV | 王会 | accepted |
| children | p_MQ8VFA69Lnhr9J6fbmXBdE | 王琛 | accepted |
| children | p_fYutG3gR2gH8ELiPpcvYFH | 王彦 | accepted |
| descendants | p_e4mfTDyp78VELjMHYoU3Hw | 王棱 | accepted |

## 外部来源

- [维基数据：王琛（Q22814888）](https://www.wikidata.org/wiki/Q22814888)
- [维基数据：王会（Q22814788）](https://www.wikidata.org/wiki/Q22814788)
- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [維基數據：王裁（Q16906209）](https://www.wikidata.org/wiki/Q16906209)
- [維基數據：王基（Q22814890）](https://www.wikidata.org/wiki/Q22814890)
- [維基數據：王融（Q22814786）](https://www.wikidata.org/wiki/Q22814786)
- [維基數據：王正（Q22814789）](https://www.wikidata.org/wiki/Q22814789)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王棱](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A3%B1)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王裁（25787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25787&o=json)
- [CBDB 中国历代人物传记资料库：王覽（25786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json)
- [CBDB 中国历代人物传记资料库：王融（25784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json)
- [CBDB 中国历代人物传记资料库：王正（25791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25791&o=json)
