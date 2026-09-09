---
schema: wang-person/v1
id: p_YAvQnfK4rDib7dJ3ouC7FF
status: active
merged_into: null
display_name: 王俅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6N573ZgKqL2p8wzVoMKpAu
        subject_person_id: p_YAvQnfK4rDib7dJ3ouC7FF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xq2Yj1JV6AXQGcARfRjQBA
          claim_id: c_6N573ZgKqL2p8wzVoMKpAu
          source_id: s_JosNNK9KCQ7eSWq7LgxaHK
          stance: supports
          locator: CBDB:492782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492782）
          source: &a1
            id: s_JosNNK9KCQ7eSWq7LgxaHK
            source_type: api_record
            title: 中国历代人物传记资料库：王俅（CBDB 492782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492782&o=json
            external_identifier: CBDB:492782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_16dxtCXDRwz8wb5bA2pCM2
        subject_person_id: p_YAvQnfK4rDib7dJ3ouC7FF
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
        - id: cs_GDfZ3fwZxjH4yr6CJkJyyH
          claim_id: c_16dxtCXDRwz8wb5bA2pCM2
          source_id: s_JosNNK9KCQ7eSWq7LgxaHK
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

# 王俅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俅（CBDB 492782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492782&o=json)
