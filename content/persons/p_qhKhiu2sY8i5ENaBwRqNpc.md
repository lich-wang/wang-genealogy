---
schema: wang-person/v1
id: p_qhKhiu2sY8i5ENaBwRqNpc
status: active
merged_into: null
display_name: 王詔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AGJjCGe9xwBqWddcywXue6
        subject_person_id: p_qhKhiu2sY8i5ENaBwRqNpc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m5B3LQCnyyV6YZyLFkA3wF
          claim_id: c_AGJjCGe9xwBqWddcywXue6
          source_id: s_Vj2a7aktbag8FTV7jGxdL6
          stance: supports
          locator: CBDB:247217
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247217）
          source: &a1
            id: s_Vj2a7aktbag8FTV7jGxdL6
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 247217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json
            external_identifier: CBDB:247217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8nuobxFiv8PD9iZyYZkWB6
        subject_person_id: p_qhKhiu2sY8i5ENaBwRqNpc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tPdaqVTP7PvP8avibuLuvj
          claim_id: c_8nuobxFiv8PD9iZyYZkWB6
          source_id: s_Vj2a7aktbag8FTV7jGxdL6
          stance: supports
          locator: CBDB:247217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LZ-b3zJGzWXljv81fFLc46
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhKhiu2sY8i5ENaBwRqNpc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOTGplAecKELWrZWtt5PL6
          claim_id: c_LZ-b3zJGzWXljv81fFLc46
          source_id: s_U_Rslw1KeqpvK7ZITXGU1M
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王詔 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王詔 之父／母。
          source:
            id: s_U_Rslw1KeqpvK7ZITXGU1M
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 247217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json
            external_identifier: CBDB:247217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PASiCHQs3ZcH2e9PXEScwH
        status: active
        display_name: 王效
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_r2N5Vf6x9SAd41Zq0N3FSa
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qhKhiu2sY8i5ENaBwRqNpc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VEKKfWIfY0Hg0AIx4b80iH
          claim_id: c_r2N5Vf6x9SAd41Zq0N3FSa
          source_id: s_U_Rslw1KeqpvK7ZITXGU1M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U_Rslw1KeqpvK7ZITXGU1M
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 247217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json
            external_identifier: CBDB:247217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | 王詔，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247217） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PASiCHQs3ZcH2e9PXEScwH | 王效 | accepted |
| other | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 247217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json)
