---
schema: wang-person/v1
id: p_jbvMK4ptnENgAa9mUm6igR
status: active
merged_into: null
display_name: 王懋圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WC5po4F5GntqF72xDx7GQQ
        subject_person_id: p_jbvMK4ptnENgAa9mUm6igR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ADSTkC24DgJckJPqPHFhBf
          claim_id: c_WC5po4F5GntqF72xDx7GQQ
          source_id: s_v467URoC9fdR34Ny5d3iGk
          stance: supports
          locator: CBDB:638012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638012）
          source: &a1
            id: s_v467URoC9fdR34Ny5d3iGk
            source_type: api_record
            title: 中国历代人物传记资料库：王懋圖（CBDB 638012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638012&o=json
            external_identifier: CBDB:638012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GTBZaUbUHJfCZHTCsrc1ix
        subject_person_id: p_jbvMK4ptnENgAa9mUm6igR
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
        - id: cs_hDij4DWFHk4uKx6pq8wrqh
          claim_id: c_GTBZaUbUHJfCZHTCsrc1ix
          source_id: s_v467URoC9fdR34Ny5d3iGk
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

# 王懋圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋圖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋圖（CBDB 638012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638012&o=json)
