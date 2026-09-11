---
schema: wang-person/v1
id: p_P7mgSpuk9Nu3BURrRjC9i7
status: active
merged_into: null
display_name: 王錦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xDGLFc7NXKehQkjAyvEdYf
        subject_person_id: p_P7mgSpuk9Nu3BURrRjC9i7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3QhY7r9a639fdz9mkFsLrv
          claim_id: c_xDGLFc7NXKehQkjAyvEdYf
          source_id: s_bU2JZK3hSxshU3BCLn2V9A
          stance: supports
          locator: CBDB:701103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701103）
          source: &a1
            id: s_bU2JZK3hSxshU3BCLn2V9A
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 701103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701103&o=json
            external_identifier: CBDB:701103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dD2ZKdD1Tf8TEbcF8yckT6
        subject_person_id: p_P7mgSpuk9Nu3BURrRjC9i7
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
        - id: cs_Zd8kUPdjnqJeC84KEamUA3
          claim_id: c_dD2ZKdD1Tf8TEbcF8yckT6
          source_id: s_bU2JZK3hSxshU3BCLn2V9A
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
        id: c_Ke3hvq-Z4uyok2z_NDPtMB
        subject_person_id: p_P7mgSpuk9Nu3BURrRjC9i7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RqxRV5qXzM38fbqJa4Twi3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQzJQOqMDVGCO1hP59TJyU
          claim_id: c_Ke3hvq-Z4uyok2z_NDPtMB
          source_id: s_bU2JZK3hSxshU3BCLn2V9A
          stance: supports
          locator: 錢塘縣志，lgid=219786：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RqxRV5qXzM38fbqJa4Twi3
        status: active
        display_name: 王尙賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RqxRV5qXzM38fbqJa4Twi3 | 王尙賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 701103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701103&o=json)
