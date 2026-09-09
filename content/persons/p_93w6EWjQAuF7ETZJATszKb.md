---
schema: wang-person/v1
id: p_93w6EWjQAuF7ETZJATszKb
status: active
merged_into: null
display_name: 王松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_afTwxt73JATHfZ9EC23Yx9
        subject_person_id: p_93w6EWjQAuF7ETZJATszKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9vG27Ve9M7Pm9VX2VyP6Lr
          claim_id: c_afTwxt73JATHfZ9EC23Yx9
          source_id: s_U5cd7C1difNZkyDCf69aYq
          stance: supports
          locator: CBDB:271108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271108）
          source: &a1
            id: s_U5cd7C1difNZkyDCf69aYq
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 271108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json
            external_identifier: CBDB:271108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BE7n2xAQnEbCNuWZqEgBiv
        subject_person_id: p_93w6EWjQAuF7ETZJATszKb
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
        - id: cs_4zS9UUfB78wtHEEVkNiYnb
          claim_id: c_BE7n2xAQnEbCNuWZqEgBiv
          source_id: s_U5cd7C1difNZkyDCf69aYq
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

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 271108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json)
