---
schema: wang-person/v1
id: p_j9uUZpkxDcfvCPkD6CLoi8
status: active
merged_into: null
display_name: 王顒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HTQhPMySNSP6Z7kr7UJe7m
        subject_person_id: p_j9uUZpkxDcfvCPkD6CLoi8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p37aEG7AR3DZdEwh8dD8Gx
          claim_id: c_HTQhPMySNSP6Z7kr7UJe7m
          source_id: s_8tixXybRKNJjygwjudKDMo
          stance: supports
          locator: CBDB:100997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100997）
          source: &a1
            id: s_8tixXybRKNJjygwjudKDMo
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 100997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100997&o=json
            external_identifier: CBDB:100997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zxEm4RZYNiNE5kHpjQiUrB
        subject_person_id: p_j9uUZpkxDcfvCPkD6CLoi8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1325年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDPfdZCLN3SzeLReyBx7Bo
          claim_id: c_zxEm4RZYNiNE5kHpjQiUrB
          source_id: s_8tixXybRKNJjygwjudKDMo
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
        id: c_K1j9TUkF2gaPBEJzHzi9Jk
        subject_person_id: p_j9uUZpkxDcfvCPkD6CLoi8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1387年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RjJM9God4XXDHowQVpdJqL
          claim_id: c_K1j9TUkF2gaPBEJzHzi9Jk
          source_id: s_8tixXybRKNJjygwjudKDMo
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
        id: c_yPH2PEq98XE5yqfTPxp7DB
        subject_person_id: p_j9uUZpkxDcfvCPkD6CLoi8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒（1325年—1387年），明人物。籍贯高郵府。（中国历代人物传记资料库 CBDB 100997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ylz9LqxPdmeNUDndq9aCav
          claim_id: c_yPH2PEq98XE5yqfTPxp7DB
          source_id: s_8tixXybRKNJjygwjudKDMo
          stance: supports
          locator: CBDB:100997
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王顒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顒 | accepted |
| birth.date | 1325年 | accepted |
| death.date | 1387年 | accepted |
| bio.summary | 王顒（1325年—1387年），明人物。籍贯高郵府。（中国历代人物传记资料库 CBDB 100997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顒（CBDB 100997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100997&o=json)
