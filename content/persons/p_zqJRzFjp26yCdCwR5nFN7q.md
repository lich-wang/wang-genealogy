---
schema: wang-person/v1
id: p_zqJRzFjp26yCdCwR5nFN7q
status: active
merged_into: null
display_name: 王淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d21C9B3YtJR9Ljp57Dybyv
        subject_person_id: p_zqJRzFjp26yCdCwR5nFN7q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d1TWNgYXQRMARoCGKoJ7gK
          claim_id: c_d21C9B3YtJR9Ljp57Dybyv
          source_id: s_5Gaa32eD4DuNcPXwvqcmeS
          stance: supports
          locator: CBDB:687473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687473）
          source: &a1
            id: s_5Gaa32eD4DuNcPXwvqcmeS
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 687473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687473&o=json
            external_identifier: CBDB:687473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rBUAqkCNeLfpLZW7g2b91R
        subject_person_id: p_zqJRzFjp26yCdCwR5nFN7q
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
        - id: cs_SeU2Dq1w7nzBP2MELyrP31
          claim_id: c_rBUAqkCNeLfpLZW7g2b91R
          source_id: s_5Gaa32eD4DuNcPXwvqcmeS
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

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 687473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687473&o=json)
