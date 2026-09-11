---
schema: wang-person/v1
id: p_HMccNAF9EcXsXkxdtB3QUZ
status: active
merged_into: null
display_name: 王國傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1s1k2mMCtvv9WttD8dGa9n
        subject_person_id: p_HMccNAF9EcXsXkxdtB3QUZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cPS5b1LyE4pCUok766afNH
          claim_id: c_1s1k2mMCtvv9WttD8dGa9n
          source_id: s_QYbdDesdCAnWRS2HoQeffo
          stance: supports
          locator: CBDB:101327
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101327）
          source: &a1
            id: s_QYbdDesdCAnWRS2HoQeffo
            source_type: api_record
            title: 中国历代人物传记资料库：王國傑（CBDB 101327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101327&o=json
            external_identifier: CBDB:101327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KGh5s5azWad1u5K7LbqQ5G
        subject_person_id: p_HMccNAF9EcXsXkxdtB3QUZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bgwkyK3VrFXLBiMfpSxdUj
          claim_id: c_KGh5s5azWad1u5K7LbqQ5G
          source_id: s_QYbdDesdCAnWRS2HoQeffo
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
        id: c_5sGGarF3PykrvMZuXwNqF3
        subject_person_id: p_HMccNAF9EcXsXkxdtB3QUZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1300年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8zJoy8ptpnwuQex1T4V9P
          claim_id: c_5sGGarF3PykrvMZuXwNqF3
          source_id: s_QYbdDesdCAnWRS2HoQeffo
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
        id: c_Q3qaUXD12B7nnM1iFSTMsu
        subject_person_id: p_HMccNAF9EcXsXkxdtB3QUZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國傑（1253年—1300年），元人物。籍贯建康路，身份为書院山長，曾任縣學教諭、路學正、州儒學教授。（中国历代人物传记资料库 CBDB 101327）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lDqzbasEY037sjgRVMKgG2
          claim_id: c_Q3qaUXD12B7nnM1iFSTMsu
          source_id: s_QYbdDesdCAnWRS2HoQeffo
          stance: supports
          locator: CBDB:101327
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

# 王國傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國傑 | accepted |
| birth.date | 1253年 | accepted |
| death.date | 1300年 | accepted |
| bio.summary | 王國傑（1253年—1300年），元人物。籍贯建康路，身份为書院山長，曾任縣學教諭、路學正、州儒學教授。（中国历代人物传记资料库 CBDB 101327） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國傑（CBDB 101327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101327&o=json)
