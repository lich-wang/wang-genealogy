---
schema: wang-person/v1
id: p_CF5TBeQK8jUMNAF7f5R2Qx
status: active
merged_into: null
display_name: 王随之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fSa5eYjCcVZWXnbeT2VVus
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随之，史料所见人物。本项目依据《王随之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_I4lXCXlgusDAZbvj9f9OcO
          claim_id: c_fSa5eYjCcVZWXnbeT2VVus
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: Q22814795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source:
            id: s_PnQSYLsNJXc2upV6EjS29M
            source_type: api_record
            title: 维基数据：王随之（Q22814795）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814795
            external_identifier: Q22814795
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x1wQ6E8D5gtjNVWA8jp9p9
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t9HyJPk3GYHP273JWticvB
          claim_id: c_x1wQ6E8D5gtjNVWA8jp9p9
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: Q22814795
          quotation: null
          interpretation_note: null
          source:
            id: s_PnQSYLsNJXc2upV6EjS29M
            source_type: api_record
            title: 维基数据：王随之（Q22814795）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814795
            external_identifier: Q22814795
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_weieAcigUKi9xGFQjRiNXS
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DqZgLkLxDg6fw1Jmrcs9bW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G2twAuoU1F7g92BpPAzsX7
          claim_id: c_weieAcigUKi9xGFQjRiNXS
          source_id: s_eDNMwzgGggzMZ5ckjXDbpj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eDNMwzgGggzMZ5ckjXDbpj
            source_type: api_record
            title: 维基数据：王弘之（Q13618784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13618784
            external_identifier: Q13618784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:11.806Z
            metadata_json: null
        - id: cs_GxGtQsCnJhDwEpbXVyQ5Kk
          claim_id: c_weieAcigUKi9xGFQjRiNXS
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PnQSYLsNJXc2upV6EjS29M
            source_type: api_record
            title: 维基数据：王随之（Q22814795）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814795
            external_identifier: Q22814795
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
      object_person:
        id: p_DqZgLkLxDg6fw1Jmrcs9bW
        status: active
        display_name: 王弘之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王随之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王随之，史料所见人物。本项目依据《王随之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王随之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DqZgLkLxDg6fw1Jmrcs9bW | 王弘之 | accepted |

## 外部来源

- [维基数据：王弘之（Q13618784）](https://www.wikidata.org/wiki/Q13618784)
- [维基数据：王随之（Q22814795）](https://www.wikidata.org/wiki/Q22814795)
