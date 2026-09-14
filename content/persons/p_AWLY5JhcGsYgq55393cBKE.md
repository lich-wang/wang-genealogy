---
schema: wang-person/v1
id: p_AWLY5JhcGsYgq55393cBKE
status: active
merged_into: null
display_name: 王十翼
cbdb_id: 330495
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1XX5GfV93P1EyVeVVe4Fu
        subject_person_id: p_AWLY5JhcGsYgq55393cBKE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十翼，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DbCF1eHWdjeYHk9cRVPOLS
          claim_id: c_q1XX5GfV93P1EyVeVVe4Fu
          source_id: s_dcxxABw6E3ZiL5LE1WZwtm
          stance: supports
          locator: CBDB:330495
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dcxxABw6E3ZiL5LE1WZwtm
            source_type: api_record
            title: 中国历代人物传记资料库：王十翼（CBDB 330495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json
            external_identifier: CBDB:330495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a859C3FVMUA1gNzbPiNswD
        subject_person_id: p_AWLY5JhcGsYgq55393cBKE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AzBBYM4bm9C3jwx4pMPt1N
          claim_id: c_a859C3FVMUA1gNzbPiNswD
          source_id: s_dcxxABw6E3ZiL5LE1WZwtm
          stance: supports
          locator: CBDB:330495
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5jy2xxgi8GATAVWZq8J25_
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AWLY5JhcGsYgq55393cBKE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S9Tn6jbpKLtOpYI2gJ-jNz
          claim_id: c_5jy2xxgi8GATAVWZq8J25_
          source_id: s_gC40h6cfc6QWasyj-Lex5X
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王十翼 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王十翼 之父／母。
          source:
            id: s_gC40h6cfc6QWasyj-Lex5X
            source_type: api_record
            title: 中国历代人物传记资料库：王十翼（CBDB 330495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json
            external_identifier: CBDB:330495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QNqCVS9-ijQvjpXgzLbZ8q
        subject_person_id: p_AWLY5JhcGsYgq55393cBKE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7ET7oB8Txb9rsEgJM6snH
          claim_id: c_QNqCVS9-ijQvjpXgzLbZ8q
          source_id: s_gC40h6cfc6QWasyj-Lex5X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gC40h6cfc6QWasyj-Lex5X
            source_type: api_record
            title: 中国历代人物传记资料库：王十翼（CBDB 330495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json
            external_identifier: CBDB:330495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNd4UuLmfsSW8TJsfi9MKm
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王十翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王十翼，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330495） | accepted |
| name.primary | 王十翼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| other | p_SNd4UuLmfsSW8TJsfi9MKm | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王十翼（CBDB 330495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json)
