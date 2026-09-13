---
schema: wang-person/v1
id: p_XCLa5C3r2Cp73DgJP5xw8d
status: active
merged_into: null
display_name: 王龍澤
cbdb_id: 38426
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vWF6NyAJnKsiYBzcpuMY1h
        subject_person_id: p_XCLa5C3r2Cp73DgJP5xw8d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍澤，元人物。籍贯義烏，入仕進士，曾任承事郎、監察御史、舍人院。（中国历代人物传记资料库 CBDB 38426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NCaXaUwoYCu4VKc8QjxIgX
          claim_id: c_vWF6NyAJnKsiYBzcpuMY1h
          source_id: s_AP7iQ7qrAkPJ1bEbG1GvQn
          stance: supports
          locator: CBDB:38426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AP7iQ7qrAkPJ1bEbG1GvQn
            source_type: api_record
            title: 中国历代人物传记资料库：王龍澤（CBDB 38426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38426&o=json
            external_identifier: CBDB:38426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XdvdrNR4qc9koRZye5WVB1
        subject_person_id: p_XCLa5C3r2Cp73DgJP5xw8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5LUC8BTDpsHGqLX1pniwHS
          claim_id: c_XdvdrNR4qc9koRZye5WVB1
          source_id: s_AP7iQ7qrAkPJ1bEbG1GvQn
          stance: supports
          locator: CBDB:38426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HO9hkg0JdWXlE7wuv51dx6
        subject_person_id: p_6yC5Xw8UHvw3QDARrXEDhd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XCLa5C3r2Cp73DgJP5xw8d
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dL0joohahtYKVyIa-5kN7j
          claim_id: c_HO9hkg0JdWXlE7wuv51dx6
          source_id: s_P8fgfeJcxsTzaLA7yM3fGT
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2045：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P8fgfeJcxsTzaLA7yM3fGT
            source_type: api_record
            title: 中国历代人物传记资料库：王若訥（CBDB 37891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37891&o=json
            external_identifier: CBDB:37891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yC5Xw8UHvw3QDARrXEDhd
        status: active
        display_name: 王若訥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王龍澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王龍澤，元人物。籍贯義烏，入仕進士，曾任承事郎、監察御史、舍人院。（中国历代人物传记资料库 CBDB 38426） | accepted |
| name.primary | 王龍澤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6yC5Xw8UHvw3QDARrXEDhd | 王若訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍澤（CBDB 38426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38426&o=json)
- [中国历代人物传记资料库：王若訥（CBDB 37891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37891&o=json)
