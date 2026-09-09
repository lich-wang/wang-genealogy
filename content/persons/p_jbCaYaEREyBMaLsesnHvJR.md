---
schema: wang-person/v1
id: p_jbCaYaEREyBMaLsesnHvJR
status: active
merged_into: null
display_name: 王蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJKn9oZq7WrZw6nyVHd7kg
        subject_person_id: p_jbCaYaEREyBMaLsesnHvJR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x6L2CCi1CR75LKVhZNq9RX
          claim_id: c_HJKn9oZq7WrZw6nyVHd7kg
          source_id: s_MH3VajN5X84KDXGxde53Nn
          stance: supports
          locator: CBDB:557776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557776）
          source: &a1
            id: s_MH3VajN5X84KDXGxde53Nn
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 557776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557776&o=json
            external_identifier: CBDB:557776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e7oNw58LL3KJL812LsUYks
        subject_person_id: p_jbCaYaEREyBMaLsesnHvJR
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
        - id: cs_mKsUa7Js1DBxeJC1P6rZ4h
          claim_id: c_e7oNw58LL3KJL812LsUYks
          source_id: s_MH3VajN5X84KDXGxde53Nn
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

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 557776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557776&o=json)
