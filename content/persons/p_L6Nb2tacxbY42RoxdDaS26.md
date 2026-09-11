---
schema: wang-person/v1
id: p_L6Nb2tacxbY42RoxdDaS26
status: active
merged_into: null
display_name: 王叔中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TiMgj3Jy3ZUHeVPM2DRHxH
        subject_person_id: p_L6Nb2tacxbY42RoxdDaS26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HB7MTPKB1WyEPNXv6p2eDK
          claim_id: c_TiMgj3Jy3ZUHeVPM2DRHxH
          source_id: s_NMHBjHfUhnWEE3DRgv5vpc
          stance: supports
          locator: CBDB:304153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304153）
          source: &a1
            id: s_NMHBjHfUhnWEE3DRgv5vpc
            source_type: api_record
            title: 中国历代人物传记资料库：王叔中（CBDB 304153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304153&o=json
            external_identifier: CBDB:304153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H8XLrMUBHVRs6DXwf8BJv9
        subject_person_id: p_L6Nb2tacxbY42RoxdDaS26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KI6jn_YEcgyvXYOcG27-8m
          claim_id: c_H8XLrMUBHVRs6DXwf8BJv9
          source_id: s_NMHBjHfUhnWEE3DRgv5vpc
          stance: supports
          locator: CBDB:304153
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

# 王叔中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔中 | accepted |
| bio.summary | 王叔中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔中（CBDB 304153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304153&o=json)
