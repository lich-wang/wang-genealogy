---
schema: wang-person/v1
id: p_gQPrhzw3f4PUMB6D7dvpWM
status: active
merged_into: null
display_name: 王興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y58PjJBBioF4Udyc6Ki5kZ
        subject_person_id: p_gQPrhzw3f4PUMB6D7dvpWM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZEm1j16BVTG9dkkPwr5vKE
          claim_id: c_Y58PjJBBioF4Udyc6Ki5kZ
          source_id: s_5XX2L81SmSHEh7oARGDbcg
          stance: supports
          locator: CBDB:688610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688610）
          source: &a1
            id: s_5XX2L81SmSHEh7oARGDbcg
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 688610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688610&o=json
            external_identifier: CBDB:688610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8G2FGjHDXrxat4M9XdCFUL
        subject_person_id: p_gQPrhzw3f4PUMB6D7dvpWM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMMvH3JBTy9tdHxC5aenQW
          claim_id: c_8G2FGjHDXrxat4M9XdCFUL
          source_id: s_5XX2L81SmSHEh7oARGDbcg
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

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 688610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688610&o=json)
