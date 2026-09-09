---
schema: wang-person/v1
id: p_6yKTewNViSQGLc37XFPx1S
status: active
merged_into: null
display_name: 王護
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qn9CgA9VvmZWg7yN5k3CKq
        subject_person_id: p_6yKTewNViSQGLc37XFPx1S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VuRdGv75YwtYJLpWhAL3SR
          claim_id: c_qn9CgA9VvmZWg7yN5k3CKq
          source_id: s_x2kjJ8ZoRTFBVdJLVmsDVh
          stance: supports
          locator: CBDB:138771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138771）
          source: &a1
            id: s_x2kjJ8ZoRTFBVdJLVmsDVh
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 138771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138771&o=json
            external_identifier: CBDB:138771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iXH574aYqXF1GhYRcCUHoQ
        subject_person_id: p_6yKTewNViSQGLc37XFPx1S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 551年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NxnDQ6LCrj8t2cCryUyH8c
          claim_id: c_iXH574aYqXF1GhYRcCUHoQ
          source_id: s_x2kjJ8ZoRTFBVdJLVmsDVh
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
        id: c_BBsQYp9sMrTZx9Xp1LtYtE
        subject_person_id: p_6yKTewNViSQGLc37XFPx1S
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 609年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5SBoPzjdHRMrcfJSM2BnKF
          claim_id: c_BBsQYp9sMrTZx9Xp1LtYtE
          source_id: s_x2kjJ8ZoRTFBVdJLVmsDVh
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
        id: c_r19hc6taF6VRpdrj1B5TnP
        subject_person_id: p_6yKTewNViSQGLc37XFPx1S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoWN7acWH9wYGUTWDDBGyP
          claim_id: c_r19hc6taF6VRpdrj1B5TnP
          source_id: s_x2kjJ8ZoRTFBVdJLVmsDVh
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

# 王護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王護 | accepted |
| birth.date | 551年 | accepted |
| death.date | 609年 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王護（CBDB 138771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138771&o=json)
