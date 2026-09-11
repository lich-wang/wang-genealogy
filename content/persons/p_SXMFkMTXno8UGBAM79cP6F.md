---
schema: wang-person/v1
id: p_SXMFkMTXno8UGBAM79cP6F
status: active
merged_into: null
display_name: 王暐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3X4q3jkr65SJVhsL6QGtS1
        subject_person_id: p_SXMFkMTXno8UGBAM79cP6F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WduoiBGpU6amaCe6QX6kLc
          claim_id: c_3X4q3jkr65SJVhsL6QGtS1
          source_id: s_uLZsD8g4itkBFZYdvudojM
          stance: supports
          locator: CBDB:266969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266969）
          source: &a1
            id: s_uLZsD8g4itkBFZYdvudojM
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 266969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266969&o=json
            external_identifier: CBDB:266969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xccacANPhEePMyxA13wcMg
        subject_person_id: p_SXMFkMTXno8UGBAM79cP6F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L9apr-TYKxpSA3FuJkFbq8
          claim_id: c_xccacANPhEePMyxA13wcMg
          source_id: s_uLZsD8g4itkBFZYdvudojM
          stance: supports
          locator: CBDB:266969
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

# 王暐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暐 | accepted |
| bio.summary | 王暐，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暐（CBDB 266969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266969&o=json)
