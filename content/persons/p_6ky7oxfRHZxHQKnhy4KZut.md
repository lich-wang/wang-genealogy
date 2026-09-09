---
schema: wang-person/v1
id: p_6ky7oxfRHZxHQKnhy4KZut
status: active
merged_into: null
display_name: 王宗華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ukitEvf9ydPhtCu5Yzb3gu
        subject_person_id: p_6ky7oxfRHZxHQKnhy4KZut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tPbT7tyABWruGBoosEkbZ7
          claim_id: c_ukitEvf9ydPhtCu5Yzb3gu
          source_id: s_C54p3QE3w9wuQUz321zJ3H
          stance: supports
          locator: CBDB:71806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71806）
          source: &a1
            id: s_C54p3QE3w9wuQUz321zJ3H
            source_type: api_record
            title: 中国历代人物传记资料库：王宗華（CBDB 71806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71806&o=json
            external_identifier: CBDB:71806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9JkqLzVG9fupeujHyLeZDs
        subject_person_id: p_6ky7oxfRHZxHQKnhy4KZut
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUFmyPKWB5fkG76ZeLcydR
          claim_id: c_9JkqLzVG9fupeujHyLeZDs
          source_id: s_C54p3QE3w9wuQUz321zJ3H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WNwZeVHu1FWKeF6sayTJwK
        subject_person_id: p_6ky7oxfRHZxHQKnhy4KZut
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1717年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rMLTDz8ibJaoujpLt1Bu5Y
          claim_id: c_WNwZeVHu1FWKeF6sayTJwK
          source_id: s_C54p3QE3w9wuQUz321zJ3H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YQ7wMnPYtRcf8GGogHXJnH
        subject_person_id: p_6ky7oxfRHZxHQKnhy4KZut
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
        - id: cs_edTFHrMwBAbcFyweF7cJGg
          claim_id: c_YQ7wMnPYtRcf8GGogHXJnH
          source_id: s_C54p3QE3w9wuQUz321zJ3H
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

# 王宗華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗華 | accepted |
| birth.date | 1666年 | accepted |
| death.date | 1717年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗華（CBDB 71806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71806&o=json)
