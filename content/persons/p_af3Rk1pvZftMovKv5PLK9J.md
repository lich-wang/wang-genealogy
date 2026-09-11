---
schema: wang-person/v1
id: p_af3Rk1pvZftMovKv5PLK9J
status: active
merged_into: null
display_name: 王瑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_39kGZbRedjYR7iDsU8GMHR
        subject_person_id: p_af3Rk1pvZftMovKv5PLK9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ebixwy7oW5kYKXn8a1sF6B
          claim_id: c_39kGZbRedjYR7iDsU8GMHR
          source_id: s_qRfiKdmFen1GkJzLZSCwS9
          stance: supports
          locator: CBDB:100995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100995）
          source: &a1
            id: s_qRfiKdmFen1GkJzLZSCwS9
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 100995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100995&o=json
            external_identifier: CBDB:100995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2YCW41RnJmVTaEdCJYyU7L
        subject_person_id: p_af3Rk1pvZftMovKv5PLK9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾，元人物。曾任路經歷。（中国历代人物传记资料库 CBDB 100995）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UVa1fp0y4MywMl8nB0BxJB
          claim_id: c_2YCW41RnJmVTaEdCJYyU7L
          source_id: s_qRfiKdmFen1GkJzLZSCwS9
          stance: supports
          locator: CBDB:100995
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

# 王瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑾 | accepted |
| bio.summary | 王瑾，元人物。曾任路經歷。（中国历代人物传记资料库 CBDB 100995） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑾（CBDB 100995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100995&o=json)
