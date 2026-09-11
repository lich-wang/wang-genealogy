---
schema: wang-person/v1
id: p_5R6WC7GqaRf5QoeHrJfaBD
status: active
merged_into: null
display_name: 王紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WXm8LFLbw3VZhazcUhK2sv
        subject_person_id: p_5R6WC7GqaRf5QoeHrJfaBD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bzb54iVAxoDg1CMUBMp6RS
          claim_id: c_WXm8LFLbw3VZhazcUhK2sv
          source_id: s_i8RZEsjtUBBzqAKGCjipa9
          stance: supports
          locator: CBDB:503013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503013）
          source: &a1
            id: s_i8RZEsjtUBBzqAKGCjipa9
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 503013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503013&o=json
            external_identifier: CBDB:503013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wmtM9FrbV8jX7VHZNUu6Qx
        subject_person_id: p_5R6WC7GqaRf5QoeHrJfaBD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。曾任布政使、御史。（中国历代人物传记资料库 CBDB 503013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uZp5QsMlx1Bwz2-Sp6in6W
          claim_id: c_wmtM9FrbV8jX7VHZNUu6Qx
          source_id: s_i8RZEsjtUBBzqAKGCjipa9
          stance: supports
          locator: CBDB:503013
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

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。曾任布政使、御史。（中国历代人物传记资料库 CBDB 503013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 503013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503013&o=json)
