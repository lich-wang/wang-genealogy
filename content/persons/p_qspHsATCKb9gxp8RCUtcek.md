---
schema: wang-person/v1
id: p_qspHsATCKb9gxp8RCUtcek
status: active
merged_into: null
display_name: 王大均
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZFzLJr5JXtf3v9QuLoSjSq
        subject_person_id: p_qspHsATCKb9gxp8RCUtcek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wNwN6bBQvB4JoPCGaTFisT
          claim_id: c_ZFzLJr5JXtf3v9QuLoSjSq
          source_id: s_guAfW7XHDg5vPbCMUNonw2
          stance: supports
          locator: CBDB:301952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301952）
          source: &a1
            id: s_guAfW7XHDg5vPbCMUNonw2
            source_type: api_record
            title: 中国历代人物传记资料库：王大均（CBDB 301952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json
            external_identifier: CBDB:301952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ze8YZA755zQEhanPLChvWb
        subject_person_id: p_qspHsATCKb9gxp8RCUtcek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大均，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NV85rXo3X1oELbRobbkPnI
          claim_id: c_Ze8YZA755zQEhanPLChvWb
          source_id: s_guAfW7XHDg5vPbCMUNonw2
          stance: supports
          locator: CBDB:301952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ffqt4EAnTJA-01eqPEPnmV
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qspHsATCKb9gxp8RCUtcek
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C5BFolSsJobwL5Js5Kq_Mn
          claim_id: c_Ffqt4EAnTJA-01eqPEPnmV
          source_id: s_4PkUvKOyoxSY45C1BplzsV
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大均 与 王大平 为同胞（CBDB 记「弟」），王大平 之父／母即 王大均 之父／母。
          source:
            id: s_4PkUvKOyoxSY45C1BplzsV
            source_type: api_record
            title: 中国历代人物传记资料库：王大均（CBDB 301952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json
            external_identifier: CBDB:301952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TElq1VggjOrh_YjF0njZUN
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qspHsATCKb9gxp8RCUtcek
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EGDDheqbpQPKm7SGAxaDeX
          claim_id: c_TElq1VggjOrh_YjF0njZUN
          source_id: s_4PkUvKOyoxSY45C1BplzsV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4PkUvKOyoxSY45C1BplzsV
            source_type: api_record
            title: 中国历代人物传记资料库：王大均（CBDB 301952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json
            external_identifier: CBDB:301952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
---

# 王大均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大均 | accepted |
| bio.summary | 王大均，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| other | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大均（CBDB 301952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json)
