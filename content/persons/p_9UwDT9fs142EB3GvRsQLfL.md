---
schema: wang-person/v1
id: p_9UwDT9fs142EB3GvRsQLfL
status: active
merged_into: null
display_name: 王承寿
cbdb_id: 24463
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nRKZUWy3VvFPgc6tYZ17fv
        subject_person_id: p_9UwDT9fs142EB3GvRsQLfL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承寿，宋人物。籍贯德安。（中国历代人物传记资料库 CBDB 24463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_9We3fhsjJSr79zkC8P5MfF
          claim_id: c_nRKZUWy3VvFPgc6tYZ17fv
          source_id: s_QQn29PxFMX8EzvWMUNKErk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
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
        - id: cs_D3jrxjTbHAcdrsCOkydfym
          claim_id: c_nRKZUWy3VvFPgc6tYZ17fv
          source_id: s_ps7vvtKuB1AovCDojRD8d9
          stance: supports
          locator: CBDB:24463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ps7vvtKuB1AovCDojRD8d9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承壽（24463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24463&o=json
            external_identifier: CBDB:24463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:13.015Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WyP3Aqjj9tfaQGgBy68wVr
        subject_person_id: p_9UwDT9fs142EB3GvRsQLfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承寿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9ochWstaMsNvKGokGT66Jn
          claim_id: c_WyP3Aqjj9tfaQGgBy68wVr
          source_id: s_ps7vvtKuB1AovCDojRD8d9
          stance: supports
          locator: Q45406224
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_UKN17QoEvjMiSeNzqCvhLy
          claim_id: c_WyP3Aqjj9tfaQGgBy68wVr
          source_id: s_QQn29PxFMX8EzvWMUNKErk
          stance: supports
          locator: Q45406224
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a2
        - id: cs_71WzZdNjSMJKPwEeeMdkFp
          claim_id: c_GMDM1rzyEVv2BD47MhbFRF
          source_id: s_KjGSA2rTzJ8531ncwCyrZs
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
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
      object_person:
        id: p_TeZzMj4Dah6F4NLeUu9rfF
        status: active
        display_name: 王明
        merged_into_person_id: null
  children:
    - claim:
        id: c_xQ6ojZBk4RH4HgfjsaxYv4
        subject_person_id: p_9UwDT9fs142EB3GvRsQLfL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ALyAWxGKBdin3gWX3BCo4F
          claim_id: c_xQ6ojZBk4RH4HgfjsaxYv4
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UPzHqSAS1LsGaC1U81Firc
            source_type: api_record
            title: 维基数据：王世规（Q45387330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387330
            external_identifier: Q45387330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_cSYRH9ZFJM3DEQ7pFE1k67
          claim_id: c_xQ6ojZBk4RH4HgfjsaxYv4
          source_id: s_QQn29PxFMX8EzvWMUNKErk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_aXau6hU5D7kaqPNM3MS4m6
          claim_id: c_xQ6ojZBk4RH4HgfjsaxYv4
          source_id: s_ps7vvtKuB1AovCDojRD8d9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_TXJvtdFRgZUQXsFzGvjCnR
        status: active
        display_name: 王世规
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承寿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承寿，宋人物。籍贯德安。（中国历代人物传记资料库 CBDB 24463） | accepted |
| name.primary | 王承寿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TeZzMj4Dah6F4NLeUu9rfF | 王明 | accepted |
| children | p_TXJvtdFRgZUQXsFzGvjCnR | 王世规 | accepted |

## 外部来源

- [维基数据：王承寿（Q45406224）](https://www.wikidata.org/wiki/Q45406224)
- [维基数据：王明（Q45406222）](https://www.wikidata.org/wiki/Q45406222)
- [维基数据：王世规（Q45387330）](https://www.wikidata.org/wiki/Q45387330)
- [CBDB 中国历代人物传记资料库：王承壽（24463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24463&o=json)
