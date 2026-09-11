---
schema: wang-person/v1
id: p_uj85L9awApVoYrRPajReL6
status: active
merged_into: null
display_name: 王安道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3qG18aBAyceUDpEEg8F4qD
        subject_person_id: p_uj85L9awApVoYrRPajReL6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DovF535VFxLY65Tv1ZMekC
          claim_id: c_3qG18aBAyceUDpEEg8F4qD
          source_id: s_A33HFE2WqEdA9EPgjLpQjh
          stance: supports
          locator: CBDB:27628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27628）
          source: &a1
            id: s_A33HFE2WqEdA9EPgjLpQjh
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 27628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27628&o=json
            external_identifier: CBDB:27628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QMUs6uXASCGqPFeuSFs1xm
        subject_person_id: p_uj85L9awApVoYrRPajReL6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sTSVQAhfkKHkTafxVVTHvH
          claim_id: c_QMUs6uXASCGqPFeuSFs1xm
          source_id: s_A33HFE2WqEdA9EPgjLpQjh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_jx05a5exEYnU4c2axRuWA0
        subject_person_id: p_uj85L9awApVoYrRPajReL6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9hWvNK9LHcUG1Fxbd78U91
          claim_id: c_jx05a5exEYnU4c2axRuWA0
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tgQaYyBVLUeaz2cLVjcGjv
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 19881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19881&o=json
            external_identifier: CBDB:19881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        status: active
        display_name: 王應鳳
        merged_into_person_id: null
    - claim:
        id: c_FojAqngVwHp07_2tCaSTNL
        subject_person_id: p_uj85L9awApVoYrRPajReL6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UKZ9JENMUQXopMywb8jsK4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8cZmWVtHeRkjaPfbuxPU9
          claim_id: c_FojAqngVwHp07_2tCaSTNL
          source_id: s_A33HFE2WqEdA9EPgjLpQjh
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UKZ9JENMUQXopMywb8jsK4
        status: active
        display_name: 王撝
        merged_into_person_id: null
  other: []
---

# 王安道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安道 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dLxnrx2EJoX5qeZ6Qa78ZU | 王應鳳 | accepted |
| descendants | p_UKZ9JENMUQXopMywb8jsK4 | 王撝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安道（CBDB 27628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27628&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 19881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19881&o=json)
