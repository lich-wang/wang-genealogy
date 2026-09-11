---
schema: wang-person/v1
id: p_79hPf6iStJboBnBafhPxjH
status: active
merged_into: null
display_name: 王廷節
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t7PMEs1j629GSay6SGH65W
        subject_person_id: p_79hPf6iStJboBnBafhPxjH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NDMZai1qPSRD5AN23GMK2W
          claim_id: c_t7PMEs1j629GSay6SGH65W
          source_id: s_XujjLmFUxRsao6imGnAoUM
          stance: supports
          locator: CBDB:26289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26289）
          source: &a1
            id: s_XujjLmFUxRsao6imGnAoUM
            source_type: api_record
            title: 中国历代人物传记资料库：王廷節（CBDB 26289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26289&o=json
            external_identifier: CBDB:26289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ns2RH5YZxWDL4UxpTL9Chg
        subject_person_id: p_79hPf6iStJboBnBafhPxjH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVJ6imZ3zUardkfLHAwGoN
          claim_id: c_Ns2RH5YZxWDL4UxpTL9Chg
          source_id: s_XujjLmFUxRsao6imGnAoUM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6rV7hvJoKvExAm9niIQ6up
        subject_person_id: p_oxN9kPvZoLGr9MupRFHe59
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_79hPf6iStJboBnBafhPxjH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gb-Cr2gdEbF6nrksny-HqV
          claim_id: c_6rV7hvJoKvExAm9niIQ6up
          source_id: s_XujjLmFUxRsao6imGnAoUM
          stance: supports
          locator: CBDB 双向互证（父 王延嗣 ⇄ 子 王廷節）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_oxN9kPvZoLGr9MupRFHe59
        status: active
        display_name: 王延嗣
        merged_into_person_id: null
  children:
    - claim:
        id: c_BywL6jKRSiwWYO9d0zUhon
        subject_person_id: p_79hPf6iStJboBnBafhPxjH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4RB9bsWrECbVN4w92WDv5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zo-QCzHvaTMglMeHe72ZUi
          claim_id: c_BywL6jKRSiwWYO9d0zUhon
          source_id: s_XujjLmFUxRsao6imGnAoUM
          stance: supports
          locator: CBDB 双向互证（子 王元祐 ⇄ 父 王廷節）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_C4RB9bsWrECbVN4w92WDv5
        status: active
        display_name: 王元祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷節 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oxN9kPvZoLGr9MupRFHe59 | 王延嗣 | accepted |
| children | p_C4RB9bsWrECbVN4w92WDv5 | 王元祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷節（CBDB 26289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26289&o=json)
