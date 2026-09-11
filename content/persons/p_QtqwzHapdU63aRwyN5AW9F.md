---
schema: wang-person/v1
id: p_QtqwzHapdU63aRwyN5AW9F
status: active
merged_into: null
display_name: 王彥成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VBGHjfBaaUwrdy4U4aHabQ
        subject_person_id: p_QtqwzHapdU63aRwyN5AW9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4S7LV3KT4o7mHfNKJzqsz
          claim_id: c_VBGHjfBaaUwrdy4U4aHabQ
          source_id: s_mErtPUWmxvLH4KRpX4oCHo
          stance: supports
          locator: CBDB:537333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537333）
          source: &a1
            id: s_mErtPUWmxvLH4KRpX4oCHo
            source_type: api_record
            title: 中国历代人物传记资料库：王彥成（CBDB 537333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537333&o=json
            external_identifier: CBDB:537333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1hvqja43gMmM83RNyTqXzD
        subject_person_id: p_QtqwzHapdU63aRwyN5AW9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥成，宋人物。籍贯全椒，入仕進士。（中国历代人物传记资料库 CBDB 537333）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5TWk1LgaHawlx0bWjs453u
          claim_id: c_1hvqja43gMmM83RNyTqXzD
          source_id: s_mErtPUWmxvLH4KRpX4oCHo
          stance: supports
          locator: CBDB:537333
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王彥成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥成 | accepted |
| bio.summary | 王彥成，宋人物。籍贯全椒，入仕進士。（中国历代人物传记资料库 CBDB 537333） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥成（CBDB 537333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537333&o=json)
