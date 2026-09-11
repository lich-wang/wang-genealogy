---
schema: wang-person/v1
id: p_U6DK7UQQ48V1DWky3WG8nS
status: active
merged_into: null
display_name: 王注
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCwhpKqNXsno793HE6SdvG
        subject_person_id: p_U6DK7UQQ48V1DWky3WG8nS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uhsm8rEs5XZvouJ7fxELej
          claim_id: c_qCwhpKqNXsno793HE6SdvG
          source_id: s_GDxNNoBNbQC1pZUTdkC1pL
          stance: supports
          locator: CBDB:10694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10694）
          source: &a1
            id: s_GDxNNoBNbQC1pZUTdkC1pL
            source_type: api_record
            title: 中国历代人物传记资料库：王注（CBDB 10694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10694&o=json
            external_identifier: CBDB:10694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z9PiHWF46da7QMhKUeYKvk
        subject_person_id: p_U6DK7UQQ48V1DWky3WG8nS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王注，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 10694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GFPoRECUgwWvoqIkoSQwHC
          claim_id: c_z9PiHWF46da7QMhKUeYKvk
          source_id: s_GDxNNoBNbQC1pZUTdkC1pL
          stance: supports
          locator: CBDB:10694
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

# 王注

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王注 | accepted |
| bio.summary | 王注，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 10694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王注（CBDB 10694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10694&o=json)
