---
schema: wang-person/v1
id: p_p144iyd79L6a9ZEQty8wWf
status: active
merged_into: null
display_name: 王添模
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A6Eg3EcV5AfpAvHqDSJvLr
        subject_person_id: p_p144iyd79L6a9ZEQty8wWf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zCrPVCQ9yFcGiGCNPLri1v
          claim_id: c_A6Eg3EcV5AfpAvHqDSJvLr
          source_id: s_Kg1MuT1RjSXY5k99ApWDoX
          stance: supports
          locator: CBDB:639159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639159）
          source: &a1
            id: s_Kg1MuT1RjSXY5k99ApWDoX
            source_type: api_record
            title: 中国历代人物传记资料库：王添模（CBDB 639159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639159&o=json
            external_identifier: CBDB:639159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1JDwSWmABG69wZi8MpMB6
        subject_person_id: p_p144iyd79L6a9ZEQty8wWf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添模，清人物。籍贯吳堡，曾任訓導。（中国历代人物传记资料库 CBDB 639159）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uxDAih8sNEUELdaSk6XOAW
          claim_id: c_N1JDwSWmABG69wZi8MpMB6
          source_id: s_Kg1MuT1RjSXY5k99ApWDoX
          stance: supports
          locator: CBDB:639159
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

# 王添模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王添模 | accepted |
| bio.summary | 王添模，清人物。籍贯吳堡，曾任訓導。（中国历代人物传记资料库 CBDB 639159） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王添模（CBDB 639159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639159&o=json)
