---
schema: wang-person/v1
id: p_b9xjNccc1s62G7w8GroKVg
status: active
merged_into: null
display_name: 王三顧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZgpY1WHLbjuDtgkLy7oCEw
        subject_person_id: p_b9xjNccc1s62G7w8GroKVg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三顧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6MLANcVhEe47Hdm5ZVPLqd
          claim_id: c_ZgpY1WHLbjuDtgkLy7oCEw
          source_id: s_bis35JeDqnHEwSy4r12neq
          stance: supports
          locator: CBDB:303946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303946）
          source: &a1
            id: s_bis35JeDqnHEwSy4r12neq
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 303946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303946&o=json
            external_identifier: CBDB:303946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_krzZy8gSLPfApVDmP9HQmH
        subject_person_id: p_b9xjNccc1s62G7w8GroKVg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三顧，明人物。嘉靖二十年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 303946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_09wvyc8t0f2jVRgYYUECPY
          claim_id: c_krzZy8gSLPfApVDmP9HQmH
          source_id: s_bis35JeDqnHEwSy4r12neq
          stance: supports
          locator: CBDB:303946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yGE4tLNLpK2B_pkHYpvOEL
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b9xjNccc1s62G7w8GroKVg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_72dOC4nmQyBCXBEnXn-Svt
          claim_id: c_yGE4tLNLpK2B_pkHYpvOEL
          source_id: s_I3Q2JJAwQZaDH5_h6IKNOg
          stance: supports
          locator: CBDB：兄弟 王三聘（203385）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王三顧 与 王三聘 为同胞（CBDB 记「兄」），王三聘 之父／母即 王三顧 之父／母。
          source:
            id: s_I3Q2JJAwQZaDH5_h6IKNOg
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 303946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303946&o=json
            external_identifier: CBDB:303946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_32qBUADizjGa3P7B3ZTimt
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ttiRHNb2YJW1XcP7nEHydc
        subject_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b9xjNccc1s62G7w8GroKVg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZOp49b9FN_XcuhucSCC3F4
          claim_id: c_ttiRHNb2YJW1XcP7nEHydc
          source_id: s_I3Q2JJAwQZaDH5_h6IKNOg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203385 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I3Q2JJAwQZaDH5_h6IKNOg
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 303946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303946&o=json
            external_identifier: CBDB:303946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_USmQUSMYXi4KzQDYfEfPrB
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王三顧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三顧 | accepted |
| bio.summary | 王三顧，明人物。嘉靖二十年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 303946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_32qBUADizjGa3P7B3ZTimt | 王瑤 | accepted |
| other | p_USmQUSMYXi4KzQDYfEfPrB | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三顧（CBDB 303946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303946&o=json)
