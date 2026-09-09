---
schema: wang-person/v1
id: p_FwQuAhZunE4Mc5LbRAnCjc
status: active
merged_into: null
display_name: 王淪選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qyrGaCBJ67vo8vwN4vz88K
        subject_person_id: p_FwQuAhZunE4Mc5LbRAnCjc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淪選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Bdwve9w2dP6cbbCnz3yFF
          claim_id: c_qyrGaCBJ67vo8vwN4vz88K
          source_id: s_n2cy4GUdyc7fWxCK3XZFrJ
          stance: supports
          locator: CBDB:639120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639120）
          source: &a1
            id: s_n2cy4GUdyc7fWxCK3XZFrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王淪選（CBDB 639120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639120&o=json
            external_identifier: CBDB:639120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K9LXDLwfY2MkxoGLKJ2EqC
        subject_person_id: p_FwQuAhZunE4Mc5LbRAnCjc
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
        - id: cs_LEnup2jJSxZFZr1Q4eyDWj
          claim_id: c_K9LXDLwfY2MkxoGLKJ2EqC
          source_id: s_n2cy4GUdyc7fWxCK3XZFrJ
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

# 王淪選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淪選 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淪選（CBDB 639120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639120&o=json)
