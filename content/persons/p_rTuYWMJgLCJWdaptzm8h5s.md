---
schema: wang-person/v1
id: p_rTuYWMJgLCJWdaptzm8h5s
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hfRLtFMbooX8iN528t9Yq8
        subject_person_id: p_rTuYWMJgLCJWdaptzm8h5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U6xQpWRaubWQdFNDmfPsjB
          claim_id: c_hfRLtFMbooX8iN528t9Yq8
          source_id: s_gbaWivYr2nCXS2VHHJx3VR
          stance: supports
          locator: CBDB:554913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（554913）
          source: &a1
            id: s_gbaWivYr2nCXS2VHHJx3VR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 554913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554913&o=json
            external_identifier: CBDB:554913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rJ2kJGTpFiwPpzCGeGoE9K
        subject_person_id: p_rTuYWMJgLCJWdaptzm8h5s
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
        - id: cs_WskKikzuLGMCtQE6wSrC4N
          claim_id: c_rJ2kJGTpFiwPpzCGeGoE9K
          source_id: s_gbaWivYr2nCXS2VHHJx3VR
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
  spouses:
    - claim:
        id: c_Rq_-gfb8pE5RMjfFesLIyM
        subject_person_id: p_rTuYWMJgLCJWdaptzm8h5s
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_imHy7sMY7eAET6Un1Twwn8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAjfJIcS2Okf1TP3bA2kqA
          claim_id: c_Rq_-gfb8pE5RMjfFesLIyM
          source_id: s_lkzC6qpJs7NSLdYHPimtfM
          stance: supports
          locator: 南陽府志，lgid=878676：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lkzC6qpJs7NSLdYHPimtfM
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王瑄妻)（CBDB 554915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554915&o=json
            external_identifier: CBDB:554915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_imHy7sMY7eAET6Un1Twwn8
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_imHy7sMY7eAET6Un1Twwn8 | 許氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 554913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554913&o=json)
- [中国历代人物传记资料库：許氏(王瑄妻)（CBDB 554915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554915&o=json)
