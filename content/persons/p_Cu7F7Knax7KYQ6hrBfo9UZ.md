---
schema: wang-person/v1
id: p_Cu7F7Knax7KYQ6hrBfo9UZ
status: active
merged_into: null
display_name: 王大有
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G13pPoEyM8nSVFqtK6SSw7
        subject_person_id: p_Cu7F7Knax7KYQ6hrBfo9UZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NznyRdzWJGCVPVtKft8hjT
          claim_id: c_G13pPoEyM8nSVFqtK6SSw7
          source_id: s_CCcrAmHM7gHbH174EQN15r
          stance: supports
          locator: CBDB:22144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22144）
          source: &a1
            id: s_CCcrAmHM7gHbH174EQN15r
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 22144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22144&o=json
            external_identifier: CBDB:22144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c9DuxL5ui7h6CPMfrSZ2kW
        subject_person_id: p_Cu7F7Knax7KYQ6hrBfo9UZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QifS3EvraXfSjZpmYE3sek
          claim_id: c_c9DuxL5ui7h6CPMfrSZ2kW
          source_id: s_CCcrAmHM7gHbH174EQN15r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mNYSGigcmGtErdHZtvR5cQ
        subject_person_id: p_UksH2GDrhL8wGMt6a6tBo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Cu7F7Knax7KYQ6hrBfo9UZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Fb1GXraLNB5coN8oY4pyi
          claim_id: c_mNYSGigcmGtErdHZtvR5cQ
          source_id: s_CCcrAmHM7gHbH174EQN15r
          stance: supports
          locator: CBDB 双向互证（祖父 王棠 ⇄ 孫 王大有）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UksH2GDrhL8wGMt6a6tBo9
        status: active
        display_name: 王棠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王大有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大有 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_UksH2GDrhL8wGMt6a6tBo9 | 王棠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大有（CBDB 22144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22144&o=json)
