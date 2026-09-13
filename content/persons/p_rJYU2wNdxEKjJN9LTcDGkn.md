---
schema: wang-person/v1
id: p_rJYU2wNdxEKjJN9LTcDGkn
status: active
merged_into: null
display_name: 王政資
cbdb_id: 342081
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q12aj2XZ86YLEs7YcQGpuv
        subject_person_id: p_rJYU2wNdxEKjJN9LTcDGkn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政資，清人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 342081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0Hq10B2kAgISV_8lBut0SN
          claim_id: c_q12aj2XZ86YLEs7YcQGpuv
          source_id: s_XCUR47CuExJRpqCEQDkff8
          stance: supports
          locator: CBDB:342081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XCUR47CuExJRpqCEQDkff8
            source_type: api_record
            title: 中国历代人物传记资料库：王政資（CBDB 342081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342081&o=json
            external_identifier: CBDB:342081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TcwbodHZ7HEmaeW16pEEzP
        subject_person_id: p_rJYU2wNdxEKjJN9LTcDGkn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政資
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LrM8Mj9MA5GULs6VXVpmuY
          claim_id: c_TcwbodHZ7HEmaeW16pEEzP
          source_id: s_XCUR47CuExJRpqCEQDkff8
          stance: supports
          locator: CBDB:342081
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 清
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

# 王政資

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王政資，清人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 342081） | accepted |
| name.primary | 王政資 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政資（CBDB 342081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342081&o=json)
