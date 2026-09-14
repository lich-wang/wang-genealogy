---
schema: wang-person/v1
id: p_VHfRqeB4dmvKQorKeVs6u9
status: active
merged_into: null
display_name: 王默
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pmk4aMgUe2isV-Wm2ldKaX
        subject_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默，南朝宋琅邪臨沂人，車騎將軍王劭之子、王惠之父，官至左光祿大夫（《宋書·卷五十八·王惠傳》：父默，左光祿大夫）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xLtZRB0WdFz79t8_uxSD0O
          claim_id: c_Pmk4aMgUe2isV-Wm2ldKaX
          source_id: s_l2eK_-GrWQKVcf5jE2g8-Q
          stance: supports
          locator: 宋書/卷58·王默
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_l2eK_-GrWQKVcf5jE2g8-Q
            source_type: website
            title: 维基文库：宋書/卷58·王默
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋書/卷58
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_OsIazDid1Ao2OHqPtsKv0v
          claim_id: c_Pmk4aMgUe2isV-Wm2ldKaX
          source_id: s_Q9cdzP7P4drQ2aN5ZutLLx
          stance: supports
          locator: Q22814761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Q9cdzP7P4drQ2aN5ZutLLx
            source_type: api_record
            title: 维基数据：王默（Q22814761）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814761
            external_identifier: Q22814761
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:11.598Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jvvNXHag5DUWDQj2cGYpWF
        subject_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C5s6yUBCHWbsQdGzjPmvDu
          claim_id: c_jvvNXHag5DUWDQj2cGYpWF
          source_id: s_Q9cdzP7P4drQ2aN5ZutLLx
          stance: supports
          locator: Q22814761
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kfpKLjAUD8FFyRUZb5FWZi
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3PHJs5yVNa5zAaCE1NthhF
          claim_id: c_kfpKLjAUD8FFyRUZb5FWZi
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
        - id: cs_KFfTqJhW5Qs6r5y5omr6Xe
          claim_id: c_kfpKLjAUD8FFyRUZb5FWZi
          source_id: s_Q9cdzP7P4drQ2aN5ZutLLx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Q9cdzP7P4drQ2aN5ZutLLx
            source_type: api_record
            title: 维基数据：王默（Q22814761）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814761
            external_identifier: Q22814761
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:11.598Z
            metadata_json: null
      object_person:
        id: p_T4veML4NqsRATCKLcYV7WC
        status: active
        display_name: 王劭
        merged_into_person_id: null
  children:
    - claim:
        id: c_XAsEmQxAvJuHXNqXS25F2E
        subject_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BGpHVeAskUR9fTGucB7Sw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ldij5oznuMtoj2EmESZsog
          claim_id: c_XAsEmQxAvJuHXNqXS25F2E
          source_id: s_Q9cdzP7P4drQ2aN5ZutLLx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Q9cdzP7P4drQ2aN5ZutLLx
            source_type: api_record
            title: 维基数据：王默（Q22814761）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814761
            external_identifier: Q22814761
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:11.598Z
            metadata_json: null
        - id: cs_U8pALZ7jK4hi5WwPTv37o7
          claim_id: c_XAsEmQxAvJuHXNqXS25F2E
          source_id: s_Hecm936okZD3yN92RKYD3J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Hecm936okZD3yN92RKYD3J
            source_type: api_record
            title: 维基数据：王惠（Q22079104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22079104
            external_identifier: Q22079104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.247Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0_(%E5%85%AD%E6%9C%9D)
        - id: cs_i7b7NBLNU49n8TGQgKfmaw
          claim_id: c_XAsEmQxAvJuHXNqXS25F2E
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王默 → 王惠
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
        - id: cs_kNgwxoeG34hAegwtERgSqb
          claim_id: c_XAsEmQxAvJuHXNqXS25F2E
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王默 → 王惠
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
        id: p_6BGpHVeAskUR9fTGucB7Sw
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_e897j8vWYaHCv6vckg9WVJ
        subject_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bsD9DxKpV9CWWbRVgiYG3j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DKmaczir6tB5CPZ7k6K9rY
          claim_id: c_e897j8vWYaHCv6vckg9WVJ
          source_id: s_bK7oufbRA87KgyNBTowhA8
          stance: supports
          locator: 条文：之子/之女
          quotation: 王鉴，琅邪临沂人，王导曾孙，王默之子，王惠的哥哥
          interpretation_note: null
          source:
            id: s_bK7oufbRA87KgyNBTowhA8
            source_type: website
            title: 中文维基百科：王鉴 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B4_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.309Z
            metadata_json: null
        - id: cs_LgZZBZTprhgu8e38LDmFQx
          claim_id: c_e897j8vWYaHCv6vckg9WVJ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王默 → 王鉴
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
        - id: cs_YGMmMRh5WGBdqGxQEyKAw4
          claim_id: c_e897j8vWYaHCv6vckg9WVJ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王默 → 王鉴
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
        id: p_bsD9DxKpV9CWWbRVgiYG3j
        status: active
        display_name: 王鉴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王默，南朝宋琅邪臨沂人，車騎將軍王劭之子、王惠之父，官至左光祿大夫（《宋書·卷五十八·王惠傳》：父默，左光祿大夫）。 | accepted |
| name.primary | 王默 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T4veML4NqsRATCKLcYV7WC | 王劭 | accepted |
| children | p_6BGpHVeAskUR9fTGucB7Sw | 王惠 | accepted |
| children | p_bsD9DxKpV9CWWbRVgiYG3j | 王鉴 | accepted |

## 外部来源

- [维基数据：王惠（Q22079104）](https://www.wikidata.org/wiki/Q22079104)
- [维基数据：王默（Q22814761）](https://www.wikidata.org/wiki/Q22814761)
- [维基文库：宋書/卷58·王默](https://zh.wikisource.org/wiki/宋書/卷58)
- [維基數據：王劭（Q15924805）](https://www.wikidata.org/wiki/Q15924805)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王鉴 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B4_(%E5%88%98%E5%AE%8B))
