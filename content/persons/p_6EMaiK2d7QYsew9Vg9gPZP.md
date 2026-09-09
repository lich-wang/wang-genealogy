---
schema: wang-person/v1
id: p_6EMaiK2d7QYsew9Vg9gPZP
status: active
merged_into: null
display_name: 王華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vtfwFUPc5a8695HvEXhZkx
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TE24xxmGuTFMfF7ub4cVN
          claim_id: c_vtfwFUPc5a8695HvEXhZkx
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: CBDB:199850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199850）
          source: &a1
            id: s_U4WGeE3TRg6Y2JCL5J84jy
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 199850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json
            external_identifier: CBDB:199850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZF9Y3p8ZQifdv4xXrCm5QA
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NA63Q6JrUco62z9ah5v4GB
          claim_id: c_ZF9Y3p8ZQifdv4xXrCm5QA
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
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
        id: c_E4ZDMa88p3Wzb48ZVthGMU
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
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
        - id: cs_m4yrajYD5qpj83dBdfYWgY
          claim_id: c_E4ZDMa88p3Wzb48ZVthGMU
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
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

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 199850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json)
