---
schema: wang-person/v1
id: p_VJQopdY7QNQGYKuXURfXDN
status: active
merged_into: null
display_name: 王成
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3LFNQCKEwMMtVdMHCGWMJo
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82xrAdLx7MDXdwNjHVzsDr
          claim_id: c_3LFNQCKEwMMtVdMHCGWMJo
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: CBDB:283097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283097）
          source: &a1
            id: s_kAVHW2hxxC3wMci6HBMCKk
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 283097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json
            external_identifier: CBDB:283097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gtHtqN3e8quCSyqvRXSV9s
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y9OfqxDtL0qZY1E-1RQvpe
          claim_id: c_gtHtqN3e8quCSyqvRXSV9s
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: CBDB:283097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3AEjgCYLevwPoA7VA2SbQK
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpUncYFEauUm8D5Afsn7EC
          claim_id: c_3AEjgCYLevwPoA7VA2SbQK
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_La7EdP44YnMK6A7Gvg2W3D
        status: active
        display_name: 王積
        merged_into_person_id: null
    - claim:
        id: c_4uhnSZ40JBSU05jZUJf3wA
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6gpvLErUHEXtWLgjNjQ5ZU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nHB0ucmzxMxtCEyB9RVKDe
          claim_id: c_4uhnSZ40JBSU05jZUJf3wA
          source_id: s_mTf3W9M3f9f9Skj6p7O0Fa
          stance: supports
          locator: CBDB：兄弟 王積（126838）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王穆 与 王積 为同胞（CBDB 记「兄」），王積 之父／母即 王穆 之父／母。
          source:
            id: s_mTf3W9M3f9f9Skj6p7O0Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 283103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283103&o=json
            external_identifier: CBDB:283103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6gpvLErUHEXtWLgjNjQ5ZU
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_bziGCBS8zLWtJDmDJAvo4V
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H9Rpr53dFuM8LR7ax8zzUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPEaNPoDwCjPjFSqDIMJ8I
          claim_id: c_bziGCBS8zLWtJDmDJAvo4V
          source_id: s_NoyW6WNBhIeiVUgvrUj_O-
          stance: supports
          locator: CBDB：兄弟 王積（126838）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王科 与 王積 为同胞（CBDB 记「兄」），王積 之父／母即 王科 之父／母。
          source:
            id: s_NoyW6WNBhIeiVUgvrUj_O-
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 283105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json
            external_identifier: CBDB:283105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H9Rpr53dFuM8LR7ax8zzUM
        status: active
        display_name: 王科
        merged_into_person_id: null
    - claim:
        id: c_r0ClM7_0WIRQ8pmILYJuK6
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JBfhfH4dA4NkK2ez3Y8XwV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PsMRUjDvu23rbmW_Qj09hT
          claim_id: c_r0ClM7_0WIRQ8pmILYJuK6
          source_id: s_TL7CNjwCDx0R2Y8uOCJZsi
          stance: supports
          locator: CBDB：兄弟 王積（126838）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王和 与 王積 为同胞（CBDB 记「兄」），王積 之父／母即 王和 之父／母。
          source:
            id: s_TL7CNjwCDx0R2Y8uOCJZsi
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 283102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283102&o=json
            external_identifier: CBDB:283102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JBfhfH4dA4NkK2ez3Y8XwV
        status: active
        display_name: 王和
        merged_into_person_id: null
    - claim:
        id: c_nhPryhylgO2oR9oGLGCE0A
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJJLEhppC8FDu4f7rWgWtJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ela5xTHViMjC9obkikQOGN
          claim_id: c_nhPryhylgO2oR9oGLGCE0A
          source_id: s_BlWtt4VSDmr9kWwPPEMHOr
          stance: supports
          locator: CBDB：兄弟 王積（126838）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王种 与 王積 为同胞（CBDB 记「兄」），王積 之父／母即 王种 之父／母。
          source:
            id: s_BlWtt4VSDmr9kWwPPEMHOr
            source_type: api_record
            title: 中国历代人物传记资料库：王种（CBDB 283104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283104&o=json
            external_identifier: CBDB:283104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hJJLEhppC8FDu4f7rWgWtJ
        status: active
        display_name: 王种
        merged_into_person_id: null
    - claim:
        id: c_THHWdiVUP9nt_k_elRksY6
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y9smKs2u7Lz2K5nQmCcuvj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vBIzUn_l6gsSiRWoj9tQCe
          claim_id: c_THHWdiVUP9nt_k_elRksY6
          source_id: s_ai5_s99r-JSCLCsckw3H5K
          stance: supports
          locator: CBDB：兄弟 王積（126838）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王秩 与 王積 为同胞（CBDB 记「兄」），王積 之父／母即 王秩 之父／母。
          source:
            id: s_ai5_s99r-JSCLCsckw3H5K
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 283106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283106&o=json
            external_identifier: CBDB:283106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y9smKs2u7Lz2K5nQmCcuvj
        status: active
        display_name: 王秩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_La7EdP44YnMK6A7Gvg2W3D | 王積 | accepted |
| children | p_6gpvLErUHEXtWLgjNjQ5ZU | 王穆 | accepted |
| children | p_H9Rpr53dFuM8LR7ax8zzUM | 王科 | accepted |
| children | p_JBfhfH4dA4NkK2ez3Y8XwV | 王和 | accepted |
| children | p_hJJLEhppC8FDu4f7rWgWtJ | 王种 | accepted |
| children | p_y9smKs2u7Lz2K5nQmCcuvj | 王秩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 283097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json)
- [中国历代人物传记资料库：王和（CBDB 283102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283102&o=json)
- [中国历代人物传记资料库：王科（CBDB 283105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json)
- [中国历代人物传记资料库：王穆（CBDB 283103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283103&o=json)
- [中国历代人物传记资料库：王秩（CBDB 283106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283106&o=json)
- [中国历代人物传记资料库：王种（CBDB 283104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283104&o=json)
