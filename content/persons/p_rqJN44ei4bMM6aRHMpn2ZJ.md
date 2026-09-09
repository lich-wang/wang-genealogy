---
schema: wang-person/v1
id: p_rqJN44ei4bMM6aRHMpn2ZJ
status: active
merged_into: null
display_name: 王保
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YWA5UuKRCsqpghxrEdJx2V
        subject_person_id: p_rqJN44ei4bMM6aRHMpn2ZJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ne7PULjyD6r6jvVsCmbXzU
          claim_id: c_YWA5UuKRCsqpghxrEdJx2V
          source_id: s_2FmT9D5q1tK14hs3zMx7mf
          stance: supports
          locator: CBDB:23282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23282）
          source: &a1
            id: s_2FmT9D5q1tK14hs3zMx7mf
            source_type: api_record
            title: 中国历代人物传记资料库：王保（CBDB 23282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23282&o=json
            external_identifier: CBDB:23282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQyB2SiN7sFYr41L7qKAWY
        subject_person_id: p_rqJN44ei4bMM6aRHMpn2ZJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oJrWq1iLQc5BKH52TeUng
          claim_id: c_EQyB2SiN7sFYr41L7qKAWY
          source_id: s_2FmT9D5q1tK14hs3zMx7mf
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
  descendants: []
  other: []
---

# 王保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保（CBDB 23282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23282&o=json)
