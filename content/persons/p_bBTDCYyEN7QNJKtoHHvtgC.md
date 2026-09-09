---
schema: wang-person/v1
id: p_bBTDCYyEN7QNJKtoHHvtgC
status: active
merged_into: null
display_name: 王世琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XpvvtW2M1c7iRb59mpWozz
        subject_person_id: p_bBTDCYyEN7QNJKtoHHvtgC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKhpGudE1ohjvg6LmhUoXA
          claim_id: c_XpvvtW2M1c7iRb59mpWozz
          source_id: s_BYYM5AHxJcY56Dq7RLrv4N
          stance: supports
          locator: CBDB:67711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67711）
          source: &a1
            id: s_BYYM5AHxJcY56Dq7RLrv4N
            source_type: api_record
            title: 中国历代人物传记资料库：王世琛（CBDB 67711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67711&o=json
            external_identifier: CBDB:67711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QfKyMKKM49dZpnXHkjFbzM
        subject_person_id: p_bBTDCYyEN7QNJKtoHHvtgC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jCk2Dq97DNGVwjBPJo1Mhv
          claim_id: c_QfKyMKKM49dZpnXHkjFbzM
          source_id: s_BYYM5AHxJcY56Dq7RLrv4N
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
        id: c_CYsptqMisJXqzazMMh8hjQ
        subject_person_id: p_bBTDCYyEN7QNJKtoHHvtgC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1761年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHgccHfHd8R7kDGyAxBS2T
          claim_id: c_CYsptqMisJXqzazMMh8hjQ
          source_id: s_BYYM5AHxJcY56Dq7RLrv4N
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
        id: c_7zGvRUFrYCyh2Ez2cywbrD
        subject_person_id: p_bBTDCYyEN7QNJKtoHHvtgC
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
        - id: cs_GEJ6Fh9Uwro2EVsJEU2BAL
          claim_id: c_7zGvRUFrYCyh2Ez2cywbrD
          source_id: s_BYYM5AHxJcY56Dq7RLrv4N
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

# 王世琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世琛 | accepted |
| birth.date | 1681年 | accepted |
| death.date | 1761年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世琛（CBDB 67711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67711&o=json)
