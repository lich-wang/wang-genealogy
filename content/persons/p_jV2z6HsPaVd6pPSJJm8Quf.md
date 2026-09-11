---
schema: wang-person/v1
id: p_jV2z6HsPaVd6pPSJJm8Quf
status: active
merged_into: null
display_name: 王鎰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1dBiSZKn3sq1KmeYaVHk3p
        subject_person_id: p_jV2z6HsPaVd6pPSJJm8Quf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rq7yaAN3ok2WjMYsyYU87k
          claim_id: c_1dBiSZKn3sq1KmeYaVHk3p
          source_id: s_WRJriG37itHzAJM2H9scqH
          stance: supports
          locator: CBDB:328018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328018）
          source: &a1
            id: s_WRJriG37itHzAJM2H9scqH
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 328018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328018&o=json
            external_identifier: CBDB:328018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HEGkQFok3Bv6PpKDhnQFG8
        subject_person_id: p_jV2z6HsPaVd6pPSJJm8Quf
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
        - id: cs_b1AqHU5KJz7M9135qHG9jL
          claim_id: c_HEGkQFok3Bv6PpKDhnQFG8
          source_id: s_WRJriG37itHzAJM2H9scqH
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
  descendants:
    - claim:
        id: c_Qp7Ucm5VJor8-K-1EigG5Q
        subject_person_id: p_jV2z6HsPaVd6pPSJJm8Quf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mlbjIDQE16KuFePEhieuoM
          claim_id: c_Qp7Ucm5VJor8-K-1EigG5Q
          source_id: s_WRJriG37itHzAJM2H9scqH
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N8A5uBxQ6WYAScVBd1MwWK
        status: active
        display_name: 王納言
        merged_into_person_id: null
  other: []
---

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_N8A5uBxQ6WYAScVBd1MwWK | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 328018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328018&o=json)
