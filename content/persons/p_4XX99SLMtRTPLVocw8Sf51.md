---
schema: wang-person/v1
id: p_4XX99SLMtRTPLVocw8Sf51
status: active
merged_into: null
display_name: 王紘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SeZ7JyvQ1VYoS7QqfURjZ7
        subject_person_id: p_4XX99SLMtRTPLVocw8Sf51
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P9ad8oV8HQg42sC12cJNTf
          claim_id: c_SeZ7JyvQ1VYoS7QqfURjZ7
          source_id: s_m9o1JNqRxDZAu4E276BJjL
          stance: supports
          locator: CBDB:231805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231805）
          source: &a1
            id: s_m9o1JNqRxDZAu4E276BJjL
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 231805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231805&o=json
            external_identifier: CBDB:231805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WBcdCRSBvYx7GFrh3Y9FJ8
        subject_person_id: p_4XX99SLMtRTPLVocw8Sf51
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘，史料所见人物。本项目依据《中国历代人物传记资料库：王紘（CBDB 231805）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hex8tlzP3NJBWc0_QpcJfh
          claim_id: c_WBcdCRSBvYx7GFrh3Y9FJ8
          source_id: s_m9o1JNqRxDZAu4E276BJjL
          stance: supports
          locator: CBDB:231805
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iFD7eo344iemRLQl3TUs6k
        subject_person_id: p_4XX99SLMtRTPLVocw8Sf51
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLdF5UcaR98Rj51619NfpN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IdRATzdY7VjDpL53VdAK8u
          claim_id: c_iFD7eo344iemRLQl3TUs6k
          source_id: s_m9o1JNqRxDZAu4E276BJjL
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CLdF5UcaR98Rj51619NfpN
        status: active
        display_name: 王一之
        merged_into_person_id: null
  other: []
---

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紘 | accepted |
| bio.summary | 王紘，史料所见人物。本项目依据《中国历代人物传记资料库：王紘（CBDB 231805）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CLdF5UcaR98Rj51619NfpN | 王一之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 231805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231805&o=json)
