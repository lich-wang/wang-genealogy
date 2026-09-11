---
schema: wang-person/v1
id: p_j2pBDD21Qom1eWLd3CawJw
status: active
merged_into: null
display_name: 王慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4PBNB6kcTN819Q9yM4Jc4
        subject_person_id: p_j2pBDD21Qom1eWLd3CawJw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gAS2YKdmXw8BPoSqUG4cgQ
          claim_id: c_Z4PBNB6kcTN819Q9yM4Jc4
          source_id: s_Q4dJ9vkeXEpGN7T2oG3MuY
          stance: supports
          locator: CBDB:315702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315702）
          source: &a1
            id: s_Q4dJ9vkeXEpGN7T2oG3MuY
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 315702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315702&o=json
            external_identifier: CBDB:315702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n3y7hDbnnVBMY7g9CjWmCA
        subject_person_id: p_j2pBDD21Qom1eWLd3CawJw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶，明人物。嘉靖三十二年進士，曾任教諭。（中国历代人物传记资料库 CBDB 315702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qmjtu23vkDWbU9oXWmzvfi
          claim_id: c_n3y7hDbnnVBMY7g9CjWmCA
          source_id: s_Q4dJ9vkeXEpGN7T2oG3MuY
          stance: supports
          locator: CBDB:315702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ICVSynne5m_Rm-udNhmOHQ
        subject_person_id: p_j2pBDD21Qom1eWLd3CawJw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q4T2TrI0FWcWGxJUsrUdXw
          claim_id: c_ICVSynne5m_Rm-udNhmOHQ
          source_id: s_Q4dJ9vkeXEpGN7T2oG3MuY
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | 王慶，明人物。嘉靖三十二年進士，曾任教諭。（中国历代人物传记资料库 CBDB 315702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 315702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315702&o=json)
