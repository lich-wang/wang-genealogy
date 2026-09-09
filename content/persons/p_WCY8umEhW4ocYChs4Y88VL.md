---
schema: wang-person/v1
id: p_WCY8umEhW4ocYChs4Y88VL
status: active
merged_into: null
display_name: 王子彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6iaPmW1c9jULqjeHvHmZB4
        subject_person_id: p_WCY8umEhW4ocYChs4Y88VL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9XAQBC2hKh2JBxmTryCJUP
          claim_id: c_6iaPmW1c9jULqjeHvHmZB4
          source_id: s_xpXJVCZmBr1SiouRnH8R7v
          stance: supports
          locator: CBDB:636985
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636985）
          source: &a1
            id: s_xpXJVCZmBr1SiouRnH8R7v
            source_type: api_record
            title: 中国历代人物传记资料库：王子彬（CBDB 636985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636985&o=json
            external_identifier: CBDB:636985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PzH5tYggM5rWs7TEcTDZQ3
        subject_person_id: p_WCY8umEhW4ocYChs4Y88VL
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
        - id: cs_JKVNMGbmVLy8XudkQuDU4w
          claim_id: c_PzH5tYggM5rWs7TEcTDZQ3
          source_id: s_xpXJVCZmBr1SiouRnH8R7v
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

# 王子彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子彬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子彬（CBDB 636985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636985&o=json)
