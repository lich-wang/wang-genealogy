---
schema: wang-person/v1
id: p_B16hS7JAAef9sNtq1N1H8J
status: active
merged_into: null
display_name: 王鏡清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5K2Tdq7McmYWCBwBc3Ej38
        subject_person_id: p_B16hS7JAAef9sNtq1N1H8J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3y1Cwq3rbGzDyBv6QHtaPA
          claim_id: c_5K2Tdq7McmYWCBwBc3Ej38
          source_id: s_89zpQLFPJAZ3EHhShXdyuc
          stance: supports
          locator: CBDB:640709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640709）
          source: &a1
            id: s_89zpQLFPJAZ3EHhShXdyuc
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡清（CBDB 640709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640709&o=json
            external_identifier: CBDB:640709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sniQMMfyhzt4mYYwn4YXou
        subject_person_id: p_B16hS7JAAef9sNtq1N1H8J
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
        - id: cs_A6y8bA3opu9J4KTvBQxX7i
          claim_id: c_sniQMMfyhzt4mYYwn4YXou
          source_id: s_89zpQLFPJAZ3EHhShXdyuc
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

# 王鏡清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏡清 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏡清（CBDB 640709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640709&o=json)
