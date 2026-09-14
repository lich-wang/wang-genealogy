---
schema: wang-person/v1
id: p_jQmdPG33TzwLQ6ur3usHPZ
status: active
merged_into: null
display_name: 王學夔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dfaSrLPM4dqqXfPLkeUuwk
        subject_person_id: p_jQmdPG33TzwLQ6ur3usHPZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d5tBoLy6U7FJBr4hQe563o
          claim_id: c_dfaSrLPM4dqqXfPLkeUuwk
          source_id: s_n6YjT3jSpvDAytctbCosKY
          stance: supports
          locator: CBDB:287448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287448）
          source: &a1
            id: s_n6YjT3jSpvDAytctbCosKY
            source_type: api_record
            title: 中国历代人物传记资料库：王學夔（CBDB 287448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json
            external_identifier: CBDB:287448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8spWy6u8KCC1Jw7gG2ULL
        subject_person_id: p_jQmdPG33TzwLQ6ur3usHPZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學夔，明人物。嘉靖八年進士，籍贯安福，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 287448）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s292zTZNHUc8E_PkzgzN-z
          claim_id: c_v8spWy6u8KCC1Jw7gG2ULL
          source_id: s_n6YjT3jSpvDAytctbCosKY
          stance: supports
          locator: CBDB:287448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nRzzaNHnMOLx_V-5toVbp-
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jQmdPG33TzwLQ6ur3usHPZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CMNJyscHbH4XjFldAg1qlB
          claim_id: c_nRzzaNHnMOLx_V-5toVbp-
          source_id: s_JVP2N1Qd-iwPzugAlVN7de
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學夔 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學夔 之父／母。
          source:
            id: s_JVP2N1Qd-iwPzugAlVN7de
            source_type: api_record
            title: 中国历代人物传记资料库：王學夔（CBDB 287448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json
            external_identifier: CBDB:287448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EJz6NDNXPRUy1b3XSr2FQp
        status: active
        display_name: 王稼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Zx-SoNec-W8ic8nAr_zv7Z
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jQmdPG33TzwLQ6ur3usHPZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4uB_Z8jyfBa0pi4pqgdYe
          claim_id: c_Zx-SoNec-W8ic8nAr_zv7Z
          source_id: s_JVP2N1Qd-iwPzugAlVN7de
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JVP2N1Qd-iwPzugAlVN7de
            source_type: api_record
            title: 中国历代人物传记资料库：王學夔（CBDB 287448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json
            external_identifier: CBDB:287448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
---

# 王學夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學夔 | accepted |
| bio.summary | 王學夔，明人物。嘉靖八年進士，籍贯安福，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 287448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EJz6NDNXPRUy1b3XSr2FQp | 王稼 | accepted |
| other | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學夔（CBDB 287448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json)
