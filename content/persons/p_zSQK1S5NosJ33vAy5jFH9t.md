---
schema: wang-person/v1
id: p_zSQK1S5NosJ33vAy5jFH9t
status: active
merged_into: null
display_name: 王用中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y2nkqGVvwQnc8b3o17KiSN
        subject_person_id: p_zSQK1S5NosJ33vAy5jFH9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K6s95aWZLx9nLzMyAyGb7c
          claim_id: c_Y2nkqGVvwQnc8b3o17KiSN
          source_id: s_xA9yGkBHdw6Rb1rBX2RVvF
          stance: supports
          locator: CBDB:297802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297802）
          source: &a1
            id: s_xA9yGkBHdw6Rb1rBX2RVvF
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 297802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297802&o=json
            external_identifier: CBDB:297802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8WkQ2yUDUMdX65n6u1QLGP
        subject_person_id: p_zSQK1S5NosJ33vAy5jFH9t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wz9XygHGvBRTFo9AJbtSv9
          claim_id: c_8WkQ2yUDUMdX65n6u1QLGP
          source_id: s_xA9yGkBHdw6Rb1rBX2RVvF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_CTnwwlXWsrraKZRrsY5rdS
        subject_person_id: p_zSQK1S5NosJ33vAy5jFH9t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n0yHu4JsjD1QNwZZm4nh0Q
          claim_id: c_CTnwwlXWsrraKZRrsY5rdS
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nScnB9r5mRQFv6y1VT1PM
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 67719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json
            external_identifier: CBDB:67719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
  other: []
---

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用中（CBDB 297802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297802&o=json)
- [中国历代人物传记资料库：王淵（CBDB 67719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json)
