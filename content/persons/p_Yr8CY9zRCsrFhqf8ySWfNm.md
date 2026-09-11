---
schema: wang-person/v1
id: p_Yr8CY9zRCsrFhqf8ySWfNm
status: active
merged_into: null
display_name: 王顯曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21z8atdqst93FMUQGTsEpX
        subject_person_id: p_Yr8CY9zRCsrFhqf8ySWfNm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ATpeF7PwhP3sta9YL5dneo
          claim_id: c_21z8atdqst93FMUQGTsEpX
          source_id: s_x5hzz5PUQg1v5Dj4gPvchi
          stance: supports
          locator: CBDB:343506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343506）
          source: &a1
            id: s_x5hzz5PUQg1v5Dj4gPvchi
            source_type: api_record
            title: 中国历代人物传记资料库：王顯曾（CBDB 343506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343506&o=json
            external_identifier: CBDB:343506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u41y8izZbiMHh2n5EyQJvk
        subject_person_id: p_Yr8CY9zRCsrFhqf8ySWfNm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯曾，清人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 343506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kfNSNpakCKZGeZ3R8GBfGb
          claim_id: c_u41y8izZbiMHh2n5EyQJvk
          source_id: s_x5hzz5PUQg1v5Dj4gPvchi
          stance: supports
          locator: CBDB:343506
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

# 王顯曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯曾 | accepted |
| bio.summary | 王顯曾，清人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 343506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯曾（CBDB 343506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343506&o=json)
