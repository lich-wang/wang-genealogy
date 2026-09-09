---
schema: wang-person/v1
id: p_U3NK9uy3HWG3bWNCJcz1D7
status: active
merged_into: null
display_name: 王正湖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W3CtjPMcG2SDv9T1Nxo58Q
        subject_person_id: p_U3NK9uy3HWG3bWNCJcz1D7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正湖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g6ZitLwpN3QpVfDiS2RuYE
          claim_id: c_W3CtjPMcG2SDv9T1Nxo58Q
          source_id: s_RC94D7A4xJ5MJ3iLiLpbnz
          stance: supports
          locator: CBDB:683428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683428）
          source: &a1
            id: s_RC94D7A4xJ5MJ3iLiLpbnz
            source_type: api_record
            title: 中国历代人物传记资料库：王正湖（CBDB 683428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683428&o=json
            external_identifier: CBDB:683428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DCzADhN5LMu71RrPiC43Zp
        subject_person_id: p_U3NK9uy3HWG3bWNCJcz1D7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J29et1hpeDdvgdsie17TPc
          claim_id: c_DCzADhN5LMu71RrPiC43Zp
          source_id: s_RC94D7A4xJ5MJ3iLiLpbnz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王正湖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正湖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正湖（CBDB 683428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683428&o=json)
