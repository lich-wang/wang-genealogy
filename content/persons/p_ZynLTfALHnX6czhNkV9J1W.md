---
schema: wang-person/v1
id: p_ZynLTfALHnX6czhNkV9J1W
status: active
merged_into: null
display_name: 王璣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d3zmfeTTBjQqwBFZu3HtUs
        subject_person_id: p_ZynLTfALHnX6czhNkV9J1W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xJQCCDAoKqXVL8T8P8YEKv
          claim_id: c_d3zmfeTTBjQqwBFZu3HtUs
          source_id: s_K2ws3Q1ka8Jh8xvzzHMjy5
          stance: supports
          locator: CBDB:500451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500451）
          source: &a1
            id: s_K2ws3Q1ka8Jh8xvzzHMjy5
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 500451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500451&o=json
            external_identifier: CBDB:500451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K1RPBoE5ftdVw7AoGbN9XK
        subject_person_id: p_ZynLTfALHnX6czhNkV9J1W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣，清人物。入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 500451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Or-_RTUl3UKH8zVqrAFZiG
          claim_id: c_K1RPBoE5ftdVw7AoGbN9XK
          source_id: s_K2ws3Q1ka8Jh8xvzzHMjy5
          stance: supports
          locator: CBDB:500451
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

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | 王璣，清人物。入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 500451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 500451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500451&o=json)
