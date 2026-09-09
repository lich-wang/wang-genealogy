---
schema: wang-person/v1
id: p_DdSfYct9MkZetVwTK8A222
status: active
merged_into: null
display_name: 王治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JcfeQ8AN3jCQ1msoBj8Gok
        subject_person_id: p_DdSfYct9MkZetVwTK8A222
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v8iUUk6vWmjoqL5DdH9369
          claim_id: c_JcfeQ8AN3jCQ1msoBj8Gok
          source_id: s_Rr4mxJ3VsdxGqbWEK3VAcR
          stance: supports
          locator: CBDB:488396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488396）
          source: &a1
            id: s_Rr4mxJ3VsdxGqbWEK3VAcR
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 488396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488396&o=json
            external_identifier: CBDB:488396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_au9JCGULa9AwkdP24YwGkW
        subject_person_id: p_DdSfYct9MkZetVwTK8A222
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
        - id: cs_CusLHayUwKyng918BxVKYE
          claim_id: c_au9JCGULa9AwkdP24YwGkW
          source_id: s_Rr4mxJ3VsdxGqbWEK3VAcR
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

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 488396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488396&o=json)
