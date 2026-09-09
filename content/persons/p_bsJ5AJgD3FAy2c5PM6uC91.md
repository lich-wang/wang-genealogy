---
schema: wang-person/v1
id: p_bsJ5AJgD3FAy2c5PM6uC91
status: active
merged_into: null
display_name: 王以祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_noa5vZ58fZU89UcvqVgJvB
        subject_person_id: p_bsJ5AJgD3FAy2c5PM6uC91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Juj1HCFDtzZgtH6DcUvVuw
          claim_id: c_noa5vZ58fZU89UcvqVgJvB
          source_id: s_7AjBNM6S7YuBHBUG8cYbnt
          stance: supports
          locator: CBDB:635925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635925）
          source: &a1
            id: s_7AjBNM6S7YuBHBUG8cYbnt
            source_type: api_record
            title: 中国历代人物传记资料库：王以祥（CBDB 635925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635925&o=json
            external_identifier: CBDB:635925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vo3s3XPB9hVzi8D66CVLCA
        subject_person_id: p_bsJ5AJgD3FAy2c5PM6uC91
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
        - id: cs_dCBfHi3jgPwLDRUzwgbKom
          claim_id: c_vo3s3XPB9hVzi8D66CVLCA
          source_id: s_7AjBNM6S7YuBHBUG8cYbnt
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

# 王以祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以祥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以祥（CBDB 635925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635925&o=json)
