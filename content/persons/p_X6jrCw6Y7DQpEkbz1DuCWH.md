---
schema: wang-person/v1
id: p_X6jrCw6Y7DQpEkbz1DuCWH
status: active
merged_into: null
display_name: 王燾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rsLU1iDH4K8s1fBaPzNHxM
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5ugX7wksQ959jKk3FSaLB7
          claim_id: c_rsLU1iDH4K8s1fBaPzNHxM
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: CBDB:33017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33017）
          source: &a1
            id: s_21pL2VwsaWo8U6ejWRHnnV
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 33017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33017&o=json
            external_identifier: CBDB:33017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C1EVLvGqootRo6TAWJsSV7
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
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
        - id: cs_JuMXR557VptmLceA41DWHD
          claim_id: c_C1EVLvGqootRo6TAWJsSV7
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
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
        id: c_AnFZ_SDPgtOHS5DW6DkQnD
        subject_person_id: p_iu1jFRrXCA8214YaBQfsUS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8XvPKvJOYFOxmD_XAmCfh
          claim_id: c_AnFZ_SDPgtOHS5DW6DkQnD
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: CBDB 双向互证（父 王茂時 ⇄ 子 王燾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iu1jFRrXCA8214YaBQfsUS
        status: active
        display_name: 王茂时
        merged_into_person_id: null
  children:
    - claim:
        id: c_JrBPVEO849w6zSSX_qJrOp
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8dWztfUudwJZAxK2m2NEME
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Oj4tthTlDn1mIQxyVyRsVF
          claim_id: c_JrBPVEO849w6zSSX_qJrOp
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8dWztfUudwJZAxK2m2NEME
        status: active
        display_name: 王遘
        merged_into_person_id: null
    - claim:
        id: c_l-TbceSt2Tvnkbxj_9F1V_
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cSoLRZiU46GLCvuGLWAUgN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qwzqkj_d6t7fRsFbntXmu9
          claim_id: c_l-TbceSt2Tvnkbxj_9F1V_
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cSoLRZiU46GLCvuGLWAUgN
        status: active
        display_name: 王遂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_nsTJ04kCeJKPHV3a2fY-t7
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kW6BHpFnPbBsA8JbJBRAGy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PJjGKawDVC0vWEwbn7Ceb
          claim_id: c_nsTJ04kCeJKPHV3a2fY-t7
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 15：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kW6BHpFnPbBsA8JbJBRAGy
        status: active
        display_name: 王師正
        merged_into_person_id: null
  other: []
---

# 王燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燾 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iu1jFRrXCA8214YaBQfsUS | 王茂时 | accepted |
| children | p_8dWztfUudwJZAxK2m2NEME | 王遘 | accepted |
| children | p_cSoLRZiU46GLCvuGLWAUgN | 王遂 | accepted |
| descendants | p_kW6BHpFnPbBsA8JbJBRAGy | 王師正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 33017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33017&o=json)
