---
schema: wang-person/v1
id: p_SvV71z7wuSBsk2C4dEE7Ss
status: active
merged_into: null
display_name: 王若濬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nb521kvUENRQadqgFTMxmf
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LF3zk39ZuATnji9jzrF6QX
          claim_id: c_Nb521kvUENRQadqgFTMxmf
          source_id: s_6BdEW34EXxV1FWq7BZUJzm
          stance: supports
          locator: CBDB:700854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700854）
          source: &a1
            id: s_6BdEW34EXxV1FWq7BZUJzm
            source_type: api_record
            title: 中国历代人物传记资料库：王若濬（CBDB 700854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700854&o=json
            external_identifier: CBDB:700854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8A274BNQc5g6EW22T7PEhp
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
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
        - id: cs_4sv4CSjDoMnMHs5T88SGyR
          claim_id: c_8A274BNQc5g6EW22T7PEhp
          source_id: s_6BdEW34EXxV1FWq7BZUJzm
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

# 王若濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若濬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若濬（CBDB 700854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700854&o=json)
