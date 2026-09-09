---
schema: wang-person/v1
id: p_weJbXCRkHgZR4bzWt6doGu
status: active
merged_into: null
display_name: 王磐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7cF6aPJ5Q4uFPsCFVxcQi
        subject_person_id: p_weJbXCRkHgZR4bzWt6doGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KV1BSG1w19FW3getrfX4iJ
          claim_id: c_d7cF6aPJ5Q4uFPsCFVxcQi
          source_id: s_WMMjknV5EH6LH11brbGKu8
          stance: supports
          locator: CBDB:97981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97981）
          source: &a1
            id: s_WMMjknV5EH6LH11brbGKu8
            source_type: api_record
            title: 中国历代人物传记资料库：王磐（CBDB 97981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97981&o=json
            external_identifier: CBDB:97981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uCAhwTKAGaLCU99tXcHYDq
        subject_person_id: p_weJbXCRkHgZR4bzWt6doGu
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
        - id: cs_FLAW3gynr14m5pUw32c3J4
          claim_id: c_uCAhwTKAGaLCU99tXcHYDq
          source_id: s_WMMjknV5EH6LH11brbGKu8
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

# 王磐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王磐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王磐（CBDB 97981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97981&o=json)
