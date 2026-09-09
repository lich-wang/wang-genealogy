---
schema: wang-person/v1
id: p_RdL2SeAhidtjeQByUmVXXg
status: active
merged_into: null
display_name: 王伯顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E6XFdf7fuJxUpkWrx1MsJx
        subject_person_id: p_RdL2SeAhidtjeQByUmVXXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5F2CX2a93vfL1q6iQKE8Hw
          claim_id: c_E6XFdf7fuJxUpkWrx1MsJx
          source_id: s_FyhKkBrdpjJFA7pjmG5mJy
          stance: supports
          locator: CBDB:101187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101187）
          source: &a1
            id: s_FyhKkBrdpjJFA7pjmG5mJy
            source_type: api_record
            title: 中国历代人物传记资料库：王伯顏（CBDB 101187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101187&o=json
            external_identifier: CBDB:101187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4Ah1aTATUJ4C2DEpKMutAh
        subject_person_id: p_RdL2SeAhidtjeQByUmVXXg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1283年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9GZLWBbwfY5PQjNNhQwJ3f
          claim_id: c_4Ah1aTATUJ4C2DEpKMutAh
          source_id: s_FyhKkBrdpjJFA7pjmG5mJy
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
        id: c_hKBYEaMchKC1iyJXUvhwX4
        subject_person_id: p_RdL2SeAhidtjeQByUmVXXg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1352年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Byhe7MzRa7coy834J16Va1
          claim_id: c_hKBYEaMchKC1iyJXUvhwX4
          source_id: s_FyhKkBrdpjJFA7pjmG5mJy
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
        id: c_L7ankX9nGRJTTrriHQQ9Dy
        subject_person_id: p_RdL2SeAhidtjeQByUmVXXg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dzACaXPhjrbncamDVhUyYb
          claim_id: c_L7ankX9nGRJTTrriHQQ9Dy
          source_id: s_FyhKkBrdpjJFA7pjmG5mJy
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

# 王伯顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯顏 | accepted |
| birth.date | 1283年 | accepted |
| death.date | 1352年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯顏（CBDB 101187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101187&o=json)
