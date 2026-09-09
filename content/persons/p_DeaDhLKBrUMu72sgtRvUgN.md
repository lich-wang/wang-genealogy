---
schema: wang-person/v1
id: p_DeaDhLKBrUMu72sgtRvUgN
status: active
merged_into: null
display_name: 王槤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1HSW6q2FG9e5ebRJMPCiAZ
        subject_person_id: p_DeaDhLKBrUMu72sgtRvUgN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LRjgVBJxj9RJ82z4FxU3Ax
          claim_id: c_1HSW6q2FG9e5ebRJMPCiAZ
          source_id: s_JKNsTXXHMEgwF9D4nhGtpg
          stance: supports
          locator: CBDB:638821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638821）
          source: &a1
            id: s_JKNsTXXHMEgwF9D4nhGtpg
            source_type: api_record
            title: 中国历代人物传记资料库：王槤（CBDB 638821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638821&o=json
            external_identifier: CBDB:638821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHgpa2LTTdMPqt2xmjXBaK
        subject_person_id: p_DeaDhLKBrUMu72sgtRvUgN
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
        - id: cs_g9WGB1doxEsWJDE5xBgBAa
          claim_id: c_zHgpa2LTTdMPqt2xmjXBaK
          source_id: s_JKNsTXXHMEgwF9D4nhGtpg
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

# 王槤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槤（CBDB 638821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638821&o=json)
