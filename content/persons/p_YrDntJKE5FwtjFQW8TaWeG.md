---
schema: wang-person/v1
id: p_YrDntJKE5FwtjFQW8TaWeG
status: active
merged_into: null
display_name: 王鉦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X2udBnvs6b8YA5nQ1ELQse
        subject_person_id: p_YrDntJKE5FwtjFQW8TaWeG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3pmvynQeBceBfyLWKBK6r5
          claim_id: c_X2udBnvs6b8YA5nQ1ELQse
          source_id: s_Ep1asaTrUkFFNmFVGDLMDx
          stance: supports
          locator: CBDB:510753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510753）
          source: &a1
            id: s_Ep1asaTrUkFFNmFVGDLMDx
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 510753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510753&o=json
            external_identifier: CBDB:510753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2gTSGwVE9mhJWTn9KVjRm
        subject_person_id: p_YrDntJKE5FwtjFQW8TaWeG
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
        - id: cs_G8BNMDYEcZjPjhgDKRmDAH
          claim_id: c_i2gTSGwVE9mhJWTn9KVjRm
          source_id: s_Ep1asaTrUkFFNmFVGDLMDx
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

# 王鉦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉦（CBDB 510753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510753&o=json)
