---
schema: wang-person/v1
id: p_WGHmo7NBqH3etfk4iAcoJ7
status: active
merged_into: null
display_name: 王汝湞
cbdb_id: 211412
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6JYf8WaurdPmZwJhzhFJH
        subject_person_id: p_WGHmo7NBqH3etfk4iAcoJ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝湞，明人物。隆慶五年進士，籍贯懷仁。（中国历代人物传记资料库 CBDB 211412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SWIZQ4Qe4dBz8qCtJwNxFm
          claim_id: c_V6JYf8WaurdPmZwJhzhFJH
          source_id: s_ddBCitmyePNUN2b6d6oP9Q
          stance: supports
          locator: CBDB:211412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ddBCitmyePNUN2b6d6oP9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湞（CBDB 211412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json
            external_identifier: CBDB:211412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ct86gs37rqkdY2U4r9irzG
        subject_person_id: p_WGHmo7NBqH3etfk4iAcoJ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝湞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EMZxNaCo5A3Gqi4Qva7Ymv
          claim_id: c_ct86gs37rqkdY2U4r9irzG
          source_id: s_ddBCitmyePNUN2b6d6oP9Q
          stance: supports
          locator: CBDB:211412
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1BjcuC7xqcu_QrEeylvDy8
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WGHmo7NBqH3etfk4iAcoJ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EFxqYwdmaucnZ4g8NfRklf
          claim_id: c_1BjcuC7xqcu_QrEeylvDy8
          source_id: s_NUoyG9EuDQxuYrVeNATTHO
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝湞 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王汝湞 之父／母。
          source:
            id: s_NUoyG9EuDQxuYrVeNATTHO
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湞（CBDB 211412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json
            external_identifier: CBDB:211412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5NvgpfYRCbA6xFX2b2beZH
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_orLtuxUxB5rPxc7nN_Dznx
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WGHmo7NBqH3etfk4iAcoJ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R0quPb-lpyU5tBHY3G62D2
          claim_id: c_orLtuxUxB5rPxc7nN_Dznx
          source_id: s_NUoyG9EuDQxuYrVeNATTHO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NUoyG9EuDQxuYrVeNATTHO
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湞（CBDB 211412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json
            external_identifier: CBDB:211412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MmVpUWztCQKaC484qaKxXc
        status: active
        display_name: 王汝濂
        merged_into_person_id: null
---

# 王汝湞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝湞，明人物。隆慶五年進士，籍贯懷仁。（中国历代人物传记资料库 CBDB 211412） | accepted |
| name.primary | 王汝湞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5NvgpfYRCbA6xFX2b2beZH | 王繼 | accepted |
| other | p_MmVpUWztCQKaC484qaKxXc | 王汝濂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝湞（CBDB 211412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json)
