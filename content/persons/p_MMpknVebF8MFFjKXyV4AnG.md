---
schema: wang-person/v1
id: p_MMpknVebF8MFFjKXyV4AnG
status: active
merged_into: null
display_name: 王之弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KzXM66CagA2DWCgQCnKzTF
        subject_person_id: p_MMpknVebF8MFFjKXyV4AnG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KL1r2JfxZe8se4XCEDSuxZ
          claim_id: c_KzXM66CagA2DWCgQCnKzTF
          source_id: s_GvDQy8cSsqwckh7XW9q4Ct
          stance: supports
          locator: CBDB:455365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455365）
          source: &a1
            id: s_GvDQy8cSsqwckh7XW9q4Ct
            source_type: api_record
            title: 中国历代人物传记资料库：王之弼（CBDB 455365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455365&o=json
            external_identifier: CBDB:455365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o1yu2HMbR9kAZH2KMNc6KS
        subject_person_id: p_MMpknVebF8MFFjKXyV4AnG
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
        - id: cs_xUAZPxnPPvGV1fXsLULyK5
          claim_id: c_o1yu2HMbR9kAZH2KMNc6KS
          source_id: s_GvDQy8cSsqwckh7XW9q4Ct
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

# 王之弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之弼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之弼（CBDB 455365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455365&o=json)
