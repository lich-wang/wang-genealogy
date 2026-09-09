---
schema: wang-person/v1
id: p_zJWr41VknhCkLVJzXSzJaR
status: active
merged_into: null
display_name: 王繼藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iN4Njc4EQDMPR6Lxr4hKQv
        subject_person_id: p_zJWr41VknhCkLVJzXSzJaR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CvTjL2vL7uDdMQv87BMA11
          claim_id: c_iN4Njc4EQDMPR6Lxr4hKQv
          source_id: s_41qN7x1Z5eoVtV4MgzNuSt
          stance: supports
          locator: CBDB:54900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54900）
          source: &a1
            id: s_41qN7x1Z5eoVtV4MgzNuSt
            source_type: api_record
            title: 中国历代人物传记资料库：王繼藻（CBDB 54900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54900&o=json
            external_identifier: CBDB:54900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bmMXQ2zXgRJYMTY6CcnPxC
        subject_person_id: p_zJWr41VknhCkLVJzXSzJaR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJdBPJKmyMs6PrFG8ziZrC
          claim_id: c_bmMXQ2zXgRJYMTY6CcnPxC
          source_id: s_41qN7x1Z5eoVtV4MgzNuSt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RMJFWMLjA44Uk7g1h4a848
        subject_person_id: p_zJWr41VknhCkLVJzXSzJaR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nA244tFmPXuvd2ztp8fvrG
          claim_id: c_RMJFWMLjA44Uk7g1h4a848
          source_id: s_41qN7x1Z5eoVtV4MgzNuSt
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
        id: c_7nnC873ny9ahG3sQQnsPVn
        subject_person_id: p_zJWr41VknhCkLVJzXSzJaR
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
        - id: cs_p6FfDkBbSXn9zZinCXH5K8
          claim_id: c_7nnC873ny9ahG3sQQnsPVn
          source_id: s_41qN7x1Z5eoVtV4MgzNuSt
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

# 王繼藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼藻 | accepted |
| birth.date | 1796年 | accepted |
| death.date | 1850年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼藻（CBDB 54900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54900&o=json)
