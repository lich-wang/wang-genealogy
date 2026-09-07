---
schema: wang-person/v1
id: p_dVcuPTGjmuw7aKYexDxJUv
status: active
merged_into: null
display_name: 复株絫若鞮单于
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_em5uRDZKiaP_ySeDf5dCWr
        subject_person_id: p_dVcuPTGjmuw7aKYexDxJUv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 复株絫若鞮单于，史料所见人物。本项目依据《复株絫若鞮单于》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PO5og1Di4HchJMXaih98-_
          claim_id: c_em5uRDZKiaP_ySeDf5dCWr
          source_id: s_D2pJQMcXR2Tn4TMAB3KfEX
          stance: supports
          locator: Q857846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_D2pJQMcXR2Tn4TMAB3KfEX
            source_type: api_record
            title: 维基数据：复株絫若鞮单于（Q857846）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q857846
            external_identifier: Q857846
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:06.243Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_12hurkJf72uWJpQNSbQhG5
        subject_person_id: p_dVcuPTGjmuw7aKYexDxJUv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 复株絫若鞮单于
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T34BaJDrL2pKmSeho11ZzS
          claim_id: c_12hurkJf72uWJpQNSbQhG5
          source_id: s_D2pJQMcXR2Tn4TMAB3KfEX
          stance: supports
          locator: Q857846
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kB9BDDEdmA4aKza4eSfPdP
        subject_person_id: p_BUaGJXVbdiGWZgD8yeJs5F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dVcuPTGjmuw7aKYexDxJUv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_qPpnUb1MKrrwpjGCYZZmbm
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_Tsj9DGYs4JkWzJCA2jgXUV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Tsj9DGYs4JkWzJCA2jgXUV
            source_type: api_record
            title: 維基數據：王昭君（Q701037）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q701037
            external_identifier: Q701037
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:52.153Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%AD%E5%90%9B
        - id: cs_Hi3yQWqzK1xFVgZ59KaLqg
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_D2pJQMcXR2Tn4TMAB3KfEX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_D2pJQMcXR2Tn4TMAB3KfEX
            source_type: api_record
            title: 维基数据：复株絫若鞮单于（Q857846）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q857846
            external_identifier: Q857846
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:06.243Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
        - id: cs_aamwFA2aAya24185L9NU39
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_LssUqnDgddwBf2aNjmfjNg
          stance: supports
          locator: 条文：条文识读（阏氏）
          quotation: 復娶王昭君为阏氏
          interpretation_note: null
          source:
            id: s_LssUqnDgddwBf2aNjmfjNg
            source_type: website
            title: 中文维基百科：復株絫若鞮單于
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:20.696Z
            metadata_json: null
        - id: cs_Mmc7FS8pBnnfxwiY2HAnb1
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_jXuksdKxbT7KPiUEsR4trk
          stance: supports
          locator: 条文：条文识读（阏氏）
          quotation: 復娶王昭君为阏氏
          interpretation_note: null
          source:
            id: s_jXuksdKxbT7KPiUEsR4trk
            source_type: website
            title: 中文维基百科：復株絫若鞮單于
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:50.719Z
            metadata_json: null
        - id: cs_eKQYZo47j2y6tHM7JhrL7i
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_f5CUNcp2AfeAFmLf2n7Rh6
          stance: supports
          locator: 条文：条文识读（阏氏）
          quotation: 復娶王昭君为阏氏
          interpretation_note: null
          source:
            id: s_f5CUNcp2AfeAFmLf2n7Rh6
            source_type: website
            title: 中文维基百科：復株絫若鞮單于
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:52.341Z
            metadata_json: null
        - id: cs_S7Vw4zFyjJQaDtqEzJQ8AM
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_KiqsRXDC5KMuFJHmPSjrGK
          stance: supports
          locator: 条文：条文识读（阏氏）
          quotation: 復娶王昭君为阏氏
          interpretation_note: null
          source:
            id: s_KiqsRXDC5KMuFJHmPSjrGK
            source_type: website
            title: 中文维基百科：復株絫若鞮單于
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:04.808Z
            metadata_json: null
        - id: cs_RQnMZXYZsMDomhSTWm5VHL
          claim_id: c_kB9BDDEdmA4aKza4eSfPdP
          source_id: s_E44LNqt7u4tHFX5uJdX8JK
          stance: supports
          locator: 条文：条文识读（spouse）
          quotation: 復株累繼位後依匈奴俗，復娶王昭君为阏氏
          interpretation_note: null
          source:
            id: s_E44LNqt7u4tHFX5uJdX8JK
            source_type: website
            title: 中文维基百科：復株絫若鞮單于
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:21.136Z
            metadata_json: null
      object_person:
        id: p_BUaGJXVbdiGWZgD8yeJs5F
        status: active
        display_name: 王昭君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 复株絫若鞮单于

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 复株絫若鞮单于，史料所见人物。本项目依据《复株絫若鞮单于》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 复株絫若鞮单于 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BUaGJXVbdiGWZgD8yeJs5F | 王昭君 | accepted |

## 外部来源

- [维基数据：复株絫若鞮单于（Q857846）](https://www.wikidata.org/wiki/Q857846)
- [維基數據：王昭君（Q701037）](https://www.wikidata.org/wiki/Q701037)
- [中文维基百科：復株絫若鞮單于](https://zh.wikipedia.org/wiki/%E5%BE%A9%E6%A0%AA%E7%B5%AB%E8%8B%A5%E9%9E%AE%E5%96%AE%E4%BA%8E)
