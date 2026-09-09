---
schema: wang-person/v1
id: p_8kxnK8d8D19in2LjLpZizX
status: active
merged_into: null
display_name: 王巴寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QpC7xpxZWhsb4LxEcc5gLQ
        subject_person_id: p_8kxnK8d8D19in2LjLpZizX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巴寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A5E2Mvcrrv3PsWVztTHqNb
          claim_id: c_QpC7xpxZWhsb4LxEcc5gLQ
          source_id: s_ZrQ9HpwYuRo5jKdN65UHgM
          stance: supports
          locator: CBDB:637382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637382）
          source: &a1
            id: s_ZrQ9HpwYuRo5jKdN65UHgM
            source_type: api_record
            title: 中国历代人物传记资料库：王巴寧（CBDB 637382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637382&o=json
            external_identifier: CBDB:637382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kF83MZUF5NNFR6mGJVRhbv
        subject_person_id: p_8kxnK8d8D19in2LjLpZizX
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
        - id: cs_ih9DBbZRbh5VcKCwV5kQAo
          claim_id: c_kF83MZUF5NNFR6mGJVRhbv
          source_id: s_ZrQ9HpwYuRo5jKdN65UHgM
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

# 王巴寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巴寧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巴寧（CBDB 637382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637382&o=json)
