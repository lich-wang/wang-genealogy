---
schema: wang-person/v1
id: p_jQQSRy2uXkJdezJQ7bH4wz
status: active
merged_into: null
display_name: 王鳳翥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QrZ6iSXg29FLyEBKH42hGy
        subject_person_id: p_jQQSRy2uXkJdezJQ7bH4wz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳翥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VBt9NHNbCpu1kF6HC3wurE
          claim_id: c_QrZ6iSXg29FLyEBKH42hGy
          source_id: s_of79tcKBjycupESEYKsg5c
          stance: supports
          locator: CBDB:314094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314094）
          source: &a1
            id: s_of79tcKBjycupESEYKsg5c
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳翥（CBDB 314094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314094&o=json
            external_identifier: CBDB:314094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8fBFKEk1LtY4GBcgb6bWK3
        subject_person_id: p_jQQSRy2uXkJdezJQ7bH4wz
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
        - id: cs_GKXpKPpLiCrJA8kRfR81xJ
          claim_id: c_8fBFKEk1LtY4GBcgb6bWK3
          source_id: s_of79tcKBjycupESEYKsg5c
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

# 王鳳翥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳翥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳翥（CBDB 314094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314094&o=json)
