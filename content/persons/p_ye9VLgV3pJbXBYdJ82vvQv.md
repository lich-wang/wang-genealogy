---
schema: wang-person/v1
id: p_ye9VLgV3pJbXBYdJ82vvQv
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MUG4iou1mCGDEd1uF93gH
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mEThSKGjL4gDZm6g3srtN
          claim_id: c_7MUG4iou1mCGDEd1uF93gH
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: CBDB:208053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208053）
          source: &a1
            id: s_3xLAig97UWbpTTVBBVEMck
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 208053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json
            external_identifier: CBDB:208053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fj6SCzdszNKJBq57h1CZaJ
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1403年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaEhN6f3MzBPaqTsKPXQ4c
          claim_id: c_fj6SCzdszNKJBq57h1CZaJ
          source_id: s_3xLAig97UWbpTTVBBVEMck
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
        id: c_s4oFx5zDpb19q12yHoFFcj
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
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
        - id: cs_4vyjAq7o2pvJACJMKLvpzW
          claim_id: c_s4oFx5zDpb19q12yHoFFcj
          source_id: s_3xLAig97UWbpTTVBBVEMck
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
        id: c_wJBoTqz5T89tRNVQSzN0Xz
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivZD-1W9C20pC7hwxrD-87
          claim_id: c_wJBoTqz5T89tRNVQSzN0Xz
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        status: active
        display_name: 王宗麒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jiW_6ND5irjiJXvXOGgMWo
        subject_person_id: p_GdkwrriQrXAGgdsuSrbHZQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkDESKNwpuzdqiNZ44_iJM
          claim_id: c_jiW_6ND5irjiJXvXOGgMWo
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GdkwrriQrXAGgdsuSrbHZQ
        status: active
        display_name: 王榮卿
        merged_into_person_id: null
    - claim:
        id: c_PoB_d20Lte0zCwx5_Ag9AJ
        subject_person_id: p_w3a1GFMuNLGG9tjSSVXjC4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkHthUY5hEAJWvglAfiK4Q
          claim_id: c_PoB_d20Lte0zCwx5_Ag9AJ
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w3a1GFMuNLGG9tjSSVXjC4
        status: active
        display_name: 王安性
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| birth.date | 1403年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QyVQQbt4VbA4Hx7YZ8Kozc | 王宗麒 | accepted |
| ancestors | p_GdkwrriQrXAGgdsuSrbHZQ | 王榮卿 | accepted |
| ancestors | p_w3a1GFMuNLGG9tjSSVXjC4 | 王安性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 208053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json)
