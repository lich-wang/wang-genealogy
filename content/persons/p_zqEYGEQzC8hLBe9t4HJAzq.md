---
schema: wang-person/v1
id: p_zqEYGEQzC8hLBe9t4HJAzq
status: active
merged_into: null
display_name: 王學孔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1vu4Y7Zxq5xAE3ebiJMdwJ
        subject_person_id: p_zqEYGEQzC8hLBe9t4HJAzq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學孔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qhP29T5Tkt1TPJakBZgKGu
          claim_id: c_1vu4Y7Zxq5xAE3ebiJMdwJ
          source_id: s_BqWsQuAZREBBd1e3pKrum2
          stance: supports
          locator: CBDB:287449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287449）
          source: &a1
            id: s_BqWsQuAZREBBd1e3pKrum2
            source_type: api_record
            title: 中国历代人物传记资料库：王學孔（CBDB 287449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json
            external_identifier: CBDB:287449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2kK3VXZkbggV9wex41RU17
        subject_person_id: p_zqEYGEQzC8hLBe9t4HJAzq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學孔，明人物。嘉靖八年進士，籍贯安福，曾任推官。（中国历代人物传记资料库 CBDB 287449）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bnSWCZCat0PtMNM_w6gtXF
          claim_id: c_2kK3VXZkbggV9wex41RU17
          source_id: s_BqWsQuAZREBBd1e3pKrum2
          stance: supports
          locator: CBDB:287449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4TgRxmqqYbPa8brQrvoz4K
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zqEYGEQzC8hLBe9t4HJAzq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hAdK0SEoDgEMbDfG73XJD
          claim_id: c_4TgRxmqqYbPa8brQrvoz4K
          source_id: s_GhmctIiTasDUayw9cvPUdk
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學孔 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學孔 之父／母。
          source:
            id: s_GhmctIiTasDUayw9cvPUdk
            source_type: api_record
            title: 中国历代人物传记资料库：王學孔（CBDB 287449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json
            external_identifier: CBDB:287449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EJz6NDNXPRUy1b3XSr2FQp
        status: active
        display_name: 王稼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_57yd5-M8Xc9yTkbSv3RlfT
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zqEYGEQzC8hLBe9t4HJAzq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQYfTjUYpgd3E0rjtTh0Sh
          claim_id: c_57yd5-M8Xc9yTkbSv3RlfT
          source_id: s_GhmctIiTasDUayw9cvPUdk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GhmctIiTasDUayw9cvPUdk
            source_type: api_record
            title: 中国历代人物传记资料库：王學孔（CBDB 287449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json
            external_identifier: CBDB:287449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
---

# 王學孔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學孔 | accepted |
| bio.summary | 王學孔，明人物。嘉靖八年進士，籍贯安福，曾任推官。（中国历代人物传记资料库 CBDB 287449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EJz6NDNXPRUy1b3XSr2FQp | 王稼 | accepted |
| other | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學孔（CBDB 287449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json)
