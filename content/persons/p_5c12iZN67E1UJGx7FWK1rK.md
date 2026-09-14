---
schema: wang-person/v1
id: p_5c12iZN67E1UJGx7FWK1rK
status: active
merged_into: null
display_name: 王介賢
cbdb_id: 292745
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ws8eEgBcynuW6ZdDhvJPEv
        subject_person_id: p_5c12iZN67E1UJGx7FWK1rK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1apJDHjkesw_pXIM3J6qwO
          claim_id: c_Ws8eEgBcynuW6ZdDhvJPEv
          source_id: s_swHnKLC1FXfPf85bpiZYpf
          stance: supports
          locator: CBDB:292745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_swHnKLC1FXfPf85bpiZYpf
            source_type: api_record
            title: 中国历代人物传记资料库：王介賢（CBDB 292745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json
            external_identifier: CBDB:292745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AwMLuzWZQtmC9qaFUoBxZk
        subject_person_id: p_5c12iZN67E1UJGx7FWK1rK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7yuQ4vPSSoSSB5agdZHPMB
          claim_id: c_AwMLuzWZQtmC9qaFUoBxZk
          source_id: s_swHnKLC1FXfPf85bpiZYpf
          stance: supports
          locator: CBDB:292745
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1MHH4l9OijODkNEkxiVDQM
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5c12iZN67E1UJGx7FWK1rK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v7jwClmnsHI0Cyd4BcAUcC
          claim_id: c_1MHH4l9OijODkNEkxiVDQM
          source_id: s_hqrV6MMM8H7hPGEgJmImbJ
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王介賢 与 王惟賢 为同胞（CBDB 记「弟」），王惟賢 之父／母即 王介賢 之父／母。
          source:
            id: s_hqrV6MMM8H7hPGEgJmImbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王介賢（CBDB 292745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json
            external_identifier: CBDB:292745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MfVeb7fgPLZUX4FfJniEs9
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oxO9OnDbnuW6ZMQWdp3o1K
        subject_person_id: p_5c12iZN67E1UJGx7FWK1rK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1GAU48TilZtqvKv_Usk63
          claim_id: c_oxO9OnDbnuW6ZMQWdp3o1K
          source_id: s_hqrV6MMM8H7hPGEgJmImbJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hqrV6MMM8H7hPGEgJmImbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王介賢（CBDB 292745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json
            external_identifier: CBDB:292745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
---

# 王介賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王介賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292745） | accepted |
| name.primary | 王介賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfVeb7fgPLZUX4FfJniEs9 | 王錫 | accepted |
| other | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介賢（CBDB 292745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json)
