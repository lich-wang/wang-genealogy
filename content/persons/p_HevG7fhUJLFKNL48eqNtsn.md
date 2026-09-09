---
schema: wang-person/v1
id: p_HevG7fhUJLFKNL48eqNtsn
status: active
merged_into: null
display_name: 王通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRd9eDGtE8zHTuKN6EYGZ6
        subject_person_id: p_HevG7fhUJLFKNL48eqNtsn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZMUEQyKn4A7cibpwHSH1Fy
          claim_id: c_oRd9eDGtE8zHTuKN6EYGZ6
          source_id: s_1HXSwYbLG4Jux2pPj98xx4
          stance: supports
          locator: CBDB:162067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162067）
          source: &a1
            id: s_1HXSwYbLG4Jux2pPj98xx4
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 162067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162067&o=json
            external_identifier: CBDB:162067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fjv1qDYUjEReTaCqynydAJ
        subject_person_id: p_HevG7fhUJLFKNL48eqNtsn
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
        - id: cs_FQJLddg61xq7dFMsProf7e
          claim_id: c_fjv1qDYUjEReTaCqynydAJ
          source_id: s_1HXSwYbLG4Jux2pPj98xx4
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

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 162067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162067&o=json)
