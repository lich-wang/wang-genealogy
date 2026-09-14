---
schema: wang-person/v1
id: p_hmAn57MwGaKJKqqX9Q4u9C
status: active
merged_into: null
display_name: 王孟南
cbdb_id: 239760
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q312EYWRvPUrPGijSQy7aQ
        subject_person_id: p_hmAn57MwGaKJKqqX9Q4u9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟南，明人物。正统十年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 239760）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WWBrk25E1HdHiGssEXIZjC
          claim_id: c_q312EYWRvPUrPGijSQy7aQ
          source_id: s_y3FjtrEebErQqpJ1aLke8u
          stance: supports
          locator: CBDB:239760
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y3FjtrEebErQqpJ1aLke8u
            source_type: api_record
            title: 中国历代人物传记资料库：王孟南（CBDB 239760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239760&o=json
            external_identifier: CBDB:239760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V35xx8s8gpjvYPWuNfTz3i
        subject_person_id: p_hmAn57MwGaKJKqqX9Q4u9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NNXBDE9U7FGBUioMFHR7mN
          claim_id: c_V35xx8s8gpjvYPWuNfTz3i
          source_id: s_y3FjtrEebErQqpJ1aLke8u
          stance: supports
          locator: CBDB:239760
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s0wkXon6n9OTPB1cjgCu49
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmAn57MwGaKJKqqX9Q4u9C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKtUg4K14etZ7Ijt_Pt8ip
          claim_id: c_s0wkXon6n9OTPB1cjgCu49
          source_id: s_zuH5mxbxRJNe4fEDgi5C1M
          stance: supports
          locator: CBDB：兄弟 王宣（208053）之父／母 王宗麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟南 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王孟南 之父／母。
          source:
            id: s_zuH5mxbxRJNe4fEDgi5C1M
            source_type: api_record
            title: 中国历代人物传记资料库：王孟南（CBDB 239760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239760&o=json
            external_identifier: CBDB:239760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        status: active
        display_name: 王宗麒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TyX_uLh8yr0MAhII-dsAf8
        subject_person_id: p_hmAn57MwGaKJKqqX9Q4u9C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1tg1qD7-5oywsf2FnxCMH
          claim_id: c_TyX_uLh8yr0MAhII-dsAf8
          source_id: s_zuH5mxbxRJNe4fEDgi5C1M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208053 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zuH5mxbxRJNe4fEDgi5C1M
            source_type: api_record
            title: 中国历代人物传记资料库：王孟南（CBDB 239760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239760&o=json
            external_identifier: CBDB:239760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ye9VLgV3pJbXBYdJ82vvQv
        status: active
        display_name: 王宣
        merged_into_person_id: null
---

# 王孟南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟南，明人物。正统十年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 239760） | accepted |
| name.primary | 王孟南 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QyVQQbt4VbA4Hx7YZ8Kozc | 王宗麒 | accepted |
| other | p_ye9VLgV3pJbXBYdJ82vvQv | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟南（CBDB 239760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239760&o=json)
