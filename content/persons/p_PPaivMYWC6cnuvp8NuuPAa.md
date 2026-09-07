---
schema: wang-person/v1
id: p_PPaivMYWC6cnuvp8NuuPAa
status: active
merged_into: null
display_name: 王妨
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_icc00H5hGueR1OAD6c9BBa
        subject_person_id: p_PPaivMYWC6cnuvp8NuuPAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王妨，史料所见人物。本项目依据《王妨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_L7DHTUe7ppV5Lo3tPA8MWK
          claim_id: c_icc00H5hGueR1OAD6c9BBa
          source_id: s_gEFXUqMQpzZAsb6ztrMY4E
          stance: supports
          locator: Q26210120
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gEFXUqMQpzZAsb6ztrMY4E
            source_type: api_record
            title: 维基数据：王妨（Q26210120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210120
            external_identifier: Q26210120
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:58.777Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yyh4vDRHXoLmrE5cCEuAyM
        subject_person_id: p_PPaivMYWC6cnuvp8NuuPAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王妨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XF5b6xAFKvfpSUtcuZe6Bn
          claim_id: c_Yyh4vDRHXoLmrE5cCEuAyM
          source_id: s_gEFXUqMQpzZAsb6ztrMY4E
          stance: supports
          locator: Q26210120
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4MmNKfnMoPs117MTteg37Q
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PPaivMYWC6cnuvp8NuuPAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jRrUXAq812muYh77SJGxTr
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_HWqbfYGC74S2UwAMdWTLdB
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_gEFXUqMQpzZAsb6ztrMY4E
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gEFXUqMQpzZAsb6ztrMY4E
            source_type: api_record
            title: 维基数据：王妨（Q26210120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210120
            external_identifier: Q26210120
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:58.777Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
        - id: cs_GNCVf4wBsSQn1fL9toePxW
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_h7RK38gr4CgCg9ZrtftcN8
          stance: supports
          locator: 条文：之子/之女
          quotation: 王妨（{{bd|？||18年|}}），新朝宗室，西汉外戚，王莽之孫女，王宇之女
          interpretation_note: null
          source:
            id: s_h7RK38gr4CgCg9ZrtftcN8
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:40.742Z
            metadata_json: null
        - id: cs_1fvAA9uD34k4tb3r71Hj7b
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_3TZArvp41gbWNhebv3uw9c
          stance: supports
          locator: 条文：之子/之女
          quotation: 王妨，新朝宗室，西汉外戚，王莽之孫女，王宇之女
          interpretation_note: null
          source:
            id: s_3TZArvp41gbWNhebv3uw9c
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:11.041Z
            metadata_json: null
      object_person:
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HJHLEe4kConBD4qvsXq4rk
        subject_person_id: p_47sUF5CcC79DN4JwcCLdsg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PPaivMYWC6cnuvp8NuuPAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e9xqwtCae8CSXbNYHJzN47
          claim_id: c_HJHLEe4kConBD4qvsXq4rk
          source_id: s_h7RK38gr4CgCg9ZrtftcN8
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 王妨嫁给衛将軍王興为妻
          interpretation_note: null
          source:
            id: s_h7RK38gr4CgCg9ZrtftcN8
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:40.742Z
            metadata_json: null
        - id: cs_9NamK97qdQYTFGQcRZBBcN
          claim_id: c_HJHLEe4kConBD4qvsXq4rk
          source_id: s_3TZArvp41gbWNhebv3uw9c
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 王妨嫁给衛将軍王興为妻
          interpretation_note: null
          source:
            id: s_3TZArvp41gbWNhebv3uw9c
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:11.041Z
            metadata_json: null
      object_person:
        id: p_47sUF5CcC79DN4JwcCLdsg
        status: active
        display_name: 王兴
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RkF7JgVswSBFG5C3HgLAyM
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PPaivMYWC6cnuvp8NuuPAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zUKAaiSajQa5GmRQGkQtQo
          claim_id: c_RkF7JgVswSBFG5C3HgLAyM
          source_id: s_h7RK38gr4CgCg9ZrtftcN8
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王莽之孫女
          interpretation_note: null
          source:
            id: s_h7RK38gr4CgCg9ZrtftcN8
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:40.742Z
            metadata_json: null
        - id: cs_69PC6pwjoHEA1CfuJ5sPHZ
          claim_id: c_RkF7JgVswSBFG5C3HgLAyM
          source_id: s_3TZArvp41gbWNhebv3uw9c
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王莽之孫女，王宇之女。
          interpretation_note: null
          source:
            id: s_3TZArvp41gbWNhebv3uw9c
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:11.041Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王妨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王妨，史料所见人物。本项目依据《王妨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王妨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |
| spouses | p_47sUF5CcC79DN4JwcCLdsg | 王兴 | accepted |
| ancestors | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [维基数据：王妨（Q26210120）](https://www.wikidata.org/wiki/Q26210120)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
- [中文维基百科：王妨](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8)
