---
schema: wang-person/v1
id: p_Z4iaHozq9bKDgNVpXNVYJs
status: active
merged_into: null
display_name: 王鎮遠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6JZv9Fomc9RnrhurW4HQp
        subject_person_id: p_Z4iaHozq9bKDgNVpXNVYJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PToPEgqkAZ8omhpbeqD3XA
          claim_id: c_B6JZv9Fomc9RnrhurW4HQp
          source_id: s_gbXX9WwdVoqDQQENAm8dBo
          stance: supports
          locator: CBDB:703140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703140）
          source: &a1
            id: s_gbXX9WwdVoqDQQENAm8dBo
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮遠（CBDB 703140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703140&o=json
            external_identifier: CBDB:703140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7v2Hi6YUBYbs8NQvuz8atn
        subject_person_id: p_Z4iaHozq9bKDgNVpXNVYJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮遠，清人物。籍贯上虞。（中国历代人物传记资料库 CBDB 703140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F4nvQAoB4Ha3smVuEorLYK
          claim_id: c_7v2Hi6YUBYbs8NQvuz8atn
          source_id: s_gbXX9WwdVoqDQQENAm8dBo
          stance: supports
          locator: CBDB:703140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1PEEntYNk_G0myuh36NV7S
        subject_person_id: p_tFyu3gNrC3e8xLmA6Th3Tc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z4iaHozq9bKDgNVpXNVYJs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lmplpF7GbNnvcRJJEgQSGE
          claim_id: c_1PEEntYNk_G0myuh36NV7S
          source_id: s_r6ScTR4UH0eNW8TruxCKN_
          stance: supports
          locator: CBDB：兄弟 王世功（703138）之父／母 王誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮遠 与 王世功 为同胞（CBDB 记「兄」），王世功 之父／母即 王鎮遠 之父／母。
          source:
            id: s_r6ScTR4UH0eNW8TruxCKN_
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮遠（CBDB 703140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703140&o=json
            external_identifier: CBDB:703140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tFyu3gNrC3e8xLmA6Th3Tc
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yvfbomXIXzUdRbWtMMaxxo
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z4iaHozq9bKDgNVpXNVYJs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ikISyjaI9TYSL06VMFpVBp
          claim_id: c_yvfbomXIXzUdRbWtMMaxxo
          source_id: s_r6ScTR4UH0eNW8TruxCKN_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 703138 王世功）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r6ScTR4UH0eNW8TruxCKN_
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮遠（CBDB 703140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703140&o=json
            external_identifier: CBDB:703140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DVCr6jBgLiL3jTMuxyZfR5
        status: active
        display_name: 王世功
        merged_into_person_id: null
---

# 王鎮遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮遠 | accepted |
| bio.summary | 王鎮遠，清人物。籍贯上虞。（中国历代人物传记资料库 CBDB 703140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tFyu3gNrC3e8xLmA6Th3Tc | 王誠 | accepted |
| other | p_DVCr6jBgLiL3jTMuxyZfR5 | 王世功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎮遠（CBDB 703140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703140&o=json)
