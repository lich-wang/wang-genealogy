---
schema: wang-person/v1
id: p_yMaA4CmZh9RAw9kLQycP1M
status: active
merged_into: null
display_name: 王應聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4aAn4Y73baneJnMsohkmW
        subject_person_id: p_yMaA4CmZh9RAw9kLQycP1M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_adULjZLXaGMU8nTkzkJDEw
          claim_id: c_H4aAn4Y73baneJnMsohkmW
          source_id: s_hDgQok1DBeKZmzBPc9RNcp
          stance: supports
          locator: CBDB:312625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312625）
          source: &a1
            id: s_hDgQok1DBeKZmzBPc9RNcp
            source_type: api_record
            title: 中国历代人物传记资料库：王應聘（CBDB 312625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312625&o=json
            external_identifier: CBDB:312625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Y1x8D5k19Lrgd6M2eopq8
        subject_person_id: p_yMaA4CmZh9RAw9kLQycP1M
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
        - id: cs_tdpDt3HfE9KxMzKm6T9NVc
          claim_id: c_4Y1x8D5k19Lrgd6M2eopq8
          source_id: s_hDgQok1DBeKZmzBPc9RNcp
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

# 王應聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應聘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應聘（CBDB 312625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312625&o=json)
