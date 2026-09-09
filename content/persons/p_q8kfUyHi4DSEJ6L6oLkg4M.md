---
schema: wang-person/v1
id: p_q8kfUyHi4DSEJ6L6oLkg4M
status: active
merged_into: null
display_name: 王問臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ra3hbJ9KJH3Nyh8TA9gMa4
        subject_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N2E775gqJM8E8nqDwU5LRn
          claim_id: c_Ra3hbJ9KJH3Nyh8TA9gMa4
          source_id: s_2FP7ZStG4B87K5DUCTZJDQ
          stance: supports
          locator: CBDB:205162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205162）
          source: &a1
            id: s_2FP7ZStG4B87K5DUCTZJDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王問臣（CBDB 205162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205162&o=json
            external_identifier: CBDB:205162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZBwXhvg6mW3LZRnPSJMGr6
        subject_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23rN3rRXZV5unKjQmc3o5x
          claim_id: c_ZBwXhvg6mW3LZRnPSJMGr6
          source_id: s_2FP7ZStG4B87K5DUCTZJDQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6oiKV6pD4KqJXVXaCwaNx
        subject_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
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
        - id: cs_h6DTo3JjyvmmtZvXEvzMba
          claim_id: c_k6oiKV6pD4KqJXVXaCwaNx
          source_id: s_2FP7ZStG4B87K5DUCTZJDQ
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

# 王問臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問臣 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問臣（CBDB 205162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205162&o=json)
