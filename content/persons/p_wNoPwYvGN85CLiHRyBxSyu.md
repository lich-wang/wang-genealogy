---
schema: wang-person/v1
id: p_wNoPwYvGN85CLiHRyBxSyu
status: active
merged_into: null
display_name: 王啚
cbdb_id: 335219
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EgSKazaUQJvnmv3qezrb2d
        subject_person_id: p_wNoPwYvGN85CLiHRyBxSyu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啚，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335219）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-tfPBCTQC_aZ-u2-9tFkDi
          claim_id: c_EgSKazaUQJvnmv3qezrb2d
          source_id: s_g6PX2Zm6LQSqqksimUxDEi
          stance: supports
          locator: CBDB:335219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g6PX2Zm6LQSqqksimUxDEi
            source_type: api_record
            title: 中国历代人物传记资料库：王啚（CBDB 335219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335219&o=json
            external_identifier: CBDB:335219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XS5GChsXgKGK6puw5xYC94
        subject_person_id: p_wNoPwYvGN85CLiHRyBxSyu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J2iVbcE17P1rjMP424hu1D
          claim_id: c_XS5GChsXgKGK6puw5xYC94
          source_id: s_g6PX2Zm6LQSqqksimUxDEi
          stance: supports
          locator: CBDB:335219
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F5WIV01ocfy1Fw4uTz-mo_
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wNoPwYvGN85CLiHRyBxSyu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yiPKzYG4sqK7wNVqEmWL12
          claim_id: c_F5WIV01ocfy1Fw4uTz-mo_
          source_id: s_DiZSWO4QuHQMD28vUojC0s
          stance: supports
          locator: CBDB：兄弟 王京（205560）之父／母 王秉忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王啚 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王啚 之父／母。
          source:
            id: s_DiZSWO4QuHQMD28vUojC0s
            source_type: api_record
            title: 中国历代人物传记资料库：王啚（CBDB 335219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335219&o=json
            external_identifier: CBDB:335219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xsB7dQbxgv1VM3fErdpLd2
        status: active
        display_name: 王秉忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bX9cKjlwTJN7Q_M3QhqFPE
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wNoPwYvGN85CLiHRyBxSyu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zi1MQMjskioKo1siyhU_qd
          claim_id: c_bX9cKjlwTJN7Q_M3QhqFPE
          source_id: s_DiZSWO4QuHQMD28vUojC0s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205560 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DiZSWO4QuHQMD28vUojC0s
            source_type: api_record
            title: 中国历代人物传记资料库：王啚（CBDB 335219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335219&o=json
            external_identifier: CBDB:335219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKF3URQYd2AiG1hYtKBDpV
        status: active
        display_name: 王京
        merged_into_person_id: null
---

# 王啚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啚，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335219） | accepted |
| name.primary | 王啚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xsB7dQbxgv1VM3fErdpLd2 | 王秉忠 | accepted |
| other | p_iKF3URQYd2AiG1hYtKBDpV | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啚（CBDB 335219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335219&o=json)
