---
schema: wang-person/v1
id: p_hW464ybDxpUfqyHpm515L3
status: active
merged_into: null
display_name: 王享
cbdb_id: 413797
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CEGqrf9JLBfcYCGGzuvoJb
        subject_person_id: p_hW464ybDxpUfqyHpm515L3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王享，史料所见人物。本项目依据《中国历代人物传记资料库：王享（CBDB 413797）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_57Vb7WDygnpvDdSX2y3lij
          claim_id: c_CEGqrf9JLBfcYCGGzuvoJb
          source_id: s_4bJ7zXjZGRr5jLdVqY85i5
          stance: supports
          locator: CBDB:413797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4bJ7zXjZGRr5jLdVqY85i5
            source_type: api_record
            title: 中国历代人物传记资料库：王享（CBDB 413797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413797&o=json
            external_identifier: CBDB:413797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7E5LNh7BWXfU5pGoS5KggC
        subject_person_id: p_hW464ybDxpUfqyHpm515L3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王享
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jRVTYLW3gz6Y7o6Dr2y5E5
          claim_id: c_7E5LNh7BWXfU5pGoS5KggC
          source_id: s_4bJ7zXjZGRr5jLdVqY85i5
          stance: supports
          locator: CBDB:413797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 明
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

# 王享

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王享，史料所见人物。本项目依据《中国历代人物传记资料库：王享（CBDB 413797）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王享 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王享（CBDB 413797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413797&o=json)
