---
schema: wang-person/v1
id: p_9EtfykkjGBZy32Z4S3myxD
status: active
merged_into: null
display_name: 王錫瑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qgbPC1dQNLFxGEp1J7PDWm
        subject_person_id: p_9EtfykkjGBZy32Z4S3myxD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqRD2KSDhEZXB48cKQD11F
          claim_id: c_qgbPC1dQNLFxGEp1J7PDWm
          source_id: s_C5jiJPBeJ8r4jCEp5PBEs6
          stance: supports
          locator: CBDB:640622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640622）
          source: &a1
            id: s_C5jiJPBeJ8r4jCEp5PBEs6
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瑛（CBDB 640622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640622&o=json
            external_identifier: CBDB:640622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WvSFLM3kXzUECE7hLaHWJh
        subject_person_id: p_9EtfykkjGBZy32Z4S3myxD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瑛，清人物。籍贯天津，入仕監生，曾任郎中。（中国历代人物传记资料库 CBDB 640622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tZJtVBzSHGGpVJzMTargxi
          claim_id: c_WvSFLM3kXzUECE7hLaHWJh
          source_id: s_C5jiJPBeJ8r4jCEp5PBEs6
          stance: supports
          locator: CBDB:640622
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

# 王錫瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫瑛 | accepted |
| bio.summary | 王錫瑛，清人物。籍贯天津，入仕監生，曾任郎中。（中国历代人物传记资料库 CBDB 640622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫瑛（CBDB 640622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640622&o=json)
