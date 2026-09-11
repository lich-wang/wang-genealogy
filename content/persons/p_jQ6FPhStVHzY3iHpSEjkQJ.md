---
schema: wang-person/v1
id: p_jQ6FPhStVHzY3iHpSEjkQJ
status: active
merged_into: null
display_name: 王召南
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DPjRJTgoeAMBs2eiebMe3R
        subject_person_id: p_jQ6FPhStVHzY3iHpSEjkQJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王召南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PDTfXVeu8gJL3ye31EueYQ
          claim_id: c_DPjRJTgoeAMBs2eiebMe3R
          source_id: s_rXeM55ZaVCDecR8tDFQoRd
          stance: supports
          locator: CBDB:262668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262668）
          source: &a1
            id: s_rXeM55ZaVCDecR8tDFQoRd
            source_type: api_record
            title: 中国历代人物传记资料库：王召南（CBDB 262668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262668&o=json
            external_identifier: CBDB:262668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iLh4je5H54JNQyEFFY8NxM
        subject_person_id: p_jQ6FPhStVHzY3iHpSEjkQJ
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
        - id: cs_e8MKPZhGQL7sVCoJcA8BFx
          claim_id: c_iLh4je5H54JNQyEFFY8NxM
          source_id: s_rXeM55ZaVCDecR8tDFQoRd
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
        id: c_dgesp9w_Tnq4p1PSU2Wvyb
        subject_person_id: p_jQ6FPhStVHzY3iHpSEjkQJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sCt13UNRrBt2qKTE8fxxQi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PnvPsorIolgva_X4vORy_3
          claim_id: c_dgesp9w_Tnq4p1PSU2Wvyb
          source_id: s_rXeM55ZaVCDecR8tDFQoRd
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sCt13UNRrBt2qKTE8fxxQi
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  other: []
---

# 王召南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王召南 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sCt13UNRrBt2qKTE8fxxQi | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王召南（CBDB 262668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262668&o=json)
