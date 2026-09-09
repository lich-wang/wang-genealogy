---
schema: wang-person/v1
id: p_5RKGwsMHV77LLBFsPjHS29
status: active
merged_into: null
display_name: 王錦雯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fotUDv7WUEQjYZ1z8YmRM6
        subject_person_id: p_5RKGwsMHV77LLBFsPjHS29
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦雯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Nm9a6D1WRK51CEVTfxRsa
          claim_id: c_fotUDv7WUEQjYZ1z8YmRM6
          source_id: s_PtA9oWr1FaWwL46CYUF8PM
          stance: supports
          locator: CBDB:72128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72128）
          source: &a1
            id: s_PtA9oWr1FaWwL46CYUF8PM
            source_type: api_record
            title: 中国历代人物传记资料库：王錦雯（CBDB 72128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72128&o=json
            external_identifier: CBDB:72128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_D8vJPWvsWvTjCSXfjv8P9Y
        subject_person_id: p_5RKGwsMHV77LLBFsPjHS29
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o5CzhxZvtmpAUrZtHDLxFG
          claim_id: c_D8vJPWvsWvTjCSXfjv8P9Y
          source_id: s_PtA9oWr1FaWwL46CYUF8PM
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
        id: c_rPP1LA3JKKFHnSbwqTqW46
        subject_person_id: p_5RKGwsMHV77LLBFsPjHS29
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
        - id: cs_DjbV3nV5Q348SEzJCYWJrK
          claim_id: c_rPP1LA3JKKFHnSbwqTqW46
          source_id: s_PtA9oWr1FaWwL46CYUF8PM
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

# 王錦雯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦雯 | accepted |
| birth.date | 1790年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦雯（CBDB 72128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72128&o=json)
