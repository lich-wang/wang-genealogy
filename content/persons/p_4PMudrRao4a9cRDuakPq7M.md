---
schema: wang-person/v1
id: p_4PMudrRao4a9cRDuakPq7M
status: active
merged_into: null
display_name: 王同讚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gygj79qcyiZqgJ9d685A6z
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FM6CYJSwxLQjDgL6KBMF9g
          claim_id: c_gygj79qcyiZqgJ9d685A6z
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: CBDB:204969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204969）
          source: &a1
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7dJ7M2KQN3V9tACFiM6UVw
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQkGoDGyF8CeSiW6QNApQS
          claim_id: c_7dJ7M2KQN3V9tACFiM6UVw
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
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
        id: c_c9sMYCd9bU2BTBsPdreqyQ
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
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
        - id: cs_VQM2Z7nn8QGApFrbs2SYTU
          claim_id: c_c9sMYCd9bU2BTBsPdreqyQ
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
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
        id: c_zP701nQiwF-tvqPRBPLgIG
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_je-aZmrd42koe1C5etlFiH
          claim_id: c_zP701nQiwF-tvqPRBPLgIG
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BQt5KMQt85phWutCQLQcnd
        status: active
        display_name: 王叔中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8BiRpqd0WOgYT-r5ewqBsH
        subject_person_id: p_Mb2RND5RPdkBbHc3mLAQVY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFrngecIRrLCn9sgUs6cXL
          claim_id: c_8BiRpqd0WOgYT-r5ewqBsH
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mb2RND5RPdkBbHc3mLAQVY
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_4EL9oWJldy48HroD4doOiQ
        subject_person_id: p_nuYPnF5g2SSrFSB8SSV1Bo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xHh5B7oe6QQj6HCyNCNkv
          claim_id: c_4EL9oWJldy48HroD4doOiQ
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nuYPnF5g2SSrFSB8SSV1Bo
        status: active
        display_name: 王綱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王同讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同讚 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BQt5KMQt85phWutCQLQcnd | 王叔中 | accepted |
| ancestors | p_Mb2RND5RPdkBbHc3mLAQVY | 王寰 | accepted |
| ancestors | p_nuYPnF5g2SSrFSB8SSV1Bo | 王綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)
