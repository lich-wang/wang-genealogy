---
schema: wang-person/v1
id: p_Y1Lu1QMtCXrWohnLkpcJF4
status: active
merged_into: null
display_name: 王鳳春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_29NFg6CxdvtCb2r7mcVmXH
        subject_person_id: p_Y1Lu1QMtCXrWohnLkpcJF4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nwkbE1h9YqDQGoxZS4198Z
          claim_id: c_29NFg6CxdvtCb2r7mcVmXH
          source_id: s_oHjDQ9WSDQ3onsim5Kh264
          stance: supports
          locator: CBDB:640956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640956）
          source: &a1
            id: s_oHjDQ9WSDQ3onsim5Kh264
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳春（CBDB 640956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640956&o=json
            external_identifier: CBDB:640956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x4v8rxiokq8j6zMb1FkFsC
        subject_person_id: p_Y1Lu1QMtCXrWohnLkpcJF4
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
        - id: cs_6U3h2vXZLmfrojH5Vq9x74
          claim_id: c_x4v8rxiokq8j6zMb1FkFsC
          source_id: s_oHjDQ9WSDQ3onsim5Kh264
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

# 王鳳春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳春 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳春（CBDB 640956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640956&o=json)
