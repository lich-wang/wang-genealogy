---
schema: wang-person/v1
id: p_Sg53WUKhnNZ8wmG4C91JHS
status: active
merged_into: null
display_name: 王達中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ts23ALyA1K2Qjd3GzLgTuG
        subject_person_id: p_Sg53WUKhnNZ8wmG4C91JHS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rE5CQ1Mc2ei1RK35LJVN9L
          claim_id: c_ts23ALyA1K2Qjd3GzLgTuG
          source_id: s_pM6XJGWugSS6h9FUsqFEZk
          stance: supports
          locator: CBDB:640428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640428）
          source: &a1
            id: s_pM6XJGWugSS6h9FUsqFEZk
            source_type: api_record
            title: 中国历代人物传记资料库：王達中（CBDB 640428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640428&o=json
            external_identifier: CBDB:640428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XB234MBRhBq7ck3h2fcj32
        subject_person_id: p_Sg53WUKhnNZ8wmG4C91JHS
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
        - id: cs_gJZz79juBKysEY6BfRuyCV
          claim_id: c_XB234MBRhBq7ck3h2fcj32
          source_id: s_pM6XJGWugSS6h9FUsqFEZk
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

# 王達中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達中 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達中（CBDB 640428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640428&o=json)
