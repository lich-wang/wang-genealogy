---
schema: wang-person/v1
id: p_GbYj3F7dkvznndKuLNKMtn
status: active
merged_into: null
display_name: 王士恕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V785sFhhe5DUa8BWMEZWp1
        subject_person_id: p_GbYj3F7dkvznndKuLNKMtn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dDd6361i1PJM5fj12bU91J
          claim_id: c_V785sFhhe5DUa8BWMEZWp1
          source_id: s_AULeuwKnm9YY5EYHWpN6u6
          stance: supports
          locator: CBDB:684539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684539）
          source: &a1
            id: s_AULeuwKnm9YY5EYHWpN6u6
            source_type: api_record
            title: 中国历代人物传记资料库：王士恕（CBDB 684539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684539&o=json
            external_identifier: CBDB:684539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yLPXCF5TPhzgPKv337mmRK
        subject_person_id: p_GbYj3F7dkvznndKuLNKMtn
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
        - id: cs_EjdX4ehSKb4aVAbQqqoXE9
          claim_id: c_yLPXCF5TPhzgPKv337mmRK
          source_id: s_AULeuwKnm9YY5EYHWpN6u6
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
        id: c_AvspID7RdgFMP5VzU4IghG
        subject_person_id: p_iM1B1oYqK2XseAuiGpcZ7v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GbYj3F7dkvznndKuLNKMtn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z1Lg-7wdKM1iPwVex8_g-u
          claim_id: c_AvspID7RdgFMP5VzU4IghG
          source_id: s_AULeuwKnm9YY5EYHWpN6u6
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163962：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iM1B1oYqK2XseAuiGpcZ7v
        status: active
        display_name: 王學健
        merged_into_person_id: null
  children:
    - claim:
        id: c_W4Zo10xtlTh9rliu8P0l93
        subject_person_id: p_GbYj3F7dkvznndKuLNKMtn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4MOoN_AsY2JWcIp6dSpPTG
          claim_id: c_W4Zo10xtlTh9rliu8P0l93
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163962：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iVWHgoCbJ36o6UkwJ3F9kL
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 684537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684537&o=json
            external_identifier: CBDB:684537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7DvAV4NZwhgvkYo2NFGPz1
        status: active
        display_name: 王謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士恕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iM1B1oYqK2XseAuiGpcZ7v | 王學健 | accepted |
| children | p_7DvAV4NZwhgvkYo2NFGPz1 | 王謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 684537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684537&o=json)
- [中国历代人物传记资料库：王士恕（CBDB 684539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684539&o=json)
