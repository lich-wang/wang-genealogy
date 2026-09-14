---
schema: wang-person/v1
id: p_BefirQ5qAsYuyzL4CSTwoe
status: active
merged_into: null
display_name: 王誡
cbdb_id: 313485
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UX5qaabTD4QEZd34Zcx4dP
        subject_person_id: p_BefirQ5qAsYuyzL4CSTwoe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誡，明人物。嘉靖二十九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 313485）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NO-Jm7XevKr08tnwAu2ht_
          claim_id: c_UX5qaabTD4QEZd34Zcx4dP
          source_id: s_VCrxPiMKCVP8kymEKDqjBW
          stance: supports
          locator: CBDB:313485
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VCrxPiMKCVP8kymEKDqjBW
            source_type: api_record
            title: 中国历代人物传记资料库：王誡（CBDB 313485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json
            external_identifier: CBDB:313485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wfqAJ1h996xdBj8uCEeMGM
        subject_person_id: p_BefirQ5qAsYuyzL4CSTwoe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9Hcvp3Z44PisAtAG18TL7X
          claim_id: c_wfqAJ1h996xdBj8uCEeMGM
          source_id: s_VCrxPiMKCVP8kymEKDqjBW
          stance: supports
          locator: CBDB:313485
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WYp-0scRYylh--DBYwvea5
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BefirQ5qAsYuyzL4CSTwoe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl_qAZc-28tG4bqNEO6ovJ
          claim_id: c_WYp-0scRYylh--DBYwvea5
          source_id: s_XaLqZ22xcGRAGSza010d4G
          stance: supports
          locator: CBDB：兄弟 王諍（126801）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王誡 与 王諍 为同胞（CBDB 记「弟」），王諍 之父／母即 王誡 之父／母。
          source:
            id: s_XaLqZ22xcGRAGSza010d4G
            source_type: api_record
            title: 中国历代人物传记资料库：王誡（CBDB 313485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json
            external_identifier: CBDB:313485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bAZKMRH7j8tU7qjcKDr2aW
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BE3nyJ7DcN7WeGuFueU0f_
        subject_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BefirQ5qAsYuyzL4CSTwoe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UdkW5XOtGeE1gG4nsYOdzR
          claim_id: c_BE3nyJ7DcN7WeGuFueU0f_
          source_id: s_XaLqZ22xcGRAGSza010d4G
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126801 王諍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XaLqZ22xcGRAGSza010d4G
            source_type: api_record
            title: 中国历代人物传记资料库：王誡（CBDB 313485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json
            external_identifier: CBDB:313485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GKmc7UBMnwgzBKbep1LTG
        status: active
        display_name: 王諍
        merged_into_person_id: null
---

# 王誡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王誡，明人物。嘉靖二十九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 313485） | accepted |
| name.primary | 王誡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bAZKMRH7j8tU7qjcKDr2aW | 王鍊 | accepted |
| other | p_5GKmc7UBMnwgzBKbep1LTG | 王諍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誡（CBDB 313485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json)
