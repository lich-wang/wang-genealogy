---
schema: wang-person/v1
id: p_BRcQkWEY9MyKDA75YZ1GEQ
status: active
merged_into: null
display_name: 唐丽题
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h26tanSwKtoggD7Le9aZIW
        subject_person_id: p_BRcQkWEY9MyKDA75YZ1GEQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐丽题（1915年—2002年），史料所见人物。本项目依据《唐丽题》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m5K-iE2AWPyZTqpjINA1Z3
          claim_id: c_h26tanSwKtoggD7Le9aZIW
          source_id: s_656qHGhCKpNXtdK3JFXFpz
          stance: supports
          locator: Q111019617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_656qHGhCKpNXtdK3JFXFpz
            source_type: api_record
            title: 维基数据：唐丽题（Q111019617）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q111019617
            external_identifier: Q111019617
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6jNieiL1bUjctKezPy6KCu
        subject_person_id: p_BRcQkWEY9MyKDA75YZ1GEQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1915年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1915-01-01
            latest: 1915-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FLf1555awhpyEFvTCmzVYY
          claim_id: c_6jNieiL1bUjctKezPy6KCu
          source_id: s_656qHGhCKpNXtdK3JFXFpz
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
        id: c_yzeYQuQzXMPX78LhmvC4oz
        subject_person_id: p_BRcQkWEY9MyKDA75YZ1GEQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 2002年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 2002-01-01
            latest: 2002-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CafXWRBWPYWowoDiYz1qWi
          claim_id: c_yzeYQuQzXMPX78LhmvC4oz
          source_id: s_656qHGhCKpNXtdK3JFXFpz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_656qHGhCKpNXtdK3JFXFpz
            source_type: api_record
            title: 维基数据：唐丽题（Q111019617）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q111019617
            external_identifier: Q111019617
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uPmia2aDL63MbMk1LCza8h
        subject_person_id: p_BRcQkWEY9MyKDA75YZ1GEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐丽题
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wW5GxWDDiVMPtVLxGLLjzJ
          claim_id: c_uPmia2aDL63MbMk1LCza8h
          source_id: s_656qHGhCKpNXtdK3JFXFpz
          stance: supports
          locator: Q111019617
          quotation: null
          interpretation_note: null
          source:
            id: s_656qHGhCKpNXtdK3JFXFpz
            source_type: api_record
            title: 维基数据：唐丽题（Q111019617）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q111019617
            external_identifier: Q111019617
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_62qiWmKgR62dMJ5WU23aXH
        subject_person_id: p_4TBbrVj7ZkYsDdJkECaQJu
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_BRcQkWEY9MyKDA75YZ1GEQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kieei1cM5Pc14tim3djywL
          claim_id: c_62qiWmKgR62dMJ5WU23aXH
          source_id: s_656qHGhCKpNXtdK3JFXFpz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_656qHGhCKpNXtdK3JFXFpz
            source_type: api_record
            title: 维基数据：唐丽题（Q111019617）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q111019617
            external_identifier: Q111019617
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
        - id: cs_Mx282dQBuiS8FTDGy2YcS2
          claim_id: c_62qiWmKgR62dMJ5WU23aXH
          source_id: s_1W3JXWUv1KjRxpbiSYGUsW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1W3JXWUv1KjRxpbiSYGUsW
            source_type: api_record
            title: 维基数据：王曾思（Q111019581）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q111019581
            external_identifier: Q111019581
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:58.992Z
            metadata_json: null
      object_person:
        id: p_4TBbrVj7ZkYsDdJkECaQJu
        status: active
        display_name: 王曾思
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 唐丽题

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 唐丽题（1915年—2002年），史料所见人物。本项目依据《唐丽题》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1915年 | accepted |
| death.date | 2002年 | accepted |
| name.primary | 唐丽题 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TBbrVj7ZkYsDdJkECaQJu | 王曾思 | accepted |

## 外部来源

- [维基数据：唐丽题（Q111019617）](https://www.wikidata.org/wiki/Q111019617)
- [维基数据：王曾思（Q111019581）](https://www.wikidata.org/wiki/Q111019581)
