---
schema: wang-person/v1
id: p_hxV5knL2LSSLdrEPUHGPS6
status: active
merged_into: null
display_name: 王佶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xgqg6UvPow4jCWfL7vMPUe
        subject_person_id: p_hxV5knL2LSSLdrEPUHGPS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_je8tgoKtNgK1EHJTw8jhUY
          claim_id: c_Xgqg6UvPow4jCWfL7vMPUe
          source_id: s_JNwVkDE1F3KU84NHGsZ4tJ
          stance: supports
          locator: CBDB:297035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297035）
          source: &a1
            id: s_JNwVkDE1F3KU84NHGsZ4tJ
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 297035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json
            external_identifier: CBDB:297035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uQvPo8YNWuCfynf3kJMwc
        subject_person_id: p_hxV5knL2LSSLdrEPUHGPS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RH4zUzGNtwrmkKgo7pG7C0
          claim_id: c_2uQvPo8YNWuCfynf3kJMwc
          source_id: s_JNwVkDE1F3KU84NHGsZ4tJ
          stance: supports
          locator: CBDB:297035
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9LS0vLwyPPDSM8O0zbbFxb
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hxV5knL2LSSLdrEPUHGPS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o4K8OP88q3uUjRy3VUAmi-
          claim_id: c_9LS0vLwyPPDSM8O0zbbFxb
          source_id: s_HoJU2Vkjme4UzRsF3Pjvs-
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王佶 之父／母。
          source:
            id: s_HoJU2Vkjme4UzRsF3Pjvs-
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 297035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json
            external_identifier: CBDB:297035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8GwzBVysey3Kb4uNTABDK
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_N816pJKkE2SdL-FZmnJqu4
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hxV5knL2LSSLdrEPUHGPS6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jUCu02cIaCvds5YO9WhldK
          claim_id: c_N816pJKkE2SdL-FZmnJqu4
          source_id: s_HoJU2Vkjme4UzRsF3Pjvs-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HoJU2Vkjme4UzRsF3Pjvs-
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 297035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json
            external_identifier: CBDB:297035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佶 | accepted |
| bio.summary | 王佶，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| other | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 297035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json)
