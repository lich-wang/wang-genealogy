---
schema: wang-person/v1
id: p_9x8dgS2DMpWT4wUMNBJfce
status: active
merged_into: null
display_name: 王時用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tRYPzPnrUmbMzLp5nP1rGj
        subject_person_id: p_9x8dgS2DMpWT4wUMNBJfce
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CRkCVP58wypW3Qqx3HLnqV
          claim_id: c_tRYPzPnrUmbMzLp5nP1rGj
          source_id: s_s51gjs6SNjaMHHQgzLHYGD
          stance: supports
          locator: CBDB:327989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327989）
          source: &a1
            id: s_s51gjs6SNjaMHHQgzLHYGD
            source_type: api_record
            title: 中国历代人物传记资料库：王時用（CBDB 327989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327989&o=json
            external_identifier: CBDB:327989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iats24BhADXbYxPH2aMAu
        subject_person_id: p_9x8dgS2DMpWT4wUMNBJfce
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
        - id: cs_A32PFitwvEKNRF3VakevMa
          claim_id: c_1iats24BhADXbYxPH2aMAu
          source_id: s_s51gjs6SNjaMHHQgzLHYGD
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

# 王時用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時用 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時用（CBDB 327989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327989&o=json)
