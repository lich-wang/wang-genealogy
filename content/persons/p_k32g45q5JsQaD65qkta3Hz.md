---
schema: wang-person/v1
id: p_k32g45q5JsQaD65qkta3Hz
status: active
merged_into: null
display_name: 王寂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yySoEgGVm7EBWTb5pXFiQA
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3YTtBf3DkATSJ8Eb24vN85
          claim_id: c_yySoEgGVm7EBWTb5pXFiQA
          source_id: s_WhxHMqdZgj7w8JhfhfhPBj
          stance: supports
          locator: CBDB:35022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35022）
          source: &a1
            id: s_WhxHMqdZgj7w8JhfhfhPBj
            source_type: api_record
            title: 中国历代人物传记资料库：王寂（CBDB 35022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35022&o=json
            external_identifier: CBDB:35022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dn1WVs71hKi2QPizcKhY6L
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oBHfzoArfbUp9XMx2MFbJs
          claim_id: c_dn1WVs71hKi2QPizcKhY6L
          source_id: s_WhxHMqdZgj7w8JhfhfhPBj
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

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寂 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寂（CBDB 35022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35022&o=json)
