---
schema: wang-person/v1
id: p_zoSgw4qxk3VqkJm598hYn6
status: active
merged_into: null
display_name: 王参之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bWxQ8jUElHdo9kI_CPvE22
        subject_person_id: p_zoSgw4qxk3VqkJm598hYn6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王参之，史料所见人物。本项目依据《《湖南通志》卷一百六十七》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5aqiaeIoHH-3bTCQjXoAsL
          claim_id: c_bWxQ8jUElHdo9kI_CPvE22
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
  - predicate: name.primary
    recommended:
      claim:
        id: c_6XdCnza6Ae6EMoek43LP7d
        subject_person_id: p_zoSgw4qxk3VqkJm598hYn6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王参之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5P16KZ3xaQ58xbb3pcRkuw
          claim_id: c_6XdCnza6Ae6EMoek43LP7d
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
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
        id: c_1ECTkcg6tPP8mnn5vEu9oA
        subject_person_id: p_EMGFDrQWSrsdf9fKwcrHhY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zoSgw4qxk3VqkJm598hYn6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z63Me52M75NFEtSrmLf6wX
          claim_id: c_1ECTkcg6tPP8mnn5vEu9oA
          source_id: s_2C1EnjYcnvYEmWWS49t4WC
          stance: supports
          locator: 王参之条
          quotation: 王参之，朝聘仲子。
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

# 王参之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王参之，史料所见人物。本项目依据《《湖南通志》卷一百六十七》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王参之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EMGFDrQWSrsdf9fKwcrHhY | 王朝聘 | accepted |

## 外部来源

- [《湖南通志》卷一百六十七](https://www.shidianguji.com/book/NLG312001076076/chapter/1lk0ahlazb9ki)
