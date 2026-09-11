---
schema: wang-person/v1
id: p_TmMAe3fRZrNtG5XcYQEQGN
status: active
merged_into: null
display_name: 王宋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zVxSFfKA6knHN7jhaZLnmA
        subject_person_id: p_TmMAe3fRZrNtG5XcYQEQGN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rLJMdpg7wLnQsuv9LZrATe
          claim_id: c_zVxSFfKA6knHN7jhaZLnmA
          source_id: s_UQh331H5v1MBE8kgY8HhKo
          stance: supports
          locator: CBDB:637085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637085）
          source: &a1
            id: s_UQh331H5v1MBE8kgY8HhKo
            source_type: api_record
            title: 中国历代人物传记资料库：王宋（CBDB 637085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637085&o=json
            external_identifier: CBDB:637085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WiF1KGswbChgyJuP6pd2gR
        subject_person_id: p_TmMAe3fRZrNtG5XcYQEQGN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宋，清人物。籍贯汾陽，入仕軍功補授(軍功)，曾任知州。（中国历代人物传记资料库 CBDB 637085）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EAejqmRMkdLgXAxYW12c6z
          claim_id: c_WiF1KGswbChgyJuP6pd2gR
          source_id: s_UQh331H5v1MBE8kgY8HhKo
          stance: supports
          locator: CBDB:637085
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

# 王宋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宋 | accepted |
| bio.summary | 王宋，清人物。籍贯汾陽，入仕軍功補授(軍功)，曾任知州。（中国历代人物传记资料库 CBDB 637085） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宋（CBDB 637085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637085&o=json)
