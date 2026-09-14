---
schema: wang-person/v1
id: p_yAZqZv44Jk4YRjmrCJ1gEz
status: active
merged_into: null
display_name: 王寓
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9jbEAEBys4V456Nhu3zgRt
        subject_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4EiRATDvNMg1La6ccafiYQ
          claim_id: c_9jbEAEBys4V456Nhu3zgRt
          source_id: s_oXCExgw2CmUWEkciiUpTza
          stance: supports
          locator: CBDB:278871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278871）
          source: &a1
            id: s_oXCExgw2CmUWEkciiUpTza
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U1gnX3MjVc8s4xANwmySor
        subject_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ISfYccFlURq6yhahg7b-8Z
          claim_id: c_U1gnX3MjVc8s4xANwmySor
          source_id: s_oXCExgw2CmUWEkciiUpTza
          stance: supports
          locator: CBDB:278871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PZgHsLIwG6u5A9C_jR5EY4
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mhXCS6jEDCvxKgWSew1G4S
          claim_id: c_PZgHsLIwG6u5A9C_jR5EY4
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB：兄弟 王完（201827）之父／母 王紹某
          quotation: null
          interpretation_note: 由兄弟关系推断：王寓 与 王完 为同胞（CBDB 记「兄」），王完 之父／母即 王寓 之父／母。
          source:
            id: s_8VSHik688S_Ugf2zYfF268
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
    - claim:
        id: c_Svha8Gb8orC-AbDpdbVTbs
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LrF4VLrt5vcZn8A5bG9It
          claim_id: c_Svha8Gb8orC-AbDpdbVTbs
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王寓 与 王寧 为同胞（CBDB 记「兄」），王寧 之父／母即 王寓 之父／母。
          source:
            id: s_8VSHik688S_Ugf2zYfF268
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
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
        id: c_QD6ln3aNo8hhJXVMR_8E1l
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqsYBeOHFBz8y0F1EBDKKg
          claim_id: c_QD6ln3aNo8hhJXVMR_8E1l
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8VSHik688S_Ugf2zYfF268
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_gDWhLRl99SMz_xerQfB_Lb
        subject_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
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
        - id: cs_EEKOW0Zdv04cwJ41_Jc1zH
          claim_id: c_gDWhLRl99SMz_xerQfB_Lb
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8VSHik688S_Ugf2zYfF268
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王寓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寓 | accepted |
| bio.summary | 王寓，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| other | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |
| other | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寓（CBDB 278871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json)
