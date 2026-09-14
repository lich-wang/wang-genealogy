---
schema: wang-person/v1
id: p_ZDhJrFTTNwPzjHRmEJcH8V
status: active
merged_into: null
display_name: 王會通
cbdb_id: 329996
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZK5qADWB9n2RQqAqPoqxaM
        subject_person_id: p_ZDhJrFTTNwPzjHRmEJcH8V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會通，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_a27i4lZiEPUqFMlKAFMiZA
          claim_id: c_ZK5qADWB9n2RQqAqPoqxaM
          source_id: s_jGdWgC98F7bawEoiSXDY9P
          stance: supports
          locator: CBDB:329996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jGdWgC98F7bawEoiSXDY9P
            source_type: api_record
            title: 中国历代人物传记资料库：王會通（CBDB 329996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json
            external_identifier: CBDB:329996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LuPKZWAdH1sSfYdC47qNQ9
        subject_person_id: p_ZDhJrFTTNwPzjHRmEJcH8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t35v2q9EmyHR9qMxeX9VP6
          claim_id: c_LuPKZWAdH1sSfYdC47qNQ9
          source_id: s_jGdWgC98F7bawEoiSXDY9P
          stance: supports
          locator: CBDB:329996
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h5qJFzfgGbBXWFBSuEpZgb
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZDhJrFTTNwPzjHRmEJcH8V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8-DL_qM7HrQTohTipwFhli
          claim_id: c_h5qJFzfgGbBXWFBSuEpZgb
          source_id: s_bT5Ld59N0zTTDi24L0i7fn
          stance: supports
          locator: CBDB：兄弟 王子蕙（205224）之父／母 王紹先
          quotation: null
          interpretation_note: 由兄弟关系推断：王會通 与 王子蕙 为同胞（CBDB 记「兄」），王子蕙 之父／母即 王會通 之父／母。
          source:
            id: s_bT5Ld59N0zTTDi24L0i7fn
            source_type: api_record
            title: 中国历代人物传记资料库：王會通（CBDB 329996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json
            external_identifier: CBDB:329996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ngRno3M6aBRj8xR4YNhnTD
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_viFY2mtCDz5ZPW4HnS6xRk
        subject_person_id: p_ZDhJrFTTNwPzjHRmEJcH8V
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2UmAIQ7EwJOeto3Z-6QCz
          claim_id: c_viFY2mtCDz5ZPW4HnS6xRk
          source_id: s_bT5Ld59N0zTTDi24L0i7fn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205224 王子蕙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bT5Ld59N0zTTDi24L0i7fn
            source_type: api_record
            title: 中国历代人物传记资料库：王會通（CBDB 329996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json
            external_identifier: CBDB:329996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mYaz7ZtA5wiQaCjCBZf5rq
        status: active
        display_name: 王子蕙
        merged_into_person_id: null
---

# 王會通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王會通，明人物。嘉靖四十四年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329996） | accepted |
| name.primary | 王會通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngRno3M6aBRj8xR4YNhnTD | 王紹先 | accepted |
| other | p_mYaz7ZtA5wiQaCjCBZf5rq | 王子蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會通（CBDB 329996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329996&o=json)
