---
schema: wang-person/v1
id: p_YhJgaKnqPn2giE5SKtH69j
status: active
merged_into: null
display_name: 王游
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kWhEqY5oUMPgSEQN545sh7
        subject_person_id: p_YhJgaKnqPn2giE5SKtH69j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王游
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1iaRh52RTEfbEupF3GTvbF
          claim_id: c_kWhEqY5oUMPgSEQN545sh7
          source_id: s_XRe12eUXUGUDey3nHUz62W
          stance: supports
          locator: CBDB:456943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456943）
          source: &a1
            id: s_XRe12eUXUGUDey3nHUz62W
            source_type: api_record
            title: 中国历代人物传记资料库：王游（CBDB 456943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456943&o=json
            external_identifier: CBDB:456943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_26mMbZ5XL3CRwctN8u1FUu
        subject_person_id: p_YhJgaKnqPn2giE5SKtH69j
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
        - id: cs_o4kcM5KRE7cHxqeFyrGXda
          claim_id: c_26mMbZ5XL3CRwctN8u1FUu
          source_id: s_XRe12eUXUGUDey3nHUz62W
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

# 王游

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王游 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王游（CBDB 456943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456943&o=json)
