---
schema: wang-person/v1
id: p_J1DUua8TMnHf5Xtvhn3XDE
status: active
merged_into: null
display_name: 王立道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Afng14RA7e2C2V4NNKeQbB
        subject_person_id: p_J1DUua8TMnHf5Xtvhn3XDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vg3ast4Ss5EyUBVtadgUGu
          claim_id: c_Afng14RA7e2C2V4NNKeQbB
          source_id: s_ZZryBDtskoZZkfg7du7XTo
          stance: supports
          locator: CBDB:510189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510189）
          source: &a1
            id: s_ZZryBDtskoZZkfg7du7XTo
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 510189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510189&o=json
            external_identifier: CBDB:510189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68u3diHud2VhrMeiU2gs71
        subject_person_id: p_J1DUua8TMnHf5Xtvhn3XDE
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
        - id: cs_Uohg27pxn4ynE946tkx1KQ
          claim_id: c_68u3diHud2VhrMeiU2gs71
          source_id: s_ZZryBDtskoZZkfg7du7XTo
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

# 王立道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立道（CBDB 510189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510189&o=json)
