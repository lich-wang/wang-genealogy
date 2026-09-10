---
schema: wang-person/v1
id: p_1D9UJ3qbxhZuhm9688Gxjt
status: active
merged_into: null
display_name: 王嗣祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v1vz8YttYnadeJCftSmU9K
        subject_person_id: p_1D9UJ3qbxhZuhm9688Gxjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9c7no5TGi8WDE5CsDK7Ju3
          claim_id: c_v1vz8YttYnadeJCftSmU9K
          source_id: s_8mb74tFPKTmL3GwfEttLm6
          stance: supports
          locator: CBDB:557424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557424）
          source: &a1
            id: s_8mb74tFPKTmL3GwfEttLm6
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣祖（CBDB 557424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557424&o=json
            external_identifier: CBDB:557424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxfHqoLaPtH4522k5jqWgA
        subject_person_id: p_1D9UJ3qbxhZuhm9688Gxjt
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
        - id: cs_5iAPwwgnuCvGsyHBKJjrnw
          claim_id: c_TxfHqoLaPtH4522k5jqWgA
          source_id: s_8mb74tFPKTmL3GwfEttLm6
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
        id: c_Du4l6mM2y0yFYBie1x_AN8
        subject_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1D9UJ3qbxhZuhm9688Gxjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I988z40na6JeuX6WAJdTU4
          claim_id: c_Du4l6mM2y0yFYBie1x_AN8
          source_id: s_8mb74tFPKTmL3GwfEttLm6
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gT8Y6oM2Xv4kiuH3CHGLND
        status: active
        display_name: 王鳳徵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zixTncPXWuwxU5uUvSMc50
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1D9UJ3qbxhZuhm9688Gxjt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LommJFJOQhI6Nm135v00jh
          claim_id: c_zixTncPXWuwxU5uUvSMc50
          source_id: s_8mb74tFPKTmL3GwfEttLm6
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嗣祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣祖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gT8Y6oM2Xv4kiuH3CHGLND | 王鳳徵 | accepted |
| ancestors | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣祖（CBDB 557424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557424&o=json)
