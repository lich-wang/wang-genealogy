---
schema: wang-person/v1
id: p_P5M46m1Mw5k2a2dXBEFb6M
status: active
merged_into: null
display_name: 王嘉亭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m4MuYFtaqP4mAfA6u8ysZi
        subject_person_id: p_P5M46m1Mw5k2a2dXBEFb6M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉亭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1axPYe5sef2qaQB8qauJ7Q
          claim_id: c_m4MuYFtaqP4mAfA6u8ysZi
          source_id: s_kui8Cz9qBqTrj2j7B1Dmfy
          stance: supports
          locator: CBDB:636606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636606）
          source: &a1
            id: s_kui8Cz9qBqTrj2j7B1Dmfy
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉亭（CBDB 636606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636606&o=json
            external_identifier: CBDB:636606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y9t5TK1MRtFvckJojKHr6j
        subject_person_id: p_P5M46m1Mw5k2a2dXBEFb6M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hm7KZyWGjPMNJ16xhBu3pu
          claim_id: c_y9t5TK1MRtFvckJojKHr6j
          source_id: s_kui8Cz9qBqTrj2j7B1Dmfy
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

# 王嘉亭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉亭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉亭（CBDB 636606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636606&o=json)
