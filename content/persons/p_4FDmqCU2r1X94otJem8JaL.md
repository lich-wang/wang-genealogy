---
schema: wang-person/v1
id: p_4FDmqCU2r1X94otJem8JaL
status: active
merged_into: null
display_name: 王應曾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RP4ngzgLQipFKceJx6oda6
        subject_person_id: p_4FDmqCU2r1X94otJem8JaL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_86iTFYqruTFcJGsTmoGAS6
          claim_id: c_RP4ngzgLQipFKceJx6oda6
          source_id: s_MQ4AdFexFpogf5P1hnJE54
          stance: supports
          locator: CBDB:304276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304276）
          source: &a1
            id: s_MQ4AdFexFpogf5P1hnJE54
            source_type: api_record
            title: 中国历代人物传记资料库：王應曾（CBDB 304276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304276&o=json
            external_identifier: CBDB:304276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VHC5gGdTrVwyz7DP93zG2h
        subject_person_id: p_4FDmqCU2r1X94otJem8JaL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應曾，明人物。嘉靖二十年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 304276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ndqkyAlJUJ5Q2ugXsWLFVU
          claim_id: c_VHC5gGdTrVwyz7DP93zG2h
          source_id: s_MQ4AdFexFpogf5P1hnJE54
          stance: supports
          locator: CBDB:304276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_74e3-ZQrQoUiFq0yw9Lto1
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FDmqCU2r1X94otJem8JaL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__UIzbsjxnBOZbLmB9oTn4r
          claim_id: c_74e3-ZQrQoUiFq0yw9Lto1
          source_id: s_U1Eg0s2KmXCq1ei48ay-ge
          stance: supports
          locator: CBDB：兄弟 王應鍾（126850）之父／母 王密
          quotation: null
          interpretation_note: 由兄弟关系推断：王應曾 与 王應鍾 为同胞（CBDB 记「兄」），王應鍾 之父／母即 王應曾 之父／母。
          source:
            id: s_U1Eg0s2KmXCq1ei48ay-ge
            source_type: api_record
            title: 中国历代人物传记资料库：王應曾（CBDB 304276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304276&o=json
            external_identifier: CBDB:304276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLXHmJpMp4wz4g5naM2r4z
        status: active
        display_name: 王密
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y4aXKGl8AwTViT7zN2VdMS
        subject_person_id: p_4FDmqCU2r1X94otJem8JaL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hD7YQp0PnuuQ9lOznyHl4G
          claim_id: c_y4aXKGl8AwTViT7zN2VdMS
          source_id: s_U1Eg0s2KmXCq1ei48ay-ge
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U1Eg0s2KmXCq1ei48ay-ge
            source_type: api_record
            title: 中国历代人物传记资料库：王應曾（CBDB 304276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304276&o=json
            external_identifier: CBDB:304276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zj3UcaT47HKJJeLDFk6H7j
        status: active
        display_name: 王應鍾
        merged_into_person_id: null
---

# 王應曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應曾 | accepted |
| bio.summary | 王應曾，明人物。嘉靖二十年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 304276） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLXHmJpMp4wz4g5naM2r4z | 王密 | accepted |
| other | p_zj3UcaT47HKJJeLDFk6H7j | 王應鍾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應曾（CBDB 304276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304276&o=json)
