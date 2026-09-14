---
schema: wang-person/v1
id: p_8rjKEofeTDnhiC3sErsgD1
status: active
merged_into: null
display_name: 王培
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cDnKoJqAADXcNjM3o9EG1k
        subject_person_id: p_8rjKEofeTDnhiC3sErsgD1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pB5Fq9JTGpBFKtjMH66a1C
          claim_id: c_cDnKoJqAADXcNjM3o9EG1k
          source_id: s_fDb4xT8wafAe1eDXYUHzNR
          stance: supports
          locator: CBDB:273952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273952）
          source: &a1
            id: s_fDb4xT8wafAe1eDXYUHzNR
            source_type: api_record
            title: 中国历代人物传记资料库：王培（CBDB 273952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273952&o=json
            external_identifier: CBDB:273952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f2X5Ryg3478PDXAP4XCB3p
        subject_person_id: p_8rjKEofeTDnhiC3sErsgD1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培，明人物。弘治十八年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 273952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qZ5liiC5WhjIVi0Jyz_htp
          claim_id: c_f2X5Ryg3478PDXAP4XCB3p
          source_id: s_fDb4xT8wafAe1eDXYUHzNR
          stance: supports
          locator: CBDB:273952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OKyEre1onyIkvdr0Te5V4W
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8rjKEofeTDnhiC3sErsgD1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7DONHoZ9ONGOqfBSBloA0g
          claim_id: c_OKyEre1onyIkvdr0Te5V4W
          source_id: s_P1QhPj0xautAMuk5hNx1jf
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王培 与 王坊 为同胞（CBDB 记「弟」），王坊 之父／母即 王培 之父／母。
          source:
            id: s_P1QhPj0xautAMuk5hNx1jf
            source_type: api_record
            title: 中国历代人物传记资料库：王培（CBDB 273952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273952&o=json
            external_identifier: CBDB:273952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5pNEVYCVJAEuFuR4sLpcJ
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jo9Yk4NG7U0hk4WhZGyTiq
        subject_person_id: p_8rjKEofeTDnhiC3sErsgD1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-xaYnzgG8YKNwr3ljKh3Km
          claim_id: c_Jo9Yk4NG7U0hk4WhZGyTiq
          source_id: s_P1QhPj0xautAMuk5hNx1jf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201535 王坊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P1QhPj0xautAMuk5hNx1jf
            source_type: api_record
            title: 中国历代人物传记资料库：王培（CBDB 273952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273952&o=json
            external_identifier: CBDB:273952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mXq9uxGc8pg1wHpdoUPQx2
        status: active
        display_name: 王坊
        merged_into_person_id: null
---

# 王培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培 | accepted |
| bio.summary | 王培，明人物。弘治十八年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 273952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5pNEVYCVJAEuFuR4sLpcJ | 王弼 | accepted |
| other | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王培（CBDB 273952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273952&o=json)
