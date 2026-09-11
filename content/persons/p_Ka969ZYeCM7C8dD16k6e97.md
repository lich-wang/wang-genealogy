---
schema: wang-person/v1
id: p_Ka969ZYeCM7C8dD16k6e97
status: active
merged_into: null
display_name: 王裕承
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cc34z7sFB6rkUCGhCDm11v
        subject_person_id: p_Ka969ZYeCM7C8dD16k6e97
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rq1vgUSDCsZ7f3u3CZQWH5
          claim_id: c_Cc34z7sFB6rkUCGhCDm11v
          source_id: s_79XqZw6aQiJ42jqmz51VvD
          stance: supports
          locator: CBDB:640214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640214）
          source: &a1
            id: s_79XqZw6aQiJ42jqmz51VvD
            source_type: api_record
            title: 中国历代人物传记资料库：王裕承（CBDB 640214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640214&o=json
            external_identifier: CBDB:640214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y6M5Bfq3cEUMBh4wfaFziq
        subject_person_id: p_Ka969ZYeCM7C8dD16k6e97
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕承，清人物。籍贯大興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4foqWYx_EDTymmtZ0omKWm
          claim_id: c_Y6M5Bfq3cEUMBh4wfaFziq
          source_id: s_79XqZw6aQiJ42jqmz51VvD
          stance: supports
          locator: CBDB:640214
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

# 王裕承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕承 | accepted |
| bio.summary | 王裕承，清人物。籍贯大興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕承（CBDB 640214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640214&o=json)
