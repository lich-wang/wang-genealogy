---
schema: wang-person/v1
id: p_9EQ7RpHJJENgpoTNeutQ15
status: active
merged_into: null
display_name: 王珦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZVMi636AqezeCMqbNjc5cZ
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wBbEbfKWE465TxzQKcePEt
          claim_id: c_ZVMi636AqezeCMqbNjc5cZ
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: CBDB:126637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126637）
          source: &a1
            id: s_7V4YP3YNCGruTEhfMNKbCt
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 126637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126637&o=json
            external_identifier: CBDB:126637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D2k7BWw2z2FHcPEhCB8jjk
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
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
        - id: cs_d8bsS4WxBACv2JBhCD3Vhs
          claim_id: c_D2k7BWw2z2FHcPEhCB8jjk
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
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
        id: c_64B9Q2L1_4aXvu6jnUJ_kS
        subject_person_id: p_SVG1ddZNL58D1StuN9eK9h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R6MtoUkC-DwHD6kCkTPWJL
          claim_id: c_64B9Q2L1_4aXvu6jnUJ_kS
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SVG1ddZNL58D1StuN9eK9h
        status: active
        display_name: 王懷德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2tgIhGyi--jVquUat6bOfr
        subject_person_id: p_WniQ5aD1dTCDBDynYPgLdF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BDqnc4viUcNvZB11sPGkG
          claim_id: c_2tgIhGyi--jVquUat6bOfr
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WniQ5aD1dTCDBDynYPgLdF
        status: active
        display_name: 王舍英
        merged_into_person_id: null
    - claim:
        id: c_yb5E0kWV7oTdz5RonLmdm6
        subject_person_id: p_GjaW1yRuQmTJJRQN3c2uKv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qjdO70w8_uxLneE8FQNWwE
          claim_id: c_yb5E0kWV7oTdz5RonLmdm6
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GjaW1yRuQmTJJRQN3c2uKv
        status: active
        display_name: 王彥良
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SVG1ddZNL58D1StuN9eK9h | 王懷德 | accepted |
| ancestors | p_WniQ5aD1dTCDBDynYPgLdF | 王舍英 | accepted |
| ancestors | p_GjaW1yRuQmTJJRQN3c2uKv | 王彥良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珦（CBDB 126637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126637&o=json)
