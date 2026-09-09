---
schema: wang-person/v1
id: p_hA19SF27RU6ntU5fmPHXt4
status: active
merged_into: null
display_name: 王紹羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRQ6W5qSrSzymj5WML1sbv
        subject_person_id: p_hA19SF27RU6ntU5fmPHXt4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6uzjtsKZqjES8eoJS2Gnrc
          claim_id: c_WRQ6W5qSrSzymj5WML1sbv
          source_id: s_LtCJec1e6zEqZ2LaKJRKKK
          stance: supports
          locator: CBDB:69341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69341）
          source: &a1
            id: s_LtCJec1e6zEqZ2LaKJRKKK
            source_type: api_record
            title: 中国历代人物传记资料库：王紹羲（CBDB 69341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69341&o=json
            external_identifier: CBDB:69341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kgoCTAcwmY9kC9hcMx3iwK
        subject_person_id: p_hA19SF27RU6ntU5fmPHXt4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1864年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wB9QEnPCDDHHnsPNxnPkFU
          claim_id: c_kgoCTAcwmY9kC9hcMx3iwK
          source_id: s_LtCJec1e6zEqZ2LaKJRKKK
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
        id: c_dkMhCWZuqUwQe3VF9fc8KW
        subject_person_id: p_hA19SF27RU6ntU5fmPHXt4
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
        - id: cs_Zn82rbUcpu9nunVE2rKA6g
          claim_id: c_dkMhCWZuqUwQe3VF9fc8KW
          source_id: s_LtCJec1e6zEqZ2LaKJRKKK
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

# 王紹羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹羲 | accepted |
| death.date | 1864年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹羲（CBDB 69341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69341&o=json)
