---
schema: wang-person/v1
id: p_J9VBeV9JQRCWCx3PUoFzss
status: active
merged_into: null
display_name: 王介之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fCFN1NAOgAKcdbRhhryr-k
        subject_person_id: p_J9VBeV9JQRCWCx3PUoFzss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介之，史料所见人物。本项目依据《中央研究院人名权威：王夫之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qvLYK7aCo-sxTFvjLKXNig
          claim_id: c_fCFN1NAOgAKcdbRhhryr-k
          source_id: s_RABY4CUDR6MbzJwfn5wNjP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RABY4CUDR6MbzJwfn5wNjP
            source_type: website
            title: 中央研究院人名权威：王夫之
            creator: null
            publisher: 中央研究院历史语言研究所
            published_at_text: null
            canonical_url: https://newarchive.ihp.sinica.edu.tw/sncaccgi/sncacFtp?ACTION=TQ%2CsncacFtpqf%2CSN%3D009164%2C2nd%2Csearch_simple
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.570Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Ja6wQUM9NdyJCX7batzCB
        subject_person_id: p_J9VBeV9JQRCWCx3PUoFzss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Tixj7UJZBHYXQhxa4JxRPC
          claim_id: c_1Ja6wQUM9NdyJCX7batzCB
          source_id: s_RABY4CUDR6MbzJwfn5wNjP
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_e4axsyU25jBmnod3qckrAq
          claim_id: c_1Ja6wQUM9NdyJCX7batzCB
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_2C1EnjYcnvYEmWWS49t4WC
            source_type: gazetteer
            title: 《湖南通志》卷一百六十七
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LmvJVMCAN3Nc2vsQB5Jp4m
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_J9VBeV9JQRCWCx3PUoFzss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bnqRnZhLCDJ7GYGyjPLeEB
          claim_id: c_LmvJVMCAN3Nc2vsQB5Jp4m
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
          stance: supports
          locator: 王介之条
          quotation: 王介之字石子，號石崖，朝聘長子。
          interpretation_note: null
          source:
            id: s_2C1EnjYcnvYEmWWS49t4WC
            source_type: gazetteer
            title: 《湖南通志》卷一百六十七
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person:
        id: p_EMGFDrQWSrsdf9fKwcrHhY
        status: active
        display_name: 王朝聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王介之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王介之，史料所见人物。本项目依据《中央研究院人名权威：王夫之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王介之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EMGFDrQWSrsdf9fKwcrHhY | 王朝聘 | accepted |

## 外部来源

- [《湖南通志》卷一百六十七](https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki)
- [中央研究院人名权威：王夫之](https://newarchive.ihp.sinica.edu.tw/sncaccgi/sncacFtp?ACTION=TQ%2CsncacFtpqf%2CSN%3D009164%2C2nd%2Csearch_simple)
