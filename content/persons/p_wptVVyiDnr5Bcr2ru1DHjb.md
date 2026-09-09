---
schema: wang-person/v1
id: p_wptVVyiDnr5Bcr2ru1DHjb
status: active
merged_into: null
display_name: 王正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qYtxsA18L7dQ5oo9mPiQHM
        subject_person_id: p_wptVVyiDnr5Bcr2ru1DHjb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1WDWvLURyV2yfcN7sEppeE
          claim_id: c_qYtxsA18L7dQ5oo9mPiQHM
          source_id: s_AqCLLKVkaTzvy8EURUpyTy
          stance: supports
          locator: CBDB:100646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100646）
          source: &a1
            id: s_AqCLLKVkaTzvy8EURUpyTy
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 100646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100646&o=json
            external_identifier: CBDB:100646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5L1MjL654HPFRretEDLaXi
        subject_person_id: p_wptVVyiDnr5Bcr2ru1DHjb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9GnBS7msp9qhMh8vv5MdgR
          claim_id: c_5L1MjL654HPFRretEDLaXi
          source_id: s_AqCLLKVkaTzvy8EURUpyTy
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

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正（CBDB 100646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100646&o=json)
