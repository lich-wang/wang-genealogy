---
schema: wang-person/v1
id: p_7KqNoDrVhMseAaCM8ihtV4
status: active
merged_into: null
display_name: 王鉦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VMjJX2CXGpPCVDQ3AWdaa4
        subject_person_id: p_7KqNoDrVhMseAaCM8ihtV4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rYV7u9XhhyqkQHVw8Srzat
          claim_id: c_VMjJX2CXGpPCVDQ3AWdaa4
          source_id: s_a4f26DUPpK7GoHpTftvQFp
          stance: supports
          locator: CBDB:312426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312426）
          source: &a1
            id: s_a4f26DUPpK7GoHpTftvQFp
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 312426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312426&o=json
            external_identifier: CBDB:312426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eycdAkWwSz396jNVAJZG4d
        subject_person_id: p_7KqNoDrVhMseAaCM8ihtV4
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
        - id: cs_zQoL5PN9XwQgVfLX196Lop
          claim_id: c_eycdAkWwSz396jNVAJZG4d
          source_id: s_a4f26DUPpK7GoHpTftvQFp
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
  descendants:
    - claim:
        id: c_1UMMXsB9E2N3N71DqHFO05
        subject_person_id: p_7KqNoDrVhMseAaCM8ihtV4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PjLFLca713vMspeHyzh9e2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etkQg2HP1fjEEbwIrgqead
          claim_id: c_1UMMXsB9E2N3N71DqHFO05
          source_id: s_a4f26DUPpK7GoHpTftvQFp
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第七十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PjLFLca713vMspeHyzh9e2
        status: active
        display_name: 王叔果
        merged_into_person_id: null
  other: []
---

# 王鉦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PjLFLca713vMspeHyzh9e2 | 王叔果 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉦（CBDB 312426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312426&o=json)
