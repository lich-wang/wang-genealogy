---
schema: wang-person/v1
id: p_awcmjvARumCUVcUWMzCoPg
status: active
merged_into: null
display_name: 王裁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3HGdGG5HRVySqCFUPymaQC
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裁（生于3世纪），西晋时期大臣。维基数据以独立条目 Q16906209 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_kJ6roQky9CY8a5rZAipk5A
          claim_id: c_3HGdGG5HRVySqCFUPymaQC
          source_id: s_y2uFWnubUzM7scMDF4KcjT
          stance: supports
          locator: Q16906209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kdCG6BcepVa96swZbfGCDP
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 3世纪
            calendar_note: 維基數據 P569 結構化日期，精度：世纪
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VyzRrgbtfirLwowvARHc9m
          claim_id: c_kdCG6BcepVa96swZbfGCDP
          source_id: s_y2uFWnubUzM7scMDF4KcjT
          stance: supports
          locator: Q16906209
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
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_BzD2Uv31HVPp3LU9L3LpBf
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 西晋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SJQXCBTPBR5wNz8U5BAtag
          claim_id: c_BzD2Uv31HVPp3LU9L3LpBf
          source_id: s_y2uFWnubUzM7scMDF4KcjT
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：西晋时期大臣
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QfrN5dJKA4QnHDEcQ8mE1P
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L2uJ2vURiBfttG1bU7acH8
          claim_id: c_QfrN5dJKA4QnHDEcQ8mE1P
          source_id: s_y2uFWnubUzM7scMDF4KcjT
          stance: supports
          locator: Q16906209
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_FLFcPPEXByru3j5c6vxzPG
        status: active
        display_name: 王览
        merged_into_person_id: null
  children:
    - claim:
        id: c_PAURmjMEJLiZUEvMBWg2uH
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xbn65bXVofZnsi76cqAQCP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_721qEPhLQfhQboTD4VDxhR
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_ZAm91q8ts6LtYjrmAiQGNG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAm91q8ts6LtYjrmAiQGNG
            source_type: website
            title: 中文维基百科：王導
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王導
            external_identifier: Q3274914
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_FoXZG3vKcesfT718M7GBZP
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_FRo67ZrNmc5pka5csQaFUo
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FRo67ZrNmc5pka5csQaFUo
            source_type: api_record
            title: 維基數據：王導（Q3274914）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q3274914
            external_identifier: Q3274914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:40.794Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%8E
        - id: cs_MEgEQwsHqXadGTwnsGPNEB
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_y2uFWnubUzM7scMDF4KcjT
          stance: supports
          locator: P40（子女）
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
        - id: cs_KJkyvzcGXesuiVFoRzJJxY
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_rCP6CJoM7Pq41uB8uHSbXK
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rCP6CJoM7Pq41uB8uHSbXK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王導（25788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json
            external_identifier: CBDB:25788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:39.033Z
            metadata_json: null
        - id: cs_gBbKMK1MJ5yQGLz6ua7J1X
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_Jk6BsnVQ6aHkc6JLa8XT3x
          stance: supports
          locator: 亲属关系：長子
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
        - id: cs_F6AuX3EK29y9VCsuykUDfq
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王导
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
        - id: cs_jcCpPicWMoJkS2EwSwjDAL
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王导
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
        - id: cs_JWa89brZG8YRn1B5xdPjHx
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王导
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
        - id: cs_Sv87rpvbyWiqTbWvyodAt4
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王导
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
        - id: cs_Xuo8Q9PvQH3dbE3rAyRc7u
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王裁 → 王导
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
        - id: cs_BfQnPsALnsBNZJF1znzsi2
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王裁 → 王导
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
        - id: cs_pynDD3A5ErrMYjkghxP2d9
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王导
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
        - id: cs_JvHuwZEhCg9fdzEfNCHzdr
          claim_id: c_PAURmjMEJLiZUEvMBWg2uH
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王导
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
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
    - claim:
        id: c_JnuQATb55mzpPU6aSRSo1x
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ceCMYoiv26S5pFT4xfWfzu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZH7AC8ywaKumDn45ZvDV4P
          claim_id: c_JnuQATb55mzpPU6aSRSo1x
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王裁 → 王颍
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
        - id: cs_ApmE5hcArLs8X6T6BXGsCU
          claim_id: c_JnuQATb55mzpPU6aSRSo1x
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王裁 → 王颍
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
        id: p_ceCMYoiv26S5pFT4xfWfzu
        status: active
        display_name: 王颍
        merged_into_person_id: null
    - claim:
        id: c_QDfkkk3HASBCFoF14Jd84N
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_iVC2o9GwxoxLP7sDmdacPA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_48tvKb3246VtcaB3xbQSnS
          claim_id: c_QDfkkk3HASBCFoF14Jd84N
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 三子：導、穎、敞。
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
        - id: cs_Jj9KwDk8C1UeMmVUqE9q57
          claim_id: c_QDfkkk3HASBCFoF14Jd84N
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王裁 → 王敞
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
        - id: cs_f1Ph7pe87uxYQticiaBZix
          claim_id: c_QDfkkk3HASBCFoF14Jd84N
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王裁 → 王敞
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
      object_person:
        id: p_iVC2o9GwxoxLP7sDmdacPA
        status: active
        display_name: 王敞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王裁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王裁（生于3世纪），西晋时期大臣。维基数据以独立条目 Q16906209 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 3世纪 | accepted |
| historical.period | 西晋 | accepted |
| name.primary | 王裁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FLFcPPEXByru3j5c6vxzPG | 王览 | accepted |
| children | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| children | p_ceCMYoiv26S5pFT4xfWfzu | 王颍 | accepted |
| children | p_iVC2o9GwxoxLP7sDmdacPA | 王敞 | accepted |

## 外部来源

- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [維基數據：王裁（Q16906209）](https://www.wikidata.org/wiki/Q16906209)
- [維基數據：王導（Q3274914）](https://www.wikidata.org/wiki/Q3274914)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王導](https://zh.wikipedia.org/wiki/王導)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王裁（25787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25787&o=json)
- [CBDB 中国历代人物传记资料库：王導（25788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json)
- [CBDB 中国历代人物传记资料库：王覽（25786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json)
