---
schema: wang-person/v1
id: p_NHJgobcdCWFuovVgfscsb6
status: active
merged_into: null
display_name: 王兆僖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFPX1sVQDEa76d5XCz14Gi
        subject_person_id: p_NHJgobcdCWFuovVgfscsb6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆僖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fBLF6NjSmJt95xxEL5pD5r
          claim_id: c_RFPX1sVQDEa76d5XCz14Gi
          source_id: s_TDrUASP7rqkZbb8nr2Tbjw
          stance: supports
          locator: CBDB:636192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636192）
          source: &a1
            id: s_TDrUASP7rqkZbb8nr2Tbjw
            source_type: api_record
            title: 中国历代人物传记资料库：王兆僖（CBDB 636192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636192&o=json
            external_identifier: CBDB:636192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JcUpW2mr2kL9MkMWF1HWP4
        subject_person_id: p_NHJgobcdCWFuovVgfscsb6
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
        - id: cs_uMa4D6B65Ft16PSp44isoH
          claim_id: c_JcUpW2mr2kL9MkMWF1HWP4
          source_id: s_TDrUASP7rqkZbb8nr2Tbjw
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

# 王兆僖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆僖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆僖（CBDB 636192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636192&o=json)
