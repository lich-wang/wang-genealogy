---
schema: wang-person/v1
id: p_m4WCKefqH4g4ZXan87psA9
status: active
merged_into: null
display_name: 王鼎臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1JcP93FLmndx4i3Vn2d8bn
        subject_person_id: p_m4WCKefqH4g4ZXan87psA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kJCY3ExFDLpLGS3tF1Jy7h
          claim_id: c_1JcP93FLmndx4i3Vn2d8bn
          source_id: s_wVJjjg5xd8GWf2eFWPQrJX
          stance: supports
          locator: CBDB:342204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342204）
          source: &a1
            id: s_wVJjjg5xd8GWf2eFWPQrJX
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 342204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342204&o=json
            external_identifier: CBDB:342204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bjp1mUC6d7MK6Fpn4SQcKy
        subject_person_id: p_m4WCKefqH4g4ZXan87psA9
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
        - id: cs_LJVL1J76q54TSHtwazwvtf
          claim_id: c_bjp1mUC6d7MK6Fpn4SQcKy
          source_id: s_wVJjjg5xd8GWf2eFWPQrJX
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

# 王鼎臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎臣（CBDB 342204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342204&o=json)
