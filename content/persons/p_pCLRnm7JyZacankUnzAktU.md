---
schema: wang-person/v1
id: p_pCLRnm7JyZacankUnzAktU
status: active
merged_into: null
display_name: 王氣
cbdb_id: 414937
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QSj3RE24WM6LfMHCyEj9Pq
        subject_person_id: p_pCLRnm7JyZacankUnzAktU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氣，史料所见人物。本项目依据《中国历代人物传记资料库：王氣（CBDB 414937）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fdkDG57JAUkQFv0YgidRy8
          claim_id: c_QSj3RE24WM6LfMHCyEj9Pq
          source_id: s_GAboNdR2VMMTPxga5kkSiX
          stance: supports
          locator: CBDB:414937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GAboNdR2VMMTPxga5kkSiX
            source_type: api_record
            title: 中国历代人物传记资料库：王氣（CBDB 414937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414937&o=json
            external_identifier: CBDB:414937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:42.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RXQE5XRKoof84ibu3QbCmh
        subject_person_id: p_pCLRnm7JyZacankUnzAktU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H25MVGBN1tGyKQ976wJd5F
          claim_id: c_RXQE5XRKoof84ibu3QbCmh
          source_id: s_GAboNdR2VMMTPxga5kkSiX
          stance: supports
          locator: CBDB:414937
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5901-6000）｜历史性依据：CBDB 朝代 = 明
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

# 王氣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氣，史料所见人物。本项目依据《中国历代人物传记资料库：王氣（CBDB 414937）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王氣（CBDB 414937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414937&o=json)
