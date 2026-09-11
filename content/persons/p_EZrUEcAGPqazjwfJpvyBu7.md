---
schema: wang-person/v1
id: p_EZrUEcAGPqazjwfJpvyBu7
status: active
merged_into: null
display_name: 王義翹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N8JESuG33v6P6H37Wv7CVT
        subject_person_id: p_EZrUEcAGPqazjwfJpvyBu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義翹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RZQVXPo5KoTCLQNSJrzd2u
          claim_id: c_N8JESuG33v6P6H37Wv7CVT
          source_id: s_oaMV6nWAJeKPsz8HQwVeUG
          stance: supports
          locator: Q5217566
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_oaMV6nWAJeKPsz8HQwVeUG
            source_type: api_record
            title: 维基数据：王義翹（Q5217566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5217566
            external_identifier: Q5217566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BE%A9%E7%BF%B9
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YgNp5vq2NkooNpgrbmjKCC
        subject_person_id: p_EZrUEcAGPqazjwfJpvyBu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義翹（1936年3月12日—2020年8月29日），史料所见人物。本项目依据《王義翹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fn93YEOkjg7GgSoMsypnu6
          claim_id: c_YgNp5vq2NkooNpgrbmjKCC
          source_id: s_oaMV6nWAJeKPsz8HQwVeUG
          stance: supports
          locator: Q5217566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SvK2uuT2RdMy4166SqaVmg
        subject_person_id: p_EZrUEcAGPqazjwfJpvyBu7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1936年3月12日
            calendar_note: 维基数据 P569 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9s4jpSqZbWY83H9SjAVqC
          claim_id: c_SvK2uuT2RdMy4166SqaVmg
          source_id: s_oaMV6nWAJeKPsz8HQwVeUG
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
        id: c_cUHbLbbAZyfmDkydub2r4S
        subject_person_id: p_EZrUEcAGPqazjwfJpvyBu7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 2020年8月29日
            calendar_note: 维基数据 P570 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCnXGTx7FP5PDKNnvcU3mW
          claim_id: c_cUHbLbbAZyfmDkydub2r4S
          source_id: s_oaMV6nWAJeKPsz8HQwVeUG
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
        id: c_yihLXujp6FqJx62zZ4aYUD
        subject_person_id: p_duWrG6FyAqkCMEfckaddRg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EZrUEcAGPqazjwfJpvyBu7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z12WvMQzxGRFaD5RsQaKG9
          claim_id: c_yihLXujp6FqJx62zZ4aYUD
          source_id: s_Ey6it7G6ec12JYcsCqdFQi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ey6it7G6ec12JYcsCqdFQi
            source_type: api_record
            title: 维基数据：王守竞（Q109174393）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q109174393
            external_identifier: Q109174393
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.151Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E7%AB%9E
        - id: cs_ULBtHMP4296peYzZKB3HL3
          claim_id: c_yihLXujp6FqJx62zZ4aYUD
          source_id: s_oaMV6nWAJeKPsz8HQwVeUG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_duWrG6FyAqkCMEfckaddRg
        status: active
        display_name: 王守竞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義翹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義翹 | accepted |
| bio.summary | 王義翹（1936年3月12日—2020年8月29日），史料所见人物。本项目依据《王義翹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1936年3月12日 | accepted |
| death.date | 2020年8月29日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_duWrG6FyAqkCMEfckaddRg | 王守竞 | accepted |

## 外部来源

- [维基数据：王守竞（Q109174393）](https://www.wikidata.org/wiki/Q109174393)
- [维基数据：王義翹（Q5217566）](https://www.wikidata.org/wiki/Q5217566)
