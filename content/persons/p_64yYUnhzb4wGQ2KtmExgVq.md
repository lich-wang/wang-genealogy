---
schema: wang-person/v1
id: p_64yYUnhzb4wGQ2KtmExgVq
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZ6NPVrYXQdUcQBU9TcKBG
        subject_person_id: p_64yYUnhzb4wGQ2KtmExgVq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1m4a3TiBA8g2QR1aD9VqZA
          claim_id: c_FZ6NPVrYXQdUcQBU9TcKBG
          source_id: s_LeVWKU5JP7ApX5SMBgFN9P
          stance: supports
          locator: CBDB:459455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459455）
          source: &a1
            id: s_LeVWKU5JP7ApX5SMBgFN9P
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 459455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459455&o=json
            external_identifier: CBDB:459455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2315siHEzPs2T4otztw1ZU
        subject_person_id: p_64yYUnhzb4wGQ2KtmExgVq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2s7QnLWMVVgFZbMbSC4maJ
          claim_id: c_2315siHEzPs2T4otztw1ZU
          source_id: s_LeVWKU5JP7ApX5SMBgFN9P
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 459455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459455&o=json)
