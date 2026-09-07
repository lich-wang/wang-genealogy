---
schema: wang-person/v1
id: p_p7pEF6sqNKc75moo58v3Eu
status: active
merged_into: null
display_name: 王去疾
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WoBGxkcXFBHJZ4zDSkN8lu
        subject_person_id: p_p7pEF6sqNKc75moo58v3Eu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王去疾，史料所见人物。本项目依据《王去疾》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tnYFPKqJbvPfg0eEdwLxhB
          claim_id: c_WoBGxkcXFBHJZ4zDSkN8lu
          source_id: s_sV9PcVUSUEZpJbmYWXVQzZ
          stance: supports
          locator: Q26209986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sV9PcVUSUEZpJbmYWXVQzZ
            source_type: api_record
            title: 维基数据：王去疾（Q26209986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209986
            external_identifier: Q26209986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:07.981Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%BB%E7%96%BE
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymK4U2rN5ZP9P2kQ7pyVBM
        subject_person_id: p_p7pEF6sqNKc75moo58v3Eu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王去疾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KKqSK8orAiQ918WFam9bLM
          claim_id: c_ymK4U2rN5ZP9P2kQ7pyVBM
          source_id: s_sV9PcVUSUEZpJbmYWXVQzZ
          stance: supports
          locator: Q26209986
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HVGip2Q89qkjpnKQbbuk9W
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7pEF6sqNKc75moo58v3Eu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RJURujR41Wocxa5fJdLtrU
          claim_id: c_HVGip2Q89qkjpnKQbbuk9W
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
        - id: cs_9dyiT352pcBxBq2EgoHyFP
          claim_id: c_HVGip2Q89qkjpnKQbbuk9W
          source_id: s_sV9PcVUSUEZpJbmYWXVQzZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sV9PcVUSUEZpJbmYWXVQzZ
            source_type: api_record
            title: 维基数据：王去疾（Q26209986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209986
            external_identifier: Q26209986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:07.981Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%BB%E7%96%BE
        - id: cs_SKSR33Kz38h9t4UucfFGKg
          claim_id: c_HVGip2Q89qkjpnKQbbuk9W
          source_id: s_xdPQ6bPemMGwmkAEJpd63k
          stance: supports
          locator: 条文：之子/之女
          quotation: 王去疾（{{bd|？||？||}}），西汉外戚，王莽三叔平阿侯王譚之子，王仁之弟，王閎、王向之兄
          interpretation_note: null
          source:
            id: s_xdPQ6bPemMGwmkAEJpd63k
            source_type: website
            title: 中文维基百科：王去疾
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%BB%E7%96%BE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:46.582Z
            metadata_json: null
        - id: cs_LsddfLD5E3vmgQHNx9SPfx
          claim_id: c_HVGip2Q89qkjpnKQbbuk9W
          source_id: s_VTnzQjiP9YuxzE427AXXBG
          stance: supports
          locator: 条文：之子/之女
          quotation: 王去疾，西汉外戚，王莽三叔平阿侯王譚之子，王仁之弟，王閎、王向之兄
          interpretation_note: null
          source:
            id: s_VTnzQjiP9YuxzE427AXXBG
            source_type: website
            title: 中文维基百科：王去疾
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%BB%E7%96%BE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:03.944Z
            metadata_json: null
      object_person:
        id: p_A3jqrz5MCP94kKUqSaDLU1
        status: active
        display_name: 王谭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王去疾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王去疾，史料所见人物。本项目依据《王去疾》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王去疾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A3jqrz5MCP94kKUqSaDLU1 | 王谭 | accepted |

## 外部来源

- [维基数据：王去疾（Q26209986）](https://www.wikidata.org/wiki/Q26209986)
- [维基数据：王谭（Q1969370）](https://www.wikidata.org/wiki/Q1969370)
- [中文维基百科：王去疾](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%BB%E7%96%BE)
