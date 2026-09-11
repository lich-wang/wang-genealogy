---
schema: wang-person/v1
id: p_msRgq9P3unXu77zTaP8nSx
status: active
merged_into: null
display_name: 王從治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbgk23157M3FHmWVLR3sFV
        subject_person_id: p_msRgq9P3unXu77zTaP8nSx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pW28GWEK1yM3E2DsrqaPt4
          claim_id: c_hbgk23157M3FHmWVLR3sFV
          source_id: s_3asGnD4m478Pb3jzS1QuE2
          stance: supports
          locator: CBDB:637657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637657）
          source: &a1
            id: s_3asGnD4m478Pb3jzS1QuE2
            source_type: api_record
            title: 中国历代人物传记资料库：王從治（CBDB 637657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637657&o=json
            external_identifier: CBDB:637657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bq8Q3HDmhayacfcZUnLy2H
        subject_person_id: p_msRgq9P3unXu77zTaP8nSx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從治，清人物。籍贯望江，曾任典史。（中国历代人物传记资料库 CBDB 637657）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Td0mUsYN76rcmp4d0WHSi
          claim_id: c_bq8Q3HDmhayacfcZUnLy2H
          source_id: s_3asGnD4m478Pb3jzS1QuE2
          stance: supports
          locator: CBDB:637657
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

# 王從治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從治 | accepted |
| bio.summary | 王從治，清人物。籍贯望江，曾任典史。（中国历代人物传记资料库 CBDB 637657） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從治（CBDB 637657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637657&o=json)
