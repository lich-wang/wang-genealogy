---
schema: wang-person/v1
id: p_GraxxoUFNNsAGA27UWSPso
status: active
merged_into: null
display_name: 王正康
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLkQW563jvj4f2fWI-aRfx
        subject_person_id: p_GraxxoUFNNsAGA27UWSPso
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正康（1874年—1921年），史料所见人物。本项目依据《王正康》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U1iDgchp3xKDNRHKEGdVvf
          claim_id: c_nLkQW563jvj4f2fWI-aRfx
          source_id: s_gCSdtyj5AnbWZwJnoZ4ntg
          stance: supports
          locator: Q112678623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gCSdtyj5AnbWZwJnoZ4ntg
            source_type: api_record
            title: 维基数据：王正康（Q112678623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678623
            external_identifier: Q112678623
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:58.992Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iz2ajxcnCfca77cJrX6jk4
        subject_person_id: p_GraxxoUFNNsAGA27UWSPso
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1874年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1874-01-01
            latest: 1874-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xh7juj2BdtPNMFqNMpbMVK
          claim_id: c_iz2ajxcnCfca77cJrX6jk4
          source_id: s_gCSdtyj5AnbWZwJnoZ4ntg
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
        id: c_ugtnmjQjPs81KL7FkCkSZM
        subject_person_id: p_GraxxoUFNNsAGA27UWSPso
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1921年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1921-01-01
            latest: 1921-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5vkBugDhSJBEH1gQbyD15a
          claim_id: c_ugtnmjQjPs81KL7FkCkSZM
          source_id: s_gCSdtyj5AnbWZwJnoZ4ntg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gCSdtyj5AnbWZwJnoZ4ntg
            source_type: api_record
            title: 维基数据：王正康（Q112678623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678623
            external_identifier: Q112678623
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:58.992Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DBTFXbBJogJt5PrfiZ4W7e
        subject_person_id: p_GraxxoUFNNsAGA27UWSPso
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正康
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_knA1RA9P4GMFwMkszx83tk
          claim_id: c_DBTFXbBJogJt5PrfiZ4W7e
          source_id: s_gCSdtyj5AnbWZwJnoZ4ntg
          stance: supports
          locator: Q112678623
          quotation: null
          interpretation_note: null
          source:
            id: s_gCSdtyj5AnbWZwJnoZ4ntg
            source_type: api_record
            title: 维基数据：王正康（Q112678623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678623
            external_identifier: Q112678623
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:58.992Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SCk6oWnkUSmfBJRJ6bYyea
        subject_person_id: p_Mu15E56wyrNWUKHP8qFxt8
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GraxxoUFNNsAGA27UWSPso
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C6mzPSATYKVEaq2JadSecP
          claim_id: c_SCk6oWnkUSmfBJRJ6bYyea
          source_id: s_Vu8MRc3pp9WwKYcye94xWa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Vu8MRc3pp9WwKYcye94xWa
            source_type: api_record
            title: 维基数据：王际唐（Q30949751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q30949751
            external_identifier: Q30949751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%85%89_(%E8%8B%B1%E5%9C%8B%E5%82%B3%E6%95%99%E5%A3%AB)
        - id: cs_EEr4WzcaGuQdohC17VqbGD
          claim_id: c_SCk6oWnkUSmfBJRJ6bYyea
          source_id: s_gCSdtyj5AnbWZwJnoZ4ntg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gCSdtyj5AnbWZwJnoZ4ntg
            source_type: api_record
            title: 维基数据：王正康（Q112678623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678623
            external_identifier: Q112678623
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:58.992Z
            metadata_json: null
      object_person:
        id: p_Mu15E56wyrNWUKHP8qFxt8
        status: active
        display_name: 王际唐
        merged_into_person_id: null
  children:
    - claim:
        id: c_3coKWHUWpA2YAA6JtWkuwp
        subject_person_id: p_GraxxoUFNNsAGA27UWSPso
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_pAKHETzQM4dvoHJSq2ojSG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1HmDrs38dPJ9925LqnuXxN
          claim_id: c_3coKWHUWpA2YAA6JtWkuwp
          source_id: s_gCSdtyj5AnbWZwJnoZ4ntg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gCSdtyj5AnbWZwJnoZ4ntg
            source_type: api_record
            title: 维基数据：王正康（Q112678623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678623
            external_identifier: Q112678623
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:58.992Z
            metadata_json: null
        - id: cs_dVLMeXgTEVYuxyz8LUHJTj
          claim_id: c_3coKWHUWpA2YAA6JtWkuwp
          source_id: s_G18zLPNNzBuY7NCLNKj23r
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G18zLPNNzBuY7NCLNKj23r
            source_type: api_record
            title: 维基数据：王恭芳（Q112678621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678621
            external_identifier: Q112678621
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
      object_person:
        id: p_pAKHETzQM4dvoHJSq2ojSG
        status: active
        display_name: 王恭芳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正康（1874年—1921年），史料所见人物。本项目依据《王正康》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1874年 | accepted |
| death.date | 1921年 | accepted |
| name.primary | 王正康 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mu15E56wyrNWUKHP8qFxt8 | 王际唐 | accepted |
| children | p_pAKHETzQM4dvoHJSq2ojSG | 王恭芳 | accepted |

## 外部来源

- [维基数据：王恭芳（Q112678621）](https://www.wikidata.org/wiki/Q112678621)
- [维基数据：王际唐（Q30949751）](https://www.wikidata.org/wiki/Q30949751)
- [维基数据：王正康（Q112678623）](https://www.wikidata.org/wiki/Q112678623)
