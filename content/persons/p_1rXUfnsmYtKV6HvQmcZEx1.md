---
schema: wang-person/v1
id: p_1rXUfnsmYtKV6HvQmcZEx1
status: active
merged_into: null
display_name: 王之屏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9nb79Hp9DTmoyTki7A3FJ
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWUQFD4zUF8GTJJxNUFGP4
          claim_id: c_D9nb79Hp9DTmoyTki7A3FJ
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: CBDB:205448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205448）
          source: &a1
            id: s_Ueah6NxBLTeksqUa8dTE5L
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 205448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json
            external_identifier: CBDB:205448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QG69UqyFnkFQQPR9VsynJu
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbnunqBUqMHLvojLDq3QRS
          claim_id: c_QG69UqyFnkFQQPR9VsynJu
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
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
        id: c_PDS5MQyBKJGxU41xA5241m
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
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
        - id: cs_3PXCJwHufiGZ8oQuxpnH3M
          claim_id: c_PDS5MQyBKJGxU41xA5241m
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
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
        id: c_beOTgQAVDiG0WLw2FLIfEG
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_p_9JpsTAP1l-5SZDEJPe
          claim_id: c_beOTgQAVDiG0WLw2FLIfEG
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L1K6UGcPzEpvk1UMcnFzF5
        status: active
        display_name: 王崇儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pIR0V7Al4qUIe0QsOXdPrQ
        subject_person_id: p_wjQjQdSMH1jr1xFFHBSxDy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBN61AcY3h5Veu-AzehrAJ
          claim_id: c_pIR0V7Al4qUIe0QsOXdPrQ
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wjQjQdSMH1jr1xFFHBSxDy
        status: active
        display_name: 王舉
        merged_into_person_id: null
    - claim:
        id: c_uCuw4YBNZhhChIowmMl7z8
        subject_person_id: p_mWQzXBk4QWpHyLxDXbMW2R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsZOen7fp6QTLZCgjkr2jX
          claim_id: c_uCuw4YBNZhhChIowmMl7z8
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mWQzXBk4QWpHyLxDXbMW2R
        status: active
        display_name: 王環
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之屏 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1K6UGcPzEpvk1UMcnFzF5 | 王崇儒 | accepted |
| ancestors | p_wjQjQdSMH1jr1xFFHBSxDy | 王舉 | accepted |
| ancestors | p_mWQzXBk4QWpHyLxDXbMW2R | 王環 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之屏（CBDB 205448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json)
