---
schema: wang-person/v1
id: p_jLjXgM3f18nuVW83EfXw7K
status: active
merged_into: null
display_name: 王墉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ML3AgN19p2TTFEddHCKqKa
        subject_person_id: p_jLjXgM3f18nuVW83EfXw7K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BUSnGtaHsps764koFaW4Ud
          claim_id: c_ML3AgN19p2TTFEddHCKqKa
          source_id: s_tgADECDkgEGtBqGUHjfA2k
          stance: supports
          locator: CBDB:236488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236488）
          source: &a1
            id: s_tgADECDkgEGtBqGUHjfA2k
            source_type: api_record
            title: 中国历代人物传记资料库：王墉（CBDB 236488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236488&o=json
            external_identifier: CBDB:236488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YtGVMZGPjcvFb4NM6tYbTa
        subject_person_id: p_jLjXgM3f18nuVW83EfXw7K
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
        - id: cs_guxBv7qcBvig5SEaB2B7us
          claim_id: c_YtGVMZGPjcvFb4NM6tYbTa
          source_id: s_tgADECDkgEGtBqGUHjfA2k
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

# 王墉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王墉（CBDB 236488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236488&o=json)
