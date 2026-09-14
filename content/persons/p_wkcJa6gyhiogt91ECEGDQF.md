---
schema: wang-person/v1
id: p_wkcJa6gyhiogt91ECEGDQF
status: active
merged_into: null
display_name: 王濱叟
cbdb_id: 36455
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwjVwNTvBUV1ApsHNL9CMr
        subject_person_id: p_wkcJa6gyhiogt91ECEGDQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濱叟，宋人物。籍贯清平，身份为未仕而卒、未參加科舉而卒。（中国历代人物传记资料库 CBDB 36455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-5HqTNwCxwdjyBhEHJRtRM
          claim_id: c_bwjVwNTvBUV1ApsHNL9CMr
          source_id: s_3c3XPPZ7kSjRknicfRAbxq
          stance: supports
          locator: CBDB:36455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3c3XPPZ7kSjRknicfRAbxq
            source_type: api_record
            title: 中国历代人物传记资料库：王濱叟（CBDB 36455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36455&o=json
            external_identifier: CBDB:36455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CC18ogzYu1znbax4GR3zwv
        subject_person_id: p_wkcJa6gyhiogt91ECEGDQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濱叟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vpDAEEjd92HjrsTkr2M5E6
          claim_id: c_CC18ogzYu1znbax4GR3zwv
          source_id: s_3c3XPPZ7kSjRknicfRAbxq
          stance: supports
          locator: CBDB:36455
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QBCGTY3rKBMMjs3zSfuZj9
        subject_person_id: p_1KK9DvJk9t52KDW7tdEx3R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wkcJa6gyhiogt91ECEGDQF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_-a2jE0GRsmgaul52xAifBk
          claim_id: c_QBCGTY3rKBMMjs3zSfuZj9
          source_id: s_cuQ3YR7rVLe8dorbkjWxlI
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22245）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_cuQ3YR7rVLe8dorbkjWxlI
            source_type: api_record
            title: 中国历代人物传记资料库：王濱叟（CBDB 36455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36455&o=json
            external_identifier: CBDB:36455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1KK9DvJk9t52KDW7tdEx3R
        status: active
        display_name: 王荀龍
        merged_into_person_id: null
    - claim:
        id: c_RBEhCTlD6ZtsUBfy818bFF
        subject_person_id: p_U7FRJcUGG85ngsevW6Z1fD
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_wkcJa6gyhiogt91ECEGDQF
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nuHdXLemi4GYYAdNrAyZSV
          claim_id: c_RBEhCTlD6ZtsUBfy818bFF
          source_id: s_cuQ3YR7rVLe8dorbkjWxlI
          stance: supports
          locator: CBDB 亲属：母（KinPerson 5368）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_cuQ3YR7rVLe8dorbkjWxlI
            source_type: api_record
            title: 中国历代人物传记资料库：王濱叟（CBDB 36455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36455&o=json
            external_identifier: CBDB:36455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7FRJcUGG85ngsevW6Z1fD
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濱叟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王濱叟，宋人物。籍贯清平，身份为未仕而卒、未參加科舉而卒。（中国历代人物传记资料库 CBDB 36455） | accepted |
| name.primary | 王濱叟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1KK9DvJk9t52KDW7tdEx3R | 王荀龍 | accepted |
| parents | p_U7FRJcUGG85ngsevW6Z1fD | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濱叟（CBDB 36455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36455&o=json)
