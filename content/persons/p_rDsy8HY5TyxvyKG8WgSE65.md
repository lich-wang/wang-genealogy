---
schema: wang-person/v1
id: p_rDsy8HY5TyxvyKG8WgSE65
status: active
merged_into: null
display_name: 王宗植
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HX4yHvXcRYPevrshLKyVyF
        subject_person_id: p_rDsy8HY5TyxvyKG8WgSE65
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y7gP1gRfDtZfPLQeeDh1k9
          claim_id: c_HX4yHvXcRYPevrshLKyVyF
          source_id: s_dFiiNLBoGQQtH9cBjQ3vJW
          stance: supports
          locator: CBDB:694150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694150）
          source: &a1
            id: s_dFiiNLBoGQQtH9cBjQ3vJW
            source_type: api_record
            title: 中国历代人物传记资料库：王宗植（CBDB 694150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694150&o=json
            external_identifier: CBDB:694150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BoQSY4o4b6TAPmegwxq9nS
        subject_person_id: p_rDsy8HY5TyxvyKG8WgSE65
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
        - id: cs_rwCH76yAdswmHeAJQgpsUC
          claim_id: c_BoQSY4o4b6TAPmegwxq9nS
          source_id: s_dFiiNLBoGQQtH9cBjQ3vJW
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
        id: c_A4Uk0zxBzcYUs1pVIaj6vo
        subject_person_id: p_gWeQqYSDEj93QiAPCoQxmK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rDsy8HY5TyxvyKG8WgSE65
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NInHMX7EAVx4K-bfej0KO8
          claim_id: c_A4Uk0zxBzcYUs1pVIaj6vo
          source_id: s_4cM4ZihPu3KAUqfAFWA7ZV
          stance: supports
          locator: 鄞縣志，lgid=243606：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4cM4ZihPu3KAUqfAFWA7ZV
            source_type: api_record
            title: 中国历代人物传记资料库：王予彰（CBDB 694148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694148&o=json
            external_identifier: CBDB:694148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gWeQqYSDEj93QiAPCoQxmK
        status: active
        display_name: 王予彰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VAMNo3DaAOsPu7aBZt4bLl
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rDsy8HY5TyxvyKG8WgSE65
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9OoPI81dPsB7TOYGYoMK1s
          claim_id: c_VAMNo3DaAOsPu7aBZt4bLl
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
          stance: supports
          locator: 鄞縣志，lgid=243606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hPA2wXFn6CM42W4D5FLhFz
            source_type: api_record
            title: 中国历代人物传记资料库：王士霖（CBDB 694147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694147&o=json
            external_identifier: CBDB:694147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ixapZhQmmSDAS1angZKZYU
        status: active
        display_name: 王士霖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗植 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gWeQqYSDEj93QiAPCoQxmK | 王予彰 | accepted |
| ancestors | p_ixapZhQmmSDAS1angZKZYU | 王士霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士霖（CBDB 694147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694147&o=json)
- [中国历代人物传记资料库：王予彰（CBDB 694148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694148&o=json)
- [中国历代人物传记资料库：王宗植（CBDB 694150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694150&o=json)
