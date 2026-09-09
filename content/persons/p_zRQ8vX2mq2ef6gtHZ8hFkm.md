---
schema: wang-person/v1
id: p_zRQ8vX2mq2ef6gtHZ8hFkm
status: active
merged_into: null
display_name: 王滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6g2KXp4b9QXYKPBy2eiogW
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8QkzD8CoQMbGGSKW9LRw3V
          claim_id: c_6g2KXp4b9QXYKPBy2eiogW
          source_id: s_s3xmpoTHPot9mSnQLLtQS4
          stance: supports
          locator: CBDB:314299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314299）
          source: &a1
            id: s_s3xmpoTHPot9mSnQLLtQS4
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 314299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314299&o=json
            external_identifier: CBDB:314299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_72LrVf6L8iuz9cCrhefApx
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
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
        - id: cs_5HauvYUdonvNQGzQfNNz6k
          claim_id: c_72LrVf6L8iuz9cCrhefApx
          source_id: s_s3xmpoTHPot9mSnQLLtQS4
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

# 王滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滋（CBDB 314299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314299&o=json)
