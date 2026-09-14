---
schema: wang-person/v1
id: p_9F1U1TtkiNCB1RPHGmqk7s
status: active
merged_into: null
display_name: 王爟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eaMXauHkG3JrJAugRGKhhg
        subject_person_id: p_9F1U1TtkiNCB1RPHGmqk7s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uG51hLYkWpQG9GNFb1BGSH
          claim_id: c_eaMXauHkG3JrJAugRGKhhg
          source_id: s_5FSqXot7LifNBUCnz8fG6u
          stance: supports
          locator: CBDB:296938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296938）
          source: &a1
            id: s_5FSqXot7LifNBUCnz8fG6u
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 296938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296938&o=json
            external_identifier: CBDB:296938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6eP1UxDcJ9twVYNoX8puw
        subject_person_id: p_9F1U1TtkiNCB1RPHGmqk7s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爟，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pmmFED9qDTINB_MrJI9fJK
          claim_id: c_R6eP1UxDcJ9twVYNoX8puw
          source_id: s_5FSqXot7LifNBUCnz8fG6u
          stance: supports
          locator: CBDB:296938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LllqmODNDCfHdlBuGg_TH7
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9F1U1TtkiNCB1RPHGmqk7s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n6LLRk831w55GsbOg3hXSh
          claim_id: c_LllqmODNDCfHdlBuGg_TH7
          source_id: s_ZR92g4ZQhv66Dh7EjIqxdm
          stance: supports
          locator: CBDB：兄弟 王燁（126822）之父／母 王材
          quotation: null
          interpretation_note: 由兄弟关系推断：王爟 与 王燁 为同胞（CBDB 记「兄」），王燁 之父／母即 王爟 之父／母。
          source:
            id: s_ZR92g4ZQhv66Dh7EjIqxdm
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 296938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296938&o=json
            external_identifier: CBDB:296938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wVWD91i8nHFULhDK68aKM7
        status: active
        display_name: 王材
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cC03Jycb1wk37FlUq2NN_3
        subject_person_id: p_9F1U1TtkiNCB1RPHGmqk7s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHSSLuCITOcB25nXkJkCLX
          claim_id: c_cC03Jycb1wk37FlUq2NN_3
          source_id: s_ZR92g4ZQhv66Dh7EjIqxdm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZR92g4ZQhv66Dh7EjIqxdm
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 296938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296938&o=json
            external_identifier: CBDB:296938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ve3PDbNGqaNQgddGuw2C43
        status: active
        display_name: 王燁
        merged_into_person_id: null
---

# 王爟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爟 | accepted |
| bio.summary | 王爟，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wVWD91i8nHFULhDK68aKM7 | 王材 | accepted |
| other | p_ve3PDbNGqaNQgddGuw2C43 | 王燁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爟（CBDB 296938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296938&o=json)
