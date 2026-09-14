---
schema: wang-person/v1
id: p_7W5wop8E2dzdL4okMppNdT
status: active
merged_into: null
display_name: 王子璵
cbdb_id: 322445
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B9ZWkHMEYmZdx1CmoF9rdn
        subject_person_id: p_7W5wop8E2dzdL4okMppNdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子璵，明人物。宣德五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 322445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Gz7MEOklvOuWLwi77zeFip
          claim_id: c_B9ZWkHMEYmZdx1CmoF9rdn
          source_id: s_KP81eJigMrTZzqDEJZaRBz
          stance: supports
          locator: CBDB:322445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KP81eJigMrTZzqDEJZaRBz
            source_type: api_record
            title: 中国历代人物传记资料库：王子璵（CBDB 322445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322445&o=json
            external_identifier: CBDB:322445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nBhS9qQs6v2ChAjoiw1q82
        subject_person_id: p_7W5wop8E2dzdL4okMppNdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nHZMDGPHNM5JL6WFi1MXAi
          claim_id: c_nBhS9qQs6v2ChAjoiw1q82
          source_id: s_KP81eJigMrTZzqDEJZaRBz
          stance: supports
          locator: CBDB:322445
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MLy7nDfEUd38gD5SkmEuU8
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7W5wop8E2dzdL4okMppNdT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0RNB8k7JzDhcSlm7xQ-IhF
          claim_id: c_MLy7nDfEUd38gD5SkmEuU8
          source_id: s_Ezl0huATSnZuAFnOTsExtX
          stance: supports
          locator: CBDB：兄弟 王玉（204676）之父／母 王士嘉
          quotation: null
          interpretation_note: 由兄弟关系推断：王子璵 与 王玉 为同胞（CBDB 记「兄」），王玉 之父／母即 王子璵 之父／母。
          source:
            id: s_Ezl0huATSnZuAFnOTsExtX
            source_type: api_record
            title: 中国历代人物传记资料库：王子璵（CBDB 322445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322445&o=json
            external_identifier: CBDB:322445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yhagHPLAgGF916n7f1YPNt
        status: active
        display_name: 王士嘉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_K38fjeKgaYayZjX870e06b
        subject_person_id: p_7W5wop8E2dzdL4okMppNdT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vMHM62tMEACNN1HhRp5f5c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kV7HBO8xFOlC4BHrzPmLOo
          claim_id: c_K38fjeKgaYayZjX870e06b
          source_id: s_Ezl0huATSnZuAFnOTsExtX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204676 王玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ezl0huATSnZuAFnOTsExtX
            source_type: api_record
            title: 中国历代人物传记资料库：王子璵（CBDB 322445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322445&o=json
            external_identifier: CBDB:322445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vMHM62tMEACNN1HhRp5f5c
        status: active
        display_name: 王玉
        merged_into_person_id: null
---

# 王子璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子璵，明人物。宣德五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 322445） | accepted |
| name.primary | 王子璵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yhagHPLAgGF916n7f1YPNt | 王士嘉 | accepted |
| other | p_vMHM62tMEACNN1HhRp5f5c | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子璵（CBDB 322445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322445&o=json)
