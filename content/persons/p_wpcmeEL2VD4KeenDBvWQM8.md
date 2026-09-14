---
schema: wang-person/v1
id: p_wpcmeEL2VD4KeenDBvWQM8
status: active
merged_into: null
display_name: 王玘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JgF9gEx6a66iiYiN2kDETK
        subject_person_id: p_wpcmeEL2VD4KeenDBvWQM8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SiScsh4Ci6iyrPe1ogT461
          claim_id: c_JgF9gEx6a66iiYiN2kDETK
          source_id: s_Uem6PiWumJiHyKLsirnwQb
          stance: supports
          locator: CBDB:243635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243635）
          source: &a1
            id: s_Uem6PiWumJiHyKLsirnwQb
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 243635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243635&o=json
            external_identifier: CBDB:243635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k8Sw5Y3mvNEWRqfLV5mXEo
        subject_person_id: p_wpcmeEL2VD4KeenDBvWQM8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。成化五年進士，籍贯曹縣，入仕監生。（中国历代人物传记资料库 CBDB 243635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N7pWCen6-ZQtwtSZxPWbLf
          claim_id: c_k8Sw5Y3mvNEWRqfLV5mXEo
          source_id: s_Uem6PiWumJiHyKLsirnwQb
          stance: supports
          locator: CBDB:243635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v-LbPCFblBWAwg4SF7q5Ux
        subject_person_id: p_jzBh6L6KhRH4LcPSXE67mz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wpcmeEL2VD4KeenDBvWQM8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbTx_Rb52Y7qnF6iBqwI0Y
          claim_id: c_v-LbPCFblBWAwg4SF7q5Ux
          source_id: s_NR4Vuh_JMf_ACu11A3MWa1
          stance: supports
          locator: CBDB：兄弟 王珣（126640）之父／母 王蘭
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王珣 为同胞（CBDB 记「弟」），王珣 之父／母即 王玘 之父／母。
          source:
            id: s_NR4Vuh_JMf_ACu11A3MWa1
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 243635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243635&o=json
            external_identifier: CBDB:243635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jzBh6L6KhRH4LcPSXE67mz
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vHrJX-t2R2pgsRxDg4BTYK
        subject_person_id: p_skE22yKfDfbLErvfJ74UoM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wpcmeEL2VD4KeenDBvWQM8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EEixJHOuE_0qrrg-6YWcSD
          claim_id: c_vHrJX-t2R2pgsRxDg4BTYK
          source_id: s_NR4Vuh_JMf_ACu11A3MWa1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126640 王珣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NR4Vuh_JMf_ACu11A3MWa1
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 243635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243635&o=json
            external_identifier: CBDB:243635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_skE22yKfDfbLErvfJ74UoM
        status: active
        display_name: 王珣
        merged_into_person_id: null
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。成化五年進士，籍贯曹縣，入仕監生。（中国历代人物传记资料库 CBDB 243635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jzBh6L6KhRH4LcPSXE67mz | 王蘭 | accepted |
| other | p_skE22yKfDfbLErvfJ74UoM | 王珣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 243635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243635&o=json)
