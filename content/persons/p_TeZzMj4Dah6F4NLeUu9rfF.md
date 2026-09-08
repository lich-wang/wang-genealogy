---
schema: wang-person/v1
id: p_TeZzMj4Dah6F4NLeUu9rfF
status: active
merged_into: null
display_name: 王明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GfSsLinzoMLkcMNES1E9C6
        subject_person_id: p_TeZzMj4Dah6F4NLeUu9rfF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7hQnzG1t67ULwza671Snjs
          claim_id: c_GfSsLinzoMLkcMNES1E9C6
          source_id: s_KjGSA2rTzJ8531ncwCyrZs
          stance: supports
          locator: Q45406222
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_KjGSA2rTzJ8531ncwCyrZs
            source_type: api_record
            title: 维基数据：王明（Q45406222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45406222
            external_identifier: Q45406222
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_P6GbaCjvoCxbUaJQgDNPH2
          claim_id: c_GfSsLinzoMLkcMNES1E9C6
          source_id: s_75iLUk1XAmbYPAd1LPYc2D
          stance: supports
          locator: CBDB:24462
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_75iLUk1XAmbYPAd1LPYc2D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（24462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24462&o=json
            external_identifier: CBDB:24462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCtbkwQL4tRUnh8z1KWyKg
        subject_person_id: p_TeZzMj4Dah6F4NLeUu9rfF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person (CBDB = 24462)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LGBPDje5jxXdKWGFCzqaeB
          claim_id: c_HCtbkwQL4tRUnh8z1KWyKg
          source_id: s_KjGSA2rTzJ8531ncwCyrZs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GMDM1rzyEVv2BD47MhbFRF
        subject_person_id: p_TeZzMj4Dah6F4NLeUu9rfF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9UwDT9fs142EB3GvRsQLfL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KFedLzhA49mknRaSMnJ9Vn
          claim_id: c_GMDM1rzyEVv2BD47MhbFRF
          source_id: s_QQn29PxFMX8EzvWMUNKErk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQn29PxFMX8EzvWMUNKErk
            source_type: api_record
            title: 维基数据：王承寿（Q45406224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45406224
            external_identifier: Q45406224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_71WzZdNjSMJKPwEeeMdkFp
          claim_id: c_GMDM1rzyEVv2BD47MhbFRF
          source_id: s_KjGSA2rTzJ8531ncwCyrZs
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_9UwDT9fs142EB3GvRsQLfL
        status: active
        display_name: 王承寿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | Song dynasty person (CBDB = 24462) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9UwDT9fs142EB3GvRsQLfL | 王承寿 | accepted |

## 外部来源

- [维基数据：王承寿（Q45406224）](https://www.wikidata.org/wiki/Q45406224)
- [维基数据：王明（Q45406222）](https://www.wikidata.org/wiki/Q45406222)
- [CBDB 中国历代人物传记资料库：王明（24462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24462&o=json)
