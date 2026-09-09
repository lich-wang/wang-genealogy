---
schema: wang-person/v1
id: p_2tQQbiMGFszWkvDF8QvDzV
status: active
merged_into: null
display_name: 王紳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Q7kRZ4gQy1qDfXXN69rxP
        subject_person_id: p_2tQQbiMGFszWkvDF8QvDzV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNnjoBCmew7Uujy3pqcKdY
          claim_id: c_5Q7kRZ4gQy1qDfXXN69rxP
          source_id: s_RrEjtT4UQdbCjSbh6msTjs
          stance: supports
          locator: CBDB:19902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19902）
          source: &a1
            id: s_RrEjtT4UQdbCjSbh6msTjs
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 19902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19902&o=json
            external_identifier: CBDB:19902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1UhKX8GEzFJV41TTPfJ1n1
        subject_person_id: p_2tQQbiMGFszWkvDF8QvDzV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为吳越人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w95Hqf8PieYF79zDo74nH9
          claim_id: c_1UhKX8GEzFJV41TTPfJ1n1
          source_id: s_RrEjtT4UQdbCjSbh6msTjs
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

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | CBDB 记载为吳越人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 19902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19902&o=json)
