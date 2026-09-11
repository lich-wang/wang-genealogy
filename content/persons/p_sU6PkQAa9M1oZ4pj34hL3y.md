---
schema: wang-person/v1
id: p_sU6PkQAa9M1oZ4pj34hL3y
status: active
merged_into: null
display_name: 孫承福
revision: 1
cbdb_id: 120423
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vtk82y5rnIRc5rym7Q6q3B
        subject_person_id: p_sU6PkQAa9M1oZ4pj34hL3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫承福
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cc1GayJsuRsF7XSiQAnjr-
          claim_id: c_vtk82y5rnIRc5rym7Q6q3B
          source_id: s_vUCubcGMMmKTAKDaLk00LR
          stance: supports
          locator: CBDB:120423
          quotation: null
          interpretation_note: CBDB 明确记录的王蘭佩配偶
          source: &a1
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
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_g8fC6z7HiJjXY8B4StNNrU
        status: active
        display_name: 王蘭佩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫承福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孫承福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_g8fC6z7HiJjXY8B4StNNrU | 王蘭佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫承福（CBDB 120423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120423&o=json)
