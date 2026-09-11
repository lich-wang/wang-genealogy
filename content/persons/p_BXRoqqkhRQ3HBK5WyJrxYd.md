---
schema: wang-person/v1
id: p_BXRoqqkhRQ3HBK5WyJrxYd
status: active
merged_into: null
display_name: 王榦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MTWSNVFua6Ey3Xp2qFC9aS
        subject_person_id: p_BXRoqqkhRQ3HBK5WyJrxYd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gBJDXrys9Cx6o3c4Q2fFnC
          claim_id: c_MTWSNVFua6Ey3Xp2qFC9aS
          source_id: s_DJSWDhJcEvGvUHqLs1N6f7
          stance: supports
          locator: CBDB:292161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292161）
          source: &a1
            id: s_DJSWDhJcEvGvUHqLs1N6f7
            source_type: api_record
            title: 中国历代人物传记资料库：王榦（CBDB 292161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292161&o=json
            external_identifier: CBDB:292161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jb6GY43JG8noCdEsY2Ctid
        subject_person_id: p_BXRoqqkhRQ3HBK5WyJrxYd
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
        - id: cs_56z2RkfGjSKcXNg1QVkMWo
          claim_id: c_Jb6GY43JG8noCdEsY2Ctid
          source_id: s_DJSWDhJcEvGvUHqLs1N6f7
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
        id: c_BvilT6gaxhA14fOujyGGAC
        subject_person_id: p_BXRoqqkhRQ3HBK5WyJrxYd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tclk1bFyDxbYyGcuTkNsa7
          claim_id: c_BvilT6gaxhA14fOujyGGAC
          source_id: s_DJSWDhJcEvGvUHqLs1N6f7
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
  other: []
---

# 王榦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榦（CBDB 292161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292161&o=json)
