---
schema: wang-person/v1
id: p_EDQ6bF94LhgU9eNyEGMPt6
status: active
merged_into: null
display_name: 王世積
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zGJ8QhHCRA2QfCjUYE5Rz9
        subject_person_id: p_EDQ6bF94LhgU9eNyEGMPt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_two7WuNsfEBU6CyGYYLvWY
          claim_id: c_zGJ8QhHCRA2QfCjUYE5Rz9
          source_id: s_49Nd2mLs1FajM5WH3Po4Sy
          stance: supports
          locator: CBDB:413721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413721）
          source: &a1
            id: s_49Nd2mLs1FajM5WH3Po4Sy
            source_type: api_record
            title: 中国历代人物传记资料库：王世積（CBDB 413721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413721&o=json
            external_identifier: CBDB:413721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R2zu3sEc1ofTWhwQzUL88S
        subject_person_id: p_EDQ6bF94LhgU9eNyEGMPt6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为三國蜀人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qMPbzLpssJVPJp3XxbXy4x
          claim_id: c_R2zu3sEc1ofTWhwQzUL88S
          source_id: s_49Nd2mLs1FajM5WH3Po4Sy
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

# 王世積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世積 | accepted |
| bio.summary | CBDB 记载为三國蜀人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世積（CBDB 413721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413721&o=json)
