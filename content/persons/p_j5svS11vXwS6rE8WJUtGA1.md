---
schema: wang-person/v1
id: p_j5svS11vXwS6rE8WJUtGA1
status: active
merged_into: null
display_name: 蕭令嫕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4CbFLWjF5-cMiwQiOOGpc
        subject_person_id: p_j5svS11vXwS6rE8WJUtGA1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蕭令嫕，史料所见人物。本项目依据《蕭令嫕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_knNwRPz1Ci4ClJu1DFw_DC
          claim_id: c_B4CbFLWjF5-cMiwQiOOGpc
          source_id: s_D79FAMFKrDTpEPrDUEBaP1
          stance: supports
          locator: Q16603608
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_D79FAMFKrDTpEPrDUEBaP1
            source_type: api_record
            title: 维基数据：蕭令嫕（Q16603608）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603608
            external_identifier: Q16603608
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:20.264Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dkqAcuG6DYT5EyeX5NWiw9
        subject_person_id: p_j5svS11vXwS6rE8WJUtGA1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蕭令嫕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VkNEgpLEux5gwoNUMFPezw
          claim_id: c_dkqAcuG6DYT5EyeX5NWiw9
          source_id: s_D79FAMFKrDTpEPrDUEBaP1
          stance: supports
          locator: Q16603608
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
        id: c_75k4E2BY51aDs8XJhi5LjP
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_j5svS11vXwS6rE8WJUtGA1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uEFHKjLm7Xp5ZeHY3t21PH
          claim_id: c_75k4E2BY51aDs8XJhi5LjP
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_VNv77rceufj9FLUQP5v9wg
          claim_id: c_75k4E2BY51aDs8XJhi5LjP
          source_id: s_D79FAMFKrDTpEPrDUEBaP1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_D79FAMFKrDTpEPrDUEBaP1
            source_type: api_record
            title: 维基数据：蕭令嫕（Q16603608）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603608
            external_identifier: Q16603608
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:20.264Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95
        - id: cs_ugSa5z2sM7u4UZE2CnBnhF
          claim_id: c_75k4E2BY51aDs8XJhi5LjP
          source_id: s_9zJDzHnW7kxAMywXNECJpH
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王琳
          interpretation_note: null
          source:
            id: s_9zJDzHnW7kxAMywXNECJpH
            source_type: website
            title: 中文维基百科：蕭令嫕
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:31.158Z
            metadata_json: null
      object_person:
        id: p_J834gYrU1F2b3b6hCDtUW2
        status: active
        display_name: 王琳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蕭令嫕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蕭令嫕，史料所见人物。本项目依据《蕭令嫕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 蕭令嫕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_J834gYrU1F2b3b6hCDtUW2 | 王琳 | accepted |

## 外部来源

- [维基数据：王琳（Q22814773）](https://www.wikidata.org/wiki/Q22814773)
- [维基数据：蕭令嫕（Q16603608）](https://www.wikidata.org/wiki/Q16603608)
- [中文维基百科：蕭令嫕](https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95)
