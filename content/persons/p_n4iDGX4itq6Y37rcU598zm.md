---
schema: wang-person/v1
id: p_n4iDGX4itq6Y37rcU598zm
status: active
merged_into: null
display_name: 王裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5fSHEzX17m58bdFzKmJXCv
        subject_person_id: p_n4iDGX4itq6Y37rcU598zm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z4ToA9q65AUC4hHmtQMEaU
          claim_id: c_5fSHEzX17m58bdFzKmJXCv
          source_id: s_JXB5H7b4MLwSQJLQao9UQP
          stance: supports
          locator: CBDB:100884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100884）
          source: &a1
            id: s_JXB5H7b4MLwSQJLQao9UQP
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 100884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100884&o=json
            external_identifier: CBDB:100884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LD8Y1R72QWVeLVWkLFxhUD
        subject_person_id: p_n4iDGX4itq6Y37rcU598zm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕，元人物。身份为鄉先生，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 100884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yHCZfLnWOu1c7d9Zi1mgnr
          claim_id: c_LD8Y1R72QWVeLVWkLFxhUD
          source_id: s_JXB5H7b4MLwSQJLQao9UQP
          stance: supports
          locator: CBDB:100884
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

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| bio.summary | 王裕，元人物。身份为鄉先生，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 100884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕（CBDB 100884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100884&o=json)
