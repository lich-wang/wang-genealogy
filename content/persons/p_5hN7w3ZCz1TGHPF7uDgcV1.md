---
schema: wang-person/v1
id: p_5hN7w3ZCz1TGHPF7uDgcV1
status: active
merged_into: null
display_name: 王濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ocUB1L7GvA6K1jSrEZUvAq
        subject_person_id: p_5hN7w3ZCz1TGHPF7uDgcV1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GyKBNpYPHvj35xjMVhdLKL
          claim_id: c_ocUB1L7GvA6K1jSrEZUvAq
          source_id: s_bAm28pjffuLhBqyQiEso4E
          stance: supports
          locator: CBDB:385677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385677）
          source: &a1
            id: s_bAm28pjffuLhBqyQiEso4E
            source_type: api_record
            title: 中国历代人物传记资料库：王濤（CBDB 385677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385677&o=json
            external_identifier: CBDB:385677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c8WsM8ihz6UCr6ecKCA3w5
        subject_person_id: p_5hN7w3ZCz1TGHPF7uDgcV1
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
        - id: cs_RDGYrMeCHf77B3EGrZVyyE
          claim_id: c_c8WsM8ihz6UCr6ecKCA3w5
          source_id: s_bAm28pjffuLhBqyQiEso4E
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

# 王濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濤 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濤（CBDB 385677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385677&o=json)
