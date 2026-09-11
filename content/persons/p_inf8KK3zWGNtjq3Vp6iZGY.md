---
schema: wang-person/v1
id: p_inf8KK3zWGNtjq3Vp6iZGY
status: active
merged_into: null
display_name: 王珉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4LzcQEaAbfj45D1Us7uEm
        subject_person_id: p_inf8KK3zWGNtjq3Vp6iZGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_syqjGAPKY6sf9wpwfbk7BK
          claim_id: c_a4LzcQEaAbfj45D1Us7uEm
          source_id: s_MXog5EtB28LwySGb7BCbUo
          stance: supports
          locator: CBDB:314297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314297）
          source: &a1
            id: s_MXog5EtB28LwySGb7BCbUo
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 314297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314297&o=json
            external_identifier: CBDB:314297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BfAc3SDoNE4fGTvuzzMJkF
        subject_person_id: p_inf8KK3zWGNtjq3Vp6iZGY
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
        - id: cs_ic52W9Tq43a2wfYLXrMsKP
          claim_id: c_BfAc3SDoNE4fGTvuzzMJkF
          source_id: s_MXog5EtB28LwySGb7BCbUo
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
        id: c_HRvGvlDPZPcm2X2AYJARgm
        subject_person_id: p_inf8KK3zWGNtjq3Vp6iZGY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwxm3cyzJ6J9P5dzrKP_SL
          claim_id: c_HRvGvlDPZPcm2X2AYJARgm
          source_id: s_MXog5EtB28LwySGb7BCbUo
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qb7zDu2gwfuaD8yT1H3cXc
        status: active
        display_name: 王元春
        merged_into_person_id: null
  other: []
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qb7zDu2gwfuaD8yT1H3cXc | 王元春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 314297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314297&o=json)
