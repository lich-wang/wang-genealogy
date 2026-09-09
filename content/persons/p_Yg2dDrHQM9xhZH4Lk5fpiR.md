---
schema: wang-person/v1
id: p_Yg2dDrHQM9xhZH4Lk5fpiR
status: active
merged_into: null
display_name: 王璣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7DLDZ9QW77JFdKpHrNxzSW
        subject_person_id: p_Yg2dDrHQM9xhZH4Lk5fpiR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tFvKQkzgNM2XhfHBJ3HZMK
          claim_id: c_7DLDZ9QW77JFdKpHrNxzSW
          source_id: s_BZfLR8uFGPvZX7ZrCAJeRk
          stance: supports
          locator: CBDB:61216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61216）
          source: &a1
            id: s_BZfLR8uFGPvZX7ZrCAJeRk
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 61216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61216&o=json
            external_identifier: CBDB:61216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3EMP5ERdBhv23ESEMQVZW4
        subject_person_id: p_Yg2dDrHQM9xhZH4Lk5fpiR
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
        - id: cs_QLAYpvDsKcNfZFFQ2egEna
          claim_id: c_3EMP5ERdBhv23ESEMQVZW4
          source_id: s_BZfLR8uFGPvZX7ZrCAJeRk
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

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 61216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61216&o=json)
