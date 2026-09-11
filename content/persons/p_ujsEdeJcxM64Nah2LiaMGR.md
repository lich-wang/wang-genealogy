---
schema: wang-person/v1
id: p_ujsEdeJcxM64Nah2LiaMGR
status: active
merged_into: null
display_name: 王廷賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dz2eLP2kPQ6FfU5iyUYid
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v89fx4iPgFwg9uG4Y1p4td
          claim_id: c_5dz2eLP2kPQ6FfU5iyUYid
          source_id: s_5SwPAs2RZszpJv1bcgQ8Hk
          stance: supports
          locator: CBDB:273474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273474）
          source: &a1
            id: s_5SwPAs2RZszpJv1bcgQ8Hk
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賓（CBDB 273474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273474&o=json
            external_identifier: CBDB:273474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UfHLguVzSeXXsis2Lut5uw
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
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
        - id: cs_3YCYzwNdVwcWa6MC9KQ5bF
          claim_id: c_UfHLguVzSeXXsis2Lut5uw
          source_id: s_5SwPAs2RZszpJv1bcgQ8Hk
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
        id: c_DIHOYVE_d2jWY4DGsWloXi
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKlm2Okjs6FBTsoU4IXh9P
          claim_id: c_DIHOYVE_d2jWY4DGsWloXi
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8DtRzDxXopvpFicBdQg4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 201503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json
            external_identifier: CBDB:201503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Fu5oCqGVWkUyo9rZxcW5L
        status: active
        display_name: 王忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷賓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2Fu5oCqGVWkUyo9rZxcW5L | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷賓（CBDB 273474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273474&o=json)
- [中国历代人物传记资料库：王忠（CBDB 201503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json)
