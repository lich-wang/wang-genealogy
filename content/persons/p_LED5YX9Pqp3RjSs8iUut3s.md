---
schema: wang-person/v1
id: p_LED5YX9Pqp3RjSs8iUut3s
status: active
merged_into: null
display_name: 王思孝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oYegA1g3qMLkHPJ7DGfgJ5
        subject_person_id: p_LED5YX9Pqp3RjSs8iUut3s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AfP56R3n5JM4mMkWSL2wzD
          claim_id: c_oYegA1g3qMLkHPJ7DGfgJ5
          source_id: s_M8eMKryppMBKX5svrLWeKW
          stance: supports
          locator: CBDB:690602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690602）
          source: &a1
            id: s_M8eMKryppMBKX5svrLWeKW
            source_type: api_record
            title: 中国历代人物传记资料库：王思孝（CBDB 690602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690602&o=json
            external_identifier: CBDB:690602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Zhur9LipodtbssJ1pTqSCz
        subject_person_id: p_LED5YX9Pqp3RjSs8iUut3s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAoEEzdJ1rsJPUtCADdRgC
          claim_id: c_Zhur9LipodtbssJ1pTqSCz
          source_id: s_M8eMKryppMBKX5svrLWeKW
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
        id: c_1KB1HrHyiYo7wzm7hbGBx6
        subject_person_id: p_LED5YX9Pqp3RjSs8iUut3s
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1290年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cr5s9shTHX2rjRqt6UeSY4
          claim_id: c_1KB1HrHyiYo7wzm7hbGBx6
          source_id: s_M8eMKryppMBKX5svrLWeKW
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
        id: c_3zxb5cE5hHnXaFrPEzKiYq
        subject_person_id: p_LED5YX9Pqp3RjSs8iUut3s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思孝（1223年—1290年），元人物。籍贯濮陽。（中国历代人物传记资料库 CBDB 690602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ftlDCLxVjL3r4O0dZozmMd
          claim_id: c_3zxb5cE5hHnXaFrPEzKiYq
          source_id: s_M8eMKryppMBKX5svrLWeKW
          stance: supports
          locator: CBDB:690602
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

# 王思孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思孝 | accepted |
| birth.date | 1223年 | accepted |
| death.date | 1290年 | accepted |
| bio.summary | 王思孝（1223年—1290年），元人物。籍贯濮陽。（中国历代人物传记资料库 CBDB 690602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思孝（CBDB 690602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690602&o=json)
