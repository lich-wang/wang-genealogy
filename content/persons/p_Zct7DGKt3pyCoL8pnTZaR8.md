---
schema: wang-person/v1
id: p_Zct7DGKt3pyCoL8pnTZaR8
status: active
merged_into: null
display_name: 王一龍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cAZvWGpEUmFhGVAJqQgxPg
        subject_person_id: p_Zct7DGKt3pyCoL8pnTZaR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z9ckK3rU6aXkZ1mDboDD4s
          claim_id: c_cAZvWGpEUmFhGVAJqQgxPg
          source_id: s_m4sroQ6TxTyD4KNdiXchRX
          stance: supports
          locator: CBDB:308781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308781）
          source: &a1
            id: s_m4sroQ6TxTyD4KNdiXchRX
            source_type: api_record
            title: 中国历代人物传记资料库：王一龍（CBDB 308781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308781&o=json
            external_identifier: CBDB:308781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C19EmH587oYKJFUwfuZAPu
        subject_person_id: p_Zct7DGKt3pyCoL8pnTZaR8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一龍，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308781）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HrJUzgxdKrulinIJh6lkJd
          claim_id: c_C19EmH587oYKJFUwfuZAPu
          source_id: s_m4sroQ6TxTyD4KNdiXchRX
          stance: supports
          locator: CBDB:308781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bszDW-TJYtgI9Nh4-p7gaT
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zct7DGKt3pyCoL8pnTZaR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UM_AYdu9n081w3pUsGwHE7
          claim_id: c_bszDW-TJYtgI9Nh4-p7gaT
          source_id: s_QRgvUIg-g2Qc0YOdDbN3jt
          stance: supports
          locator: CBDB：兄弟 王一夔（203700）之父／母 王仲貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王一龍 与 王一夔 为同胞（CBDB 记「兄」），王一夔 之父／母即 王一龍 之父／母。
          source:
            id: s_QRgvUIg-g2Qc0YOdDbN3jt
            source_type: api_record
            title: 中国历代人物传记资料库：王一龍（CBDB 308781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308781&o=json
            external_identifier: CBDB:308781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1iSvDHtRHkxhgvj9Gg5W8M
        status: active
        display_name: 王仲貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JS4x5Pkn8Haco2l7cB9miC
        subject_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zct7DGKt3pyCoL8pnTZaR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4rNIIDtgvCqfSJ8_7s0qw
          claim_id: c_JS4x5Pkn8Haco2l7cB9miC
          source_id: s_QRgvUIg-g2Qc0YOdDbN3jt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203700 王一夔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QRgvUIg-g2Qc0YOdDbN3jt
            source_type: api_record
            title: 中国历代人物传记资料库：王一龍（CBDB 308781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308781&o=json
            external_identifier: CBDB:308781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FDfwTTY5mqzGJCTTHJFcH8
        status: active
        display_name: 王一夔
        merged_into_person_id: null
---

# 王一龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一龍 | accepted |
| bio.summary | 王一龍，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1iSvDHtRHkxhgvj9Gg5W8M | 王仲貴 | accepted |
| other | p_FDfwTTY5mqzGJCTTHJFcH8 | 王一夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一龍（CBDB 308781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308781&o=json)
