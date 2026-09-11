---
schema: wang-person/v1
id: p_E3Q2QgCupkJK4xL1GCJQ8e
status: active
merged_into: null
display_name: 王朝梧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JKrzK68McWe1Pw9AWHSMWP
        subject_person_id: p_E3Q2QgCupkJK4xL1GCJQ8e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vfDEBeWC22PxVwjD6Dtjwf
          claim_id: c_JKrzK68McWe1Pw9AWHSMWP
          source_id: s_LGPzBKLtBV8uQUPG6cPgTG
          stance: supports
          locator: CBDB:72053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72053）
          source: &a1
            id: s_LGPzBKLtBV8uQUPG6cPgTG
            source_type: api_record
            title: 中国历代人物传记资料库：王朝梧（CBDB 72053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72053&o=json
            external_identifier: CBDB:72053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W3NNQZGv281P71zBqiaAzQ
        subject_person_id: p_E3Q2QgCupkJK4xL1GCJQ8e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1742年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H53oApTNym6a5aQ1dA8caR
          claim_id: c_W3NNQZGv281P71zBqiaAzQ
          source_id: s_LGPzBKLtBV8uQUPG6cPgTG
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
        id: c_ga9cf7URkkNy7d7N86fRPn
        subject_person_id: p_E3Q2QgCupkJK4xL1GCJQ8e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝梧（生于1742年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 72053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9UTkByBGxPq0SJLg_WFApn
          claim_id: c_ga9cf7URkkNy7d7N86fRPn
          source_id: s_LGPzBKLtBV8uQUPG6cPgTG
          stance: supports
          locator: CBDB:72053
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

# 王朝梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝梧 | accepted |
| birth.date | 1742年 | accepted |
| bio.summary | 王朝梧（生于1742年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 72053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝梧（CBDB 72053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72053&o=json)
