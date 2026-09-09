---
schema: wang-person/v1
id: p_f8i9p9JzFPTMv3CWRTDLAz
status: active
merged_into: null
display_name: 王鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U7ZXS3Av3kXf6hoH3HspPi
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SerhEwMXPZwmtQbvU6iQbD
          claim_id: c_U7ZXS3Av3kXf6hoH3HspPi
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: CBDB:126900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126900）
          source: &a1
            id: s_jzgtJjtpFDj5d79TQgELye
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 126900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json
            external_identifier: CBDB:126900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2Bg3c7hMoK77zuG9zDebUp
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vtLjM6Pm2K7KiXXrNkfHeB
          claim_id: c_2Bg3c7hMoK77zuG9zDebUp
          source_id: s_jzgtJjtpFDj5d79TQgELye
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
        id: c_orTZ612uG9bhpPXyQx1QQx
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1522年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxbSng4DGCVLJ1RN3g6WQL
          claim_id: c_orTZ612uG9bhpPXyQx1QQx
          source_id: s_jzgtJjtpFDj5d79TQgELye
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
        id: c_s8fapdrqmYQHHL6gRZHJbN
        subject_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
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
        - id: cs_wL6t2zseZo4VFYmi8hcHZr
          claim_id: c_s8fapdrqmYQHHL6gRZHJbN
          source_id: s_jzgtJjtpFDj5d79TQgELye
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

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| birth.date | 1469年 | accepted |
| death.date | 1522年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 126900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json)
