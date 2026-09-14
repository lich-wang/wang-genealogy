---
schema: wang-person/v1
id: p_QzsNwCxppT6oan4Wpvxqi2
status: active
merged_into: null
display_name: 王傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wCGkhL4DTbDGx7YmXTX4p4
        subject_person_id: p_QzsNwCxppT6oan4Wpvxqi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SpTxb3gc1r25VcjBEPDdxb
          claim_id: c_wCGkhL4DTbDGx7YmXTX4p4
          source_id: s_xdBNQNpG21ef57APjA34dk
          stance: supports
          locator: CBDB:279830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279830）
          source: &a1
            id: s_xdBNQNpG21ef57APjA34dk
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 279830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json
            external_identifier: CBDB:279830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XKM6TDX3HfBXTubsQXg2Nw
        subject_person_id: p_QzsNwCxppT6oan4Wpvxqi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。景泰五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 279830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZKKxAkYX2kBxcinliUO2P3
          claim_id: c_XKM6TDX3HfBXTubsQXg2Nw
          source_id: s_xdBNQNpG21ef57APjA34dk
          stance: supports
          locator: CBDB:279830
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vv9Svx9I1NboMW8y8oRqft
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QzsNwCxppT6oan4Wpvxqi2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0J9gLMVh9LukzZd6SZ4BB5
          claim_id: c_Vv9Svx9I1NboMW8y8oRqft
          source_id: s_6VvA9pxa34XwKP8MrHudKk
          stance: supports
          locator: CBDB：兄弟 王聰（198493）之父／母 王惟善
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王聰 为同胞（CBDB 记「兄」），王聰 之父／母即 王傑 之父／母。
          source:
            id: s_6VvA9pxa34XwKP8MrHudKk
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 279830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json
            external_identifier: CBDB:279830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3NjU7eZvopD3jSxgGAoTdh
        status: active
        display_name: 王惟善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JYQ0dnBhfXDpP9ExGv1ORk
        subject_person_id: p_QzsNwCxppT6oan4Wpvxqi2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW8An7tPhnGt4UbKC3RUUk
          claim_id: c_JYQ0dnBhfXDpP9ExGv1ORk
          source_id: s_6VvA9pxa34XwKP8MrHudKk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198493 王聰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6VvA9pxa34XwKP8MrHudKk
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 279830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json
            external_identifier: CBDB:279830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dQ1sDfXNogRpbAJzcsg5My
        status: active
        display_name: 王聰
        merged_into_person_id: null
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。景泰五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 279830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NjU7eZvopD3jSxgGAoTdh | 王惟善 | accepted |
| other | p_dQ1sDfXNogRpbAJzcsg5My | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 279830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json)
