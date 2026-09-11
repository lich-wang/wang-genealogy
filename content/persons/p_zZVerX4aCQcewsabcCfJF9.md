---
schema: wang-person/v1
id: p_zZVerX4aCQcewsabcCfJF9
status: active
merged_into: null
display_name: 王燮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yMNGJ8jMXGRAGN3be36pYZ
        subject_person_id: p_zZVerX4aCQcewsabcCfJF9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nmLaPV3yBF2gxKkYSuM895
          claim_id: c_yMNGJ8jMXGRAGN3be36pYZ
          source_id: s_ej2YCEbNsLjQc7FgcAy4fC
          stance: supports
          locator: CBDB:118578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118578）
          source: &a1
            id: s_ej2YCEbNsLjQc7FgcAy4fC
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 118578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118578&o=json
            external_identifier: CBDB:118578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oPVDJYA1mJJKpzwBBYAvVE
        subject_person_id: p_zZVerX4aCQcewsabcCfJF9
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
        - id: cs_Piy2xi5u6bLnx3UF1QAy7P
          claim_id: c_oPVDJYA1mJJKpzwBBYAvVE
          source_id: s_ej2YCEbNsLjQc7FgcAy4fC
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
        id: c_8-S2WblRPRPb8QIctedOe4
        subject_person_id: p_zZVerX4aCQcewsabcCfJF9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3GfmC8MTFBUnnSqz1tct8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbgiaQQRAUxgmE78la1_Fn
          claim_id: c_8-S2WblRPRPb8QIctedOe4
          source_id: s_g9bxtFmf8G5ZLp2b3Kg2JT
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2654, HuWenKai #257：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g9bxtFmf8G5ZLp2b3Kg2JT
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊瑛（CBDB 118577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118577&o=json
            external_identifier: CBDB:118577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3GfmC8MTFBUnnSqz1tct8A
        status: active
        display_name: 王瓊瑛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3GfmC8MTFBUnnSqz1tct8A | 王瓊瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊瑛（CBDB 118577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118577&o=json)
- [中国历代人物传记资料库：王燮（CBDB 118578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118578&o=json)
