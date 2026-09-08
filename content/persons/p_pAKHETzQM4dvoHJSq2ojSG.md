---
schema: wang-person/v1
id: p_pAKHETzQM4dvoHJSq2ojSG
status: active
merged_into: null
display_name: 王恭芳
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCtgtyemE4z-cXCi-lrRh0
        subject_person_id: p_pAKHETzQM4dvoHJSq2ojSG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭芳，史料所见人物。本项目依据《王恭芳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ybRDpzgNxKBL17kNcwcwOc
          claim_id: c_dCtgtyemE4z-cXCi-lrRh0
          source_id: s_G18zLPNNzBuY7NCLNKj23r
          stance: supports
          locator: Q112678621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5y8iHduZPYzvCJuxQKT6Nn
        subject_person_id: p_pAKHETzQM4dvoHJSq2ojSG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭芳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4ErmT4yoHcywc1sGUCm128
          claim_id: c_5y8iHduZPYzvCJuxQKT6Nn
          source_id: s_G18zLPNNzBuY7NCLNKj23r
          stance: supports
          locator: Q112678621
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_GraxxoUFNNsAGA27UWSPso
        status: active
        display_name: 王正康
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bKqJWvFMW5XhMgJgA9bF7M
        subject_person_id: p_AyM9toVa56sUUcM6gAK48S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pAKHETzQM4dvoHJSq2ojSG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KgQG7QNr3cTRYRAf5KnGCk
          claim_id: c_bKqJWvFMW5XhMgJgA9bF7M
          source_id: s_G18zLPNNzBuY7NCLNKj23r
          stance: supports
          locator: P26（配偶）
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
        - id: cs_uV1k8yhLhByk4J8MZLQ9Lc
          claim_id: c_bKqJWvFMW5XhMgJgA9bF7M
          source_id: s_MhTpwcwfTM2HEy77BbQ8WQ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_MhTpwcwfTM2HEy77BbQ8WQ
            source_type: api_record
            title: 维基数据：夏璐瑛（Q112678610）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112678610
            external_identifier: Q112678610
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:18.753Z
            metadata_json: null
      object_person:
        id: p_AyM9toVa56sUUcM6gAK48S
        status: active
        display_name: 夏璐瑛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王恭芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恭芳，史料所见人物。本项目依据《王恭芳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恭芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GraxxoUFNNsAGA27UWSPso | 王正康 | accepted |
| spouses | p_AyM9toVa56sUUcM6gAK48S | 夏璐瑛 | accepted |

## 外部来源

- [维基数据：王恭芳（Q112678621）](https://www.wikidata.org/wiki/Q112678621)
- [维基数据：王正康（Q112678623）](https://www.wikidata.org/wiki/Q112678623)
- [维基数据：夏璐瑛（Q112678610）](https://www.wikidata.org/wiki/Q112678610)
