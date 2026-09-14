---
schema: wang-person/v1
id: p_wPAQbJtd3hC95EJh54wiF8
status: active
merged_into: null
display_name: 王子讓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L9J2YX7Aaw2QVspfEWHBrG
        subject_person_id: p_wPAQbJtd3hC95EJh54wiF8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxEPDhEhQk9uyGpEG3gY14
          claim_id: c_L9J2YX7Aaw2QVspfEWHBrG
          source_id: s_m6WV7EpaZZ7FgJsxDVnoGJ
          stance: supports
          locator: CBDB:231331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231331）
          source: &a1
            id: s_m6WV7EpaZZ7FgJsxDVnoGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 231331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json
            external_identifier: CBDB:231331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GM66ANvG8HToK8WqD6eZ5q
        subject_person_id: p_wPAQbJtd3hC95EJh54wiF8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子讓，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231331）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n_kqkUjGobdOv9rPqHriTg
          claim_id: c_GM66ANvG8HToK8WqD6eZ5q
          source_id: s_m6WV7EpaZZ7FgJsxDVnoGJ
          stance: supports
          locator: CBDB:231331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1xTUQKgBjqlV4FUaZ_IxHb
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPAQbJtd3hC95EJh54wiF8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhkR2vCNkXJ1z8JNRqbm6R
          claim_id: c_1xTUQKgBjqlV4FUaZ_IxHb
          source_id: s_uUsj5v9SmEYuvGcjpKiJYE
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子讓 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子讓 之父／母。
          source:
            id: s_uUsj5v9SmEYuvGcjpKiJYE
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 231331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json
            external_identifier: CBDB:231331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tmHpBVPPGJeDHKDFHFAyWx
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dTUDJHy3XI3GTxpz8F0yWx
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wPAQbJtd3hC95EJh54wiF8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Cvn30qAIUv1gEPKM3AGbY
          claim_id: c_dTUDJHy3XI3GTxpz8F0yWx
          source_id: s_uUsj5v9SmEYuvGcjpKiJYE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uUsj5v9SmEYuvGcjpKiJYE
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 231331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json
            external_identifier: CBDB:231331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VVkAYnQtUyWdWCpmXePbBp
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王子讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子讓 | accepted |
| bio.summary | 王子讓，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmHpBVPPGJeDHKDFHFAyWx | 王希仙 | accepted |
| other | p_VVkAYnQtUyWdWCpmXePbBp | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子讓（CBDB 231331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json)
