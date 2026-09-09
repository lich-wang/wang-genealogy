---
schema: wang-person/v1
id: p_uGVSEFoBHCVp6d5R5q6qM6
status: active
merged_into: null
display_name: 王道全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M84pGuCPQYf2BKpFFwUUVi
        subject_person_id: p_uGVSEFoBHCVp6d5R5q6qM6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhPrb6T7VSEuXvUybMp7m1
          claim_id: c_M84pGuCPQYf2BKpFFwUUVi
          source_id: s_459Fj9nySACsDstD97wf2y
          stance: supports
          locator: CBDB:640451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640451）
          source: &a1
            id: s_459Fj9nySACsDstD97wf2y
            source_type: api_record
            title: 中国历代人物传记资料库：王道全（CBDB 640451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640451&o=json
            external_identifier: CBDB:640451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPP3Z9N9tF2R71oU1oh9TD
        subject_person_id: p_uGVSEFoBHCVp6d5R5q6qM6
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
        - id: cs_c9MAboAofbFA8pMYEAu94F
          claim_id: c_gPP3Z9N9tF2R71oU1oh9TD
          source_id: s_459Fj9nySACsDstD97wf2y
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

# 王道全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道全 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道全（CBDB 640451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640451&o=json)
