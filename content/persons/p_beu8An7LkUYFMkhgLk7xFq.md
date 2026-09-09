---
schema: wang-person/v1
id: p_beu8An7LkUYFMkhgLk7xFq
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SM3gzbgnSPDPJMt7xZpJfU
        subject_person_id: p_beu8An7LkUYFMkhgLk7xFq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3LZmkgaVd1URUJv5AR6FQ9
          claim_id: c_SM3gzbgnSPDPJMt7xZpJfU
          source_id: s_eUC9v2tcwb3HrjN3CzzWvQ
          stance: supports
          locator: CBDB:473581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473581）
          source: &a1
            id: s_eUC9v2tcwb3HrjN3CzzWvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 473581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473581&o=json
            external_identifier: CBDB:473581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KA3DhEh9NgUVP9x97Hb7VF
        subject_person_id: p_beu8An7LkUYFMkhgLk7xFq
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
        - id: cs_JngZtcmQxPuGeu2XVNU3VV
          claim_id: c_KA3DhEh9NgUVP9x97Hb7VF
          source_id: s_eUC9v2tcwb3HrjN3CzzWvQ
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

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 473581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473581&o=json)
