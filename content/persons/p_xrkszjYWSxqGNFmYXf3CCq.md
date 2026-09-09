---
schema: wang-person/v1
id: p_xrkszjYWSxqGNFmYXf3CCq
status: active
merged_into: null
display_name: 王紹昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e9Pt2Z1BiAPd2MaN1GWMGg
        subject_person_id: p_xrkszjYWSxqGNFmYXf3CCq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UPJhqGpFyZ97tEy4K5nNtk
          claim_id: c_e9Pt2Z1BiAPd2MaN1GWMGg
          source_id: s_KKQR9QT74ctxp6HFQdCStp
          stance: supports
          locator: CBDB:639766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639766）
          source: &a1
            id: s_KKQR9QT74ctxp6HFQdCStp
            source_type: api_record
            title: 中国历代人物传记资料库：王紹昌（CBDB 639766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639766&o=json
            external_identifier: CBDB:639766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KzcRMZ7JqwMvbMma5RShse
        subject_person_id: p_xrkszjYWSxqGNFmYXf3CCq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NsnQkkvDa6tZQsoC86KchM
          claim_id: c_KzcRMZ7JqwMvbMma5RShse
          source_id: s_KKQR9QT74ctxp6HFQdCStp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王紹昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹昌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹昌（CBDB 639766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639766&o=json)
