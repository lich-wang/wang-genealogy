---
schema: wang-person/v1
id: p_56xcSABh3bHPf4QQEnGo5p
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WzM5m2s1p4vb5obijAZFb
        subject_person_id: p_56xcSABh3bHPf4QQEnGo5p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MCy7nt6TGHnznEQue6QNdC
          claim_id: c_8WzM5m2s1p4vb5obijAZFb
          source_id: s_i5GaMXW8ne4dtoba1tPKvP
          stance: supports
          locator: CBDB:460141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460141）
          source: &a1
            id: s_i5GaMXW8ne4dtoba1tPKvP
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 460141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460141&o=json
            external_identifier: CBDB:460141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wj8WoNcaxi99KmzF3MSs9J
        subject_person_id: p_56xcSABh3bHPf4QQEnGo5p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 460141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p6aRXN_oZkj4qQCZpCmnDp
          claim_id: c_Wj8WoNcaxi99KmzF3MSs9J
          source_id: s_i5GaMXW8ne4dtoba1tPKvP
          stance: supports
          locator: CBDB:460141
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 460141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 460141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460141&o=json)
