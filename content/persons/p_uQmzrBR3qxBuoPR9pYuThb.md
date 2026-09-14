---
schema: wang-person/v1
id: p_uQmzrBR3qxBuoPR9pYuThb
status: active
merged_into: null
display_name: 王宗祖
cbdb_id: 308419
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_soawKGdSmnAtSLxtAbVVYW
        subject_person_id: p_uQmzrBR3qxBuoPR9pYuThb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗祖，明人物。嘉靖二十三年進士，籍贯義烏。（中国历代人物传记资料库 CBDB 308419）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__wSt8Rh-WlbVFeU0N9jJx1
          claim_id: c_soawKGdSmnAtSLxtAbVVYW
          source_id: s_Fi7Jgmi4v57Pgq5JCPXeBS
          stance: supports
          locator: CBDB:308419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fi7Jgmi4v57Pgq5JCPXeBS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗祖（CBDB 308419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308419&o=json
            external_identifier: CBDB:308419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8LAbHnuWR8ATrVDDp4SBxK
        subject_person_id: p_uQmzrBR3qxBuoPR9pYuThb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZpNd5ebExp8qazANJSzoQp
          claim_id: c_8LAbHnuWR8ATrVDDp4SBxK
          source_id: s_Fi7Jgmi4v57Pgq5JCPXeBS
          stance: supports
          locator: CBDB:308419
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zdzsSKcIyjz1gIgvbcSyzC
        subject_person_id: p_UBD7gtEAG7Bisubh3L5M1w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uQmzrBR3qxBuoPR9pYuThb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_heaB6f5fFlc0DAFlWmM-XN
          claim_id: c_zdzsSKcIyjz1gIgvbcSyzC
          source_id: s_F7lsZu3rp7s4LuDmUYpMzv
          stance: supports
          locator: CBDB：兄弟 王宗聖（203686）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗祖 与 王宗聖 为同胞（CBDB 记「兄」），王宗聖 之父／母即 王宗祖 之父／母。
          source:
            id: s_F7lsZu3rp7s4LuDmUYpMzv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗祖（CBDB 308419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308419&o=json
            external_identifier: CBDB:308419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UBD7gtEAG7Bisubh3L5M1w
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tqwwwiN03e4naz3kv4T3VK
        subject_person_id: p_pJwhh9SEH9qmj8mm8eFbV6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQmzrBR3qxBuoPR9pYuThb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jmIgoqWJ1E7jOMtz5v6sRp
          claim_id: c_tqwwwiN03e4naz3kv4T3VK
          source_id: s_F7lsZu3rp7s4LuDmUYpMzv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203686 王宗聖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F7lsZu3rp7s4LuDmUYpMzv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗祖（CBDB 308419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308419&o=json
            external_identifier: CBDB:308419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pJwhh9SEH9qmj8mm8eFbV6
        status: active
        display_name: 王宗聖
        merged_into_person_id: null
---

# 王宗祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗祖，明人物。嘉靖二十三年進士，籍贯義烏。（中国历代人物传记资料库 CBDB 308419） | accepted |
| name.primary | 王宗祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UBD7gtEAG7Bisubh3L5M1w | 王敏 | accepted |
| other | p_pJwhh9SEH9qmj8mm8eFbV6 | 王宗聖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗祖（CBDB 308419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308419&o=json)
