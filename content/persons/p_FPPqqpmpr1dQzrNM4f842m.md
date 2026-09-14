---
schema: wang-person/v1
id: p_FPPqqpmpr1dQzrNM4f842m
status: active
merged_into: null
display_name: 王珂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DWrv1VDaGMxva4D8QwCkL
        subject_person_id: p_FPPqqpmpr1dQzrNM4f842m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_watb5o4vrMJ5s7YjqW2NHh
          claim_id: c_9DWrv1VDaGMxva4D8QwCkL
          source_id: s_ScMGsG4q5uVNftNQ8WToTi
          stance: supports
          locator: CBDB:294957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294957）
          source: &a1
            id: s_ScMGsG4q5uVNftNQ8WToTi
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 294957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json
            external_identifier: CBDB:294957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jRYjN3M1q9UKGs8iGG9DG4
        subject_person_id: p_FPPqqpmpr1dQzrNM4f842m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xH5s6POnRW0zAfmTQO800N
          claim_id: c_jRYjN3M1q9UKGs8iGG9DG4
          source_id: s_ScMGsG4q5uVNftNQ8WToTi
          stance: supports
          locator: CBDB:294957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gKRsW0FgtYXq9BzTQqKQ-o
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FPPqqpmpr1dQzrNM4f842m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__MwXzP8lcQVtT4vxufIuDJ
          claim_id: c_gKRsW0FgtYXq9BzTQqKQ-o
          source_id: s_7rMAm9MWhyPOJA21KzwA0x
          stance: supports
          locator: CBDB：兄弟 王佩（202809）之父／母 王深
          quotation: null
          interpretation_note: 由兄弟关系推断：王珂 与 王佩 为同胞（CBDB 记「弟」），王佩 之父／母即 王珂 之父／母。
          source:
            id: s_7rMAm9MWhyPOJA21KzwA0x
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 294957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json
            external_identifier: CBDB:294957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cDjtDCi8h6mSG4Cms93AKT
        status: active
        display_name: 王深
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hYF7I56lJFMB507GxTwpMV
        subject_person_id: p_FPPqqpmpr1dQzrNM4f842m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Oq6XuFiSQWDCUeDY_7Nyu4
          claim_id: c_hYF7I56lJFMB507GxTwpMV
          source_id: s_7rMAm9MWhyPOJA21KzwA0x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202809 王佩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7rMAm9MWhyPOJA21KzwA0x
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 294957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json
            external_identifier: CBDB:294957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ShbQcKbhPZJtYL14xZXyTR
        status: active
        display_name: 王佩
        merged_into_person_id: null
---

# 王珂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珂 | accepted |
| bio.summary | 王珂，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cDjtDCi8h6mSG4Cms93AKT | 王深 | accepted |
| other | p_ShbQcKbhPZJtYL14xZXyTR | 王佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珂（CBDB 294957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json)
