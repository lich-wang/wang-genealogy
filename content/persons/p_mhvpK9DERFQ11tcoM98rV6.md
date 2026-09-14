---
schema: wang-person/v1
id: p_mhvpK9DERFQ11tcoM98rV6
status: active
merged_into: null
display_name: 王琅
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dWY8hDxaLc3GDQh8wsHA5c
        subject_person_id: p_mhvpK9DERFQ11tcoM98rV6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LfYBE1WcAfeh4YJZE27uHQ
          claim_id: c_dWY8hDxaLc3GDQh8wsHA5c
          source_id: s_P7bNGJt8XBH1U1EWzCphNT
          stance: supports
          locator: CBDB:242778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242778）
          source: &a1
            id: s_P7bNGJt8XBH1U1EWzCphNT
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dq1SaCHn7jJYx72yKDsETt
        subject_person_id: p_mhvpK9DERFQ11tcoM98rV6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D_LaaDySjCqlyhKGpkZ88t
          claim_id: c_dq1SaCHn7jJYx72yKDsETt
          source_id: s_P7bNGJt8XBH1U1EWzCphNT
          stance: supports
          locator: CBDB:242778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_55wNy1Bf106g_VqkjReylv
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mhvpK9DERFQ11tcoM98rV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RG5tyPP9K2Vgfe1Z_jY-kS
          claim_id: c_55wNy1Bf106g_VqkjReylv
          source_id: s_oACEjltYYMeO4y64X42TSb
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王琅 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王琅 之父／母。
          source:
            id: s_oACEjltYYMeO4y64X42TSb
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
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
        id: c_IJkEDwQsuY4vmgtpK_MdFW
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhvpK9DERFQ11tcoM98rV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2lA3te5htprsqRJJv3X0R0
          claim_id: c_IJkEDwQsuY4vmgtpK_MdFW
          source_id: s_oACEjltYYMeO4y64X42TSb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oACEjltYYMeO4y64X42TSb
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_w8loz13W8hFIJFzkxdWXcT
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhvpK9DERFQ11tcoM98rV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZD3DrpfI-w_38G7hYLhkFD
          claim_id: c_w8loz13W8hFIJFzkxdWXcT
          source_id: s_oACEjltYYMeO4y64X42TSb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oACEjltYYMeO4y64X42TSb
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
---

# 王琅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琅 | accepted |
| bio.summary | 王琅，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| other | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琅（CBDB 242778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json)
