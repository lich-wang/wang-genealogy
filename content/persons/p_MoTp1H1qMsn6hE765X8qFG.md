---
schema: wang-person/v1
id: p_MoTp1H1qMsn6hE765X8qFG
status: active
merged_into: null
display_name: 王九儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RghbHE6cY3Um3RwdRGnYsC
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4wM3FR3wCH8GKvmCD55sSQ
          claim_id: c_RghbHE6cY3Um3RwdRGnYsC
          source_id: s_6zAfp4BQWahn7TB6Sv1FJb
          stance: supports
          locator: CBDB:206435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206435）
          source: &a1
            id: s_6zAfp4BQWahn7TB6Sv1FJb
            source_type: api_record
            title: 中国历代人物传记资料库：王九儀（CBDB 206435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206435&o=json
            external_identifier: CBDB:206435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gsAHJhN4rhLg7Xde8vkzTY
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msVz52CXoSQcj6w4qutNCQ
          claim_id: c_gsAHJhN4rhLg7Xde8vkzTY
          source_id: s_6zAfp4BQWahn7TB6Sv1FJb
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
        id: c_qZ7rvYBx2cq9voWdysuXyy
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
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
        - id: cs_dZuyKnUQUjimJbtJxs9aZr
          claim_id: c_qZ7rvYBx2cq9voWdysuXyy
          source_id: s_6zAfp4BQWahn7TB6Sv1FJb
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

# 王九儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九儀 | accepted |
| birth.date | 1551年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九儀（CBDB 206435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206435&o=json)
