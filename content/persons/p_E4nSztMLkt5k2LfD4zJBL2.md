---
schema: wang-person/v1
id: p_E4nSztMLkt5k2LfD4zJBL2
status: active
merged_into: null
display_name: 王恂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GiCZ4gLWH4GGycBv57RFVZ
        subject_person_id: p_E4nSztMLkt5k2LfD4zJBL2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Aj9G3B8LkD7Q2WADnJ8Aue
          claim_id: c_GiCZ4gLWH4GGycBv57RFVZ
          source_id: s_ds9qzoWazCUJZ69x4G4rid
          stance: supports
          locator: CBDB:71140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71140）
          source: &a1
            id: s_ds9qzoWazCUJZ69x4G4rid
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 71140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71140&o=json
            external_identifier: CBDB:71140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gmq4a6E5VijLkDBL7PqSMy
        subject_person_id: p_E4nSztMLkt5k2LfD4zJBL2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4PqtHnEooM74BkBu2EAe5m
          claim_id: c_Gmq4a6E5VijLkDBL7PqSMy
          source_id: s_ds9qzoWazCUJZ69x4G4rid
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
        id: c_neD3pJL6rPR8ZA84DShdLp
        subject_person_id: p_E4nSztMLkt5k2LfD4zJBL2
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
        - id: cs_65x7zNk9bN9VGS2hjcx8hu
          claim_id: c_neD3pJL6rPR8ZA84DShdLp
          source_id: s_ds9qzoWazCUJZ69x4G4rid
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

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| birth.date | 1798年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 71140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71140&o=json)
