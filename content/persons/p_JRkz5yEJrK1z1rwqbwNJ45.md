---
schema: wang-person/v1
id: p_JRkz5yEJrK1z1rwqbwNJ45
status: active
merged_into: null
display_name: 王襲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTXEBwL3siowHiDuRw6h87
        subject_person_id: p_JRkz5yEJrK1z1rwqbwNJ45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VXWrQDXtSBFPb6h7tLW8ou
          claim_id: c_mTXEBwL3siowHiDuRw6h87
          source_id: s_mcJ9A38DPmLXZkLLwHkEUK
          stance: supports
          locator: CBDB:22179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22179）
          source: &a1
            id: s_mcJ9A38DPmLXZkLLwHkEUK
            source_type: api_record
            title: 中国历代人物传记资料库：王襲（CBDB 22179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22179&o=json
            external_identifier: CBDB:22179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6rp5EbeCF7ZEXrN59KzB9
        subject_person_id: p_JRkz5yEJrK1z1rwqbwNJ45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUJERGC9pZZbkL4uBVNFdT
          claim_id: c_x6rp5EbeCF7ZEXrN59KzB9
          source_id: s_mcJ9A38DPmLXZkLLwHkEUK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RXlnoCXIMThC_vKHXxnf48
        subject_person_id: p_JRkz5yEJrK1z1rwqbwNJ45
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NghqnvQpJa8P4vxxEpxjeJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dO9V_19jrMkpdMZSL4xqzr
          claim_id: c_RXlnoCXIMThC_vKHXxnf48
          source_id: s_mcJ9A38DPmLXZkLLwHkEUK
          stance: supports
          locator: CBDB 双向互证（子 王劌 ⇄ 父 王襲）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_NghqnvQpJa8P4vxxEpxjeJ
        status: active
        display_name: 王劌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王襲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王襲 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NghqnvQpJa8P4vxxEpxjeJ | 王劌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王襲（CBDB 22179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22179&o=json)
