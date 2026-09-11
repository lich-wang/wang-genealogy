---
schema: wang-person/v1
id: p_1NWD3HtaeasQ2UZxbhSJ3h
status: active
merged_into: null
display_name: 王敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFYkfBiEqV6Xyn8dP7Xo7e
        subject_person_id: p_1NWD3HtaeasQ2UZxbhSJ3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zxpa54T8jdWJ4K8Tn5mk5Q
          claim_id: c_CFYkfBiEqV6Xyn8dP7Xo7e
          source_id: s_PFc4e1GmjXwgQ7ygrx7wMa
          stance: supports
          locator: CBDB:476422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476422）
          source: &a1
            id: s_PFc4e1GmjXwgQ7ygrx7wMa
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 476422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476422&o=json
            external_identifier: CBDB:476422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yykk7z6Usb8Do63GsnHhid
        subject_person_id: p_1NWD3HtaeasQ2UZxbhSJ3h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。曾任都司。（中国历代人物传记资料库 CBDB 476422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_76tvCkqU1y4Fa3ZO4VB1wL
          claim_id: c_Yykk7z6Usb8Do63GsnHhid
          source_id: s_PFc4e1GmjXwgQ7ygrx7wMa
          stance: supports
          locator: CBDB:476422
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

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。曾任都司。（中国历代人物传记资料库 CBDB 476422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 476422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476422&o=json)
