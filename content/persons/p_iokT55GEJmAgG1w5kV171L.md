---
schema: wang-person/v1
id: p_iokT55GEJmAgG1w5kV171L
status: active
merged_into: null
display_name: 王方田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L7cxeAs5igAxEpWug3s6T8
        subject_person_id: p_iokT55GEJmAgG1w5kV171L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UUHA2t1NF1aqRPsP4s2WU1
          claim_id: c_L7cxeAs5igAxEpWug3s6T8
          source_id: s_mKT2K71VQdZ63Gs6at1pgF
          stance: supports
          locator: CBDB:71434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71434）
          source: &a1
            id: s_mKT2K71VQdZ63Gs6at1pgF
            source_type: api_record
            title: 中国历代人物传记资料库：王方田（CBDB 71434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71434&o=json
            external_identifier: CBDB:71434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2m5NCh5p8Zhn7wB6zPp5PB
        subject_person_id: p_iokT55GEJmAgG1w5kV171L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RnexgzWPeqSKYdyGecXDkB
          claim_id: c_2m5NCh5p8Zhn7wB6zPp5PB
          source_id: s_mKT2K71VQdZ63Gs6at1pgF
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
        id: c_YFCPbYaVLB2Hp92hNX6Ndc
        subject_person_id: p_iokT55GEJmAgG1w5kV171L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方田（生于1840年），清人物。籍贯扶溝。（中国历代人物传记资料库 CBDB 71434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FhrT-lYLgLG4WoZLqyRuNn
          claim_id: c_YFCPbYaVLB2Hp92hNX6Ndc
          source_id: s_mKT2K71VQdZ63Gs6at1pgF
          stance: supports
          locator: CBDB:71434
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

# 王方田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方田 | accepted |
| birth.date | 1840年 | accepted |
| bio.summary | 王方田（生于1840年），清人物。籍贯扶溝。（中国历代人物传记资料库 CBDB 71434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方田（CBDB 71434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71434&o=json)
