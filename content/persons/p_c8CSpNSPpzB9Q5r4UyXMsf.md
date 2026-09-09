---
schema: wang-person/v1
id: p_c8CSpNSPpzB9Q5r4UyXMsf
status: active
merged_into: null
display_name: 王瑀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AFw5T38NNn573L1iweVEa3
        subject_person_id: p_c8CSpNSPpzB9Q5r4UyXMsf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gXuQRMcK9KGcQD6J4ZK94B
          claim_id: c_AFw5T38NNn573L1iweVEa3
          source_id: s_RzQwQV4YTzGha2DgWRgbLZ
          stance: supports
          locator: CBDB:166735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166735）
          source: &a1
            id: s_RzQwQV4YTzGha2DgWRgbLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 166735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166735&o=json
            external_identifier: CBDB:166735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wMoJU7g5fH3RRhEYXKH6fU
        subject_person_id: p_c8CSpNSPpzB9Q5r4UyXMsf
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
        - id: cs_Q7b86aNcuLqHBGt37v3RLp
          claim_id: c_wMoJU7g5fH3RRhEYXKH6fU
          source_id: s_RzQwQV4YTzGha2DgWRgbLZ
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

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 166735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166735&o=json)
