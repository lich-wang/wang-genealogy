---
schema: wang-person/v1
id: p_3juG8zad23EGDynEbaqSWE
status: active
merged_into: null
display_name: 王福順
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n9iKB1Ne324wL8WfMXJFAB
        subject_person_id: p_3juG8zad23EGDynEbaqSWE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VVqq9iubKLc5BBYEjMNKER
          claim_id: c_n9iKB1Ne324wL8WfMXJFAB
          source_id: s_JkKhHdc143didXU83hjLjU
          stance: supports
          locator: CBDB:221883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221883）
          source: &a1
            id: s_JkKhHdc143didXU83hjLjU
            source_type: api_record
            title: 中国历代人物传记资料库：王福順（CBDB 221883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221883&o=json
            external_identifier: CBDB:221883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBuoJeN5XmGnnG7HMT98Pa
        subject_person_id: p_3juG8zad23EGDynEbaqSWE
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
        - id: cs_G1SojQBteoHXJqMsGm3YA2
          claim_id: c_DBuoJeN5XmGnnG7HMT98Pa
          source_id: s_JkKhHdc143didXU83hjLjU
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
        id: c_CkvhYiLcf-e8JfIMobQABJ
        subject_person_id: p_3juG8zad23EGDynEbaqSWE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k23Kjo46Gkm_VtGufJQxwY
          claim_id: c_CkvhYiLcf-e8JfIMobQABJ
          source_id: s_JkKhHdc143didXU83hjLjU
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgcYnzEt3BLPFrXjEUGzEm
        status: active
        display_name: 王玶
        merged_into_person_id: null
  other: []
---

# 王福順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福順 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HgcYnzEt3BLPFrXjEUGzEm | 王玶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福順（CBDB 221883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221883&o=json)
