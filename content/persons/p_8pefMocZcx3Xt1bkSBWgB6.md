---
schema: wang-person/v1
id: p_8pefMocZcx3Xt1bkSBWgB6
status: active
merged_into: null
display_name: 王宿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_67ZAwAkgq8KvU89ZgWh6tZ
        subject_person_id: p_8pefMocZcx3Xt1bkSBWgB6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JCnrDhQcvMeNEGRJ5KhHXK
          claim_id: c_67ZAwAkgq8KvU89ZgWh6tZ
          source_id: s_nrAzHgzjmK1EQzr9DACQnY
          stance: supports
          locator: CBDB:17424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17424）
          source: &a1
            id: s_nrAzHgzjmK1EQzr9DACQnY
            source_type: api_record
            title: 中国历代人物传记资料库：王宿（CBDB 17424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17424&o=json
            external_identifier: CBDB:17424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AWMWMU8MWc5WP55ChHQobL
        subject_person_id: p_8pefMocZcx3Xt1bkSBWgB6
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
        - id: cs_nBD1J8ic3FHNKYaByRd8Kh
          claim_id: c_AWMWMU8MWc5WP55ChHQobL
          source_id: s_nrAzHgzjmK1EQzr9DACQnY
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
        id: c_OoZswomvNVCLB3WiPWo0d6
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8pefMocZcx3Xt1bkSBWgB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GegEwfHc820cistBJdpYip
          claim_id: c_OoZswomvNVCLB3WiPWo0d6
          source_id: s_nrAzHgzjmK1EQzr9DACQnY
          stance: supports
          locator: CBDB 双向互证（父 王异 ⇄ 子 王宿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
  children:
    - claim:
        id: c_9t4u4m05PUyvspcoFRFBwc
        subject_person_id: p_8pefMocZcx3Xt1bkSBWgB6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FLQGQnP9Y6pdiGNaaECMWj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mJ_Tret13feBxzVKDLziXt
          claim_id: c_9t4u4m05PUyvspcoFRFBwc
          source_id: s_nrAzHgzjmK1EQzr9DACQnY
          stance: supports
          locator: CBDB 双向互证（子 王衣 ⇄ 父 王宿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_FLQGQnP9Y6pdiGNaaECMWj
        status: active
        display_name: 王衣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |
| children | p_FLQGQnP9Y6pdiGNaaECMWj | 王衣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宿（CBDB 17424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17424&o=json)
