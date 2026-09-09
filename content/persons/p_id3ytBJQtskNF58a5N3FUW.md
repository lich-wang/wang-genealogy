---
schema: wang-person/v1
id: p_id3ytBJQtskNF58a5N3FUW
status: active
merged_into: null
display_name: 王秉剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3M2tUSLuSXGatLsj5CpejN
        subject_person_id: p_id3ytBJQtskNF58a5N3FUW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r9dRP5xT4WeGSKw77wbHjP
          claim_id: c_3M2tUSLuSXGatLsj5CpejN
          source_id: s_bHRLcyr2HF9xFBWaq8qQ2R
          stance: supports
          locator: CBDB:639641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639641）
          source: &a1
            id: s_bHRLcyr2HF9xFBWaq8qQ2R
            source_type: api_record
            title: 中国历代人物传记资料库：王秉剛（CBDB 639641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639641&o=json
            external_identifier: CBDB:639641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cz3U7ou8eRiD6YVcbuPG82
        subject_person_id: p_id3ytBJQtskNF58a5N3FUW
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
        - id: cs_Gmg98doyZHGLvCdJ9cW1MM
          claim_id: c_cz3U7ou8eRiD6YVcbuPG82
          source_id: s_bHRLcyr2HF9xFBWaq8qQ2R
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

# 王秉剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉剛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉剛（CBDB 639641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639641&o=json)
