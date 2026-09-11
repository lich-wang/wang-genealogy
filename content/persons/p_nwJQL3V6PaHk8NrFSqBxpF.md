---
schema: wang-person/v1
id: p_nwJQL3V6PaHk8NrFSqBxpF
status: active
merged_into: null
display_name: 王佩蓉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YEm6oCFdyLxFSBCwhKY8hM
        subject_person_id: p_nwJQL3V6PaHk8NrFSqBxpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩蓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eB9qCE7wu377CM9LfFXMzX
          claim_id: c_YEm6oCFdyLxFSBCwhKY8hM
          source_id: s_HQu1mzU3cT1uLtmK3rYr2T
          stance: supports
          locator: CBDB:574141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574141）
          source: &a1
            id: s_HQu1mzU3cT1uLtmK3rYr2T
            source_type: api_record
            title: 中国历代人物传记资料库：王佩蓉（CBDB 574141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574141&o=json
            external_identifier: CBDB:574141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_agzpWfUnNEH5C5gHqZncTt
        subject_person_id: p_nwJQL3V6PaHk8NrFSqBxpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩蓉，清人物。籍贯孝感。（中国历代人物传记资料库 CBDB 574141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yhy8Z3DUbkqxqU6Tux6Q6d
          claim_id: c_agzpWfUnNEH5C5gHqZncTt
          source_id: s_HQu1mzU3cT1uLtmK3rYr2T
          stance: supports
          locator: CBDB:574141
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

# 王佩蓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩蓉 | accepted |
| bio.summary | 王佩蓉，清人物。籍贯孝感。（中国历代人物传记资料库 CBDB 574141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩蓉（CBDB 574141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574141&o=json)
