---
schema: wang-person/v1
id: p_am7uRiUcAMwPgixMG5LWQu
status: active
merged_into: null
display_name: 程德班
revision: 1
cbdb_id: 100088
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_lmIf6l7TVzgomMNsRQ2MUw
        subject_person_id: p_am7uRiUcAMwPgixMG5LWQu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 程德班
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iOmP1y4a5YCCb7YYpnIaS-
          claim_id: c_lmIf6l7TVzgomMNsRQ2MUw
          source_id: s_hbUwmGDQ5ZrilyENMVOxa1
          stance: supports
          locator: CBDB:100088
          quotation: null
          interpretation_note: CBDB 明确记录的王蘭蓀配偶
          source: &a1
            id: s_hbUwmGDQ5ZrilyENMVOxa1
            source_type: api_record
            title: 中国历代人物传记资料库：程德班（CBDB 100088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100088&o=json
            external_identifier: CBDB:100088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KLFwfm1TdQeUbItxwtpKY5
        subject_person_id: p_KqrouGazuu1RV81iPa8R93
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_am7uRiUcAMwPgixMG5LWQu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AlDW6H2gcNAbHRLYP_HyeS
          claim_id: c_KLFwfm1TdQeUbItxwtpKY5
          source_id: s_hbUwmGDQ5ZrilyENMVOxa1
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1807：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KqrouGazuu1RV81iPa8R93
        status: active
        display_name: 王蘭蓀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 程德班

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 程德班 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KqrouGazuu1RV81iPa8R93 | 王蘭蓀 | accepted |

## 外部来源

- [中国历代人物传记资料库：程德班（CBDB 100088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100088&o=json)
