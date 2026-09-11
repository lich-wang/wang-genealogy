---
schema: wang-person/v1
id: p_NpdkdEmAFR4uKTD4g6Qb8L
status: active
merged_into: null
display_name: 王瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8eN9NFSG82kr7cYkB1jbS4
        subject_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cqiJeJH3uq5BzJEvXoVbGM
          claim_id: c_8eN9NFSG82kr7cYkB1jbS4
          source_id: s_tQEvoP2dZjWJrXAmobvcCX
          stance: supports
          locator: CBDB:244702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244702）
          source: &a1
            id: s_tQEvoP2dZjWJrXAmobvcCX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 244702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json
            external_identifier: CBDB:244702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RyCWjXGWhnGqyo7WnQGcH
        subject_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z_E9SCyFSRP2MAmMOTnSX8
          claim_id: c_2RyCWjXGWhnGqyo7WnQGcH
          source_id: s_tQEvoP2dZjWJrXAmobvcCX
          stance: supports
          locator: CBDB:244702
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

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | 王瑤，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 244702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json)
