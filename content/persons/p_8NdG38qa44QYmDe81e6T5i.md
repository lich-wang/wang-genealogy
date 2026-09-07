---
schema: wang-person/v1
id: p_8NdG38qa44QYmDe81e6T5i
status: active
merged_into: null
display_name: 王閎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DzEiqd9LKRtj1Hj2V5PKG9
        subject_person_id: p_8NdG38qa44QYmDe81e6T5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閎（卒于前29年），史料所见人物。本项目依据《王閎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_P39lwsauxy28NNFGAqJLgo
          claim_id: c_DzEiqd9LKRtj1Hj2V5PKG9
          source_id: s_WwjQZvXuBAP3ZNtF9TGJtG
          stance: supports
          locator: Q11572883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_WwjQZvXuBAP3ZNtF9TGJtG
            source_type: api_record
            title: 维基数据：王閎（Q11572883）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572883
            external_identifier: Q11572883
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_88mj9JfLqDD8zd7sA2EdST
        subject_person_id: p_8NdG38qa44QYmDe81e6T5i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前29年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: -0029-01-01
            latest: -0029-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K1WR7AmHdvaSfq2EuGSq8b
          claim_id: c_88mj9JfLqDD8zd7sA2EdST
          source_id: s_WwjQZvXuBAP3ZNtF9TGJtG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_WwjQZvXuBAP3ZNtF9TGJtG
            source_type: api_record
            title: 维基数据：王閎（Q11572883）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572883
            external_identifier: Q11572883
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_u8zMV8yLd8AwPxvWkyCSER
        subject_person_id: p_8NdG38qa44QYmDe81e6T5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wLVECF73zwmQvQ6zQ2Vapk
          claim_id: c_u8zMV8yLd8AwPxvWkyCSER
          source_id: s_WwjQZvXuBAP3ZNtF9TGJtG
          stance: supports
          locator: Q11572883
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_km92D8u9ukGGWQc25K32an
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8NdG38qa44QYmDe81e6T5i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1toP1gPrrjFdj9MAVZQK4n
          claim_id: c_km92D8u9ukGGWQc25K32an
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3PdNBCgo98QJFJBc4fy4Z5
            source_type: api_record
            title: 维基数据：王谭（Q1969370）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1969370
            external_identifier: Q1969370
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:40.086Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%AD
        - id: cs_6h4jzg72Z9n77nyAuNTvAV
          claim_id: c_km92D8u9ukGGWQc25K32an
          source_id: s_WwjQZvXuBAP3ZNtF9TGJtG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WwjQZvXuBAP3ZNtF9TGJtG
            source_type: api_record
            title: 维基数据：王閎（Q11572883）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572883
            external_identifier: Q11572883
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
        - id: cs_AYP79VKUL79PFQB8WZzbHJ
          claim_id: c_km92D8u9ukGGWQc25K32an
          source_id: s_SP8WDfbBZYkJQYGqt3dyWU
          stance: supports
          locator: 条文：之子/之女
          quotation: 王閎（{{Bd|？||30年}}），王莽叔父平阿侯王譚之子，王去疾之弟，娶蕭咸之女
          interpretation_note: null
          source:
            id: s_SP8WDfbBZYkJQYGqt3dyWU
            source_type: website
            title: 中文维基百科：王閎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.037Z
            metadata_json: null
        - id: cs_HCbyebW6CUwwphAqQ9mteM
          claim_id: c_km92D8u9ukGGWQc25K32an
          source_id: s_PqYsutYthB6S93QDRCwBXy
          stance: supports
          locator: 条文：之子/之女
          quotation: 王閎，王莽叔父平阿侯王譚之子，王去疾之弟，娶蕭咸之女
          interpretation_note: null
          source:
            id: s_PqYsutYthB6S93QDRCwBXy
            source_type: website
            title: 中文维基百科：王閎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:02.282Z
            metadata_json: null
      object_person:
        id: p_A3jqrz5MCP94kKUqSaDLU1
        status: active
        display_name: 王谭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_D269cn9Xa9R9ERyrrz1q16
        subject_person_id: p_8NdG38qa44QYmDe81e6T5i
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pzNVmzASZ3qgtXHVQkJf29
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oz1jz8BfisZaqib22d8qv5
          claim_id: c_D269cn9Xa9R9ERyrrz1q16
          source_id: s_SP8WDfbBZYkJQYGqt3dyWU
          stance: supports
          locator: 条文：妻/娶
          quotation: 王閎（{{Bd|？||30年}}），王莽叔父平阿侯王譚之子，王去疾之弟，娶蕭咸之女
          interpretation_note: null
          source:
            id: s_SP8WDfbBZYkJQYGqt3dyWU
            source_type: website
            title: 中文维基百科：王閎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.037Z
            metadata_json: null
        - id: cs_37oAZ4VEFUG3KPLHk6NnyG
          claim_id: c_D269cn9Xa9R9ERyrrz1q16
          source_id: s_PqYsutYthB6S93QDRCwBXy
          stance: supports
          locator: 条文：妻/娶
          quotation: 王閎，王莽叔父平阿侯王譚之子，王去疾之弟，娶蕭咸之女
          interpretation_note: null
          source:
            id: s_PqYsutYthB6S93QDRCwBXy
            source_type: website
            title: 中文维基百科：王閎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:02.282Z
            metadata_json: null
      object_person:
        id: p_pzNVmzASZ3qgtXHVQkJf29
        status: active
        display_name: 蕭咸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王閎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王閎（卒于前29年），史料所见人物。本项目依据《王閎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 前29年 | accepted |
| name.primary | 王閎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A3jqrz5MCP94kKUqSaDLU1 | 王谭 | accepted |
| spouses | p_pzNVmzASZ3qgtXHVQkJf29 | 蕭咸 | accepted |

## 外部来源

- [维基数据：王閎（Q11572883）](https://www.wikidata.org/wiki/Q11572883)
- [维基数据：王谭（Q1969370）](https://www.wikidata.org/wiki/Q1969370)
- [中文维基百科：王閎](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E)
