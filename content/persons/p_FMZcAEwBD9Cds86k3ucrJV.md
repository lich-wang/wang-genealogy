---
schema: wang-person/v1
id: p_FMZcAEwBD9Cds86k3ucrJV
status: active
merged_into: null
display_name: 王攄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V2uEVEHod68s45j2Dg82TU
        subject_person_id: p_FMZcAEwBD9Cds86k3ucrJV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nb7LUrQDoMatjRVBd4nTB5
          claim_id: c_V2uEVEHod68s45j2Dg82TU
          source_id: s_JEXu48URGK3MSTQ4yCUoz8
          stance: supports
          locator: CBDB:71243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71243）
          source: &a1
            id: s_JEXu48URGK3MSTQ4yCUoz8
            source_type: api_record
            title: 中国历代人物传记资料库：王攄（CBDB 71243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71243&o=json
            external_identifier: CBDB:71243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c8pCqVhxrFm36FPqB2MuNP
        subject_person_id: p_FMZcAEwBD9Cds86k3ucrJV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1636年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EN2o6SajiGj7vKJMPjoLZS
          claim_id: c_c8pCqVhxrFm36FPqB2MuNP
          source_id: s_JEXu48URGK3MSTQ4yCUoz8
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
        id: c_zArZLbD75AJqry1dZLvGNV
        subject_person_id: p_FMZcAEwBD9Cds86k3ucrJV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LGpG2k3cX7Muj6iwjooMa5
          claim_id: c_zArZLbD75AJqry1dZLvGNV
          source_id: s_JEXu48URGK3MSTQ4yCUoz8
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
        id: c_nwrh6ifpeBGgr6Seamg9wM
        subject_person_id: p_FMZcAEwBD9Cds86k3ucrJV
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
        - id: cs_VGvgoqL7qZPd1iKJoHi4mr
          claim_id: c_nwrh6ifpeBGgr6Seamg9wM
          source_id: s_JEXu48URGK3MSTQ4yCUoz8
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

# 王攄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王攄 | accepted |
| birth.date | 1636年 | accepted |
| death.date | 1699年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王攄（CBDB 71243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71243&o=json)
