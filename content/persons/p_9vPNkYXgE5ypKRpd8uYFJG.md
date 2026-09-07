---
schema: wang-person/v1
id: p_9vPNkYXgE5ypKRpd8uYFJG
status: active
merged_into: null
display_name: 王睦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M1fYdcgsU8SruEsDgcua7v
        subject_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦（卒于23年），史料所见人物。本项目依据《王睦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_vw64k20KCQtD2Ch1sanEMW
          claim_id: c_M1fYdcgsU8SruEsDgcua7v
          source_id: s_p6T7LvPabQDRJgqL2oYwEH
          stance: supports
          locator: Q100292568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source:
            id: s_p6T7LvPabQDRJgqL2oYwEH
            source_type: api_record
            title: 维基数据：王睦（Q100292568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q100292568
            external_identifier: Q100292568
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YaM6RkcRCwpXm7z19CzdMC
        subject_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 23年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0023-01-01
            latest: 0023-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fS79n4LcPUA9NKuoBwJYnt
          claim_id: c_YaM6RkcRCwpXm7z19CzdMC
          source_id: s_p6T7LvPabQDRJgqL2oYwEH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_p6T7LvPabQDRJgqL2oYwEH
            source_type: api_record
            title: 维基数据：王睦（Q100292568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q100292568
            external_identifier: Q100292568
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tJH4g5MSXwCG4pdPYeFXQQ
        subject_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TRX6afmyE9m36HtXuVUphE
          claim_id: c_tJH4g5MSXwCG4pdPYeFXQQ
          source_id: s_p6T7LvPabQDRJgqL2oYwEH
          stance: supports
          locator: Q100292568
          quotation: null
          interpretation_note: null
          source:
            id: s_p6T7LvPabQDRJgqL2oYwEH
            source_type: api_record
            title: 维基数据：王睦（Q100292568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q100292568
            external_identifier: Q100292568
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CjE4Df5U2stCSFtaq6vi2e
        subject_person_id: p_L84jn2bobEqW6DPu32c5vg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9vPNkYXgE5ypKRpd8uYFJG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VzUDg8C8BFChwbGMssMs5A
          claim_id: c_CjE4Df5U2stCSFtaq6vi2e
          source_id: s_p6T7LvPabQDRJgqL2oYwEH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_p6T7LvPabQDRJgqL2oYwEH
            source_type: api_record
            title: 维基数据：王睦（Q100292568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q100292568
            external_identifier: Q100292568
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:03.927Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9D%A6
        - id: cs_iki9pkqBLZ49VrA9q48ADS
          claim_id: c_CjE4Df5U2stCSFtaq6vi2e
          source_id: s_e3TcvhZK4GEeRDZ93ML51A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e3TcvhZK4GEeRDZ93ML51A
            source_type: api_record
            title: 维基数据：王邑（Q11573232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573232
            external_identifier: Q11573232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%82%91_(%E6%96%B0%E6%9C%9D)
      object_person:
        id: p_L84jn2bobEqW6DPu32c5vg
        status: active
        display_name: 王邑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王睦（卒于23年），史料所见人物。本项目依据《王睦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 23年 | accepted |
| name.primary | 王睦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L84jn2bobEqW6DPu32c5vg | 王邑 | accepted |

## 外部来源

- [维基数据：王睦（Q100292568）](https://www.wikidata.org/wiki/Q100292568)
- [维基数据：王邑（Q11573232）](https://www.wikidata.org/wiki/Q11573232)
