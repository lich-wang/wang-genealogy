---
schema: wang-person/v1
id: p_5mmn2jQN71ZJeVJSMJ3Fbq
status: active
merged_into: null
display_name: 王勵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g8u5TGSH49Ugzi6DbzBg46
        subject_person_id: p_5mmn2jQN71ZJeVJSMJ3Fbq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QWmq9hNZr4833seZXHkCrz
          claim_id: c_g8u5TGSH49Ugzi6DbzBg46
          source_id: s_d5jM3i2VNW3Aq2DAL4rhmG
          stance: supports
          locator: CBDB:45807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45807）
          source: &a1
            id: s_d5jM3i2VNW3Aq2DAL4rhmG
            source_type: api_record
            title: 中国历代人物传记资料库：王勵（CBDB 45807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45807&o=json
            external_identifier: CBDB:45807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Eau2FnHkho82scV69dVaTt
        subject_person_id: p_5mmn2jQN71ZJeVJSMJ3Fbq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCxdDuFdjxKBxfgiD6LmdK
          claim_id: c_Eau2FnHkho82scV69dVaTt
          source_id: s_d5jM3i2VNW3Aq2DAL4rhmG
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

# 王勵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勵 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勵（CBDB 45807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45807&o=json)
