---
schema: wang-person/v1
id: p_siyVkBP3BBDbeJ9Le2oaDN
status: active
merged_into: null
display_name: 王仲康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FDyY5AhpN2oiXijBHMVT48
        subject_person_id: p_siyVkBP3BBDbeJ9Le2oaDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sm9TbsmD48T6ShNgZm7XTe
          claim_id: c_FDyY5AhpN2oiXijBHMVT48
          source_id: s_unDKcdFgSh9qYmGdaoPHWg
          stance: supports
          locator: CBDB:186739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186739）
          source: &a1
            id: s_unDKcdFgSh9qYmGdaoPHWg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲康（CBDB 186739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186739&o=json
            external_identifier: CBDB:186739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nDeJJFdKAYnpUZ3CQAxFNr
        subject_person_id: p_siyVkBP3BBDbeJ9Le2oaDN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mh6mEFcs8N2HrhNhuW4Nzt
          claim_id: c_nDeJJFdKAYnpUZ3CQAxFNr
          source_id: s_unDKcdFgSh9qYmGdaoPHWg
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
        id: c_qkrHtpHxKtjKz4B45rSKhL
        subject_person_id: p_siyVkBP3BBDbeJ9Le2oaDN
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
        - id: cs_kZddfY2dRoer48T3NzQ2Zm
          claim_id: c_qkrHtpHxKtjKz4B45rSKhL
          source_id: s_unDKcdFgSh9qYmGdaoPHWg
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

# 王仲康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲康 | accepted |
| death.date | 833年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲康（CBDB 186739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186739&o=json)
