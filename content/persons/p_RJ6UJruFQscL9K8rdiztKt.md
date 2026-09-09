---
schema: wang-person/v1
id: p_RJ6UJruFQscL9K8rdiztKt
status: active
merged_into: null
display_name: 王天任
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zXDn6KtvaoqkAZ2Z3MVjDo
        subject_person_id: p_RJ6UJruFQscL9K8rdiztKt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FBBtuy29FTwCrzbdcNeScz
          claim_id: c_zXDn6KtvaoqkAZ2Z3MVjDo
          source_id: s_VrMefBSpiSq6Jb4aek8deQ
          stance: supports
          locator: CBDB:540997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540997）
          source: &a1
            id: s_VrMefBSpiSq6Jb4aek8deQ
            source_type: api_record
            title: 中国历代人物传记资料库：王天任（CBDB 540997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540997&o=json
            external_identifier: CBDB:540997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_amjR634nDWhCZtbTgiWJnR
        subject_person_id: p_RJ6UJruFQscL9K8rdiztKt
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
        - id: cs_EB3nuPyDMZR96dbSY2FqNr
          claim_id: c_amjR634nDWhCZtbTgiWJnR
          source_id: s_VrMefBSpiSq6Jb4aek8deQ
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

# 王天任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天任 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天任（CBDB 540997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540997&o=json)
