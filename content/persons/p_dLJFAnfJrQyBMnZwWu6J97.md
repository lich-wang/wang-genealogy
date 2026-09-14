---
schema: wang-person/v1
id: p_dLJFAnfJrQyBMnZwWu6J97
status: active
merged_into: null
display_name: 王瓘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_urUpQ357sgHd44XKCVehyz
        subject_person_id: p_dLJFAnfJrQyBMnZwWu6J97
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jEJZ1t6FWqE7sVduujuWkr
          claim_id: c_urUpQ357sgHd44XKCVehyz
          source_id: s_2Q5tE2fSyU4Lu7XgEZtZCK
          stance: supports
          locator: CBDB:45854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45854）
          source: &a1
            id: s_2Q5tE2fSyU4Lu7XgEZtZCK
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 45854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45854&o=json
            external_identifier: CBDB:45854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_maUyArqAuvsMfscE8728q6
        subject_person_id: p_dLJFAnfJrQyBMnZwWu6J97
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘，宋人物。籍贯四川，曾任三司度支判官、集賢院校理、尚書省刑部刑部司郎中。（中国历代人物传记资料库 CBDB 45854）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JN3FptWNHdEl-rpdQmLtt
          claim_id: c_maUyArqAuvsMfscE8728q6
          source_id: s_2Q5tE2fSyU4Lu7XgEZtZCK
          stance: supports
          locator: CBDB:45854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TCsmUWoMSIqPBBiDsR8Wen
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dLJFAnfJrQyBMnZwWu6J97
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agfuLgRur7DGI6d4BMASmW
          claim_id: c_TCsmUWoMSIqPBBiDsR8Wen
          source_id: s_i4NULKPGy8lzfUol6x-a2V
          stance: supports
          locator: CBDB：兄弟 王珪（1845）之父／母 王準
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓘 与 王珪 为同胞（CBDB 记「弟」），王珪 之父／母即 王瓘 之父／母。
          source:
            id: s_i4NULKPGy8lzfUol6x-a2V
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 45854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45854&o=json
            external_identifier: CBDB:45854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qtbxt55gw7F1hTWtEuCisP
        status: active
        display_name: 王準
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bD4wQAVZ-q0w0yo4uZ2YhP
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dLJFAnfJrQyBMnZwWu6J97
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a_KbRCrw5tdRGpcVZ80qPU
          claim_id: c_bD4wQAVZ-q0w0yo4uZ2YhP
          source_id: s_i4NULKPGy8lzfUol6x-a2V
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 1845 王珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i4NULKPGy8lzfUol6x-a2V
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 45854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45854&o=json
            external_identifier: CBDB:45854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
---

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓘 | accepted |
| bio.summary | 王瓘，宋人物。籍贯四川，曾任三司度支判官、集賢院校理、尚書省刑部刑部司郎中。（中国历代人物传记资料库 CBDB 45854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qtbxt55gw7F1hTWtEuCisP | 王準 | accepted |
| other | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓘（CBDB 45854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45854&o=json)
