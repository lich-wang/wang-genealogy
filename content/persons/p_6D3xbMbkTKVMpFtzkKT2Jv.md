---
schema: wang-person/v1
id: p_6D3xbMbkTKVMpFtzkKT2Jv
status: active
merged_into: null
display_name: 王顯緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H16JVByxTDbTNwUxbwnQYp
        subject_person_id: p_6D3xbMbkTKVMpFtzkKT2Jv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TrUtLdS7BhsWZ9WcD5A2Rb
          claim_id: c_H16JVByxTDbTNwUxbwnQYp
          source_id: s_DEFLxfKGsnzHvtwWittHmX
          stance: supports
          locator: CBDB:61793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61793）
          source: &a1
            id: s_DEFLxfKGsnzHvtwWittHmX
            source_type: api_record
            title: 中国历代人物传记资料库：王顯緒（CBDB 61793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61793&o=json
            external_identifier: CBDB:61793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ff3jr3ycX8kZN8SmK2BiQh
        subject_person_id: p_6D3xbMbkTKVMpFtzkKT2Jv
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
        - id: cs_Jwv6HpPUeGzH59kxPJBPNK
          claim_id: c_ff3jr3ycX8kZN8SmK2BiQh
          source_id: s_DEFLxfKGsnzHvtwWittHmX
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

# 王顯緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯緒（CBDB 61793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61793&o=json)
