---
schema: wang-person/v1
id: p_jUPP8ymqrm3WKFbXvwE3CV
status: active
merged_into: null
display_name: 王虎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7MzennXbbEzzN7grQDNKn
        subject_person_id: p_jUPP8ymqrm3WKFbXvwE3CV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j1HhvtCZWc5GEN2FLwpKqb
          claim_id: c_T7MzennXbbEzzN7grQDNKn
          source_id: s_3KRqQ72MssQqhyGv24UyXc
          stance: supports
          locator: CBDB:462314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462314）
          source: &a1
            id: s_3KRqQ72MssQqhyGv24UyXc
            source_type: api_record
            title: 中国历代人物传记资料库：王虎（CBDB 462314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462314&o=json
            external_identifier: CBDB:462314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jT2LkdDZcCKsTZPmFm9f2C
        subject_person_id: p_jUPP8ymqrm3WKFbXvwE3CV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虎，清人物。曾任守備、營遊擊。（中国历代人物传记资料库 CBDB 462314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47LDsNMQfL9Fc5pvwje8Y7
          claim_id: c_jT2LkdDZcCKsTZPmFm9f2C
          source_id: s_3KRqQ72MssQqhyGv24UyXc
          stance: supports
          locator: CBDB:462314
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

# 王虎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虎 | accepted |
| bio.summary | 王虎，清人物。曾任守備、營遊擊。（中国历代人物传记资料库 CBDB 462314） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王虎（CBDB 462314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462314&o=json)
