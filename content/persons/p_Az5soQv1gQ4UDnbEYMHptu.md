---
schema: wang-person/v1
id: p_Az5soQv1gQ4UDnbEYMHptu
status: active
merged_into: null
display_name: 王鶴年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zHEyNYrkQnzps3DBs17Rpp
        subject_person_id: p_Az5soQv1gQ4UDnbEYMHptu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJZtNrJyNQLkMFSDqBC245
          claim_id: c_zHEyNYrkQnzps3DBs17Rpp
          source_id: s_qfABQJkeVPqzL3UqZXuGdd
          stance: supports
          locator: CBDB:641016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641016）
          source: &a1
            id: s_qfABQJkeVPqzL3UqZXuGdd
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴年（CBDB 641016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641016&o=json
            external_identifier: CBDB:641016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jpx9i5NVyTjDPiuxB2qg7t
        subject_person_id: p_Az5soQv1gQ4UDnbEYMHptu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴年，清人物。籍贯貴築，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 641016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Z02uWJhSCwomIv4nqspns
          claim_id: c_Jpx9i5NVyTjDPiuxB2qg7t
          source_id: s_qfABQJkeVPqzL3UqZXuGdd
          stance: supports
          locator: CBDB:641016
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

# 王鶴年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴年 | accepted |
| bio.summary | 王鶴年，清人物。籍贯貴築，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 641016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶴年（CBDB 641016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641016&o=json)
