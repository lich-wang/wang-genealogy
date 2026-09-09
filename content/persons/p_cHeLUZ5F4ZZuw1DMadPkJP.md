---
schema: wang-person/v1
id: p_cHeLUZ5F4ZZuw1DMadPkJP
status: active
merged_into: null
display_name: 王筠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PtfteDkxqjtDQ51Ywc8i9N
        subject_person_id: p_cHeLUZ5F4ZZuw1DMadPkJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ANmk61paPaNBvaWHobK8V9
          claim_id: c_PtfteDkxqjtDQ51Ywc8i9N
          source_id: s_JnTpeYDqe8753K7gRs4NAh
          stance: supports
          locator: CBDB:441144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（441144）
          source: &a1
            id: s_JnTpeYDqe8753K7gRs4NAh
            source_type: api_record
            title: 中国历代人物传记资料库：王筠（CBDB 441144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441144&o=json
            external_identifier: CBDB:441144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DaiX4xYqSjhL7dDG3QbLL7
        subject_person_id: p_cHeLUZ5F4ZZuw1DMadPkJP
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
        - id: cs_1Cq8pZMM5A4UfTWaheNr5h
          claim_id: c_DaiX4xYqSjhL7dDG3QbLL7
          source_id: s_JnTpeYDqe8753K7gRs4NAh
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

# 王筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筠（CBDB 441144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441144&o=json)
