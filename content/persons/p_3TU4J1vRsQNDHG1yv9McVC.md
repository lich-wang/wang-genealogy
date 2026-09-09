---
schema: wang-person/v1
id: p_3TU4J1vRsQNDHG1yv9McVC
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_agR1rSuQA3atYDL19w9SF7
        subject_person_id: p_3TU4J1vRsQNDHG1yv9McVC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M5FqBDURvCrSLFLaG6Edfg
          claim_id: c_agR1rSuQA3atYDL19w9SF7
          source_id: s_2wGCEYskU4ivDTsTzcMZkB
          stance: supports
          locator: CBDB:490955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490955）
          source: &a1
            id: s_2wGCEYskU4ivDTsTzcMZkB
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 490955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490955&o=json
            external_identifier: CBDB:490955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JfyUBV1chZ1FJUsRS7DEuX
        subject_person_id: p_3TU4J1vRsQNDHG1yv9McVC
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
        - id: cs_ECNUc3eeMto1ojxJZwFK5i
          claim_id: c_JfyUBV1chZ1FJUsRS7DEuX
          source_id: s_2wGCEYskU4ivDTsTzcMZkB
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 490955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490955&o=json)
