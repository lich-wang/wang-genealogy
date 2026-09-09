---
schema: wang-person/v1
id: p_X2eD4Tea8gJhFeKzbcHgaF
status: active
merged_into: null
display_name: 王毓珊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQaFjbHBzh57cBjWktzC46
        subject_person_id: p_X2eD4Tea8gJhFeKzbcHgaF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓珊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AfFoT6RM77f4DhD72EXy8w
          claim_id: c_WQaFjbHBzh57cBjWktzC46
          source_id: s_YERCmphLkfJwhm1zxBNRSz
          stance: supports
          locator: CBDB:638957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638957）
          source: &a1
            id: s_YERCmphLkfJwhm1zxBNRSz
            source_type: api_record
            title: 中国历代人物传记资料库：王毓珊（CBDB 638957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638957&o=json
            external_identifier: CBDB:638957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cDtjPwnP9Gu3LUe95eYhb7
        subject_person_id: p_X2eD4Tea8gJhFeKzbcHgaF
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
        - id: cs_s6Es1DnNgCdbUFX1jyvQpp
          claim_id: c_cDtjPwnP9Gu3LUe95eYhb7
          source_id: s_YERCmphLkfJwhm1zxBNRSz
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

# 王毓珊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓珊 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓珊（CBDB 638957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638957&o=json)
