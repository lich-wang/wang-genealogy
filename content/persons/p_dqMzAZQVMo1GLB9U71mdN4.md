---
schema: wang-person/v1
id: p_dqMzAZQVMo1GLB9U71mdN4
status: active
merged_into: null
display_name: 王策範
cbdb_id: 343870
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yhJPMArR4LSL8vwGmG4dWB
        subject_person_id: p_dqMzAZQVMo1GLB9U71mdN4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王策範，史料所见人物。本项目依据《中国历代人物传记资料库：王策範（CBDB 343870）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_M75negPrgdUkAn525ChoM9
          claim_id: c_yhJPMArR4LSL8vwGmG4dWB
          source_id: s_wN7WQZJenvL84mSBL18rpk
          stance: supports
          locator: CBDB:343870
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wN7WQZJenvL84mSBL18rpk
            source_type: api_record
            title: 中国历代人物传记资料库：王策範（CBDB 343870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343870&o=json
            external_identifier: CBDB:343870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7HpGmBRC3vmKuVFo15Ldf
        subject_person_id: p_dqMzAZQVMo1GLB9U71mdN4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王策範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ntnsNoLV3rhbfj5a4sTAqx
          claim_id: c_P7HpGmBRC3vmKuVFo15Ldf
          source_id: s_wN7WQZJenvL84mSBL18rpk
          stance: supports
          locator: CBDB:343870
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4701-4800）｜历史性依据：CBDB 朝代 = 清
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

# 王策範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王策範，史料所见人物。本项目依据《中国历代人物传记资料库：王策範（CBDB 343870）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王策範 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王策範（CBDB 343870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343870&o=json)
