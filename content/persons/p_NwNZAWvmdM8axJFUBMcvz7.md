---
schema: wang-person/v1
id: p_NwNZAWvmdM8axJFUBMcvz7
status: active
merged_into: null
display_name: 王禛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DwD1oFXQr8JaGF58jDK8DM
        subject_person_id: p_NwNZAWvmdM8axJFUBMcvz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jF4SVdjzfWErRpDPDfYdFQ
          claim_id: c_DwD1oFXQr8JaGF58jDK8DM
          source_id: s_zxLpfeaL4g76QjHWDNcdDu
          stance: supports
          locator: CBDB:508193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508193）
          source: &a1
            id: s_zxLpfeaL4g76QjHWDNcdDu
            source_type: api_record
            title: 中国历代人物传记资料库：王禛（CBDB 508193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508193&o=json
            external_identifier: CBDB:508193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WDSvmaFNwpKRU6ygKTKMLs
        subject_person_id: p_NwNZAWvmdM8axJFUBMcvz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禛，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 508193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YcoV8Zy1Gd2UahvHo_3_Ti
          claim_id: c_WDSvmaFNwpKRU6ygKTKMLs
          source_id: s_zxLpfeaL4g76QjHWDNcdDu
          stance: supports
          locator: CBDB:508193
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

# 王禛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禛 | accepted |
| bio.summary | 王禛，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 508193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禛（CBDB 508193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508193&o=json)
