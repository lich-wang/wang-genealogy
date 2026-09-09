---
schema: wang-person/v1
id: p_simpi2T6zedcs2JGNb5KzX
status: active
merged_into: null
display_name: 王璲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zx3o48Ma53bGoh731RzHQJ
        subject_person_id: p_simpi2T6zedcs2JGNb5KzX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q3Nnp4YZMMkkU54QHHANkq
          claim_id: c_Zx3o48Ma53bGoh731RzHQJ
          source_id: s_fLKa319SbC5aXJQPHY38j3
          stance: supports
          locator: CBDB:342074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342074）
          source: &a1
            id: s_fLKa319SbC5aXJQPHY38j3
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 342074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342074&o=json
            external_identifier: CBDB:342074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHFGmvfLkbCeFFtoR8ErzC
        subject_person_id: p_simpi2T6zedcs2JGNb5KzX
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
        - id: cs_Nvu9FnHBLkMXCj2d4RcxLW
          claim_id: c_DHFGmvfLkbCeFFtoR8ErzC
          source_id: s_fLKa319SbC5aXJQPHY38j3
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

# 王璲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璲（CBDB 342074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342074&o=json)
