---
schema: wang-person/v1
id: p_Dux7WNFsU69f4rV8Xe745g
status: active
merged_into: null
display_name: 王世仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2vZwDne1E462myGjBNoiXA
        subject_person_id: p_Dux7WNFsU69f4rV8Xe745g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t4ZKte3KsjQgCk4XN9HpHN
          claim_id: c_2vZwDne1E462myGjBNoiXA
          source_id: s_5ZwgCqaYkeWDXfgs7UUDCg
          stance: supports
          locator: CBDB:343173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343173）
          source: &a1
            id: s_5ZwgCqaYkeWDXfgs7UUDCg
            source_type: api_record
            title: 中国历代人物传记资料库：王世仁（CBDB 343173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343173&o=json
            external_identifier: CBDB:343173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eq4ACKjJT3YaXv2BXKZbP8
        subject_person_id: p_Dux7WNFsU69f4rV8Xe745g
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
        - id: cs_5sxgs4syLrMVmz4DM4ubRx
          claim_id: c_eq4ACKjJT3YaXv2BXKZbP8
          source_id: s_5ZwgCqaYkeWDXfgs7UUDCg
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

# 王世仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世仁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世仁（CBDB 343173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343173&o=json)
