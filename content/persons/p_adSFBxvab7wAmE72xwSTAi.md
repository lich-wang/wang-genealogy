---
schema: wang-person/v1
id: p_adSFBxvab7wAmE72xwSTAi
status: active
merged_into: null
display_name: 王珣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tLaw7Uot98ywdGCHNCNCsy
        subject_person_id: p_adSFBxvab7wAmE72xwSTAi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qewbmw1sGKeNZJtZXJbhKV
          claim_id: c_tLaw7Uot98ywdGCHNCNCsy
          source_id: s_KRJDFzK7vuQ6vTDbWQADNr
          stance: supports
          locator: CBDB:22234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22234）
          source: &a1
            id: s_KRJDFzK7vuQ6vTDbWQADNr
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 22234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22234&o=json
            external_identifier: CBDB:22234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VNHBFifTSa9852af6UEXDm
        subject_person_id: p_adSFBxvab7wAmE72xwSTAi
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
        - id: cs_riVknMNKSB5FRZZwykwdrp
          claim_id: c_VNHBFifTSa9852af6UEXDm
          source_id: s_KRJDFzK7vuQ6vTDbWQADNr
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
        id: c_dcKZnDSA9xHfC-dI4ZJKPf
        subject_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_adSFBxvab7wAmE72xwSTAi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQAraB-4ZfBQCssmzZj8F7
          claim_id: c_dcKZnDSA9xHfC-dI4ZJKPf
          source_id: s_KRJDFzK7vuQ6vTDbWQADNr
          stance: supports
          locator: CBDB 双向互证（父 王佐 ⇄ 子 王珣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Z9F95dWykFW9QM2cVE5ek7
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children:
    - claim:
        id: c_pC5hzuZVoPCVQVhbMfs53H
        subject_person_id: p_adSFBxvab7wAmE72xwSTAi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jk4yuys99Qg1_ih_tFOlVi
          claim_id: c_pC5hzuZVoPCVQVhbMfs53H
          source_id: s_KRJDFzK7vuQ6vTDbWQADNr
          stance: supports
          locator: CBDB 双向互证（子 王承業 ⇄ 父 王珣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Tz7BGr7hq8U8gRrDLhMUC6
        status: active
        display_name: 王承業
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z9F95dWykFW9QM2cVE5ek7 | 王佐 | accepted |
| children | p_Tz7BGr7hq8U8gRrDLhMUC6 | 王承業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珣（CBDB 22234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22234&o=json)
