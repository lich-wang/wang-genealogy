---
schema: wang-person/v1
id: p_Mvoi5b8Hozb21JQz5pNeHg
status: active
merged_into: null
display_name: 王永忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qb5yDz8KEfF46LLobHhjyt
        subject_person_id: p_Mvoi5b8Hozb21JQz5pNeHg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MfvCaXqGk4KEyU6kDQt99K
          claim_id: c_qb5yDz8KEfF46LLobHhjyt
          source_id: s_BDkQPifXAjZ6TXtpX9tEUC
          stance: supports
          locator: CBDB:221623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221623）
          source: &a1
            id: s_BDkQPifXAjZ6TXtpX9tEUC
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 221623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221623&o=json
            external_identifier: CBDB:221623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CKYBS5ALFApkRPWyQNM4YN
        subject_person_id: p_Mvoi5b8Hozb21JQz5pNeHg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221623）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H3l0uV89eawJ1xMBBhHx8z
          claim_id: c_CKYBS5ALFApkRPWyQNM4YN
          source_id: s_BDkQPifXAjZ6TXtpX9tEUC
          stance: supports
          locator: CBDB:221623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PB8l8QUAwqbIjMYkt5j0bC
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mvoi5b8Hozb21JQz5pNeHg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kaek0C_9Sp2TTbMlLGk-aO
          claim_id: c_PB8l8QUAwqbIjMYkt5j0bC
          source_id: s_GBeVX8yMQBpL9HvEVM8y6c
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永忠 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永忠 之父／母。
          source:
            id: s_GBeVX8yMQBpL9HvEVM8y6c
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 221623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221623&o=json
            external_identifier: CBDB:221623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syn7L23qcdCnWJH3gNVxhk
        status: active
        display_name: 王國柱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qJEEqIhsUN3IC1yJVxjDdj
        subject_person_id: p_Mvoi5b8Hozb21JQz5pNeHg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VZ2V7y-n-GRKHoWY7-WLl2
          claim_id: c_qJEEqIhsUN3IC1yJVxjDdj
          source_id: s_GBeVX8yMQBpL9HvEVM8y6c
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206689 王永寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GBeVX8yMQBpL9HvEVM8y6c
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 221623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221623&o=json
            external_identifier: CBDB:221623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
---

# 王永忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永忠 | accepted |
| bio.summary | 王永忠，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Syn7L23qcdCnWJH3gNVxhk | 王國柱 | accepted |
| other | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永忠（CBDB 221623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221623&o=json)
