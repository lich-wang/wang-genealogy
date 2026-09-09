---
schema: wang-person/v1
id: p_ey638JT1aYg1pVr8VqWoP3
status: active
merged_into: null
display_name: 王鏞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cWJ2G4E9AHpYvZJeGbf8q
        subject_person_id: p_ey638JT1aYg1pVr8VqWoP3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NWUCTp4AF3Dv5M6juUoUBJ
          claim_id: c_8cWJ2G4E9AHpYvZJeGbf8q
          source_id: s_oak3ncfGP2nCiDumDEsj7q
          stance: supports
          locator: CBDB:57813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57813）
          source: &a1
            id: s_oak3ncfGP2nCiDumDEsj7q
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 57813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57813&o=json
            external_identifier: CBDB:57813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jKBgJsdPL36AfT83Rd5Jdc
        subject_person_id: p_ey638JT1aYg1pVr8VqWoP3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1846年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HeQTPZ3NaZf9g86a4KJMn8
          claim_id: c_jKBgJsdPL36AfT83Rd5Jdc
          source_id: s_oak3ncfGP2nCiDumDEsj7q
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
        id: c_TLPWUuojY488qCgu5u71HM
        subject_person_id: p_ey638JT1aYg1pVr8VqWoP3
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
        - id: cs_sCmD69KqRXWFdBNCWcAMu9
          claim_id: c_TLPWUuojY488qCgu5u71HM
          source_id: s_oak3ncfGP2nCiDumDEsj7q
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

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| death.date | 1846年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 57813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57813&o=json)
