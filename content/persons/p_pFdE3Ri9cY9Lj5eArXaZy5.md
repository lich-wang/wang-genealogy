---
schema: wang-person/v1
id: p_pFdE3Ri9cY9Lj5eArXaZy5
status: active
merged_into: null
display_name: 王则
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KTJdR-XP0fMuAWwGPO2-eM
        subject_person_id: p_pFdE3Ri9cY9Lj5eArXaZy5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王则（卒于1048年），史料所见人物。本项目依据《王则》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4klr3b2GYWPNYBnyl6CKh5
          claim_id: c_KTJdR-XP0fMuAWwGPO2-eM
          source_id: s_mvN6QQWVstm1sJiPjdE6yC
          stance: supports
          locator: Q10412584
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mvN6QQWVstm1sJiPjdE6yC
            source_type: api_record
            title: 维基数据：王则（Q10412584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412584
            external_identifier: Q10412584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:41.666Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MV8jA1VxT7Uco1heqnJV2J
        subject_person_id: p_pFdE3Ri9cY9Lj5eArXaZy5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1048年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1048-01-01
            latest: 1048-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8hpDVEgM5m59t8D5BSFy4Y
          claim_id: c_MV8jA1VxT7Uco1heqnJV2J
          source_id: s_mvN6QQWVstm1sJiPjdE6yC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XAPmxet3k67fafFbr5qfdL
        subject_person_id: p_pFdE3Ri9cY9Lj5eArXaZy5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王则
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HBgpwNVinyzNfAXQR4bs5A
          claim_id: c_XAPmxet3k67fafFbr5qfdL
          source_id: s_mvN6QQWVstm1sJiPjdE6yC
          stance: supports
          locator: Q10412584
          quotation: null
          interpretation_note: null
          source:
            id: s_mvN6QQWVstm1sJiPjdE6yC
            source_type: api_record
            title: 维基数据：王则（Q10412584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412584
            external_identifier: Q10412584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:41.666Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王则

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王则（卒于1048年），史料所见人物。本项目依据《王则》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1048年 | accepted |
| name.primary | 王则 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王则（Q10412584）](https://www.wikidata.org/wiki/Q10412584)
