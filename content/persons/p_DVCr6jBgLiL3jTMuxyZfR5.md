---
schema: wang-person/v1
id: p_DVCr6jBgLiL3jTMuxyZfR5
status: active
merged_into: null
display_name: 王世功
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ff3kghwm6MYLjSShA56bSo
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pAnCrAmMPQTc7CsnutJXBJ
          claim_id: c_Ff3kghwm6MYLjSShA56bSo
          source_id: s_e5n5bh5Pqg9htrT7KpxJcw
          stance: supports
          locator: CBDB:703138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703138）
          source: &a1
            id: s_e5n5bh5Pqg9htrT7KpxJcw
            source_type: api_record
            title: 中国历代人物传记资料库：王世功（CBDB 703138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703138&o=json
            external_identifier: CBDB:703138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PT4JApLiEQso1ab4vJJ3vF
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
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
        - id: cs_2PmBwCyL6yJfQi6Sw1AAcn
          claim_id: c_PT4JApLiEQso1ab4vJJ3vF
          source_id: s_e5n5bh5Pqg9htrT7KpxJcw
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
        id: c_wYmv1A07wacYT7CNTevT6v
        subject_person_id: p_tFyu3gNrC3e8xLmA6Th3Tc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4nDvYKqF5Y-sSAJuK9O9jG
          claim_id: c_wYmv1A07wacYT7CNTevT6v
          source_id: s_e5n5bh5Pqg9htrT7KpxJcw
          stance: supports
          locator: 上虞縣志，lgid=324917：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tFyu3gNrC3e8xLmA6Th3Tc
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children:
    - claim:
        id: c_t5HhD-BYEgPWZgF4zp8HmV
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_61JNS28QvWNfnHMN93DFjd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_DH43sQEqmguT3_naGCd1
          claim_id: c_t5HhD-BYEgPWZgF4zp8HmV
          source_id: s_2wK9PQAmDW98FtfX9yAE7L
          stance: supports
          locator: 上虞縣志，lgid=324917：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2wK9PQAmDW98FtfX9yAE7L
            source_type: api_record
            title: 中国历代人物传记资料库：王毓麟（CBDB 703139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703139&o=json
            external_identifier: CBDB:703139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_61JNS28QvWNfnHMN93DFjd
        status: active
        display_name: 王毓麟
        merged_into_person_id: null
    - claim:
        id: c_YG9hTQIADDC6gkuEhAeLM0
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jCuYqbLwtSwzdb7N2z84c9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lBcfNyuURj7_7b1yE19bE1
          claim_id: c_YG9hTQIADDC6gkuEhAeLM0
          source_id: s_p5DBUPUGvqJfe5rJ7UjvMR
          stance: supports
          locator: 上虞縣志，lgid=324918：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p5DBUPUGvqJfe5rJ7UjvMR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝錦（CBDB 703141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703141&o=json
            external_identifier: CBDB:703141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jCuYqbLwtSwzdb7N2z84c9
        status: active
        display_name: 王汝錦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世功 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tFyu3gNrC3e8xLmA6Th3Tc | 王誠 | accepted |
| children | p_61JNS28QvWNfnHMN93DFjd | 王毓麟 | accepted |
| children | p_jCuYqbLwtSwzdb7N2z84c9 | 王汝錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝錦（CBDB 703141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703141&o=json)
- [中国历代人物传记资料库：王世功（CBDB 703138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703138&o=json)
- [中国历代人物传记资料库：王毓麟（CBDB 703139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703139&o=json)
