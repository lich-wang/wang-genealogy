---
schema: wang-person/v1
id: p_EXNiuacY5qKu9KTDWZ22XE
status: active
merged_into: null
display_name: 王尚智
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4TrFeWfKHtNUwA3DVb7XT
        subject_person_id: p_EXNiuacY5qKu9KTDWZ22XE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y4UmmUNgPGaSTDP2BuQ1WY
          claim_id: c_K4TrFeWfKHtNUwA3DVb7XT
          source_id: s_PKiS6W5tTh4s2pHWDe8ie7
          stance: supports
          locator: CBDB:28795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28795）
          source: &a1
            id: s_PKiS6W5tTh4s2pHWDe8ie7
            source_type: api_record
            title: 中国历代人物传记资料库：王尚智（CBDB 28795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28795&o=json
            external_identifier: CBDB:28795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5amjWT6TJj3VGXB3Mg2seJ
        subject_person_id: p_EXNiuacY5qKu9KTDWZ22XE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPb1bC5QPbA2rMJTHioGGU
          claim_id: c_5amjWT6TJj3VGXB3Mg2seJ
          source_id: s_PKiS6W5tTh4s2pHWDe8ie7
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
        id: c_QbtzkFlVHV2VjnNdD6UxKQ
        subject_person_id: p_EXNiuacY5qKu9KTDWZ22XE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdyzKkAqbp36xcrSMf6iP4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEytGHC81iGgB9ze9YScYA
          claim_id: c_QbtzkFlVHV2VjnNdD6UxKQ
          source_id: s_PKiS6W5tTh4s2pHWDe8ie7
          stance: supports
          locator: CBDB 双向互证（子 王瑀 ⇄ 父 王尚智）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_GdyzKkAqbp36xcrSMf6iP4
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gJhKRSyi6Xa-gsUsxKVrLj
        subject_person_id: p_3yGgeYr8AWKKojb6QYWJCJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EXNiuacY5qKu9KTDWZ22XE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_28-HHeNHYH3VB7B6urzH4G
          claim_id: c_gJhKRSyi6Xa-gsUsxKVrLj
          source_id: s_5hiHrRziXJszNvjev39kPB
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王尚智 ⇄ 曾祖 王宗望）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_5hiHrRziXJszNvjev39kPB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 1904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1904&o=json
            external_identifier: CBDB:1904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3yGgeYr8AWKKojb6QYWJCJ
        status: active
        display_name: 王宗望
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尚智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚智 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GdyzKkAqbp36xcrSMf6iP4 | 王瑀 | accepted |
| ancestors | p_3yGgeYr8AWKKojb6QYWJCJ | 王宗望 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚智（CBDB 28795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28795&o=json)
- [中国历代人物传记资料库：王宗望（CBDB 1904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1904&o=json)
