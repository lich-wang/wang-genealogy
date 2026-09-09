---
schema: wang-person/v1
id: p_e2B5D7eTHJy1uPWndyZMgS
status: active
merged_into: null
display_name: 王承楙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S431uyB1hNmT5WcGX31xB4
        subject_person_id: p_e2B5D7eTHJy1uPWndyZMgS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承楙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fFWh8Q62g8ATChwh6Z4RGm
          claim_id: c_S431uyB1hNmT5WcGX31xB4
          source_id: s_pdN3DDy8WpPuw3Jh7s8Z8v
          stance: supports
          locator: CBDB:638084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638084）
          source: &a1
            id: s_pdN3DDy8WpPuw3Jh7s8Z8v
            source_type: api_record
            title: 中国历代人物传记资料库：王承楙（CBDB 638084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638084&o=json
            external_identifier: CBDB:638084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5BoEGKAKQDcYhSLE63d4c
        subject_person_id: p_e2B5D7eTHJy1uPWndyZMgS
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
        - id: cs_cmW21EL4QBpwVByGGC8G64
          claim_id: c_F5BoEGKAKQDcYhSLE63d4c
          source_id: s_pdN3DDy8WpPuw3Jh7s8Z8v
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

# 王承楙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承楙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承楙（CBDB 638084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638084&o=json)
