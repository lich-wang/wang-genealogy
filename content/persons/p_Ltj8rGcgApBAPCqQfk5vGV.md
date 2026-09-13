---
schema: wang-person/v1
id: p_Ltj8rGcgApBAPCqQfk5vGV
status: active
merged_into: null
display_name: 王釜
cbdb_id: 445663
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T4yFoz9ALhHR8EepA4V8Mp
        subject_person_id: p_Ltj8rGcgApBAPCqQfk5vGV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釜，史料所见人物。本项目依据《中国历代人物传记资料库：王釜（CBDB 445663）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wQezN2unSrOKXalmOPrG59
          claim_id: c_T4yFoz9ALhHR8EepA4V8Mp
          source_id: s_Sz4TyiPUx5B4za8EVvPcRE
          stance: supports
          locator: CBDB:445663
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Sz4TyiPUx5B4za8EVvPcRE
            source_type: api_record
            title: 中国历代人物传记资料库：王釜（CBDB 445663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445663&o=json
            external_identifier: CBDB:445663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eHQBgRucsb445rdy81ZN66
        subject_person_id: p_Ltj8rGcgApBAPCqQfk5vGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R1fXGAdj9Dv2KCW97Xpy1C
          claim_id: c_eHQBgRucsb445rdy81ZN66
          source_id: s_Sz4TyiPUx5B4za8EVvPcRE
          stance: supports
          locator: CBDB:445663
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 唐
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

# 王釜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王釜，史料所见人物。本项目依据《中国历代人物传记资料库：王釜（CBDB 445663）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王釜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釜（CBDB 445663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445663&o=json)
