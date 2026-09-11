---
schema: wang-person/v1
id: p_by2LxYZRbRs5p9tL2RP9WH
status: active
merged_into: null
display_name: 王德祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1v7JyPdqe8cXCPaSW6B5NZ
        subject_person_id: p_by2LxYZRbRs5p9tL2RP9WH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wu1twUHJV9oWNQFHMUa52N
          claim_id: c_1v7JyPdqe8cXCPaSW6B5NZ
          source_id: s_v94mcPjhaBddMGZGsoBCPc
          stance: supports
          locator: CBDB:637700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637700）
          source: &a1
            id: s_v94mcPjhaBddMGZGsoBCPc
            source_type: api_record
            title: 中国历代人物传记资料库：王德祿（CBDB 637700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637700&o=json
            external_identifier: CBDB:637700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HfUQpKTKrkpBwGjMZ2r629
        subject_person_id: p_by2LxYZRbRs5p9tL2RP9WH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德祿，清人物。籍贯城固，入仕廩貢生，曾任縣丞。（中国历代人物传记资料库 CBDB 637700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FGastOIaIqQ9uOTzt5OLg4
          claim_id: c_HfUQpKTKrkpBwGjMZ2r629
          source_id: s_v94mcPjhaBddMGZGsoBCPc
          stance: supports
          locator: CBDB:637700
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

# 王德祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德祿 | accepted |
| bio.summary | 王德祿，清人物。籍贯城固，入仕廩貢生，曾任縣丞。（中国历代人物传记资料库 CBDB 637700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德祿（CBDB 637700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637700&o=json)
