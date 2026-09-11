---
schema: wang-person/v1
id: p_aJQ3escM6jBxZ8EP2idom6
status: active
merged_into: null
display_name: 王玉汝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPCBF31aG97Ry2EE5ytBBE
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3TeMfv7aYvjDMj4MEExaqX
          claim_id: c_jPCBF31aG97Ry2EE5ytBBE
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: CBDB:202795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202795）
          source: &a1
            id: s_KnMS3iSfMsUJhjJLWsaYyT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 202795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json
            external_identifier: CBDB:202795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FH5b9rWC32ySSHLAxTJF2J
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvtWHANDDhQWEFK9T3q24k
          claim_id: c_FH5b9rWC32ySSHLAxTJF2J
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
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
        id: c_9qbxjLuHzLcE7iBP2UqEN3
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
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
        - id: cs_5gGhk2rkTFcZTSii4a6kPH
          claim_id: c_9qbxjLuHzLcE7iBP2UqEN3
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
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
        id: c_z81Pcfo5JJEnNISP9eu5ll
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eLQNn25BSZNhp9859vDP5
          claim_id: c_z81Pcfo5JJEnNISP9eu5ll
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DkL4KAP3Vyt4DGq87NkgHu
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  children:
    - claim:
        id: c_VBMLvQk7e9bdWkQT1zbXu5
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i4PxeuDCARRognnmhzQLN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p4r0hZYJ_sgjeaoRdGmYoO
          claim_id: c_VBMLvQk7e9bdWkQT1zbXu5
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i4PxeuDCARRognnmhzQLN6
        status: active
        display_name: 王所
        merged_into_person_id: null
    - claim:
        id: c_K7ipHaBFCwFGzWZ-ImtecX
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbRX9VDen2ibv9yFfhqCNU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLuvw_r1RNRXoPzc8YgP42
          claim_id: c_K7ipHaBFCwFGzWZ-ImtecX
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bbRX9VDen2ibv9yFfhqCNU
        status: active
        display_name: 王前
        merged_into_person_id: null
    - claim:
        id: c_zCMFgrLkn9aR9SruTRcZB4
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eB9fimtnJCXW45zJ6gbMuD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGY398h8h_72NIZv34gpGz
          claim_id: c_zCMFgrLkn9aR9SruTRcZB4
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eB9fimtnJCXW45zJ6gbMuD
        status: active
        display_name: 王在
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JSGLjUB3q0UbSV2W0Gg1B8
        subject_person_id: p_RkUXHPuBh1QAWmMcbEHgCo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGoq2CSguwGs_IXjYGj33e
          claim_id: c_JSGLjUB3q0UbSV2W0Gg1B8
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RkUXHPuBh1QAWmMcbEHgCo
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_Vm9QbJHAVewhG9rvE10ttb
        subject_person_id: p_e2QAybS7Rx5BKwEFZeMJDa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_doCPYYR9ImqLDB_kNY-XaW
          claim_id: c_Vm9QbJHAVewhG9rvE10ttb
          source_id: s_KnMS3iSfMsUJhjJLWsaYyT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e2QAybS7Rx5BKwEFZeMJDa
        status: active
        display_name: 王貞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玉汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉汝 | accepted |
| birth.date | 1488年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DkL4KAP3Vyt4DGq87NkgHu | 王尚學 | accepted |
| children | p_i4PxeuDCARRognnmhzQLN6 | 王所 | accepted |
| children | p_bbRX9VDen2ibv9yFfhqCNU | 王前 | accepted |
| children | p_eB9fimtnJCXW45zJ6gbMuD | 王在 | accepted |
| ancestors | p_RkUXHPuBh1QAWmMcbEHgCo | 王純 | accepted |
| ancestors | p_e2QAybS7Rx5BKwEFZeMJDa | 王貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉汝（CBDB 202795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202795&o=json)
