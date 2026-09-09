---
schema: wang-person/v1
id: p_kWSA4pVK578quoZM6ya5Ji
status: active
merged_into: null
display_name: 王其宖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4MG8Xjd8SQKMGXAPr9BXY
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其宖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R1DqPkowF8vao7EfKPKRu7
          claim_id: c_H4MG8Xjd8SQKMGXAPr9BXY
          source_id: s_VJxwAXaGGds626GHJYT2EA
          stance: supports
          locator: CBDB:556806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556806）
          source: &a1
            id: s_VJxwAXaGGds626GHJYT2EA
            source_type: api_record
            title: 中国历代人物传记资料库：王其宖（CBDB 556806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json
            external_identifier: CBDB:556806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RqJzZ4nkopGMZTw2aygEM8
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
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
        - id: cs_gFLjMyAyXK58exyRLZ9ggB
          claim_id: c_RqJzZ4nkopGMZTw2aygEM8
          source_id: s_VJxwAXaGGds626GHJYT2EA
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

# 王其宖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其宖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其宖（CBDB 556806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json)
