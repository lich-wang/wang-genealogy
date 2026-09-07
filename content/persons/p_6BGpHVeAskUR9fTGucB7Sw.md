---
schema: wang-person/v1
id: p_6BGpHVeAskUR9fTGucB7Sw
status: active
merged_into: null
display_name: 王惠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_idozS0OGsi3waqliyvMZYO
        subject_person_id: p_6BGpHVeAskUR9fTGucB7Sw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠（生于385年），史料所见人物。本项目依据《王惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2CClJfhpa4lgjgBDwwbHU7
          claim_id: c_idozS0OGsi3waqliyvMZYO
          source_id: s_Hecm936okZD3yN92RKYD3J
          stance: supports
          locator: Q22079104
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YCcoN4TV9AspVcPYz55tKd
        subject_person_id: p_6BGpHVeAskUR9fTGucB7Sw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 385年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0385-01-01
            latest: 0385-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oZHTrn8ysThXKvm6bxWh6n
          claim_id: c_YCcoN4TV9AspVcPYz55tKd
          source_id: s_Hecm936okZD3yN92RKYD3J
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jB4edpUtkqP3HhEULkR8GF
        subject_person_id: p_6BGpHVeAskUR9fTGucB7Sw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x5SjW8wiJcpRNZj8Dxfpdv
          claim_id: c_jB4edpUtkqP3HhEULkR8GF
          source_id: s_Hecm936okZD3yN92RKYD3J
          stance: supports
          locator: Q22079104
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_VHfRqeB4dmvKQorKeVs6u9
        status: active
        display_name: 王默
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惠（生于385年），史料所见人物。本项目依据《王惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 385年 | accepted |
| name.primary | 王惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VHfRqeB4dmvKQorKeVs6u9 | 王默 | accepted |

## 外部来源

- [维基数据：王惠（Q22079104）](https://www.wikidata.org/wiki/Q22079104)
- [维基数据：王默（Q22814761）](https://www.wikidata.org/wiki/Q22814761)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
