---
schema: wang-person/v1
id: p_U1ML51tRJ8okHu27urjPbE
status: active
merged_into: null
display_name: 王嗣芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B5wvXU8y1J6zSW578isT4y
        subject_person_id: p_U1ML51tRJ8okHu27urjPbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SLLGkAZAq2gNq6gu5MaMwA
          claim_id: c_B5wvXU8y1J6zSW578isT4y
          source_id: s_ZGhggNM2QbWEHY7R3NXqyX
          stance: supports
          locator: CBDB:700060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700060）
          source: &a1
            id: s_ZGhggNM2QbWEHY7R3NXqyX
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣芳（CBDB 700060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700060&o=json
            external_identifier: CBDB:700060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JZkFWF8q3BuryQBdmF1b45
        subject_person_id: p_U1ML51tRJ8okHu27urjPbE
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
        - id: cs_DeNMGCD9PKKLHD4pqfyG7P
          claim_id: c_JZkFWF8q3BuryQBdmF1b45
          source_id: s_ZGhggNM2QbWEHY7R3NXqyX
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

# 王嗣芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣芳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣芳（CBDB 700060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700060&o=json)
