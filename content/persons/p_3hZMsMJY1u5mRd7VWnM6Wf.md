---
schema: wang-person/v1
id: p_3hZMsMJY1u5mRd7VWnM6Wf
status: active
merged_into: null
display_name: 王廷椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pDeno94nrZa53Gb5kShj4d
        subject_person_id: p_3hZMsMJY1u5mRd7VWnM6Wf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wJ8LQn8FXPb9oDGyJzxDdP
          claim_id: c_pDeno94nrZa53Gb5kShj4d
          source_id: s_pBrPbc5Q5bVwAton8nqW2z
          stance: supports
          locator: CBDB:637513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637513）
          source: &a1
            id: s_pBrPbc5Q5bVwAton8nqW2z
            source_type: api_record
            title: 中国历代人物传记资料库：王廷椿（CBDB 637513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637513&o=json
            external_identifier: CBDB:637513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KxQNRarfhV8yiZrPQQKNk2
        subject_person_id: p_3hZMsMJY1u5mRd7VWnM6Wf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷椿，清人物。籍贯大興，曾任主事。（中国历代人物传记资料库 CBDB 637513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EpVLcze0-ywVvdzrFHAASL
          claim_id: c_KxQNRarfhV8yiZrPQQKNk2
          source_id: s_pBrPbc5Q5bVwAton8nqW2z
          stance: supports
          locator: CBDB:637513
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

# 王廷椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷椿 | accepted |
| bio.summary | 王廷椿，清人物。籍贯大興，曾任主事。（中国历代人物传记资料库 CBDB 637513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷椿（CBDB 637513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637513&o=json)
