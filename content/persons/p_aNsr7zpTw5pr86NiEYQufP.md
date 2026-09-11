---
schema: wang-person/v1
id: p_aNsr7zpTw5pr86NiEYQufP
status: active
merged_into: null
display_name: 王果
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8h8XacSGPq5ocb8RauF3A1
        subject_person_id: p_aNsr7zpTw5pr86NiEYQufP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AdrGCQVAsLgR4U7F5NF8fN
          claim_id: c_8h8XacSGPq5ocb8RauF3A1
          source_id: s_bCywyHFyc3rafoQPC7H91D
          stance: supports
          locator: CBDB:121025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121025）
          source: &a1
            id: s_bCywyHFyc3rafoQPC7H91D
            source_type: api_record
            title: 中国历代人物传记资料库：王果（CBDB 121025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121025&o=json
            external_identifier: CBDB:121025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2gAQeQJnqLYddCYKh53Du
        subject_person_id: p_aNsr7zpTw5pr86NiEYQufP
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
        - id: cs_6e2DPchrXj7cH3YJNmGGhF
          claim_id: c_P2gAQeQJnqLYddCYKh53Du
          source_id: s_bCywyHFyc3rafoQPC7H91D
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
        id: c_7R0FRYVyJdLd4F-IUO4qrP
        subject_person_id: p_aNsr7zpTw5pr86NiEYQufP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHw1ZP6CKrMSaDwjpFt5do
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x0Qm3r5St6vUBHS4W-lKnY
          claim_id: c_7R0FRYVyJdLd4F-IUO4qrP
          source_id: s_Hg6QAk76jSzk1x5M9Zxr7S
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hg6QAk76jSzk1x5M9Zxr7S
            source_type: api_record
            title: 中国历代人物传记资料库：王湘娥（CBDB 121031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121031&o=json
            external_identifier: CBDB:121031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jHw1ZP6CKrMSaDwjpFt5do
        status: active
        display_name: 王湘娥
        merged_into_person_id: null
    - claim:
        id: c_VK-9vqWd2Fjeg9oxDYmsvG
        subject_person_id: p_aNsr7zpTw5pr86NiEYQufP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mGWrYKDzG8MP3yspzZEbjL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGYKxB92cMEGTzN59EI_PL
          claim_id: c_VK-9vqWd2Fjeg9oxDYmsvG
          source_id: s_PzSYNY1tjqS6PFR9qVVW6d
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PzSYNY1tjqS6PFR9qVVW6d
            source_type: api_record
            title: 中国历代人物传记资料库：王湘嬃（CBDB 121021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121021&o=json
            external_identifier: CBDB:121021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_mGWrYKDzG8MP3yspzZEbjL
        status: active
        display_name: 王湘嬃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王果 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jHw1ZP6CKrMSaDwjpFt5do | 王湘娥 | accepted |
| children | p_mGWrYKDzG8MP3yspzZEbjL | 王湘嬃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王果（CBDB 121025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121025&o=json)
- [中国历代人物传记资料库：王湘娥（CBDB 121031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121031&o=json)
- [中国历代人物传记资料库：王湘嬃（CBDB 121021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121021&o=json)
