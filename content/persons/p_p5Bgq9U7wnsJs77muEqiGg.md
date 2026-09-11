---
schema: wang-person/v1
id: p_p5Bgq9U7wnsJs77muEqiGg
status: active
merged_into: null
display_name: 王履亨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jN2g7cX8bHvMyxgRLbRrji
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2X1ht1xPzxJMLTvrFgs4Fn
          claim_id: c_jN2g7cX8bHvMyxgRLbRrji
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
          stance: supports
          locator: CBDB:69443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69443）
          source: &a1
            id: s_XP6yeB5bki4Uje1WNxPTGj
            source_type: api_record
            title: 中国历代人物传记资料库：王履亨（CBDB 69443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69443&o=json
            external_identifier: CBDB:69443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WmC2LausjyPdZiL2FXwo3o
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1788年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5hnNRMrkMH6qgeq7NuM2v
          claim_id: c_WmC2LausjyPdZiL2FXwo3o
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
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
        id: c_7Muy2QFv3EEoiv5mn7G2xF
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k4irmWCkvzrLUxGLcH1Mst
          claim_id: c_7Muy2QFv3EEoiv5mn7G2xF
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
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
        id: c_S8GK4pdSPvyEt2ZRDLJWp6
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_je3TmzHG2BFAGQSNWkDWgA
          claim_id: c_S8GK4pdSPvyEt2ZRDLJWp6
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
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
        id: c_zFI108HHb48hqAl_VRhUlb
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o8ekPajcAzxRbPTTH8DZgk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_54_rG25jIhKum5Jo5t81iD
          claim_id: c_zFI108HHb48hqAl_VRhUlb
          source_id: s_9ZJPo11kpPhfEQfQk26qmb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13153：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9ZJPo11kpPhfEQfQk26qmb
            source_type: api_record
            title: 中国历代人物传记资料库：王志偉（CBDB 526968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526968&o=json
            external_identifier: CBDB:526968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o8ekPajcAzxRbPTTH8DZgk
        status: active
        display_name: 王志偉
        merged_into_person_id: null
    - claim:
        id: c_bgXFBFz8nnGOra3ZZNti6n
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XwJujRc3mP4DpA3whzZo9X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uwJEVBUx2YlUBI4zoAR_bF
          claim_id: c_bgXFBFz8nnGOra3ZZNti6n
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13153：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XwJujRc3mP4DpA3whzZo9X
        status: active
        display_name: 王志信
        merged_into_person_id: null
    - claim:
        id: c_HP-UcIBspXAy3l6e2_Eifr
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PCaRNnmgun6m7zp9kLVRyR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S3GmD06Qyjd9d47o9zrXIi
          claim_id: c_HP-UcIBspXAy3l6e2_Eifr
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13153：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PCaRNnmgun6m7zp9kLVRyR
        status: active
        display_name: 王志修
        merged_into_person_id: null
    - claim:
        id: c_pCtOBnEAbcf_CTgMiZeqAM
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QJ6cYJsxNTMSB5ovszTk99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nh2a_fW01QS9NLcbZTNoF
          claim_id: c_pCtOBnEAbcf_CTgMiZeqAM
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13153：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QJ6cYJsxNTMSB5ovszTk99
        status: active
        display_name: 王志儀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履亨 | accepted |
| birth.date | 1788年 | accepted |
| death.date | 1860年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_o8ekPajcAzxRbPTTH8DZgk | 王志偉 | accepted |
| children | p_XwJujRc3mP4DpA3whzZo9X | 王志信 | accepted |
| children | p_PCaRNnmgun6m7zp9kLVRyR | 王志修 | accepted |
| children | p_QJ6cYJsxNTMSB5ovszTk99 | 王志儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履亨（CBDB 69443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69443&o=json)
- [中国历代人物传记资料库：王志偉（CBDB 526968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526968&o=json)
