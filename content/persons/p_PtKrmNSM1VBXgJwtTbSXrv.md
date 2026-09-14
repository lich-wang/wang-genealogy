---
schema: wang-person/v1
id: p_PtKrmNSM1VBXgJwtTbSXrv
status: active
merged_into: null
display_name: 王珪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEQZ87X5GAn76he56NUtKz
        subject_person_id: p_PtKrmNSM1VBXgJwtTbSXrv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YuuEmEcdwKpAzorHRQBPVC
          claim_id: c_AEQZ87X5GAn76he56NUtKz
          source_id: s_BbQJqGup69d25iTUs5J6Vd
          stance: supports
          locator: CBDB:242776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242776）
          source: &a1
            id: s_BbQJqGup69d25iTUs5J6Vd
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 242776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json
            external_identifier: CBDB:242776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z999ZxWKw3Wxqhkth4E41C
        subject_person_id: p_PtKrmNSM1VBXgJwtTbSXrv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_APZgomKDvK48XVuJLTBb1e
          claim_id: c_Z999ZxWKw3Wxqhkth4E41C
          source_id: s_BbQJqGup69d25iTUs5J6Vd
          stance: supports
          locator: CBDB:242776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_poysIKORjVw2zGlxtuuFXH
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PtKrmNSM1VBXgJwtTbSXrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8AtTN28xIPhDnKtf-DM3p
          claim_id: c_poysIKORjVw2zGlxtuuFXH
          source_id: s_fXoMpQCp3H-oufFhxitQgZ
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王珪 之父／母。
          source:
            id: s_fXoMpQCp3H-oufFhxitQgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 242776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json
            external_identifier: CBDB:242776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BN8p6wXwCD4j11fmY5QSck
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PtKrmNSM1VBXgJwtTbSXrv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uob3QoXRMUserghM5ICrBK
          claim_id: c_BN8p6wXwCD4j11fmY5QSck
          source_id: s_fXoMpQCp3H-oufFhxitQgZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fXoMpQCp3H-oufFhxitQgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 242776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json
            external_identifier: CBDB:242776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 242776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242776&o=json)
