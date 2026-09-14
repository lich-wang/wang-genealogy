---
schema: wang-person/v1
id: p_8j61m5VUywF63L1HFebBUf
status: active
merged_into: null
display_name: 王默
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9sXeaj2CyGh5D4Qvf2HQe
        subject_person_id: p_8j61m5VUywF63L1HFebBUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DqZQamkLtMKLxs7HpqYCvD
          claim_id: c_R9sXeaj2CyGh5D4Qvf2HQe
          source_id: s_ppFa4YuUeRYZV4cTNP4iKY
          stance: supports
          locator: CBDB:283525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283525）
          source: &a1
            id: s_ppFa4YuUeRYZV4cTNP4iKY
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 283525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json
            external_identifier: CBDB:283525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58kNDCz5D385959ceD7wM4
        subject_person_id: p_8j61m5VUywF63L1HFebBUf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283525）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6MPJRvlNLXi0Zo-zsK2Gkd
          claim_id: c_58kNDCz5D385959ceD7wM4
          source_id: s_ppFa4YuUeRYZV4cTNP4iKY
          stance: supports
          locator: CBDB:283525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DCONrbpytxAxfKgCbppU9o
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8j61m5VUywF63L1HFebBUf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCjrbNoLRXN_Vj3v8zfxrL
          claim_id: c_DCONrbpytxAxfKgCbppU9o
          source_id: s_ceROc4MU1rcPbF2Qe5huJr
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王默 与 王煒 为同胞（CBDB 记「弟」），王煒 之父／母即 王默 之父／母。
          source:
            id: s_ceROc4MU1rcPbF2Qe5huJr
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 283525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json
            external_identifier: CBDB:283525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y9Be6wCSGkH3WJd1jLBiqu
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PaL3yNfrwIaw1R70wS0E3_
        subject_person_id: p_8j61m5VUywF63L1HFebBUf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4zF6eP08Ayp5IDax2s7p6
          claim_id: c_PaL3yNfrwIaw1R70wS0E3_
          source_id: s_ceROc4MU1rcPbF2Qe5huJr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ceROc4MU1rcPbF2Qe5huJr
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 283525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json
            external_identifier: CBDB:283525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
---

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默 | accepted |
| bio.summary | 王默，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y9Be6wCSGkH3WJd1jLBiqu | 王相 | accepted |
| other | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王默（CBDB 283525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json)
