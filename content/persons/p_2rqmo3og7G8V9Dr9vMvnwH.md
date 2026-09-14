---
schema: wang-person/v1
id: p_2rqmo3og7G8V9Dr9vMvnwH
status: active
merged_into: null
display_name: 王𬄣
cbdb_id: 294437
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9kJkMapUmP5grFJfjQjZW9
        subject_person_id: p_2rqmo3og7G8V9Dr9vMvnwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𬄣，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ENeB3gDBGEoXMM5AQc0EuI
          claim_id: c_9kJkMapUmP5grFJfjQjZW9
          source_id: s_STM616DkepCMYLV9Koe7ek
          stance: supports
          locator: CBDB:294437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_STM616DkepCMYLV9Koe7ek
            source_type: api_record
            title: 中国历代人物传记资料库：王𬄣（CBDB 294437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json
            external_identifier: CBDB:294437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2drdQxwVMJibNKPam8gX8n
        subject_person_id: p_2rqmo3og7G8V9Dr9vMvnwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𬄣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4sM2S2WFJ8xNQE9npx6CBQ
          claim_id: c_2drdQxwVMJibNKPam8gX8n
          source_id: s_STM616DkepCMYLV9Koe7ek
          stance: supports
          locator: CBDB:294437
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ODyKc0NltoSHqoJD68lChU
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2rqmo3og7G8V9Dr9vMvnwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P_yBColzqRrHxWSUzQSUpA
          claim_id: c_ODyKc0NltoSHqoJD68lChU
          source_id: s_5xP3-zkwZTeRNXIEt9jTxc
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王𬄣 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王𬄣 之父／母。
          source:
            id: s_5xP3-zkwZTeRNXIEt9jTxc
            source_type: api_record
            title: 中国历代人物传记资料库：王𬄣（CBDB 294437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json
            external_identifier: CBDB:294437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EwTXsqSB-sqz2Hwe9nPIAx
        subject_person_id: p_2rqmo3og7G8V9Dr9vMvnwH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAqCc023yXi0qCq9Fr7lda
          claim_id: c_EwTXsqSB-sqz2Hwe9nPIAx
          source_id: s_5xP3-zkwZTeRNXIEt9jTxc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5xP3-zkwZTeRNXIEt9jTxc
            source_type: api_record
            title: 中国历代人物传记资料库：王𬄣（CBDB 294437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json
            external_identifier: CBDB:294437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
---

# 王𬄣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王𬄣，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294437） | accepted |
| name.primary | 王𬄣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| other | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王𬄣（CBDB 294437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json)
