---
schema: wang-person/v1
id: p_PFAhy5DeN8TrMCHHyKTGNK
status: active
merged_into: null
display_name: 王獎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VVykgN7K8aGmmBdkZdvVwW
        subject_person_id: p_PFAhy5DeN8TrMCHHyKTGNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXzj2BozuoZAH4EDnWKfik
          claim_id: c_VVykgN7K8aGmmBdkZdvVwW
          source_id: s_LsBVVgQZ37d8NJBV3TS2x7
          stance: supports
          locator: CBDB:148707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148707）
          source: &a1
            id: s_LsBVVgQZ37d8NJBV3TS2x7
            source_type: api_record
            title: 中国历代人物传记资料库：王獎（CBDB 148707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148707&o=json
            external_identifier: CBDB:148707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9E4gJmUN5LnNbVXmuk4BGr
        subject_person_id: p_PFAhy5DeN8TrMCHHyKTGNK
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
        - id: cs_2QJa4AB3uoXocZG8d6eckw
          claim_id: c_9E4gJmUN5LnNbVXmuk4BGr
          source_id: s_LsBVVgQZ37d8NJBV3TS2x7
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

# 王獎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獎 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獎（CBDB 148707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148707&o=json)
