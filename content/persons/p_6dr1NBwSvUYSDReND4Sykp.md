---
schema: wang-person/v1
id: p_6dr1NBwSvUYSDReND4Sykp
status: active
merged_into: null
display_name: 王清波
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZJop5Xg7MGHJWhWPjGY5y
        subject_person_id: p_6dr1NBwSvUYSDReND4Sykp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清波
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3kF7iF9evJXz7X94cA1uf
          claim_id: c_sZJop5Xg7MGHJWhWPjGY5y
          source_id: s_Xc7G7QFZFaLJEgCBa4wfz7
          stance: supports
          locator: CBDB:639142
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639142）
          source: &a1
            id: s_Xc7G7QFZFaLJEgCBa4wfz7
            source_type: api_record
            title: 中国历代人物传记资料库：王清波（CBDB 639142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639142&o=json
            external_identifier: CBDB:639142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UnKAenZU19nZdLFseMt7Dk
        subject_person_id: p_6dr1NBwSvUYSDReND4Sykp
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
        - id: cs_XkNMRoo1ryRPy99g971tsP
          claim_id: c_UnKAenZU19nZdLFseMt7Dk
          source_id: s_Xc7G7QFZFaLJEgCBa4wfz7
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

# 王清波

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清波 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清波（CBDB 639142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639142&o=json)
