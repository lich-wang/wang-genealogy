---
schema: wang-person/v1
id: p_tFBEWUgYjefES2HTxytcTA
status: active
merged_into: null
display_name: 王有朋
cbdb_id: 385850
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eEwofhx8qB4Kji2RQNq5cE
        subject_person_id: p_tFBEWUgYjefES2HTxytcTA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有朋，宋人物。籍贯永康，身份为儒學。（中国历代人物传记资料库 CBDB 385850）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cbKpyxeJgX5P8fvV8AzuX7
          claim_id: c_eEwofhx8qB4Kji2RQNq5cE
          source_id: s_7NNQvYG9yALyNLgtyAJgT5
          stance: supports
          locator: CBDB:385850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7NNQvYG9yALyNLgtyAJgT5
            source_type: api_record
            title: 中国历代人物传记资料库：王有朋（CBDB 385850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385850&o=json
            external_identifier: CBDB:385850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_59yrXx18xmWkqxc2RoG6D3
        subject_person_id: p_tFBEWUgYjefES2HTxytcTA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4iA4D76RuNLXE9JNBK4BVb
          claim_id: c_59yrXx18xmWkqxc2RoG6D3
          source_id: s_7NNQvYG9yALyNLgtyAJgT5
          stance: supports
          locator: CBDB:385850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7RYQNaWjmyp7LSfWE4ScWH
        subject_person_id: p_tFBEWUgYjefES2HTxytcTA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FeeEclvkMHjErcxkADy6by
          claim_id: c_7RYQNaWjmyp7LSfWE4ScWH
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JuL1yAwLhY34c9tGyGgFKS
            source_type: api_record
            title: 中国历代人物传记资料库：王恬（CBDB 38258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38258&o=json
            external_identifier: CBDB:38258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WFnoT4AbtuEmwq5jbDJDqe
        status: active
        display_name: 王恬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有朋，宋人物。籍贯永康，身份为儒學。（中国历代人物传记资料库 CBDB 385850） | accepted |
| name.primary | 王有朋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WFnoT4AbtuEmwq5jbDJDqe | 王恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恬（CBDB 38258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38258&o=json)
- [中国历代人物传记资料库：王有朋（CBDB 385850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385850&o=json)
