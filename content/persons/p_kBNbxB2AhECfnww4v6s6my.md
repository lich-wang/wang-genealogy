---
schema: wang-person/v1
id: p_kBNbxB2AhECfnww4v6s6my
status: active
merged_into: null
display_name: 王彦威
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uZ99M4aHhzFj3Kv67pJ3QV
        subject_person_id: p_kBNbxB2AhECfnww4v6s6my
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦威（卒于845年），唐朝。维基数据以独立条目 Q15894027 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_agtwJYTxQ_1vzNp5VIkWEH
          claim_id: c_uZ99M4aHhzFj3Kv67pJ3QV
          source_id: s_mauAqqMDEA4eHV5vX3QyMY
          stance: supports
          locator: Q15894027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_mauAqqMDEA4eHV5vX3QyMY
            source_type: api_record
            title: 维基数据：王彦威（Q15894027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894027
            external_identifier: Q15894027
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:25.096Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1rVykWapof9s7H9pVPMKcJ
        subject_person_id: p_kBNbxB2AhECfnww4v6s6my
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 845年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0845-01-01
            latest: 0845-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YkPdJ1W1P9M3LN6ho3vN8M
          claim_id: c_1rVykWapof9s7H9pVPMKcJ
          source_id: s_mauAqqMDEA4eHV5vX3QyMY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mauAqqMDEA4eHV5vX3QyMY
            source_type: api_record
            title: 维基数据：王彦威（Q15894027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894027
            external_identifier: Q15894027
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:25.096Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBQCHoaHtMQ6TwvNEiSx82
        subject_person_id: p_kBNbxB2AhECfnww4v6s6my
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦威
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8heA6k21YyBGdWZp484QVM
          claim_id: c_gBQCHoaHtMQ6TwvNEiSx82
          source_id: s_mauAqqMDEA4eHV5vX3QyMY
          stance: supports
          locator: Q15894027
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XSrNdGrYMCKwgKVQphoC9A
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kBNbxB2AhECfnww4v6s6my
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LdHPLVrMRfet6RdNANii94
          claim_id: c_XSrNdGrYMCKwgKVQphoC9A
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_ZJD27tbAS1KCL4CfbcJC81
          claim_id: c_XSrNdGrYMCKwgKVQphoC9A
          source_id: s_mauAqqMDEA4eHV5vX3QyMY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mauAqqMDEA4eHV5vX3QyMY
            source_type: api_record
            title: 维基数据：王彦威（Q15894027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894027
            external_identifier: Q15894027
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:25.096Z
            metadata_json: null
      object_person:
        id: p_ZGT8gZNiBTBKcXdZjzhNZq
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彦威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彦威（卒于845年），唐朝。维基数据以独立条目 Q15894027 收录该人物。 | accepted |
| death.date | 845年 | accepted |
| name.primary | 王彦威 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZGT8gZNiBTBKcXdZjzhNZq | 王俊 | accepted |

## 外部来源

- [维基数据：王俊（Q26209939）](https://www.wikidata.org/wiki/Q26209939)
- [维基数据：王彦威（Q15894027）](https://www.wikidata.org/wiki/Q15894027)
