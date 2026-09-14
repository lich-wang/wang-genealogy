---
schema: wang-person/v1
id: p_rwp2N5N6JTsZgrDhxe13MQ
status: active
merged_into: null
display_name: 王傽
cbdb_id: 273735
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zj2QstBV3fAFwkpS62Q6KB
        subject_person_id: p_rwp2N5N6JTsZgrDhxe13MQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傽，明人物。弘治十八年進士，籍贯江都，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 273735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TvM5Bxh1iXcSZhrdFj37em
          claim_id: c_zj2QstBV3fAFwkpS62Q6KB
          source_id: s_QhL7L6DC6Kcv26na888FNT
          stance: supports
          locator: CBDB:273735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QhL7L6DC6Kcv26na888FNT
            source_type: api_record
            title: 中国历代人物传记资料库：王傽（CBDB 273735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273735&o=json
            external_identifier: CBDB:273735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hX8ZGjAFG7zp8Q3VsmETav
        subject_person_id: p_rwp2N5N6JTsZgrDhxe13MQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UpQ1pkbJi6goaAtBGhtt6z
          claim_id: c_hX8ZGjAFG7zp8Q3VsmETav
          source_id: s_QhL7L6DC6Kcv26na888FNT
          stance: supports
          locator: CBDB:273735
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aykw2w_6iOqRc0WVPXsI9e
        subject_person_id: p_8abpLSQKLVJUBSTYHH9VUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rwp2N5N6JTsZgrDhxe13MQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9FfQ7yUakCc7cunmrDkP9_
          claim_id: c_aykw2w_6iOqRc0WVPXsI9e
          source_id: s_yg96s9wt0uc4Ui8isEvDTV
          stance: supports
          locator: CBDB：兄弟 王儼（201519）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王傽 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王傽 之父／母。
          source:
            id: s_yg96s9wt0uc4Ui8isEvDTV
            source_type: api_record
            title: 中国历代人物传记资料库：王傽（CBDB 273735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273735&o=json
            external_identifier: CBDB:273735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8abpLSQKLVJUBSTYHH9VUf
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qSQBZBcPobv4AfXENYIdqx
        subject_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rwp2N5N6JTsZgrDhxe13MQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dLCVqty4W9KIGybSej3GX3
          claim_id: c_qSQBZBcPobv4AfXENYIdqx
          source_id: s_yg96s9wt0uc4Ui8isEvDTV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201519 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yg96s9wt0uc4Ui8isEvDTV
            source_type: api_record
            title: 中国历代人物传记资料库：王傽（CBDB 273735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273735&o=json
            external_identifier: CBDB:273735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DqGaEwDgvnqbuon9q4h7Cc
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王傽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傽，明人物。弘治十八年進士，籍贯江都，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 273735） | accepted |
| name.primary | 王傽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8abpLSQKLVJUBSTYHH9VUf | 王成 | accepted |
| other | p_DqGaEwDgvnqbuon9q4h7Cc | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傽（CBDB 273735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273735&o=json)
