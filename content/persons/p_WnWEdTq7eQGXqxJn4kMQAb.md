---
schema: wang-person/v1
id: p_WnWEdTq7eQGXqxJn4kMQAb
status: active
merged_into: null
display_name: 王國表
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymZBik4A8czxzkqHxB8oBd
        subject_person_id: p_WnWEdTq7eQGXqxJn4kMQAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BtBxSPh5F6GJSHCTkDBGjj
          claim_id: c_ymZBik4A8czxzkqHxB8oBd
          source_id: s_iMwRsp8JnnSzAi8qXu2FbQ
          stance: supports
          locator: CBDB:636672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636672）
          source: &a1
            id: s_iMwRsp8JnnSzAi8qXu2FbQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國表（CBDB 636672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636672&o=json
            external_identifier: CBDB:636672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o96w8nDtkUipMQ7yPXYUbG
        subject_person_id: p_WnWEdTq7eQGXqxJn4kMQAb
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
        - id: cs_FZMDW9B12hAKShrUJ8GWwZ
          claim_id: c_o96w8nDtkUipMQ7yPXYUbG
          source_id: s_iMwRsp8JnnSzAi8qXu2FbQ
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

# 王國表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國表 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國表（CBDB 636672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636672&o=json)
