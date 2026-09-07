---
schema: wang-person/v1
id: p_uqfQQT9vPG2HPVfSPYfNxW
status: active
merged_into: null
display_name: 王彦和
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e4w2I81yrcAcjDfmy_8-Z1
        subject_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦和（1794年—1855年），史料所见人物。本项目依据《王彦和》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XBOlcNML25wZgv-x-Tpw5C
          claim_id: c_e4w2I81yrcAcjDfmy_8-Z1
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
          stance: supports
          locator: Q13688427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u1MBEsxYaPubmkw8roW91u
        subject_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1794-01-01
            latest: 1794-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_39LFf3wjkc6gptiUqwigYG
          claim_id: c_u1MBEsxYaPubmkw8roW91u
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
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
        id: c_uT1NSemKMLDh956wumDCdU
        subject_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1855-01-01
            latest: 1855-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_41JJvgpzzo61wJ1vX4yPRY
          claim_id: c_uT1NSemKMLDh956wumDCdU
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gP664uneAsFQCNKMKrxSwb
        subject_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦和
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PMHeigSumaeAkpbrxGn59n
          claim_id: c_gP664uneAsFQCNKMKrxSwb
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
          stance: supports
          locator: Q13688427
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cGHkLgdAkZtkymvcHo4cSU
        subject_person_id: p_x9CQGixzEkUnA7H8VckBPu
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_uqfQQT9vPG2HPVfSPYfNxW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6nm3Cf9Z51KMHk3Qk4ompG
          claim_id: c_cGHkLgdAkZtkymvcHo4cSU
          source_id: s_GVf5jcuqXCX9pAFvQzJyLj
          stance: supports
          locator: P22（父）
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
        - id: cs_cv8xonsrDva8yC9dePo31J
          claim_id: c_cGHkLgdAkZtkymvcHo4cSU
          source_id: s_SwHU4SeGpPq4puTdYE17fn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SwHU4SeGpPq4puTdYE17fn
            source_type: api_record
            title: 维基数据：王引之（Q11573061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573061
            external_identifier: Q11573061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%95%E4%B9%8B
      object_person:
        id: p_x9CQGixzEkUnA7H8VckBPu
        status: active
        display_name: 王引之
        merged_into_person_id: null
  children:
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
        id: p_WnzeDxUgCdUsmjig4GqwKM
        status: active
        display_name: 王恩霈
        merged_into_person_id: null
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
        id: p_nAE6RA3CFQVwB7V3gfHuuZ
        status: active
        display_name: 沈氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王彦和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彦和（1794年—1855年），史料所见人物。本项目依据《王彦和》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1794年 | accepted |
| death.date | 1855年 | accepted |
| name.primary | 王彦和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x9CQGixzEkUnA7H8VckBPu | 王引之 | accepted |
| children | p_WnzeDxUgCdUsmjig4GqwKM | 王恩霈 | accepted |
| spouses | p_nAE6RA3CFQVwB7V3gfHuuZ | 沈氏 | accepted |

## 外部来源

- [维基数据：沈氏（Q13688548）](https://www.wikidata.org/wiki/Q13688548)
- [维基数据：王恩霈（Q13689616）](https://www.wikidata.org/wiki/Q13689616)
- [维基数据：王彦和（Q13688427）](https://www.wikidata.org/wiki/Q13688427)
- [维基数据：王引之（Q11573061）](https://www.wikidata.org/wiki/Q11573061)
