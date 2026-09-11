---
schema: wang-person/v1
id: p_Ppqk6QTGHt25rUKRprFyT9
status: active
merged_into: null
display_name: 王恭立
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2JkpwSLepkifQc_OY-WxFw
        subject_person_id: p_Ppqk6QTGHt25rUKRprFyT9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭立（1925年—2015年4月14日），史料所见人物。本项目依据《王恭立》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TWnxm8s7BDUtNGD4qDMQfB
          claim_id: c_2JkpwSLepkifQc_OY-WxFw
          source_id: s_uxsSJH87bh4q6gezPBZg8x
          stance: supports
          locator: Q23888312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uxsSJH87bh4q6gezPBZg8x
            source_type: api_record
            title: 维基数据：王恭立（Q23888312）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q23888312
            external_identifier: Q23888312
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E7%AB%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDB91Son1LwUeL91cvyEzC
        subject_person_id: p_Ppqk6QTGHt25rUKRprFyT9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭立
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M8yHBhoqiH6hhwao6EpB7H
          claim_id: c_mDB91Son1LwUeL91cvyEzC
          source_id: s_uxsSJH87bh4q6gezPBZg8x
          stance: supports
          locator: Q23888312
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WwY8ZRAuJVXgQDuAX1BFSH
        subject_person_id: p_Ppqk6QTGHt25rUKRprFyT9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1925年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GsQ2DSBTvgCnP5zZuFXT5F
          claim_id: c_WwY8ZRAuJVXgQDuAX1BFSH
          source_id: s_uxsSJH87bh4q6gezPBZg8x
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZzAcnhRadiPjK36h8wnVzG
        subject_person_id: p_Ppqk6QTGHt25rUKRprFyT9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 2015年4月14日
            calendar_note: 维基数据 P570 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BiPeTGJJUG28hoPGJDj6E7
          claim_id: c_ZzAcnhRadiPjK36h8wnVzG
          source_id: s_uxsSJH87bh4q6gezPBZg8x
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gHFSFCH4Kc3MWQ23Z5MDKC
        subject_person_id: p_zyHxsVZox5Dbnu11LPXNR6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ppqk6QTGHt25rUKRprFyT9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8syy1ANcNLDpqhr2ug5gB
          claim_id: c_gHFSFCH4Kc3MWQ23Z5MDKC
          source_id: s_m4spp5B0p3qB3lQLKodo83
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m4spp5B0p3qB3lQLKodo83
            source_type: website
            title: 中文维基百科：王正黼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC
            external_identifier: Q15908672
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
        - id: cs_H8eV5UrBvq7bwaozFR8q4X
          claim_id: c_gHFSFCH4Kc3MWQ23Z5MDKC
          source_id: s_uxsSJH87bh4q6gezPBZg8x
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_zyHxsVZox5Dbnu11LPXNR6
        status: active
        display_name: 王正黼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恭立（1925年—2015年4月14日），史料所见人物。本项目依据《王恭立》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恭立 | accepted |
| birth.date | 1925年 | accepted |
| death.date | 2015年4月14日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zyHxsVZox5Dbnu11LPXNR6 | 王正黼 | accepted |

## 外部来源

- [维基数据：王恭立（Q23888312）](https://www.wikidata.org/wiki/Q23888312)
- [中文维基百科：王正黼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E9%BB%BC)
