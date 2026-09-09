---
schema: wang-person/v1
id: p_jHwZfHWM4vMLPpm1ZfMXFt
status: active
merged_into: null
display_name: 王彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92oGLac3Aq9kp1kdqS6HBw
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1VAU3wYMMiHSFCC3eKith
          claim_id: c_92oGLac3Aq9kp1kdqS6HBw
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: CBDB:200153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200153）
          source: &a1
            id: s_srAnw7NJCmjSg2UeHn9GXe
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 200153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json
            external_identifier: CBDB:200153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QCA4bhPxF1U84nD7EeasiK
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1370年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLvHhqZ5dFd8JWYFYr5J9g
          claim_id: c_QCA4bhPxF1U84nD7EeasiK
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
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
        id: c_ypWrrDaS7Cp8hyJMyMakPH
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
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
        - id: cs_DFbhErtupXR12A8K1yxDpr
          claim_id: c_ypWrrDaS7Cp8hyJMyMakPH
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
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

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| birth.date | 1370年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 200153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json)
