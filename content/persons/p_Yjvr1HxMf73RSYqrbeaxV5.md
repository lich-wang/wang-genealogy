---
schema: wang-person/v1
id: p_Yjvr1HxMf73RSYqrbeaxV5
status: active
merged_into: null
display_name: 王能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9rdZrfbfoGeuwPKitGjJ1S
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FeLZ6tjcF2okMLoisTHhy6
          claim_id: c_9rdZrfbfoGeuwPKitGjJ1S
          source_id: s_jz4CpCCDGuT5v6zBrYh8fj
          stance: supports
          locator: CBDB:259340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259340）
          source: &a1
            id: s_jz4CpCCDGuT5v6zBrYh8fj
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 259340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259340&o=json
            external_identifier: CBDB:259340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QefoMEGPgTVcqBwE3nTZt3
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
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
        - id: cs_gAx5VFCtHEFJPLPtyVN81E
          claim_id: c_QefoMEGPgTVcqBwE3nTZt3
          source_id: s_jz4CpCCDGuT5v6zBrYh8fj
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

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 259340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259340&o=json)
