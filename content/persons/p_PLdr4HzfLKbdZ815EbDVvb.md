---
schema: wang-person/v1
id: p_PLdr4HzfLKbdZ815EbDVvb
status: active
merged_into: null
display_name: 王淶民
cbdb_id: 209986
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CzgoZgXLKJ57hR4TuFTmYR
        subject_person_id: p_PLdr4HzfLKbdZ815EbDVvb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淶民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209986）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WVQjzYNAGY8ECSfWg2TNZU
          claim_id: c_CzgoZgXLKJ57hR4TuFTmYR
          source_id: s_mg8YkDyVBAjiEEZLRJpiV3
          stance: supports
          locator: CBDB:209986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mg8YkDyVBAjiEEZLRJpiV3
            source_type: api_record
            title: 中国历代人物传记资料库：王淶民（CBDB 209986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json
            external_identifier: CBDB:209986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GH4TfGfLiJ1PQZnXgpa7nt
        subject_person_id: p_PLdr4HzfLKbdZ815EbDVvb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淶民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8FrYmHs3pmvD1c3tzJBD9p
          claim_id: c_GH4TfGfLiJ1PQZnXgpa7nt
          source_id: s_mg8YkDyVBAjiEEZLRJpiV3
          stance: supports
          locator: CBDB:209986
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MWEGWKtPtTI2TI5SAL9B_I
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PLdr4HzfLKbdZ815EbDVvb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNIXKwHfNuQ-86-PFIV_pz
          claim_id: c_MWEGWKtPtTI2TI5SAL9B_I
          source_id: s_GBbJQGUDDsFQitplGaufzn
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王淶民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王淶民 之父／母。
          source:
            id: s_GBbJQGUDDsFQitplGaufzn
            source_type: api_record
            title: 中国历代人物传记资料库：王淶民（CBDB 209986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json
            external_identifier: CBDB:209986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MdJHKADyMQk6VMaKNEyXK2
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7xPEk1y-eOJEhIz_v1JCha
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PLdr4HzfLKbdZ815EbDVvb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lqgCkgV8N5TT5ms1KDXi4q
          claim_id: c_7xPEk1y-eOJEhIz_v1JCha
          source_id: s_GBbJQGUDDsFQitplGaufzn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GBbJQGUDDsFQitplGaufzn
            source_type: api_record
            title: 中国历代人物传记资料库：王淶民（CBDB 209986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json
            external_identifier: CBDB:209986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
---

# 王淶民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淶民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209986） | accepted |
| name.primary | 王淶民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| other | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淶民（CBDB 209986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json)
