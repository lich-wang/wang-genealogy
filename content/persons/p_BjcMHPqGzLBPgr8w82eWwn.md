---
schema: wang-person/v1
id: p_BjcMHPqGzLBPgr8w82eWwn
status: active
merged_into: null
display_name: 王匯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YBnov3EiBx3NmZAFQFfJSM
        subject_person_id: p_BjcMHPqGzLBPgr8w82eWwn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2LjUX51unTpSzCXREavfGc
          claim_id: c_YBnov3EiBx3NmZAFQFfJSM
          source_id: s_ev6v7GA8sAayr5F2c5q1uc
          stance: supports
          locator: CBDB:164035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164035）
          source: &a1
            id: s_ev6v7GA8sAayr5F2c5q1uc
            source_type: api_record
            title: 中国历代人物传记资料库：王匯（CBDB 164035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164035&o=json
            external_identifier: CBDB:164035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8uP5ki4NYKjFbA9DL5eELM
        subject_person_id: p_BjcMHPqGzLBPgr8w82eWwn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KLZD7PmKBv2HXB1QgNTxK9
          claim_id: c_8uP5ki4NYKjFbA9DL5eELM
          source_id: s_ev6v7GA8sAayr5F2c5q1uc
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

# 王匯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王匯 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王匯（CBDB 164035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164035&o=json)
