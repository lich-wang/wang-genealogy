---
schema: wang-person/v1
id: p_Xy8FGxRiKdvBmwvq3F6Ruv
status: active
merged_into: null
display_name: 王黨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_23Jh7WgP9VTrGc4xP8eJxx
        subject_person_id: p_Xy8FGxRiKdvBmwvq3F6Ruv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eK5y49fJjWTNAjuPnT1qEu
          claim_id: c_23Jh7WgP9VTrGc4xP8eJxx
          source_id: s_uYBe5QC2B9gssCTYVS7kJv
          stance: supports
          locator: CBDB:462505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462505）
          source: &a1
            id: s_uYBe5QC2B9gssCTYVS7kJv
            source_type: api_record
            title: 中国历代人物传记资料库：王黨（CBDB 462505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462505&o=json
            external_identifier: CBDB:462505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMR94FMx5FDDsdZ5RLpkq8
        subject_person_id: p_Xy8FGxRiKdvBmwvq3F6Ruv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黨，史料所见人物。本项目依据《中国历代人物传记资料库：王黨（CBDB 462505）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5zyvRqMTMdsKMwPRGC4a_w
          claim_id: c_NMR94FMx5FDDsdZ5RLpkq8
          source_id: s_uYBe5QC2B9gssCTYVS7kJv
          stance: supports
          locator: CBDB:462505
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

# 王黨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王黨 | accepted |
| bio.summary | 王黨，史料所见人物。本项目依据《中国历代人物传记资料库：王黨（CBDB 462505）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王黨（CBDB 462505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462505&o=json)
