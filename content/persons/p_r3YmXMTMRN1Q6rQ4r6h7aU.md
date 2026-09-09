---
schema: wang-person/v1
id: p_r3YmXMTMRN1Q6rQ4r6h7aU
status: active
merged_into: null
display_name: 王嘉言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cncMZQ14RvPG6n6RaurfEB
        subject_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGGh4ewJ5nHNVf5JiqNb8b
          claim_id: c_cncMZQ14RvPG6n6RaurfEB
          source_id: s_5fHZ2Cq7T4pczV6fUX6Sne
          stance: supports
          locator: CBDB:205198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205198）
          source: &a1
            id: s_5fHZ2Cq7T4pczV6fUX6Sne
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 205198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205198&o=json
            external_identifier: CBDB:205198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vaLw9n11aRMsyXnYEPQPta
        subject_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UCN3aHNW8bdaoeEZDf3o1C
          claim_id: c_vaLw9n11aRMsyXnYEPQPta
          source_id: s_5fHZ2Cq7T4pczV6fUX6Sne
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AwiuotZbgxwpJPyDKusHcn
        subject_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
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
        - id: cs_Ktwrte6zvfVM3SJepmoVo9
          claim_id: c_AwiuotZbgxwpJPyDKusHcn
          source_id: s_5fHZ2Cq7T4pczV6fUX6Sne
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

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 205198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205198&o=json)
