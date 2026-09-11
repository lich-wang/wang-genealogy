---
schema: wang-person/v1
id: p_9qZgmXNf849Vnp8iqxGHEd
status: active
merged_into: null
display_name: 王觀之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dgv8FLSfybh5ZenvDvMHd3
        subject_person_id: p_9qZgmXNf849Vnp8iqxGHEd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9mpQEZ7E9gupN8JBDdC9Sp
          claim_id: c_Dgv8FLSfybh5ZenvDvMHd3
          source_id: s_qWoYjYk56eEgFUP2EMNHGd
          stance: supports
          locator: CBDB:566068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566068）
          source: &a1
            id: s_qWoYjYk56eEgFUP2EMNHGd
            source_type: api_record
            title: 中国历代人物传记资料库：王觀之（CBDB 566068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566068&o=json
            external_identifier: CBDB:566068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cP7sRgkzyAQBKANpoUK3Zv
        subject_person_id: p_9qZgmXNf849Vnp8iqxGHEd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀之，史料所见人物。本项目依据《中国历代人物传记资料库：王觀之（CBDB 566068）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nb_1R4b3P3ldpdSwtJ2sK-
          claim_id: c_cP7sRgkzyAQBKANpoUK3Zv
          source_id: s_qWoYjYk56eEgFUP2EMNHGd
          stance: supports
          locator: CBDB:566068
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

# 王觀之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀之 | accepted |
| bio.summary | 王觀之，史料所见人物。本项目依据《中国历代人物传记资料库：王觀之（CBDB 566068）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀之（CBDB 566068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566068&o=json)
