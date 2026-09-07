---
schema: wang-person/v1
id: p_d2zCByefg1u3xYEJvrh4AD
status: active
merged_into: null
display_name: 王秀之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_naLuZCVeNKSF5CLM4p7w1y
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀之（442年—494年），史料所见人物。本项目依据《王秀之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IIMMsPWinXfsBkCy334l9d
          claim_id: c_naLuZCVeNKSF5CLM4p7w1y
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: Q11573186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Mm7T9pWrxZB411yCw22csg
            source_type: api_record
            title: 维基数据：王秀之（Q11573186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573186
            external_identifier: Q11573186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%80%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6VD4ByA3E7o9CZH46KDmsP
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 442年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0442-01-01
            latest: 0442-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4sbx5YMB8nZT9evxmRLytM
          claim_id: c_6VD4ByA3E7o9CZH46KDmsP
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Mm7T9pWrxZB411yCw22csg
            source_type: api_record
            title: 维基数据：王秀之（Q11573186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573186
            external_identifier: Q11573186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%80%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E41zTVUPbGuQbgbxaUPBZe
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 494年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0494-01-01
            latest: 0494-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WWTsPpMZPLRRhLeLs3ZL6N
          claim_id: c_E41zTVUPbGuQbgbxaUPBZe
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Mm7T9pWrxZB411yCw22csg
            source_type: api_record
            title: 维基数据：王秀之（Q11573186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573186
            external_identifier: Q11573186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%80%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4pdgTtbFpRgiMQSuZFyPB
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HRao4tp3S5rwxsrL6vHwYP
          claim_id: c_Z4pdgTtbFpRgiMQSuZFyPB
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: Q11573186
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vznMbkDZmbMbAFoC2f6gm5
        subject_person_id: p_r89B5FGzzcf37RUXeDAGJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d2zCByefg1u3xYEJvrh4AD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_v8PGPsoorV41CX6XNP42Su
          claim_id: c_vznMbkDZmbMbAFoC2f6gm5
          source_id: s_T7QU695AMnNHcJsPzAPCKN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T7QU695AMnNHcJsPzAPCKN
            source_type: api_record
            title: 维基数据：王瓒之（Q22815013）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815013
            external_identifier: Q22815013
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
        - id: cs_mjkHZAaZk7nH77b546Cf7W
          claim_id: c_vznMbkDZmbMbAFoC2f6gm5
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Mm7T9pWrxZB411yCw22csg
            source_type: api_record
            title: 维基数据：王秀之（Q11573186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573186
            external_identifier: Q11573186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%80%E4%B9%8B
      object_person:
        id: p_r89B5FGzzcf37RUXeDAGJi
        status: active
        display_name: 王瓒之
        merged_into_person_id: null
  children:
    - claim:
        id: c_CPqMUQzD8rCzV78GrPE6ue
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y6iJMV7fFXYJH3793FLY93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TWbAQRQ7uEL2wpFGY5MQbi
          claim_id: c_CPqMUQzD8rCzV78GrPE6ue
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Mm7T9pWrxZB411yCw22csg
            source_type: api_record
            title: 维基数据：王秀之（Q11573186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573186
            external_identifier: Q11573186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%80%E4%B9%8B
        - id: cs_t4Yx7QYsipWhUUs4Y8EdEo
          claim_id: c_CPqMUQzD8rCzV78GrPE6ue
          source_id: s_3nr94LvvQ1uWE764s1Et3z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3nr94LvvQ1uWE764s1Et3z
            source_type: api_record
            title: 维基数据：王峻（Q11573046）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573046
            external_identifier: Q11573046
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:32.530Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B3%BB_(%E5%8D%97%E6%9C%9D)
      object_person:
        id: p_y6iJMV7fFXYJH3793FLY93
        status: active
        display_name: 王峻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_a7deWPRz8EPUxC9yBda3Hk
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxF2h1LLKD3S4227Aud44x
          claim_id: c_a7deWPRz8EPUxC9yBda3Hk
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（祖）（4世）
          quotation: 王琮是王敬弘玄孙，王瓒之曾孙，王秀之之孙，王峻之子
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_LEGXxBQkFkAzqKRbPcjNy2
        status: active
        display_name: 王琮
        merged_into_person_id: null
  other: []
---

# 王秀之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秀之（442年—494年），史料所见人物。本项目依据《王秀之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 442年 | accepted |
| death.date | 494年 | accepted |
| name.primary | 王秀之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_r89B5FGzzcf37RUXeDAGJi | 王瓒之 | accepted |
| children | p_y6iJMV7fFXYJH3793FLY93 | 王峻 | accepted |
| descendants | p_LEGXxBQkFkAzqKRbPcjNy2 | 王琮 | accepted |

## 外部来源

- [维基数据：王峻（Q11573046）](https://www.wikidata.org/wiki/Q11573046)
- [维基数据：王秀之（Q11573186）](https://www.wikidata.org/wiki/Q11573186)
- [维基数据：王瓒之（Q22815013）](https://www.wikidata.org/wiki/Q22815013)
- [中文维基百科：王琮 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81))
