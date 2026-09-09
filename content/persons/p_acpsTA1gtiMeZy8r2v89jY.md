---
schema: wang-person/v1
id: p_acpsTA1gtiMeZy8r2v89jY
status: active
merged_into: null
display_name: 王高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pU7un17eVzCs7uMdRWB7HT
        subject_person_id: p_acpsTA1gtiMeZy8r2v89jY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBYXNW8svpShHYKkZ6tF28
          claim_id: c_pU7un17eVzCs7uMdRWB7HT
          source_id: s_a3Qqon3w444ca3qTttWmY6
          stance: supports
          locator: CBDB:163017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163017）
          source: &a1
            id: s_a3Qqon3w444ca3qTttWmY6
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 163017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163017&o=json
            external_identifier: CBDB:163017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QE1qoNE5oKdERHJfNf25CB
        subject_person_id: p_acpsTA1gtiMeZy8r2v89jY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KP6QboHmbeaU6QsPaQPju
          claim_id: c_QE1qoNE5oKdERHJfNf25CB
          source_id: s_a3Qqon3w444ca3qTttWmY6
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

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 163017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163017&o=json)
