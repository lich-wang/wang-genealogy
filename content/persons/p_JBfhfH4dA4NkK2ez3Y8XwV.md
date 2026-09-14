---
schema: wang-person/v1
id: p_JBfhfH4dA4NkK2ez3Y8XwV
status: active
merged_into: null
display_name: 王和
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQ1R2249ULUe4PAPEqAZJQ
        subject_person_id: p_JBfhfH4dA4NkK2ez3Y8XwV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XJQ2PPGkpQbVE5WVfiscDS
          claim_id: c_LQ1R2249ULUe4PAPEqAZJQ
          source_id: s_QEQ43ZJ2tTvzRCnJDNpp3X
          stance: supports
          locator: CBDB:283102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283102）
          source: &a1
            id: s_QEQ43ZJ2tTvzRCnJDNpp3X
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 283102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283102&o=json
            external_identifier: CBDB:283102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dWaJ8uXrMECM2pNSY4h6b
        subject_person_id: p_JBfhfH4dA4NkK2ez3Y8XwV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283102）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XwasKwDJxy_B37KCqU5R8F
          claim_id: c_3dWaJ8uXrMECM2pNSY4h6b
          source_id: s_QEQ43ZJ2tTvzRCnJDNpp3X
          stance: supports
          locator: CBDB:283102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_VJQopdY7QNQGYKuXURfXDN
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
        id: c_W8jA3VstXLUXKYxRSZo-kf
        subject_person_id: p_JBfhfH4dA4NkK2ez3Y8XwV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgusJ6vTalzn06CAzNrq9e
          claim_id: c_W8jA3VstXLUXKYxRSZo-kf
          source_id: s_TL7CNjwCDx0R2Y8uOCJZsi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_La7EdP44YnMK6A7Gvg2W3D
        status: active
        display_name: 王積
        merged_into_person_id: null
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VJQopdY7QNQGYKuXURfXDN | 王成 | accepted |
| other | p_La7EdP44YnMK6A7Gvg2W3D | 王積 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 283102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283102&o=json)
