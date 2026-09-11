---
schema: wang-person/v1
id: p_uhg7M4Hh4FFL2fV4HjE6Cg
status: active
merged_into: null
display_name: 王榮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7rjme22MJoE5AGc4QfPkC5
        subject_person_id: p_uhg7M4Hh4FFL2fV4HjE6Cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A62W9y8oGGZuhNGNV6AGqb
          claim_id: c_7rjme22MJoE5AGc4QfPkC5
          source_id: s_dwHKdGW4846v56a4aCvGNb
          stance: supports
          locator: CBDB:255120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255120）
          source: &a1
            id: s_dwHKdGW4846v56a4aCvGNb
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 255120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255120&o=json
            external_identifier: CBDB:255120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v3y7yE5wkggY1UQTzBBa2Q
        subject_person_id: p_uhg7M4Hh4FFL2fV4HjE6Cg
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
        - id: cs_qKJCHEPodiYvQzLpWSmHWE
          claim_id: c_v3y7yE5wkggY1UQTzBBa2Q
          source_id: s_dwHKdGW4846v56a4aCvGNb
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
        id: c_D-wiNC9hOrfUpL0Z0xS0ZW
        subject_person_id: p_uhg7M4Hh4FFL2fV4HjE6Cg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fYwp6rZCTtFvp8J8toSZti
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJakQnY8CqU7XjsSd91Bvd
          claim_id: c_D-wiNC9hOrfUpL0Z0xS0ZW
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：曾祖、祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qEvCQcQFP2htwCq8xnWiJs
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 200225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json
            external_identifier: CBDB:200225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fYwp6rZCTtFvp8J8toSZti
        status: active
        display_name: 王本宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_vEcRKw3cKn82YycKpXCKfl
        subject_person_id: p_uhg7M4Hh4FFL2fV4HjE6Cg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2Djk_JqndlZv1ajUcwgaj
          claim_id: c_vEcRKw3cKn82YycKpXCKfl
          source_id: s_dwHKdGW4846v56a4aCvGNb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_15Nh8Xnsw6Q2WxxXdtixbY
        status: active
        display_name: 王宥
        merged_into_person_id: null
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fYwp6rZCTtFvp8J8toSZti | 王本宗 | accepted |
| descendants | p_15Nh8Xnsw6Q2WxxXdtixbY | 王宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 255120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255120&o=json)
- [中国历代人物传记资料库：王宥（CBDB 200225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json)
