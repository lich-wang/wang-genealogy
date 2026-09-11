---
schema: wang-person/v1
id: p_ZLfBx5j6gJQB3E5Wm4nwkv
status: active
merged_into: null
display_name: 王凱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uu9AN9LDKxXqmNBGZgGeLN
        subject_person_id: p_ZLfBx5j6gJQB3E5Wm4nwkv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_deQkb5DvjMXB7s9Ar6UnSF
          claim_id: c_Uu9AN9LDKxXqmNBGZgGeLN
          source_id: s_sbYp5hpc6wHNGY1FRVDkDE
          stance: supports
          locator: CBDB:482919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482919）
          source: &a1
            id: s_sbYp5hpc6wHNGY1FRVDkDE
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 482919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482919&o=json
            external_identifier: CBDB:482919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s6vycKG75xHn8ZSMTWHaV1
        subject_person_id: p_ZLfBx5j6gJQB3E5Wm4nwkv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 482919）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G_5o9uH3-XJxOTmkxUwzg9
          claim_id: c_s6vycKG75xHn8ZSMTWHaV1
          source_id: s_sbYp5hpc6wHNGY1FRVDkDE
          stance: supports
          locator: CBDB:482919
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

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| bio.summary | 王凱，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 482919） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 482919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482919&o=json)
