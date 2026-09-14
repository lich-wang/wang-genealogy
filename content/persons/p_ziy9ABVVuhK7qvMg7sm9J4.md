---
schema: wang-person/v1
id: p_ziy9ABVVuhK7qvMg7sm9J4
status: active
merged_into: null
display_name: 王璉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNCuTBCtJLUFHU9TKCHB4P
        subject_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xaZdz2e1Gma8CgyRqfZHUL
          claim_id: c_kNCuTBCtJLUFHU9TKCHB4P
          source_id: s_mG4hpz4XcQjkkUBLyzAAwd
          stance: supports
          locator: CBDB:242771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242771）
          source: &a1
            id: s_mG4hpz4XcQjkkUBLyzAAwd
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PqygQNCFYd8vvgYPqQK3gn
        subject_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BZ3pLcVRah2hPdayOA3sJm
          claim_id: c_PqygQNCFYd8vvgYPqQK3gn
          source_id: s_mG4hpz4XcQjkkUBLyzAAwd
          stance: supports
          locator: CBDB:242771
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aWQuiBwALxiixhdpVD8leu
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CdLlODUJPpYZJoX13IpPLO
          claim_id: c_aWQuiBwALxiixhdpVD8leu
          source_id: s_tmIxMokX3rAVMLLLwVbgMF
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王璉 之父／母。
          source:
            id: s_tmIxMokX3rAVMLLLwVbgMF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
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
        id: c_94GN9i44gCwSeOdtf-SxHS
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vc9TIgfasaeSoaImdyADp
          claim_id: c_94GN9i44gCwSeOdtf-SxHS
          source_id: s_tmIxMokX3rAVMLLLwVbgMF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tmIxMokX3rAVMLLLwVbgMF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_6s5WJL3je-Hduej5hdHpUF
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3OldZWjOTxtqI8KSZZGgj
          claim_id: c_6s5WJL3je-Hduej5hdHpUF
          source_id: s_tmIxMokX3rAVMLLLwVbgMF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tmIxMokX3rAVMLLLwVbgMF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| other | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 242771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json)
