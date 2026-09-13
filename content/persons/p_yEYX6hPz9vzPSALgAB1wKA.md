---
schema: wang-person/v1
id: p_yEYX6hPz9vzPSALgAB1wKA
status: active
merged_into: null
display_name: 王策向
cbdb_id: 72080
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gCbep4eoMDQDLDgYFFEM7A
        subject_person_id: p_yEYX6hPz9vzPSALgAB1wKA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王策向（生于1843年），清人物。籍贯武昌。（中国历代人物传记资料库 CBDB 72080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_toxp_JRJ0OdV3sZSteqYMk
          claim_id: c_gCbep4eoMDQDLDgYFFEM7A
          source_id: s_1M3Dn3pPvgWwCT9cExExJ6
          stance: supports
          locator: CBDB:72080
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1M3Dn3pPvgWwCT9cExExJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王策向（CBDB 72080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72080&o=json
            external_identifier: CBDB:72080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TTWSdzNgwhJs3uTqyowEmC
        subject_person_id: p_yEYX6hPz9vzPSALgAB1wKA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1843-01-01
            latest: 1843-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W3LfvBrEGELrF4PkxLtfsv
          claim_id: c_TTWSdzNgwhJs3uTqyowEmC
          source_id: s_1M3Dn3pPvgWwCT9cExExJ6
          stance: supports
          locator: CBDB:72080
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1843
          source:
            id: s_1M3Dn3pPvgWwCT9cExExJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王策向（CBDB 72080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72080&o=json
            external_identifier: CBDB:72080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kjihJkZ6YjExq1GK5YCYZw
        subject_person_id: p_yEYX6hPz9vzPSALgAB1wKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王策向
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nKgxSoffhFXyvsh8aSkGrN
          claim_id: c_kjihJkZ6YjExq1GK5YCYZw
          source_id: s_1M3Dn3pPvgWwCT9cExExJ6
          stance: supports
          locator: CBDB:72080
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1843
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

# 王策向

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王策向（生于1843年），清人物。籍贯武昌。（中国历代人物传记资料库 CBDB 72080） | accepted |
| birth.date | 1843年 | accepted |
| name.primary | 王策向 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王策向（CBDB 72080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72080&o=json)
