---
schema: wang-person/v1
id: p_e3PeGahDNzEwV1SM65Hpjm
status: active
merged_into: null
display_name: 王恆焯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMhguLEFkkA7c7cHEyU9bD
        subject_person_id: p_e3PeGahDNzEwV1SM65Hpjm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆焯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YWj9vprE1gr5yVkUxnr4ZD
          claim_id: c_AMhguLEFkkA7c7cHEyU9bD
          source_id: s_F6j2kko9mn97USdLoQ5xFr
          stance: supports
          locator: CBDB:637827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637827）
          source: &a1
            id: s_F6j2kko9mn97USdLoQ5xFr
            source_type: api_record
            title: 中国历代人物传记资料库：王恆焯（CBDB 637827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637827&o=json
            external_identifier: CBDB:637827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SpRYGBq1jp3tCUiykifnV2
        subject_person_id: p_e3PeGahDNzEwV1SM65Hpjm
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
        - id: cs_YaPaTQN59BzkNtXMSY8xHF
          claim_id: c_SpRYGBq1jp3tCUiykifnV2
          source_id: s_F6j2kko9mn97USdLoQ5xFr
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

# 王恆焯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆焯 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恆焯（CBDB 637827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637827&o=json)
