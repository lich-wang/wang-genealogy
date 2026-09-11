---
schema: wang-person/v1
id: p_1R27M2czAahiFDCMUScN43
status: active
merged_into: null
display_name: 王京
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RM1sxKmkwbQzZABqoJ41x2
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1tdCk8ZfqoGjGBUjPygPqj
          claim_id: c_RM1sxKmkwbQzZABqoJ41x2
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: CBDB:141020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141020）
          source: &a1
            id: s_gSvbm3ZseREEmUhYMheei9
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 141020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json
            external_identifier: CBDB:141020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aupPtVJ5buzWy5ZqsXm7FG
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 687年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31UaNfqx4996wLaoKfB5Fy
          claim_id: c_aupPtVJ5buzWy5ZqsXm7FG
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H43AK7VWczpBHw4w3c5dhL
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iG7vzvw5Ke5oFsPqdgNuoy
          claim_id: c_H43AK7VWczpBHw4w3c5dhL
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xKur32vYQTdwDwox5GdEYM
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNptXitfLuobBU6bc17fGC
          claim_id: c_xKur32vYQTdwDwox5GdEYM
          source_id: s_gSvbm3ZseREEmUhYMheei9
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
        id: c_Qphj8CuRtDIwbiCltm3Ay1
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1R27M2czAahiFDCMUScN43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RQ_ozHZUwSkmqVHH32M9DD
          claim_id: c_Qphj8CuRtDIwbiCltm3Ay1
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 216：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DSKsWKJmH5oHVZyhn4Ad7m
        status: active
        display_name: 王瑒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LFbjukY6cbULQ1YEbXp6AA
        subject_person_id: p_S8HLtFDDBHcXVtx11UNHQB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1R27M2czAahiFDCMUScN43
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KT6mBK9BKVcUpSvF6WF0sz
          claim_id: c_LFbjukY6cbULQ1YEbXp6AA
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 216：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S8HLtFDDBHcXVtx11UNHQB
        status: active
        display_name: 王道質
        merged_into_person_id: null
    - claim:
        id: c_QSnYrJIx3vNQxNwahA2BBE
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1R27M2czAahiFDCMUScN43
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3BshL6WNg5KrjHIRcpZZR
          claim_id: c_QSnYrJIx3vNQxNwahA2BBE
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 216：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aMH6LTAy41QNB3jZAPp6oX
        status: active
        display_name: 王仙客
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 687年 | accepted |
| death.date | 752年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DSKsWKJmH5oHVZyhn4Ad7m | 王瑒 | accepted |
| ancestors | p_S8HLtFDDBHcXVtx11UNHQB | 王道質 | accepted |
| ancestors | p_aMH6LTAy41QNB3jZAPp6oX | 王仙客 | accepted |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 141020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json)
