---
schema: wang-person/v1
id: p_dWYb6X7kmuycUpQPFrF9H9
status: active
merged_into: null
display_name: 王普恕
cbdb_id: 325996
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_phfuv41xYPP3nWifptHLjj
        subject_person_id: p_dWYb6X7kmuycUpQPFrF9H9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普恕，明人物。中国历代人物传记资料库（CBDB）以人物编号 325996 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PlH5ss2gBUmPd8tAvT2gnF
          claim_id: c_phfuv41xYPP3nWifptHLjj
          source_id: s_7mL9us5VE8nuSXf7t82HnZ
          stance: supports
          locator: CBDB:325996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7mL9us5VE8nuSXf7t82HnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王普恕（CBDB 325996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325996&o=json
            external_identifier: CBDB:325996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e9btPoV8G1sCTwWS5ZCJHg
        subject_person_id: p_dWYb6X7kmuycUpQPFrF9H9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qU7CsQfKyCNzisnJL9qUpL
          claim_id: c_e9btPoV8G1sCTwWS5ZCJHg
          source_id: s_7mL9us5VE8nuSXf7t82HnZ
          stance: supports
          locator: CBDB:325996
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_7mL9us5VE8nuSXf7t82HnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王普恕（CBDB 325996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325996&o=json
            external_identifier: CBDB:325996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_ciZGcKR8HWkjlDxQGJsLui
        subject_person_id: p_dWYb6X7kmuycUpQPFrF9H9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVxdxBSogu3MmeLbBHOGe7
          claim_id: c_ciZGcKR8HWkjlDxQGJsLui
          source_id: s_7mL9us5VE8nuSXf7t82HnZ
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BiHBv5kE6hFqq82j1ZogDT
        status: active
        display_name: 王祥
        merged_into_person_id: null
  other: []
---

# 王普恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王普恕，明人物。中国历代人物传记资料库（CBDB）以人物编号 325996 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王普恕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BiHBv5kE6hFqq82j1ZogDT | 王祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王普恕（CBDB 325996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325996&o=json)
