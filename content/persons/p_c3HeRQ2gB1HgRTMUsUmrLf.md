---
schema: wang-person/v1
id: p_c3HeRQ2gB1HgRTMUsUmrLf
status: active
merged_into: null
display_name: 王泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ly8VCFxL9Lv5zHC6CnEKkM
        subject_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ny4FN3w7qbGF3qG7PozWR7
          claim_id: c_Ly8VCFxL9Lv5zHC6CnEKkM
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
          stance: supports
          locator: CBDB:126647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126647）
          source: &a1
            id: s_WaYus5bsYAt5fbzyJEdfbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 126647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126647&o=json
            external_identifier: CBDB:126647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_feSomuCEpneofCKdHDV2yn
        subject_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
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
        - id: cs_Cw2QzHL5QkW5dhHtVJ8Qk8
          claim_id: c_feSomuCEpneofCKdHDV2yn
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
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
        id: c_vXIfYme1Mzvxl3WUt_NElv
        subject_person_id: p_D2gWNUt9uxgcP7sr6nNjBM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvdmSx7y1RT3v8rhxNtASs
          claim_id: c_vXIfYme1Mzvxl3WUt_NElv
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第七十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D2gWNUt9uxgcP7sr6nNjBM
        status: active
        display_name: 王復政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ztoipjYwidjr8O1IB7LeqP
        subject_person_id: p_NgFQ5Ve8Hj3c6F7E857w8s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pU56TnCZ3cdEwh4SZ7xVc
          claim_id: c_ztoipjYwidjr8O1IB7LeqP
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第七十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NgFQ5Ve8Hj3c6F7E857w8s
        status: active
        display_name: 王文表
        merged_into_person_id: null
    - claim:
        id: c_Q3b8zbOtGWAS8fR0FcmIl4
        subject_person_id: p_weCDMTk8jRHv3CDvqJNajC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_c3HeRQ2gB1HgRTMUsUmrLf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8a0HOR9qT1e8Ugnw9OXBr
          claim_id: c_Q3b8zbOtGWAS8fR0FcmIl4
          source_id: s_WaYus5bsYAt5fbzyJEdfbZ
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第七十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_weCDMTk8jRHv3CDvqJNajC
        status: active
        display_name: 王秉新
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D2gWNUt9uxgcP7sr6nNjBM | 王復政 | accepted |
| ancestors | p_NgFQ5Ve8Hj3c6F7E857w8s | 王文表 | accepted |
| ancestors | p_weCDMTk8jRHv3CDvqJNajC | 王秉新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 126647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126647&o=json)
