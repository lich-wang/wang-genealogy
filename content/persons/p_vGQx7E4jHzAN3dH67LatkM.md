---
schema: wang-person/v1
id: p_vGQx7E4jHzAN3dH67LatkM
status: active
merged_into: null
display_name: 王有则
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GKiGeQ5SqVCC8i4LFgScgd
        subject_person_id: p_vGQx7E4jHzAN3dH67LatkM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有则（1820年—1882年），蒋介石外祖父。维基数据以独立条目 Q18228415 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Zey3SYZPOJh7PvAPPRyIRE
          claim_id: c_GKiGeQ5SqVCC8i4LFgScgd
          source_id: s_B19yevtyrKbFNN7YGHv44r
          stance: supports
          locator: Q18228415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_B19yevtyrKbFNN7YGHv44r
            source_type: api_record
            title: 维基数据：王有则（Q18228415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18228415
            external_identifier: Q18228415
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:21.514Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%89%87
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5M2KtmtXFDGQ498d2dEmma
        subject_person_id: p_vGQx7E4jHzAN3dH67LatkM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1820年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1820-01-01
            latest: 1820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4LjiVrTD7NzmgJrw4bC6zE
          claim_id: c_5M2KtmtXFDGQ498d2dEmma
          source_id: s_B19yevtyrKbFNN7YGHv44r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_B19yevtyrKbFNN7YGHv44r
            source_type: api_record
            title: 维基数据：王有则（Q18228415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18228415
            external_identifier: Q18228415
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:21.514Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%89%87
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3DDVRfnFGWLZABN2nnK9LK
        subject_person_id: p_vGQx7E4jHzAN3dH67LatkM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1882年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1882-01-01
            latest: 1882-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RarbQXvrFTWNJNUdW43RLv
          claim_id: c_3DDVRfnFGWLZABN2nnK9LK
          source_id: s_B19yevtyrKbFNN7YGHv44r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_B19yevtyrKbFNN7YGHv44r
            source_type: api_record
            title: 维基数据：王有则（Q18228415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18228415
            external_identifier: Q18228415
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:21.514Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%89%87
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8LNsytK6cAvgJVaAvHFgda
        subject_person_id: p_vGQx7E4jHzAN3dH67LatkM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有则
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DFWwLAdEnFuZykXhMy7fVG
          claim_id: c_8LNsytK6cAvgJVaAvHFgda
          source_id: s_B19yevtyrKbFNN7YGHv44r
          stance: supports
          locator: Q18228415
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LRGZcwuSgEZaMHX8e4n7Vc
        subject_person_id: p_vGQx7E4jHzAN3dH67LatkM
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GBuL5VyF8XbZmPaANS5i7Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8LGQxC9x3g7FxBiQVvZ6c
          claim_id: c_LRGZcwuSgEZaMHX8e4n7Vc
          source_id: s_YMcjNCGavBcKErj31Hp2e4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YMcjNCGavBcKErj31Hp2e4
            source_type: api_record
            title: 维基数据：王采玉（Q14368700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q14368700
            external_identifier: Q14368700
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:19.343Z
            metadata_json: null
        - id: cs_M2FH2ea4scGm3hMNXvE7iw
          claim_id: c_LRGZcwuSgEZaMHX8e4n7Vc
          source_id: s_B19yevtyrKbFNN7YGHv44r
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B19yevtyrKbFNN7YGHv44r
            source_type: api_record
            title: 维基数据：王有则（Q18228415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18228415
            external_identifier: Q18228415
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:21.514Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%89%87
      object_person:
        id: p_GBuL5VyF8XbZmPaANS5i7Y
        status: active
        display_name: 王采玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有则

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有则（1820年—1882年），蒋介石外祖父。维基数据以独立条目 Q18228415 收录该人物。 | accepted |
| birth.date | 1820年 | accepted |
| death.date | 1882年 | accepted |
| name.primary | 王有则 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GBuL5VyF8XbZmPaANS5i7Y | 王采玉 | accepted |

## 外部来源

- [维基数据：王采玉（Q14368700）](https://www.wikidata.org/wiki/Q14368700)
- [维基数据：王有则（Q18228415）](https://www.wikidata.org/wiki/Q18228415)
