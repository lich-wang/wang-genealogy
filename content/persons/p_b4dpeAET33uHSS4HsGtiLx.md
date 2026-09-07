---
schema: wang-person/v1
id: p_b4dpeAET33uHSS4HsGtiLx
status: active
merged_into: null
display_name: 王九龄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bstbkKZX8kb0_OuQ0WH6dT
        subject_person_id: p_b4dpeAET33uHSS4HsGtiLx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九龄（卒于1709年），史料所见人物。本项目依据《王九龄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xuynRhF8xP1IHn5tYnNEXc
          claim_id: c_bstbkKZX8kb0_OuQ0WH6dT
          source_id: s_Df3VZzosecHfJQeRriV58J
          stance: supports
          locator: Q16077441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Df3VZzosecHfJQeRriV58J
            source_type: api_record
            title: 维基数据：王九龄（Q16077441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077441
            external_identifier: Q16077441
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:00.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5UT6LwU4WMEvNpzQbjt7B1
        subject_person_id: p_b4dpeAET33uHSS4HsGtiLx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1709-01-01
            latest: 1709-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qvw3AanjHmhuhA85DG3oXf
          claim_id: c_5UT6LwU4WMEvNpzQbjt7B1
          source_id: s_Df3VZzosecHfJQeRriV58J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Df3VZzosecHfJQeRriV58J
            source_type: api_record
            title: 维基数据：王九龄（Q16077441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077441
            external_identifier: Q16077441
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:00.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5hD5UHv8mgfb1LZ2VLJSdr
        subject_person_id: p_b4dpeAET33uHSS4HsGtiLx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_45uZgD2SchQu65U1NWNr79
          claim_id: c_5hD5UHv8mgfb1LZ2VLJSdr
          source_id: s_Df3VZzosecHfJQeRriV58J
          stance: supports
          locator: Q16077441
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3eBfJQtc5rgKnfPhEBNJha
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_b4dpeAET33uHSS4HsGtiLx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BiVZ3tmqQ6B4PshDU22fCi
          claim_id: c_3eBfJQtc5rgKnfPhEBNJha
          source_id: s_Df3VZzosecHfJQeRriV58J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Df3VZzosecHfJQeRriV58J
            source_type: api_record
            title: 维基数据：王九龄（Q16077441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077441
            external_identifier: Q16077441
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:00.361Z
            metadata_json: null
        - id: cs_xY69FhFynYAGnvN8z7w59d
          claim_id: c_3eBfJQtc5rgKnfPhEBNJha
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
      object_person:
        id: p_T3HfvKJwe8oNYNwYQCppo7
        status: active
        display_name: 王广心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九龄（卒于1709年），史料所见人物。本项目依据《王九龄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1709年 | accepted |
| name.primary | 王九龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T3HfvKJwe8oNYNwYQCppo7 | 王广心 | accepted |

## 外部来源

- [维基数据：王广心（Q16077638）](https://www.wikidata.org/wiki/Q16077638)
- [维基数据：王九龄（Q16077441）](https://www.wikidata.org/wiki/Q16077441)
