---
schema: wang-person/v1
id: p_WM6GHnEFU4TPGvKEWgRcFH
status: active
merged_into: null
display_name: 王文熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Dd1kWrxbdwPqczuKXwsLa
        subject_person_id: p_WM6GHnEFU4TPGvKEWgRcFH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kBwY4mt7jeQbVXqyL8QbJD
          claim_id: c_6Dd1kWrxbdwPqczuKXwsLa
          source_id: s_dQHDhe1fbK7Rt9aM317MeW
          stance: supports
          locator: CBDB:690928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690928）
          source: &a1
            id: s_dQHDhe1fbK7Rt9aM317MeW
            source_type: api_record
            title: 中国历代人物传记资料库：王文熙（CBDB 690928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690928&o=json
            external_identifier: CBDB:690928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W9sXTDQwU8umCASBGAb85J
        subject_person_id: p_WM6GHnEFU4TPGvKEWgRcFH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文熙，明人物。籍贯黟縣，身份为死國難，曾任府經歷。（中国历代人物传记资料库 CBDB 690928）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ASwhm1JOTMZJeZ-2U7NAUs
          claim_id: c_W9sXTDQwU8umCASBGAb85J
          source_id: s_dQHDhe1fbK7Rt9aM317MeW
          stance: supports
          locator: CBDB:690928
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

# 王文熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文熙 | accepted |
| bio.summary | 王文熙，明人物。籍贯黟縣，身份为死國難，曾任府經歷。（中国历代人物传记资料库 CBDB 690928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文熙（CBDB 690928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690928&o=json)
