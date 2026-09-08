---
schema: wang-person/v1
id: p_q4vC5FD8w5c9LNEgf9ELC7
status: active
merged_into: null
display_name: 王师德
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ogES6nTZqLpBVBpuUkKMZ6
        subject_person_id: p_q4vC5FD8w5c9LNEgf9ELC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师德（1102年—1161年），史料所见人物。本项目依据《王师德》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vspxp2SXCiYI4D3excku58
          claim_id: c_ogES6nTZqLpBVBpuUkKMZ6
          source_id: s_DAPkWfZyYg83KpTnKJ7hDu
          stance: supports
          locator: Q45369098
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DAPkWfZyYg83KpTnKJ7hDu
            source_type: api_record
            title: 维基数据：王师德（Q45369098）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369098
            external_identifier: Q45369098
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:11.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fxJFZFQB7a4vWNwxdq8G7A
        subject_person_id: p_q4vC5FD8w5c9LNEgf9ELC7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1102年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1102-01-01
            latest: 1102-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VEy6pgNUxZJnJx45CXhLN7
          claim_id: c_fxJFZFQB7a4vWNwxdq8G7A
          source_id: s_DAPkWfZyYg83KpTnKJ7hDu
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
        id: c_VgmPNqXK1dYxhf396awJ1V
        subject_person_id: p_q4vC5FD8w5c9LNEgf9ELC7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1161年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1161-01-01
            latest: 1161-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uCVet5dKqoynJJQj5drCZK
          claim_id: c_VgmPNqXK1dYxhf396awJ1V
          source_id: s_DAPkWfZyYg83KpTnKJ7hDu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DAPkWfZyYg83KpTnKJ7hDu
            source_type: api_record
            title: 维基数据：王师德（Q45369098）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369098
            external_identifier: Q45369098
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:11.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H9qSciZxL7bL1CvcZPz4vf
        subject_person_id: p_q4vC5FD8w5c9LNEgf9ELC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师德
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HHSspwVLSiHZTgGCxbqU4e
          claim_id: c_H9qSciZxL7bL1CvcZPz4vf
          source_id: s_DAPkWfZyYg83KpTnKJ7hDu
          stance: supports
          locator: Q45369098
          quotation: null
          interpretation_note: null
          source:
            id: s_DAPkWfZyYg83KpTnKJ7hDu
            source_type: api_record
            title: 维基数据：王师德（Q45369098）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369098
            external_identifier: Q45369098
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:11.232Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MFqVnTKa2bVrHshmeLFCsn
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q4vC5FD8w5c9LNEgf9ELC7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNRP2EW9N96RGJmrpRzjKa
          claim_id: c_MFqVnTKa2bVrHshmeLFCsn
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
        - id: cs_VZx2SnY4Bsf8FEtnzRf8S5
          claim_id: c_MFqVnTKa2bVrHshmeLFCsn
          source_id: s_DAPkWfZyYg83KpTnKJ7hDu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_mLtGjU7JUkYcfBzdb7BH9M
        status: active
        display_name: 王登
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师德（1102年—1161年），史料所见人物。本项目依据《王师德》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1102年 | accepted |
| death.date | 1161年 | accepted |
| name.primary | 王师德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mLtGjU7JUkYcfBzdb7BH9M | 王登 | accepted |

## 外部来源

- [维基数据：王登（Q45369083）](https://www.wikidata.org/wiki/Q45369083)
- [维基数据：王师德（Q45369098）](https://www.wikidata.org/wiki/Q45369098)
