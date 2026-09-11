---
schema: wang-person/v1
id: p_cVHn1JNLVh2RSajB1FHgGr
status: active
merged_into: null
display_name: 王詢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mu6AYZGBJK8GpikrmXLZGL
        subject_person_id: p_cVHn1JNLVh2RSajB1FHgGr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kLn7oFYTj26e48WLRL3d6z
          claim_id: c_mu6AYZGBJK8GpikrmXLZGL
          source_id: s_UEFh77FAXd6oz73Lp3pTXt
          stance: supports
          locator: CBDB:255805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255805）
          source: &a1
            id: s_UEFh77FAXd6oz73Lp3pTXt
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 255805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255805&o=json
            external_identifier: CBDB:255805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cPCmN9ep83swENC47ektTC
        subject_person_id: p_cVHn1JNLVh2RSajB1FHgGr
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
        - id: cs_XtgCjSt37TrUPtcM7ZkVUL
          claim_id: c_cPCmN9ep83swENC47ektTC
          source_id: s_UEFh77FAXd6oz73Lp3pTXt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Yp2u1rsx3UKRhNA-S30fJq
        subject_person_id: p_cVHn1JNLVh2RSajB1FHgGr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBSFhLJ-LJpDk72wAdA_Uk
          claim_id: c_Yp2u1rsx3UKRhNA-S30fJq
          source_id: s_UEFh77FAXd6oz73Lp3pTXt
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W3GJcYQ68tdjW81oNrSGsA
        status: active
        display_name: 王恩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_W3GJcYQ68tdjW81oNrSGsA | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詢（CBDB 255805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255805&o=json)
