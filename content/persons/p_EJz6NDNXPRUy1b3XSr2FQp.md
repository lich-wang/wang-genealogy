---
schema: wang-person/v1
id: p_EJz6NDNXPRUy1b3XSr2FQp
status: active
merged_into: null
display_name: 王稼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1jH3dmm36xud5kUYsSvxv1
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tG55BNSwiZtaMJdZ77f8zY
          claim_id: c_1jH3dmm36xud5kUYsSvxv1
          source_id: s_uNgy8ncguYMsX9WoGJzPaL
          stance: supports
          locator: CBDB:287445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287445）
          source: &a1
            id: s_uNgy8ncguYMsX9WoGJzPaL
            source_type: api_record
            title: 中国历代人物传记资料库：王稼（CBDB 287445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287445&o=json
            external_identifier: CBDB:287445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jmCWsWNBuJMQJTZgQkycSw
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
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
        - id: cs_eAhSEt79zsKAjAb2LQ8NNA
          claim_id: c_jmCWsWNBuJMQJTZgQkycSw
          source_id: s_uNgy8ncguYMsX9WoGJzPaL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6Np6EDyXWGJYrHP6z1zPLa
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoY6249MAYNFPdVz2u3z4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S-cL3tdcuz_PZodfZ14scd
          claim_id: c_6Np6EDyXWGJYrHP6z1zPLa
          source_id: s_uNgy8ncguYMsX9WoGJzPaL
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稼（CBDB 287445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287445&o=json)
