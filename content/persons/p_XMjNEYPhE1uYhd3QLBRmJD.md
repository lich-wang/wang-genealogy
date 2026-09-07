---
schema: wang-person/v1
id: p_XMjNEYPhE1uYhd3QLBRmJD
status: active
merged_into: null
display_name: 王筠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EzpI8e6SGa1Szd2gx2SRKu
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠（481年—549年），史料所见人物。本项目依据《王筠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xrBtWvrJld6nOc5qUD0QJK
          claim_id: c_EzpI8e6SGa1Szd2gx2SRKu
          source_id: s_PpsMmXMZord5mks9J6xjD2
          stance: supports
          locator: Q16077281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PpsMmXMZord5mks9J6xjD2
            source_type: api_record
            title: 维基数据：王筠（Q16077281）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077281
            external_identifier: Q16077281
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:19.094Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AD%A0_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SqXSyhiqa4LH8hasJTfgMb
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 481年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0481-01-01
            latest: 0481-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LcjKBhEk61UqStqSbpQ76K
          claim_id: c_SqXSyhiqa4LH8hasJTfgMb
          source_id: s_PpsMmXMZord5mks9J6xjD2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PpsMmXMZord5mks9J6xjD2
            source_type: api_record
            title: 维基数据：王筠（Q16077281）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077281
            external_identifier: Q16077281
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:19.094Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AD%A0_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ndnE9SBQ4Ev8MVL52fVBMk
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 549年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0549-01-01
            latest: 0549-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KFUJ2U3o3E5ZH3MEQf1GBf
          claim_id: c_ndnE9SBQ4Ev8MVL52fVBMk
          source_id: s_PpsMmXMZord5mks9J6xjD2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PpsMmXMZord5mks9J6xjD2
            source_type: api_record
            title: 维基数据：王筠（Q16077281）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077281
            external_identifier: Q16077281
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:19.094Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AD%A0_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RP1TPmiPEx1CEoNgrZqfKX
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qg9i3oPEyFjaAT6UkVPdqJ
          claim_id: c_RP1TPmiPEx1CEoNgrZqfKX
          source_id: s_PpsMmXMZord5mks9J6xjD2
          stance: supports
          locator: Q16077281
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RUkJ5tBGxbRFRfPzDRFHaD
        subject_person_id: p_u9WD9GC8pjW4gy1ie17b1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ysRvZmGvmeWNDPRU7GfbJo
          claim_id: c_RUkJ5tBGxbRFRfPzDRFHaD
          source_id: s_1MtzfTLk1G2YLDdf9eNfRy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1MtzfTLk1G2YLDdf9eNfRy
            source_type: api_record
            title: 维基数据：王楫（Q22814757）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814757
            external_identifier: Q22814757
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_i3ZHV2bVkSSV1UpNSMi4DC
          claim_id: c_RUkJ5tBGxbRFRfPzDRFHaD
          source_id: s_PpsMmXMZord5mks9J6xjD2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PpsMmXMZord5mks9J6xjD2
            source_type: api_record
            title: 维基数据：王筠（Q16077281）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077281
            external_identifier: Q16077281
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:19.094Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AD%A0_(%E5%8D%97%E6%9C%9D)
        - id: cs_x5J7eNQcFtNu3Knum4AtCe
          claim_id: c_RUkJ5tBGxbRFRfPzDRFHaD
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王楫 → 王筠
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
        - id: cs_HAvSRBuME3yRaLTJtEEo7g
          claim_id: c_RUkJ5tBGxbRFRfPzDRFHaD
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王楫 → 王筠
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
        id: p_u9WD9GC8pjW4gy1ie17b1C
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children:
    - claim:
        id: c_fV97jSSC3S4t8B3XyqzBP5
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_d22JUip1JvkDuinEQKkHX7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2NVoki9pqdC9Ny6QphH53X
          claim_id: c_fV97jSSC3S4t8B3XyqzBP5
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王筠 → 王铦
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
        - id: cs_UinFffnd5mtzvCwJttKLnd
          claim_id: c_fV97jSSC3S4t8B3XyqzBP5
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王筠 → 王铦
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
        id: p_d22JUip1JvkDuinEQKkHX7
        status: active
        display_name: 王铦
        merged_into_person_id: null
    - claim:
        id: c_1m6e6k6N7GQ6trL8s2LDoV
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XcVHBrRWCBfd6CdL4Zw9p7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ep4btAQhXTF6VADaFd4Gj
          claim_id: c_1m6e6k6N7GQ6trL8s2LDoV
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王筠 → 王祥
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
        id: p_XcVHBrRWCBfd6CdL4Zw9p7
        status: active
        display_name: 王祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_uq71Z71KY9v9ZEQDFWvBmR
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_n2VhJYKthxCZqxJ3FGvsKN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cop2dsR2ACW9EK8VmrCntj
          claim_id: c_uq71Z71KY9v9ZEQDFWvBmR
          source_id: s_pT4HLoH94Ekph5SL23BMGJ
          stance: supports
          locator: 条文：条文识读（孙）（2世）
          quotation: 王筠之孙
          interpretation_note: null
          source:
            id: s_pT4HLoH94Ekph5SL23BMGJ
            source_type: website
            title: 中文维基百科：王胄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%83%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:54.050Z
            metadata_json: null
        - id: cs_J9Txf1n5y4TTyPaE3586oA
          claim_id: c_uq71Z71KY9v9ZEQDFWvBmR
          source_id: s_G1DJHmTMNuEJgjRLcLf2MJ
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 琅邪郡临沂人，南朝陳、隋朝詩人，王筠之孙
          interpretation_note: null
          source:
            id: s_G1DJHmTMNuEJgjRLcLf2MJ
            source_type: website
            title: 中文维基百科：王胄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%83%84
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:00.761Z
            metadata_json: null
      object_person:
        id: p_n2VhJYKthxCZqxJ3FGvsKN
        status: active
        display_name: 王胄
        merged_into_person_id: null
    - claim:
        id: c_6nCS96XwipC7jzD9ZVR7Yg
        subject_person_id: p_XMjNEYPhE1uYhd3QLBRmJD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gr6qNDSogvFfNNz2L1sNwJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GwcuXcen8VrKo1tYQqWnDN
          claim_id: c_6nCS96XwipC7jzD9ZVR7Yg
          source_id: s_DnXj8zLkmFGYuA1EtVuqC1
          stance: supports
          locator: 条文：条文识读（孙）（2世）
          quotation: 王筠之孙
          interpretation_note: null
          source:
            id: s_DnXj8zLkmFGYuA1EtVuqC1
            source_type: website
            title: 中文维基百科：王昚
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%9A
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.439Z
            metadata_json: null
      object_person:
        id: p_gr6qNDSogvFfNNz2L1sNwJ
        status: active
        display_name: 王昚
        merged_into_person_id: null
  other: []
---

# 王筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王筠（481年—549年），史料所见人物。本项目依据《王筠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 481年 | accepted |
| death.date | 549年 | accepted |
| name.primary | 王筠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u9WD9GC8pjW4gy1ie17b1C | 王楫 | accepted |
| children | p_d22JUip1JvkDuinEQKkHX7 | 王铦 | accepted |
| children | p_XcVHBrRWCBfd6CdL4Zw9p7 | 王祥 | accepted |
| descendants | p_n2VhJYKthxCZqxJ3FGvsKN | 王胄 | accepted |
| descendants | p_gr6qNDSogvFfNNz2L1sNwJ | 王昚 | accepted |

## 外部来源

- [维基数据：王楫（Q22814757）](https://www.wikidata.org/wiki/Q22814757)
- [维基数据：王筠（Q16077281）](https://www.wikidata.org/wiki/Q16077281)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王昚](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%9A)
- [中文维基百科：王胄](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%83%84)
