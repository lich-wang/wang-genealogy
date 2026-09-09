---
schema: wang-person/v1
id: p_Dwfw4GF97wZa7pMfDNsuCH
status: active
merged_into: null
display_name: 王倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cGd9DFNEWKg2RpyFYpe4jz
        subject_person_id: p_Dwfw4GF97wZa7pMfDNsuCH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLuzZEjMTWoS4LdB7kbCnW
          claim_id: c_cGd9DFNEWKg2RpyFYpe4jz
          source_id: s_vJoJKKvLJ6rQBG8d8VZMPR
          stance: supports
          locator: CBDB:494123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494123）
          source: &a1
            id: s_vJoJKKvLJ6rQBG8d8VZMPR
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 494123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494123&o=json
            external_identifier: CBDB:494123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QwFvyoocoLLAWF5jccAoPG
        subject_person_id: p_Dwfw4GF97wZa7pMfDNsuCH
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
        - id: cs_GYfPXm2jmHVZy5wfLbRzBo
          claim_id: c_QwFvyoocoLLAWF5jccAoPG
          source_id: s_vJoJKKvLJ6rQBG8d8VZMPR
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

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 494123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494123&o=json)
