---
schema: wang-person/v1
id: p_E7LZ9JqaeFU8tKfb1vvmx1
status: active
merged_into: null
display_name: 王大用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfoESWim8tGK47tFgUJ5jL
        subject_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LVEPADXcoe4hSqCQQimyP3
          claim_id: c_nfoESWim8tGK47tFgUJ5jL
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
          stance: supports
          locator: CBDB:205680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205680）
          source: &a1
            id: s_TuCs12u1K8NYTgGHWZ2uhf
            source_type: api_record
            title: 中国历代人物传记资料库：王大用（CBDB 205680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205680&o=json
            external_identifier: CBDB:205680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wAk8SCDK6CUx1BVY8vsMck
        subject_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpsabVMGWk9fXpzDFyAu7V
          claim_id: c_wAk8SCDK6CUx1BVY8vsMck
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
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
        id: c_14U82W4oQBdmR5iLVFE8hS
        subject_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
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
        - id: cs_waQ5yhSRiaesQUsZ6Hzy1m
          claim_id: c_14U82W4oQBdmR5iLVFE8hS
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
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
        id: c_QkAFJ6qFOMD1TKdPlF8f-5
        subject_person_id: p_yLx83RnHcixF3ib2M1YL7h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKQLEK9aExlqwyq4JPBSHM
          claim_id: c_QkAFJ6qFOMD1TKdPlF8f-5
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yLx83RnHcixF3ib2M1YL7h
        status: active
        display_name: 王堂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_SR4znXUvSvcx9iLhZjXlL_
        subject_person_id: p_zNUDBjJ3ojX2dNifSToFN7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bezg4y31MyzJCekia8Emj0
          claim_id: c_SR4znXUvSvcx9iLhZjXlL_
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zNUDBjJ3ojX2dNifSToFN7
        status: active
        display_name: 王成
        merged_into_person_id: null
    - claim:
        id: c_8_WKeo-T7Je2wAtfYRXkvo
        subject_person_id: p_LPVSMU6MUQo1EEcVxJXp52
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E7LZ9JqaeFU8tKfb1vvmx1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IGRqrFFDo6zNSGMF36DuUo
          claim_id: c_8_WKeo-T7Je2wAtfYRXkvo
          source_id: s_TuCs12u1K8NYTgGHWZ2uhf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPVSMU6MUQo1EEcVxJXp52
        status: active
        display_name: 王山
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王大用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大用 | accepted |
| birth.date | 1528年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yLx83RnHcixF3ib2M1YL7h | 王堂 | accepted |
| ancestors | p_zNUDBjJ3ojX2dNifSToFN7 | 王成 | accepted |
| ancestors | p_LPVSMU6MUQo1EEcVxJXp52 | 王山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大用（CBDB 205680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205680&o=json)
