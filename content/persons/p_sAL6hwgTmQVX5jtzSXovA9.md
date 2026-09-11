---
schema: wang-person/v1
id: p_sAL6hwgTmQVX5jtzSXovA9
status: active
merged_into: null
display_name: 王朝陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjmjadVDrPKaJ546TD8QVc
        subject_person_id: p_sAL6hwgTmQVX5jtzSXovA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HhHGEaWkqmK3risdLYJ5Wg
          claim_id: c_MjmjadVDrPKaJ546TD8QVc
          source_id: s_zWWkPpHczytXMccW9U7qLL
          stance: supports
          locator: CBDB:72049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72049）
          source: &a1
            id: s_zWWkPpHczytXMccW9U7qLL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝陽（CBDB 72049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72049&o=json
            external_identifier: CBDB:72049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uNLyEV42rVh8DL35hcXxAr
        subject_person_id: p_sAL6hwgTmQVX5jtzSXovA9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1882年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zTZKDAaanGK9u8EoxVTDN7
          claim_id: c_uNLyEV42rVh8DL35hcXxAr
          source_id: s_zWWkPpHczytXMccW9U7qLL
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
        id: c_6YQkV5G5iB9Qsp4FcNJ7iz
        subject_person_id: p_sAL6hwgTmQVX5jtzSXovA9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1932年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JhrB637rChRdF38MK87xNY
          claim_id: c_6YQkV5G5iB9Qsp4FcNJ7iz
          source_id: s_zWWkPpHczytXMccW9U7qLL
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
        id: c_wmpX4MJNBCzpUNAy9iPZAh
        subject_person_id: p_sAL6hwgTmQVX5jtzSXovA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝陽（1882年—1932年），中華民國人物。籍贯常熟。（中国历代人物传记资料库 CBDB 72049）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lJhYAedVEFkcsJOL916c46
          claim_id: c_wmpX4MJNBCzpUNAy9iPZAh
          source_id: s_zWWkPpHczytXMccW9U7qLL
          stance: supports
          locator: CBDB:72049
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

# 王朝陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝陽 | accepted |
| birth.date | 1882年 | accepted |
| death.date | 1932年 | accepted |
| bio.summary | 王朝陽（1882年—1932年），中華民國人物。籍贯常熟。（中国历代人物传记资料库 CBDB 72049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝陽（CBDB 72049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72049&o=json)
