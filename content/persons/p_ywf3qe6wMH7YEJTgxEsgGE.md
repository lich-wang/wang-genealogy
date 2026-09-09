---
schema: wang-person/v1
id: p_ywf3qe6wMH7YEJTgxEsgGE
status: active
merged_into: null
display_name: 王承休
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mJ9ffgYzob1KMJfpQ5C5Gt
        subject_person_id: p_ywf3qe6wMH7YEJTgxEsgGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uw6g1ApVBUKGoRYCJHR5YA
          claim_id: c_mJ9ffgYzob1KMJfpQ5C5Gt
          source_id: s_N1S7tvLPMWVUm8dw4DAFBi
          stance: supports
          locator: CBDB:638064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638064）
          source: &a1
            id: s_N1S7tvLPMWVUm8dw4DAFBi
            source_type: api_record
            title: 中国历代人物传记资料库：王承休（CBDB 638064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638064&o=json
            external_identifier: CBDB:638064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CFRGX54HJyvBx82GkBPGoN
        subject_person_id: p_ywf3qe6wMH7YEJTgxEsgGE
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
        - id: cs_axaCaJ4HrC9JSBVyQC29Ge
          claim_id: c_CFRGX54HJyvBx82GkBPGoN
          source_id: s_N1S7tvLPMWVUm8dw4DAFBi
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

# 王承休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承休 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承休（CBDB 638064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638064&o=json)
