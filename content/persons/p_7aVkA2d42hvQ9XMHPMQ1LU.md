---
schema: wang-person/v1
id: p_7aVkA2d42hvQ9XMHPMQ1LU
status: active
merged_into: null
display_name: 王文某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uAeHBn7fbsMK7GKfRGKiCh
        subject_person_id: p_7aVkA2d42hvQ9XMHPMQ1LU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kuFzNv9DQ6Mp4FsmVzS4j2
          claim_id: c_uAeHBn7fbsMK7GKfRGKiCh
          source_id: s_JiRnA7hiPyLCuYPCKCSKy5
          stance: supports
          locator: CBDB:186204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186204）
          source: &a1
            id: s_JiRnA7hiPyLCuYPCKCSKy5
            source_type: api_record
            title: 中国历代人物传记资料库：王文某（CBDB 186204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186204&o=json
            external_identifier: CBDB:186204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JugGwLFsxv5mpq9FumB1hH
        subject_person_id: p_7aVkA2d42hvQ9XMHPMQ1LU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 891年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cz3zqiyH9hCfiiDWHDistg
          claim_id: c_JugGwLFsxv5mpq9FumB1hH
          source_id: s_JiRnA7hiPyLCuYPCKCSKy5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_garwLBQADaSJq2Fwa3EWsB
        subject_person_id: p_7aVkA2d42hvQ9XMHPMQ1LU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文某（卒于891年），史料所见人物。本项目依据《中国历代人物传记资料库：王文某（CBDB 186204）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UPzjv8TMddgBD5vmJSe4FJ
          claim_id: c_garwLBQADaSJq2Fwa3EWsB
          source_id: s_JiRnA7hiPyLCuYPCKCSKy5
          stance: supports
          locator: CBDB:186204
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

# 王文某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文某 | accepted |
| death.date | 891年 | accepted |
| bio.summary | 王文某（卒于891年），史料所见人物。本项目依据《中国历代人物传记资料库：王文某（CBDB 186204）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文某（CBDB 186204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186204&o=json)
