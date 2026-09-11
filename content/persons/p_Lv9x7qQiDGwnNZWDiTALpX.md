---
schema: wang-person/v1
id: p_Lv9x7qQiDGwnNZWDiTALpX
status: active
merged_into: null
display_name: 王景
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i6p4m65bPHzo28xi8C6i9F
        subject_person_id: p_Lv9x7qQiDGwnNZWDiTALpX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4D2BAidRpHHnAkJ4F8sptX
          claim_id: c_i6p4m65bPHzo28xi8C6i9F
          source_id: s_a846rEtGKe6rzqJ2QgU7Cx
          stance: supports
          locator: CBDB:71214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71214）
          source: &a1
            id: s_a846rEtGKe6rzqJ2QgU7Cx
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 71214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71214&o=json
            external_identifier: CBDB:71214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KJxjETGkjFao4dF5LwaHU1
        subject_person_id: p_Lv9x7qQiDGwnNZWDiTALpX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqSqqACeS1mDHg5CJGJkwP
          claim_id: c_KJxjETGkjFao4dF5LwaHU1
          source_id: s_a846rEtGKe6rzqJ2QgU7Cx
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
        id: c_4667yY5j53FBFeQdAZiqV3
        subject_person_id: p_Lv9x7qQiDGwnNZWDiTALpX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEVaofjJ9tW7Ee5EJBQ9XA
          claim_id: c_4667yY5j53FBFeQdAZiqV3
          source_id: s_a846rEtGKe6rzqJ2QgU7Cx
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
        id: c_KPTcc5QDee4o58Am9Ct6LT
        subject_person_id: p_Lv9x7qQiDGwnNZWDiTALpX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景（1851年—1893年），清人物。籍贯侯官。（中国历代人物传记资料库 CBDB 71214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3xz-Srj8-3i8E_pEoX7w1V
          claim_id: c_KPTcc5QDee4o58Am9Ct6LT
          source_id: s_a846rEtGKe6rzqJ2QgU7Cx
          stance: supports
          locator: CBDB:71214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| birth.date | 1851年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | 王景（1851年—1893年），清人物。籍贯侯官。（中国历代人物传记资料库 CBDB 71214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 71214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71214&o=json)
