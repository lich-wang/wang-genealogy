---
schema: wang-person/v1
id: p_PXRoBsPGhcBAHzDSQ8UGMZ
status: active
merged_into: null
display_name: 王福曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4urKJY1ocpVtFfED9AsYSr
        subject_person_id: p_PXRoBsPGhcBAHzDSQ8UGMZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xNBHLmPjUSaS4QXEqVhMJV
          claim_id: c_4urKJY1ocpVtFfED9AsYSr
          source_id: s_qkXVSk3MWXTsAnxhfLmpmF
          stance: supports
          locator: CBDB:72139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72139）
          source: &a1
            id: s_qkXVSk3MWXTsAnxhfLmpmF
            source_type: api_record
            title: 中国历代人物传记资料库：王福曾（CBDB 72139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72139&o=json
            external_identifier: CBDB:72139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XpWu5HEg9YDuzAX5VQhkHJ
        subject_person_id: p_PXRoBsPGhcBAHzDSQ8UGMZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7gTNCH9krH4fjspJWgWEt
          claim_id: c_XpWu5HEg9YDuzAX5VQhkHJ
          source_id: s_qkXVSk3MWXTsAnxhfLmpmF
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
        id: c_zjXaxDRFWaJCjR4r6GrDsF
        subject_person_id: p_PXRoBsPGhcBAHzDSQ8UGMZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tHpT3PEJka7AXRg3CjGCpD
          claim_id: c_zjXaxDRFWaJCjR4r6GrDsF
          source_id: s_qkXVSk3MWXTsAnxhfLmpmF
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
        id: c_RTBVxPpAFx3kX6zvtq3412
        subject_person_id: p_PXRoBsPGhcBAHzDSQ8UGMZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_quYMYZfRkevLTBs32u3QK9
          claim_id: c_RTBVxPpAFx3kX6zvtq3412
          source_id: s_qkXVSk3MWXTsAnxhfLmpmF
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

# 王福曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福曾 | accepted |
| birth.date | 1851年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福曾（CBDB 72139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72139&o=json)
