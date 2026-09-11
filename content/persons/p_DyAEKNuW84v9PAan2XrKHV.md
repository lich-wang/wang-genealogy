---
schema: wang-person/v1
id: p_DyAEKNuW84v9PAan2XrKHV
status: active
merged_into: null
display_name: 王遵訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oASwRDstb9GXxdgdMf7PGh
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cr7zBNXs4VaoLgMCGMaY2L
          claim_id: c_oASwRDstb9GXxdgdMf7PGh
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: CBDB:206844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206844）
          source: &a1
            id: s_WRsNJN9orzVPHqFQwefU8e
            source_type: api_record
            title: 中国历代人物传记资料库：王遵訓（CBDB 206844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json
            external_identifier: CBDB:206844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cLu2GRZ2eiNxita256NHVb
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_553JHVwwu7ym2KSJhedWKr
          claim_id: c_cLu2GRZ2eiNxita256NHVb
          source_id: s_WRsNJN9orzVPHqFQwefU8e
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
        id: c_QaFpS5Fqe4tEMqk4WWayZh
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
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
        - id: cs_kLRnEwphsGhjEPfcESr6JA
          claim_id: c_QaFpS5Fqe4tEMqk4WWayZh
          source_id: s_WRsNJN9orzVPHqFQwefU8e
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
        id: c_6jnZDkw8jYcpDKBYN5TYZ2
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zUlUyPrpbMYdZE19ShfJ24
          claim_id: c_6jnZDkw8jYcpDKBYN5TYZ2
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SW2vBS5Q2Gs57G32UxYrWC
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_WYVENriC_0P9dDiV3IQNxo
        subject_person_id: p_P2rRPZK8XmusLs67CcHEp4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jDSDLVtXHxR2GMv_xJmjV5
          claim_id: c_WYVENriC_0P9dDiV3IQNxo
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P2rRPZK8XmusLs67CcHEp4
        status: active
        display_name: 王杞
        merged_into_person_id: null
    - claim:
        id: c_h0hqDQQuCf7loYNq6wHZmi
        subject_person_id: p_QgiVPXBqFaKhrAo4YkqB2a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1hpI3Eaj0omgFJINJRO2Un
          claim_id: c_h0hqDQQuCf7loYNq6wHZmi
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QgiVPXBqFaKhrAo4YkqB2a
        status: active
        display_name: 王明
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遵訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵訓 | accepted |
| birth.date | 1556年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SW2vBS5Q2Gs57G32UxYrWC | 王倫 | accepted |
| ancestors | p_P2rRPZK8XmusLs67CcHEp4 | 王杞 | accepted |
| ancestors | p_QgiVPXBqFaKhrAo4YkqB2a | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵訓（CBDB 206844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json)
