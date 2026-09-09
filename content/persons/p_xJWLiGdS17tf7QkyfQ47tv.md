---
schema: wang-person/v1
id: p_xJWLiGdS17tf7QkyfQ47tv
status: active
merged_into: null
display_name: 王隆興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6QVx3ZgFbEyTPuU5NGCqUm
        subject_person_id: p_xJWLiGdS17tf7QkyfQ47tv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gShrNAnFcruKGmTE31RWUM
          claim_id: c_6QVx3ZgFbEyTPuU5NGCqUm
          source_id: s_TTrSAnYF1aUrXYE4o3VXW6
          stance: supports
          locator: CBDB:640777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640777）
          source: &a1
            id: s_TTrSAnYF1aUrXYE4o3VXW6
            source_type: api_record
            title: 中国历代人物传记资料库：王隆興（CBDB 640777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640777&o=json
            external_identifier: CBDB:640777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J2qkVDPsffZVobZeud1pBB
        subject_person_id: p_xJWLiGdS17tf7QkyfQ47tv
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
        - id: cs_8Xfk3SJyL41Bqqm8GupoeY
          claim_id: c_J2qkVDPsffZVobZeud1pBB
          source_id: s_TTrSAnYF1aUrXYE4o3VXW6
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

# 王隆興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆興 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆興（CBDB 640777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640777&o=json)
