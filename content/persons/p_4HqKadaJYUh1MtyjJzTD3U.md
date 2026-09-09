---
schema: wang-person/v1
id: p_4HqKadaJYUh1MtyjJzTD3U
status: active
merged_into: null
display_name: 王人文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pzfTsDxFNjME3Uq1e1R7Yr
        subject_person_id: p_4HqKadaJYUh1MtyjJzTD3U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hH8FTKbyhxPMLJSWHx9vrC
          claim_id: c_pzfTsDxFNjME3Uq1e1R7Yr
          source_id: s_gdmFA4xHcBA7mQt98sR6eB
          stance: supports
          locator: CBDB:61594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61594）
          source: &a1
            id: s_gdmFA4xHcBA7mQt98sR6eB
            source_type: api_record
            title: 中国历代人物传记资料库：王人文（CBDB 61594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61594&o=json
            external_identifier: CBDB:61594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gkCHoDA1JnMabyduX5DEFE
        subject_person_id: p_4HqKadaJYUh1MtyjJzTD3U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oWvGBnBatUCMQMxHR5Cy2v
          claim_id: c_gkCHoDA1JnMabyduX5DEFE
          source_id: s_gdmFA4xHcBA7mQt98sR6eB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fcu6fNt569McpbuA1VuUaE
        subject_person_id: p_4HqKadaJYUh1MtyjJzTD3U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1941年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S2D2JrxkK77ptVAySEFsAh
          claim_id: c_fcu6fNt569McpbuA1VuUaE
          source_id: s_gdmFA4xHcBA7mQt98sR6eB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yAtagBvt2hJ7froGLkgGKe
        subject_person_id: p_4HqKadaJYUh1MtyjJzTD3U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_owYogwz7VwpaYDJd7xNY7y
          claim_id: c_yAtagBvt2hJ7froGLkgGKe
          source_id: s_gdmFA4xHcBA7mQt98sR6eB
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

# 王人文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人文 | accepted |
| birth.date | 1863年 | accepted |
| death.date | 1941年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人文（CBDB 61594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61594&o=json)
