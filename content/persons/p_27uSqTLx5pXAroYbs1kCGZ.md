---
schema: wang-person/v1
id: p_27uSqTLx5pXAroYbs1kCGZ
status: active
merged_into: null
display_name: 王守旻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YBFE7E86o84dC9cKsJ1SKr
        subject_person_id: p_27uSqTLx5pXAroYbs1kCGZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8qbwH4R2BNXq791BADC2Ew
          claim_id: c_YBFE7E86o84dC9cKsJ1SKr
          source_id: s_zVQYTH97zqtkBsgUrjsgah
          stance: supports
          locator: CBDB:689326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689326）
          source: &a1
            id: s_zVQYTH97zqtkBsgUrjsgah
            source_type: api_record
            title: 中国历代人物传记资料库：王守旻（CBDB 689326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689326&o=json
            external_identifier: CBDB:689326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u21QSUpZMN6puqgNJBeVsG
        subject_person_id: p_27uSqTLx5pXAroYbs1kCGZ
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
        - id: cs_L64bGPvrDq28xKPeEf3VNk
          claim_id: c_u21QSUpZMN6puqgNJBeVsG
          source_id: s_zVQYTH97zqtkBsgUrjsgah
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

# 王守旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守旻 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守旻（CBDB 689326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689326&o=json)
