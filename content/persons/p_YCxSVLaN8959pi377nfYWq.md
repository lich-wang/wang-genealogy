---
schema: wang-person/v1
id: p_YCxSVLaN8959pi377nfYWq
status: active
merged_into: null
display_name: 王崇炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FgR6bzmneraaMD7sEA2jfA
        subject_person_id: p_YCxSVLaN8959pi377nfYWq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79v8j7PZXb1jramKuiB6mt
          claim_id: c_FgR6bzmneraaMD7sEA2jfA
          source_id: s_7Wy4EPLxi9hWjkGiWeBryL
          stance: supports
          locator: CBDB:54549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54549）
          source: &a1
            id: s_7Wy4EPLxi9hWjkGiWeBryL
            source_type: api_record
            title: 中国历代人物传记资料库：王崇炳（CBDB 54549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54549&o=json
            external_identifier: CBDB:54549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zLGcBA9gKu1ur4o2iTRp7P
        subject_person_id: p_YCxSVLaN8959pi377nfYWq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bc4nB2BGLcmdWMS3hsYuWi
          claim_id: c_zLGcBA9gKu1ur4o2iTRp7P
          source_id: s_7Wy4EPLxi9hWjkGiWeBryL
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
        id: c_jcQyB6q6P4R4JQK67H4vN7
        subject_person_id: p_YCxSVLaN8959pi377nfYWq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1739年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kprYYqPnCb38v7QZfMpitj
          claim_id: c_jcQyB6q6P4R4JQK67H4vN7
          source_id: s_7Wy4EPLxi9hWjkGiWeBryL
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
        id: c_c4FVFnVdHZ2Fy7LNMG4HNP
        subject_person_id: p_YCxSVLaN8959pi377nfYWq
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
        - id: cs_TAes15FAXKAfLP8paDp8ko
          claim_id: c_c4FVFnVdHZ2Fy7LNMG4HNP
          source_id: s_7Wy4EPLxi9hWjkGiWeBryL
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

# 王崇炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇炳 | accepted |
| birth.date | 1653年 | accepted |
| death.date | 1739年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇炳（CBDB 54549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54549&o=json)
