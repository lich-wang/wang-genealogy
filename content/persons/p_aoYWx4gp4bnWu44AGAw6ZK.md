---
schema: wang-person/v1
id: p_aoYWx4gp4bnWu44AGAw6ZK
status: active
merged_into: null
display_name: 王洽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pzU9Q2A82M6HmE8WyRkQhn
        subject_person_id: p_aoYWx4gp4bnWu44AGAw6ZK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZEDk6EwmAqzqGtf4gY5Ht
          claim_id: c_pzU9Q2A82M6HmE8WyRkQhn
          source_id: s_rJFg2CCLrW93jffs8HQtY6
          stance: supports
          locator: CBDB:699993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699993）
          source: &a1
            id: s_rJFg2CCLrW93jffs8HQtY6
            source_type: api_record
            title: 中国历代人物传记资料库：王洽（CBDB 699993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699993&o=json
            external_identifier: CBDB:699993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AR9hvPc9TqBCGHDET9dkRQ
        subject_person_id: p_aoYWx4gp4bnWu44AGAw6ZK
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
        - id: cs_MzhqgwCnYB84nuJGCKZtFB
          claim_id: c_AR9hvPc9TqBCGHDET9dkRQ
          source_id: s_rJFg2CCLrW93jffs8HQtY6
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

# 王洽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洽（CBDB 699993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699993&o=json)
