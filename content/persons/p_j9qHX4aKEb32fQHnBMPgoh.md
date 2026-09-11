---
schema: wang-person/v1
id: p_j9qHX4aKEb32fQHnBMPgoh
status: active
merged_into: null
display_name: 王濟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t3PK73zX5fNpfhWJi8unf9
        subject_person_id: p_j9qHX4aKEb32fQHnBMPgoh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C6ozxPLAjzYD45jEbmhPHy
          claim_id: c_t3PK73zX5fNpfhWJi8unf9
          source_id: s_qKeuKt2iBDBrP8rzop94Ex
          stance: supports
          locator: CBDB:10723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10723）
          source: &a1
            id: s_qKeuKt2iBDBrP8rzop94Ex
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 10723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10723&o=json
            external_identifier: CBDB:10723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmvwAWniW7YrJzTEVMBfHf
        subject_person_id: p_j9qHX4aKEb32fQHnBMPgoh
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
        - id: cs_7MP4qXuLGTi4yCzg1qAPwb
          claim_id: c_LmvwAWniW7YrJzTEVMBfHf
          source_id: s_qKeuKt2iBDBrP8rzop94Ex
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
        id: c_fxk--1ACHmRxG7vdvu68e-
        subject_person_id: p_kDSCbFbfBMQKBJLyjdUjQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j9qHX4aKEb32fQHnBMPgoh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mtxjItJ4dEnYpRRsD8v-Pe
          claim_id: c_fxk--1ACHmRxG7vdvu68e-
          source_id: s_qKeuKt2iBDBrP8rzop94Ex
          stance: supports
          locator: CBDB 双向互证（父 王衛道 ⇄ 子 王濟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kDSCbFbfBMQKBJLyjdUjQ9
        status: active
        display_name: 王衛道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4sJ1KgPSpd6ixDrsJFhZh8
        subject_person_id: p_j9qHX4aKEb32fQHnBMPgoh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CStSncMJtJZRZHmAw3DK6e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2fxhP0NQr_JYnYVF_H_f3
          claim_id: c_4sJ1KgPSpd6ixDrsJFhZh8
          source_id: s_X2S7nxMMRainh3bcTIue4L
          stance: supports
          locator: CBDB 双向互证（妻子 葉氏(葉由庚女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X2S7nxMMRainh3bcTIue4L
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(葉由庚女)（CBDB 386581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386581&o=json
            external_identifier: CBDB:386581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CStSncMJtJZRZHmAw3DK6e
        status: active
        display_name: 葉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kDSCbFbfBMQKBJLyjdUjQ9 | 王衛道 | accepted |
| spouses | p_CStSncMJtJZRZHmAw3DK6e | 葉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 10723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10723&o=json)
- [中国历代人物传记资料库：葉氏(葉由庚女)（CBDB 386581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386581&o=json)
