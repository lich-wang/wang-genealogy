---
schema: wang-person/v1
id: p_4A5DBME64j8hrumwV1y25Y
status: active
merged_into: null
display_name: 王錫命
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SHjn9QJDZw4camwswvqiz1
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WXST6jmkZPcu7sXKGGmC25
          claim_id: c_SHjn9QJDZw4camwswvqiz1
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
          stance: supports
          locator: CBDB:204975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204975）
          source: &a1
            id: s_aHRF3Xb81XeBz8B8Aq2qW2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫命（CBDB 204975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204975&o=json
            external_identifier: CBDB:204975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RkGFB3KXQjPTzKDWXoirvE
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cWHARungYjqPbnChsbCgS
          claim_id: c_RkGFB3KXQjPTzKDWXoirvE
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
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
        id: c_MExuyJidtKzskNG2bcMEPy
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
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
        - id: cs_H7UGBB6ukkWQYECyKdvy3B
          claim_id: c_MExuyJidtKzskNG2bcMEPy
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
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
        id: c_ib03nRmyazIGPAXUKcohGP
        subject_person_id: p_9HDvakpcay3o3koSS4dhyb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4A5DBME64j8hrumwV1y25Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2v1F8ff9ym1OLLqRj5OLF
          claim_id: c_ib03nRmyazIGPAXUKcohGP
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第四十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9HDvakpcay3o3koSS4dhyb
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VcAyt06QowUf79B6lFrZ4X
        subject_person_id: p_mJ1oWX1AnQGq5YCNtBdQ2y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A5DBME64j8hrumwV1y25Y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pFjE2dXRNrT_kXCVHaYzh2
          claim_id: c_VcAyt06QowUf79B6lFrZ4X
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第四十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mJ1oWX1AnQGq5YCNtBdQ2y
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_5bMkI7ihTpsiwlI98CLIw1
        subject_person_id: p_jrVkcixySdzn2MbH6w2apg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4A5DBME64j8hrumwV1y25Y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w0N3wsfW1aiA2ZpZm0HW_e
          claim_id: c_5bMkI7ihTpsiwlI98CLIw1
          source_id: s_aHRF3Xb81XeBz8B8Aq2qW2
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第四十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jrVkcixySdzn2MbH6w2apg
        status: active
        display_name: 王玭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王錫命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫命 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9HDvakpcay3o3koSS4dhyb | 王鸞 | accepted |
| ancestors | p_mJ1oWX1AnQGq5YCNtBdQ2y | 王欽 | accepted |
| ancestors | p_jrVkcixySdzn2MbH6w2apg | 王玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錫命（CBDB 204975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204975&o=json)
