---
schema: wang-person/v1
id: p_6pHKq6tM2XzXjR5hFYmzvC
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RiUNtGfdaWZKAsBzVaNMQA
        subject_person_id: p_6pHKq6tM2XzXjR5hFYmzvC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4D2soJregVB2tKHiYQiiVm
          claim_id: c_RiUNtGfdaWZKAsBzVaNMQA
          source_id: s_P2GtEP21h3Cwb9H6YJgcn2
          stance: supports
          locator: CBDB:458464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458464）
          source: &a1
            id: s_P2GtEP21h3Cwb9H6YJgcn2
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 458464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458464&o=json
            external_identifier: CBDB:458464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8DrByVxLCANrvPZ5CmWu4C
        subject_person_id: p_6pHKq6tM2XzXjR5hFYmzvC
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
        - id: cs_1TjehrhAYbqdTaCjegqRjq
          claim_id: c_8DrByVxLCANrvPZ5CmWu4C
          source_id: s_P2GtEP21h3Cwb9H6YJgcn2
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 458464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458464&o=json)
