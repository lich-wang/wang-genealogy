---
schema: wang-person/v1
id: p_WnzeDxUgCdUsmjig4GqwKM
status: active
merged_into: null
display_name: 王恩霈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ifLhtERoDr6K9w4Pzj6-5
        subject_person_id: p_WnzeDxUgCdUsmjig4GqwKM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩霈，史料所见人物。本项目依据《王恩霈》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D2v_XIdL06GZ0DWEV_S2g5
          claim_id: c_5ifLhtERoDr6K9w4Pzj6-5
          source_id: s_BvhVvtuasc3EBVe9jRJ5jR
          stance: supports
          locator: Q13689616
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BvhVvtuasc3EBVe9jRJ5jR
            source_type: api_record
            title: 维基数据：王恩霈（Q13689616）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13689616
            external_identifier: Q13689616
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.617Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AvQgb1KD5vhuWwKUKMM9EA
        subject_person_id: p_WnzeDxUgCdUsmjig4GqwKM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩霈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z1MHSVTk4kxBYm5W1YMB1H
          claim_id: c_AvQgb1KD5vhuWwKUKMM9EA
          source_id: s_BvhVvtuasc3EBVe9jRJ5jR
          stance: supports
          locator: Q13689616
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aZM5wGhsz9VJPtN8FGtaVt
        subject_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WnzeDxUgCdUsmjig4GqwKM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jv6NwVysV3NvkjQqZwJpYJ
          claim_id: c_aZM5wGhsz9VJPtN8FGtaVt
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GVf5jcuqXCX9pAFvQzJyLj
            source_type: api_record
            title: 维基数据：王彦和（Q13688427）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688427
            external_identifier: Q13688427
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
        - id: cs_rFFXz1J2NP4zxbKA3hsxuD
          claim_id: c_aZM5wGhsz9VJPtN8FGtaVt
          source_id: s_BvhVvtuasc3EBVe9jRJ5jR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BvhVvtuasc3EBVe9jRJ5jR
            source_type: api_record
            title: 维基数据：王恩霈（Q13689616）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13689616
            external_identifier: Q13689616
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.617Z
            metadata_json: null
      object_person:
        id: p_uqfQQT9vPG2HPVfSPYfNxW
        status: active
        display_name: 王彦和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恩霈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恩霈，史料所见人物。本项目依据《王恩霈》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恩霈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uqfQQT9vPG2HPVfSPYfNxW | 王彦和 | accepted |

## 外部来源

- [维基数据：王恩霈（Q13689616）](https://www.wikidata.org/wiki/Q13689616)
- [维基数据：王彦和（Q13688427）](https://www.wikidata.org/wiki/Q13688427)
