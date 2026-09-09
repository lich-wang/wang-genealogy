---
schema: wang-person/v1
id: p_VdC66h72QJ8A6RrAa2y5R2
status: active
merged_into: null
display_name: 王烜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zHYXAt1L5rKAh1NNHge8J1
        subject_person_id: p_VdC66h72QJ8A6RrAa2y5R2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zHZYRrYrFzQ7xcRa53WjjQ
          claim_id: c_zHYXAt1L5rKAh1NNHge8J1
          source_id: s_ak9pMfAAAPqCA28Kh4X2nF
          stance: supports
          locator: CBDB:687724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687724）
          source: &a1
            id: s_ak9pMfAAAPqCA28Kh4X2nF
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 687724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687724&o=json
            external_identifier: CBDB:687724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5UWCiHdwbT3jAiW7Nq97c
        subject_person_id: p_VdC66h72QJ8A6RrAa2y5R2
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
        - id: cs_bNqfaqeRet3DgZim7Pwmcd
          claim_id: c_L5UWCiHdwbT3jAiW7Nq97c
          source_id: s_ak9pMfAAAPqCA28Kh4X2nF
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

# 王烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烜（CBDB 687724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687724&o=json)
