---
schema: wang-person/v1
id: p_DHinECQEQoVK9SgTGBRt2X
status: active
merged_into: null
display_name: 王獲
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83vtteTBSwUJ93KxqEXpvU
        subject_person_id: p_DHinECQEQoVK9SgTGBRt2X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獲（生于前1世纪），史料所见人物。本项目依据《維基數據：王獲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_LlsG6G2Qj3-IV0TEaUk4Qd
          claim_id: c_83vtteTBSwUJ93KxqEXpvU
          source_id: s_HbS8Yo5R7eR8Z1kJmpNta8
          stance: supports
          locator: Q16260222
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HbS8Yo5R7eR8Z1kJmpNta8
            source_type: api_record
            title: 維基數據：王獲（Q16260222）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260222
            external_identifier: Q16260222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:42.614Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fkRpSmcBKfswsExsyeTzKH
        subject_person_id: p_DHinECQEQoVK9SgTGBRt2X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 維基數據 P569 結構化日期，精度：世纪
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J1GiavNyFdEfzWs64NoAN6
          claim_id: c_fkRpSmcBKfswsExsyeTzKH
          source_id: s_HbS8Yo5R7eR8Z1kJmpNta8
          stance: supports
          locator: Q16260222
          quotation: null
          interpretation_note: null
          source:
            id: s_HbS8Yo5R7eR8Z1kJmpNta8
            source_type: api_record
            title: 維基數據：王獲（Q16260222）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260222
            external_identifier: Q16260222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:42.614Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5E7ZMXTyB6Q7sH6s53swCq
        subject_person_id: p_DHinECQEQoVK9SgTGBRt2X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XByN2FZADrENDScx5wJQM3
          claim_id: c_5E7ZMXTyB6Q7sH6s53swCq
          source_id: s_HbS8Yo5R7eR8Z1kJmpNta8
          stance: supports
          locator: Q16260222
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G3pHBVQTCwJSoLhx5FpXhG
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHinECQEQoVK9SgTGBRt2X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WmHFmBU1iQncC7wVufARfd
          claim_id: c_G3pHBVQTCwJSoLhx5FpXhG
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
        - id: cs_sdXYHzftJFzCSU7mreoLfL
          claim_id: c_G3pHBVQTCwJSoLhx5FpXhG
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
        - id: cs_L5JNrpukq9Q38QK3pAJePx
          claim_id: c_G3pHBVQTCwJSoLhx5FpXhG
          source_id: s_HbS8Yo5R7eR8Z1kJmpNta8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HbS8Yo5R7eR8Z1kJmpNta8
            source_type: api_record
            title: 維基數據：王獲（Q16260222）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260222
            external_identifier: Q16260222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:42.614Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2
        - id: cs_xBYKwMN9WkR5VGD638eFi7
          claim_id: c_G3pHBVQTCwJSoLhx5FpXhG
          source_id: s_ZWf7j9WL8dhF8DYFeqNLRd
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王莽的第二个儿子
          interpretation_note: null
          source:
            id: s_ZWf7j9WL8dhF8DYFeqNLRd
            source_type: website
            title: 中文维基百科：王獲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:40.953Z
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
        id: c_gtFeCMrpSbdQiEzGQy43QA
        subject_person_id: p_DHinECQEQoVK9SgTGBRt2X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GcNA3tAmUdhWNfqQjUwGnM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fppKf7HYJCifpPgSArxWnC
          claim_id: c_gtFeCMrpSbdQiEzGQy43QA
          source_id: s_QJjYh3sDmj6NJeeuQY22Hf
          stance: supports
          locator: 条文：妻/娶
          quotation: 王获{{BD|前1世纪||前2年||catIdx=W}}，字中孙，汉朝外戚，王莽的第二个儿子，母亲是王莽的正妻王氏，东平陵（今山东济南东）人
          interpretation_note: null
          source:
            id: s_QJjYh3sDmj6NJeeuQY22Hf
            source_type: website
            title: 中文维基百科：王獲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:26.260Z
            metadata_json: null
        - id: cs_QSzru4D75W1jqNk7QiUKE6
          claim_id: c_gtFeCMrpSbdQiEzGQy43QA
          source_id: s_ZWf7j9WL8dhF8DYFeqNLRd
          stance: supports
          locator: 条文：妻/娶
          quotation: 王获，字中孙，汉朝外戚，王莽的第二个儿子，母亲是王莽的正妻王氏，东平陵（今山东济南东）人
          interpretation_note: null
          source:
            id: s_ZWf7j9WL8dhF8DYFeqNLRd
            source_type: website
            title: 中文维基百科：王獲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:40.953Z
            metadata_json: null
      object_person:
        id: p_GcNA3tAmUdhWNfqQjUwGnM
        status: active
        display_name: 王皇后
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王獲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獲（生于前1世纪），史料所见人物。本项目依据《維基數據：王獲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王獲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |
| spouses | p_GcNA3tAmUdhWNfqQjUwGnM | 王皇后 | accepted |

## 外部来源

- [維基數據：王獲（Q16260222）](https://www.wikidata.org/wiki/Q16260222)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [中文维基百科：王獲](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8D%B2)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
