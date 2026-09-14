---
schema: wang-person/v1
id: p_EExA6L61UQPhZmUjRyFxA4
status: active
merged_into: null
display_name: 王正志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92yPsyNS7MAnrkUPRCnNZx
        subject_person_id: p_EExA6L61UQPhZmUjRyFxA4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rFxXBRikroz7m7DFH9U92h
          claim_id: c_92yPsyNS7MAnrkUPRCnNZx
          source_id: s_L3csX1bAgV3aDXsJeBqEmk
          stance: supports
          locator: CBDB:288237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288237）
          source: &a1
            id: s_L3csX1bAgV3aDXsJeBqEmk
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 288237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288237&o=json
            external_identifier: CBDB:288237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTrM3HETDmCL77aCGwW7Qz
        subject_person_id: p_EExA6L61UQPhZmUjRyFxA4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bgL6AbFwPCguFXog9AKLCx
          claim_id: c_PTrM3HETDmCL77aCGwW7Qz
          source_id: s_L3csX1bAgV3aDXsJeBqEmk
          stance: supports
          locator: CBDB:288237
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R2KpRc3tvIlDdVUqmtjgeH
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EExA6L61UQPhZmUjRyFxA4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sWWTTYbY5h8-hT0-yrlqiQ
          claim_id: c_R2KpRc3tvIlDdVUqmtjgeH
          source_id: s_2vba9S-vJmqF1AUKIfXFSc
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正志 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正志 之父／母。
          source:
            id: s_2vba9S-vJmqF1AUKIfXFSc
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 288237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288237&o=json
            external_identifier: CBDB:288237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HjMSGWaaseFRH9Rnqfpx53
        status: active
        display_name: 王守礼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4d9wraKJ5GZM8rX9YyM80_
        subject_person_id: p_EExA6L61UQPhZmUjRyFxA4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uE4zwoPK0XtUgmuD1TaSax
          claim_id: c_4d9wraKJ5GZM8rX9YyM80_
          source_id: s_2vba9S-vJmqF1AUKIfXFSc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202442 王正思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2vba9S-vJmqF1AUKIfXFSc
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 288237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288237&o=json
            external_identifier: CBDB:288237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
---

# 王正志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正志 | accepted |
| bio.summary | 王正志，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HjMSGWaaseFRH9Rnqfpx53 | 王守礼 | accepted |
| other | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正志（CBDB 288237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288237&o=json)
