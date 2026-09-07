---
schema: wang-person/v1
id: p_CiuLfhowQZTcgDe4ZP3kiG
status: active
merged_into: null
display_name: 王崇简
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fhTV2yZD2Lr_Vk1duX8-iT
        subject_person_id: p_CiuLfhowQZTcgDe4ZP3kiG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇简（1602年12月10日—1678年），史料所见人物。本项目依据《王崇简》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_AzjB8gbBTjluJVMkWUkOYD
          claim_id: c_fhTV2yZD2Lr_Vk1duX8-iT
          source_id: s_m8o61J1RmJ38DhBGyjkUbx
          stance: supports
          locator: Q13668763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_m8o61J1RmJ38DhBGyjkUbx
            source_type: api_record
            title: 维基数据：王崇简（Q13668763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668763
            external_identifier: Q13668763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x4iJTJ8qSQPYAzC8ziJwdV
        subject_person_id: p_CiuLfhowQZTcgDe4ZP3kiG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1602年12月10日
            calendar_note: 维基数据 P569 结构化日期，精度：日
            earliest: 1602-12-10
            latest: 1602-12-10
            precision: day
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qRH7k6inDSm4kRjNTehFKK
          claim_id: c_x4iJTJ8qSQPYAzC8ziJwdV
          source_id: s_m8o61J1RmJ38DhBGyjkUbx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_m8o61J1RmJ38DhBGyjkUbx
            source_type: api_record
            title: 维基数据：王崇简（Q13668763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668763
            external_identifier: Q13668763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uMuZKV8vPLXgzAtDDjosH8
        subject_person_id: p_CiuLfhowQZTcgDe4ZP3kiG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1678-01-01
            latest: 1678-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6nE3XyPECxNaMVnYEwL9Xi
          claim_id: c_uMuZKV8vPLXgzAtDDjosH8
          source_id: s_m8o61J1RmJ38DhBGyjkUbx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_m8o61J1RmJ38DhBGyjkUbx
            source_type: api_record
            title: 维基数据：王崇简（Q13668763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668763
            external_identifier: Q13668763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lgkb3H7NACU6JYSCcgg1LF
        subject_person_id: p_CiuLfhowQZTcgDe4ZP3kiG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇简
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qCkbFQzFrddooN3TSSbWrm
          claim_id: c_Lgkb3H7NACU6JYSCcgg1LF
          source_id: s_m8o61J1RmJ38DhBGyjkUbx
          stance: supports
          locator: Q13668763
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qvimPLZb2cXfz7k3mYhU94
        subject_person_id: p_CiuLfhowQZTcgDe4ZP3kiG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tebqY22pd9wZzkQFGZaaDe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Az5jKwchct4B9PdLQd4QfU
          claim_id: c_qvimPLZb2cXfz7k3mYhU94
          source_id: s_m8o61J1RmJ38DhBGyjkUbx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m8o61J1RmJ38DhBGyjkUbx
            source_type: api_record
            title: 维基数据：王崇简（Q13668763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668763
            external_identifier: Q13668763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
        - id: cs_JH37FGaFzRpZooCSyuA8HD
          claim_id: c_qvimPLZb2cXfz7k3mYhU94
          source_id: s_b4h73LZw2Fw5KrXfofcXu1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_b4h73LZw2Fw5KrXfofcXu1
            source_type: api_record
            title: 维基数据：王熙（Q13668762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668762
            external_identifier: Q13668762
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:21.514Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%86%99_(%E9%A0%86%E6%B2%BB%E9%80%B2%E5%A3%AB)
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇简

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇简（1602年12月10日—1678年），史料所见人物。本项目依据《王崇简》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1602年12月10日 | accepted |
| death.date | 1678年 | accepted |
| name.primary | 王崇简 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |

## 外部来源

- [维基数据：王崇简（Q13668763）](https://www.wikidata.org/wiki/Q13668763)
- [维基数据：王熙（Q13668762）](https://www.wikidata.org/wiki/Q13668762)
