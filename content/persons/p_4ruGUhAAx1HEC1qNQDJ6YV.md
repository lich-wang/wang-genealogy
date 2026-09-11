---
schema: wang-person/v1
id: p_4ruGUhAAx1HEC1qNQDJ6YV
status: active
merged_into: null
display_name: 王繡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CS4ppk5ULDLnUk7cq3PM2c
        subject_person_id: p_4ruGUhAAx1HEC1qNQDJ6YV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mf9btFqGCvgFbKvVLhUUjZ
          claim_id: c_CS4ppk5ULDLnUk7cq3PM2c
          source_id: s_Qu8JKDBGDRsK1NA1EtvBVf
          stance: supports
          locator: CBDB:492399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492399）
          source: &a1
            id: s_Qu8JKDBGDRsK1NA1EtvBVf
            source_type: api_record
            title: 中国历代人物传记资料库：王繡（CBDB 492399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492399&o=json
            external_identifier: CBDB:492399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_errMGWjH3rB7euy2eExxGH
        subject_person_id: p_4ruGUhAAx1HEC1qNQDJ6YV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 492399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_quhw30yZb41qnIB2XaYcZ4
          claim_id: c_errMGWjH3rB7euy2eExxGH
          source_id: s_Qu8JKDBGDRsK1NA1EtvBVf
          stance: supports
          locator: CBDB:492399
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

# 王繡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繡 | accepted |
| bio.summary | 王繡，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 492399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繡（CBDB 492399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492399&o=json)
