---
schema: wang-person/v1
id: p_kJ65wMWDMsuQU4kHrkU99z
status: active
merged_into: null
display_name: 王兆琛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0zLSc5VABa6vVBKFsAQ8Je
        subject_person_id: p_kJ65wMWDMsuQU4kHrkU99z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆琛，史料所见人物。本项目依据《王懿荣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_YW3-qKYsmsRMeHzlCA8wDS
          claim_id: c_0zLSc5VABa6vVBKFsAQ8Je
          source_id: s_zCfQALHyD5HG8Sar6fZ5FG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zCfQALHyD5HG8Sar6fZ5FG
            source_type: website
            title: 中文维基百科：王懿荣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%BF%E8%8D%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.150Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ycSGiS1L2nXNB68q2y6nJD
        subject_person_id: p_kJ65wMWDMsuQU4kHrkU99z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆琛
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_voK8QG5dXGbiw9gzyg58Jq
          claim_id: c_ycSGiS1L2nXNB68q2y6nJD
          source_id: s_zCfQALHyD5HG8Sar6fZ5FG
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DQiJ6u9j1S9NgMWh2MQ2DW
        subject_person_id: p_kJ65wMWDMsuQU4kHrkU99z
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_BqkTCMXwcG3871wc1aZK5X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JFPDAWPSZ3QHtRS41quGfB
          claim_id: c_DQiJ6u9j1S9NgMWh2MQ2DW
          source_id: s_gM89RbUmhZQJH58LQM4C7F
          stance: supports
          locator: 王懿荣的生平
          quotation: 祖荣禄公讳兆琛……为公考资政公讳祖源长子。
          interpretation_note: 引文依次指出王懿荣祖父王兆琛、父亲王祖源。
          source:
            id: s_gM89RbUmhZQJH58LQM4C7F
            source_type: website
            title: 泰安市文学艺术界联合会：甲骨文之父王懿荣及家世考略
            creator: 孟鸿声
            publisher: 泰安市文学艺术界联合会
            published_at_text: null
            canonical_url: https://wenlian.taian.gov.cn/art/2019/12/10/art_69765_8169980.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:05.772Z
            metadata_json: null
      object_person:
        id: p_BqkTCMXwcG3871wc1aZK5X
        status: active
        display_name: 王祖源
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兆琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兆琛，史料所见人物。本项目依据《王懿荣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王兆琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BqkTCMXwcG3871wc1aZK5X | 王祖源 | accepted |

## 外部来源

- [泰安市文学艺术界联合会：甲骨文之父王懿荣及家世考略](https://wenlian.taian.gov.cn/art/2019/12/10/art_69765_8169980.html)
- [中文维基百科：王懿荣](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%BF%E8%8D%A3)
