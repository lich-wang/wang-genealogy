---
schema: wang-person/v1
id: p_fJbtRZx7s1XqSoTR8tLmBu
status: active
merged_into: null
display_name: 王珉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_czgt5saHHraKZvLPCHydEB
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
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
        - id: cs_DCBpTP9LgsBmth62bgB94c
          claim_id: c_czgt5saHHraKZvLPCHydEB
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: CBDB:202834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202834）
          source: &a1
            id: s_9t6MfGDZdGonHJQxFCm4qT
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 202834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json
            external_identifier: CBDB:202834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x664Fh4XMTDGJbzEXG9QHr
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1509年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K7FmAHLq59U2R4gvwh8Hkd
          claim_id: c_x664Fh4XMTDGJbzEXG9QHr
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kj4ysYiwHAGw9dcAf6rEpJ
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
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
        - id: cs_ehkqCmY5sND8TuDAJsYfoX
          claim_id: c_Kj4ysYiwHAGw9dcAf6rEpJ
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
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
        id: c_NoIqpx-UZbeOVJEq9r2NFJ
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jLNqDEV1TXz0X8bnszg4dv
          claim_id: c_NoIqpx-UZbeOVJEq9r2NFJ
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZC9cZs12t7iJnxdJfx5Hj4
        status: active
        display_name: 王思義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HUCpFfP4nOuZ14d-ze-m0w
        subject_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jWhyM89PP9d3eMCukjP7Hb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVQEVcuwn8xU87vL0mRHsm
          claim_id: c_HUCpFfP4nOuZ14d-ze-m0w
          source_id: s_nVrhIMPmgIm2IdKyiKAGc8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nVrhIMPmgIm2IdKyiKAGc8
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王珉妻)（CBDB 295403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295403&o=json
            external_identifier: CBDB:295403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jWhyM89PP9d3eMCukjP7Hb
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_BBtKIhvUbuNB-Rftmo_nw_
        subject_person_id: p_qDMQBGR2e3tZ2gAPo7nDfp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0B9MPrpLItaTvNScdLWepH
          claim_id: c_BBtKIhvUbuNB-Rftmo_nw_
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qDMQBGR2e3tZ2gAPo7nDfp
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_wZl33G_WJApph6WLUMIJ1h
        subject_person_id: p_ndYRneWnvH2XvWCdzDoMVi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRAV3sPJMpGLJoQYAc4oxj
          claim_id: c_wZl33G_WJApph6WLUMIJ1h
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ndYRneWnvH2XvWCdzDoMVi
        status: active
        display_name: 王銓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| birth.date | 1509年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZC9cZs12t7iJnxdJfx5Hj4 | 王思義 | accepted |
| spouses | p_jWhyM89PP9d3eMCukjP7Hb | 楊氏 | accepted |
| ancestors | p_qDMQBGR2e3tZ2gAPo7nDfp | 王政 | accepted |
| ancestors | p_ndYRneWnvH2XvWCdzDoMVi | 王銓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 202834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json)
- [中国历代人物传记资料库：楊氏(王珉妻)（CBDB 295403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295403&o=json)
