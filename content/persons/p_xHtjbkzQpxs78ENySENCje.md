---
schema: wang-person/v1
id: p_xHtjbkzQpxs78ENySENCje
status: active
merged_into: null
display_name: 王藻
cbdb_id: 120215
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rV7sWrCu3FVhGsdj7bP9Fz
        subject_person_id: p_xHtjbkzQpxs78ENySENCje
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻（生于5世纪），史料所见人物。本项目依据《王藻》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_OeWtsWl_Rh2gbhJWJdW0-D
          claim_id: c_rV7sWrCu3FVhGsdj7bP9Fz
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: Q22814742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4U2UpL3uFGp5v7CtAeEdJG
        subject_person_id: p_xHtjbkzQpxs78ENySENCje
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kejnxYa1FXKgvdiXGfwJRH
          claim_id: c_4U2UpL3uFGp5v7CtAeEdJG
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EYkzNjQgujGmpK8MdFRFCr
        subject_person_id: p_xHtjbkzQpxs78ENySENCje
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aL3tkeeiYVn2p7V76SQdgi
          claim_id: c_EYkzNjQgujGmpK8MdFRFCr
          source_id: s_MFnYy28dp1YpBTNugLeP4g
          stance: supports
          locator: Q22814742
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_MFnYy28dp1YpBTNugLeP4g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王藻（120215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120215&o=json
            external_identifier: CBDB:120215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:17:48.624Z
            metadata_json: null
        - id: cs_sr99kjozf5xWZRwC9a3u5q
          claim_id: c_EYkzNjQgujGmpK8MdFRFCr
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: Q22814742
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4GXUiNoTf8sMbXsxnZqKgm
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHtjbkzQpxs78ENySENCje
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kGHGN3R1i88WxESdK8u7Dn
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T9oFeHgKECyHSzfi1GR4bB
            source_type: api_record
            title: 维基数据：王偃（Q11572909）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572909
            external_identifier: Q11572909
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:27.598Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%81%83
        - id: cs_eTGUACTaxi4NBjQXHFnrEM
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
        - id: cs_C8pTT3FdyJE8GzaocfyDFy
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：王偃长子
          quotation: 王藻，王偃长子，东阳太守，尚宋文帝刘义隆的六女临川长公主刘英媛，元徽年间下狱死。
          interpretation_note: null
          source:
            id: s_5tLASNMeNdWKrBsKoxom8v
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:14.501Z
            metadata_json: null
        - id: cs_nACtYGXfJ3jFnKbMbUxdqN
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：王偃长子
          quotation: 王藻，王偃长子，东阳太守，尚宋文帝刘义隆的六女临川长公主刘英媛，元徽年间下狱死。
          interpretation_note: null
          source:
            id: s_a2CTnxE4LwRuQ6x2sS3F4U
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:27.336Z
            metadata_json: null
        - id: cs_A8qFLJBvLHpVtpQY7Lx4zb
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：王偃长子
          quotation: 王藻，王偃长子，东阳太守，尚宋文帝刘义隆的六女临川长公主刘英媛，元徽年间下狱死。
          interpretation_note: null
          source:
            id: s_GrAcQoc7HJWZm6dpgd5VkC
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:28.058Z
            metadata_json: null
        - id: cs_3AZfxxYFEAV7V45VKjdeFf
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：王偃长子
          quotation: 王藻，王偃长子，东阳太守，尚宋文帝刘义隆的六女临川长公主刘英媛，元徽年间下狱死。
          interpretation_note: null
          source:
            id: s_md4kq9QQ7xb94G1zDWdTio
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:57.457Z
            metadata_json: null
        - id: cs_eUg6PSv9wHF6HaJHym69te
          claim_id: c_4GXUiNoTf8sMbXsxnZqKgm
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：王偃长子
          quotation: 王藻，王偃长子，东阳太守，尚宋文帝刘义隆的六女临川长公主刘英媛，元徽年间下狱死。
          interpretation_note: null
          source:
            id: s_hrF9dJ9LLwnXJP1W8EkHYm
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:25.018Z
            metadata_json: null
      object_person:
        id: p_zzsFuAEs6JJ4EJkXaf48Mn
        status: active
        display_name: 王偃
        merged_into_person_id: null
  children:
    - claim:
        id: c_quNnAg7uE7wT3MbTm8Nsfa
        subject_person_id: p_xHtjbkzQpxs78ENySENCje
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DivzuL1bPhRrThuEjKWgZ2
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
        - id: cs_938GqMRSNFk6ZHDFxBcpm3
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_B7sBe6UJTi4c8awW5uBYAW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_B7sBe6UJTi4c8awW5uBYAW
            source_type: api_record
            title: 维基数据：王彻（Q16906024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906024
            external_identifier: Q16906024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:02.158Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
        - id: cs_AsKgdZm49QV5kBXHE5E2k5
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_FDChK9B6LiYc2CZygT1Q37
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王偃之孙，王藻与临川长公主刘英媛的儿子
          interpretation_note: null
          source:
            id: s_FDChK9B6LiYc2CZygT1Q37
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:24.806Z
            metadata_json: null
        - id: cs_eLw3uXxGhfSbF5VsbeDfLF
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王藻 → 王彻
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
        - id: cs_8XEW6Cy4HAv315uMJVrAJj
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王藻 → 王彻
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
        - id: cs_R3C956Y46azaNBAXpoPP76
          claim_id: c_quNnAg7uE7wT3MbTm8Nsfa
          source_id: s_KszAPzRgpveDh3B6KK6Y3L
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王彻（），琅邪临沂人，王偃之孙，王藻与临川长公主刘英媛的儿子。
          interpretation_note: null
          source:
            id: s_KszAPzRgpveDh3B6KK6Y3L
            source_type: website
            title: 中文维基百科：王彻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:43.924Z
            metadata_json: null
      object_person:
        id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        status: active
        display_name: 王彻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_cZHZHTsH8Urg2Ss2R4QQFD
        subject_person_id: p_fUCHacNBi6Jb94qtKQ928C
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xHtjbkzQpxs78ENySENCje
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_g7hCeG3qQjBoQF1fn8HVSU
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
        - id: cs_i3iCuryHjWDZ2yibbC17VF
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_MFnYy28dp1YpBTNugLeP4g
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_MFnYy28dp1YpBTNugLeP4g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王藻（120215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120215&o=json
            external_identifier: CBDB:120215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:17:48.624Z
            metadata_json: null
        - id: cs_QUUJLXf8faTVFSGA9kD7g8
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_EyqFK4QMbrvDvmC7aifKWb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_EyqFK4QMbrvDvmC7aifKWb
            source_type: api_record
            title: 维基数据：刘英媛（Q16603333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603333
            external_identifier: Q16603333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:00.211Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
        - id: cs_iJSjf33iBrjg4n4TYWvjRw
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_b8KKgCWYJYobgfZ51ADh7W
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_b8KKgCWYJYobgfZ51ADh7W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉英媛（120213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120213&o=json
            external_identifier: CBDB:120213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:00.359Z
            metadata_json: null
        - id: cs_UzvjjS8QZ88KMnMAi1DoUK
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_vLgWxtYsDS8PnqHuPk8WcV
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_vLgWxtYsDS8PnqHuPk8WcV
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:06.830Z
            metadata_json: null
        - id: cs_FdTQHL8kCA6xMLaiz9t81P
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_RrhKDRXJPNiGnFDuhKXHFh
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_RrhKDRXJPNiGnFDuhKXHFh
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:35.217Z
            metadata_json: null
        - id: cs_2JEC7XXnT4Rs3xw1h8QuC5
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_jSjNCcfCfCYFX1SZrvgBEn
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_jSjNCcfCfCYFX1SZrvgBEn
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:35.038Z
            metadata_json: null
        - id: cs_z8nMNJPLnPr7zbWSs8Er2G
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_ADxTkDBfjXZfC1GuzpYA1S
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_ADxTkDBfjXZfC1GuzpYA1S
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:09.897Z
            metadata_json: null
        - id: cs_SAgV3hyhWN2Q7t2K2Q7ZnA
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_ZfJLBohdzDDaArahdSPWC4
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_ZfJLBohdzDDaArahdSPWC4
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:29.551Z
            metadata_json: null
      object_person:
        id: p_fUCHacNBi6Jb94qtKQ928C
        status: active
        display_name: 刘英媛
        merged_into_person_id: null
    - claim:
        id: c_DDNc1_x0Q80Xdv7FhXT7tn
        subject_person_id: p_xHtjbkzQpxs78ENySENCje
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fUCHacNBi6Jb94qtKQ928C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxzaNQHmg7DsoxHmC7X_YF
          claim_id: c_DDNc1_x0Q80Xdv7FhXT7tn
          source_id: s_MFnYy28dp1YpBTNugLeP4g
          stance: supports
          locator: 明清婦女著作數據庫，MQWW PoetID#5598：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_fUCHacNBi6Jb94qtKQ928C
        status: active
        display_name: 刘英媛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王藻（生于5世纪），史料所见人物。本项目依据《王藻》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 5世纪 | accepted |
| name.primary | 王藻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |
| children | p_Z61kX1Nv7EC6m6zX2Q6T3Q | 王彻 | accepted |
| spouses | p_fUCHacNBi6Jb94qtKQ928C | 刘英媛 | accepted |
| spouses | p_fUCHacNBi6Jb94qtKQ928C | 刘英媛 | accepted |

## 外部来源

- [维基数据：刘英媛（Q16603333）](https://www.wikidata.org/wiki/Q16603333)
- [维基数据：王彻（Q16906024）](https://www.wikidata.org/wiki/Q16906024)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
- [维基数据：王藻（Q22814742）](https://www.wikidata.org/wiki/Q22814742)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：刘荣男](https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7)
- [中文维基百科：劉英媛](https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B)
- [中文维基百科：王彻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB)
- [CBDB 中国历代人物传记资料库：劉英媛（120213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120213&o=json)
- [CBDB 中国历代人物传记资料库：王藻（120215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120215&o=json)
