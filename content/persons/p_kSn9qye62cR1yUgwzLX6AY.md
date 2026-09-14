---
schema: wang-person/v1
id: p_kSn9qye62cR1yUgwzLX6AY
status: active
merged_into: null
display_name: 王玄德
cbdb_id: 331287
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_meHKzR8T2R1vsGGeoxLKS4
        subject_person_id: p_kSn9qye62cR1yUgwzLX6AY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄德，明人物。嘉靖四十四年進士，籍贯全州。（中国历代人物传记资料库 CBDB 331287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ChqBeJxn-T3sVNYwUhNkPQ
          claim_id: c_meHKzR8T2R1vsGGeoxLKS4
          source_id: s_y461yJZsGwHnPJTZPAwxyX
          stance: supports
          locator: CBDB:331287
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y461yJZsGwHnPJTZPAwxyX
            source_type: api_record
            title: 中国历代人物传记资料库：王玄德（CBDB 331287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331287&o=json
            external_identifier: CBDB:331287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_swVcx4Npf5YFDTw7CgMkp1
        subject_person_id: p_kSn9qye62cR1yUgwzLX6AY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k4XGA1NCwe3z6WEcraen9H
          claim_id: c_swVcx4Npf5YFDTw7CgMkp1
          source_id: s_y461yJZsGwHnPJTZPAwxyX
          stance: supports
          locator: CBDB:331287
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_536IHeB-Pgk_5ipcgj1y0i
        subject_person_id: p_DYn2sTkHCEDbpaSHuEuC5e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kSn9qye62cR1yUgwzLX6AY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPvPAAvCi5AaOQP5e0n_ZR
          claim_id: c_536IHeB-Pgk_5ipcgj1y0i
          source_id: s_kWp4s3ITkI_OSQjEHORtQh
          stance: supports
          locator: CBDB：兄弟 王貽德（205304）之父／母 王謐
          quotation: null
          interpretation_note: 由兄弟关系推断：王玄德 与 王貽德 为同胞（CBDB 记「弟」），王貽德 之父／母即 王玄德 之父／母。
          source:
            id: s_kWp4s3ITkI_OSQjEHORtQh
            source_type: api_record
            title: 中国历代人物传记资料库：王玄德（CBDB 331287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331287&o=json
            external_identifier: CBDB:331287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYn2sTkHCEDbpaSHuEuC5e
        status: active
        display_name: 王謐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mTq6ogNNOWf5qvuv_hkUhQ
        subject_person_id: p_2AHmF8AUPM19K8SgoBBTUY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kSn9qye62cR1yUgwzLX6AY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rRyxI01QPTIYbTqWFOtVw
          claim_id: c_mTq6ogNNOWf5qvuv_hkUhQ
          source_id: s_kWp4s3ITkI_OSQjEHORtQh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205304 王貽德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kWp4s3ITkI_OSQjEHORtQh
            source_type: api_record
            title: 中国历代人物传记资料库：王玄德（CBDB 331287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331287&o=json
            external_identifier: CBDB:331287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2AHmF8AUPM19K8SgoBBTUY
        status: active
        display_name: 王貽德
        merged_into_person_id: null
---

# 王玄德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玄德，明人物。嘉靖四十四年進士，籍贯全州。（中国历代人物传记资料库 CBDB 331287） | accepted |
| name.primary | 王玄德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DYn2sTkHCEDbpaSHuEuC5e | 王謐 | accepted |
| other | p_2AHmF8AUPM19K8SgoBBTUY | 王貽德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄德（CBDB 331287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331287&o=json)
