---
schema: wang-person/v1
id: p_4DQY2697bNxe3GrYJjqMg8
status: active
merged_into: null
display_name: 王世良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ihXMAQ8ApR8b24RwUXWGQ2
        subject_person_id: p_4DQY2697bNxe3GrYJjqMg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QNxo3wEH9yAvo7hGnssEC7
          claim_id: c_ihXMAQ8ApR8b24RwUXWGQ2
          source_id: s_5EZG1ZASyjEcKgzYDD4DQt
          stance: supports
          locator: CBDB:505148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505148）
          source: &a1
            id: s_5EZG1ZASyjEcKgzYDD4DQt
            source_type: api_record
            title: 中国历代人物传记资料库：王世良（CBDB 505148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505148&o=json
            external_identifier: CBDB:505148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GWysBEgrjJqs9q4BZRrv9N
        subject_person_id: p_4DQY2697bNxe3GrYJjqMg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世良，宋人物。曾任巡檢使。（中国历代人物传记资料库 CBDB 505148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PmPxmOKPIiXNmL_iicb2Wk
          claim_id: c_GWysBEgrjJqs9q4BZRrv9N
          source_id: s_5EZG1ZASyjEcKgzYDD4DQt
          stance: supports
          locator: CBDB:505148
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

# 王世良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世良 | accepted |
| bio.summary | 王世良，宋人物。曾任巡檢使。（中国历代人物传记资料库 CBDB 505148） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世良（CBDB 505148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505148&o=json)
