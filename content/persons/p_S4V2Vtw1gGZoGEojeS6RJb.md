---
schema: wang-person/v1
id: p_S4V2Vtw1gGZoGEojeS6RJb
status: active
merged_into: null
display_name: 王瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkMUEhG279QTfRR3z1V9Ra
        subject_person_id: p_S4V2Vtw1gGZoGEojeS6RJb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ivTAX6a3mnxRwvMzkwEtY
          claim_id: c_vkMUEhG279QTfRR3z1V9Ra
          source_id: s_6xuhER7mbZSuT3B96rVrs7
          stance: supports
          locator: CBDB:100871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100871）
          source: &a1
            id: s_6xuhER7mbZSuT3B96rVrs7
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 100871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100871&o=json
            external_identifier: CBDB:100871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJmSkqCuqYaYvEFJMZgQXP
        subject_person_id: p_S4V2Vtw1gGZoGEojeS6RJb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，元人物。曾任諸路總管府總管。（中国历代人物传记资料库 CBDB 100871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBZcG9Pjpbv6HixTCysX6b
          claim_id: c_LJmSkqCuqYaYvEFJMZgQXP
          source_id: s_6xuhER7mbZSuT3B96rVrs7
          stance: supports
          locator: CBDB:100871
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

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，元人物。曾任諸路總管府總管。（中国历代人物传记资料库 CBDB 100871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 100871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100871&o=json)
