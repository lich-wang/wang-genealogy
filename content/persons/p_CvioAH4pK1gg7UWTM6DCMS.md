---
schema: wang-person/v1
id: p_CvioAH4pK1gg7UWTM6DCMS
status: active
merged_into: null
display_name: 王珪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nh3DbFWNVrXfimVBa2bWo
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wUZfCwkzgCPe4niFwgzUnb
          claim_id: c_8nh3DbFWNVrXfimVBa2bWo
          source_id: s_n3ymfZH77pu6t1VuF2KQbC
          stance: supports
          locator: CBDB:198426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198426）
          source: &a1
            id: s_n3ymfZH77pu6t1VuF2KQbC
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 198426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198426&o=json
            external_identifier: CBDB:198426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jWyKuzR72LzhTng7YrgN4L
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4SYV4C3fg5HhJ9Lqz3unJk
          claim_id: c_jWyKuzR72LzhTng7YrgN4L
          source_id: s_n3ymfZH77pu6t1VuF2KQbC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cMonBHc8zbjDagk4QF5HCQ
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
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
        - id: cs_tbWtMtCdN28sYmzAZV15Qt
          claim_id: c_cMonBHc8zbjDagk4QF5HCQ
          source_id: s_n3ymfZH77pu6t1VuF2KQbC
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

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 198426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198426&o=json)
