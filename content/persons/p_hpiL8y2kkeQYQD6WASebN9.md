---
schema: wang-person/v1
id: p_hpiL8y2kkeQYQD6WASebN9
status: active
merged_into: null
display_name: 王積善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GU5HAscsc131rY3vBFa1J2
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNxWEZg9thNzXTctQR9swX
          claim_id: c_GU5HAscsc131rY3vBFa1J2
          source_id: s_PhGHS3pzAP8vADnJA54wAX
          stance: supports
          locator: CBDB:139268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139268）
          source: &a1
            id: s_PhGHS3pzAP8vADnJA54wAX
            source_type: api_record
            title: 中国历代人物传记资料库：王積善（CBDB 139268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139268&o=json
            external_identifier: CBDB:139268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pwr1eLoakF5gJxCQVmudiL
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEeBqwQz4g7LqDxVPXV8PL
          claim_id: c_pwr1eLoakF5gJxCQVmudiL
          source_id: s_PhGHS3pzAP8vADnJA54wAX
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
        id: c_KRG6MwyUs4tmHVQWg5aBKB
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UvVN7SmML7v19LwEKkm8N
          claim_id: c_KRG6MwyUs4tmHVQWg5aBKB
          source_id: s_PhGHS3pzAP8vADnJA54wAX
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
        id: c_NZ8Jgo5JwkaK7LWfBX1dUa
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_THh4P4d8ce1k8kovf7Bfyc
          claim_id: c_NZ8Jgo5JwkaK7LWfBX1dUa
          source_id: s_PhGHS3pzAP8vADnJA54wAX
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

# 王積善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積善 | accepted |
| birth.date | 606年 | accepted |
| death.date | 662年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王積善（CBDB 139268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139268&o=json)
