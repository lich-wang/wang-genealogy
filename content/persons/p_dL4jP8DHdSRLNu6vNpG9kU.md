---
schema: wang-person/v1
id: p_dL4jP8DHdSRLNu6vNpG9kU
status: active
merged_into: null
display_name: 張本嘉
revision: 1
cbdb_id: 119189
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V1cPwk2ijaHs7f3S6S7j-t
        subject_person_id: p_dL4jP8DHdSRLNu6vNpG9kU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張本嘉，史料所见人物。本项目依据《中国历代人物传记资料库：張本嘉（CBDB 119189）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_40sG86KNfdWsfmkUf_eN4X
          claim_id: c_V1cPwk2ijaHs7f3S6S7j-t
          source_id: s_gwwBliT1yvHavKpi8-oSK4
          stance: supports
          locator: CBDB:119189
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gwwBliT1yvHavKpi8-oSK4
            source_type: api_record
            title: 中国历代人物传记资料库：張本嘉（CBDB 119189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119189&o=json
            external_identifier: CBDB:119189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_02qvExLdsJJZCImPjtFUaF
        subject_person_id: p_dL4jP8DHdSRLNu6vNpG9kU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張本嘉
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k7ZuqwzaGnpGlvtLAh56CB
          claim_id: c_02qvExLdsJJZCImPjtFUaF
          source_id: s_gwwBliT1yvHavKpi8-oSK4
          stance: supports
          locator: CBDB:119189
          quotation: null
          interpretation_note: CBDB 明确记录的王鳳嫻配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9oJd9m8cQk7A4LmwC3qXag
        subject_person_id: p_dL4jP8DHdSRLNu6vNpG9kU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_18fFnjtnGXtoq2dgN1ume2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1a0LRGhBVxCK9WzUWkrns
          claim_id: c_9oJd9m8cQk7A4LmwC3qXag
          source_id: s_gwwBliT1yvHavKpi8-oSK4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3313：妻子"
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_18fFnjtnGXtoq2dgN1ume2
        status: active
        display_name: 王鳳嫻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張本嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張本嘉，史料所见人物。本项目依据《中国历代人物传记资料库：張本嘉（CBDB 119189）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張本嘉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_18fFnjtnGXtoq2dgN1ume2 | 王鳳嫻 | accepted |

## 外部来源

- [中国历代人物传记资料库：張本嘉（CBDB 119189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119189&o=json)
