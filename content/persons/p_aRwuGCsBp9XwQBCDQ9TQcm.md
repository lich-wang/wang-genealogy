---
schema: wang-person/v1
id: p_aRwuGCsBp9XwQBCDQ9TQcm
status: active
merged_into: null
display_name: 王繕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NzAoyTcbpehuabdLt1HCJD
        subject_person_id: p_aRwuGCsBp9XwQBCDQ9TQcm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ST5PUpC5E9kH95fv7o1QS
          claim_id: c_NzAoyTcbpehuabdLt1HCJD
          source_id: s_VpsujmA8zjW2MpEQeDR2q1
          stance: supports
          locator: CBDB:327959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327959）
          source: &a1
            id: s_VpsujmA8zjW2MpEQeDR2q1
            source_type: api_record
            title: 中国历代人物传记资料库：王繕（CBDB 327959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327959&o=json
            external_identifier: CBDB:327959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvaYDyLuJ6pQNpBGL34HXv
        subject_person_id: p_aRwuGCsBp9XwQBCDQ9TQcm
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
        - id: cs_DfRHWEicupXM7gpRx6z2XP
          claim_id: c_zvaYDyLuJ6pQNpBGL34HXv
          source_id: s_VpsujmA8zjW2MpEQeDR2q1
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

# 王繕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繕 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繕（CBDB 327959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327959&o=json)
