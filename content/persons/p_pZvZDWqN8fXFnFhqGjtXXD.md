---
schema: wang-person/v1
id: p_pZvZDWqN8fXFnFhqGjtXXD
status: active
merged_into: null
display_name: 王樽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5HqJWHaoLCm2ZGuojebcKZ
        subject_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BEeeX3wD8FQ9nDX1FPBqB
          claim_id: c_5HqJWHaoLCm2ZGuojebcKZ
          source_id: s_K59U82CDPsS1ttf3vA52EQ
          stance: supports
          locator: CBDB:264280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264280）
          source: &a1
            id: s_K59U82CDPsS1ttf3vA52EQ
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 264280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json
            external_identifier: CBDB:264280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Be8nEbJjVWFryYzc7kLHC9
        subject_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樽，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264280）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eZKXYQw2tKoSh-zBXLw4XL
          claim_id: c_Be8nEbJjVWFryYzc7kLHC9
          source_id: s_K59U82CDPsS1ttf3vA52EQ
          stance: supports
          locator: CBDB:264280
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

# 王樽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樽 | accepted |
| bio.summary | 王樽，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樽（CBDB 264280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json)
