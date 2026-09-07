---
schema: wang-person/v1
id: p_2gQFBWYT57n4iwLPS872kN
status: active
merged_into: null
display_name: 王绚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S6MZ8PFbBiFrg3FY7PJI6u
        subject_person_id: p_2gQFBWYT57n4iwLPS872kN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绚，史料所见人物。本项目依据《王绚》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs__I3UM8h4W21QPfEKQ8CeoV
          claim_id: c_S6MZ8PFbBiFrg3FY7PJI6u
          source_id: s_HywCSGCiXxwpEkkgfq46Tb
          stance: supports
          locator: Q134038800
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HywCSGCiXxwpEkkgfq46Tb
            source_type: api_record
            title: 维基数据：王绚（Q134038800）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q134038800
            external_identifier: Q134038800
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.790Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%9A_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LPXa8nrPzrgPM5taiWLSSL
        subject_person_id: p_2gQFBWYT57n4iwLPS872kN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cC6m4Djtj4PbAbxSH4h49W
          claim_id: c_LPXa8nrPzrgPM5taiWLSSL
          source_id: s_HywCSGCiXxwpEkkgfq46Tb
          stance: supports
          locator: Q134038800
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k7gUKVymUSzv6h67E6umR3
        subject_person_id: p_e64GBPBpS2DkkgzPQzfX54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2gQFBWYT57n4iwLPS872kN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uhJDCq7YChzmvRpkFkam25
          claim_id: c_k7gUKVymUSzv6h67E6umR3
          source_id: s_1oQQjgzGe2A2KyjnNQoEvD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1oQQjgzGe2A2KyjnNQoEvD
            source_type: api_record
            title: 维基数据：王彧（Q22814881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814881
            external_identifier: Q22814881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:30.520Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87
        - id: cs_4GT7yH6s9EaGgsyoxDF3oA
          claim_id: c_k7gUKVymUSzv6h67E6umR3
          source_id: s_HywCSGCiXxwpEkkgfq46Tb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HywCSGCiXxwpEkkgfq46Tb
            source_type: api_record
            title: 维基数据：王绚（Q134038800）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q134038800
            external_identifier: Q134038800
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.790Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%9A_(%E5%8D%97%E6%9C%9D)
        - id: cs_2yn6F4SkuDXDUu6Bx7yjLc
          claim_id: c_k7gUKVymUSzv6h67E6umR3
          source_id: s_7rmBMuj1fnoHM2Bv8pmLiR
          stance: supports
          locator: 条文：之子/之女
          quotation: 王绚，字长素，琅邪临沂人，南北朝刘宋人物，王景文长子
          interpretation_note: null
          source:
            id: s_7rmBMuj1fnoHM2Bv8pmLiR
            source_type: website
            title: 中文维基百科：王绚 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%9A_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.902Z
            metadata_json: null
      object_person:
        id: p_e64GBPBpS2DkkgzPQzfX54
        status: active
        display_name: 王彧
        merged_into_person_id: null
  children:
    - claim:
        id: c_xr7qAjjbF1MP4R8VKKqu4K
        subject_person_id: p_2gQFBWYT57n4iwLPS872kN
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9ju95GPXiYGK31vHw1Ftji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rKGqx4pRZ8WH8CHE1wzgkg
          claim_id: c_xr7qAjjbF1MP4R8VKKqu4K
          source_id: s_7rmBMuj1fnoHM2Bv8pmLiR
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王绚的儿子王婼袭封江安县开国侯
          interpretation_note: null
          source:
            id: s_7rmBMuj1fnoHM2Bv8pmLiR
            source_type: website
            title: 中文维基百科：王绚 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%9A_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.902Z
            metadata_json: null
        - id: cs_NMPozEC5K2DEh9gmbqU6Fo
          claim_id: c_xr7qAjjbF1MP4R8VKKqu4K
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王绚 → 王婼
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
        - id: cs_VKwcRdwthwGe78jcH7646C
          claim_id: c_xr7qAjjbF1MP4R8VKKqu4K
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王绚 → 王婼
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
        id: p_9ju95GPXiYGK31vHw1Ftji
        status: active
        display_name: 王婼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绚，史料所见人物。本项目依据《王绚》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王绚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e64GBPBpS2DkkgzPQzfX54 | 王彧 | accepted |
| children | p_9ju95GPXiYGK31vHw1Ftji | 王婼 | accepted |

## 外部来源

- [维基数据：王绚（Q134038800）](https://www.wikidata.org/wiki/Q134038800)
- [维基数据：王彧（Q22814881）](https://www.wikidata.org/wiki/Q22814881)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王绚 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%9A_(%E5%8D%97%E6%9C%9D))
