---
schema: wang-person/v1
id: p_E4xxTKPUrmYhZK6cj6EcoZ
status: active
merged_into: null
display_name: 王洌
cbdb_id: 19893
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RNYqkbWRsnJWC6b2LHjoDG
        subject_person_id: p_E4xxTKPUrmYhZK6cj6EcoZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洌，宋人物。籍贯鄞縣，身份为未仕而卒、未參加科舉而卒。（中国历代人物传记资料库 CBDB 19893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XBjMSSRq4rlzTRH5P4GuVv
          claim_id: c_RNYqkbWRsnJWC6b2LHjoDG
          source_id: s_NVK5r6yf4BBYfgoiaEq4Ke
          stance: supports
          locator: CBDB:19893
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NVK5r6yf4BBYfgoiaEq4Ke
            source_type: api_record
            title: 中国历代人物传记资料库：王洌（CBDB 19893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19893&o=json
            external_identifier: CBDB:19893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JYPr2BY9JRc4isZQEEdnd9
        subject_person_id: p_E4xxTKPUrmYhZK6cj6EcoZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Czh9JVE7mC5ftxNzGg7Qau
          claim_id: c_JYPr2BY9JRc4isZQEEdnd9
          source_id: s_NVK5r6yf4BBYfgoiaEq4Ke
          stance: supports
          locator: CBDB:19893
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_46nb5D_8sjUBH1lrw8w1nM
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E4xxTKPUrmYhZK6cj6EcoZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g3sVVYHm5woHojTw3TGRFX
          claim_id: c_46nb5D_8sjUBH1lrw8w1nM
          source_id: s_Pa2NJcapxQ86G0jagLcCbZ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3948）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Pa2NJcapxQ86G0jagLcCbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王洌（CBDB 19893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19893&o=json
            external_identifier: CBDB:19893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WfKGNEwFj8S9f7DUKj8X6D
        status: active
        display_name: 王正己
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洌，宋人物。籍贯鄞縣，身份为未仕而卒、未參加科舉而卒。（中国历代人物传记资料库 CBDB 19893） | accepted |
| name.primary | 王洌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WfKGNEwFj8S9f7DUKj8X6D | 王正己 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洌（CBDB 19893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19893&o=json)
