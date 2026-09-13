---
schema: wang-person/v1
id: p_Z3TJqZFKE63AW2MTpKyWJR
status: active
merged_into: null
display_name: 王學遵
cbdb_id: 414269
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FfXsTP1vF9w2Pfe2TE4686
        subject_person_id: p_Z3TJqZFKE63AW2MTpKyWJR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學遵，清人物。曾任學正。（中国历代人物传记资料库 CBDB 414269）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FoEuiBc_jjFkkZ1J86kwHw
          claim_id: c_FfXsTP1vF9w2Pfe2TE4686
          source_id: s_sPgabegPTLZtjF7WnZiTRT
          stance: supports
          locator: CBDB:414269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sPgabegPTLZtjF7WnZiTRT
            source_type: api_record
            title: 中国历代人物传记资料库：王學遵（CBDB 414269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414269&o=json
            external_identifier: CBDB:414269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:30.615Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uXgBbV9ydsPSj3XXPuF7ix
        subject_person_id: p_Z3TJqZFKE63AW2MTpKyWJR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UyNjzPtLjXsH26EgW9PXxV
          claim_id: c_uXgBbV9ydsPSj3XXPuF7ix
          source_id: s_sPgabegPTLZtjF7WnZiTRT
          stance: supports
          locator: CBDB:414269
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5301-5400）｜历史性依据：CBDB 朝代 = 清
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

# 王學遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學遵，清人物。曾任學正。（中国历代人物传记资料库 CBDB 414269） | accepted |
| name.primary | 王學遵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學遵（CBDB 414269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414269&o=json)
