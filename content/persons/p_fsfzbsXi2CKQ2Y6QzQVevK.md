---
schema: wang-person/v1
id: p_fsfzbsXi2CKQ2Y6QzQVevK
status: active
merged_into: null
display_name: 王莘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vPjWjCCewiowTv6vgH6WFJ
        subject_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3C8eqZ7CmNpYYMeDrLPhy
          claim_id: c_vPjWjCCewiowTv6vgH6WFJ
          source_id: s_e4gn9sbVUfNayyCtQbAqLZ
          stance: supports
          locator: CBDB:126692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126692）
          source: &a1
            id: s_e4gn9sbVUfNayyCtQbAqLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 126692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126692&o=json
            external_identifier: CBDB:126692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QQu8sj9EfEbfAfedCKVWqL
        subject_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1476年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPa1oUiobAW7hJ779QzUR9
          claim_id: c_QQu8sj9EfEbfAfedCKVWqL
          source_id: s_e4gn9sbVUfNayyCtQbAqLZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M7XKJyzKR6nS2NGeYhdamP
        subject_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4c1BCMJwyoEz3KURc1exew
          claim_id: c_M7XKJyzKR6nS2NGeYhdamP
          source_id: s_e4gn9sbVUfNayyCtQbAqLZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qKsQj2ijEwEy2QRM6gKCuG
        subject_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
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
        - id: cs_smC2Cv4HbSRUkCZoA9icUx
          claim_id: c_qKsQj2ijEwEy2QRM6gKCuG
          source_id: s_e4gn9sbVUfNayyCtQbAqLZ
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

# 王莘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莘 | accepted |
| birth.date | 1476年 | accepted |
| death.date | 1545年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王莘（CBDB 126692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126692&o=json)
