---
schema: wang-person/v1
id: p_Sh69aXs7HiwFLtLLZ97tgt
status: active
merged_into: null
display_name: 王允之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Bi6Wsk6c4S2J8XkDBr9NZ
        subject_person_id: p_Sh69aXs7HiwFLtLLZ97tgt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Vp56zgVQXmMk5ww1yT6pN
          claim_id: c_6Bi6Wsk6c4S2J8XkDBr9NZ
          source_id: s_HTKhur6w3ABqmbe11DVCtY
          stance: supports
          locator: CBDB:413890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413890）
          source: &a1
            id: s_HTKhur6w3ABqmbe11DVCtY
            source_type: api_record
            title: 中国历代人物传记资料库：王允之（CBDB 413890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413890&o=json
            external_identifier: CBDB:413890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ooUzbFjCLSZscLFpH17dSx
        subject_person_id: p_Sh69aXs7HiwFLtLLZ97tgt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6sUcJ8HN1LT42njmWHby4e
          claim_id: c_ooUzbFjCLSZscLFpH17dSx
          source_id: s_HTKhur6w3ABqmbe11DVCtY
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

# 王允之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允之 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允之（CBDB 413890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413890&o=json)
