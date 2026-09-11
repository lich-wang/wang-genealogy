---
schema: wang-person/v1
id: p_ervsqJyhz84b1LCHPS9j66
status: active
merged_into: null
display_name: 王拱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JrYmP3UjFutjrpGuivbTeN
        subject_person_id: p_ervsqJyhz84b1LCHPS9j66
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ad2kEyTiUPxy7sUabGUpV
          claim_id: c_JrYmP3UjFutjrpGuivbTeN
          source_id: s_yBVLwVKEPMCVjZ4oqXjn19
          stance: supports
          locator: CBDB:454562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454562）
          source: &a1
            id: s_yBVLwVKEPMCVjZ4oqXjn19
            source_type: api_record
            title: 中国历代人物传记资料库：王拱（CBDB 454562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454562&o=json
            external_identifier: CBDB:454562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AGxUPBmBCEh7GSgMQGGkG6
        subject_person_id: p_ervsqJyhz84b1LCHPS9j66
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 454562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tUZgZWyWYSWKQE20X2Qqp3
          claim_id: c_AGxUPBmBCEh7GSgMQGGkG6
          source_id: s_yBVLwVKEPMCVjZ4oqXjn19
          stance: supports
          locator: CBDB:454562
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

# 王拱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱 | accepted |
| bio.summary | 王拱，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 454562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱（CBDB 454562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454562&o=json)
