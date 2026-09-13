---
schema: wang-person/v1
id: p_BzEPVYZq4BcQRPAxGnYNHk
status: active
merged_into: null
display_name: 王完者
cbdb_id: 453958
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R3V6QQkFQkkRtvehGnB4nP
        subject_person_id: p_BzEPVYZq4BcQRPAxGnYNHk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完者，史料所见人物。本项目依据《中国历代人物传记资料库：王完者（CBDB 453958）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ONaABEt81WpXnH2cpJOpE-
          claim_id: c_R3V6QQkFQkkRtvehGnB4nP
          source_id: s_bsLvPsxXsAh7o6h1XmHvUk
          stance: supports
          locator: CBDB:453958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bsLvPsxXsAh7o6h1XmHvUk
            source_type: api_record
            title: 中国历代人物传记资料库：王完者（CBDB 453958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453958&o=json
            external_identifier: CBDB:453958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GF8HeEcwCuvsKBfNn549x9
        subject_person_id: p_BzEPVYZq4BcQRPAxGnYNHk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完者
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ee6X7P6gY1PqMdBHXgL6L2
          claim_id: c_GF8HeEcwCuvsKBfNn549x9
          source_id: s_bsLvPsxXsAh7o6h1XmHvUk
          stance: supports
          locator: CBDB:453958
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 元
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

# 王完者

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王完者，史料所见人物。本项目依据《中国历代人物传记资料库：王完者（CBDB 453958）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王完者 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王完者（CBDB 453958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453958&o=json)
