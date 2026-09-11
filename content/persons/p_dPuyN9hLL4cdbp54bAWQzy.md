---
schema: wang-person/v1
id: p_dPuyN9hLL4cdbp54bAWQzy
status: active
merged_into: null
display_name: 王箴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLBnMY3R3gTLQrgPd4Dz9S
        subject_person_id: p_dPuyN9hLL4cdbp54bAWQzy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H7P2FBvF6BkL4qQGX2XGCm
          claim_id: c_iLBnMY3R3gTLQrgPd4Dz9S
          source_id: s_2ptuMFvjiCQHEGLSwSZhYe
          stance: supports
          locator: CBDB:454417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454417）
          source: &a1
            id: s_2ptuMFvjiCQHEGLSwSZhYe
            source_type: api_record
            title: 中国历代人物传记资料库：王箴（CBDB 454417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454417&o=json
            external_identifier: CBDB:454417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oCBaw9jVVczDCH4JmftJJu
        subject_person_id: p_dPuyN9hLL4cdbp54bAWQzy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 454417）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hh-jy3-hQ_M-CYFCT08QOb
          claim_id: c_oCBaw9jVVczDCH4JmftJJu
          source_id: s_2ptuMFvjiCQHEGLSwSZhYe
          stance: supports
          locator: CBDB:454417
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

# 王箴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王箴 | accepted |
| bio.summary | 王箴，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 454417） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王箴（CBDB 454417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454417&o=json)
