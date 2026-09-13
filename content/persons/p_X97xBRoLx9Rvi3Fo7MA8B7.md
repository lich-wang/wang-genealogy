---
schema: wang-person/v1
id: p_X97xBRoLx9Rvi3Fo7MA8B7
status: active
merged_into: null
display_name: 王雲銘
cbdb_id: 341853
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ahXNuv4k9UkEKKNgcpB3RJ
        subject_person_id: p_X97xBRoLx9Rvi3Fo7MA8B7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲銘，史料所见人物。本项目依据《中国历代人物传记资料库：王雲銘（CBDB 341853）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_5IDr8aE5SDBDfP59SZJRoy
          claim_id: c_ahXNuv4k9UkEKKNgcpB3RJ
          source_id: s_ou1a8H9Fx3iJMMUBUbuv9B
          stance: supports
          locator: CBDB:341853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ou1a8H9Fx3iJMMUBUbuv9B
            source_type: api_record
            title: 中国历代人物传记资料库：王雲銘（CBDB 341853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341853&o=json
            external_identifier: CBDB:341853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZvxYycB9i2qmFaJJwvC9h
        subject_person_id: p_X97xBRoLx9Rvi3Fo7MA8B7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rBtz2nc7DYPMGFUSo9eb3k
          claim_id: c_kZvxYycB9i2qmFaJJwvC9h
          source_id: s_ou1a8H9Fx3iJMMUBUbuv9B
          stance: supports
          locator: CBDB:341853
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 清
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

# 王雲銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲銘，史料所见人物。本项目依据《中国历代人物传记资料库：王雲銘（CBDB 341853）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王雲銘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲銘（CBDB 341853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341853&o=json)
