---
schema: wang-person/v1
id: p_BDy7i3QuPsbyTK8Fcj3xSF
status: active
merged_into: null
display_name: 王守坤
cbdb_id: 439473
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MxhdtzCUm7MZpy7U5VV5FR
        subject_person_id: p_BDy7i3QuPsbyTK8Fcj3xSF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守坤（生于1709年），史料所见人物。本项目依据《中国历代人物传记资料库：王守坤（CBDB 439473）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_3o_5ty92uqPcXK6gcNLynT
          claim_id: c_MxhdtzCUm7MZpy7U5VV5FR
          source_id: s_qCRmMQMxf2gQ6MrWCsuQwi
          stance: supports
          locator: CBDB:439473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qCRmMQMxf2gQ6MrWCsuQwi
            source_type: api_record
            title: 中国历代人物传记资料库：王守坤（CBDB 439473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439473&o=json
            external_identifier: CBDB:439473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PysWqswWTCM2FqUGnK8kmv
        subject_person_id: p_BDy7i3QuPsbyTK8Fcj3xSF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1709年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1709-01-01
            latest: 1709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ova9a22BecU4FdTETgCYUr
          claim_id: c_PysWqswWTCM2FqUGnK8kmv
          source_id: s_qCRmMQMxf2gQ6MrWCsuQwi
          stance: supports
          locator: CBDB:439473
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1709
          source:
            id: s_qCRmMQMxf2gQ6MrWCsuQwi
            source_type: api_record
            title: 中国历代人物传记资料库：王守坤（CBDB 439473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439473&o=json
            external_identifier: CBDB:439473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_67poFFocgDLjoJEHEMLmpk
        subject_person_id: p_BDy7i3QuPsbyTK8Fcj3xSF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ri2nByTC9QmC95c3jWq4kW
          claim_id: c_67poFFocgDLjoJEHEMLmpk
          source_id: s_qCRmMQMxf2gQ6MrWCsuQwi
          stance: supports
          locator: CBDB:439473
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1709
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

# 王守坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守坤（生于1709年），史料所见人物。本项目依据《中国历代人物传记资料库：王守坤（CBDB 439473）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1709年 | accepted |
| name.primary | 王守坤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守坤（CBDB 439473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439473&o=json)
