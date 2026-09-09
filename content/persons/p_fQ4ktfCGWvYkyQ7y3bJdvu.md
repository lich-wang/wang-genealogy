---
schema: wang-person/v1
id: p_fQ4ktfCGWvYkyQ7y3bJdvu
status: active
merged_into: null
display_name: 王辛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N37R9om7YyHTzeqNUNGPbd
        subject_person_id: p_fQ4ktfCGWvYkyQ7y3bJdvu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dLeYxuiF7mDXw2KCiZDgGL
          claim_id: c_N37R9om7YyHTzeqNUNGPbd
          source_id: s_DHCdrdkq9MVj4RSG6xX4v2
          stance: supports
          locator: CBDB:457076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457076）
          source: &a1
            id: s_DHCdrdkq9MVj4RSG6xX4v2
            source_type: api_record
            title: 中国历代人物传记资料库：王辛（CBDB 457076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457076&o=json
            external_identifier: CBDB:457076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M98zVqenHoYMwdhDeBi934
        subject_person_id: p_fQ4ktfCGWvYkyQ7y3bJdvu
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
        - id: cs_VovMBte3NeBNPkUECsusZF
          claim_id: c_M98zVqenHoYMwdhDeBi934
          source_id: s_DHCdrdkq9MVj4RSG6xX4v2
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

# 王辛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辛（CBDB 457076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457076&o=json)
