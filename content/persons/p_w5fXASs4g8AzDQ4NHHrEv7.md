---
schema: wang-person/v1
id: p_w5fXASs4g8AzDQ4NHHrEv7
status: active
merged_into: null
display_name: 王湧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iBuaCGSW58MtS9mrh4Ln23
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t6R3nLTmfCNSC515KkBSDN
          claim_id: c_iBuaCGSW58MtS9mrh4Ln23
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
          stance: supports
          locator: CBDB:213978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213978）
          source: &a1
            id: s_fFP76qM8mRHfLkqmZSpu9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 213978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json
            external_identifier: CBDB:213978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4qGLxEHDH8xay5bAPDt7P2
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
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
        - id: cs_AL2KN62vEANzL3CJxc3j8V
          claim_id: c_4qGLxEHDH8xay5bAPDt7P2
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
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

# 王湧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湧（CBDB 213978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json)
