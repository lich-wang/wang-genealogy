---
schema: wang-person/v1
id: p_Kjy9dYjGoRWwQ8wu8ELsug
status: active
merged_into: null
display_name: 王文德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kkEGrfDLYC7kDHXNFKukNB
        subject_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bpETNZJAkhToTFfgqBeiee
          claim_id: c_kkEGrfDLYC7kDHXNFKukNB
          source_id: s_PZvMNWMZUuKGJQnuAiknKs
          stance: supports
          locator: CBDB:318798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318798）
          source: &a1
            id: s_PZvMNWMZUuKGJQnuAiknKs
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 318798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json
            external_identifier: CBDB:318798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEV8bC4ymyt1ohpjdHP5JM
        subject_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文德，明人物。嘉靖三十二年進士，籍贯濰縣，曾任訓導。（中国历代人物传记资料库 CBDB 318798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aPTWLycE7b1SgbJADW-1_c
          claim_id: c_oEV8bC4ymyt1ohpjdHP5JM
          source_id: s_PZvMNWMZUuKGJQnuAiknKs
          stance: supports
          locator: CBDB:318798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ydOv3RdcZbOrOccProvYoI
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__qK-3Qt5z3h9qxor9Gnr_1
          claim_id: c_ydOv3RdcZbOrOccProvYoI
          source_id: s_LoYPZZkDWNooF2_TlLmLEh
          stance: supports
          locator: CBDB：兄弟 王文政（204419）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王文德 与 王文政 为同胞（CBDB 记「弟」），王文政 之父／母即 王文德 之父／母。
          source:
            id: s_LoYPZZkDWNooF2_TlLmLEh
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 318798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json
            external_identifier: CBDB:318798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BHMsY8qAbSMNGU2H8r2g2y
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9Sv3Wq9dc6iuPqv7tNifJf
        subject_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XDdPJdkgtz-ukQqh-8U-IW
          claim_id: c_9Sv3Wq9dc6iuPqv7tNifJf
          source_id: s_LoYPZZkDWNooF2_TlLmLEh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204419 王文政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LoYPZZkDWNooF2_TlLmLEh
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 318798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json
            external_identifier: CBDB:318798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BXF3dbPMGdrpkj3BGNYpWy
        status: active
        display_name: 王文政
        merged_into_person_id: null
---

# 王文德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文德 | accepted |
| bio.summary | 王文德，明人物。嘉靖三十二年進士，籍贯濰縣，曾任訓導。（中国历代人物传记资料库 CBDB 318798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BHMsY8qAbSMNGU2H8r2g2y | 王佐 | accepted |
| other | p_BXF3dbPMGdrpkj3BGNYpWy | 王文政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文德（CBDB 318798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json)
