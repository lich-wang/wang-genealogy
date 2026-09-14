---
schema: wang-person/v1
id: p_uat2FEz33LL2tVVNR7MiLh
status: active
merged_into: null
display_name: 王普
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uFCLnwEYyvthYBGgNgZ3KA
        subject_person_id: p_uat2FEz33LL2tVVNR7MiLh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qyfFtkDTw3ckN4wePoNuEs
          claim_id: c_uFCLnwEYyvthYBGgNgZ3KA
          source_id: s_wCEp4ozbk65kffECaxsGgu
          stance: supports
          locator: CBDB:318785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318785）
          source: &a1
            id: s_wCEp4ozbk65kffECaxsGgu
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 318785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json
            external_identifier: CBDB:318785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGubkwc4UMgHgHHyYLgKTG
        subject_person_id: p_uat2FEz33LL2tVVNR7MiLh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318785）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t1K_fKdFVF0Mz-9qNz_Y3h
          claim_id: c_vGubkwc4UMgHgHHyYLgKTG
          source_id: s_wCEp4ozbk65kffECaxsGgu
          stance: supports
          locator: CBDB:318785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2A4NnwJRBNZOeiWpYoIY0M
        subject_person_id: p_hqCuRGLw8xBKqFLCQNmJMn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uat2FEz33LL2tVVNR7MiLh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NX-LYf1_E_S3PkG1xxabBn
          claim_id: c_2A4NnwJRBNZOeiWpYoIY0M
          source_id: s_inxKGvbdBNOZO0GiX_S7Nm
          stance: supports
          locator: CBDB：兄弟 王範（198805）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王普 与 王範 为同胞（CBDB 记「兄」），王範 之父／母即 王普 之父／母。
          source:
            id: s_inxKGvbdBNOZO0GiX_S7Nm
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 318785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json
            external_identifier: CBDB:318785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hqCuRGLw8xBKqFLCQNmJMn
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OoFz3S11Ftw5OfBoou_vDc
        subject_person_id: p_FXTUX1KirgmPw4nA2wx9vP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uat2FEz33LL2tVVNR7MiLh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNmRHyPb0rykxE19zf-L4t
          claim_id: c_OoFz3S11Ftw5OfBoou_vDc
          source_id: s_inxKGvbdBNOZO0GiX_S7Nm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198805 王範）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_inxKGvbdBNOZO0GiX_S7Nm
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 318785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json
            external_identifier: CBDB:318785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FXTUX1KirgmPw4nA2wx9vP
        status: active
        display_name: 王範
        merged_into_person_id: null
---

# 王普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王普 | accepted |
| bio.summary | 王普，明人物。天順四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 318785） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hqCuRGLw8xBKqFLCQNmJMn | 王信 | accepted |
| other | p_FXTUX1KirgmPw4nA2wx9vP | 王範 | accepted |

## 外部来源

- [中国历代人物传记资料库：王普（CBDB 318785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318785&o=json)
