---
schema: wang-person/v1
id: p_2Fu5oCqGVWkUyo9rZxcW5L
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wocZ9Pjbx5rXHrbi2HSNh8
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8S3fr7t2mwYXeciJmcaro2
          claim_id: c_wocZ9Pjbx5rXHrbi2HSNh8
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: CBDB:201503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201503）
          source: &a1
            id: s_8DtRzDxXopvpFicBdQg4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 201503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json
            external_identifier: CBDB:201503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zxHrnnSX6f9joCPa46DLpM
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1471年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9fUUfZARreRtW9R5DZu6pn
          claim_id: c_zxHrnnSX6f9joCPa46DLpM
          source_id: s_8DtRzDxXopvpFicBdQg4r9
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
        id: c_9ndJrE3LCU3tRWGJ2Fau1x
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
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
        - id: cs_kNXUtshmh4FbtmAQP9ZEuU
          claim_id: c_9ndJrE3LCU3tRWGJ2Fau1x
          source_id: s_8DtRzDxXopvpFicBdQg4r9
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| birth.date | 1471年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 201503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json)
