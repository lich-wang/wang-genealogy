---
schema: wang-person/v1
id: p_7PBeLZgoALkq6zQ2hTdGyx
status: active
merged_into: null
display_name: 王蘭蓀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8529b6rpNzCiCCSU6db7XF
        subject_person_id: p_7PBeLZgoALkq6zQ2hTdGyx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭蓀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_83kB4Cd4pyrRQfhrZ119Cw
          claim_id: c_8529b6rpNzCiCCSU6db7XF
          source_id: s_36ufpi9wgeYkWJfduNXYnL
          stance: supports
          locator: CBDB:568697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568697）
          source: &a1
            id: s_36ufpi9wgeYkWJfduNXYnL
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭蓀（CBDB 568697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568697&o=json
            external_identifier: CBDB:568697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mx52kFmSEMprS75Dggdg4f
        subject_person_id: p_7PBeLZgoALkq6zQ2hTdGyx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭蓀，清人物。籍贯金壇。（中国历代人物传记资料库 CBDB 568697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hkTUvqOJnwnUZcCXUH8Blq
          claim_id: c_mx52kFmSEMprS75Dggdg4f
          source_id: s_36ufpi9wgeYkWJfduNXYnL
          stance: supports
          locator: CBDB:568697
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

# 王蘭蓀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭蓀 | accepted |
| bio.summary | 王蘭蓀，清人物。籍贯金壇。（中国历代人物传记资料库 CBDB 568697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭蓀（CBDB 568697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568697&o=json)
