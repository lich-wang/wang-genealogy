---
schema: wang-person/v1
id: p_BKVS9ZH4mY3GAcfh17CbB2
status: active
merged_into: null
display_name: 王劭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QacCLBP1t71gVkj2AYpww3
        subject_person_id: p_BKVS9ZH4mY3GAcfh17CbB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L3DyhDdDbGvUJnLeq1KXjy
          claim_id: c_QacCLBP1t71gVkj2AYpww3
          source_id: s_4uwwC4by6yaX92k68FwAAE
          stance: supports
          locator: CBDB:287277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287277）
          source: &a1
            id: s_4uwwC4by6yaX92k68FwAAE
            source_type: api_record
            title: 中国历代人物传记资料库：王劭（CBDB 287277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287277&o=json
            external_identifier: CBDB:287277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4giB5JsMLu8kDvPvWDyPT
        subject_person_id: p_BKVS9ZH4mY3GAcfh17CbB2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭，明人物。永樂十年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 287277）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lw3x897m0Ehb0tJLXFGPLP
          claim_id: c_b4giB5JsMLu8kDvPvWDyPT
          source_id: s_4uwwC4by6yaX92k68FwAAE
          stance: supports
          locator: CBDB:287277
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f3jTxlDhGH6RhyAEQWHHGL
        subject_person_id: p_SGGdU1LxHBDdFcjKk3iP6L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BKVS9ZH4mY3GAcfh17CbB2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eGVMCcBNnOcySgwgffx_ZH
          claim_id: c_f3jTxlDhGH6RhyAEQWHHGL
          source_id: s_hePl_Krtso2cRFCbxC-NRo
          stance: supports
          locator: CBDB：兄弟 王凱（202389）之父／母 王升遒
          quotation: null
          interpretation_note: 由兄弟关系推断：王劭 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王劭 之父／母。
          source:
            id: s_hePl_Krtso2cRFCbxC-NRo
            source_type: api_record
            title: 中国历代人物传记资料库：王劭（CBDB 287277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287277&o=json
            external_identifier: CBDB:287277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SGGdU1LxHBDdFcjKk3iP6L
        status: active
        display_name: 王升遒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uJqAPvzIlznJUYZZiq2U2u
        subject_person_id: p_BKVS9ZH4mY3GAcfh17CbB2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KSpN_KV9eaMLdTIZqfyb4L
          claim_id: c_uJqAPvzIlznJUYZZiq2U2u
          source_id: s_hePl_Krtso2cRFCbxC-NRo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202389 王凱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hePl_Krtso2cRFCbxC-NRo
            source_type: api_record
            title: 中国历代人物传记资料库：王劭（CBDB 287277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287277&o=json
            external_identifier: CBDB:287277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SoTpRzw7JQF2RgUdE8FLLB
        status: active
        display_name: 王凱
        merged_into_person_id: null
---

# 王劭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王劭 | accepted |
| bio.summary | 王劭，明人物。永樂十年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 287277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SGGdU1LxHBDdFcjKk3iP6L | 王升遒 | accepted |
| other | p_SoTpRzw7JQF2RgUdE8FLLB | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王劭（CBDB 287277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287277&o=json)
