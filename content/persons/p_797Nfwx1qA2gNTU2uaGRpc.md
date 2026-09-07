---
schema: wang-person/v1
id: p_797Nfwx1qA2gNTU2uaGRpc
status: active
merged_into: null
display_name: 王昌裔
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChJCUF5epvLo1zpV68kQPb
        subject_person_id: p_797Nfwx1qA2gNTU2uaGRpc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌裔（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175436 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_em1t5FMHRrjZmN3cSVfxAc
          claim_id: c_ChJCUF5epvLo1zpV68kQPb
          source_id: s_SK4CoP1iHZSqTTCFUDU8Kv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SK4CoP1iHZSqTTCFUDU8Kv
            source_type: api_record
            title: 维基数据：王昌裔（Q45659534）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659534
            external_identifier: Q45659534
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_dlDtE6IskeTHMY-qRIule7
          claim_id: c_ChJCUF5epvLo1zpV68kQPb
          source_id: s_b1HAZxMZH8MQUL943dhgfb
          stance: supports
          locator: CBDB:175436
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_b1HAZxMZH8MQUL943dhgfb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌裔（175436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175436&o=json
            external_identifier: CBDB:175436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.477Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ri5vHrnFT5KXCC9H9uDyjT
        subject_person_id: p_797Nfwx1qA2gNTU2uaGRpc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KeBeiA5iG68UfAJELaQrsq
          claim_id: c_ri5vHrnFT5KXCC9H9uDyjT
          source_id: s_SK4CoP1iHZSqTTCFUDU8Kv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SK4CoP1iHZSqTTCFUDU8Kv
            source_type: api_record
            title: 维基数据：王昌裔（Q45659534）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659534
            external_identifier: Q45659534
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3bWy8zgD8kZDyGas1beHs7
        subject_person_id: p_797Nfwx1qA2gNTU2uaGRpc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌裔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9uGPAviJqHwTSZykkHgDyQ
          claim_id: c_3bWy8zgD8kZDyGas1beHs7
          source_id: s_b1HAZxMZH8MQUL943dhgfb
          stance: supports
          locator: Q45659534
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NGzLc1XrZE3tXiTbAu5wgf
          claim_id: c_3bWy8zgD8kZDyGas1beHs7
          source_id: s_SK4CoP1iHZSqTTCFUDU8Kv
          stance: supports
          locator: Q45659534
          quotation: null
          interpretation_note: null
          source:
            id: s_SK4CoP1iHZSqTTCFUDU8Kv
            source_type: api_record
            title: 维基数据：王昌裔（Q45659534）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659534
            external_identifier: Q45659534
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r8KD9MNRpLc79PBoAEECM5
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_797Nfwx1qA2gNTU2uaGRpc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Lnr2aXXFGT4LxP1s5Unk8m
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_N5xTEDpA4rjoTNaaWuZJhU
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
        - id: cs_Eej1DAZd4VEsjC7ykt5GMd
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_SK4CoP1iHZSqTTCFUDU8Kv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SK4CoP1iHZSqTTCFUDU8Kv
            source_type: api_record
            title: 维基数据：王昌裔（Q45659534）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659534
            external_identifier: Q45659534
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_Z7PXwrNuVnyM4xz6Fu8pmQ
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_b1HAZxMZH8MQUL943dhgfb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b1HAZxMZH8MQUL943dhgfb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌裔（175436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175436&o=json
            external_identifier: CBDB:175436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.477Z
            metadata_json: null
      object_person:
        id: p_KrQPoCtGgBA1JmWKQJxS4S
        status: active
        display_name: 王检
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌裔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌裔（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175436 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王昌裔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KrQPoCtGgBA1JmWKQJxS4S | 王检 | accepted |

## 外部来源

- [维基数据：王昌裔（Q45659534）](https://www.wikidata.org/wiki/Q45659534)
- [维基数据：王检（Q45659357）](https://www.wikidata.org/wiki/Q45659357)
- [CBDB 中国历代人物传记资料库：王昌裔（175436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175436&o=json)
- [CBDB 中国历代人物传记资料库：王檢（175433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json)
