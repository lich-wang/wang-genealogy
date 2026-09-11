---
schema: wang-person/v1
id: p_GDF8GGeEC92U99D6Cq7svx
status: active
merged_into: null
display_name: 王克端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QkiGJJDZKdYQT1P3DCkRtJ
        subject_person_id: p_GDF8GGeEC92U99D6Cq7svx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kWN7zTQGGAHBGEk3Noxn3s
          claim_id: c_QkiGJJDZKdYQT1P3DCkRtJ
          source_id: s_z53XWpYshRPUC7mMJ3bnzv
          stance: supports
          locator: CBDB:284117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284117）
          source: &a1
            id: s_z53XWpYshRPUC7mMJ3bnzv
            source_type: api_record
            title: 中国历代人物传记资料库：王克端（CBDB 284117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284117&o=json
            external_identifier: CBDB:284117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sgY9EQWv1QBc5V5DY3DR5B
        subject_person_id: p_GDF8GGeEC92U99D6Cq7svx
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
        - id: cs_zs1MvThGZXETC5C5GA8gZt
          claim_id: c_sgY9EQWv1QBc5V5DY3DR5B
          source_id: s_z53XWpYshRPUC7mMJ3bnzv
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
        id: c_t0PZhuLkHp9wwHD_xqpMCy
        subject_person_id: p_GDF8GGeEC92U99D6Cq7svx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R4KxtYgvLEEdwk4Mp4v_xF
          claim_id: c_t0PZhuLkHp9wwHD_xqpMCy
          source_id: s_z53XWpYshRPUC7mMJ3bnzv
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GBfHvW9j1wmH7AtQd6s7JQ
        status: active
        display_name: 王化
        merged_into_person_id: null
  other: []
---

# 王克端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克端 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GBfHvW9j1wmH7AtQd6s7JQ | 王化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克端（CBDB 284117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284117&o=json)
