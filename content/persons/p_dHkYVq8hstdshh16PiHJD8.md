---
schema: wang-person/v1
id: p_dHkYVq8hstdshh16PiHJD8
status: active
merged_into: null
display_name: 王獻蓋
cbdb_id: 293687
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fd8eP4L9ujp6e3cEKtYskH
        subject_person_id: p_dHkYVq8hstdshh16PiHJD8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻蓋，明人物。嘉靖十一年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 293687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wuFddBWSWeae5ahey8xja7
          claim_id: c_fd8eP4L9ujp6e3cEKtYskH
          source_id: s_mEUmkDvgwz4AsRPQNYXm62
          stance: supports
          locator: CBDB:293687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mEUmkDvgwz4AsRPQNYXm62
            source_type: api_record
            title: 中国历代人物传记资料库：王獻蓋（CBDB 293687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293687&o=json
            external_identifier: CBDB:293687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3R7J7j1hASqGMVYsNCvZ4i
        subject_person_id: p_dHkYVq8hstdshh16PiHJD8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻蓋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_u4nLcoM38TUnxf8L4HuE7T
          claim_id: c_3R7J7j1hASqGMVYsNCvZ4i
          source_id: s_mEUmkDvgwz4AsRPQNYXm62
          stance: supports
          locator: CBDB:293687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6lEEd327Q5XSlVQ27hUtnH
        subject_person_id: p_ydgJ4dzTCX4s92aDhwsv4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHkYVq8hstdshh16PiHJD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__d1WTPbu5yyohcc7p6mUsF
          claim_id: c_6lEEd327Q5XSlVQ27hUtnH
          source_id: s_6WRT5W184s2omcH-AmI8LI
          stance: supports
          locator: CBDB：兄弟 王獻芝（202753）之父／母 王寵
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻蓋 与 王獻芝 为同胞（CBDB 记「兄」），王獻芝 之父／母即 王獻蓋 之父／母。
          source:
            id: s_6WRT5W184s2omcH-AmI8LI
            source_type: api_record
            title: 中国历代人物传记资料库：王獻蓋（CBDB 293687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293687&o=json
            external_identifier: CBDB:293687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ydgJ4dzTCX4s92aDhwsv4k
        status: active
        display_name: 王寵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cWrp9R62uOOnDkzOLdSsrP
        subject_person_id: p_TBBj4gCo8ENonMptcoHt4r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHkYVq8hstdshh16PiHJD8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8hzm4kbhmUHMw2c-MFtTI
          claim_id: c_cWrp9R62uOOnDkzOLdSsrP
          source_id: s_6WRT5W184s2omcH-AmI8LI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202753 王獻芝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6WRT5W184s2omcH-AmI8LI
            source_type: api_record
            title: 中国历代人物传记资料库：王獻蓋（CBDB 293687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293687&o=json
            external_identifier: CBDB:293687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBBj4gCo8ENonMptcoHt4r
        status: active
        display_name: 王獻芝
        merged_into_person_id: null
---

# 王獻蓋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獻蓋，明人物。嘉靖十一年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 293687） | accepted |
| name.primary | 王獻蓋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ydgJ4dzTCX4s92aDhwsv4k | 王寵 | accepted |
| other | p_TBBj4gCo8ENonMptcoHt4r | 王獻芝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻蓋（CBDB 293687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293687&o=json)
