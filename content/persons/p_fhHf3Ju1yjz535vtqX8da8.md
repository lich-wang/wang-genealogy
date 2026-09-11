---
schema: wang-person/v1
id: p_fhHf3Ju1yjz535vtqX8da8
status: active
merged_into: null
display_name: 王金
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E69pkbK4C6czNLjX2MPDv3
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9viPaGFbPiPY6YJAE6emw1
          claim_id: c_E69pkbK4C6czNLjX2MPDv3
          source_id: s_EPq6BjuK4FMZTush73Qkx5
          stance: supports
          locator: CBDB:212066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212066）
          source: &a1
            id: s_EPq6BjuK4FMZTush73Qkx5
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 212066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212066&o=json
            external_identifier: CBDB:212066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_27BLR589rr2cwsmJF4nEJR
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ToeS5xwgBH8iiFmJkLdUeJ
          claim_id: c_27BLR589rr2cwsmJF4nEJR
          source_id: s_EPq6BjuK4FMZTush73Qkx5
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
        id: c_vbiQJ98belEgVDeAkXsKnQ
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MaSGIvIr0MKYy9sdSZumYn
          claim_id: c_vbiQJ98belEgVDeAkXsKnQ
          source_id: s_EPq6BjuK4FMZTush73Qkx5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_txmGNUSLN748iJB41SWQzU
        status: active
        display_name: 王致祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_txmGNUSLN748iJB41SWQzU | 王致祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 212066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212066&o=json)
