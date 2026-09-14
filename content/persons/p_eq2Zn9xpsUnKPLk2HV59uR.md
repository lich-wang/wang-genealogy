---
schema: wang-person/v1
id: p_eq2Zn9xpsUnKPLk2HV59uR
status: active
merged_into: null
display_name: 王宗淮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8JhMuVf5MEc7maeuvDp86m
        subject_person_id: p_eq2Zn9xpsUnKPLk2HV59uR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hhpBCJBhzLGeQKJXFX5WQA
          claim_id: c_8JhMuVf5MEc7maeuvDp86m
          source_id: s_o9KAHDwccXw4XFA29sV3pb
          stance: supports
          locator: CBDB:278554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278554）
          source: &a1
            id: s_o9KAHDwccXw4XFA29sV3pb
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淮（CBDB 278554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json
            external_identifier: CBDB:278554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TLNuqEKgsWtReP5q8MXc5f
        subject_person_id: p_eq2Zn9xpsUnKPLk2HV59uR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗淮，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VLu1UQhqvuQH4RTtD4v9YX
          claim_id: c_TLNuqEKgsWtReP5q8MXc5f
          source_id: s_o9KAHDwccXw4XFA29sV3pb
          stance: supports
          locator: CBDB:278554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5uN46DKPaLQv7F4S794jMb
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eq2Zn9xpsUnKPLk2HV59uR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOrq0407RbaYps4EvZZKui
          claim_id: c_5uN46DKPaLQv7F4S794jMb
          source_id: s_bUtiTGxPiir5b8R5a3Bo_t
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗淮 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗淮 之父／母。
          source:
            id: s_bUtiTGxPiir5b8R5a3Bo_t
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淮（CBDB 278554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json
            external_identifier: CBDB:278554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Sot4ukjio2QGqRyifzt2hj
        subject_person_id: p_eq2Zn9xpsUnKPLk2HV59uR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odPRdklb7oXBXyQi_qV6oJ
          claim_id: c_Sot4ukjio2QGqRyifzt2hj
          source_id: s_bUtiTGxPiir5b8R5a3Bo_t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bUtiTGxPiir5b8R5a3Bo_t
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淮（CBDB 278554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json
            external_identifier: CBDB:278554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
---

# 王宗淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗淮 | accepted |
| bio.summary | 王宗淮，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| other | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗淮（CBDB 278554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278554&o=json)
