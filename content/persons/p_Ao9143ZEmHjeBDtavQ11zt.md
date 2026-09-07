---
schema: wang-person/v1
id: p_Ao9143ZEmHjeBDtavQ11zt
status: active
merged_into: null
display_name: 王慎言
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hkMG_o1VXUzT8QgM8vg9gE
        subject_person_id: p_Ao9143ZEmHjeBDtavQ11zt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎言（1011年—1087年），史料所见人物。本项目依据《王慎言》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M0yLpvlmWKhMwQaLWkQW3W
          claim_id: c_hkMG_o1VXUzT8QgM8vg9gE
          source_id: s_izsfXGzKSuXG7aBW1n7dPf
          stance: supports
          locator: Q45363017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_izsfXGzKSuXG7aBW1n7dPf
            source_type: api_record
            title: 维基数据：王慎言（Q45363017）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363017
            external_identifier: Q45363017
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:02.562Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JKKpHkfo54ihf3KhBDBJ8J
        subject_person_id: p_Ao9143ZEmHjeBDtavQ11zt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1011年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1011-01-01
            latest: 1011-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jMdsjZrGPfQgdqaWP1go81
          claim_id: c_JKKpHkfo54ihf3KhBDBJ8J
          source_id: s_izsfXGzKSuXG7aBW1n7dPf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5kfDbZfaY8mptPvASXr4j9
        subject_person_id: p_Ao9143ZEmHjeBDtavQ11zt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1087年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1087-01-01
            latest: 1087-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KqpLexmTkQP46pLDhg9HLf
          claim_id: c_5kfDbZfaY8mptPvASXr4j9
          source_id: s_izsfXGzKSuXG7aBW1n7dPf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_izsfXGzKSuXG7aBW1n7dPf
            source_type: api_record
            title: 维基数据：王慎言（Q45363017）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363017
            external_identifier: Q45363017
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:02.562Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QxRBab3iCo8mfPwkHmzWJD
        subject_person_id: p_Ao9143ZEmHjeBDtavQ11zt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎言
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4cvKhEZH2dE6HCms2e8jKy
          claim_id: c_QxRBab3iCo8mfPwkHmzWJD
          source_id: s_izsfXGzKSuXG7aBW1n7dPf
          stance: supports
          locator: Q45363017
          quotation: null
          interpretation_note: null
          source:
            id: s_izsfXGzKSuXG7aBW1n7dPf
            source_type: api_record
            title: 维基数据：王慎言（Q45363017）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363017
            external_identifier: Q45363017
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:02.562Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zw2QikvJTuA9GW6TU3npVE
        subject_person_id: p_8yGvQV64DEaN7zXdMCaL2M
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ao9143ZEmHjeBDtavQ11zt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QTm2MDFu7nrt5JG1a15P2f
          claim_id: c_zw2QikvJTuA9GW6TU3npVE
          source_id: s_izsfXGzKSuXG7aBW1n7dPf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_izsfXGzKSuXG7aBW1n7dPf
            source_type: api_record
            title: 维基数据：王慎言（Q45363017）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363017
            external_identifier: Q45363017
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:02.562Z
            metadata_json: null
        - id: cs_a38XiQ6sKA4uRZzFP4Ppa1
          claim_id: c_zw2QikvJTuA9GW6TU3npVE
          source_id: s_9d6NmxQWLcW1dsP819MSKa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9d6NmxQWLcW1dsP819MSKa
            source_type: api_record
            title: 维基数据：王益恭（Q45401756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401756
            external_identifier: Q45401756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:19.863Z
            metadata_json: null
      object_person:
        id: p_8yGvQV64DEaN7zXdMCaL2M
        status: active
        display_name: 王益恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慎言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎言（1011年—1087年），史料所见人物。本项目依据《王慎言》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1011年 | accepted |
| death.date | 1087年 | accepted |
| name.primary | 王慎言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8yGvQV64DEaN7zXdMCaL2M | 王益恭 | accepted |

## 外部来源

- [维基数据：王慎言（Q45363017）](https://www.wikidata.org/wiki/Q45363017)
- [维基数据：王益恭（Q45401756）](https://www.wikidata.org/wiki/Q45401756)
