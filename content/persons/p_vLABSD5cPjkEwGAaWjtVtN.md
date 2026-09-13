---
schema: wang-person/v1
id: p_vLABSD5cPjkEwGAaWjtVtN
status: active
merged_into: null
display_name: 王源爽
cbdb_id: 175609
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uVc7rNuyGLcKZL6G77FJZY
        subject_person_id: p_vLABSD5cPjkEwGAaWjtVtN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源爽（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_a2RUNYMZDiSWN8Rp5XrP1L
          claim_id: c_uVc7rNuyGLcKZL6G77FJZY
          source_id: s_4fbKo2k2cvu12QWCyEKDNB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4fbKo2k2cvu12QWCyEKDNB
            source_type: api_record
            title: 维基数据：王源爽（Q45669020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669020
            external_identifier: Q45669020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_AlNdcy-AQ2J3REVMcBvz5T
          claim_id: c_uVc7rNuyGLcKZL6G77FJZY
          source_id: s_JLY1WTtU6tJUvKwJwARzE1
          stance: supports
          locator: CBDB:175609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JLY1WTtU6tJUvKwJwARzE1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源爽（175609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175609&o=json
            external_identifier: CBDB:175609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.548Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WMBTshiGgiNcetzGAigiij
        subject_person_id: p_vLABSD5cPjkEwGAaWjtVtN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cUgdJpLWHeGRhbiGXZpdRo
          claim_id: c_WMBTshiGgiNcetzGAigiij
          source_id: s_4fbKo2k2cvu12QWCyEKDNB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4fbKo2k2cvu12QWCyEKDNB
            source_type: api_record
            title: 维基数据：王源爽（Q45669020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669020
            external_identifier: Q45669020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6GFf7F3yFh6Rqsb7yQDBK7
        subject_person_id: p_vLABSD5cPjkEwGAaWjtVtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源爽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_U5RzMPCoCxG29KMayAZiBo
          claim_id: c_6GFf7F3yFh6Rqsb7yQDBK7
          source_id: s_JLY1WTtU6tJUvKwJwARzE1
          stance: supports
          locator: Q45669020
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vhRQKf2CDyeFHvKDwRaJ3W
          claim_id: c_6GFf7F3yFh6Rqsb7yQDBK7
          source_id: s_4fbKo2k2cvu12QWCyEKDNB
          stance: supports
          locator: Q45669020
          quotation: null
          interpretation_note: null
          source:
            id: s_4fbKo2k2cvu12QWCyEKDNB
            source_type: api_record
            title: 维基数据：王源爽（Q45669020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669020
            external_identifier: Q45669020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g97hVfWZgsEq6KdXpsbJu5
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vLABSD5cPjkEwGAaWjtVtN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1XAb9v1WaD7Ao7AbCJCaj6
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_PKmLoRgZBjht4S6y7aEr7p
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
        - id: cs_DfNJHVANWckJEaD61jomH6
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_4fbKo2k2cvu12QWCyEKDNB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fbKo2k2cvu12QWCyEKDNB
            source_type: api_record
            title: 维基数据：王源爽（Q45669020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669020
            external_identifier: Q45669020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_AqMwpdjzSivDhvrgb1u8Fx
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_JLY1WTtU6tJUvKwJwARzE1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JLY1WTtU6tJUvKwJwARzE1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源爽（175609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175609&o=json
            external_identifier: CBDB:175609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.548Z
            metadata_json: null
      object_person:
        id: p_VCzugTfN1NUsZkRmPAN27h
        status: active
        display_name: 王现
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源爽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源爽（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175609） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源爽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VCzugTfN1NUsZkRmPAN27h | 王现 | accepted |

## 外部来源

- [维基数据：王现（Q45668873）](https://www.wikidata.org/wiki/Q45668873)
- [维基数据：王源爽（Q45669020）](https://www.wikidata.org/wiki/Q45669020)
- [CBDB 中国历代人物传记资料库：王現（175606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json)
- [CBDB 中国历代人物传记资料库：王源爽（175609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175609&o=json)
