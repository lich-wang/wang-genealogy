---
schema: wang-person/v1
id: p_jbX85mkqDQkzj4JgECnsYm
status: active
merged_into: null
display_name: 王政君
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cQbhjkvqvxNdoYEbKHn6XM
        subject_person_id: p_jbX85mkqDQkzj4JgECnsYm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政君
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CynbBhpSZprdWMPpr6cCsK
          claim_id: c_cQbhjkvqvxNdoYEbKHn6XM
          source_id: s_UjpzJUQKYhB1TnDbKQPBN3
          stance: supports
          locator: CBDB:135028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135028）
          source: &a1
            id: s_UjpzJUQKYhB1TnDbKQPBN3
            source_type: api_record
            title: 中国历代人物传记资料库：王政君（CBDB 135028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135028&o=json
            external_identifier: CBDB:135028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4v3mQ2RbLz2egv2FWg2Fyh
        subject_person_id: p_jbX85mkqDQkzj4JgECnsYm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vBuGs44ANiAdSc8jauV3JV
          claim_id: c_4v3mQ2RbLz2egv2FWg2Fyh
          source_id: s_UjpzJUQKYhB1TnDbKQPBN3
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
  spouses:
    - claim:
        id: c_DP6Tflyz8gGnuR9j6y7ytY
        subject_person_id: p_jbX85mkqDQkzj4JgECnsYm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uKaMLxEP9pJu7gJCicb8eT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9DeTv3R7IOcJCfWeP_Ioz
          claim_id: c_DP6Tflyz8gGnuR9j6y7ytY
          source_id: s_UjpzJUQKYhB1TnDbKQPBN3
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2700：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uKaMLxEP9pJu7gJCicb8eT
        status: active
        display_name: 劉奭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王政君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政君 | accepted |
| bio.summary | CBDB 记载为西漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uKaMLxEP9pJu7gJCicb8eT | 劉奭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政君（CBDB 135028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135028&o=json)
