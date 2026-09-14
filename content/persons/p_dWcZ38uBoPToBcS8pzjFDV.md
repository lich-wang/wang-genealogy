---
schema: wang-person/v1
id: p_dWcZ38uBoPToBcS8pzjFDV
status: active
merged_into: null
display_name: 王之度
cbdb_id: 307687
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_McGwUNH7tTR3xs432i5QDe
        subject_person_id: p_dWcZ38uBoPToBcS8pzjFDV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之度，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BtFo6QamMWqNHSYqWRmBzF
          claim_id: c_McGwUNH7tTR3xs432i5QDe
          source_id: s_C4oULWCjBCLZMcMN3i23oX
          stance: supports
          locator: CBDB:307687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C4oULWCjBCLZMcMN3i23oX
            source_type: api_record
            title: 中国历代人物传记资料库：王之度（CBDB 307687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json
            external_identifier: CBDB:307687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AUTajynQQoEor3UR8t4iHT
        subject_person_id: p_dWcZ38uBoPToBcS8pzjFDV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vP6SwrwMDoZpKkrZ1qM95o
          claim_id: c_AUTajynQQoEor3UR8t4iHT
          source_id: s_C4oULWCjBCLZMcMN3i23oX
          stance: supports
          locator: CBDB:307687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ymTmUr9VkWGhxxy7wYIN9f
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWcZ38uBoPToBcS8pzjFDV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2UXRhDPnFCBlyecsTwDLi
          claim_id: c_ymTmUr9VkWGhxxy7wYIN9f
          source_id: s_iEO15MX2MfjNze83NqvXVI
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之度 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之度 之父／母。
          source:
            id: s_iEO15MX2MfjNze83NqvXVI
            source_type: api_record
            title: 中国历代人物传记资料库：王之度（CBDB 307687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json
            external_identifier: CBDB:307687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxEM6RL9fRNSLHFJ3ioZEE
        status: active
        display_name: 王芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PQDzWpkbsJBrCPCUAKNiPE
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dWcZ38uBoPToBcS8pzjFDV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MV-1mDTIBawQNa8uAUDjGE
          claim_id: c_PQDzWpkbsJBrCPCUAKNiPE
          source_id: s_iEO15MX2MfjNze83NqvXVI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iEO15MX2MfjNze83NqvXVI
            source_type: api_record
            title: 中国历代人物传记资料库：王之度（CBDB 307687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json
            external_identifier: CBDB:307687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
---

# 王之度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之度，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307687） | accepted |
| name.primary | 王之度 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxEM6RL9fRNSLHFJ3ioZEE | 王芳 | accepted |
| other | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之度（CBDB 307687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json)
