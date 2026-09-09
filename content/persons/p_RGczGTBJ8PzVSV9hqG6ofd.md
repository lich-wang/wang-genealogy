---
schema: wang-person/v1
id: p_RGczGTBJ8PzVSV9hqG6ofd
status: active
merged_into: null
display_name: 王起岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J3NCWBqGaR6zc1K55YeiAw
        subject_person_id: p_RGczGTBJ8PzVSV9hqG6ofd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SBM5Nnf8NMu2jAVsJXxcTk
          claim_id: c_J3NCWBqGaR6zc1K55YeiAw
          source_id: s_cS7Au2pxwCZ46wAGJ96AsY
          stance: supports
          locator: CBDB:343293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343293）
          source: &a1
            id: s_cS7Au2pxwCZ46wAGJ96AsY
            source_type: api_record
            title: 中国历代人物传记资料库：王起岱（CBDB 343293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343293&o=json
            external_identifier: CBDB:343293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CgVEM66ygAL5hrUvjx753U
        subject_person_id: p_RGczGTBJ8PzVSV9hqG6ofd
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
        - id: cs_vmHni9QD379GyWb59QXLP3
          claim_id: c_CgVEM66ygAL5hrUvjx753U
          source_id: s_cS7Au2pxwCZ46wAGJ96AsY
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

# 王起岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起岱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起岱（CBDB 343293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343293&o=json)
