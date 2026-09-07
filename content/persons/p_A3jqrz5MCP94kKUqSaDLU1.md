---
schema: wang-person/v1
id: p_A3jqrz5MCP94kKUqSaDLU1
status: active
merged_into: null
display_name: 王谭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLnpqUJzDP184O3ZnoEmj8
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭（生于前1世纪），史料所见人物。本项目依据《王谭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_aMt7HYtLh8S5-AGcPB0D9s
          claim_id: c_rLnpqUJzDP184O3ZnoEmj8
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: Q1969370
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gj24uKiPxL71vHtsHALDY8
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0100-01-01
            latest: -0001-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eabusWQTycxzn8fBywWKs3
          claim_id: c_Gj24uKiPxL71vHtsHALDY8
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7W6emzTKdRBZqtuCh29J7B
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1RLCNNBWVNQ4npsVgkQ4hr
          claim_id: c_7W6emzTKdRBZqtuCh29J7B
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: Q1969370
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WujBC4LdAYFvJUrBRNjDCn
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_42ZATJ13F5snasWr65BPLq
          claim_id: c_WujBC4LdAYFvJUrBRNjDCn
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_cCtRqdgMNNKP2Sj3Kxe6L3
          claim_id: c_WujBC4LdAYFvJUrBRNjDCn
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children:
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
        id: p_p7pEF6sqNKc75moo58v3Eu
        status: active
        display_name: 王去疾
        merged_into_person_id: null
    - claim:
        id: c_2L9ESsvgHrrySGGreJuF7X
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ELoQyJGyGoWVqQ8P7631gK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nA3quJPyoW5sYZf2yBV9Zx
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
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
        - id: cs_6a3RRoDhZ2Duq5KG4VS8kQ
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_2bKA3CKU2zNGsdHXrkF52i
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2bKA3CKU2zNGsdHXrkF52i
            source_type: api_record
            title: 维基数据：王向（Q26209988）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209988
            external_identifier: Q26209988
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
        - id: cs_9tk3XAQdzPoH145Q6WGmBk
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_X3EsUAJSfq8VKAWAm2tpCe
          stance: supports
          locator: 条文：之子/之女
          quotation: 王向{{BD|？||23年|}}，新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去疾、王閎之弟
          interpretation_note: null
          source:
            id: s_X3EsUAJSfq8VKAWAm2tpCe
            source_type: website
            title: 中文维基百科：王向
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:47.437Z
            metadata_json: null
        - id: cs_2PBkAs5thEZkLtYPYcM2wX
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_YRwx8pmDtti1sTvT6UaHPX
          stance: supports
          locator: 条文：之子/之女
          quotation: 王向，新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去疾、王閎之弟
          interpretation_note: null
          source:
            id: s_YRwx8pmDtti1sTvT6UaHPX
            source_type: website
            title: 中文维基百科：王向
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:04.833Z
            metadata_json: null
      object_person:
        id: p_ELoQyJGyGoWVqQ8P7631gK
        status: active
        display_name: 王向
        merged_into_person_id: null
    - claim:
        id: c_YXC5hHCKontAjd85Sjt1QH
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6MQPx8e4P1H3EwxJMHr8JX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_W4KjVk7orNCp3PiArX818g
          claim_id: c_YXC5hHCKontAjd85Sjt1QH
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
        - id: cs_cWbZd4GvuZaMCePZQMAPG3
          claim_id: c_YXC5hHCKontAjd85Sjt1QH
          source_id: s_337zUeqX45LANm5HofBhTS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_337zUeqX45LANm5HofBhTS
            source_type: api_record
            title: 维基数据：王仁（Q26209995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209995
            external_identifier: Q26209995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_6MQPx8e4P1H3EwxJMHr8JX
        status: active
        display_name: 王仁
        merged_into_person_id: null
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
        id: p_8NdG38qa44QYmDe81e6T5i
        status: active
        display_name: 王閎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_7HujgtDr2R4s8ymbAgtrjV
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N2DicW23Hfs8faLrNtQ5S9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ppZ3uBGystiGWU36f9Vn7x
          claim_id: c_7HujgtDr2R4s8ymbAgtrjV
          source_id: s_zkDmcJ2At43jAgGHa7hkni
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王莽三叔平阿侯王譚之孙
          interpretation_note: null
          source:
            id: s_zkDmcJ2At43jAgGHa7hkni
            source_type: website
            title: 中文维基百科：王磐 (东汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A3%90_(%E4%B8%9C%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:45.998Z
            metadata_json: null
      object_person:
        id: p_N2DicW23Hfs8faLrNtQ5S9
        status: active
        display_name: 王磐
        merged_into_person_id: null
  other: []
---

# 王谭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谭（生于前1世纪），史料所见人物。本项目依据《王谭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王谭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| children | p_p7pEF6sqNKc75moo58v3Eu | 王去疾 | accepted |
| children | p_ELoQyJGyGoWVqQ8P7631gK | 王向 | accepted |
| children | p_6MQPx8e4P1H3EwxJMHr8JX | 王仁 | accepted |
| children | p_8NdG38qa44QYmDe81e6T5i | 王閎 | accepted |
| descendants | p_N2DicW23Hfs8faLrNtQ5S9 | 王磐 | accepted |

## 外部来源

- [维基数据：王閎（Q11572883）](https://www.wikidata.org/wiki/Q11572883)
- [维基数据：王去疾（Q26209986）](https://www.wikidata.org/wiki/Q26209986)
- [维基数据：王仁（Q26209995）](https://www.wikidata.org/wiki/Q26209995)
- [维基数据：王谭（Q1969370）](https://www.wikidata.org/wiki/Q1969370)
- [维基数据：王向（Q26209988）](https://www.wikidata.org/wiki/Q26209988)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王閎](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%96%8E)
- [中文维基百科：王磐 (东汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A3%90_(%E4%B8%9C%E6%B1%89))
- [中文维基百科：王去疾](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%BB%E7%96%BE)
- [中文维基百科：王向](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91)
