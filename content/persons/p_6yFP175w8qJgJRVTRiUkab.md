---
schema: wang-person/v1
id: p_6yFP175w8qJgJRVTRiUkab
status: active
merged_into: null
display_name: 王一奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W5psAjnPooJPmQ4QAP9YQV
        subject_person_id: p_6yFP175w8qJgJRVTRiUkab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2NCFBybBREbMvUsMYhK9qb
          claim_id: c_W5psAjnPooJPmQ4QAP9YQV
          source_id: s_efjbH4VURWrYSiJRiFkgFR
          stance: supports
          locator: CBDB:12910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12910）
          source: &a1
            id: s_efjbH4VURWrYSiJRiFkgFR
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 12910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json
            external_identifier: CBDB:12910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Hy98nKKPdN6Ko8ZCTU9wkf
        subject_person_id: p_6yFP175w8qJgJRVTRiUkab
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1219年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sZ5sSF6nLbHtrAH1P3qg6F
          claim_id: c_Hy98nKKPdN6Ko8ZCTU9wkf
          source_id: s_efjbH4VURWrYSiJRiFkgFR
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
        id: c_vdU7e8yvwrG9UyTTiXFHyP
        subject_person_id: p_6yFP175w8qJgJRVTRiUkab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9zTYpHYzdY2LQKUTP56T7
          claim_id: c_vdU7e8yvwrG9UyTTiXFHyP
          source_id: s_efjbH4VURWrYSiJRiFkgFR
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

# 王一奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一奇 | accepted |
| birth.date | 1219年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一奇（CBDB 12910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json)
