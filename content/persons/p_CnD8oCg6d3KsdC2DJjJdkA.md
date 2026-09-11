---
schema: wang-person/v1
id: p_CnD8oCg6d3KsdC2DJjJdkA
status: active
merged_into: null
display_name: 王之鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_om4oxhoPLxDdczgFxbcvxX
        subject_person_id: p_CnD8oCg6d3KsdC2DJjJdkA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T9otzTwN5rnmKN2FjUbHc8
          claim_id: c_om4oxhoPLxDdczgFxbcvxX
          source_id: s_7A99SB5S7bYhwFyHFdCGzx
          stance: supports
          locator: CBDB:476672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476672）
          source: &a1
            id: s_7A99SB5S7bYhwFyHFdCGzx
            source_type: api_record
            title: 中国历代人物传记资料库：王之鼎（CBDB 476672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476672&o=json
            external_identifier: CBDB:476672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65nJ22Z67Bi3RgjQytAwuY
        subject_person_id: p_CnD8oCg6d3KsdC2DJjJdkA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鼎，明人物。曾任參將。（中国历代人物传记资料库 CBDB 476672）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uk8A4tkZbtWcOhZ5dNGb2I
          claim_id: c_65nJ22Z67Bi3RgjQytAwuY
          source_id: s_7A99SB5S7bYhwFyHFdCGzx
          stance: supports
          locator: CBDB:476672
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

# 王之鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鼎 | accepted |
| bio.summary | 王之鼎，明人物。曾任參將。（中国历代人物传记资料库 CBDB 476672） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之鼎（CBDB 476672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476672&o=json)
