---
schema: wang-person/v1
id: p_xo7hTR9H4WNNw9Qd7U3FCQ
status: active
merged_into: null
display_name: 王廷機
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_26LNp24z24t5aUFFaMAaEQ
        subject_person_id: p_xo7hTR9H4WNNw9Qd7U3FCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PWurnFvfbFjPYGW6wAQxJz
          claim_id: c_26LNp24z24t5aUFFaMAaEQ
          source_id: s_TwahVs2sEi7NJpNSPBuPqp
          stance: supports
          locator: CBDB:16690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16690）
          source: &a1
            id: s_TwahVs2sEi7NJpNSPBuPqp
            source_type: api_record
            title: 中国历代人物传记资料库：王廷機（CBDB 16690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16690&o=json
            external_identifier: CBDB:16690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1SrvdskBAuF1GtrV6BRJor
        subject_person_id: p_xo7hTR9H4WNNw9Qd7U3FCQ
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
        - id: cs_Va7Q7EXnM1eGQ2HHq3iHZ6
          claim_id: c_1SrvdskBAuF1GtrV6BRJor
          source_id: s_TwahVs2sEi7NJpNSPBuPqp
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
        id: c_XvZPdKh5ZuL2O9SWE_EXFA
        subject_person_id: p_xo7hTR9H4WNNw9Qd7U3FCQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RRsdpNBt4C7vWYviTZiLTp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAp0bV8b6T1UsORp1HU2_s
          claim_id: c_XvZPdKh5ZuL2O9SWE_EXFA
          source_id: s_egPJ28HN64hGVZjUa8HFzc
          stance: supports
          locator: CBDB 双向互证（父 王廷機 ⇄ 子 王橐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_egPJ28HN64hGVZjUa8HFzc
            source_type: api_record
            title: 中国历代人物传记资料库：王橐（CBDB 16691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16691&o=json
            external_identifier: CBDB:16691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RRsdpNBt4C7vWYviTZiLTp
        status: active
        display_name: 王橐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷機 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RRsdpNBt4C7vWYviTZiLTp | 王橐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷機（CBDB 16690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16690&o=json)
- [中国历代人物传记资料库：王橐（CBDB 16691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16691&o=json)
