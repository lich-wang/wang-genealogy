---
schema: wang-person/v1
id: p_WCPixN7nTn8Gm4ABCTz9Uf
status: active
merged_into: null
display_name: 王經
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28nrGbYB72EGEuufneDtVa
        subject_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpeWejYkFetKmi8AKttGHK
          claim_id: c_28nrGbYB72EGEuufneDtVa
          source_id: s_9fMwTrqcCGj7F34Avcrbwq
          stance: supports
          locator: CBDB:260407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260407）
          source: &a1
            id: s_9fMwTrqcCGj7F34Avcrbwq
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 260407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json
            external_identifier: CBDB:260407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MMgkBst5xZUoXPg3a1GwLA
        subject_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260407）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__I2fbDertV5vHiB2ugu_gL
          claim_id: c_MMgkBst5xZUoXPg3a1GwLA
          source_id: s_9fMwTrqcCGj7F34Avcrbwq
          stance: supports
          locator: CBDB:260407
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bo3NzEH9NoPJ2qTxYX_eQX
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3X6aFMm61chvAyGIJIyKQS
          claim_id: c_bo3NzEH9NoPJ2qTxYX_eQX
          source_id: s_dRyrxo1yYESINwWxP_nCAt
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王經 之父／母。
          source:
            id: s_dRyrxo1yYESINwWxP_nCAt
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 260407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json
            external_identifier: CBDB:260407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AQ9akpIMW-fNkyi-x2mrW4
        subject_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YYz4Bt8RyCm-z7JlARvCcB
          claim_id: c_AQ9akpIMW-fNkyi-x2mrW4
          source_id: s_dRyrxo1yYESINwWxP_nCAt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dRyrxo1yYESINwWxP_nCAt
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 260407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json
            external_identifier: CBDB:260407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| other | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 260407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json)
