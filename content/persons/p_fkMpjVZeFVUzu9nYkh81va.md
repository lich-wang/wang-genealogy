---
schema: wang-person/v1
id: p_fkMpjVZeFVUzu9nYkh81va
status: active
merged_into: null
display_name: 王允元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x2ucfXKM6J5aT9M7zTJEih
        subject_person_id: p_fkMpjVZeFVUzu9nYkh81va
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SqdjMr8CsMYJKQ6ZRL82CB
          claim_id: c_x2ucfXKM6J5aT9M7zTJEih
          source_id: s_9awpMd3woCAuM6T4cqFdtD
          stance: supports
          locator: CBDB:460080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460080）
          source: &a1
            id: s_9awpMd3woCAuM6T4cqFdtD
            source_type: api_record
            title: 中国历代人物传记资料库：王允元（CBDB 460080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460080&o=json
            external_identifier: CBDB:460080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EbetUxX84jR5tarmmVGF5e
        subject_person_id: p_fkMpjVZeFVUzu9nYkh81va
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziqJAviqyGFG6mE4n1Ve9e
          claim_id: c_EbetUxX84jR5tarmmVGF5e
          source_id: s_9awpMd3woCAuM6T4cqFdtD
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

# 王允元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允元 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允元（CBDB 460080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460080&o=json)
