---
schema: wang-person/v1
id: p_CiW5m44PgV5XK7vb3FfKfP
status: active
merged_into: null
display_name: 王沼
cbdb_id: 175491
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zYaDkcqdgPWN4p7ewicoC3
        subject_person_id: p_CiW5m44PgV5XK7vb3FfKfP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼（卒于783年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_5JYa3GDiSB3XTHtP2ZM8a8
          claim_id: c_zYaDkcqdgPWN4p7ewicoC3
          source_id: s_fjAtzfRPAEtivc4pm3aHLX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fjAtzfRPAEtivc4pm3aHLX
            source_type: api_record
            title: 维基数据：王沼（Q45662809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662809
            external_identifier: Q45662809
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_Z9QjzPmRF7GXkhhmgc10Kz
          claim_id: c_zYaDkcqdgPWN4p7ewicoC3
          source_id: s_vcUXtN2UDj24T6bxsVkoSD
          stance: supports
          locator: CBDB:175491
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vcUXtN2UDj24T6bxsVkoSD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沼（175491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175491&o=json
            external_identifier: CBDB:175491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rYNs3a4z9NGjuGvBkkkC7A
        subject_person_id: p_CiW5m44PgV5XK7vb3FfKfP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nh8pxjpryQhvrz2uw3NweJ
          claim_id: c_rYNs3a4z9NGjuGvBkkkC7A
          source_id: s_fjAtzfRPAEtivc4pm3aHLX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fjAtzfRPAEtivc4pm3aHLX
            source_type: api_record
            title: 维基数据：王沼（Q45662809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662809
            external_identifier: Q45662809
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o8TiinJ7ta9C8RFeG36FBe
        subject_person_id: p_CiW5m44PgV5XK7vb3FfKfP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bQKm3BHEz99V3dHVCKJLU5
          claim_id: c_o8TiinJ7ta9C8RFeG36FBe
          source_id: s_vcUXtN2UDj24T6bxsVkoSD
          stance: supports
          locator: Q45662809
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_w4oggE28Np7nrqw3USQhDM
          claim_id: c_o8TiinJ7ta9C8RFeG36FBe
          source_id: s_fjAtzfRPAEtivc4pm3aHLX
          stance: supports
          locator: Q45662809
          quotation: null
          interpretation_note: null
          source:
            id: s_fjAtzfRPAEtivc4pm3aHLX
            source_type: api_record
            title: 维基数据：王沼（Q45662809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662809
            external_identifier: Q45662809
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LZa9Jy1zwQwRW8J2AssJdr
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CiW5m44PgV5XK7vb3FfKfP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PNNhSA75FUZkWDSRYsHufV
          claim_id: c_LZa9Jy1zwQwRW8J2AssJdr
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_nB16U2nhz9j6YJvQSAZzMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俌（175453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json
            external_identifier: CBDB:175453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.181Z
            metadata_json: null
        - id: cs_TuGE93tP6NfBDQj8ab5P7d
          claim_id: c_LZa9Jy1zwQwRW8J2AssJdr
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vyWmh7JBAZcLjsXumeRUjc
            source_type: api_record
            title: 维基数据：王俌（Q45660547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660547
            external_identifier: Q45660547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%8C_(%E5%94%90%E6%9C%9D)
        - id: cs_bENDCWHkL4eviaYyASpZtN
          claim_id: c_LZa9Jy1zwQwRW8J2AssJdr
          source_id: s_fjAtzfRPAEtivc4pm3aHLX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fjAtzfRPAEtivc4pm3aHLX
            source_type: api_record
            title: 维基数据：王沼（Q45662809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662809
            external_identifier: Q45662809
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_U2kNAJywJHmQtTPUEJZwp6
          claim_id: c_LZa9Jy1zwQwRW8J2AssJdr
          source_id: s_vcUXtN2UDj24T6bxsVkoSD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_vcUXtN2UDj24T6bxsVkoSD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沼（175491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175491&o=json
            external_identifier: CBDB:175491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.839Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_HGoyumbqidGzHpRFhbq2B3
        subject_person_id: p_CiW5m44PgV5XK7vb3FfKfP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EYW6gyj2Ujggu9uHBbXHKa
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_fjAtzfRPAEtivc4pm3aHLX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fjAtzfRPAEtivc4pm3aHLX
            source_type: api_record
            title: 维基数据：王沼（Q45662809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662809
            external_identifier: Q45662809
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_WhcxxYq5UD1xPgoSeBJHGf
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_vcUXtN2UDj24T6bxsVkoSD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_vcUXtN2UDj24T6bxsVkoSD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沼（175491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175491&o=json
            external_identifier: CBDB:175491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.839Z
            metadata_json: null
        - id: cs_7Wi6zwaRm1gJVv2wz2137o
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_XPeSFX5LogGNm9qx1p46Cd
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
      object_person:
        id: p_SDFpyQ9WQCR839CKSQL9E1
        status: active
        display_name: 王鲁卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沼（卒于783年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175491） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王沼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_SDFpyQ9WQCR839CKSQL9E1 | 王鲁卿 | accepted |

## 外部来源

- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王鲁卿（Q45662864）](https://www.wikidata.org/wiki/Q45662864)
- [维基数据：王沼（Q45662809）](https://www.wikidata.org/wiki/Q45662809)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王魯卿（175492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json)
- [CBDB 中国历代人物传记资料库：王沼（175491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175491&o=json)
