---
schema: wang-person/v1
id: p_PG9M1t5AnErDSW6SmXjh9m
status: active
merged_into: null
display_name: 王與義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fVs3EG42ssyjwWZYJen5bG
        subject_person_id: p_PG9M1t5AnErDSW6SmXjh9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XrLWdSN9HFbkxn2KMGcVUa
          claim_id: c_fVs3EG42ssyjwWZYJen5bG
          source_id: s_oy1R6LU5mYaSA28TRqwBQA
          stance: supports
          locator: CBDB:460090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460090）
          source: &a1
            id: s_oy1R6LU5mYaSA28TRqwBQA
            source_type: api_record
            title: 中国历代人物传记资料库：王與義（CBDB 460090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460090&o=json
            external_identifier: CBDB:460090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ctPHWPTk34pgzKN9RmSFzt
        subject_person_id: p_PG9M1t5AnErDSW6SmXjh9m
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
        - id: cs_oc4DV6D4KKJyQj1vKFZMfn
          claim_id: c_ctPHWPTk34pgzKN9RmSFzt
          source_id: s_oy1R6LU5mYaSA28TRqwBQA
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

# 王與義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與義 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與義（CBDB 460090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460090&o=json)
