---
schema: wang-person/v1
id: p_UBGHnQm4ZWY7CHDozUhv2E
status: active
merged_into: null
display_name: 王鄖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yZph7JUqeRtjsvHu3pNLat
        subject_person_id: p_UBGHnQm4ZWY7CHDozUhv2E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gP3YQfZFcQwy7sAQxGw4Qv
          claim_id: c_yZph7JUqeRtjsvHu3pNLat
          source_id: s_3nsqvWXQXHzYcEcNHuB7AH
          stance: supports
          locator: CBDB:251780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251780）
          source: &a1
            id: s_3nsqvWXQXHzYcEcNHuB7AH
            source_type: api_record
            title: 中国历代人物传记资料库：王鄖（CBDB 251780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251780&o=json
            external_identifier: CBDB:251780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJ5H1KFJaTfoSEv2xVsfa2
        subject_person_id: p_UBGHnQm4ZWY7CHDozUhv2E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄖，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gLDKKjRH8sJVcp2-ejKZj3
          claim_id: c_cJ5H1KFJaTfoSEv2xVsfa2
          source_id: s_3nsqvWXQXHzYcEcNHuB7AH
          stance: supports
          locator: CBDB:251780
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

# 王鄖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鄖 | accepted |
| bio.summary | 王鄖，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鄖（CBDB 251780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251780&o=json)
