---
schema: wang-person/v1
id: p_vHEpKbCAs7HAEWHxtEuH7M
status: active
merged_into: null
display_name: 王僉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3mhiKFg4BheKaECyFm2cFk
        subject_person_id: p_vHEpKbCAs7HAEWHxtEuH7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yDVHUDDwUtUybM1Psg1s7t
          claim_id: c_3mhiKFg4BheKaECyFm2cFk
          source_id: s_5MFQspozuAzS67pLhUqPCf
          stance: supports
          locator: CBDB:264661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264661）
          source: &a1
            id: s_5MFQspozuAzS67pLhUqPCf
            source_type: api_record
            title: 中国历代人物传记资料库：王僉（CBDB 264661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264661&o=json
            external_identifier: CBDB:264661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oszHtN3ZKDRotsJMtzNU5h
        subject_person_id: p_vHEpKbCAs7HAEWHxtEuH7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僉，明人物。弘治六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 264661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n7njnfmmfFrJQeBSxEaVON
          claim_id: c_oszHtN3ZKDRotsJMtzNU5h
          source_id: s_5MFQspozuAzS67pLhUqPCf
          stance: supports
          locator: CBDB:264661
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D--sxZafNdWz2j1_9knSYC
        subject_person_id: p_y6LBWWQUDfvbAme5hkV5bP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vHEpKbCAs7HAEWHxtEuH7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1n_Ga3PHuK3-1TLg_9oHm
          claim_id: c_D--sxZafNdWz2j1_9knSYC
          source_id: s_Qgz_PmCpEWeBQtTSkz0HcY
          stance: supports
          locator: CBDB：兄弟 王翀（200923）之父／母 王大韶
          quotation: null
          interpretation_note: 由兄弟关系推断：王僉 与 王翀 为同胞（CBDB 记「兄」），王翀 之父／母即 王僉 之父／母。
          source:
            id: s_Qgz_PmCpEWeBQtTSkz0HcY
            source_type: api_record
            title: 中国历代人物传记资料库：王僉（CBDB 264661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264661&o=json
            external_identifier: CBDB:264661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y6LBWWQUDfvbAme5hkV5bP
        status: active
        display_name: 王大韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rBsChRomZjO7Am81UyeqPF
        subject_person_id: p_XWgo6Q1nhAmPTc3Xg4eENs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vHEpKbCAs7HAEWHxtEuH7M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_220yXR9kl5n4AKTzYDPTYm
          claim_id: c_rBsChRomZjO7Am81UyeqPF
          source_id: s_Qgz_PmCpEWeBQtTSkz0HcY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200923 王翀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qgz_PmCpEWeBQtTSkz0HcY
            source_type: api_record
            title: 中国历代人物传记资料库：王僉（CBDB 264661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264661&o=json
            external_identifier: CBDB:264661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XWgo6Q1nhAmPTc3Xg4eENs
        status: active
        display_name: 王翀
        merged_into_person_id: null
---

# 王僉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僉 | accepted |
| bio.summary | 王僉，明人物。弘治六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 264661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y6LBWWQUDfvbAme5hkV5bP | 王大韶 | accepted |
| other | p_XWgo6Q1nhAmPTc3Xg4eENs | 王翀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僉（CBDB 264661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264661&o=json)
