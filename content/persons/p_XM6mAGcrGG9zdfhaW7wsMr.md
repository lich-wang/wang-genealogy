---
schema: wang-person/v1
id: p_XM6mAGcrGG9zdfhaW7wsMr
status: active
merged_into: null
display_name: 王先通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d399nMjAfqsmuoscz1QY7N
        subject_person_id: p_XM6mAGcrGG9zdfhaW7wsMr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A53TJSiZMkPy5MbivNDojh
          claim_id: c_d399nMjAfqsmuoscz1QY7N
          source_id: s_8r4m9uAN2EaE9CbqeGEcGy
          stance: supports
          locator: CBDB:30379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30379）
          source: &a1
            id: s_8r4m9uAN2EaE9CbqeGEcGy
            source_type: api_record
            title: 中国历代人物传记资料库：王先通（CBDB 30379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30379&o=json
            external_identifier: CBDB:30379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A8RJLK5dccgu584fq9qtJn
        subject_person_id: p_XM6mAGcrGG9zdfhaW7wsMr
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
        - id: cs_TgL2eS9ukAyAjNne2H9B1Q
          claim_id: c_A8RJLK5dccgu584fq9qtJn
          source_id: s_8r4m9uAN2EaE9CbqeGEcGy
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

# 王先通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先通 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先通（CBDB 30379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30379&o=json)
