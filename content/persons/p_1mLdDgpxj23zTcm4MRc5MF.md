---
schema: wang-person/v1
id: p_1mLdDgpxj23zTcm4MRc5MF
status: active
merged_into: null
display_name: 王永
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w5AJGEMnbppvPMGD6StiWn
        subject_person_id: p_1mLdDgpxj23zTcm4MRc5MF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GHPbczKXZDYPt4GLU7EL8A
          claim_id: c_w5AJGEMnbppvPMGD6StiWn
          source_id: s_76q1MDi3JK9AVkcgLk2HEe
          stance: supports
          locator: CBDB:212064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212064）
          source: &a1
            id: s_76q1MDi3JK9AVkcgLk2HEe
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 212064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212064&o=json
            external_identifier: CBDB:212064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4NzDtpAkK1BPgLV81P3EH
        subject_person_id: p_1mLdDgpxj23zTcm4MRc5MF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Axm4SVZQN95H2dh4C9eUM
          claim_id: c_B4NzDtpAkK1BPgLV81P3EH
          source_id: s_76q1MDi3JK9AVkcgLk2HEe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_Z6LJnh1HYd0JUOVOmjMKmq
        subject_person_id: p_1mLdDgpxj23zTcm4MRc5MF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tB7oKpee_XYWD3y2ZFNc02
          claim_id: c_Z6LJnh1HYd0JUOVOmjMKmq
          source_id: s_76q1MDi3JK9AVkcgLk2HEe
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_txmGNUSLN748iJB41SWQzU
        status: active
        display_name: 王致祥
        merged_into_person_id: null
  other: []
---

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_txmGNUSLN748iJB41SWQzU | 王致祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 212064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212064&o=json)
