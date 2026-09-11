---
schema: wang-person/v1
id: p_wbuikgPnm9in19Y22kF8Xy
status: active
merged_into: null
display_name: 王粹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XYGRLVScV31YpQeVDBr6db
        subject_person_id: p_wbuikgPnm9in19Y22kF8Xy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTRFa2GGHPv3eC9HE5uCDV
          claim_id: c_XYGRLVScV31YpQeVDBr6db
          source_id: s_5pSYKLJfnh4PZtGN6BG9se
          stance: supports
          locator: CBDB:97989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97989）
          source: &a1
            id: s_5pSYKLJfnh4PZtGN6BG9se
            source_type: api_record
            title: 中国历代人物传记资料库：王粹（CBDB 97989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97989&o=json
            external_identifier: CBDB:97989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eDosjVNGZNGqj8Y88op3kr
        subject_person_id: p_wbuikgPnm9in19Y22kF8Xy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粹，宋人物。曾任閤門宣贊舍人。（中国历代人物传记资料库 CBDB 97989）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KSwyC3kGkPzMThZvJMyEV7
          claim_id: c_eDosjVNGZNGqj8Y88op3kr
          source_id: s_5pSYKLJfnh4PZtGN6BG9se
          stance: supports
          locator: CBDB:97989
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

# 王粹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王粹 | accepted |
| bio.summary | 王粹，宋人物。曾任閤門宣贊舍人。（中国历代人物传记资料库 CBDB 97989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王粹（CBDB 97989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97989&o=json)
