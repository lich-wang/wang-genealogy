---
schema: wang-person/v1
id: p_mF6Dshcwxuncw4Poox7gWm
status: active
merged_into: null
display_name: 王澧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fn987LF3C2U7yqLiPJTcrb
        subject_person_id: p_mF6Dshcwxuncw4Poox7gWm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3x3YDdVXheumqFUazoxEuh
          claim_id: c_Fn987LF3C2U7yqLiPJTcrb
          source_id: s_fVYY1M1BqLfNuQrw1K6BL9
          stance: supports
          locator: CBDB:68604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68604）
          source: &a1
            id: s_fVYY1M1BqLfNuQrw1K6BL9
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 68604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68604&o=json
            external_identifier: CBDB:68604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y8EHGtQBe3WxGEPQUk1yLF
        subject_person_id: p_mF6Dshcwxuncw4Poox7gWm
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
        - id: cs_c2LNBi9aFEok4wsNEEd2Dr
          claim_id: c_y8EHGtQBe3WxGEPQUk1yLF
          source_id: s_fVYY1M1BqLfNuQrw1K6BL9
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

# 王澧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澧（CBDB 68604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68604&o=json)
