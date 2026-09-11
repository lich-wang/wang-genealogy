---
schema: wang-person/v1
id: p_kGHRzXtUaYBnJ8wGBJV9RP
status: active
merged_into: null
display_name: 王化
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JzAJeLfEakEWyxFEeQ1kcR
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s7T12wPH9hNLVB5nj2nrAX
          claim_id: c_JzAJeLfEakEWyxFEeQ1kcR
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: CBDB:337967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337967）
          source: &a1
            id: s_Tv1UGEZ2uHHJHsnvp62A5n
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 337967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json
            external_identifier: CBDB:337967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UJmttngEHCfDxDX7M3fZwi
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
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
        - id: cs_F3GG8EAaAcgzEL8CXx8gt7
          claim_id: c_UJmttngEHCfDxDX7M3fZwi
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qoN1o6ckAy43iyTigOOZ-V
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXc60P-nqfneeudv0BYf1f
          claim_id: c_qoN1o6ckAy43iyTigOOZ-V
          source_id: s_Tv1UGEZ2uHHJHsnvp62A5n
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 337967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337967&o=json)
