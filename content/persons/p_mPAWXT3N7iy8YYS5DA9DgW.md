---
schema: wang-person/v1
id: p_mPAWXT3N7iy8YYS5DA9DgW
status: active
merged_into: null
display_name: 王隆玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JQwYKW2NjYA1MGMtdBLuWH
        subject_person_id: p_mPAWXT3N7iy8YYS5DA9DgW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqrKcJWLEtJ1vwxzJj36YL
          claim_id: c_JQwYKW2NjYA1MGMtdBLuWH
          source_id: s_4EGRVB2ARtsBN3cv7LHBEh
          stance: supports
          locator: CBDB:640774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640774）
          source: &a1
            id: s_4EGRVB2ARtsBN3cv7LHBEh
            source_type: api_record
            title: 中国历代人物传记资料库：王隆玉（CBDB 640774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640774&o=json
            external_identifier: CBDB:640774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gg8bVjs85QFdB7QVaFSEzd
        subject_person_id: p_mPAWXT3N7iy8YYS5DA9DgW
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
        - id: cs_VGHfAFvtgiNPR8ig8Gp9KR
          claim_id: c_Gg8bVjs85QFdB7QVaFSEzd
          source_id: s_4EGRVB2ARtsBN3cv7LHBEh
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

# 王隆玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆玉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆玉（CBDB 640774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640774&o=json)
