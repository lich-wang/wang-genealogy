---
schema: wang-person/v1
id: p_Pf8FngMmxA6ZMXPFRU3BhG
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4jhRTUjxwXvLZY6zf28id3
        subject_person_id: p_Pf8FngMmxA6ZMXPFRU3BhG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2zyX4gikBveVMXLbK6Lo4e
          claim_id: c_4jhRTUjxwXvLZY6zf28id3
          source_id: s_NZqd5pX6Efjc1E4UHmhaPC
          stance: supports
          locator: CBDB:343574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343574）
          source: &a1
            id: s_NZqd5pX6Efjc1E4UHmhaPC
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 343574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343574&o=json
            external_identifier: CBDB:343574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ga9XkYzS12XSFNMcAWmyXU
        subject_person_id: p_Pf8FngMmxA6ZMXPFRU3BhG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，明人物。明清進士進士，籍贯南昌，入仕進士，曾任參議、僉事、刑部員外郎。（中国历代人物传记资料库 CBDB 343574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_raEhGLKu1gNw30VJP9Ww1t
          claim_id: c_Ga9XkYzS12XSFNMcAWmyXU
          source_id: s_NZqd5pX6Efjc1E4UHmhaPC
          stance: supports
          locator: CBDB:343574
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | 王臣，明人物。明清進士進士，籍贯南昌，入仕進士，曾任參議、僉事、刑部員外郎。（中国历代人物传记资料库 CBDB 343574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 343574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343574&o=json)
