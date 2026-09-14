---
schema: wang-person/v1
id: p_2yXRDyrqgrTNwtaMBvJ67v
status: active
merged_into: null
display_name: 王瀾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wRfWHxS1uCwLj39EuK89am
        subject_person_id: p_2yXRDyrqgrTNwtaMBvJ67v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TK1QkTG5TKdHM5kbhCfvMH
          claim_id: c_wRfWHxS1uCwLj39EuK89am
          source_id: s_DLH6nYZKHTpvyaCPSnEEGX
          stance: supports
          locator: CBDB:320900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320900）
          source: &a1
            id: s_DLH6nYZKHTpvyaCPSnEEGX
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 320900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320900&o=json
            external_identifier: CBDB:320900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BX6CMe6iqfYHXb8Z9NHPh3
        subject_person_id: p_2yXRDyrqgrTNwtaMBvJ67v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀾，明人物。嘉靖三十五年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 320900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O8CJlhRbvyj5hCdOtAm4Vs
          claim_id: c_BX6CMe6iqfYHXb8Z9NHPh3
          source_id: s_DLH6nYZKHTpvyaCPSnEEGX
          stance: supports
          locator: CBDB:320900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fBhtdc7bzNZqiPZ43tzQ-C
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2yXRDyrqgrTNwtaMBvJ67v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMGvLN3FdyFbF9swdOOoM5
          claim_id: c_fBhtdc7bzNZqiPZ43tzQ-C
          source_id: s_AoayxgMtibSrfy1n2tewxC
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀾 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王瀾 之父／母。
          source:
            id: s_AoayxgMtibSrfy1n2tewxC
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 320900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320900&o=json
            external_identifier: CBDB:320900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N8VeHKkRJBXUZc2iB2TQ63
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sl9SUGf9yRwtXxHbHT8GBr
        subject_person_id: p_2yXRDyrqgrTNwtaMBvJ67v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7xVa8ivPDPteJR7tikUd4a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qjQZexmIQAKWA30Uxcld80
          claim_id: c_sl9SUGf9yRwtXxHbHT8GBr
          source_id: s_AoayxgMtibSrfy1n2tewxC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204567 王洀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AoayxgMtibSrfy1n2tewxC
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 320900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320900&o=json
            external_identifier: CBDB:320900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7xVa8ivPDPteJR7tikUd4a
        status: active
        display_name: 王洀
        merged_into_person_id: null
---

# 王瀾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀾 | accepted |
| bio.summary | 王瀾，明人物。嘉靖三十五年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 320900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N8VeHKkRJBXUZc2iB2TQ63 | 王鏜 | accepted |
| other | p_7xVa8ivPDPteJR7tikUd4a | 王洀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀾（CBDB 320900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320900&o=json)
