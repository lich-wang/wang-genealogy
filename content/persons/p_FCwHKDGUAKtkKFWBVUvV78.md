---
schema: wang-person/v1
id: p_FCwHKDGUAKtkKFWBVUvV78
status: active
merged_into: null
display_name: 王依書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrefDfXJG3w5XV6apbJSjT
        subject_person_id: p_FCwHKDGUAKtkKFWBVUvV78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王依書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HkbRLSr18jTvEFzpzhsQ1q
          claim_id: c_YrefDfXJG3w5XV6apbJSjT
          source_id: s_XdKso5KRdXQg5kuPWVs7oF
          stance: supports
          locator: CBDB:71779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71779）
          source: &a1
            id: s_XdKso5KRdXQg5kuPWVs7oF
            source_type: api_record
            title: 中国历代人物传记资料库：王依書（CBDB 71779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71779&o=json
            external_identifier: CBDB:71779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6QmywxLt2nzne6ef3dMw8i
        subject_person_id: p_FCwHKDGUAKtkKFWBVUvV78
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1582年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qukFbbK8aujK1pP1tawxZ3
          claim_id: c_6QmywxLt2nzne6ef3dMw8i
          source_id: s_XdKso5KRdXQg5kuPWVs7oF
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
        id: c_ijTGNgJunifRyrLFzSAbNP
        subject_person_id: p_FCwHKDGUAKtkKFWBVUvV78
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1654年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GAzFqnzvG3PMZBA8x3M5vE
          claim_id: c_ijTGNgJunifRyrLFzSAbNP
          source_id: s_XdKso5KRdXQg5kuPWVs7oF
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
        id: c_45WAT4Bhtc7NxpsFmUnEEu
        subject_person_id: p_FCwHKDGUAKtkKFWBVUvV78
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王依書（1582年—1654年），清人物。籍贯柘城。（中国历代人物传记资料库 CBDB 71779）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eG6HUm0ImHPrMHZ3XIO9M5
          claim_id: c_45WAT4Bhtc7NxpsFmUnEEu
          source_id: s_XdKso5KRdXQg5kuPWVs7oF
          stance: supports
          locator: CBDB:71779
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

# 王依書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王依書 | accepted |
| birth.date | 1582年 | accepted |
| death.date | 1654年 | accepted |
| bio.summary | 王依書（1582年—1654年），清人物。籍贯柘城。（中国历代人物传记资料库 CBDB 71779） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王依書（CBDB 71779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71779&o=json)
