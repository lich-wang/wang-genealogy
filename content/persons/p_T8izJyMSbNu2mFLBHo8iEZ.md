---
schema: wang-person/v1
id: p_T8izJyMSbNu2mFLBHo8iEZ
status: active
merged_into: null
display_name: 王彥存
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RCrReJyim3tde9A5BuGGsq
        subject_person_id: p_T8izJyMSbNu2mFLBHo8iEZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_okd9kaPZ7qHb5ENEgY5HYN
          claim_id: c_RCrReJyim3tde9A5BuGGsq
          source_id: s_kRDLCkAtEGHNb3McB7BzGn
          stance: supports
          locator: CBDB:539728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539728）
          source: &a1
            id: s_kRDLCkAtEGHNb3McB7BzGn
            source_type: api_record
            title: 中国历代人物传记资料库：王彥存（CBDB 539728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539728&o=json
            external_identifier: CBDB:539728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_seZ3wi8chS8sGKqdvM8627
        subject_person_id: p_T8izJyMSbNu2mFLBHo8iEZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥存，宋人物。籍贯泰州海岸海水，入仕進士。（中国历代人物传记资料库 CBDB 539728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_84efaoN601CTwvbWTLst20
          claim_id: c_seZ3wi8chS8sGKqdvM8627
          source_id: s_kRDLCkAtEGHNb3McB7BzGn
          stance: supports
          locator: CBDB:539728
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

# 王彥存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥存 | accepted |
| bio.summary | 王彥存，宋人物。籍贯泰州海岸海水，入仕進士。（中国历代人物传记资料库 CBDB 539728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥存（CBDB 539728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539728&o=json)
