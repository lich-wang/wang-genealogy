---
schema: wang-person/v1
id: p_qQAki6G7UfxQbvuetFxR8x
status: active
merged_into: null
display_name: 王琬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_quZrS2vLAmirWFBwndLa3j
        subject_person_id: p_qQAki6G7UfxQbvuetFxR8x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dtnk7XXpDq4WeaPFF5CUJT
          claim_id: c_quZrS2vLAmirWFBwndLa3j
          source_id: s_mLNsQdDGXVunA9KbSXLFHV
          stance: supports
          locator: CBDB:690927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690927）
          source: &a1
            id: s_mLNsQdDGXVunA9KbSXLFHV
            source_type: api_record
            title: 中国历代人物传记资料库：王琬（CBDB 690927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690927&o=json
            external_identifier: CBDB:690927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AeDNU2jT1T2U2SL9gFXLV5
        subject_person_id: p_qQAki6G7UfxQbvuetFxR8x
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
        - id: cs_VVixNLUr6gptbbuVTN7HGy
          claim_id: c_AeDNU2jT1T2U2SL9gFXLV5
          source_id: s_mLNsQdDGXVunA9KbSXLFHV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nmPz-UYm7fGSrsV8ngr1Q3
        subject_person_id: p_pQ4PZA9J5NRAuUmE4su9fC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qQAki6G7UfxQbvuetFxR8x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jTvQGOcLcsheKeqCk0y-Ha
          claim_id: c_nmPz-UYm7fGSrsV8ngr1Q3
          source_id: s_EppHqd6VFC8wR8GQtewrzh
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166257：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EppHqd6VFC8wR8GQtewrzh
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 690926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690926&o=json
            external_identifier: CBDB:690926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pQ4PZA9J5NRAuUmE4su9fC
        status: active
        display_name: 王用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pQ4PZA9J5NRAuUmE4su9fC | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琬（CBDB 690927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690927&o=json)
- [中国历代人物传记资料库：王用（CBDB 690926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690926&o=json)
