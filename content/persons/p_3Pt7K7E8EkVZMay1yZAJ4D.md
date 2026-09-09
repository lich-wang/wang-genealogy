---
schema: wang-person/v1
id: p_3Pt7K7E8EkVZMay1yZAJ4D
status: active
merged_into: null
display_name: 王端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uQQUenB1G4QmJYKYGmxhfG
        subject_person_id: p_3Pt7K7E8EkVZMay1yZAJ4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y5h3dzQSZvoBWQaEbYKPCi
          claim_id: c_uQQUenB1G4QmJYKYGmxhfG
          source_id: s_PTD9QwXEf63WFzitWbyWir
          stance: supports
          locator: CBDB:700123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700123）
          source: &a1
            id: s_PTD9QwXEf63WFzitWbyWir
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 700123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700123&o=json
            external_identifier: CBDB:700123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DNoCiNUhREgcpkZgCXrT4Q
        subject_person_id: p_3Pt7K7E8EkVZMay1yZAJ4D
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
        - id: cs_LadHzXi3SJA2vEq5nSkEn7
          claim_id: c_DNoCiNUhREgcpkZgCXrT4Q
          source_id: s_PTD9QwXEf63WFzitWbyWir
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

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 700123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700123&o=json)
