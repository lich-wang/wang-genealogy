---
schema: wang-person/v1
id: p_UoF5xeCXavGg9L6YR6Bi3p
status: active
merged_into: null
display_name: 王晐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7dShPAH3MJbhK3DotbXDT2
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMsGKWLzdzZxufeT1yc7Xm
          claim_id: c_7dShPAH3MJbhK3DotbXDT2
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
          stance: supports
          locator: CBDB:22077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22077）
          source: &a1
            id: s_vDbYAULf9DwxnRKJQDa4W8
            source_type: api_record
            title: 中国历代人物传记资料库：王晐（CBDB 22077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22077&o=json
            external_identifier: CBDB:22077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3sxJREzZQ12BGSbxXSmA1a
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1124年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMQ6eQUHWQPcNZyPUFZ5F7
          claim_id: c_3sxJREzZQ12BGSbxXSmA1a
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
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
        id: c_Wp1NavnKCyk793U9s2RH6N
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1183年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdpUPapo5QzJeLWpm6ADuE
          claim_id: c_Wp1NavnKCyk793U9s2RH6N
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
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
        id: c_qGKjP4D13jfJXETFh2D2m1
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
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
        - id: cs_VLDk19Fahh21vYv2gcQ2uM
          claim_id: c_qGKjP4D13jfJXETFh2D2m1
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
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

# 王晐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晐 | accepted |
| birth.date | 1124年 | accepted |
| death.date | 1183年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晐（CBDB 22077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22077&o=json)
