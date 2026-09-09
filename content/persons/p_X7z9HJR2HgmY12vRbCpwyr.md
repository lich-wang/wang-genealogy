---
schema: wang-person/v1
id: p_X7z9HJR2HgmY12vRbCpwyr
status: active
merged_into: null
display_name: 王益之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JKE5pfjk6LExVAZx9v2fxm
        subject_person_id: p_X7z9HJR2HgmY12vRbCpwyr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9Z13oNW4sBdEBUjkRDYd3
          claim_id: c_JKE5pfjk6LExVAZx9v2fxm
          source_id: s_ePYPZyayVWmwDnDW6nyq8v
          stance: supports
          locator: CBDB:101317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101317）
          source: &a1
            id: s_ePYPZyayVWmwDnDW6nyq8v
            source_type: api_record
            title: 中国历代人物传记资料库：王益之（CBDB 101317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101317&o=json
            external_identifier: CBDB:101317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBe5z1G7Ku8WS1h4UJmuX7
        subject_person_id: p_X7z9HJR2HgmY12vRbCpwyr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Atzk2AzuAErdMV5oT2U4YQ
          claim_id: c_iBe5z1G7Ku8WS1h4UJmuX7
          source_id: s_ePYPZyayVWmwDnDW6nyq8v
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

# 王益之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益之 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益之（CBDB 101317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101317&o=json)
