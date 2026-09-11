---
schema: wang-person/v1
id: p_CYzmoySYMPD2FrztCKwBTb
status: active
merged_into: null
display_name: 王迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1c2Ykqp7wNQnpLCgWiXTWZ
        subject_person_id: p_CYzmoySYMPD2FrztCKwBTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EzCCRR5b7KErumrPXZRLc1
          claim_id: c_1c2Ykqp7wNQnpLCgWiXTWZ
          source_id: s_E5C2KmXTL2hcK7g3dtDSDs
          stance: supports
          locator: CBDB:291084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291084）
          source: &a1
            id: s_E5C2KmXTL2hcK7g3dtDSDs
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 291084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291084&o=json
            external_identifier: CBDB:291084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wZGj565xV5L3XcohoAEqL2
        subject_person_id: p_CYzmoySYMPD2FrztCKwBTb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪，明人物。天順元年進士，籍贯固始。（中国历代人物传记资料库 CBDB 291084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P2Wqdx0IuL0Y0VTIhczrk9
          claim_id: c_wZGj565xV5L3XcohoAEqL2
          source_id: s_E5C2KmXTL2hcK7g3dtDSDs
          stance: supports
          locator: CBDB:291084
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

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | 王迪，明人物。天順元年進士，籍贯固始。（中国历代人物传记资料库 CBDB 291084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 291084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291084&o=json)
