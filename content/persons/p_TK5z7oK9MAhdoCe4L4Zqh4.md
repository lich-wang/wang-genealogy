---
schema: wang-person/v1
id: p_TK5z7oK9MAhdoCe4L4Zqh4
status: active
merged_into: null
display_name: 王域
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b6ku7ZQN7nsxZMWZm4uvTd
        subject_person_id: p_TK5z7oK9MAhdoCe4L4Zqh4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2CTtRMLpA2Nsvf3r1mbL76
          claim_id: c_b6ku7ZQN7nsxZMWZm4uvTd
          source_id: s_QB1pJvcMegTU6LB2PxgErW
          stance: supports
          locator: CBDB:236482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236482）
          source: &a1
            id: s_QB1pJvcMegTU6LB2PxgErW
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 236482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json
            external_identifier: CBDB:236482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jg9SkodWr366LFxo9tNkZN
        subject_person_id: p_TK5z7oK9MAhdoCe4L4Zqh4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A-0oH5SlXooPOsaW9Klyuu
          claim_id: c_Jg9SkodWr366LFxo9tNkZN
          source_id: s_QB1pJvcMegTU6LB2PxgErW
          stance: supports
          locator: CBDB:236482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_okTD_Lxr2RMvX7d9xnQ0ta
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TK5z7oK9MAhdoCe4L4Zqh4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYqaAJWK5WFxNM7PhXGhKA
          claim_id: c_okTD_Lxr2RMvX7d9xnQ0ta
          source_id: s_R2Za04XagfrLq4tsMrqvUG
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王域 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王域 之父／母。
          source:
            id: s_R2Za04XagfrLq4tsMrqvUG
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 236482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json
            external_identifier: CBDB:236482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lxAa4uVF1kzVXL0OL_Mp2R
        subject_person_id: p_TK5z7oK9MAhdoCe4L4Zqh4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ui0MutySsXcP-2AOtekiB9
          claim_id: c_lxAa4uVF1kzVXL0OL_Mp2R
          source_id: s_R2Za04XagfrLq4tsMrqvUG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R2Za04XagfrLq4tsMrqvUG
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 236482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json
            external_identifier: CBDB:236482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王域

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王域 | accepted |
| bio.summary | 王域，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王域（CBDB 236482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236482&o=json)
