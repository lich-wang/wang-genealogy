---
schema: wang-person/v1
id: p_9JJ9THqWEPJU2Qj93h9mfe
status: active
merged_into: null
display_name: 王六吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HXqYKKkfE2Dkr4dZLdVbiX
        subject_person_id: p_9JJ9THqWEPJU2Qj93h9mfe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lm3NdCU37RN1yqz1fQUFJ8
          claim_id: c_HXqYKKkfE2Dkr4dZLdVbiX
          source_id: s_veJABkkr7QsG4ozcqe9sVi
          stance: supports
          locator: CBDB:636324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636324）
          source: &a1
            id: s_veJABkkr7QsG4ozcqe9sVi
            source_type: api_record
            title: 中国历代人物传记资料库：王六吉（CBDB 636324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636324&o=json
            external_identifier: CBDB:636324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_21C8nwYgVNLXGf5N9vRoAN
        subject_person_id: p_9JJ9THqWEPJU2Qj93h9mfe
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
        - id: cs_iwtpXV9fAvTQwhb3Pt3a8f
          claim_id: c_21C8nwYgVNLXGf5N9vRoAN
          source_id: s_veJABkkr7QsG4ozcqe9sVi
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

# 王六吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六吉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王六吉（CBDB 636324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636324&o=json)
