---
schema: wang-person/v1
id: p_QyrHEEZbZ7DiTEj7LLG9tQ
status: active
merged_into: null
display_name: 王芋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GkrKLa36mtAv8KzCTb2Yxi
        subject_person_id: p_QyrHEEZbZ7DiTEj7LLG9tQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9drApx8HajRb55xWNGgq4
          claim_id: c_GkrKLa36mtAv8KzCTb2Yxi
          source_id: s_AgjUZLFk4NZ7RRGjre1KFo
          stance: supports
          locator: CBDB:460043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460043）
          source: &a1
            id: s_AgjUZLFk4NZ7RRGjre1KFo
            source_type: api_record
            title: 中国历代人物传记资料库：王芋（CBDB 460043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460043&o=json
            external_identifier: CBDB:460043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gArTvCNWTcj3S2h3VtYoY6
        subject_person_id: p_QyrHEEZbZ7DiTEj7LLG9tQ
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
        - id: cs_Xk1dLDxGjfjQdfNJ34E5QL
          claim_id: c_gArTvCNWTcj3S2h3VtYoY6
          source_id: s_AgjUZLFk4NZ7RRGjre1KFo
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

# 王芋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芋（CBDB 460043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460043&o=json)
