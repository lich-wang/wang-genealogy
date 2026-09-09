---
schema: wang-person/v1
id: p_AKJXYFdDqBy4XJSPu7jiys
status: active
merged_into: null
display_name: 王鍔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YXdaGar9L89phvGVsPjBWE
        subject_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tc1LNnBBiZh5vXUswJNTrH
          claim_id: c_YXdaGar9L89phvGVsPjBWE
          source_id: s_32GRhbYGh15UHY8N4LtXwP
          stance: supports
          locator: CBDB:290160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290160）
          source: &a1
            id: s_32GRhbYGh15UHY8N4LtXwP
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 290160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json
            external_identifier: CBDB:290160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xxdb8cPjb5JJbNQA6Hues3
        subject_person_id: p_AKJXYFdDqBy4XJSPu7jiys
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
        - id: cs_zKzA39YFWS8Gido33hS9Df
          claim_id: c_Xxdb8cPjb5JJbNQA6Hues3
          source_id: s_32GRhbYGh15UHY8N4LtXwP
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

# 王鍔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍔（CBDB 290160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json)
