---
schema: wang-person/v1
id: p_AyFEYxBfHcB43tnUJ49an6
status: active
merged_into: null
display_name: 王興國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8La21dyt5AxxUjpEeRdQL
        subject_person_id: p_AyFEYxBfHcB43tnUJ49an6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_skdYz6vp8DQGai5SVuhwa3
          claim_id: c_q8La21dyt5AxxUjpEeRdQL
          source_id: s_b3PGMUZBD3s4FyCeFJDsin
          stance: supports
          locator: CBDB:640030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640030）
          source: &a1
            id: s_b3PGMUZBD3s4FyCeFJDsin
            source_type: api_record
            title: 中国历代人物传记资料库：王興國（CBDB 640030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640030&o=json
            external_identifier: CBDB:640030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p3AvxP2c7LQ52nkRB2qKF3
        subject_person_id: p_AyFEYxBfHcB43tnUJ49an6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興國，清人物。籍贯沅陵，入仕恩蔭、蔭補，曾任知州。（中国历代人物传记资料库 CBDB 640030）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qq5oihXUdK0dLmiGgxi6TW
          claim_id: c_p3AvxP2c7LQ52nkRB2qKF3
          source_id: s_b3PGMUZBD3s4FyCeFJDsin
          stance: supports
          locator: CBDB:640030
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

# 王興國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興國 | accepted |
| bio.summary | 王興國，清人物。籍贯沅陵，入仕恩蔭、蔭補，曾任知州。（中国历代人物传记资料库 CBDB 640030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興國（CBDB 640030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640030&o=json)
