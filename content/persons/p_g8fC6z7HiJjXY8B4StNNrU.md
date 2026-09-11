---
schema: wang-person/v1
id: p_g8fC6z7HiJjXY8B4StNNrU
status: active
merged_into: null
display_name: 王蘭佩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xn7yWWtGaHbJQ6Xnn3yBkw
        subject_person_id: p_g8fC6z7HiJjXY8B4StNNrU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oMec4ciuNjM43dAEJE8Vuk
          claim_id: c_xn7yWWtGaHbJQ6Xnn3yBkw
          source_id: s_An5RRgx4aXaEtAbMANDdCs
          stance: supports
          locator: CBDB:120418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120418）
          source: &a1
            id: s_An5RRgx4aXaEtAbMANDdCs
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭佩（CBDB 120418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120418&o=json
            external_identifier: CBDB:120418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sb2RPxJ5zXza5eBaUYhqAw
        subject_person_id: p_g8fC6z7HiJjXY8B4StNNrU
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
        - id: cs_bzDPUS57C3PgCfmDeKT7Lb
          claim_id: c_sb2RPxJ5zXza5eBaUYhqAw
          source_id: s_An5RRgx4aXaEtAbMANDdCs
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
        id: c_gzc0ZazE_bhV98tSxKmMvB
        subject_person_id: p_j5QK4MXR5LwaE6dHX7rsYc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g8fC6z7HiJjXY8B4StNNrU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76-VldVgkBzpGVSO5rcRZJ
          claim_id: c_gzc0ZazE_bhV98tSxKmMvB
          source_id: s_An5RRgx4aXaEtAbMANDdCs
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3542, HuWenKai #258：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j5QK4MXR5LwaE6dHX7rsYc
        status: active
        display_name: 王慶嵩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_3X_uMvjLSD8GvBydLqublP
        subject_person_id: p_g8fC6z7HiJjXY8B4StNNrU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sU6PkQAa9M1oZ4pj34hL3y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6EMyGuvn04bCjzqjaZLSsW
          claim_id: c_3X_uMvjLSD8GvBydLqublP
          source_id: s_vUCubcGMMmKTAKDaLk00LR
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3542, HuWenKai #258：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vUCubcGMMmKTAKDaLk00LR
            source_type: api_record
            title: 中国历代人物传记资料库：孫承福（CBDB 120423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120423&o=json
            external_identifier: CBDB:120423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sU6PkQAa9M1oZ4pj34hL3y
        status: active
        display_name: 孫承福
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蘭佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭佩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j5QK4MXR5LwaE6dHX7rsYc | 王慶嵩 | accepted |
| spouses | p_sU6PkQAa9M1oZ4pj34hL3y | 孫承福 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫承福（CBDB 120423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120423&o=json)
- [中国历代人物传记资料库：王蘭佩（CBDB 120418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120418&o=json)
