---
schema: wang-person/v1
id: p_1EzGtciQSLScFhEaW9PEDN
status: active
merged_into: null
display_name: 王欽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GEhVM3BMKCJyqBTrLHTWCn
        subject_person_id: p_1EzGtciQSLScFhEaW9PEDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CgdkshkMvJNit9WXbAuFMQ
          claim_id: c_GEhVM3BMKCJyqBTrLHTWCn
          source_id: s_99MJb66gN73YD43756BuuP
          stance: supports
          locator: CBDB:289111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（289111）
          source: &a1
            id: s_99MJb66gN73YD43756BuuP
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 289111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289111&o=json
            external_identifier: CBDB:289111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HUPrmZLgNzjQzwk7eor1kr
        subject_person_id: p_1EzGtciQSLScFhEaW9PEDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。嘉靖八年進士，籍贯信陽衛。（中国历代人物传记资料库 CBDB 289111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j1tv49zSdE017WC8yLAVEe
          claim_id: c_HUPrmZLgNzjQzwk7eor1kr
          source_id: s_99MJb66gN73YD43756BuuP
          stance: supports
          locator: CBDB:289111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AkKDpJReF-TmV-mFiBTqB9
        subject_person_id: p_J6vGZQ2XeYqBCDgqSMhjF4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1EzGtciQSLScFhEaW9PEDN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7wxQp-AEgFZ4tKqRgcJNkt
          claim_id: c_AkKDpJReF-TmV-mFiBTqB9
          source_id: s_rHBKXBJi6ex2B7MHPBttM5
          stance: supports
          locator: CBDB：兄弟 王銳（202497）之父／母 王虎
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王銳 为同胞（CBDB 记「弟」），王銳 之父／母即 王欽 之父／母。
          source:
            id: s_rHBKXBJi6ex2B7MHPBttM5
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 289111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289111&o=json
            external_identifier: CBDB:289111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J6vGZQ2XeYqBCDgqSMhjF4
        status: active
        display_name: 王虎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_I2ex-No2-LKmYzNH9IeUSx
        subject_person_id: p_1EzGtciQSLScFhEaW9PEDN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giO7dMRq4MftCZncWehPT5
          claim_id: c_I2ex-No2-LKmYzNH9IeUSx
          source_id: s_rHBKXBJi6ex2B7MHPBttM5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rHBKXBJi6ex2B7MHPBttM5
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 289111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289111&o=json
            external_identifier: CBDB:289111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9uL4CzY8WtBqKSLRcVb8TP
        status: active
        display_name: 王銳
        merged_into_person_id: null
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。嘉靖八年進士，籍贯信陽衛。（中国历代人物传记资料库 CBDB 289111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J6vGZQ2XeYqBCDgqSMhjF4 | 王虎 | accepted |
| other | p_9uL4CzY8WtBqKSLRcVb8TP | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 289111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289111&o=json)
