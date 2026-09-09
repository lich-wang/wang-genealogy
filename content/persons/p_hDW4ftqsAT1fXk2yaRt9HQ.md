---
schema: wang-person/v1
id: p_hDW4ftqsAT1fXk2yaRt9HQ
status: active
merged_into: null
display_name: 王守清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpLPrKsB3hpSaZVYpLCKM6
        subject_person_id: p_hDW4ftqsAT1fXk2yaRt9HQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DYKur5oLCjH1UT5e7Umyzn
          claim_id: c_wpLPrKsB3hpSaZVYpLCKM6
          source_id: s_x98rLUksGbJN57zCPTYPmD
          stance: supports
          locator: CBDB:576794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576794）
          source: &a1
            id: s_x98rLUksGbJN57zCPTYPmD
            source_type: api_record
            title: 中国历代人物传记资料库：王守清（CBDB 576794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576794&o=json
            external_identifier: CBDB:576794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dBoCDz2vU6n1s6M1nFtx63
        subject_person_id: p_hDW4ftqsAT1fXk2yaRt9HQ
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
        - id: cs_u6VtxfAnEkah7rKmqNsfiX
          claim_id: c_dBoCDz2vU6n1s6M1nFtx63
          source_id: s_x98rLUksGbJN57zCPTYPmD
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

# 王守清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守清 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守清（CBDB 576794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576794&o=json)
