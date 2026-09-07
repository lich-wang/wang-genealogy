---
schema: wang-person/v1
id: p_nAE6RA3CFQVwB7V3gfHuuZ
status: active
merged_into: null
display_name: 沈氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t7_vJz4A0uiLYJh_6NepgP
        subject_person_id: p_nAE6RA3CFQVwB7V3gfHuuZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏，史料所见人物。本项目依据《沈氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fRcwgVow6WATSil0JFGmtT
          claim_id: c_t7_vJz4A0uiLYJh_6NepgP
          source_id: s_EjZ6moifcHU7NftoSE6aSk
          stance: supports
          locator: Q13688548
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EjZ6moifcHU7NftoSE6aSk
            source_type: api_record
            title: 维基数据：沈氏（Q13688548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688548
            external_identifier: Q13688548
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.616Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUwm22nZSQ3S6xPZvqPJzK
        subject_person_id: p_nAE6RA3CFQVwB7V3gfHuuZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xKLtR1A8tCPKM7fY2gfHT5
          claim_id: c_oUwm22nZSQ3S6xPZvqPJzK
          source_id: s_EjZ6moifcHU7NftoSE6aSk
          stance: supports
          locator: Q13688548
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PzbSQnEwn1GANnxuSYyTaP
        subject_person_id: p_nAE6RA3CFQVwB7V3gfHuuZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VSDw76HQnuQWBozNBL1ZWR
          claim_id: c_PzbSQnEwn1GANnxuSYyTaP
          source_id: s_EjZ6moifcHU7NftoSE6aSk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_EjZ6moifcHU7NftoSE6aSk
            source_type: api_record
            title: 维基数据：沈氏（Q13688548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688548
            external_identifier: Q13688548
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.616Z
            metadata_json: null
        - id: cs_vWs64PhAuUSDq5bvTF5MQj
          claim_id: c_PzbSQnEwn1GANnxuSYyTaP
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
          stance: supports
          locator: P26（配偶）
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
      object_person:
        id: p_uqfQQT9vPG2HPVfSPYfNxW
        status: active
        display_name: 王彦和
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 沈氏，史料所见人物。本项目依据《沈氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 沈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uqfQQT9vPG2HPVfSPYfNxW | 王彦和 | accepted |

## 外部来源

- [维基数据：沈氏（Q13688548）](https://www.wikidata.org/wiki/Q13688548)
- [维基数据：王彦和（Q13688427）](https://www.wikidata.org/wiki/Q13688427)
