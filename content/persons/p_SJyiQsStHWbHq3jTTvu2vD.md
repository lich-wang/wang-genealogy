---
schema: wang-person/v1
id: p_SJyiQsStHWbHq3jTTvu2vD
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3PWnm95GHg6CQuP24DcS8
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kmDD3Qay5yQDbRebabb1Pa
          claim_id: c_P3PWnm95GHg6CQuP24DcS8
          source_id: s_wJpM1N4oZgpquY1gcYeU1P
          stance: supports
          locator: CBDB:327945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327945）
          source: &a1
            id: s_wJpM1N4oZgpquY1gcYeU1P
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 327945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327945&o=json
            external_identifier: CBDB:327945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uG1NaQMb1KQATzCvVyd9Yt
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
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
        - id: cs_NfNAGYbF2RbS84mtpTbf7y
          claim_id: c_uG1NaQMb1KQATzCvVyd9Yt
          source_id: s_wJpM1N4oZgpquY1gcYeU1P
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

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 327945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327945&o=json)
