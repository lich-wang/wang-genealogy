---
schema: wang-person/v1
id: p_o16nJWCknTU23jEgQqsW2B
status: active
merged_into: null
display_name: 王瑛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TqCsfLECTuryMDJwG6pq6V
        subject_person_id: p_o16nJWCknTU23jEgQqsW2B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_peBp7uswrbNnD9Ef57RHX9
          claim_id: c_TqCsfLECTuryMDJwG6pq6V
          source_id: s_biJUvvoThDNZxU1VcoYJG4
          stance: supports
          locator: CBDB:241294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241294）
          source: &a1
            id: s_biJUvvoThDNZxU1VcoYJG4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 241294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241294&o=json
            external_identifier: CBDB:241294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ravANNn9okKVAM3wotL6kv
        subject_person_id: p_o16nJWCknTU23jEgQqsW2B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ve2T0k3x8LgCVUq3pZVHhz
          claim_id: c_ravANNn9okKVAM3wotL6kv
          source_id: s_biJUvvoThDNZxU1VcoYJG4
          stance: supports
          locator: CBDB:241294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jzb9FI0vtC632iHqm4GrqZ
        subject_person_id: p_jCmvSEJEzMCfHNSXJ1XAo8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o16nJWCknTU23jEgQqsW2B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F332Aq4UxVMce46FN_NMzv
          claim_id: c_Jzb9FI0vtC632iHqm4GrqZ
          source_id: s_RGo-EtYYQE-eG-Yz7CncTh
          stance: supports
          locator: CBDB：兄弟 王豪（208164）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑛 与 王豪 为同胞（CBDB 记「弟」），王豪 之父／母即 王瑛 之父／母。
          source:
            id: s_RGo-EtYYQE-eG-Yz7CncTh
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 241294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241294&o=json
            external_identifier: CBDB:241294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jCmvSEJEzMCfHNSXJ1XAo8
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Mu0I98Rn7n1LaoROkN5hYs
        subject_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o16nJWCknTU23jEgQqsW2B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_siYv9c-b33zuu7LbcHlGsG
          claim_id: c_Mu0I98Rn7n1LaoROkN5hYs
          source_id: s_RGo-EtYYQE-eG-Yz7CncTh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208164 王豪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RGo-EtYYQE-eG-Yz7CncTh
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 241294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241294&o=json
            external_identifier: CBDB:241294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CwH6PHR1XzMwocJ8ZwHSPP
        status: active
        display_name: 王豪
        merged_into_person_id: null
---

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | 王瑛，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jCmvSEJEzMCfHNSXJ1XAo8 | 王寧 | accepted |
| other | p_CwH6PHR1XzMwocJ8ZwHSPP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 241294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241294&o=json)
