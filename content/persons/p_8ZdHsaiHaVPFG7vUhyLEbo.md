---
schema: wang-person/v1
id: p_8ZdHsaiHaVPFG7vUhyLEbo
status: active
merged_into: null
display_name: 王夢賚
cbdb_id: 414191
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VghJ9Lu9c2rqgK55F5mf72
        subject_person_id: p_8ZdHsaiHaVPFG7vUhyLEbo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢賚，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Qwdz0KcPp9DhUlzibJXRKV
          claim_id: c_VghJ9Lu9c2rqgK55F5mf72
          source_id: s_m71o7dCS5bXVUNcEcwtyth
          stance: supports
          locator: CBDB:414191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m71o7dCS5bXVUNcEcwtyth
            source_type: api_record
            title: 中国历代人物传记资料库：王夢賚（CBDB 414191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414191&o=json
            external_identifier: CBDB:414191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:30.615Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BpCM55M33XSVa6JQs5gYA3
        subject_person_id: p_8ZdHsaiHaVPFG7vUhyLEbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢賚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8KW4TtfBbuVFvkCAiQqZez
          claim_id: c_BpCM55M33XSVa6JQs5gYA3
          source_id: s_m71o7dCS5bXVUNcEcwtyth
          stance: supports
          locator: CBDB:414191
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

# 王夢賚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢賚，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414191） | accepted |
| name.primary | 王夢賚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢賚（CBDB 414191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414191&o=json)
