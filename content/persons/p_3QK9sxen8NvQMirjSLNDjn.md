---
schema: wang-person/v1
id: p_3QK9sxen8NvQMirjSLNDjn
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZPA6aH5S4LY3ye9W6utlzw
        subject_person_id: p_3QK9sxen8NvQMirjSLNDjn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QH9ANT9yJIKnBUg4wjlBsE
          claim_id: c_ZPA6aH5S4LY3ye9W6utlzw
          source_id: s_P4M4F7fVre19uAcqF2wxZu
          stance: supports
          locator: Q134097625
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_P4M4F7fVre19uAcqF2wxZu
            source_type: api_record
            title: 维基数据：王氏（Q134097625）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q134097625
            external_identifier: Q134097625
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:01.275Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1pcB2rbNvQD6FTZAbm9inn
        subject_person_id: p_3QK9sxen8NvQMirjSLNDjn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m9imHNeS9JBDKz2bf16hmA
          claim_id: c_1pcB2rbNvQD6FTZAbm9inn
          source_id: s_P4M4F7fVre19uAcqF2wxZu
          stance: supports
          locator: Q134097625
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f2uT2wYs4bMxSapcnHh9Jf
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3QK9sxen8NvQMirjSLNDjn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4ZD86GRmXQL5AvXJxaWzWy
          claim_id: c_f2uT2wYs4bMxSapcnHh9Jf
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T9oFeHgKECyHSzfi1GR4bB
            source_type: api_record
            title: 维基数据：王偃（Q11572909）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572909
            external_identifier: Q11572909
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:27.598Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%81%83
        - id: cs_e8SF4qJ7YwV2DHNE2B6U7Q
          claim_id: c_f2uT2wYs4bMxSapcnHh9Jf
          source_id: s_P4M4F7fVre19uAcqF2wxZu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_P4M4F7fVre19uAcqF2wxZu
            source_type: api_record
            title: 维基数据：王氏（Q134097625）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q134097625
            external_identifier: Q134097625
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:01.275Z
            metadata_json: null
      object_person:
        id: p_zzsFuAEs6JJ4EJkXaf48Mn
        status: active
        display_name: 王偃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |

## 外部来源

- [维基数据：王氏（Q134097625）](https://www.wikidata.org/wiki/Q134097625)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
