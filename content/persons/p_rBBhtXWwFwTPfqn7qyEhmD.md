---
schema: wang-person/v1
id: p_rBBhtXWwFwTPfqn7qyEhmD
status: active
merged_into: null
display_name: 王聰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e8ZrdRdT4Yx8SZ3y2C3EL7
        subject_person_id: p_rBBhtXWwFwTPfqn7qyEhmD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2kmTg9ci7S79cTyWFmnMK2
          claim_id: c_e8ZrdRdT4Yx8SZ3y2C3EL7
          source_id: s_h6Bh9pQexMeaxvWLynN6kB
          stance: supports
          locator: CBDB:267083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267083）
          source: &a1
            id: s_h6Bh9pQexMeaxvWLynN6kB
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 267083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json
            external_identifier: CBDB:267083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BFDKJVtagh3XDTsbAhQry8
        subject_person_id: p_rBBhtXWwFwTPfqn7qyEhmD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zy3Y5fotr1D7zuLCCRHe5D
          claim_id: c_BFDKJVtagh3XDTsbAhQry8
          source_id: s_h6Bh9pQexMeaxvWLynN6kB
          stance: supports
          locator: CBDB:267083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tXC8Rti2IoGsVMq6p5GGxe
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rBBhtXWwFwTPfqn7qyEhmD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KTPqhSDh2JeN0GKrdGsz9J
          claim_id: c_tXC8Rti2IoGsVMq6p5GGxe
          source_id: s_mdTbGXRvlBCAMkL5qdr6Wj
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王聰 之父／母。
          source:
            id: s_mdTbGXRvlBCAMkL5qdr6Wj
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 267083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json
            external_identifier: CBDB:267083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CKPv9UAc3q29PWyukafcq8
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Hlfg6P740sz7a6WZDPE5i5
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rBBhtXWwFwTPfqn7qyEhmD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nobKlFl_conSesIel8PIh
          claim_id: c_Hlfg6P740sz7a6WZDPE5i5
          source_id: s_mdTbGXRvlBCAMkL5qdr6Wj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mdTbGXRvlBCAMkL5qdr6Wj
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 267083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json
            external_identifier: CBDB:267083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q8jv2duMSqfqCbpkkK9Wow
        status: active
        display_name: 王魯
        merged_into_person_id: null
---

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CKPv9UAc3q29PWyukafcq8 | 王文奎 | accepted |
| other | p_q8jv2duMSqfqCbpkkK9Wow | 王魯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 267083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json)
