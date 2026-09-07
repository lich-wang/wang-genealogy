---
schema: wang-person/v1
id: p_DhnXcbHu6RURkgDGk1hArD
status: active
merged_into: null
display_name: 王诩 (宋世子舍人)
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VI1LgB4Khz7q_9X7TA2i2D
        subject_person_id: p_DhnXcbHu6RURkgDGk1hArD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诩 (宋世子舍人)，史料所见人物。本项目依据《王诩 (宋世子舍人)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mi46hztrdFazYvyVO49j3Z
          claim_id: c_VI1LgB4Khz7q_9X7TA2i2D
          source_id: s_NAtzVAGgcF7Q1vtnYWC2Z6
          stance: supports
          locator: Q15894191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_NAtzVAGgcF7Q1vtnYWC2Z6
            source_type: api_record
            title: 维基数据：王诩 (宋世子舍人)（Q15894191）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894191
            external_identifier: Q15894191
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k4zVGYLsF94KBUwE27nx6J
        subject_person_id: p_DhnXcbHu6RURkgDGk1hArD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诩 (宋世子舍人)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_79wG5dX9HDjmeCkp46cBkq
          claim_id: c_k4zVGYLsF94KBUwE27nx6J
          source_id: s_NAtzVAGgcF7Q1vtnYWC2Z6
          stance: supports
          locator: Q15894191
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_67CwzQ3aM6Z4ujyH9BnT1r
        subject_person_id: p_R68KiP1SJxRS53Ad6ypgqE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhnXcbHu6RURkgDGk1hArD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9vnwGX2rNHqhwhPoFg5XwG
          claim_id: c_67CwzQ3aM6Z4ujyH9BnT1r
          source_id: s_iD5eyt544b8AA8BRC2HiW9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iD5eyt544b8AA8BRC2HiW9
            source_type: api_record
            title: 维基数据：王誕（Q11573207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573207
            external_identifier: Q11573207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:47.180Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AA%95
        - id: cs_wAM4jojP59ZVp8GV7k4jGU
          claim_id: c_67CwzQ3aM6Z4ujyH9BnT1r
          source_id: s_NAtzVAGgcF7Q1vtnYWC2Z6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NAtzVAGgcF7Q1vtnYWC2Z6
            source_type: api_record
            title: 维基数据：王诩 (宋世子舍人)（Q15894191）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894191
            external_identifier: Q15894191
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person:
        id: p_R68KiP1SJxRS53Ad6ypgqE
        status: active
        display_name: 王誕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王诩 (宋世子舍人)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诩 (宋世子舍人)，史料所见人物。本项目依据《王诩 (宋世子舍人)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王诩 (宋世子舍人) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R68KiP1SJxRS53Ad6ypgqE | 王誕 | accepted |

## 外部来源

- [维基数据：王誕（Q11573207）](https://www.wikidata.org/wiki/Q11573207)
- [维基数据：王诩 (宋世子舍人)（Q15894191）](https://www.wikidata.org/wiki/Q15894191)
