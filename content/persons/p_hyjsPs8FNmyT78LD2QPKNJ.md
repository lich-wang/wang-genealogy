---
schema: wang-person/v1
id: p_hyjsPs8FNmyT78LD2QPKNJ
status: active
merged_into: null
display_name: 王正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8zv8NhyjCh2s7Jmrcf9xu
        subject_person_id: p_hyjsPs8FNmyT78LD2QPKNJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sEf3kPpv3Tj3W7arpoX1y8
          claim_id: c_q8zv8NhyjCh2s7Jmrcf9xu
          source_id: s_NAtnCV7jV3BMGNvwMJVNVd
          stance: supports
          locator: CBDB:687798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687798）
          source: &a1
            id: s_NAtnCV7jV3BMGNvwMJVNVd
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 687798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687798&o=json
            external_identifier: CBDB:687798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LR4NE4WCPXChj95KGXKec
        subject_person_id: p_hyjsPs8FNmyT78LD2QPKNJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GdXXEKgvkiiEQ8qAbsnREN
          claim_id: c_8LR4NE4WCPXChj95KGXKec
          source_id: s_NAtnCV7jV3BMGNvwMJVNVd
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

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正（CBDB 687798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687798&o=json)
