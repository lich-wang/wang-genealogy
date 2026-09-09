---
schema: wang-person/v1
id: p_Un3iN9hVVNtneF5MdYQ9nB
status: active
merged_into: null
display_name: 王毓奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tSDCuNk54hm2HyKw143nqU
        subject_person_id: p_Un3iN9hVVNtneF5MdYQ9nB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCZ69dPBEo8oTgMumrdYHh
          claim_id: c_tSDCuNk54hm2HyKw143nqU
          source_id: s_nVDtyZKC4sk72oxbmdkm7y
          stance: supports
          locator: CBDB:72162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72162）
          source: &a1
            id: s_nVDtyZKC4sk72oxbmdkm7y
            source_type: api_record
            title: 中国历代人物传记资料库：王毓奇（CBDB 72162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72162&o=json
            external_identifier: CBDB:72162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jQLWz8HDu4SSmjP17qSphn
        subject_person_id: p_Un3iN9hVVNtneF5MdYQ9nB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1615年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iub4Fub3jP2516YM5CKwGi
          claim_id: c_jQLWz8HDu4SSmjP17qSphn
          source_id: s_nVDtyZKC4sk72oxbmdkm7y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c1r3MAe2KCANFMaMRizJzi
        subject_person_id: p_Un3iN9hVVNtneF5MdYQ9nB
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
        - id: cs_gV88WbuAfvMi3PBq6g8Jyi
          claim_id: c_c1r3MAe2KCANFMaMRizJzi
          source_id: s_nVDtyZKC4sk72oxbmdkm7y
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

# 王毓奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓奇 | accepted |
| birth.date | 1615年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓奇（CBDB 72162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72162&o=json)
