---
schema: wang-person/v1
id: p_c3MzQbobUvUAP1zn6Bv5Pf
status: active
merged_into: null
display_name: 王春澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iftUy8HgwD9hYGpbYD6Y4J
        subject_person_id: p_c3MzQbobUvUAP1zn6Bv5Pf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQrGw5BPiJke2E2YbCENYP
          claim_id: c_iftUy8HgwD9hYGpbYD6Y4J
          source_id: s_KdJc3wDVbLa9mBS3fPwLtL
          stance: supports
          locator: CBDB:638417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638417）
          source: &a1
            id: s_KdJc3wDVbLa9mBS3fPwLtL
            source_type: api_record
            title: 中国历代人物传记资料库：王春澤（CBDB 638417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638417&o=json
            external_identifier: CBDB:638417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oHhJQH2aYapGi5nb7uT7op
        subject_person_id: p_c3MzQbobUvUAP1zn6Bv5Pf
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
        - id: cs_FCgxJJFm6KgCg6HiTiurNL
          claim_id: c_oHhJQH2aYapGi5nb7uT7op
          source_id: s_KdJc3wDVbLa9mBS3fPwLtL
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

# 王春澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春澤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春澤（CBDB 638417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638417&o=json)
