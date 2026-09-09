---
schema: wang-person/v1
id: p_XWgo6Q1nhAmPTc3Xg4eENs
status: active
merged_into: null
display_name: 王翀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2RStsbLuHvLSXzf1bcmoDb
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_apQRj7zVYNHBbHBQpjpYX6
          claim_id: c_2RStsbLuHvLSXzf1bcmoDb
          source_id: s_P2iNnHizE4gq3RD2ivrLtc
          stance: supports
          locator: CBDB:200923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200923）
          source: &a1
            id: s_P2iNnHizE4gq3RD2ivrLtc
            source_type: api_record
            title: 中国历代人物传记资料库：王翀（CBDB 200923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200923&o=json
            external_identifier: CBDB:200923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7d8Qb3MFABzBUwCDMNKGEr
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fadPYHS6FJoQ5KSfqLocyt
          claim_id: c_7d8Qb3MFABzBUwCDMNKGEr
          source_id: s_P2iNnHizE4gq3RD2ivrLtc
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
        id: c_M2xFDNJ37M1tB17AH5TVzQ
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
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
        - id: cs_bdHRP1TvYvzR1yU6zS1j5f
          claim_id: c_M2xFDNJ37M1tB17AH5TVzQ
          source_id: s_P2iNnHizE4gq3RD2ivrLtc
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

# 王翀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翀 | accepted |
| birth.date | 1457年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翀（CBDB 200923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200923&o=json)
