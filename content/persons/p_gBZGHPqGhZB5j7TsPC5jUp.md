---
schema: wang-person/v1
id: p_gBZGHPqGhZB5j7TsPC5jUp
status: active
merged_into: null
display_name: 王冲翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWhB4h6AaeDUrva81L5S9X
        subject_person_id: p_gBZGHPqGhZB5j7TsPC5jUp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冲翰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNJ1a1ijiMc2T7GFCjvunB
          claim_id: c_RWhB4h6AaeDUrva81L5S9X
          source_id: s_Qnv1U5ja4aEG6LX6GvfBPR
          stance: supports
          locator: CBDB:701420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701420）
          source: &a1
            id: s_Qnv1U5ja4aEG6LX6GvfBPR
            source_type: api_record
            title: 中国历代人物传记资料库：王冲翰（CBDB 701420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701420&o=json
            external_identifier: CBDB:701420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GGSWVmB2PyjrejYnF2NwYo
        subject_person_id: p_gBZGHPqGhZB5j7TsPC5jUp
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
        - id: cs_qjSuxGHAHQfAhhMPGTLzV5
          claim_id: c_GGSWVmB2PyjrejYnF2NwYo
          source_id: s_Qnv1U5ja4aEG6LX6GvfBPR
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

# 王冲翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冲翰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冲翰（CBDB 701420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701420&o=json)
