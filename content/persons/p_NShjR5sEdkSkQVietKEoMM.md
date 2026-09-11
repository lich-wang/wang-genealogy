---
schema: wang-person/v1
id: p_NShjR5sEdkSkQVietKEoMM
status: active
merged_into: null
display_name: 王埏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_72389PnfdukteBxT9oXAFt
        subject_person_id: p_NShjR5sEdkSkQVietKEoMM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c9WhRZ4tz7HVec6ko4MbfB
          claim_id: c_72389PnfdukteBxT9oXAFt
          source_id: s_4h5GYqxT77n27PDdWBj5zJ
          stance: supports
          locator: CBDB:686927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686927）
          source: &a1
            id: s_4h5GYqxT77n27PDdWBj5zJ
            source_type: api_record
            title: 中国历代人物传记资料库：王埏（CBDB 686927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686927&o=json
            external_identifier: CBDB:686927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HqeQ2zP9y4r4zEnPXnG6MN
        subject_person_id: p_NShjR5sEdkSkQVietKEoMM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埏，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 686927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V0MqCp2Wo0XcID2uH4zENO
          claim_id: c_HqeQ2zP9y4r4zEnPXnG6MN
          source_id: s_4h5GYqxT77n27PDdWBj5zJ
          stance: supports
          locator: CBDB:686927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王埏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埏 | accepted |
| bio.summary | 王埏，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 686927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埏（CBDB 686927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686927&o=json)
