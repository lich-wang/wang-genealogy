---
schema: wang-person/v1
id: p_Dyyvi2JC7zevVyEWYQc8wE
status: active
merged_into: null
display_name: 王曰高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1tFRWDubJR9jmK4U126Ah
        subject_person_id: p_Dyyvi2JC7zevVyEWYQc8wE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dt72qs6D9bTgJp9HQVNi4T
          claim_id: c_S1tFRWDubJR9jmK4U126Ah
          source_id: s_8saDMCA3fBQmV9bkyyVoxi
          stance: supports
          locator: CBDB:343410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343410）
          source: &a1
            id: s_8saDMCA3fBQmV9bkyyVoxi
            source_type: api_record
            title: 中国历代人物传记资料库：王曰高（CBDB 343410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343410&o=json
            external_identifier: CBDB:343410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7oVF1DF5jmv5DzmZr1ABDd
        subject_person_id: p_Dyyvi2JC7zevVyEWYQc8wE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰高，清人物。明清進士進士，籍贯茬平，入仕進士，曾任工科給事中、鄉試考官。（中国历代人物传记资料库 CBDB 343410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-IX1aL4gC3WP05RIfbmQ2V
          claim_id: c_7oVF1DF5jmv5DzmZr1ABDd
          source_id: s_8saDMCA3fBQmV9bkyyVoxi
          stance: supports
          locator: CBDB:343410
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

# 王曰高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰高 | accepted |
| bio.summary | 王曰高，清人物。明清進士進士，籍贯茬平，入仕進士，曾任工科給事中、鄉試考官。（中国历代人物传记资料库 CBDB 343410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰高（CBDB 343410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343410&o=json)
