---
schema: wang-person/v1
id: p_S69u6sTjJBzv3wDoQA48eo
status: active
merged_into: null
display_name: 王啟銜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MwLvsJkzCKV6Y1XSZw1YAo
        subject_person_id: p_S69u6sTjJBzv3wDoQA48eo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟銜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cq6otDDptsP3ZWMH2hrsz6
          claim_id: c_MwLvsJkzCKV6Y1XSZw1YAo
          source_id: s_D1P49u7aAzWTkqciZFD2wE
          stance: supports
          locator: CBDB:636565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636565）
          source: &a1
            id: s_D1P49u7aAzWTkqciZFD2wE
            source_type: api_record
            title: 中国历代人物传记资料库：王啟銜（CBDB 636565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636565&o=json
            external_identifier: CBDB:636565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q1bDPQwooLMLxL9B1DR7Q5
        subject_person_id: p_S69u6sTjJBzv3wDoQA48eo
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
        - id: cs_muVA8s8n41LPzcjjX71dW7
          claim_id: c_Q1bDPQwooLMLxL9B1DR7Q5
          source_id: s_D1P49u7aAzWTkqciZFD2wE
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

# 王啟銜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟銜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟銜（CBDB 636565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636565&o=json)
