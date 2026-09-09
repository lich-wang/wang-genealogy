---
schema: wang-person/v1
id: p_qhAxDKw95n8F4uH9Di1dDz
status: active
merged_into: null
display_name: 王于烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CiZ7mE3tzKcLi51T64dUVR
        subject_person_id: p_qhAxDKw95n8F4uH9Di1dDz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王于烈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jxDwiBJzV9xBph9h4gbN7D
          claim_id: c_CiZ7mE3tzKcLi51T64dUVR
          source_id: s_a9CjfvtBz78kWLBvZSoug5
          stance: supports
          locator: CBDB:341821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341821）
          source: &a1
            id: s_a9CjfvtBz78kWLBvZSoug5
            source_type: api_record
            title: 中国历代人物传记资料库：王于烈（CBDB 341821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341821&o=json
            external_identifier: CBDB:341821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oh7t91D6UDorime1ry2ikC
        subject_person_id: p_qhAxDKw95n8F4uH9Di1dDz
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
        - id: cs_kE2AS2bkVQXQm6ihfV4LC9
          claim_id: c_oh7t91D6UDorime1ry2ikC
          source_id: s_a9CjfvtBz78kWLBvZSoug5
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

# 王于烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王于烈 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王于烈（CBDB 341821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341821&o=json)
