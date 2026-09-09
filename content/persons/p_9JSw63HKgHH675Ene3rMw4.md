---
schema: wang-person/v1
id: p_9JSw63HKgHH675Ene3rMw4
status: active
merged_into: null
display_name: 王羽仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B1ST4ik7F9ZdJXaVu4i8aJ
        subject_person_id: p_9JSw63HKgHH675Ene3rMw4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Lt94uE2VjH9jSLTXJ2KdM
          claim_id: c_B1ST4ik7F9ZdJXaVu4i8aJ
          source_id: s_UWu6t8SuGqt28Bgtt2LDh6
          stance: supports
          locator: CBDB:568706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568706）
          source: &a1
            id: s_UWu6t8SuGqt28Bgtt2LDh6
            source_type: api_record
            title: 中国历代人物传记资料库：王羽仙（CBDB 568706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568706&o=json
            external_identifier: CBDB:568706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XgmigFyb7vySLGBhU5FfPU
        subject_person_id: p_9JSw63HKgHH675Ene3rMw4
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
        - id: cs_qfP7ybM2D9EifXW3dN1MET
          claim_id: c_XgmigFyb7vySLGBhU5FfPU
          source_id: s_UWu6t8SuGqt28Bgtt2LDh6
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

# 王羽仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羽仙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羽仙（CBDB 568706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568706&o=json)
