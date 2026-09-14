---
schema: wang-person/v1
id: p_XPQGW4b2oZE9vHJ9vwQSw5
status: active
merged_into: null
display_name: 王範
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eXtXfW3TETavkHeVt3Kb8t
        subject_person_id: p_XPQGW4b2oZE9vHJ9vwQSw5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aKjqa99H8JDKAkE9YJwStF
          claim_id: c_eXtXfW3TETavkHeVt3Kb8t
          source_id: s_TKpBdxoaAjmiFiF6TUWkM6
          stance: supports
          locator: CBDB:329348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329348）
          source: &a1
            id: s_TKpBdxoaAjmiFiF6TUWkM6
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 329348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json
            external_identifier: CBDB:329348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ATe8K4JoRHPnq1UgJAD68h
        subject_person_id: p_XPQGW4b2oZE9vHJ9vwQSw5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王範，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZL9B40kSoLz_VSBm0iGlaI
          claim_id: c_ATe8K4JoRHPnq1UgJAD68h
          source_id: s_TKpBdxoaAjmiFiF6TUWkM6
          stance: supports
          locator: CBDB:329348
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TQDOGkDE9XlIoBMPFvURVk
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XPQGW4b2oZE9vHJ9vwQSw5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dRZLYpu8LHnavEfrzfcauP
          claim_id: c_TQDOGkDE9XlIoBMPFvURVk
          source_id: s_IrLtd8ctAm-ZvIDfYBHupa
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王範 与 王輦 为同胞（CBDB 记「弟」），王輦 之父／母即 王範 之父／母。
          source:
            id: s_IrLtd8ctAm-ZvIDfYBHupa
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 329348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json
            external_identifier: CBDB:329348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhYt9t4gYuDEpCnQq4aywZ
        status: active
        display_name: 王利
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Yk5MZsPN8werk_rvxa2FkZ
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XPQGW4b2oZE9vHJ9vwQSw5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vm-VZvzHVeQwU287KCcRSS
          claim_id: c_Yk5MZsPN8werk_rvxa2FkZ
          source_id: s_IrLtd8ctAm-ZvIDfYBHupa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IrLtd8ctAm-ZvIDfYBHupa
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 329348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json
            external_identifier: CBDB:329348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MT9QqQenXKizWtnnGxJQyH
        status: active
        display_name: 王輦
        merged_into_person_id: null
---

# 王範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王範 | accepted |
| bio.summary | 王範，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rhYt9t4gYuDEpCnQq4aywZ | 王利 | accepted |
| other | p_MT9QqQenXKizWtnnGxJQyH | 王輦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王範（CBDB 329348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json)
