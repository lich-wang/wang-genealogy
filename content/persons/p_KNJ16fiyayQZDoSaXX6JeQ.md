---
schema: wang-person/v1
id: p_KNJ16fiyayQZDoSaXX6JeQ
status: active
merged_into: null
display_name: 王玚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5GrhBaH4U4cTQLJ8EKY8Hj
        subject_person_id: p_KNJ16fiyayQZDoSaXX6JeQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玚（523年—576年），史料所见人物。本项目依据《王玚》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PD_ttSJ_vC2T82LCgmVCl0
          claim_id: c_5GrhBaH4U4cTQLJ8EKY8Hj
          source_id: s_TLDuNnsH44RyRzk4qFAfJe
          stance: supports
          locator: Q11572895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TLDuNnsH44RyRzk4qFAfJe
            source_type: api_record
            title: 维基数据：王玚（Q11572895）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572895
            external_identifier: Q11572895
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:07.007Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%91%92
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JFuDd6KAPv16tNn7YMkMr1
        subject_person_id: p_KNJ16fiyayQZDoSaXX6JeQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 523年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0523-01-01
            latest: 0523-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c4k7KEsBHC1Qh5T9PbnpDF
          claim_id: c_JFuDd6KAPv16tNn7YMkMr1
          source_id: s_TLDuNnsH44RyRzk4qFAfJe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TLDuNnsH44RyRzk4qFAfJe
            source_type: api_record
            title: 维基数据：王玚（Q11572895）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572895
            external_identifier: Q11572895
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:07.007Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%91%92
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pdevyjuHtMVdJnK3zNNWUL
        subject_person_id: p_KNJ16fiyayQZDoSaXX6JeQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 576年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0576-01-01
            latest: 0576-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Xc4Z5xerpRQv8XvMJR2zm
          claim_id: c_pdevyjuHtMVdJnK3zNNWUL
          source_id: s_TLDuNnsH44RyRzk4qFAfJe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TLDuNnsH44RyRzk4qFAfJe
            source_type: api_record
            title: 维基数据：王玚（Q11572895）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572895
            external_identifier: Q11572895
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:07.007Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%91%92
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9NWpKki4m5SYCPGcB1MCZL
        subject_person_id: p_KNJ16fiyayQZDoSaXX6JeQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VKbgVuSfyqEEuoJPaww6cB
          claim_id: c_9NWpKki4m5SYCPGcB1MCZL
          source_id: s_TLDuNnsH44RyRzk4qFAfJe
          stance: supports
          locator: Q11572895
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D71LH7jP2JE92N7LA74eTj
        subject_person_id: p_1yyJgULJScCP8bYcGrpFnn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KNJ16fiyayQZDoSaXX6JeQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2UZCFypZAtVfE792xU7ga8
          claim_id: c_D71LH7jP2JE92N7LA74eTj
          source_id: s_rNebVCB1MbWJF2B7KxDAkM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rNebVCB1MbWJF2B7KxDAkM
            source_type: api_record
            title: 维基数据：王冲（Q11573148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573148
            external_identifier: Q11573148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:48.939Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%86%B2_(%E5%8D%97%E6%9C%9D)
        - id: cs_5RN6PkUQMVZNcK9A7GKNqb
          claim_id: c_D71LH7jP2JE92N7LA74eTj
          source_id: s_TLDuNnsH44RyRzk4qFAfJe
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TLDuNnsH44RyRzk4qFAfJe
            source_type: api_record
            title: 维基数据：王玚（Q11572895）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572895
            external_identifier: Q11572895
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:07.007Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%91%92
        - id: cs_f2XwpsUjhe8s5AZiU2MNoM
          claim_id: c_D71LH7jP2JE92N7LA74eTj
          source_id: s_dbuPXSokP4ozMUpkLdc9xp
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王沖的第十二子
          interpretation_note: null
          source:
            id: s_dbuPXSokP4ozMUpkLdc9xp
            source_type: website
            title: 中文维基百科：王瑒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%91%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:54.703Z
            metadata_json: null
        - id: cs_LttDycsosV31Ro5xUvG8bb
          claim_id: c_D71LH7jP2JE92N7LA74eTj
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王冲 → 王玚
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
        - id: cs_LoNXicE9oyNxsX9Wswc4HJ
          claim_id: c_D71LH7jP2JE92N7LA74eTj
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王冲 → 王玚
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
        id: p_1yyJgULJScCP8bYcGrpFnn
        status: active
        display_name: 王冲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玚（523年—576年），史料所见人物。本项目依据《王玚》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 523年 | accepted |
| death.date | 576年 | accepted |
| name.primary | 王玚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1yyJgULJScCP8bYcGrpFnn | 王冲 | accepted |

## 外部来源

- [维基数据：王冲（Q11573148）](https://www.wikidata.org/wiki/Q11573148)
- [维基数据：王玚（Q11572895）](https://www.wikidata.org/wiki/Q11572895)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王瑒](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%91%92)
