---
schema: wang-person/v1
id: p_47sUF5CcC79DN4JwcCLdsg
status: active
merged_into: null
display_name: 王兴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AnM8W8yFhEUNNHx7adrF9X
        subject_person_id: p_47sUF5CcC79DN4JwcCLdsg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兴，王莽之子。维基数据以独立条目 Q17026272 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 8
      sources:
        - id: cs_voDL7NiHEWEcZrT0Ee3rXc
          claim_id: c_AnM8W8yFhEUNNHx7adrF9X
          source_id: s_iFP8sbxJfiZWSamRMwuD4e
          stance: supports
          locator: Q17026272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_iFP8sbxJfiZWSamRMwuD4e
            source_type: api_record
            title: 維基數據：王兴（Q17026272）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q17026272
            external_identifier: Q17026272
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:47.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%B4_(%E5%8A%9F%E8%84%A9%E5%85%AC)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j2ijM88v6Ee3eQtra1UnW3
        subject_person_id: p_47sUF5CcC79DN4JwcCLdsg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_edLjRTSabSehXtzfHZfH3f
          claim_id: c_j2ijM88v6Ee3eQtra1UnW3
          source_id: s_iFP8sbxJfiZWSamRMwuD4e
          stance: supports
          locator: Q17026272
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pYuUZ64GRAdVMdFA2KYiPA
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_47sUF5CcC79DN4JwcCLdsg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BgNGupa94veMgC4Vf8NrJE
          claim_id: c_pYuUZ64GRAdVMdFA2KYiPA
          source_id: s_EGrTvgmWGEBNKAJcMtkpwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EGrTvgmWGEBNKAJcMtkpwp
            source_type: website
            title: 中文维基百科：王莽
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王莽
            external_identifier: Q7250
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_98gQmKV1SKPwddC7jtT9FB
          claim_id: c_pYuUZ64GRAdVMdFA2KYiPA
          source_id: s_qaqNC35CuGhESSMxWoCLgu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaqNC35CuGhESSMxWoCLgu
            source_type: api_record
            title: 維基數據：王莽（Q7250）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7250
            external_identifier: Q7250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:57.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%BD
        - id: cs_813gp957a3tJQbemArJC1x
          claim_id: c_pYuUZ64GRAdVMdFA2KYiPA
          source_id: s_iFP8sbxJfiZWSamRMwuD4e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iFP8sbxJfiZWSamRMwuD4e
            source_type: api_record
            title: 維基數據：王兴（Q17026272）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q17026272
            external_identifier: Q17026272
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:47.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%B4_(%E5%8A%9F%E8%84%A9%E5%85%AC)
        - id: cs_NAZ2TAmLt35FcxpWB7rDht
          claim_id: c_pYuUZ64GRAdVMdFA2KYiPA
          source_id: s_6MJ7MqpDX4XAyRArf7NRGX
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王兴（），新朝皇帝王莽的庶子。
          interpretation_note: null
          source:
            id: s_6MJ7MqpDX4XAyRArf7NRGX
            source_type: website
            title: 中文维基百科：王兴 (功脩公)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%B4_(%E5%8A%9F%E8%84%A9%E5%85%AC)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:00.903Z
            metadata_json: null
        - id: cs_LDDhR4VYnCTrPtDLPxmjib
          claim_id: c_pYuUZ64GRAdVMdFA2KYiPA
          source_id: s_LapUmNpwpX9Vyx44FTAGVw
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王兴（），新朝皇帝王莽的庶子。
          interpretation_note: null
          source:
            id: s_LapUmNpwpX9Vyx44FTAGVw
            source_type: website
            title: 中文维基百科：王兴 (功脩公)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%B4_(%E5%8A%9F%E8%84%A9%E5%85%AC)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:14.263Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
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
        id: p_PPaivMYWC6cnuvp8NuuPAa
        status: active
        display_name: 王妨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王兴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兴，王莽之子。维基数据以独立条目 Q17026272 收录该人物。 | accepted |
| name.primary | 王兴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |
| spouses | p_PPaivMYWC6cnuvp8NuuPAa | 王妨 | accepted |

## 外部来源

- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [維基數據：王兴（Q17026272）](https://www.wikidata.org/wiki/Q17026272)
- [中文维基百科：王妨](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
- [中文维基百科：王兴 (功脩公)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%B4_(%E5%8A%9F%E8%84%A9%E5%85%AC))
