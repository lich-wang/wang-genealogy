---
schema: wang-person/v1
id: p_ZRPHhvQCC2prhC64nEgE7Z
status: active
merged_into: null
display_name: 王谭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86b_PYWkHsoPivBNDvOVTM
        subject_person_id: p_ZRPHhvQCC2prhC64nEgE7Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭，史料所见人物。本项目依据《王谭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oVO8cra4y_NcGtbGfQZzgL
          claim_id: c_86b_PYWkHsoPivBNDvOVTM
          source_id: s_Nm8HW6sTgsNNoeHMUEn41z
          stance: supports
          locator: Q56597984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Nm8HW6sTgsNNoeHMUEn41z
            source_type: api_record
            title: 维基数据：王谭（Q56597984）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56597984
            external_identifier: Q56597984
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UKLcDx4XDXg1wTNnMTMnJF
        subject_person_id: p_ZRPHhvQCC2prhC64nEgE7Z
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
        - id: cs_pgJE4iQYnUzNiNxozvziF4
          claim_id: c_UKLcDx4XDXg1wTNnMTMnJF
          source_id: s_Nm8HW6sTgsNNoeHMUEn41z
          stance: supports
          locator: Q56597984
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WECdat98Vx3R14jm4D8H1a
        subject_person_id: p_GbQy8jfgKbMEuvvPBZA4FY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ZRPHhvQCC2prhC64nEgE7Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UDQJq652SGcw5NUTCJeBRX
          claim_id: c_WECdat98Vx3R14jm4D8H1a
          source_id: s_89FvxXXR3hyF3YZDYmYHRC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_89FvxXXR3hyF3YZDYmYHRC
            source_type: api_record
            title: 维基数据：王訢（Q11572880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572880
            external_identifier: Q11572880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:44.222Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
        - id: cs_hK1GFvT7iXrgF9egvCAWTH
          claim_id: c_WECdat98Vx3R14jm4D8H1a
          source_id: s_Nm8HW6sTgsNNoeHMUEn41z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Nm8HW6sTgsNNoeHMUEn41z
            source_type: api_record
            title: 维基数据：王谭（Q56597984）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56597984
            external_identifier: Q56597984
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json: null
      object_person:
        id: p_GbQy8jfgKbMEuvvPBZA4FY
        status: active
        display_name: 王訢
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZVnAsXT8a7vMLXTS1xXMM3
        subject_person_id: p_ZRPHhvQCC2prhC64nEgE7Z
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_oAKHo8wPH3ABR8Zfv9PTYD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2N125cK58aQiXHTnrF6Jy4
          claim_id: c_ZVnAsXT8a7vMLXTS1xXMM3
          source_id: s_4sb58w2S3q2p1TmEb9W7iD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4sb58w2S3q2p1TmEb9W7iD
            source_type: api_record
            title: 维基数据：王咸（Q24856235）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q24856235
            external_identifier: Q24856235
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:45.205Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%B8
        - id: cs_f37WmpMURg4SGgMwxzVKFr
          claim_id: c_ZVnAsXT8a7vMLXTS1xXMM3
          source_id: s_Nm8HW6sTgsNNoeHMUEn41z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Nm8HW6sTgsNNoeHMUEn41z
            source_type: api_record
            title: 维基数据：王谭（Q56597984）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56597984
            external_identifier: Q56597984
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json: null
      object_person:
        id: p_oAKHo8wPH3ABR8Zfv9PTYD
        status: active
        display_name: 王咸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王谭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谭，史料所见人物。本项目依据《王谭》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王谭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GbQy8jfgKbMEuvvPBZA4FY | 王訢 | accepted |
| children | p_oAKHo8wPH3ABR8Zfv9PTYD | 王咸 | accepted |

## 外部来源

- [维基数据：王谭（Q56597984）](https://www.wikidata.org/wiki/Q56597984)
- [维基数据：王咸（Q24856235）](https://www.wikidata.org/wiki/Q24856235)
- [维基数据：王訢（Q11572880）](https://www.wikidata.org/wiki/Q11572880)
