---
schema: wang-person/v1
id: p_PL2SY4EQHDnNU8dabbF1mF
status: active
merged_into: null
display_name: 王雲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DXcrwCb1HaAGLfWLkTD7R
        subject_person_id: p_PL2SY4EQHDnNU8dabbF1mF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XD42npJeYeu63qq22TeYxZ
          claim_id: c_9DXcrwCb1HaAGLfWLkTD7R
          source_id: s_yDTM6XPzNfBvCNXurLVFkc
          stance: supports
          locator: CBDB:322930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322930）
          source: &a1
            id: s_yDTM6XPzNfBvCNXurLVFkc
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 322930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322930&o=json
            external_identifier: CBDB:322930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cHLxHtfFWrn3eB6dzob4Ne
        subject_person_id: p_PL2SY4EQHDnNU8dabbF1mF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲，明人物。天順四年進士，籍贯上海。（中国历代人物传记资料库 CBDB 322930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aKabjl9E7_A14DeT5vsKxO
          claim_id: c_cHLxHtfFWrn3eB6dzob4Ne
          source_id: s_yDTM6XPzNfBvCNXurLVFkc
          stance: supports
          locator: CBDB:322930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U4k8qWJnPK4C8hS27yTYV1
        subject_person_id: p_FX65EqFKSpj3D1AsBT3bfb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PL2SY4EQHDnNU8dabbF1mF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qyDnXsOAw1YcJRt-9FZs1v
          claim_id: c_U4k8qWJnPK4C8hS27yTYV1
          source_id: s_kMZFLmvgeIh4VuNz3E91IN
          stance: supports
          locator: CBDB：兄弟 王霽（126885）之父／母 王顯忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲 与 王霽 为同胞（CBDB 记「弟」），王霽 之父／母即 王雲 之父／母。
          source:
            id: s_kMZFLmvgeIh4VuNz3E91IN
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 322930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322930&o=json
            external_identifier: CBDB:322930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FX65EqFKSpj3D1AsBT3bfb
        status: active
        display_name: 王顯忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OKG8WtPVqgmOjefg6pA46z
        subject_person_id: p_PL2SY4EQHDnNU8dabbF1mF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_g28gs_kt4RfQxGN9xBig
          claim_id: c_OKG8WtPVqgmOjefg6pA46z
          source_id: s_kMZFLmvgeIh4VuNz3E91IN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126885 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kMZFLmvgeIh4VuNz3E91IN
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 322930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322930&o=json
            external_identifier: CBDB:322930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fngUDbgD5w2bFevKYCEogv
        status: active
        display_name: 王霽
        merged_into_person_id: null
---

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| bio.summary | 王雲，明人物。天順四年進士，籍贯上海。（中国历代人物传记资料库 CBDB 322930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FX65EqFKSpj3D1AsBT3bfb | 王顯忠 | accepted |
| other | p_fngUDbgD5w2bFevKYCEogv | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 322930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322930&o=json)
