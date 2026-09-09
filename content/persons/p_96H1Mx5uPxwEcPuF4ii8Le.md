---
schema: wang-person/v1
id: p_96H1Mx5uPxwEcPuF4ii8Le
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QZqL4Rqfd853Wh41H5vTA4
        subject_person_id: p_96H1Mx5uPxwEcPuF4ii8Le
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wd7c1bF3BwCWn1y5p9F3DQ
          claim_id: c_QZqL4Rqfd853Wh41H5vTA4
          source_id: s_64AhQZR8GHCpwLUWAhHzeS
          stance: supports
          locator: CBDB:343828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343828）
          source: &a1
            id: s_64AhQZR8GHCpwLUWAhHzeS
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 343828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343828&o=json
            external_identifier: CBDB:343828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i11huDe5e4UZAEYQt3mfEQ
        subject_person_id: p_96H1Mx5uPxwEcPuF4ii8Le
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ALSvgt3HN6kCjYQ7B8xaN
          claim_id: c_i11huDe5e4UZAEYQt3mfEQ
          source_id: s_64AhQZR8GHCpwLUWAhHzeS
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 343828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343828&o=json)
