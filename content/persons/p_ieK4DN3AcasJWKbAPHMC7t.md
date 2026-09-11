---
schema: wang-person/v1
id: p_ieK4DN3AcasJWKbAPHMC7t
status: active
merged_into: null
display_name: 王訥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vKqRfdputzT93FpE9wUe1w
        subject_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvQhCsjGyns6SJ54ryvFjo
          claim_id: c_vKqRfdputzT93FpE9wUe1w
          source_id: s_Lhy86W3h73usK4PsrRcEjc
          stance: supports
          locator: CBDB:207872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207872）
          source: &a1
            id: s_Lhy86W3h73usK4PsrRcEjc
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 207872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207872&o=json
            external_identifier: CBDB:207872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2GHDitroa27nVvNnPNG2Uf
        subject_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1414年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JG6sHajRek7QNikedh56RF
          claim_id: c_2GHDitroa27nVvNnPNG2Uf
          source_id: s_Lhy86W3h73usK4PsrRcEjc
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
        id: c_oF7U4VqA1zrLsYx5DYDMu5
        subject_person_id: p_ieK4DN3AcasJWKbAPHMC7t
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
        - id: cs_Tc8aErWMCS5sEMzqQVLv7r
          claim_id: c_oF7U4VqA1zrLsYx5DYDMu5
          source_id: s_Lhy86W3h73usK4PsrRcEjc
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
        id: c_C1e_Ja9yVjr8UdNeuEyTLP
        subject_person_id: p_vziev5XZKu5i15QAie4vMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0cWGaghEfPiKvs0wI_o9U
          claim_id: c_C1e_Ja9yVjr8UdNeuEyTLP
          source_id: s_Lhy86W3h73usK4PsrRcEjc
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vziev5XZKu5i15QAie4vMb
        status: active
        display_name: 王景深
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Dq_j1wz1L71-3aglY5rHCF
        subject_person_id: p_dVuLfnk2Yt52fAPqVKZJKs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WYiXgWey1TqEWcsCjLzeMv
          claim_id: c_Dq_j1wz1L71-3aglY5rHCF
          source_id: s_Lhy86W3h73usK4PsrRcEjc
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dVuLfnk2Yt52fAPqVKZJKs
        status: active
        display_name: 王彥質
        merged_into_person_id: null
    - claim:
        id: c_lRxL1Z63iMW7PFFzfIboCX
        subject_person_id: p_SQY42yCo8QJUvPNoGHwv8p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J4HHgVt0Syc6mzjVHbgySF
          claim_id: c_lRxL1Z63iMW7PFFzfIboCX
          source_id: s_Lhy86W3h73usK4PsrRcEjc
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SQY42yCo8QJUvPNoGHwv8p
        status: active
        display_name: 王德真
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訥 | accepted |
| birth.date | 1414年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vziev5XZKu5i15QAie4vMb | 王景深 | accepted |
| ancestors | p_dVuLfnk2Yt52fAPqVKZJKs | 王彥質 | accepted |
| ancestors | p_SQY42yCo8QJUvPNoGHwv8p | 王德真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訥（CBDB 207872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207872&o=json)
