---
schema: wang-person/v1
id: p_ciLToMmLdAXN6NomVNf1BP
status: active
merged_into: null
display_name: 王又曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LohuH3RbagBbGbb2cdfNC4
        subject_person_id: p_ciLToMmLdAXN6NomVNf1BP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bLNvvBGRAMLPDWiJy5uky8
          claim_id: c_LohuH3RbagBbGbb2cdfNC4
          source_id: s_vzqRB3zPzthXFfnu3vnFvg
          stance: supports
          locator: CBDB:338293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338293）
          source: &a1
            id: s_vzqRB3zPzthXFfnu3vnFvg
            source_type: api_record
            title: 中国历代人物传记资料库：王又曾（CBDB 338293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338293&o=json
            external_identifier: CBDB:338293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gJwQWS3t5zAamC9mDV1QyR
        subject_person_id: p_ciLToMmLdAXN6NomVNf1BP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aWYU9PZtBPj8fr9YugJYbS
          claim_id: c_gJwQWS3t5zAamC9mDV1QyR
          source_id: s_vzqRB3zPzthXFfnu3vnFvg
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
        id: c_1BNCrCCPvN46cFPvtMLJiy
        subject_person_id: p_ciLToMmLdAXN6NomVNf1BP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CGBuqH8j1W2ucmFMDB1n5X
          claim_id: c_1BNCrCCPvN46cFPvtMLJiy
          source_id: s_vzqRB3zPzthXFfnu3vnFvg
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
        id: c_1ypjVWt17iX9GCHLFJyUsh
        subject_person_id: p_ciLToMmLdAXN6NomVNf1BP
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
        - id: cs_K1ED4FdQ5MMSUi6X4jMUnL
          claim_id: c_1ypjVWt17iX9GCHLFJyUsh
          source_id: s_vzqRB3zPzthXFfnu3vnFvg
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

# 王又曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王又曾 | accepted |
| birth.date | 1781年 | accepted |
| death.date | 1835年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王又曾（CBDB 338293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338293&o=json)
