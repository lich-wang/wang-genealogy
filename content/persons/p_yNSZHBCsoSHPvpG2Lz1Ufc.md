---
schema: wang-person/v1
id: p_yNSZHBCsoSHPvpG2Lz1Ufc
status: active
merged_into: null
display_name: 王信濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JfSttKc5ykunZYNKt9UabR
        subject_person_id: p_yNSZHBCsoSHPvpG2Lz1Ufc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBhiCeYft2UDzQ3oUEKVu5
          claim_id: c_JfSttKc5ykunZYNKt9UabR
          source_id: s_rim9L1Ewy71zjZWV47bbfq
          stance: supports
          locator: CBDB:636064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636064）
          source: &a1
            id: s_rim9L1Ewy71zjZWV47bbfq
            source_type: api_record
            title: 中国历代人物传记资料库：王信濂（CBDB 636064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636064&o=json
            external_identifier: CBDB:636064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqcfxuXPeovyvssjb9CHZe
        subject_person_id: p_yNSZHBCsoSHPvpG2Lz1Ufc
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
        - id: cs_n5am9HfT5DQU2Exku8f8NL
          claim_id: c_xqcfxuXPeovyvssjb9CHZe
          source_id: s_rim9L1Ewy71zjZWV47bbfq
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

# 王信濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信濂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信濂（CBDB 636064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636064&o=json)
