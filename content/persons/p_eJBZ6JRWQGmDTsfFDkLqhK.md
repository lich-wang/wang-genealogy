---
schema: wang-person/v1
id: p_eJBZ6JRWQGmDTsfFDkLqhK
status: active
merged_into: null
display_name: 王元善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9ACkEnuecDjcCXNR6fU1S
        subject_person_id: p_eJBZ6JRWQGmDTsfFDkLqhK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KrUvRTYf7nXCTMsgMYrg5x
          claim_id: c_w9ACkEnuecDjcCXNR6fU1S
          source_id: s_pwUwuF2wVip24djTXdkFrg
          stance: supports
          locator: CBDB:237316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237316）
          source: &a1
            id: s_pwUwuF2wVip24djTXdkFrg
            source_type: api_record
            title: 中国历代人物传记资料库：王元善（CBDB 237316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237316&o=json
            external_identifier: CBDB:237316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4m8cZ4U9bZM1ri7TiKRA5t
        subject_person_id: p_eJBZ6JRWQGmDTsfFDkLqhK
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
        - id: cs_iKYXN57FB8SzUudppZ3sji
          claim_id: c_4m8cZ4U9bZM1ri7TiKRA5t
          source_id: s_pwUwuF2wVip24djTXdkFrg
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
        id: c_1SaEvpgHEqn02z2AgqkP2U
        subject_person_id: p_eJBZ6JRWQGmDTsfFDkLqhK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KA3TG5_lBKLqfte5pqvLER
          claim_id: c_1SaEvpgHEqn02z2AgqkP2U
          source_id: s_pwUwuF2wVip24djTXdkFrg
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TvjN1nga4vdBGSvpaM82jn
        status: active
        display_name: 王彧
        merged_into_person_id: null
  other: []
---

# 王元善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TvjN1nga4vdBGSvpaM82jn | 王彧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元善（CBDB 237316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237316&o=json)
