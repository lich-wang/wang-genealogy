---
schema: wang-person/v1
id: p_2nY48i9eTjkWpcKa6Eewsf
status: active
merged_into: null
display_name: 王元感
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tdD73s8vSt4zAKjzpNGDux
        subject_person_id: p_2nY48i9eTjkWpcKa6Eewsf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s5g9meWoLt55WeLgASV758
          claim_id: c_tdD73s8vSt4zAKjzpNGDux
          source_id: s_pFLUDrCX5R8kjwsb6iZw9f
          stance: supports
          locator: CBDB:91976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91976）
          source: &a1
            id: s_pFLUDrCX5R8kjwsb6iZw9f
            source_type: api_record
            title: 中国历代人物传记资料库：王元感（CBDB 91976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91976&o=json
            external_identifier: CBDB:91976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RrzdaP39Y9BCs7WDVZd4Cy
        subject_person_id: p_2nY48i9eTjkWpcKa6Eewsf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 694年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3BVgxidy785JXR3ayh9Go
          claim_id: c_RrzdaP39Y9BCs7WDVZd4Cy
          source_id: s_pFLUDrCX5R8kjwsb6iZw9f
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
        id: c_coHsGN16Xotvpa9hJTzQn2
        subject_person_id: p_2nY48i9eTjkWpcKa6Eewsf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EXR8u1Q9Skrw9RWZ1BAEHD
          claim_id: c_coHsGN16Xotvpa9hJTzQn2
          source_id: s_pFLUDrCX5R8kjwsb6iZw9f
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

# 王元感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元感 | accepted |
| death.date | 694年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元感（CBDB 91976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91976&o=json)
