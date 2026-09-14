---
schema: wang-person/v1
id: p_1hgWJjYPsJeU6Nr7VAY7UF
status: active
merged_into: null
display_name: 王居安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GWBorczxQ4e8yGNZVtke5Y
        subject_person_id: p_1hgWJjYPsJeU6Nr7VAY7UF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y6P6278NpJoCeP5ycDJonc
          claim_id: c_GWBorczxQ4e8yGNZVtke5Y
          source_id: s_7c3jw4783bB5o2uEqAJUSE
          stance: supports
          locator: CBDB:21998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21998）
          source: &a1
            id: s_7c3jw4783bB5o2uEqAJUSE
            source_type: api_record
            title: 中国历代人物传记资料库：王居安（CBDB 21998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21998&o=json
            external_identifier: CBDB:21998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HqTRgwBs8V3c4e7UDZHfYC
        subject_person_id: p_1hgWJjYPsJeU6Nr7VAY7UF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居安，宋人物。籍贯黃巖，入仕進士，曾任尚書省工部侍郎、朝奉郎、三館。（中国历代人物传记资料库 CBDB 21998）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MzE_F0R0CEXMrYBT3MQJ1_
          claim_id: c_HqTRgwBs8V3c4e7UDZHfYC
          source_id: s_7c3jw4783bB5o2uEqAJUSE
          stance: supports
          locator: CBDB:21998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BoMNnife2Jqh1Qf7qLPgzm
        subject_person_id: p_1hgWJjYPsJeU6Nr7VAY7UF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2gK4G9GNyuX6MS6qh5oei4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g6NKJGb_Jg1m8mQs8ZQo-0
          claim_id: c_BoMNnife2Jqh1Qf7qLPgzm
          source_id: s_xJrABuC3Ay_JjjcCjJ5tXn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 21999 王居實）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xJrABuC3Ay_JjjcCjJ5tXn
            source_type: api_record
            title: 中国历代人物传记资料库：王居安（CBDB 21998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21998&o=json
            external_identifier: CBDB:21998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2gK4G9GNyuX6MS6qh5oei4
        status: active
        display_name: 王居實
        merged_into_person_id: null
---

# 王居安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居安 | accepted |
| bio.summary | 王居安，宋人物。籍贯黃巖，入仕進士，曾任尚書省工部侍郎、朝奉郎、三館。（中国历代人物传记资料库 CBDB 21998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_2gK4G9GNyuX6MS6qh5oei4 | 王居實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王居安（CBDB 21998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21998&o=json)
