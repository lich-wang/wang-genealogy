---
schema: wang-person/v1
id: p_1Uz2NPMjPmdwMCGc988W4F
status: active
merged_into: null
display_name: 王夢鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5hQehFS4EwBrDALwk21VZ7
        subject_person_id: p_1Uz2NPMjPmdwMCGc988W4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gQMttDoEXYG6EFE5Rk7bqT
          claim_id: c_5hQehFS4EwBrDALwk21VZ7
          source_id: s_XUd86x1PfRWYpQx3s6ygL2
          stance: supports
          locator: CBDB:568777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568777）
          source: &a1
            id: s_XUd86x1PfRWYpQx3s6ygL2
            source_type: api_record
            title: 中国历代人物传记资料库：王夢鶴（CBDB 568777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568777&o=json
            external_identifier: CBDB:568777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aBGoMGJPRXjZKZp3AbY4ZL
        subject_person_id: p_1Uz2NPMjPmdwMCGc988W4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢鶴，清人物。籍贯揚州府。（中国历代人物传记资料库 CBDB 568777）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qvBmiS0w1mLH5IIcJU9Lk6
          claim_id: c_aBGoMGJPRXjZKZp3AbY4ZL
          source_id: s_XUd86x1PfRWYpQx3s6ygL2
          stance: supports
          locator: CBDB:568777
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

# 王夢鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢鶴 | accepted |
| bio.summary | 王夢鶴，清人物。籍贯揚州府。（中国历代人物传记资料库 CBDB 568777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢鶴（CBDB 568777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568777&o=json)
