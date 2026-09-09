---
schema: wang-person/v1
id: p_A98pt7vCX7HThyxCGgsD4R
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s8PYXy9yR1tGupvTSGh3vN
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FksXXQ7aV4dWjJEsDk5KG4
          claim_id: c_s8PYXy9yR1tGupvTSGh3vN
          source_id: s_usxES2Tn7DL6q325Xrcu2n
          stance: supports
          locator: CBDB:200080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200080）
          source: &a1
            id: s_usxES2Tn7DL6q325Xrcu2n
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 200080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200080&o=json
            external_identifier: CBDB:200080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xNsb6jCYKe3hbwZS1XqYWu
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1454年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhhN4ypDg4iGZQXWgMZM1X
          claim_id: c_xNsb6jCYKe3hbwZS1XqYWu
          source_id: s_usxES2Tn7DL6q325Xrcu2n
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
        id: c_zD5Um4xJ7Y5YQe2nBwMu3T
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
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
        - id: cs_qYmETF1zd5dra1e9qffYdB
          claim_id: c_zD5Um4xJ7Y5YQe2nBwMu3T
          source_id: s_usxES2Tn7DL6q325Xrcu2n
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 1454年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 200080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200080&o=json)
