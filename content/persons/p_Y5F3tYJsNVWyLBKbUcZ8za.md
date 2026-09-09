---
schema: wang-person/v1
id: p_Y5F3tYJsNVWyLBKbUcZ8za
status: active
merged_into: null
display_name: 王蕙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nY7BH22sDYMWuFJWDXJGyU
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gJD7jFgcNMZ9QQuJjp82Ay
          claim_id: c_nY7BH22sDYMWuFJWDXJGyU
          source_id: s_q6mNqFRBT23YJCrXgjasxK
          stance: supports
          locator: CBDB:33403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33403）
          source: &a1
            id: s_q6mNqFRBT23YJCrXgjasxK
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙（CBDB 33403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33403&o=json
            external_identifier: CBDB:33403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AsNp6sKAb8FUMdRvdJ6EiW
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1305年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKiD11qXQccJm67djRLYfd
          claim_id: c_AsNp6sKAb8FUMdRvdJ6EiW
          source_id: s_q6mNqFRBT23YJCrXgjasxK
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
        id: c_geNwWa9y7ZYjRntxkWbEGr
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1367年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bkaZtJq9JhVx5YmfKmxB49
          claim_id: c_geNwWa9y7ZYjRntxkWbEGr
          source_id: s_q6mNqFRBT23YJCrXgjasxK
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
        id: c_vvYAfUPGxZYQH6tKGp2a6T
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fwdkWPKDYNhBA9no6T41zk
          claim_id: c_vvYAfUPGxZYQH6tKGp2a6T
          source_id: s_q6mNqFRBT23YJCrXgjasxK
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

# 王蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕙 | accepted |
| birth.date | 1305年 | accepted |
| death.date | 1367年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕙（CBDB 33403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33403&o=json)
