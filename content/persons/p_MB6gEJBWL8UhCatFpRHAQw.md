---
schema: wang-person/v1
id: p_MB6gEJBWL8UhCatFpRHAQw
status: active
merged_into: null
display_name: 王時昱
cbdb_id: 287091
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rPvgWJPXn6uFswPtC7B6C9
        subject_person_id: p_MB6gEJBWL8UhCatFpRHAQw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時昱，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287091）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mYlSkOp9T-WMSyFjMjAKOg
          claim_id: c_rPvgWJPXn6uFswPtC7B6C9
          source_id: s_eoRECCPD3zqu3n6RxPnZAp
          stance: supports
          locator: CBDB:287091
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eoRECCPD3zqu3n6RxPnZAp
            source_type: api_record
            title: 中国历代人物传记资料库：王時昱（CBDB 287091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json
            external_identifier: CBDB:287091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2dCkyaZBr8MB7owzEiS649
        subject_person_id: p_MB6gEJBWL8UhCatFpRHAQw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g6ZWz1y2hMikr7vb6kzAzX
          claim_id: c_2dCkyaZBr8MB7owzEiS649
          source_id: s_eoRECCPD3zqu3n6RxPnZAp
          stance: supports
          locator: CBDB:287091
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hriYGfi2PJGezZ5DrJMmYS
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MB6gEJBWL8UhCatFpRHAQw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jV0_QqdefG3h00riZ2j38b
          claim_id: c_hriYGfi2PJGezZ5DrJMmYS
          source_id: s_SbqRPndsVdzoyUNVhYNUcE
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時昱 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時昱 之父／母。
          source:
            id: s_SbqRPndsVdzoyUNVhYNUcE
            source_type: api_record
            title: 中国历代人物传记资料库：王時昱（CBDB 287091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json
            external_identifier: CBDB:287091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SeUwbsi3ek9as5xjE9GYzB
        status: active
        display_name: 王敏道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Iam1XUa3ZDOzFBeMX4myNe
        subject_person_id: p_MB6gEJBWL8UhCatFpRHAQw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ciTNo3oDA-LH-zrt-HXWLB
          claim_id: c_Iam1XUa3ZDOzFBeMX4myNe
          source_id: s_SbqRPndsVdzoyUNVhYNUcE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SbqRPndsVdzoyUNVhYNUcE
            source_type: api_record
            title: 中国历代人物传记资料库：王時昱（CBDB 287091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json
            external_identifier: CBDB:287091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s2J6v6Z1BCr8cEtWSejd2v
        status: active
        display_name: 王時習
        merged_into_person_id: null
---

# 王時昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時昱，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287091） | accepted |
| name.primary | 王時昱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SeUwbsi3ek9as5xjE9GYzB | 王敏道 | accepted |
| other | p_s2J6v6Z1BCr8cEtWSejd2v | 王時習 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時昱（CBDB 287091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json)
