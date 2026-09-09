---
schema: wang-person/v1
id: p_zSLqqHYvkJEVtt5tHw1LCe
status: active
merged_into: null
display_name: 王滌源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xxAGLy8Ts5gPVmV3gYEg1
        subject_person_id: p_zSLqqHYvkJEVtt5tHw1LCe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滌源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FHHQVbGDhoU2oG5UAga8gh
          claim_id: c_8xxAGLy8Ts5gPVmV3gYEg1
          source_id: s_Jc8JKrUQW3AWj6YsMHMxPc
          stance: supports
          locator: CBDB:576097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576097）
          source: &a1
            id: s_Jc8JKrUQW3AWj6YsMHMxPc
            source_type: api_record
            title: 中国历代人物传记资料库：王滌源（CBDB 576097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576097&o=json
            external_identifier: CBDB:576097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m4KH64V4MvyUeEtKgkgvLf
        subject_person_id: p_zSLqqHYvkJEVtt5tHw1LCe
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
        - id: cs_LV67sxL669R3pPw88Yxru1
          claim_id: c_m4KH64V4MvyUeEtKgkgvLf
          source_id: s_Jc8JKrUQW3AWj6YsMHMxPc
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

# 王滌源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滌源 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滌源（CBDB 576097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576097&o=json)
