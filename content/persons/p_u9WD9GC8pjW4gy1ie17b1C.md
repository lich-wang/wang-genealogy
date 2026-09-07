---
schema: wang-person/v1
id: p_u9WD9GC8pjW4gy1ie17b1C
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_33jtza7-uwDRtIA3GpJNDV
        subject_person_id: p_u9WD9GC8pjW4gy1ie17b1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫，史料所见人物。本项目依据《王楫》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gFBEjRa5yM-eRA3i6086oF
          claim_id: c_33jtza7-uwDRtIA3GpJNDV
          source_id: s_1MtzfTLk1G2YLDdf9eNfRy
          stance: supports
          locator: Q22814757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_86LLJLqCKUJ1BSyNev21K2
        subject_person_id: p_u9WD9GC8pjW4gy1ie17b1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ntSnBV547AQfd9bEnjm1Xb
          claim_id: c_86LLJLqCKUJ1BSyNev21K2
          source_id: s_1MtzfTLk1G2YLDdf9eNfRy
          stance: supports
          locator: Q22814757
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_noeSTJ7CQzCMKoSyGqYZmo
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u9WD9GC8pjW4gy1ie17b1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GQDsiQTwTpYrabwdzixFxg
          claim_id: c_noeSTJ7CQzCMKoSyGqYZmo
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_4imApB92gy4kcWdKpixbFU
          claim_id: c_noeSTJ7CQzCMKoSyGqYZmo
          source_id: s_1MtzfTLk1G2YLDdf9eNfRy
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_ApPtvCCNtKJL2K4yt7EBWn
        status: active
        display_name: 王僧虔
        merged_into_person_id: null
  children:
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
        id: p_XMjNEYPhE1uYhd3QLBRmJD
        status: active
        display_name: 王筠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楫，史料所见人物。本项目依据《王楫》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王楫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ApPtvCCNtKJL2K4yt7EBWn | 王僧虔 | accepted |
| children | p_XMjNEYPhE1uYhd3QLBRmJD | 王筠 | accepted |

## 外部来源

- [维基数据：王楫（Q22814757）](https://www.wikidata.org/wiki/Q22814757)
- [维基数据：王僧虔（Q15942059）](https://www.wikidata.org/wiki/Q15942059)
- [维基数据：王筠（Q16077281）](https://www.wikidata.org/wiki/Q16077281)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
