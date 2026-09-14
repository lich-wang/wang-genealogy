---
schema: wang-person/v1
id: p_Gf8KdiZ6CE1yT1eCYigv5Q
status: active
merged_into: null
display_name: 王輔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZ51tgZyYkCL75PC7vbEpH
        subject_person_id: p_Gf8KdiZ6CE1yT1eCYigv5Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6HdsWDe9Z3Evfppx9zUjMJ
          claim_id: c_MZ51tgZyYkCL75PC7vbEpH
          source_id: s_cR8EewKAUS3NcFCDdV2Xty
          stance: supports
          locator: CBDB:284123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284123）
          source: &a1
            id: s_cR8EewKAUS3NcFCDdV2Xty
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 284123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284123&o=json
            external_identifier: CBDB:284123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YLUfBuqcnAYzTEVX3uLF1h
        subject_person_id: p_Gf8KdiZ6CE1yT1eCYigv5Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v0y62493P09NkmtORCFIEj
          claim_id: c_YLUfBuqcnAYzTEVX3uLF1h
          source_id: s_cR8EewKAUS3NcFCDdV2Xty
          stance: supports
          locator: CBDB:284123
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kgQAw6nOWTj6E6lFfF_fqG
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gf8KdiZ6CE1yT1eCYigv5Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZPWvWKEMY8kw5M7I2GsCw
          claim_id: c_kgQAw6nOWTj6E6lFfF_fqG
          source_id: s_p-TrGgjk7qONYz2tl5Po0t
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔 与 王化 为同胞（CBDB 记「弟」），王化 之父／母即 王輔 之父／母。
          source:
            id: s_p-TrGgjk7qONYz2tl5Po0t
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 284123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284123&o=json
            external_identifier: CBDB:284123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8RMMck1DAhfReSxN8nPCYS
        status: active
        display_name: 王琰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_92zPxz8xE2pElH9iSTc7PV
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Gf8KdiZ6CE1yT1eCYigv5Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2DZJyfwOjjLizi9ZR41U9
          claim_id: c_92zPxz8xE2pElH9iSTc7PV
          source_id: s_p-TrGgjk7qONYz2tl5Po0t
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202136 王化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p-TrGgjk7qONYz2tl5Po0t
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 284123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284123&o=json
            external_identifier: CBDB:284123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBfHvW9j1wmH7AtQd6s7JQ
        status: active
        display_name: 王化
        merged_into_person_id: null
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | 王輔，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8RMMck1DAhfReSxN8nPCYS | 王琰 | accepted |
| other | p_GBfHvW9j1wmH7AtQd6s7JQ | 王化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 284123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284123&o=json)
