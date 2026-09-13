---
schema: wang-person/v1
id: p_oWugPyGUAqLAbUqc22RLQq
status: active
merged_into: null
display_name: 王希召
cbdb_id: 229380
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v1cGmoqaiS68AT5pmmFYvf
        subject_person_id: p_oWugPyGUAqLAbUqc22RLQq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希召，史料所见人物。本项目依据《中国历代人物传记资料库：王希召（CBDB 229380）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_dfspqs0SFV3CgP-km1-DE5
          claim_id: c_v1cGmoqaiS68AT5pmmFYvf
          source_id: s_AY23XTErFHUEaDr9VvYzhQ
          stance: supports
          locator: CBDB:229380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AY23XTErFHUEaDr9VvYzhQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希召（CBDB 229380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json
            external_identifier: CBDB:229380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRivzwNKWx9qo5gdNAmK3p
        subject_person_id: p_oWugPyGUAqLAbUqc22RLQq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GdR5AqcGXa2SzAwzq2yrm4
          claim_id: c_GRivzwNKWx9qo5gdNAmK3p
          source_id: s_AY23XTErFHUEaDr9VvYzhQ
          stance: supports
          locator: CBDB:229380
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
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

# 王希召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希召，史料所见人物。本项目依据《中国历代人物传记资料库：王希召（CBDB 229380）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王希召 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希召（CBDB 229380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json)
