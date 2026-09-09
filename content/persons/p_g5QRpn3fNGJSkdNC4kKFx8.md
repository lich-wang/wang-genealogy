---
schema: wang-person/v1
id: p_g5QRpn3fNGJSkdNC4kKFx8
status: active
merged_into: null
display_name: 王賢輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9H4vmYA68AKsw3yoPVY64
        subject_person_id: p_g5QRpn3fNGJSkdNC4kKFx8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Ua61zbRsqcjyd9okQmDv1
          claim_id: c_K9H4vmYA68AKsw3yoPVY64
          source_id: s_w3D1XdG5dR1vqB6MNFmxz8
          stance: supports
          locator: CBDB:640343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640343）
          source: &a1
            id: s_w3D1XdG5dR1vqB6MNFmxz8
            source_type: api_record
            title: 中国历代人物传记资料库：王賢輔（CBDB 640343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640343&o=json
            external_identifier: CBDB:640343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ezhY8G45d1VQX3fviYTKjG
        subject_person_id: p_g5QRpn3fNGJSkdNC4kKFx8
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
        - id: cs_BhbGtPqb6e3FantgGNUn4j
          claim_id: c_ezhY8G45d1VQX3fviYTKjG
          source_id: s_w3D1XdG5dR1vqB6MNFmxz8
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

# 王賢輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢輔 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢輔（CBDB 640343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640343&o=json)
