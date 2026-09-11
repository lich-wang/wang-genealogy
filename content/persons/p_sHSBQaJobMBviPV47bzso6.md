---
schema: wang-person/v1
id: p_sHSBQaJobMBviPV47bzso6
status: active
merged_into: null
display_name: 王源濬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eZHkvmC4x8ZbRwMUm6NYLQ
        subject_person_id: p_sHSBQaJobMBviPV47bzso6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KovWRWabbdWuqwwYw74AP5
          claim_id: c_eZHkvmC4x8ZbRwMUm6NYLQ
          source_id: s_Kp9y3ErmsVj6QAEJGmNjiR
          stance: supports
          locator: CBDB:639186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639186）
          source: &a1
            id: s_Kp9y3ErmsVj6QAEJGmNjiR
            source_type: api_record
            title: 中国历代人物传记资料库：王源濬（CBDB 639186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639186&o=json
            external_identifier: CBDB:639186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sArnjfdHWLs53xBc3sVyoB
        subject_person_id: p_sHSBQaJobMBviPV47bzso6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源濬，清人物。籍贯紹興府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QRqB2pHyZViL12A75phGTE
          claim_id: c_sArnjfdHWLs53xBc3sVyoB
          source_id: s_Kp9y3ErmsVj6QAEJGmNjiR
          stance: supports
          locator: CBDB:639186
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

# 王源濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源濬 | accepted |
| bio.summary | 王源濬，清人物。籍贯紹興府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源濬（CBDB 639186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639186&o=json)
