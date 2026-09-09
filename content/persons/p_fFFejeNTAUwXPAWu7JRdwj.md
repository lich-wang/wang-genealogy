---
schema: wang-person/v1
id: p_fFFejeNTAUwXPAWu7JRdwj
status: active
merged_into: null
display_name: 王龍光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGh2qQPjZP69CeEnC5gSHy
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UWQAGv4C9Xw2ZG4RGCUWNt
          claim_id: c_UGh2qQPjZP69CeEnC5gSHy
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: CBDB:69470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69470）
          source: &a1
            id: s_3G8X5aZSgEtsKYhYueEct5
            source_type: api_record
            title: 中国历代人物传记资料库：王龍光（CBDB 69470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json
            external_identifier: CBDB:69470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Kb3mNnXNpHrSAADC61R6MA
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBGMy7qz2gaXa2o3ZBajhL
          claim_id: c_Kb3mNnXNpHrSAADC61R6MA
          source_id: s_3G8X5aZSgEtsKYhYueEct5
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
        id: c_wF9ZC64331K4L8CUAFRMq6
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
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
        - id: cs_pvMmgRrH14gTDWxWqDetdj
          claim_id: c_wF9ZC64331K4L8CUAFRMq6
          source_id: s_3G8X5aZSgEtsKYhYueEct5
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

# 王龍光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍光 | accepted |
| death.date | 1676年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龍光（CBDB 69470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json)
