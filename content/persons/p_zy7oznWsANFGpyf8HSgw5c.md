---
schema: wang-person/v1
id: p_zy7oznWsANFGpyf8HSgw5c
status: active
merged_into: null
display_name: 王文若
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFzBNBkFzUda9C6FL69GqN
        subject_person_id: p_zy7oznWsANFGpyf8HSgw5c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文若
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ewQh1XRj7rRS3Pc82FydEk
          claim_id: c_zFzBNBkFzUda9C6FL69GqN
          source_id: s_MJpUNKHpPZd67Ds62opAgf
          stance: supports
          locator: CBDB:101093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101093）
          source: &a1
            id: s_MJpUNKHpPZd67Ds62opAgf
            source_type: api_record
            title: 中国历代人物传记资料库：王文若（CBDB 101093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101093&o=json
            external_identifier: CBDB:101093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y26jqDGe3XBkakTdaWJU6p
        subject_person_id: p_zy7oznWsANFGpyf8HSgw5c
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1283年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q6QCbRKyGbwLsnvLZedYdt
          claim_id: c_Y26jqDGe3XBkakTdaWJU6p
          source_id: s_MJpUNKHpPZd67Ds62opAgf
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
        id: c_Dbqzn4dGD7afpZPCsiHin4
        subject_person_id: p_zy7oznWsANFGpyf8HSgw5c
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1335年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HrpLbWEDzKrYJSsQ9GQ2S7
          claim_id: c_Dbqzn4dGD7afpZPCsiHin4
          source_id: s_MJpUNKHpPZd67Ds62opAgf
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
        id: c_Xqv9pJi3hkY7W6b4F8QkUf
        subject_person_id: p_zy7oznWsANFGpyf8HSgw5c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文若（1283年—1335年），元人物。籍贯安平，曾任兵部主事、戶部員外郎、監察御史。（中国历代人物传记资料库 CBDB 101093）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFiUTJCgNkYyaxgm8qu2Dv
          claim_id: c_Xqv9pJi3hkY7W6b4F8QkUf
          source_id: s_MJpUNKHpPZd67Ds62opAgf
          stance: supports
          locator: CBDB:101093
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

# 王文若

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文若 | accepted |
| birth.date | 1283年 | accepted |
| death.date | 1335年 | accepted |
| bio.summary | 王文若（1283年—1335年），元人物。籍贯安平，曾任兵部主事、戶部員外郎、監察御史。（中国历代人物传记资料库 CBDB 101093） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文若（CBDB 101093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101093&o=json)
