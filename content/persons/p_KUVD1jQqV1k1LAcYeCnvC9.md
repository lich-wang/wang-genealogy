---
schema: wang-person/v1
id: p_KUVD1jQqV1k1LAcYeCnvC9
status: active
merged_into: null
display_name: 王世纓
cbdb_id: 413723
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9LF4xgtPiWtyLiGf7jFfDn
        subject_person_id: p_KUVD1jQqV1k1LAcYeCnvC9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世纓，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 413723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rF0Be2lwVdb_zAST6X6sFt
          claim_id: c_9LF4xgtPiWtyLiGf7jFfDn
          source_id: s_pxpYwGQ2iWu3Q5HQt59HwY
          stance: supports
          locator: CBDB:413723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pxpYwGQ2iWu3Q5HQt59HwY
            source_type: api_record
            title: 中国历代人物传记资料库：王世纓（CBDB 413723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413723&o=json
            external_identifier: CBDB:413723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H12f2UvDdbcKmkaCKCcseE
        subject_person_id: p_KUVD1jQqV1k1LAcYeCnvC9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世纓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JB2Z3LJB4iQMWmgN64JERb
          claim_id: c_H12f2UvDdbcKmkaCKCcseE
          source_id: s_pxpYwGQ2iWu3Q5HQt59HwY
          stance: supports
          locator: CBDB:413723
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 清
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

# 王世纓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世纓，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 413723） | accepted |
| name.primary | 王世纓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世纓（CBDB 413723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413723&o=json)
