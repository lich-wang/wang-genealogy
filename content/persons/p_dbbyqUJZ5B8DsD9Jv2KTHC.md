---
schema: wang-person/v1
id: p_dbbyqUJZ5B8DsD9Jv2KTHC
status: active
merged_into: null
display_name: 王器成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_88Y8mLkb2UcJiWmrRQnSAM
        subject_person_id: p_dbbyqUJZ5B8DsD9Jv2KTHC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王器成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z7dAQdzg2WKUrhrjuasAhX
          claim_id: c_88Y8mLkb2UcJiWmrRQnSAM
          source_id: s_NhMDMWp3JPPXJpYn2p1h8q
          stance: supports
          locator: CBDB:343528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343528）
          source: &a1
            id: s_NhMDMWp3JPPXJpYn2p1h8q
            source_type: api_record
            title: 中国历代人物传记资料库：王器成（CBDB 343528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343528&o=json
            external_identifier: CBDB:343528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XM9p7R5NRUcgG6NQmBpmeF
        subject_person_id: p_dbbyqUJZ5B8DsD9Jv2KTHC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王器成，清人物。明清進士進士，籍贯瓊州府，入仕進士。（中国历代人物传记资料库 CBDB 343528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BWutMhts9qpamkolbtvqI5
          claim_id: c_XM9p7R5NRUcgG6NQmBpmeF
          source_id: s_NhMDMWp3JPPXJpYn2p1h8q
          stance: supports
          locator: CBDB:343528
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

# 王器成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王器成 | accepted |
| bio.summary | 王器成，清人物。明清進士進士，籍贯瓊州府，入仕進士。（中国历代人物传记资料库 CBDB 343528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王器成（CBDB 343528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343528&o=json)
