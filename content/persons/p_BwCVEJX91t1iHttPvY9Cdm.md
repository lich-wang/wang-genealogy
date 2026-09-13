---
schema: wang-person/v1
id: p_BwCVEJX91t1iHttPvY9Cdm
status: active
merged_into: null
display_name: 王宸佶
cbdb_id: 342544
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJZxQ4mfTEvrDFYZaAX3yC
        subject_person_id: p_BwCVEJX91t1iHttPvY9Cdm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸佶，清人物。明清進士進士，籍贯新城，入仕進士。（中国历代人物传记资料库 CBDB 342544）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ni7wvmwXHxhVKaNTrCoHLU
          claim_id: c_cJZxQ4mfTEvrDFYZaAX3yC
          source_id: s_KfGceCXwcC5AqUVqZEydhD
          stance: supports
          locator: CBDB:342544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KfGceCXwcC5AqUVqZEydhD
            source_type: api_record
            title: 中国历代人物传记资料库：王宸佶（CBDB 342544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342544&o=json
            external_identifier: CBDB:342544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:12.174Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6D8C7xZAftuyFQgRJ9iYTC
        subject_person_id: p_BwCVEJX91t1iHttPvY9Cdm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZAeXPnAQm371QFR8Np796h
          claim_id: c_6D8C7xZAftuyFQgRJ9iYTC
          source_id: s_KfGceCXwcC5AqUVqZEydhD
          stance: supports
          locator: CBDB:342544
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4301-4400）｜历史性依据：CBDB 朝代 = 清
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

# 王宸佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宸佶，清人物。明清進士進士，籍贯新城，入仕進士。（中国历代人物传记资料库 CBDB 342544） | accepted |
| name.primary | 王宸佶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸佶（CBDB 342544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342544&o=json)
