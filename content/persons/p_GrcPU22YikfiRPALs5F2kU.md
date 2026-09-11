---
schema: wang-person/v1
id: p_GrcPU22YikfiRPALs5F2kU
status: active
merged_into: null
display_name: 王旭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cmjh5HCteZcxZ2NZrKpFVt
        subject_person_id: p_GrcPU22YikfiRPALs5F2kU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KiqqAJxQ8MXUeKGo6iY6V1
          claim_id: c_cmjh5HCteZcxZ2NZrKpFVt
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: CBDB:17838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17838）
          source: &a1
            id: s_sZPi7NxFHAWJpPui1Dt8Z2
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 17838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json
            external_identifier: CBDB:17838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gemZPYiDo1kKQBMZSigQxJ
        subject_person_id: p_GrcPU22YikfiRPALs5F2kU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63Y8nahwduq7TUSpyFosMz
          claim_id: c_gemZPYiDo1kKQBMZSigQxJ
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
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
        id: c_mbMxPM1m8OCtwe_rkuuvhe
        subject_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GrcPU22YikfiRPALs5F2kU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I_RHlH2NPFFg2WAYTo5Lax
          claim_id: c_mbMxPM1m8OCtwe_rkuuvhe
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: 宋人傳記資料索引(電子版)，629：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wEqsogkdLBrdte1KEpUFVQ
        status: active
        display_name: 王祐
        merged_into_person_id: null
  children:
    - claim:
        id: c_Y_Fi2mRiwmFY-7fsKUSIHu
        subject_person_id: p_GrcPU22YikfiRPALs5F2kU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJ89AiGQHA92A4wPSVrqzw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvgdZTudDVy31AS7bhAEVH
          claim_id: c_Y_Fi2mRiwmFY-7fsKUSIHu
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1180：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FJ89AiGQHA92A4wPSVrqzw
        status: active
        display_name: 王質
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YdgCl9uM9CfmBU7-I7cz4Y
        subject_person_id: p_5iuF56QtzML5N9vH86cANF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GrcPU22YikfiRPALs5F2kU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XcxxPe_VhvDdO4P3YOeTid
          claim_id: c_YdgCl9uM9CfmBU7-I7cz4Y
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5iuF56QtzML5N9vH86cANF
        status: active
        display_name: 王審鈞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wEqsogkdLBrdte1KEpUFVQ | 王祐 | accepted |
| children | p_FJ89AiGQHA92A4wPSVrqzw | 王質 | accepted |
| ancestors | p_5iuF56QtzML5N9vH86cANF | 王審鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 17838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json)
