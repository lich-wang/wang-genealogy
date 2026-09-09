---
schema: wang-person/v1
id: p_qzRDrqjW6BFLYhMP3xVCXP
status: active
merged_into: null
display_name: 王尙志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ADYTN1eGFs1AHyXpsUXvy
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尙志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1wj3fXcKLs8Zxz7H8mWkB
          claim_id: c_3ADYTN1eGFs1AHyXpsUXvy
          source_id: s_f8uU5G76fB3RTPBmQBH199
          stance: supports
          locator: CBDB:694288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694288）
          source: &a1
            id: s_f8uU5G76fB3RTPBmQBH199
            source_type: api_record
            title: 中国历代人物传记资料库：王尙志（CBDB 694288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694288&o=json
            external_identifier: CBDB:694288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDS6Uas45eS2rZBXL17uv3
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
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
        - id: cs_H4M1PCsMNK9GrL1jDFgKHQ
          claim_id: c_GDS6Uas45eS2rZBXL17uv3
          source_id: s_f8uU5G76fB3RTPBmQBH199
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

# 王尙志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尙志 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尙志（CBDB 694288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694288&o=json)
