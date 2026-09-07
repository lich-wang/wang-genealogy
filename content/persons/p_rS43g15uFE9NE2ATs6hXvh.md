---
schema: wang-person/v1
id: p_rS43g15uFE9NE2ATs6hXvh
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bU3lfAJrLU0VyAVx6OAINu
        subject_person_id: p_rS43g15uFE9NE2ATs6hXvh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ld0xYAiiXjoYhAqzGts8IT
          claim_id: c_bU3lfAJrLU0VyAVx6OAINu
          source_id: s_6wubF99G6Gw6DbeDfxggcu
          stance: supports
          locator: Q13690230
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6wubF99G6Gw6DbeDfxggcu
            source_type: api_record
            title: 维基数据：王氏（Q13690230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13690230
            external_identifier: Q13690230
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.617Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbcbtQd4TDgpEXRBaumLRM
        subject_person_id: p_rS43g15uFE9NE2ATs6hXvh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nw8nsNEnVXbho2MsN6mCCK
          claim_id: c_wbcbtQd4TDgpEXRBaumLRM
          source_id: s_6wubF99G6Gw6DbeDfxggcu
          stance: supports
          locator: Q13690230
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BAm4aTjiwzzVTTBHNLstGD
        subject_person_id: p_mWzr5N28LsqLmLk2ra7Nay
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_rS43g15uFE9NE2ATs6hXvh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2RBVZKXJ1XJmcJ2LB3Sh2d
          claim_id: c_BAm4aTjiwzzVTTBHNLstGD
          source_id: s_6wubF99G6Gw6DbeDfxggcu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6wubF99G6Gw6DbeDfxggcu
            source_type: api_record
            title: 维基数据：王氏（Q13690230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13690230
            external_identifier: Q13690230
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.617Z
            metadata_json: null
        - id: cs_JiaCXFPDSxB4MJ7jjCKJT6
          claim_id: c_BAm4aTjiwzzVTTBHNLstGD
          source_id: s_wkmxHC8exWXf9St7H3GHAy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wkmxHC8exWXf9St7H3GHAy
            source_type: api_record
            title: 维基数据：王寿昌（Q13688262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688262
            external_identifier: Q13688262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person:
        id: p_mWzr5N28LsqLmLk2ra7Nay
        status: active
        display_name: 王寿昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mWzr5N28LsqLmLk2ra7Nay | 王寿昌 | accepted |

## 外部来源

- [维基数据：王氏（Q13690230）](https://www.wikidata.org/wiki/Q13690230)
- [维基数据：王寿昌（Q13688262）](https://www.wikidata.org/wiki/Q13688262)
