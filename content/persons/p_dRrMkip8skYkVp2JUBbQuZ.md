---
schema: wang-person/v1
id: p_dRrMkip8skYkVp2JUBbQuZ
status: active
merged_into: null
display_name: 王驎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1gw5iznhdp9etz2B2Mtrgy
        subject_person_id: p_dRrMkip8skYkVp2JUBbQuZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pKA4WCuKgDaa7haa3rUvyb
          claim_id: c_1gw5iznhdp9etz2B2Mtrgy
          source_id: s_8MdsVAALa15PNFupPpvJxx
          stance: supports
          locator: CBDB:385978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385978）
          source: &a1
            id: s_8MdsVAALa15PNFupPpvJxx
            source_type: api_record
            title: 中国历代人物传记资料库：王驎（CBDB 385978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385978&o=json
            external_identifier: CBDB:385978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H8bt987LZV4BWrrdgMtWGn
        subject_person_id: p_dRrMkip8skYkVp2JUBbQuZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1kRH5Ae5j3FpB62L5PjEM
          claim_id: c_H8bt987LZV4BWrrdgMtWGn
          source_id: s_8MdsVAALa15PNFupPpvJxx
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
        id: c_R3HQn0mstaOj4dDq0PLdPq
        subject_person_id: p_iHyn3vCZrGTDZpwukvNV36
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRrMkip8skYkVp2JUBbQuZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdWA0rQIV-438wQJTPopN2
          claim_id: c_R3HQn0mstaOj4dDq0PLdPq
          source_id: s_8MdsVAALa15PNFupPpvJxx
          stance: supports
          locator: 麗水宋元墓誌集録，49：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iHyn3vCZrGTDZpwukvNV36
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王驎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驎 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iHyn3vCZrGTDZpwukvNV36 | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王驎（CBDB 385978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385978&o=json)
