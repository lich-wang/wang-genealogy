---
schema: wang-person/v1
id: p_rPraf9Ys4uT2rEjsNoixP8
status: active
merged_into: null
display_name: 王大淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uGWEnjkBEWxercDzJhJ4aQ
        subject_person_id: p_rPraf9Ys4uT2rEjsNoixP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3XFYJ5oVHmcTZ6t2hn6exP
          claim_id: c_uGWEnjkBEWxercDzJhJ4aQ
          source_id: s_4dTBr5tQsDHF8onF1dK16Z
          stance: supports
          locator: CBDB:71336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71336）
          source: &a1
            id: s_4dTBr5tQsDHF8onF1dK16Z
            source_type: api_record
            title: 中国历代人物传记资料库：王大淮（CBDB 71336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71336&o=json
            external_identifier: CBDB:71336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K5mWPQFG3wSjMG6WmA8Urw
        subject_person_id: p_rPraf9Ys4uT2rEjsNoixP8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1785年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D9QG1NjGcqQTca3wZodkBU
          claim_id: c_K5mWPQFG3wSjMG6WmA8Urw
          source_id: s_4dTBr5tQsDHF8onF1dK16Z
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
        id: c_UkTYiLzfnvAwsv394Qr1KS
        subject_person_id: p_rPraf9Ys4uT2rEjsNoixP8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1844年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAs6KmAg6DJ986in7Swj5m
          claim_id: c_UkTYiLzfnvAwsv394Qr1KS
          source_id: s_4dTBr5tQsDHF8onF1dK16Z
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
        id: c_Wt59QTjWD78yAypcHQeEQ5
        subject_person_id: p_rPraf9Ys4uT2rEjsNoixP8
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
        - id: cs_QqjpU7nqPQ44H4T4Uoqj3D
          claim_id: c_Wt59QTjWD78yAypcHQeEQ5
          source_id: s_4dTBr5tQsDHF8onF1dK16Z
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

# 王大淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大淮 | accepted |
| birth.date | 1785年 | accepted |
| death.date | 1844年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大淮（CBDB 71336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71336&o=json)
