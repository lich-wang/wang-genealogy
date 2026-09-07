---
schema: wang-person/v1
id: p_BS6tfbsbL6jCqXBZQKiLeW
status: active
merged_into: null
display_name: 王虞
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GEGHqwy0EGLRL9H3SLCy3l
        subject_person_id: p_BS6tfbsbL6jCqXBZQKiLeW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虞，史料所见人物。本项目依据《王虞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9KFIa5JevvpiRbmZD1aJAX
          claim_id: c_GEGHqwy0EGLRL9H3SLCy3l
          source_id: s_d93SETehfGLDXgoCqFmStA
          stance: supports
          locator: Q22814906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_d93SETehfGLDXgoCqFmStA
            source_type: api_record
            title: 维基数据：王虞（Q22814906）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814906
            external_identifier: Q22814906
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.329Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Z9D7FLje4bW9dyJBhqjhW
        subject_person_id: p_BS6tfbsbL6jCqXBZQKiLeW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JKDS5PKKmkPaqY594KG2fT
          claim_id: c_9Z9D7FLje4bW9dyJBhqjhW
          source_id: s_d93SETehfGLDXgoCqFmStA
          stance: supports
          locator: Q22814906
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JHf9s87U5mWJGNhtBhh56e
        subject_person_id: p_ojGchAZHmRHY7mAfMcQCu4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BS6tfbsbL6jCqXBZQKiLeW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uE2xcBDdbGoaQbmbN9Qnvo
          claim_id: c_JHf9s87U5mWJGNhtBhh56e
          source_id: s_F2EKb33rEMMM2gS8nVwxMC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_F2EKb33rEMMM2gS8nVwxMC
            source_type: api_record
            title: 维基数据：王珣（Q15902305）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15902305
            external_identifier: Q15902305
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:46.289Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%A3
        - id: cs_ooiohNzSY2bPVDbdT2o9kM
          claim_id: c_JHf9s87U5mWJGNhtBhh56e
          source_id: s_d93SETehfGLDXgoCqFmStA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_d93SETehfGLDXgoCqFmStA
            source_type: api_record
            title: 维基数据：王虞（Q22814906）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814906
            external_identifier: Q22814906
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.329Z
            metadata_json: null
        - id: cs_9Q1tUcipNFD6m3iCKAryBu
          claim_id: c_JHf9s87U5mWJGNhtBhh56e
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珣 → 王虞
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
        - id: cs_UL6yYF2n2DCxw6B2hDsWuH
          claim_id: c_JHf9s87U5mWJGNhtBhh56e
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珣 → 王虞
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
        - id: cs_yeM9c4gBD1M1J94w9aeBN9
          claim_id: c_JHf9s87U5mWJGNhtBhh56e
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 五子：弘、虞、柳、孺、曇首。
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
        id: p_ojGchAZHmRHY7mAfMcQCu4
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王虞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王虞，史料所见人物。本项目依据《王虞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王虞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ojGchAZHmRHY7mAfMcQCu4 | 王珣 | accepted |

## 外部来源

- [维基数据：王珣（Q15902305）](https://www.wikidata.org/wiki/Q15902305)
- [维基数据：王虞（Q22814906）](https://www.wikidata.org/wiki/Q22814906)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
