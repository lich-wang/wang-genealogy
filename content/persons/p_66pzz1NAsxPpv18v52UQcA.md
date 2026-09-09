---
schema: wang-person/v1
id: p_66pzz1NAsxPpv18v52UQcA
status: active
merged_into: null
display_name: 王準
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FGsEdC48J27BjrtCSY1hZG
        subject_person_id: p_66pzz1NAsxPpv18v52UQcA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王準
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_riQ1k6BFgCWKHxhu4MqguR
          claim_id: c_FGsEdC48J27BjrtCSY1hZG
          source_id: s_8NfsHz7r28ef2FZC77bKvQ
          stance: supports
          locator: CBDB:512980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（512980）
          source: &a1
            id: s_8NfsHz7r28ef2FZC77bKvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王準（CBDB 512980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512980&o=json
            external_identifier: CBDB:512980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ispW5daVUaqbTs1vqpMSyC
        subject_person_id: p_66pzz1NAsxPpv18v52UQcA
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
        - id: cs_Lsoq1quRoFdJiDKxUQiTy1
          claim_id: c_ispW5daVUaqbTs1vqpMSyC
          source_id: s_8NfsHz7r28ef2FZC77bKvQ
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

# 王準

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王準 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王準（CBDB 512980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512980&o=json)
