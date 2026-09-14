---
schema: wang-person/v1
id: p_D2wPSDAQKN7cA3Y8wQgqPM
status: active
merged_into: null
display_name: 王璽
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGSvSjedyJvMXtCMtprUYN
        subject_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gLjSSTsup7iich9KgYwWCA
          claim_id: c_LGSvSjedyJvMXtCMtprUYN
          source_id: s_FGV9aAQpQYq6TuTA5EUjdr
          stance: supports
          locator: CBDB:242770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242770）
          source: &a1
            id: s_FGV9aAQpQYq6TuTA5EUjdr
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DVXQqbPFNzwgfBj8PbRqdW
        subject_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WcBkPxOyjo_OYHWSEvMPLQ
          claim_id: c_DVXQqbPFNzwgfBj8PbRqdW
          source_id: s_FGV9aAQpQYq6TuTA5EUjdr
          stance: supports
          locator: CBDB:242770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dtHks4Kwk0G-a885c7hI_e
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8M4Hjm3bp4W2No41Pk42TA
          claim_id: c_dtHks4Kwk0G-a885c7hI_e
          source_id: s_FnIdFzNCRSLECjaYD2utNi
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王瑞 为同胞（CBDB 记「弟」），王瑞 之父／母即 王璽 之父／母。
          source:
            id: s_FnIdFzNCRSLECjaYD2utNi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EVaw_UoDCxdAKXz3K469jO
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZOWrC3DJKuxrSyNPWFmJrF
          claim_id: c_EVaw_UoDCxdAKXz3K469jO
          source_id: s_FnIdFzNCRSLECjaYD2utNi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FnIdFzNCRSLECjaYD2utNi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_sZRTKZ_0EtdAB31zA3TK-d
        subject_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_siU13GeISXYgE64zehVPB6
          claim_id: c_sZRTKZ_0EtdAB31zA3TK-d
          source_id: s_FnIdFzNCRSLECjaYD2utNi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FnIdFzNCRSLECjaYD2utNi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| other | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 242770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json)
