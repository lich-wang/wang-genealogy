---
schema: wang-person/v1
id: p_KypPGxBsH3owQTGsLS86jD
status: active
merged_into: null
display_name: 王汝為
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b1FzdZ8jfnmSpYAVR7FKNg
        subject_person_id: p_KypPGxBsH3owQTGsLS86jD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lbay8gs7WZTd2ET2qciBhe
          claim_id: c_b1FzdZ8jfnmSpYAVR7FKNg
          source_id: s_KoygokHnsBLiCgdaDo4EgE
          stance: supports
          locator: CBDB:556441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556441）
          source: &a1
            id: s_KoygokHnsBLiCgdaDo4EgE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 556441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556441&o=json
            external_identifier: CBDB:556441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dUscuaLzzNT418PQCtuhDV
        subject_person_id: p_KypPGxBsH3owQTGsLS86jD
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
        - id: cs_eYjuc5dP1fqLR6QAn9raKa
          claim_id: c_dUscuaLzzNT418PQCtuhDV
          source_id: s_KoygokHnsBLiCgdaDo4EgE
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
        id: c_yKYfE83LdxT1yKvprU19z_
        subject_person_id: p_KypPGxBsH3owQTGsLS86jD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ezjc967Hoc1JJFtbYHyCYv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAgRqhDT5TwL_ktEthF2YG
          claim_id: c_yKYfE83LdxT1yKvprU19z_
          source_id: s_Mv2GPErMNwBtLfp8ffQHfZ
          stance: supports
          locator: 紹興府志:八十卷，Igid=316242：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mv2GPErMNwBtLfp8ffQHfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王佳椅（CBDB 556444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556444&o=json
            external_identifier: CBDB:556444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ezjc967Hoc1JJFtbYHyCYv
        status: active
        display_name: 王佳椅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝為 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Ezjc967Hoc1JJFtbYHyCYv | 王佳椅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佳椅（CBDB 556444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556444&o=json)
- [中国历代人物传记资料库：王汝為（CBDB 556441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556441&o=json)
