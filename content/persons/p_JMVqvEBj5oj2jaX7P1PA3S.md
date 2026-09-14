---
schema: wang-person/v1
id: p_JMVqvEBj5oj2jaX7P1PA3S
status: active
merged_into: null
display_name: 王義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6hh6PJUpaLZtUnUPQh3PyM
        subject_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SxyyMPMsxbN15E3jiRBETB
          claim_id: c_6hh6PJUpaLZtUnUPQh3PyM
          source_id: s_F1B6uHSeCPMDY2gJ9yLE63
          stance: supports
          locator: CBDB:245219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245219）
          source: &a1
            id: s_F1B6uHSeCPMDY2gJ9yLE63
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 245219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json
            external_identifier: CBDB:245219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTVoEkqxmik4EpZDvKA2xj
        subject_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245219）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1v3RF6XyhnhLC2nr-acZG_
          claim_id: c_UTVoEkqxmik4EpZDvKA2xj
          source_id: s_F1B6uHSeCPMDY2gJ9yLE63
          stance: supports
          locator: CBDB:245219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t9Ve7-omi8eQAFPSzdc5D5
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5YgQF2RLNqB4QJ2kB8W5C
          claim_id: c_t9Ve7-omi8eQAFPSzdc5D5
          source_id: s_67L5gY9iPDl7iHOUQfCJoX
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王義 与 王智 为同胞（CBDB 记「弟」），王智 之父／母即 王義 之父／母。
          source:
            id: s_67L5gY9iPDl7iHOUQfCJoX
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 245219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json
            external_identifier: CBDB:245219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qmh6ExHEGb6N6NWE8gC5i
        status: active
        display_name: 王昭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RJEG3v2ehGzjMzzCskKJgY
        subject_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_06Q2OLxHHKNFQvQ5oCvhHW
          claim_id: c_RJEG3v2ehGzjMzzCskKJgY
          source_id: s_67L5gY9iPDl7iHOUQfCJoX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_67L5gY9iPDl7iHOUQfCJoX
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 245219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json
            external_identifier: CBDB:245219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YA1G7T5veW43cswnoFX8Ym
        status: active
        display_name: 王智
        merged_into_person_id: null
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245219） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qmh6ExHEGb6N6NWE8gC5i | 王昭 | accepted |
| other | p_YA1G7T5veW43cswnoFX8Ym | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 245219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json)
