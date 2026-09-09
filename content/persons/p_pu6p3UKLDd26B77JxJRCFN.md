---
schema: wang-person/v1
id: p_pu6p3UKLDd26B77JxJRCFN
status: active
merged_into: null
display_name: 王雲華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G8eKvj7AMUojUNY1xkuoLk
        subject_person_id: p_pu6p3UKLDd26B77JxJRCFN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdsHu5nJb1kr7mEKNfxy1p
          claim_id: c_G8eKvj7AMUojUNY1xkuoLk
          source_id: s_K4dbozX3wB81Ld5f1RmvwW
          stance: supports
          locator: CBDB:640817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640817）
          source: &a1
            id: s_K4dbozX3wB81Ld5f1RmvwW
            source_type: api_record
            title: 中国历代人物传记资料库：王雲華（CBDB 640817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640817&o=json
            external_identifier: CBDB:640817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86gufL25D58JJYW2RvEsTG
        subject_person_id: p_pu6p3UKLDd26B77JxJRCFN
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
        - id: cs_W6wW4C8r96Qqh5ZFXnH6H6
          claim_id: c_86gufL25D58JJYW2RvEsTG
          source_id: s_K4dbozX3wB81Ld5f1RmvwW
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

# 王雲華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲華 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲華（CBDB 640817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640817&o=json)
