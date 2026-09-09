---
schema: wang-person/v1
id: p_pb8NtL1YWr9DRcMwCw8SJz
status: active
merged_into: null
display_name: 王錦棻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAEjLQDfcPWaTQHXwdc5Gt
        subject_person_id: p_pb8NtL1YWr9DRcMwCw8SJz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦棻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TeasNj1jWC6DLRRMHA5ZDL
          claim_id: c_jAEjLQDfcPWaTQHXwdc5Gt
          source_id: s_mRP6xoU5KkYYx7PCh4aLXp
          stance: supports
          locator: CBDB:640582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640582）
          source: &a1
            id: s_mRP6xoU5KkYYx7PCh4aLXp
            source_type: api_record
            title: 中国历代人物传记资料库：王錦棻（CBDB 640582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640582&o=json
            external_identifier: CBDB:640582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B7Lsa8mrWL45Xj4LJ7obnG
        subject_person_id: p_pb8NtL1YWr9DRcMwCw8SJz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gcf9FWcChtkti4tH2ZJeou
          claim_id: c_B7Lsa8mrWL45Xj4LJ7obnG
          source_id: s_mRP6xoU5KkYYx7PCh4aLXp
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
  descendants: []
  other: []
---

# 王錦棻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦棻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦棻（CBDB 640582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640582&o=json)
