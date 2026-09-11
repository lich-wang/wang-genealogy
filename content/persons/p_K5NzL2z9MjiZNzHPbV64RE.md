---
schema: wang-person/v1
id: p_K5NzL2z9MjiZNzHPbV64RE
status: active
merged_into: null
display_name: 王善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_22QYPxBLYuJkUK13tFJQNF
        subject_person_id: p_K5NzL2z9MjiZNzHPbV64RE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xFXEGVzeRXsXEuiWEcmG4m
          claim_id: c_22QYPxBLYuJkUK13tFJQNF
          source_id: s_4aA96wBnbbGq6dKNEHZofV
          stance: supports
          locator: CBDB:279348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279348）
          source: &a1
            id: s_4aA96wBnbbGq6dKNEHZofV
            source_type: api_record
            title: 中国历代人物传记资料库：王善（CBDB 279348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279348&o=json
            external_identifier: CBDB:279348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ousKgG1xapc46euqH3oms
        subject_person_id: p_K5NzL2z9MjiZNzHPbV64RE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uVPXCoT-LVz8xlQ2WYvC7J
          claim_id: c_6ousKgG1xapc46euqH3oms
          source_id: s_4aA96wBnbbGq6dKNEHZofV
          stance: supports
          locator: CBDB:279348
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

# 王善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善 | accepted |
| bio.summary | 王善，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善（CBDB 279348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279348&o=json)
