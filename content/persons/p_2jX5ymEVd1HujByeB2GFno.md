---
schema: wang-person/v1
id: p_2jX5ymEVd1HujByeB2GFno
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ro8eFms1UoWo6KU8euvFG9
        subject_person_id: p_2jX5ymEVd1HujByeB2GFno
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
        - id: cs_DyPXdyYPcBm7PBkDarEuL3
          claim_id: c_Ro8eFms1UoWo6KU8euvFG9
          source_id: s_n5nLMgXZpyyb221TSC8a6S
          stance: supports
          locator: CBDB:555517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555517）
          source: &a1
            id: s_n5nLMgXZpyyb221TSC8a6S
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 555517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555517&o=json
            external_identifier: CBDB:555517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PpSmGJC6Q3iVLKedFXQV1R
        subject_person_id: p_2jX5ymEVd1HujByeB2GFno
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，清人物。籍贯會稽，入仕軍功補授(軍功)，曾任縣丞、知縣、知州。（中国历代人物传记资料库 CBDB 555517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1cxS8xRD1cXQTde8nXXMOK
          claim_id: c_PpSmGJC6Q3iVLKedFXQV1R
          source_id: s_n5nLMgXZpyyb221TSC8a6S
          stance: supports
          locator: CBDB:555517
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，清人物。籍贯會稽，入仕軍功補授(軍功)，曾任縣丞、知縣、知州。（中国历代人物传记资料库 CBDB 555517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 555517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555517&o=json)
