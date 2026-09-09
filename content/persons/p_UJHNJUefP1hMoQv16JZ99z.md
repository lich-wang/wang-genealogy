---
schema: wang-person/v1
id: p_UJHNJUefP1hMoQv16JZ99z
status: active
merged_into: null
display_name: 王師愈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARwmw9BZEAVbFXHjCNaZ5Y
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師愈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UgWN2Kk3nuveZeb3V1PYbA
          claim_id: c_ARwmw9BZEAVbFXHjCNaZ5Y
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
          stance: supports
          locator: CBDB:10702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10702）
          source: &a1
            id: s_LypwDE4h1BkpQGFHZNCbHw
            source_type: api_record
            title: 中国历代人物传记资料库：王師愈（CBDB 10702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10702&o=json
            external_identifier: CBDB:10702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eR6JNgibsZ8SCSbDrrQ1Cs
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1122年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31HGebBNcwPie9WrsUcRdk
          claim_id: c_eR6JNgibsZ8SCSbDrrQ1Cs
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_i5eP6d8joZdjP3g6VjGQLA
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1190年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pHD1dop2MYg3qKwW45iV5J
          claim_id: c_i5eP6d8joZdjP3g6VjGQLA
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cGn9vdgDGuPEFJGMkdg7L
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_itW882ANSuee4rEsonWFxM
          claim_id: c_1cGn9vdgDGuPEFJGMkdg7L
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
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

# 王師愈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師愈 | accepted |
| birth.date | 1122年 | accepted |
| death.date | 1190年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師愈（CBDB 10702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10702&o=json)
