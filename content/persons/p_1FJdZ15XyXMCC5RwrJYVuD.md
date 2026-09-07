---
schema: wang-person/v1
id: p_1FJdZ15XyXMCC5RwrJYVuD
status: active
merged_into: null
display_name: 王遵
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V2qdp3hr01uEWsNoX6s1At
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵，史料所见人物。本项目依据《王崇 (扶平侯)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L7BLFeSp3TdFeik0wj_QFO
          claim_id: c_V2qdp3hr01uEWsNoX6s1At
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ktMX1QyHh2pkBTaKFeZWEk
            source_type: website
            title: 中文维基百科：王崇 (扶平侯)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:39.989Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M17BB7nKDmTbaXh9rhj53y
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T1RkHBGtbagHw96k5DXzQi
          claim_id: c_M17BB7nKDmTbaXh9rhj53y
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Aq4GX3P5Du1PWSAs226aAt
        subject_person_id: p_FHcGrr7tWenPE3iVi61oWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jYKH3hLMaF3wpc7Nfygrpf
          claim_id: c_Aq4GX3P5Du1PWSAs226aAt
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条文：长子
          quotation: 长子：王遵
          interpretation_note: null
          source:
            id: s_ktMX1QyHh2pkBTaKFeZWEk
            source_type: website
            title: 中文维基百科：王崇 (扶平侯)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:39.989Z
            metadata_json: null
        - id: cs_sPCPD6isoWjD97dGq6U5ob
          claim_id: c_Aq4GX3P5Du1PWSAs226aAt
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：生
          quotation: 生遵，字伯業，後漢中大夫、義鄉侯。
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
        id: p_FHcGrr7tWenPE3iVi61oWP
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children:
    - claim:
        id: c_8D8wrUBGE1Q5xNKXrRZVGk
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEAZUpK6B8392UvpQkxb4J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_quHbbYPqBkZMqWmnd4z6A4
          claim_id: c_8D8wrUBGE1Q5xNKXrRZVGk
          source_id: s_jdcBv1F9fzN33tMfhQxUMK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jdcBv1F9fzN33tMfhQxUMK
            source_type: api_record
            title: 维基数据：王音（Q108167711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108167711
            external_identifier: Q108167711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json: null
        - id: cs_7a4wcdNqQXtCNKYNWnxwdC
          claim_id: c_8D8wrUBGE1Q5xNKXrRZVGk
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 生二子：旹、音。
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
        id: p_HEAZUpK6B8392UvpQkxb4J
        status: active
        display_name: 王音
        merged_into_person_id: null
    - claim:
        id: c_y4gb3FGmyspHxaneMjqGCf
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Qbjtsx31n4RRadGZ4PrMBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EmxLCg8V7BsB5EmD5NGM6r
          claim_id: c_y4gb3FGmyspHxaneMjqGCf
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 生二子：旹、音。
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
        id: p_Qbjtsx31n4RRadGZ4PrMBk
        status: active
        display_name: 王旹
        merged_into_person_id: null
    - claim:
        id: c_nAUDHbpbhJGp1UQzmFyHvJ
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tw5ctVrp6HrZbsGsUGdjxQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PEB4gVQMLZckeEg7BKrFnP
          claim_id: c_nAUDHbpbhJGp1UQzmFyHvJ
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 遵生魴
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
        id: p_tw5ctVrp6HrZbsGsUGdjxQ
        status: active
        display_name: 王魴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Gxe4aGijpQTKPnLMmdWUQ3
        subject_person_id: p_WfNHhh5W4FCfE41QPDKcHt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u9MScPAYFjNc2R17LLSmuY
          claim_id: c_Gxe4aGijpQTKPnLMmdWUQ3
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（九世孫）（9世）
          quotation: 卑子九世孫遵，字子春，後漢河南尹
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
        id: p_WfNHhh5W4FCfE41QPDKcHt
        status: active
        display_name: 王卑子
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵，史料所见人物。本项目依据《王崇 (扶平侯)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王遵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FHcGrr7tWenPE3iVi61oWP | 王崇 | accepted |
| children | p_HEAZUpK6B8392UvpQkxb4J | 王音 | accepted |
| children | p_Qbjtsx31n4RRadGZ4PrMBk | 王旹 | accepted |
| children | p_tw5ctVrp6HrZbsGsUGdjxQ | 王魴 | accepted |
| ancestors | p_WfNHhh5W4FCfE41QPDKcHt | 王卑子 | accepted |

## 外部来源

- [维基数据：王音（Q108167711）](https://www.wikidata.org/wiki/Q108167711)
- [中文维基百科：王崇 (扶平侯)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
