---
schema: wang-person/v1
id: p_Qju67ahEiuJqKQGrjA4w6B
status: active
merged_into: null
display_name: 王庭芝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQYAL5XKJkSqsTbU1LAtnG
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eQ2bdRfBnYpwYFJnqvYLmY
          claim_id: c_mQYAL5XKJkSqsTbU1LAtnG
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: CBDB:140365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140365）
          source: &a1
            id: s_DjECFUtiuZf73kK6pGREps
            source_type: api_record
            title: 中国历代人物传记资料库：王庭芝（CBDB 140365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json
            external_identifier: CBDB:140365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7wADeD9NvnjpC7G8EVjc9m
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meRwAseQPKvN5VtP1pppvV
          claim_id: c_7wADeD9NvnjpC7G8EVjc9m
          source_id: s_DjECFUtiuZf73kK6pGREps
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
        id: c_7KPA9SduPMXipSqNwxPaH8
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 719年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLQ4zFaGUtRZtMEQZaNX1F
          claim_id: c_7KPA9SduPMXipSqNwxPaH8
          source_id: s_DjECFUtiuZf73kK6pGREps
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
        id: c_LNtcw2Q1LNCVwFHw3zzhJm
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
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
        - id: cs_8spN5wtBwFaZPYHNN6irpr
          claim_id: c_LNtcw2Q1LNCVwFHw3zzhJm
          source_id: s_DjECFUtiuZf73kK6pGREps
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

# 王庭芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭芝 | accepted |
| birth.date | 676年 | accepted |
| death.date | 719年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭芝（CBDB 140365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json)
