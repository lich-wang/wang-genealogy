---
schema: wang-person/v1
id: p_AgJDhHZcAwqHqWHrXqpG4R
status: active
merged_into: null
display_name: 王自立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eX8ABbY5EGYPTWc1HVvUZs
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KEQUXd6ngP7FtZB1fTtPBs
          claim_id: c_eX8ABbY5EGYPTWc1HVvUZs
          source_id: s_QpbBrvUHacE3xHPqNt3wLD
          stance: supports
          locator: CBDB:175953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175953）
          source: &a1
            id: s_QpbBrvUHacE3xHPqNt3wLD
            source_type: api_record
            title: 中国历代人物传记资料库：王自立（CBDB 175953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175953&o=json
            external_identifier: CBDB:175953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sMJJqRtGTUtA3wY54J2gVQ
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3um8edrh5igeDTPsD3aZJ
          claim_id: c_sMJJqRtGTUtA3wY54J2gVQ
          source_id: s_QpbBrvUHacE3xHPqNt3wLD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z3p5W7BCQXPtM7XwRhFp1R
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n9BQeMKy8bERmuvh1PK4fA
          claim_id: c_Z3p5W7BCQXPtM7XwRhFp1R
          source_id: s_QpbBrvUHacE3xHPqNt3wLD
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

# 王自立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自立 | accepted |
| death.date | 853年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自立（CBDB 175953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175953&o=json)
