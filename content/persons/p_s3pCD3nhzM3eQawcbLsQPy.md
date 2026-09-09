---
schema: wang-person/v1
id: p_s3pCD3nhzM3eQawcbLsQPy
status: active
merged_into: null
display_name: 王廷基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HRmZdD4CASRmCEpYvScM6z
        subject_person_id: p_s3pCD3nhzM3eQawcbLsQPy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R4vAhPdtyRkCP4XJbUFinF
          claim_id: c_HRmZdD4CASRmCEpYvScM6z
          source_id: s_WY9LeJnUWHYM7k7WGaTfEf
          stance: supports
          locator: CBDB:637488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637488）
          source: &a1
            id: s_WY9LeJnUWHYM7k7WGaTfEf
            source_type: api_record
            title: 中国历代人物传记资料库：王廷基（CBDB 637488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637488&o=json
            external_identifier: CBDB:637488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N3UfnPo615rwzdUDYikevN
        subject_person_id: p_s3pCD3nhzM3eQawcbLsQPy
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
        - id: cs_H9BUrAsLgLGHj4shyAvuga
          claim_id: c_N3UfnPo615rwzdUDYikevN
          source_id: s_WY9LeJnUWHYM7k7WGaTfEf
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

# 王廷基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷基 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷基（CBDB 637488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637488&o=json)
