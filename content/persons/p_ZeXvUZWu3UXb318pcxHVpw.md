---
schema: wang-person/v1
id: p_ZeXvUZWu3UXb318pcxHVpw
status: active
merged_into: null
display_name: 王虔休
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nZXNX3sqzgkEXKByAeQFDs
        subject_person_id: p_ZeXvUZWu3UXb318pcxHVpw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kxqUv5fUNCfgeNZ5x95Gea
          claim_id: c_nZXNX3sqzgkEXKByAeQFDs
          source_id: s_hDnoayM9NX8GG8H33Wxejn
          stance: supports
          locator: CBDB:194818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194818）
          source: &a1
            id: s_hDnoayM9NX8GG8H33Wxejn
            source_type: api_record
            title: 中国历代人物传记资料库：王虔休（CBDB 194818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194818&o=json
            external_identifier: CBDB:194818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wa3CQvm6kBS8cAN54QcZKk
        subject_person_id: p_ZeXvUZWu3UXb318pcxHVpw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 737年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RmbrN2TZyLbAvfrmncPMNn
          claim_id: c_wa3CQvm6kBS8cAN54QcZKk
          source_id: s_hDnoayM9NX8GG8H33Wxejn
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
        id: c_j7Ep6iXGZXtqXPT9zWiwEM
        subject_person_id: p_ZeXvUZWu3UXb318pcxHVpw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 799年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsGqMAVzwhBnuja7K2D1MQ
          claim_id: c_j7Ep6iXGZXtqXPT9zWiwEM
          source_id: s_hDnoayM9NX8GG8H33Wxejn
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
        id: c_3hTNJ9NzfJHWgp32p5t3F8
        subject_person_id: p_ZeXvUZWu3UXb318pcxHVpw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔休（737年—799年），唐人物。曾任昭義軍。（中国历代人物传记资料库 CBDB 194818）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U1L5tJS8SRPeDnRnN3VKtK
          claim_id: c_3hTNJ9NzfJHWgp32p5t3F8
          source_id: s_hDnoayM9NX8GG8H33Wxejn
          stance: supports
          locator: CBDB:194818
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

# 王虔休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虔休 | accepted |
| birth.date | 737年 | accepted |
| death.date | 799年 | accepted |
| bio.summary | 王虔休（737年—799年），唐人物。曾任昭義軍。（中国历代人物传记资料库 CBDB 194818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王虔休（CBDB 194818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194818&o=json)
