---
schema: wang-person/v1
id: p_utBhWPt4u7TMc4j2NqE3E1
status: active
merged_into: null
display_name: 王瀾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TMRcBoohnizej1zCxHqMMB
        subject_person_id: p_utBhWPt4u7TMc4j2NqE3E1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5bLSvK6ANDgM24yUeG4ZKi
          claim_id: c_TMRcBoohnizej1zCxHqMMB
          source_id: s_fMdX88LteANPomtmJoU8Fa
          stance: supports
          locator: CBDB:134185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134185）
          source: &a1
            id: s_fMdX88LteANPomtmJoU8Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 134185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134185&o=json
            external_identifier: CBDB:134185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nCj3khuLXwNrNuUQKCYK7T
        subject_person_id: p_utBhWPt4u7TMc4j2NqE3E1
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
        - id: cs_cK7VdAvEGapA9KwAbJZEdF
          claim_id: c_nCj3khuLXwNrNuUQKCYK7T
          source_id: s_fMdX88LteANPomtmJoU8Fa
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
  ancestors:
    - claim:
        id: c_d4RjXxs7Mi6QCWaJfqCwTy
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_utBhWPt4u7TMc4j2NqE3E1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPWKKY0J9pZ-dA_af_XQ5u
          claim_id: c_d4RjXxs7Mi6QCWaJfqCwTy
          source_id: s_fMdX88LteANPomtmJoU8Fa
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瀾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀾（CBDB 134185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134185&o=json)
