---
schema: wang-person/v1
id: p_YYhT15XGt5LPmQGHZGZp51
status: active
merged_into: null
display_name: 王來聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2w5WqBzxeG877g4tSHyCG
        subject_person_id: p_YYhT15XGt5LPmQGHZGZp51
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eK7f4X3FSD2Mri39Yumh7z
          claim_id: c_E2w5WqBzxeG877g4tSHyCG
          source_id: s_5GdfuYjK8TdPBNc95dm33S
          stance: supports
          locator: CBDB:493135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493135）
          source: &a1
            id: s_5GdfuYjK8TdPBNc95dm33S
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 493135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493135&o=json
            external_identifier: CBDB:493135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rR7Y4DyLL35qtzhzneCmwk
        subject_person_id: p_YYhT15XGt5LPmQGHZGZp51
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BMChMA196mN7iAVySz38X
          claim_id: c_rR7Y4DyLL35qtzhzneCmwk
          source_id: s_5GdfuYjK8TdPBNc95dm33S
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

# 王來聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來聘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來聘（CBDB 493135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493135&o=json)
