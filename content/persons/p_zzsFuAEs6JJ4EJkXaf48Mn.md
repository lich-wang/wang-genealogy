---
schema: wang-person/v1
id: p_zzsFuAEs6JJ4EJkXaf48Mn
status: active
merged_into: null
display_name: 王偃
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S2I4jJnU-ZeYDzBpAmsRU4
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃（403年—456年），史料所见人物。本项目依据《王偃》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7HHDjuhdGFfYrBELdZRCUc
          claim_id: c_S2I4jJnU-ZeYDzBpAmsRU4
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: Q11572909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FbnBTeaHxCqREJ5tMVS5t
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 403年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0403-01-01
            latest: 0403-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BQnvW2Awo5W4LKLGR4pZWT
          claim_id: c_4FbnBTeaHxCqREJ5tMVS5t
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N9wPM5xoQGbRXt6YMfQS7g
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 456年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0456-01-01
            latest: 0456-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EUVZrzkJcJY4kAPa4m3hVZ
          claim_id: c_N9wPM5xoQGbRXt6YMfQS7g
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2HB8ex3ufNNBF1vEZRv6ak
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T821Gnfp76tPvXZWPG57Vo
          claim_id: c_2HB8ex3ufNNBF1vEZRv6ak
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: Q11572909
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3GRB1GNQyakHYy6szZU9nF
        subject_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vvd7jDXS5S4EbQ7EJgqsuT
          claim_id: c_3GRB1GNQyakHYy6szZU9nF
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WmuRV1fsqQo64BrHaRUPiR
            source_type: api_record
            title: 维基数据：王嘏（Q18118172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118172
            external_identifier: Q18118172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.246Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%98%8F
        - id: cs_j8H493EP9bmR2BE1Fs8Dab
          claim_id: c_3GRB1GNQyakHYy6szZU9nF
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_RhUjZsZ1qknHMkKvcSu7Pr
        status: active
        display_name: 王嘏
        merged_into_person_id: null
  children:
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
        id: p_xHtjbkzQpxs78ENySENCje
        status: active
        display_name: 王藻
        merged_into_person_id: null
    - claim:
        id: c_T7yp38Ez8mUeq9QZ8G2BYj
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u5zWSj2L39xyxZe5TyLFsc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ur94geF8gnK9Y92qtMqBJ1
          claim_id: c_T7yp38Ez8mUeq9QZ8G2BYj
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
        - id: cs_sWpum53saUEzEKP39KUkXD
          claim_id: c_T7yp38Ez8mUeq9QZ8G2BYj
          source_id: s_YRYMwgJ6QtZSPkp4fgTBqi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YRYMwgJ6QtZSPkp4fgTBqi
            source_type: api_record
            title: 维基数据：王宪嫄（Q1059974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1059974
            external_identifier: Q1059974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:54.673Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84
        - id: cs_7mSpAUPgAjBvng7ES1ud8M
          claim_id: c_T7yp38Ez8mUeq9QZ8G2BYj
          source_id: s_BtS4aXeLZhGxqVd9UA2akY
          stance: supports
          locator: 条文：父
          quotation: 王憲嫄（{{bd|428年||464年|10月9日|catIdx=Wang,王}}），琅邪郡临沂县（今山东省临沂市）人，南朝宋孝武帝劉駿的皇后（也是其表姐），父親為王偃，母亲為宋武帝劉裕的女兒吴兴长公主刘荣男，元嘉二十年（443年）時，被納為武陵王妃
          interpretation_note: null
          source:
            id: s_BtS4aXeLZhGxqVd9UA2akY
            source_type: website
            title: 中文维基百科：王憲嫄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:06.094Z
            metadata_json: null
        - id: cs_amUHB3XX6uJBnC2tGDfDWG
          claim_id: c_T7yp38Ez8mUeq9QZ8G2BYj
          source_id: s_wqn3DQjfDivK4aTBg3XDpn
          stance: supports
          locator: 条文：父
          quotation: 王憲嫄，琅邪郡临沂县（今山东省临沂市）人，南朝宋孝武帝劉駿的皇后（也是其表姐），父親為王偃，母亲為宋武帝劉裕的女兒吴兴长公主刘荣男，元嘉二十年（443年）時，被納為武陵王妃
          interpretation_note: null
          source:
            id: s_wqn3DQjfDivK4aTBg3XDpn
            source_type: website
            title: 中文维基百科：王憲嫄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:22.835Z
            metadata_json: null
      object_person:
        id: p_u5zWSj2L39xyxZe5TyLFsc
        status: active
        display_name: 王宪嫄
        merged_into_person_id: null
    - claim:
        id: c_fBT16Dx7jNVHBWAJLRvbC6
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_48BB9G5rFGngD1z7yugBB9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PCWgpfsX3QyQ4GZpPBmQRm
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
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
        - id: cs_VGer9V8nj85boD1F7bEhdZ
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_8k1YrcbGt4jZKeJcY98o6y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8k1YrcbGt4jZKeJcY98o6y
            source_type: api_record
            title: 维基数据：王攸（Q22814746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814746
            external_identifier: Q22814746
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_Lw99g4Pc3ixCnaf2UvDADD
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
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
        - id: cs_HxQ1KayoYzCgLSG9a3Aabi
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
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
        - id: cs_aPBWLsMSCxFLgXKuRpD7iz
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
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
        - id: cs_HHcckHrDhBZ7Vj8b5PP9N1
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
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
        - id: cs_L9ECAFKFecVHDf5HxybLJr
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
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
        id: p_48BB9G5rFGngD1z7yugBB9
        status: active
        display_name: 王攸
        merged_into_person_id: null
    - claim:
        id: c_LtjssY26HBhDNLdvqyQrtA
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F3A2LfaZNs8ryznksG7eQn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_niaxX88pQqRwTBFMo77X3V
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
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
        - id: cs_thQaQQDjm4S4Ai7ACiZWqn
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_NuY8cr7vCDr1MHDyamJc6s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NuY8cr7vCDr1MHDyamJc6s
            source_type: api_record
            title: 维基数据：王懋（Q22814998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814998
            external_identifier: Q22814998
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_GGQXkMMVe1NEkXuua27Wgh
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
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
        - id: cs_H7cok324VGANJCZ8ZaRhnG
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
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
        - id: cs_NLKY9NSMAe3i3d4sq7T9ef
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
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
        - id: cs_nSasZjJcWfrJVQMZPi56Gt
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
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
        - id: cs_CjxdCkoJ91mKTtuNbGGJdQ
          claim_id: c_LtjssY26HBhDNLdvqyQrtA
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：王偃次子
          quotation: 王懋，王偃次子。
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
        id: p_F3A2LfaZNs8ryznksG7eQn
        status: active
        display_name: 王懋
        merged_into_person_id: null
    - claim:
        id: c_f2uT2wYs4bMxSapcnHh9Jf
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3QK9sxen8NvQMirjSLNDjn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4ZD86GRmXQL5AvXJxaWzWy
          claim_id: c_f2uT2wYs4bMxSapcnHh9Jf
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
        - id: cs_e8SF4qJ7YwV2DHNE2B6U7Q
          claim_id: c_f2uT2wYs4bMxSapcnHh9Jf
          source_id: s_P4M4F7fVre19uAcqF2wxZu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_P4M4F7fVre19uAcqF2wxZu
            source_type: api_record
            title: 维基数据：王氏（Q134097625）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q134097625
            external_identifier: Q134097625
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:01.275Z
            metadata_json: null
      object_person:
        id: p_3QK9sxen8NvQMirjSLNDjn
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_qF2yR7qEvxkBbG9gNNVEPk
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HdjJh5gLRkho5TPhtMKXho
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4XdX1qXooU6NgbL5z5U7WQ
          claim_id: c_qF2yR7qEvxkBbG9gNNVEPk
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：王偃幼子
          quotation: 王臻，王偃幼子。
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
        - id: cs_4czsAy3FFwHtpKfLq347LC
          claim_id: c_qF2yR7qEvxkBbG9gNNVEPk
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：王偃幼子
          quotation: 王臻，王偃幼子。
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
        - id: cs_FrFptJWc59v2XbxabvDjCw
          claim_id: c_qF2yR7qEvxkBbG9gNNVEPk
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：王偃幼子
          quotation: 王臻，王偃幼子。
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
        - id: cs_E3LwaCf6f11PUcx79nWGRf
          claim_id: c_qF2yR7qEvxkBbG9gNNVEPk
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：王偃幼子
          quotation: 王臻，王偃幼子。
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
        id: p_HdjJh5gLRkho5TPhtMKXho
        status: active
        display_name: 王臻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GhMx7Bhz8xhMBNyCi3FmY2
        subject_person_id: p_td2UtUSqFoKTyKw8j733P8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_zDM7KWs8woGRYQeL6ikJD6
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P26（配偶）
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
        - id: cs_BLkbG6Q5n7wCHdmFqEmR1M
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_cCUH45zwtnQbSQLX1AKCQD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cCUH45zwtnQbSQLX1AKCQD
            source_type: api_record
            title: 维基数据：刘荣男（Q10897941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10897941
            external_identifier: Q10897941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:42.716Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
        - id: cs_oqorPU6cdv2Q6PEZpajWe8
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_MoGLfQZs6f973hTUME2BFA
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_h6VHk6j1xETHFb2CmzNUQu
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_x15UtPPg544LmTJUkKieX9
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        - id: cs_XY4pNbjfyNkjCzpqKj6tJY
          claim_id: c_GhMx7Bhz8xhMBNyCi3FmY2
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王偃
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
        id: p_td2UtUSqFoKTyKw8j733P8
        status: active
        display_name: 刘荣男
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_yNZMXvTFvpunP9v7Wq8UAr
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z61kX1Nv7EC6m6zX2Q6T3Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAv3QV9LMSc2wMxLeKm7t7
          claim_id: c_yNZMXvTFvpunP9v7Wq8UAr
          source_id: s_FDChK9B6LiYc2CZygT1Q37
          stance: supports
          locator: 条文：条文识读（孙）（2世）
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
        - id: cs_eCDMwZH6vkKa871DAiKGt3
          claim_id: c_yNZMXvTFvpunP9v7Wq8UAr
          source_id: s_KszAPzRgpveDh3B6KK6Y3L
          stance: supports
          locator: 条文：条文识读（祖）（2世）
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
    - claim:
        id: c_rY87Say8tGVodobqh8Dgsy
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vdsPZVFDu6uu9HcLUiGzWo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qG86o5aB89dT6NmRbGREbC
          claim_id: c_rY87Say8tGVodobqh8Dgsy
          source_id: s_GJbx2t6HVns7rAQw4jZtDx
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父王偃，曾任职南朝宋右光禄大夫，赠开府仪同三司。
          interpretation_note: null
          source:
            id: s_GJbx2t6HVns7rAQw4jZtDx
            source_type: website
            title: 中文维基百科：王亮 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BA%AE_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:52.061Z
            metadata_json: null
      object_person:
        id: p_vdsPZVFDu6uu9HcLUiGzWo
        status: active
        display_name: 王亮
        merged_into_person_id: null
  other: []
---

# 王偃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王偃（403年—456年），史料所见人物。本项目依据《王偃》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 403年 | accepted |
| death.date | 456年 | accepted |
| name.primary | 王偃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhUjZsZ1qknHMkKvcSu7Pr | 王嘏 | accepted |
| children | p_xHtjbkzQpxs78ENySENCje | 王藻 | accepted |
| children | p_u5zWSj2L39xyxZe5TyLFsc | 王宪嫄 | accepted |
| children | p_48BB9G5rFGngD1z7yugBB9 | 王攸 | accepted |
| children | p_F3A2LfaZNs8ryznksG7eQn | 王懋 | accepted |
| children | p_3QK9sxen8NvQMirjSLNDjn | 王氏 | accepted |
| children | p_HdjJh5gLRkho5TPhtMKXho | 王臻 | accepted |
| spouses | p_td2UtUSqFoKTyKw8j733P8 | 刘荣男 | accepted |
| descendants | p_Z61kX1Nv7EC6m6zX2Q6T3Q | 王彻 | accepted |
| descendants | p_vdsPZVFDu6uu9HcLUiGzWo | 王亮 | accepted |

## 外部来源

- [维基数据：刘荣男（Q10897941）](https://www.wikidata.org/wiki/Q10897941)
- [维基数据：王嘏（Q18118172）](https://www.wikidata.org/wiki/Q18118172)
- [维基数据：王懋（Q22814998）](https://www.wikidata.org/wiki/Q22814998)
- [维基数据：王氏（Q134097625）](https://www.wikidata.org/wiki/Q134097625)
- [维基数据：王宪嫄（Q1059974）](https://www.wikidata.org/wiki/Q1059974)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
- [维基数据：王攸（Q22814746）](https://www.wikidata.org/wiki/Q22814746)
- [维基数据：王藻（Q22814742）](https://www.wikidata.org/wiki/Q22814742)
- [中文维基百科：刘荣男](https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7)
- [中文维基百科：王彻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%BB)
- [中文维基百科：王亮 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BA%AE_(%E5%8D%97%E6%9C%9D))
- [中文维基百科：王憲嫄](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%86%B2%E5%AB%84)
