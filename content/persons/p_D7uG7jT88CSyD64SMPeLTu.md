---
schema: wang-person/v1
id: p_D7uG7jT88CSyD64SMPeLTu
status: active
merged_into: null
display_name: 王蘧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EYXUMwS2nCeg7Cp7mwyQCx
        subject_person_id: p_D7uG7jT88CSyD64SMPeLTu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QVHnZSzT9uTEp1ZbqUnT4p
          claim_id: c_EYXUMwS2nCeg7Cp7mwyQCx
          source_id: s_5reY5ysa3DJmuP2xHuqsUb
          stance: supports
          locator: CBDB:36925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36925）
          source: &a1
            id: s_5reY5ysa3DJmuP2xHuqsUb
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 36925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json
            external_identifier: CBDB:36925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fr4ChvcZ5kpQ6evH2LDJDV
        subject_person_id: p_D7uG7jT88CSyD64SMPeLTu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘧，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36925）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FXCQtQCA4X5LiEw3XBe9ZJ
          claim_id: c_Fr4ChvcZ5kpQ6evH2LDJDV
          source_id: s_5reY5ysa3DJmuP2xHuqsUb
          stance: supports
          locator: CBDB:36925
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HQEHYbxbm1vwlL6Qez83XS
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D7uG7jT88CSyD64SMPeLTu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vmy5iXbiP-vkUhxF4eXEAQ
          claim_id: c_HQEHYbxbm1vwlL6Qez83XS
          source_id: s_nTXozS7p11gmVwOgnUi3Js
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_nTXozS7p11gmVwOgnUi3Js
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 36925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json
            external_identifier: CBDB:36925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
    - claim:
        id: c_ftqkPrRJBgYizOvrqgc80B
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_D7uG7jT88CSyD64SMPeLTu
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VAGcbAowrv_OOzoP_4rqB5
          claim_id: c_ftqkPrRJBgYizOvrqgc80B
          source_id: s_nTXozS7p11gmVwOgnUi3Js
          stance: supports
          locator: CBDB 亲属：母（KinPerson 36923）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_nTXozS7p11gmVwOgnUi3Js
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 36925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json
            external_identifier: CBDB:36925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2x1kEfTy9Rrf9vMAC4nm4e
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘧 | accepted |
| bio.summary | 王蘧，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |
| parents | p_2x1kEfTy9Rrf9vMAC4nm4e | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘧（CBDB 36925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json)
