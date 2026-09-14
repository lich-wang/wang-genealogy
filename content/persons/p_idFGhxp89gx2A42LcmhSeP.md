---
schema: wang-person/v1
id: p_idFGhxp89gx2A42LcmhSeP
status: active
merged_into: null
display_name: 王宸
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfaHbag3G5zQrorDtNoW7F
        subject_person_id: p_idFGhxp89gx2A42LcmhSeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31iGo8jRV5gYyTKgcqn7sZ
          claim_id: c_BfaHbag3G5zQrorDtNoW7F
          source_id: s_P5B3KN71nPb7BUM6iCG7NQ
          stance: supports
          locator: CBDB:278870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278870）
          source: &a1
            id: s_P5B3KN71nPb7BUM6iCG7NQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNAqq66oLVRzM3LJxz2CJE
        subject_person_id: p_idFGhxp89gx2A42LcmhSeP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P4wYN-SPk3F6gPoBFddESf
          claim_id: c_hNAqq66oLVRzM3LJxz2CJE
          source_id: s_P5B3KN71nPb7BUM6iCG7NQ
          stance: supports
          locator: CBDB:278870
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tWqHRxZATDSMJz3mxgWgt5
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_idFGhxp89gx2A42LcmhSeP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D5h9TxEWJowzrFOhjy6hnG
          claim_id: c_tWqHRxZATDSMJz3mxgWgt5
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB：兄弟 王完（201827）之父／母 王紹某
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王完 为同胞（CBDB 记「兄」），王完 之父／母即 王宸 之父／母。
          source:
            id: s_qsrETQ2krScSeiDST3kmrg
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
    - claim:
        id: c_p8KPRVkjBj8T8L5_Uo4htg
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_idFGhxp89gx2A42LcmhSeP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7SXmIHVd6V5jp1YHbC1Ty0
          claim_id: c_p8KPRVkjBj8T8L5_Uo4htg
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王寧 为同胞（CBDB 记「兄」），王寧 之父／母即 王宸 之父／母。
          source:
            id: s_qsrETQ2krScSeiDST3kmrg
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xFFdPdJwKEcff8qRsr4b53
        status: active
        display_name: 王紹紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_s21DLNT7kLQ3wwOS4eA9e9
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_idFGhxp89gx2A42LcmhSeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4KOZsoVPoQsY_d9kUCx3P
          claim_id: c_s21DLNT7kLQ3wwOS4eA9e9
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsrETQ2krScSeiDST3kmrg
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_7Ec0u7xUtRKIqsGAwqLF7D
        subject_person_id: p_idFGhxp89gx2A42LcmhSeP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zWwZffa0So11rZgW6se-J_
          claim_id: c_7Ec0u7xUtRKIqsGAwqLF7D
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsrETQ2krScSeiDST3kmrg
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | 王宸，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| other | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |
| other | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 278870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json)
