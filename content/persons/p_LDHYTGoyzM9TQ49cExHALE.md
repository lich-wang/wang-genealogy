---
schema: wang-person/v1
id: p_LDHYTGoyzM9TQ49cExHALE
status: active
merged_into: null
display_name: 王學祖
cbdb_id: 300374
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9C6nDYV6b1JrgMvHZ7Qbw
        subject_person_id: p_LDHYTGoyzM9TQ49cExHALE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學祖，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300374）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BnGIwM4p9-AFw81-JTO0SC
          claim_id: c_j9C6nDYV6b1JrgMvHZ7Qbw
          source_id: s_XqQFJvBXB4JoHtAcp9vMxg
          stance: supports
          locator: CBDB:300374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XqQFJvBXB4JoHtAcp9vMxg
            source_type: api_record
            title: 中国历代人物传记资料库：王學祖（CBDB 300374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json
            external_identifier: CBDB:300374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5SymwWzCW7SRtHQyjt3AsL
        subject_person_id: p_LDHYTGoyzM9TQ49cExHALE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aswD4rs9FhLJ8PWYGP94jH
          claim_id: c_5SymwWzCW7SRtHQyjt3AsL
          source_id: s_XqQFJvBXB4JoHtAcp9vMxg
          stance: supports
          locator: CBDB:300374
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vVfGJjmcz3wBDI6hsMrK2c
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LDHYTGoyzM9TQ49cExHALE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GkK7gVzjM7Pr3GDwXH7y38
          claim_id: c_vVfGJjmcz3wBDI6hsMrK2c
          source_id: s_sStu-3RLHj6Yf8d3n5OlOX
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王學祖 与 王炯 为同胞（CBDB 记「弟」），王炯 之父／母即 王學祖 之父／母。
          source:
            id: s_sStu-3RLHj6Yf8d3n5OlOX
            source_type: api_record
            title: 中国历代人物传记资料库：王學祖（CBDB 300374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json
            external_identifier: CBDB:300374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2bBEtj4zAmwMdnWXTzqPS
        status: active
        display_name: 王木
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JEKX2lW020SvSoBEl__X0p
        subject_person_id: p_LDHYTGoyzM9TQ49cExHALE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qJVpNBePpVP4YpmAn1ODY0
          claim_id: c_JEKX2lW020SvSoBEl__X0p
          source_id: s_sStu-3RLHj6Yf8d3n5OlOX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sStu-3RLHj6Yf8d3n5OlOX
            source_type: api_record
            title: 中国历代人物传记资料库：王學祖（CBDB 300374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json
            external_identifier: CBDB:300374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sSGZsmVuWDC2RLoBps8cmA
        status: active
        display_name: 王炯
        merged_into_person_id: null
---

# 王學祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學祖，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300374） | accepted |
| name.primary | 王學祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2bBEtj4zAmwMdnWXTzqPS | 王木 | accepted |
| other | p_sSGZsmVuWDC2RLoBps8cmA | 王炯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學祖（CBDB 300374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json)
