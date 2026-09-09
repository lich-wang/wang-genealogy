---
schema: wang-person/v1
id: p_XD21nLrA76zgD5QkFHEm36
status: active
merged_into: null
display_name: 王樹霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_As8e2eFpTsq6JAs8gaExrB
        subject_person_id: p_XD21nLrA76zgD5QkFHEm36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bz8pV2E5CvJXksv5Pw2qm6
          claim_id: c_As8e2eFpTsq6JAs8gaExrB
          source_id: s_Tss6qhm3fyZhNcN6aQTX2F
          stance: supports
          locator: CBDB:638872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638872）
          source: &a1
            id: s_Tss6qhm3fyZhNcN6aQTX2F
            source_type: api_record
            title: 中国历代人物传记资料库：王樹霖（CBDB 638872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638872&o=json
            external_identifier: CBDB:638872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G3zaJkJb1ewrazGiye8oMz
        subject_person_id: p_XD21nLrA76zgD5QkFHEm36
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
        - id: cs_3pe77eRfnUbXKNMWvh2H9t
          claim_id: c_G3zaJkJb1ewrazGiye8oMz
          source_id: s_Tss6qhm3fyZhNcN6aQTX2F
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

# 王樹霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹霖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹霖（CBDB 638872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638872&o=json)
