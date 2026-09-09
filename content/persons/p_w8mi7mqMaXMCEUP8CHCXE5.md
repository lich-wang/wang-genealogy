---
schema: wang-person/v1
id: p_w8mi7mqMaXMCEUP8CHCXE5
status: active
merged_into: null
display_name: 王亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cnb7ztiE3EV2ePLdjqFEKY
        subject_person_id: p_w8mi7mqMaXMCEUP8CHCXE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tZ5ypf9yeQNksZkwXPvSHh
          claim_id: c_cnb7ztiE3EV2ePLdjqFEKY
          source_id: s_ACkiijy4xwLLe8mi5tYPPZ
          stance: supports
          locator: CBDB:223422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223422）
          source: &a1
            id: s_ACkiijy4xwLLe8mi5tYPPZ
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 223422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223422&o=json
            external_identifier: CBDB:223422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rm2QPvDR9DpYUhpJFWkbuJ
        subject_person_id: p_w8mi7mqMaXMCEUP8CHCXE5
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
        - id: cs_ttr2dvKuihg6UTQYJMBwFB
          claim_id: c_rm2QPvDR9DpYUhpJFWkbuJ
          source_id: s_ACkiijy4xwLLe8mi5tYPPZ
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

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 223422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223422&o=json)
