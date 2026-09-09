---
schema: wang-person/v1
id: p_v2LZpJtcovtAYzUS3iCQKL
status: active
merged_into: null
display_name: 王從政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tTGCZ1PTavKJTRMB6Lc27J
        subject_person_id: p_v2LZpJtcovtAYzUS3iCQKL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m6YVG49HrQeG2mfB8v3P9V
          claim_id: c_tTGCZ1PTavKJTRMB6Lc27J
          source_id: s_WNcRqkf36stjkz2K5BQPfo
          stance: supports
          locator: CBDB:38172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38172）
          source: &a1
            id: s_WNcRqkf36stjkz2K5BQPfo
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 38172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38172&o=json
            external_identifier: CBDB:38172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bMkwWm95SAQhL5B659Zp5E
        subject_person_id: p_v2LZpJtcovtAYzUS3iCQKL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1052年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vouHTYDmDWwA2VHbpEP67F
          claim_id: c_bMkwWm95SAQhL5B659Zp5E
          source_id: s_WNcRqkf36stjkz2K5BQPfo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6qka33by7Q3QoMDfNoCxo4
        subject_person_id: p_v2LZpJtcovtAYzUS3iCQKL
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
        - id: cs_NddTGpTLNwWE9Yq84crm28
          claim_id: c_6qka33by7Q3QoMDfNoCxo4
          source_id: s_WNcRqkf36stjkz2K5BQPfo
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

# 王從政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從政 | accepted |
| death.date | 1052年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從政（CBDB 38172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38172&o=json)
