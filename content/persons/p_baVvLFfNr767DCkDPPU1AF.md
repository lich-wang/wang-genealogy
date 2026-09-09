---
schema: wang-person/v1
id: p_baVvLFfNr767DCkDPPU1AF
status: active
merged_into: null
display_name: 王壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtmoMaKPm8Z4fMDdDCEAFj
        subject_person_id: p_baVvLFfNr767DCkDPPU1AF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_suDNEeJHZzLqUDwdBrzCGB
          claim_id: c_BtmoMaKPm8Z4fMDdDCEAFj
          source_id: s_kvzDrNVczBi49TMUtmhkWx
          stance: supports
          locator: CBDB:175938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175938）
          source: &a1
            id: s_kvzDrNVczBi49TMUtmhkWx
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 175938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175938&o=json
            external_identifier: CBDB:175938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ah9SwfFUULoHL2gfEFPtUG
        subject_person_id: p_baVvLFfNr767DCkDPPU1AF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 627年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNCEb3P4oY1cAKp9PNkH4J
          claim_id: c_Ah9SwfFUULoHL2gfEFPtUG
          source_id: s_kvzDrNVczBi49TMUtmhkWx
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
        id: c_YHWs6EzkGAxZKv9n7Lj6Me
        subject_person_id: p_baVvLFfNr767DCkDPPU1AF
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
        - id: cs_Vd7E1BDhnxwQAEvQyRmxiU
          claim_id: c_YHWs6EzkGAxZKv9n7Lj6Me
          source_id: s_kvzDrNVczBi49TMUtmhkWx
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

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| death.date | 627年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 175938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175938&o=json)
