---
schema: wang-person/v1
id: p_LAzmXqeLSTSSaP91CUcU6f
status: active
merged_into: null
display_name: 王理
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VL7HT6qoBo1XfH499PmahR
        subject_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SjaqtoacddAMBMUsuNVPiH
          claim_id: c_VL7HT6qoBo1XfH499PmahR
          source_id: s_9Jwen3s4FG37TL2GZCfeay
          stance: supports
          locator: CBDB:242768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242768）
          source: &a1
            id: s_9Jwen3s4FG37TL2GZCfeay
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qW53q52RC9TT96bXSPGFUk
        subject_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n9Kw7KHhSmbFrMSbb90tBN
          claim_id: c_qW53q52RC9TT96bXSPGFUk
          source_id: s_9Jwen3s4FG37TL2GZCfeay
          stance: supports
          locator: CBDB:242768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DgQ-pqVJqmAClN4I9lsCd0
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jy6TkSti3P-noX3sLEFIaL
          claim_id: c_DgQ-pqVJqmAClN4I9lsCd0
          source_id: s_xnEfw-N7Om1zIM3q-uuW3Y
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王理 与 王瑞 为同胞（CBDB 记「弟」），王瑞 之父／母即 王理 之父／母。
          source:
            id: s_xnEfw-N7Om1zIM3q-uuW3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
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
        id: c_ZK1ZubBzKBHr8jCyEBbb40
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L-uDMTVj_Q045kZGkxIktw
          claim_id: c_ZK1ZubBzKBHr8jCyEBbb40
          source_id: s_xnEfw-N7Om1zIM3q-uuW3Y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xnEfw-N7Om1zIM3q-uuW3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_Yl-h66BzlP96HvcV54Qka2
        subject_person_id: p_LAzmXqeLSTSSaP91CUcU6f
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
        - id: cs_su_Zoh61fdjvJhcbiJ3lRt
          claim_id: c_Yl-h66BzlP96HvcV54Qka2
          source_id: s_xnEfw-N7Om1zIM3q-uuW3Y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xnEfw-N7Om1zIM3q-uuW3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| other | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 242768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json)
