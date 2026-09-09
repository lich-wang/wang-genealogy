---
schema: wang-person/v1
id: p_9esUYZvNqsWNd3UXAh8qx5
status: active
merged_into: null
display_name: 王縝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82BJCc2ZBNAULgmj2PCmRE
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgYdA7vtbUJQJVe77a4i8e
          claim_id: c_82BJCc2ZBNAULgmj2PCmRE
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: CBDB:68275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68275）
          source: &a1
            id: s_8nUwjmnF5xTmqZCNqzBRAK
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_38TyjmXJKsNjZPQF3owgAy
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1463年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6A3cg27YA8bK6FAyijxA29
          claim_id: c_38TyjmXJKsNjZPQF3owgAy
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
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
        id: c_ijr3s7cgMr7q75rjXBLn6F
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3cyZCN6rAbM9HYc8HNuERC
          claim_id: c_ijr3s7cgMr7q75rjXBLn6F
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
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
        id: c_GDUGK4gxd9f9guswMm312x
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
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
        - id: cs_eLMx59GFXLRvEg2wephAn4
          claim_id: c_GDUGK4gxd9f9guswMm312x
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
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

# 王縝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縝 | accepted |
| birth.date | 1463年 | accepted |
| death.date | 1523年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縝（CBDB 68275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json)
