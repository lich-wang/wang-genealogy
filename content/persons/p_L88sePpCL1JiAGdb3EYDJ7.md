---
schema: wang-person/v1
id: p_L88sePpCL1JiAGdb3EYDJ7
status: active
merged_into: null
display_name: 王錚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bPhSuPS5GCYX9YS5NzRBTY
        subject_person_id: p_L88sePpCL1JiAGdb3EYDJ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zLQp8qH7oCub9tJftJdXyx
          claim_id: c_bPhSuPS5GCYX9YS5NzRBTY
          source_id: s_rJbEkRa3cDUEANPndGykJh
          stance: supports
          locator: CBDB:71194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71194）
          source: &a1
            id: s_rJbEkRa3cDUEANPndGykJh
            source_type: api_record
            title: 中国历代人物传记资料库：王錚（CBDB 71194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71194&o=json
            external_identifier: CBDB:71194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9wViWV95S7CkMuVKeATuDF
        subject_person_id: p_L88sePpCL1JiAGdb3EYDJ7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1771年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2PWjW9U8vaSESBnLMW1Fqj
          claim_id: c_9wViWV95S7CkMuVKeATuDF
          source_id: s_rJbEkRa3cDUEANPndGykJh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zuD4BAGYoSxHEEnLFi15g4
        subject_person_id: p_L88sePpCL1JiAGdb3EYDJ7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1808年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJQTdUp22MNVvaRMXRzeiS
          claim_id: c_zuD4BAGYoSxHEEnLFi15g4
          source_id: s_rJbEkRa3cDUEANPndGykJh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Eh6qhNh7wUwaH4c5G4hD85
        subject_person_id: p_L88sePpCL1JiAGdb3EYDJ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錚（1771年—1808年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e29UcGjP0dk2anSHdgTM5W
          claim_id: c_Eh6qhNh7wUwaH4c5G4hD85
          source_id: s_rJbEkRa3cDUEANPndGykJh
          stance: supports
          locator: CBDB:71194
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

# 王錚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錚 | accepted |
| birth.date | 1771年 | accepted |
| death.date | 1808年 | accepted |
| bio.summary | 王錚（1771年—1808年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錚（CBDB 71194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71194&o=json)
