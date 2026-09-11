---
schema: wang-person/v1
id: p_CxY5QtqK8BuHWqQgSQqbEb
status: active
merged_into: null
display_name: 王艮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FUt9H443JhNALABdxVF2GB
        subject_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王艮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQiv729UfeTARmheQQ7R1h
          claim_id: c_FUt9H443JhNALABdxVF2GB
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
          stance: supports
          locator: CBDB:66624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66624）
          source: &a1
            id: s_N2gM7RZc4LBqAHUJjH3STW
            source_type: api_record
            title: 中国历代人物传记资料库：王艮（CBDB 66624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66624&o=json
            external_identifier: CBDB:66624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4WHvXidYgWwE2fEmnBKXRR
        subject_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ejFMvPVc2vFeHecQLwqXmP
          claim_id: c_4WHvXidYgWwE2fEmnBKXRR
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
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
        id: c_HybeTXRDG258Ke1YuYF8Kv
        subject_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
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
        - id: cs_gBGtqPqkn8VRH9Cot5UMK8
          claim_id: c_HybeTXRDG258Ke1YuYF8Kv
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
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
        id: c_SDgyAx0F-PB5AVrz7DdId8
        subject_person_id: p_9yUsLx8gKe9km4PvyMBpGL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ljb8X86wJFxnm39AshbqcH
          claim_id: c_SDgyAx0F-PB5AVrz7DdId8
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9yUsLx8gKe9km4PvyMBpGL
        status: active
        display_name: 王期尹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TaOksfS6J2tmCvf0qLnxov
        subject_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N556HvNBM4Y879sPQ11DB9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c_D1tQ5IpHxB028cLERqf2
          claim_id: c_TaOksfS6J2tmCvf0qLnxov
          source_id: s_lt5wloLw0FOnmzp3s1q2QV
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lt5wloLw0FOnmzp3s1q2QV
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王艮妻)（CBDB 253920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253920&o=json
            external_identifier: CBDB:253920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N556HvNBM4Y879sPQ11DB9
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_rBBpWT-WDq28VPkr7FhGdS
        subject_person_id: p_b1fbyWJPGsq5Ne5d22xDP8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__R5AoeV8kQDKrQsOEY_Z9Q
          claim_id: c_rBBpWT-WDq28VPkr7FhGdS
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b1fbyWJPGsq5Ne5d22xDP8
        status: active
        display_name: 王孟韓
        merged_into_person_id: null
    - claim:
        id: c_b1UuNpP9OarKnyB5o5BE8u
        subject_person_id: p_KxCAbnXdrix7b6U1czoUqg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nERHWSp-0grG4tVJVX-uE
          claim_id: c_b1UuNpP9OarKnyB5o5BE8u
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KxCAbnXdrix7b6U1czoUqg
        status: active
        display_name: 王與耕
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王艮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王艮 | accepted |
| death.date | 1402年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9yUsLx8gKe9km4PvyMBpGL | 王期尹 | accepted |
| spouses | p_N556HvNBM4Y879sPQ11DB9 | 劉氏 | accepted |
| ancestors | p_b1fbyWJPGsq5Ne5d22xDP8 | 王孟韓 | accepted |
| ancestors | p_KxCAbnXdrix7b6U1czoUqg | 王與耕 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王艮妻)（CBDB 253920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253920&o=json)
- [中国历代人物传记资料库：王艮（CBDB 66624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66624&o=json)
