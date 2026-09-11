---
schema: wang-person/v1
id: p_4i1wPqBamEzau4243mF8PX
status: active
merged_into: null
display_name: 王洧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7PdsyfB5SzsvCzxPFY4w8
        subject_person_id: p_4i1wPqBamEzau4243mF8PX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ocUZoE95oi73FHGwzxFPih
          claim_id: c_F7PdsyfB5SzsvCzxPFY4w8
          source_id: s_9uptntn7WELuSF1sq5u9Ln
          stance: supports
          locator: CBDB:222714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222714）
          source: &a1
            id: s_9uptntn7WELuSF1sq5u9Ln
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 222714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222714&o=json
            external_identifier: CBDB:222714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSqGHLoeGqGgvDvqG7t3GL
        subject_person_id: p_4i1wPqBamEzau4243mF8PX
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
        - id: cs_2t2thjBVnAK8bAaUYDMZZQ
          claim_id: c_LSqGHLoeGqGgvDvqG7t3GL
          source_id: s_9uptntn7WELuSF1sq5u9Ln
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
        id: c_X5qYvisdd_iIwjOC9thXZI
        subject_person_id: p_4i1wPqBamEzau4243mF8PX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dS2fybT134JWfvQgxwSUXh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsmKvr5ljLepPEBep3iWPE
          claim_id: c_X5qYvisdd_iIwjOC9thXZI
          source_id: s_9uptntn7WELuSF1sq5u9Ln
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dS2fybT134JWfvQgxwSUXh
        status: active
        display_name: 王祺
        merged_into_person_id: null
  other: []
---

# 王洧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dS2fybT134JWfvQgxwSUXh | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洧（CBDB 222714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222714&o=json)
