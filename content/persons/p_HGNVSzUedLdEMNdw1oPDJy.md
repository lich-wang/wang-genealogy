---
schema: wang-person/v1
id: p_HGNVSzUedLdEMNdw1oPDJy
status: active
merged_into: null
display_name: 王禔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jkUNWsBM9VabvLjVLrRHZW
        subject_person_id: p_HGNVSzUedLdEMNdw1oPDJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5nZ73QAqhvE2HBRKsBx8b2
          claim_id: c_jkUNWsBM9VabvLjVLrRHZW
          source_id: s_em1J5J6eHHzFabW3Emisty
          stance: supports
          locator: CBDB:175795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175795）
          source: &a1
            id: s_em1J5J6eHHzFabW3Emisty
            source_type: api_record
            title: 中国历代人物传记资料库：王禔（CBDB 175795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175795&o=json
            external_identifier: CBDB:175795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ENvRSMGH6eqwzwHjKhd91h
        subject_person_id: p_HGNVSzUedLdEMNdw1oPDJy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n9hATKCWyowaNVikH7uECB
          claim_id: c_ENvRSMGH6eqwzwHjKhd91h
          source_id: s_em1J5J6eHHzFabW3Emisty
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
        id: c_sVzX9a37b5HdQ28pFauGQx
        subject_person_id: p_HGNVSzUedLdEMNdw1oPDJy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LLVCZJKZeDH3scJFg27dH3
          claim_id: c_sVzX9a37b5HdQ28pFauGQx
          source_id: s_em1J5J6eHHzFabW3Emisty
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

# 王禔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禔 | accepted |
| death.date | 715年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禔（CBDB 175795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175795&o=json)
