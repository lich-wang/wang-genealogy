---
schema: wang-person/v1
id: p_AfLhoGsLbskzeER6Tw4Mw8
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ES9B67qxDgdN2Uw9v71UT
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZC3UXFJQL7GSt2BEBhfu4s
          claim_id: c_1ES9B67qxDgdN2Uw9v71UT
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: CBDB:202119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202119）
          source: &a1
            id: s_yeDS7MthSZ69rfW6mZGg3S
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 202119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json
            external_identifier: CBDB:202119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QRMc8DgXNm5UohTJGsECbf
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cv19VxuFa2d2fXnddKUnvV
          claim_id: c_QRMc8DgXNm5UohTJGsECbf
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
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
        id: c_2ADCZSWGpZL6SdM7SQs9GF
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
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
        - id: cs_8h47hVZfjN1s4F8skmGUkn
          claim_id: c_2ADCZSWGpZL6SdM7SQs9GF
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 202119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json)
