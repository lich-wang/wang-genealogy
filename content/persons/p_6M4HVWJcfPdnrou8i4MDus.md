---
schema: wang-person/v1
id: p_6M4HVWJcfPdnrou8i4MDus
status: active
merged_into: null
display_name: 王潮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xx4z6Qn8KyHMTmDYnnL27R
        subject_person_id: p_6M4HVWJcfPdnrou8i4MDus
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_58pk4bzQG7xc8nC1pUg18H
          claim_id: c_Xx4z6Qn8KyHMTmDYnnL27R
          source_id: s_Ska1XHf8qEy6Wzm1619smf
          stance: supports
          locator: CBDB:265674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265674）
          source: &a1
            id: s_Ska1XHf8qEy6Wzm1619smf
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 265674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json
            external_identifier: CBDB:265674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1wZNdRwjWmqfD7quLjjj38
        subject_person_id: p_6M4HVWJcfPdnrou8i4MDus
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yf0ahQJ20PkoSIuYxRqmfS
          claim_id: c_1wZNdRwjWmqfD7quLjjj38
          source_id: s_Ska1XHf8qEy6Wzm1619smf
          stance: supports
          locator: CBDB:265674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gSH7jSN3Vu1Z2roslhjM3h
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6M4HVWJcfPdnrou8i4MDus
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FT6sKi9f8Yi3Xkn-KPFRQf
          claim_id: c_gSH7jSN3Vu1Z2roslhjM3h
          source_id: s_hvuEDm6Hjf5BGQCMzJhLPq
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王潮 与 王昊 为同胞（CBDB 记「弟」），王昊 之父／母即 王潮 之父／母。
          source:
            id: s_hvuEDm6Hjf5BGQCMzJhLPq
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 265674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json
            external_identifier: CBDB:265674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_URk2BrLDKqiyhHZQPHt91g
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XTHhDKrPxm5E0s8yDUQByu
        subject_person_id: p_6M4HVWJcfPdnrou8i4MDus
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4mOVT8YArCK9h6yDXLLMq
          claim_id: c_XTHhDKrPxm5E0s8yDUQByu
          source_id: s_hvuEDm6Hjf5BGQCMzJhLPq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hvuEDm6Hjf5BGQCMzJhLPq
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 265674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json
            external_identifier: CBDB:265674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
---

# 王潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潮 | accepted |
| bio.summary | 王潮，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_URk2BrLDKqiyhHZQPHt91g | 王貴 | accepted |
| other | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 265674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json)
