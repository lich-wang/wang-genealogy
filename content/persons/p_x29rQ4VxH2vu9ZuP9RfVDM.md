---
schema: wang-person/v1
id: p_x29rQ4VxH2vu9ZuP9RfVDM
status: active
merged_into: null
display_name: 王錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yfbc4AsNjNE8Hrjt7h2go2
        subject_person_id: p_x29rQ4VxH2vu9ZuP9RfVDM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Lmd4BfFnQP9thvVjvDfH5
          claim_id: c_yfbc4AsNjNE8Hrjt7h2go2
          source_id: s_unBceZnWtKtouPZQFGY5Cf
          stance: supports
          locator: CBDB:466587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466587）
          source: &a1
            id: s_unBceZnWtKtouPZQFGY5Cf
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 466587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466587&o=json
            external_identifier: CBDB:466587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HfZFEA68Mj7ALRJGcvCLdr
        subject_person_id: p_x29rQ4VxH2vu9ZuP9RfVDM
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
        - id: cs_dGzBC1mMg8s43vLQM5WwQm
          claim_id: c_HfZFEA68Mj7ALRJGcvCLdr
          source_id: s_unBceZnWtKtouPZQFGY5Cf
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

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 466587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466587&o=json)
