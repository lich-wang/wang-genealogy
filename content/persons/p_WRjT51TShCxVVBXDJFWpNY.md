---
schema: wang-person/v1
id: p_WRjT51TShCxVVBXDJFWpNY
status: active
merged_into: null
display_name: 王元度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4B269QhLK1r5sJwrF5JBM
        subject_person_id: p_WRjT51TShCxVVBXDJFWpNY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5EAkFsNHZPCn6TUZCAKbds
          claim_id: c_L4B269QhLK1r5sJwrF5JBM
          source_id: s_RGQdqS9A9EeX9nvJhHvmEP
          stance: supports
          locator: CBDB:192579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192579）
          source: &a1
            id: s_RGQdqS9A9EeX9nvJhHvmEP
            source_type: api_record
            title: 中国历代人物传记资料库：王元度（CBDB 192579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192579&o=json
            external_identifier: CBDB:192579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yUNTnZYUyziCUGN2LmuqCh
        subject_person_id: p_WRjT51TShCxVVBXDJFWpNY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 869年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vc3e6UN9JtVKo1idzZRpQQ
          claim_id: c_yUNTnZYUyziCUGN2LmuqCh
          source_id: s_RGQdqS9A9EeX9nvJhHvmEP
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
        id: c_LMzrrbTF1uo1ccPU7tNE32
        subject_person_id: p_WRjT51TShCxVVBXDJFWpNY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLCucTWQ2VBxAiFPdxHFxb
          claim_id: c_LMzrrbTF1uo1ccPU7tNE32
          source_id: s_RGQdqS9A9EeX9nvJhHvmEP
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

# 王元度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元度 | accepted |
| death.date | 869年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元度（CBDB 192579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192579&o=json)
