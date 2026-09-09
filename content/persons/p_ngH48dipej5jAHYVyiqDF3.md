---
schema: wang-person/v1
id: p_ngH48dipej5jAHYVyiqDF3
status: active
merged_into: null
display_name: 王朝俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLaJFAMJDnwrVb7ULxjgdX
        subject_person_id: p_ngH48dipej5jAHYVyiqDF3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XDm18iQzrj6QPuUaR8u1Yj
          claim_id: c_mLaJFAMJDnwrVb7ULxjgdX
          source_id: s_5tH4BMfv1XXSCRg8iUrFZd
          stance: supports
          locator: CBDB:72052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72052）
          source: &a1
            id: s_5tH4BMfv1XXSCRg8iUrFZd
            source_type: api_record
            title: 中国历代人物传记资料库：王朝俊（CBDB 72052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72052&o=json
            external_identifier: CBDB:72052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aYQMBNTJEtqjMoSK3Ha49A
        subject_person_id: p_ngH48dipej5jAHYVyiqDF3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1876年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t6fwAmKJwUqP3dpRDouH9e
          claim_id: c_aYQMBNTJEtqjMoSK3Ha49A
          source_id: s_5tH4BMfv1XXSCRg8iUrFZd
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
        id: c_cWSYNAmej2vEDypguv1Bpb
        subject_person_id: p_ngH48dipej5jAHYVyiqDF3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1930年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KD5RyYBdS9d7NFQLxPALer
          claim_id: c_cWSYNAmej2vEDypguv1Bpb
          source_id: s_5tH4BMfv1XXSCRg8iUrFZd
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
        id: c_heEmhBEYnwE1T9tQERqLwr
        subject_person_id: p_ngH48dipej5jAHYVyiqDF3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3rbCyJtSEhavdHvuoAiXxQ
          claim_id: c_heEmhBEYnwE1T9tQERqLwr
          source_id: s_5tH4BMfv1XXSCRg8iUrFZd
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

# 王朝俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝俊 | accepted |
| birth.date | 1876年 | accepted |
| death.date | 1930年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝俊（CBDB 72052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72052&o=json)
