---
schema: wang-person/v1
id: p_1Lsa9UN1bD8CJ8v7Xu8mvJ
status: active
merged_into: null
display_name: 王璥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1AuqmKCcWFvD8i4sSfHD97
        subject_person_id: p_1Lsa9UN1bD8CJ8v7Xu8mvJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_53m5KrfvjowYT5YF8ykPvG
          claim_id: c_1AuqmKCcWFvD8i4sSfHD97
          source_id: s_NRqgzezYyMgXBQtGAXbzNP
          stance: supports
          locator: CBDB:526955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526955）
          source: &a1
            id: s_NRqgzezYyMgXBQtGAXbzNP
            source_type: api_record
            title: 中国历代人物传记资料库：王璥（CBDB 526955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526955&o=json
            external_identifier: CBDB:526955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HGvDC66vjQQGfQYXM49ttD
        subject_person_id: p_1Lsa9UN1bD8CJ8v7Xu8mvJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璥，史料所见人物。本项目依据《中国历代人物传记资料库：王璥（CBDB 526955）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qMqkfShPiPZeKBZ5eztl5R
          claim_id: c_HGvDC66vjQQGfQYXM49ttD
          source_id: s_NRqgzezYyMgXBQtGAXbzNP
          stance: supports
          locator: CBDB:526955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王璥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璥 | accepted |
| bio.summary | 王璥，史料所见人物。本项目依据《中国历代人物传记资料库：王璥（CBDB 526955）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璥（CBDB 526955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526955&o=json)
